import React from 'react'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Random from '../Components/Random';
import Share from '../Components/Share';
import Maps from '../Components/Maps';
import Nearby from '../Components/Single/Nearby';
import { fetchRandom } from '../redux/actions/random';
import { motion } from 'framer-motion';
import PageNotFound from './PageNotFound';
import {Link as ScrolLink} from 'react-scroll';
import renderHTML from "react-render-html";

import '../scss/Pages/Routes.scss'
import SingleHead from '../Components/Single/SingleHead';


const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


function Place({top,item,index,length,map}){
  const windowWidth = Dimensions.get('window').width;
  const isMobile = (windowWidth<1280) || map
  return (
    <>
      <div className={top? "place__item top_place__item":"place__item"}>
      {isMobile?
      <img src="/images/m-top-line.svg" alt="" className="m-top-line" />
      :
      <>
      {top?
      null
      :
      <>
      
      {length===index+1 || (length%2===0 && length===index)? 
        <img src="/images/d-top-line2.svg" alt="" className="top-line2" />
      : <img src="/images/d-top-line.svg" alt="" className="top-line" />} 
      {length===index+1 || length-3===index || (length%2===0 && (length===index || length-2===index))? null:<img src="/images/d-bottom-line.svg" alt="" className="bottom-line" />}
      
      </>}
      </>
      }
      
        <div className="place-block">
          <span className="place__number">{index+1}</span>
          <p className="place__text">{renderHTML(item.text_place)}</p>
        </div>
        <img src={item.img_place   } alt="" className="place__img" />
      </div>
    </>
  )
}
 

function Routee({map}) {
  const windowWidth = Dimensions.get('window').width;
  const isMobile = (windowWidth<1280) || map
  window.scrollTo(0, 0)

  const dispatch = useDispatch();

  const routes=useSelector(({random})=>random.routes);
  const isLoadedRoutes=useSelector(({random})=>random.isLoadedRoutes);

  const location = useLocation();
  const postLocation=location.pathname.split('/')
  const postNumber=postLocation[postLocation.length-1]
  const route=routes.find((item)=>(item.id==postNumber))

  React.useEffect(()=>{
    if(!isLoadedRoutes){
      dispatch(fetchRandom());
    }
  },[isLoadedRoutes,dispatch]);
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2
    }
  };
  return (
    <>
    {route===undefined? <PageNotFound/>: 

      <section className="main-page route-page page">
        <div className="container">
        

      { isLoadedRoutes ? (

          <motion.div  initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}>
          {map? null : 
          <div className="map" id="map">
            <Maps center={route.acf.map.center} left={route.acf.map.left}
              right={route.acf.map.right} overlay={route.acf.map.overlay}
            />
          </div>}
          <SingleHead route date={route.date.split('-')} post={route}/>
          <div className="places">
            {Object.keys(route.acf.places).map((item,index)=>(
              <Place map={map} key={index} top={index%2!==0 && !isMobile} item={route.acf.places[item]} length={Object.keys(route.acf.places).length} index={index}/>

            ))}
          </div>
         
          <Nearby data={route.acf["places-nearby"]}/>

          </motion.div>
          
      ):""}
      {(isMobile)? 
          <>
            <div className="routes-bottom">
            <Random  map={map} single/>
            <Share/>
            </div>
          </>
          :''}
          </div>
          {isMobile? null:
          <div className="sidebar-container">
              <div div className="right-banner"></div>
              <Random map={map} />
              <Share/>
          </div>
        }
        <ScrolLink spy={true}
            smooth={true}
            offset={-75}
            duration= {500} className="to-random" to="random">
        <div className="to-random__button">
          <img src="/images/shuffle.svg" alt="" />
        </div>
      </ScrolLink>
      </section>}
    </>
  )
}

export default Routee
