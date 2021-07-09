import React from 'react'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Share from '../Components/Share';
import CornerItem from '../Components/Single/CornerItem';
import SingleBottom from '../Components/Single/SingleBottom';
import SingleHead from '../Components/Single/SingleHead';
import { fetchFoodcorts } from '../redux/actions/foodcorts';
import { motion } from 'framer-motion';
import {Link as ScrolLink} from 'react-scroll';

import '../scss/Pages/Foodcort.scss'
import '../scss/Pages/Single.scss'
import PageNotFound from './PageNotFound';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


function Foodcort({map}) {
  const windowWidth = Dimensions.get('window').width;
  const isMobile = (windowWidth<1280) || map

  window.scrollTo(0, 0)

  const dispatch = useDispatch();
  const foodcorts=useSelector(({foodcorts})=>foodcorts.foodcorts);
  const isLoaded=useSelector(({foodcorts})=>foodcorts.isLoaded);
  React.useEffect(()=>{
    if(!isLoaded){
      dispatch(fetchFoodcorts());
    }
  },[isLoaded,dispatch]);
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

  const location = useLocation();
  const foodcortLocation=location.pathname.split('/')
  const foodcortNumber=foodcortLocation[foodcortLocation.length-1]
  const foodcort=foodcorts.find((item)=>(item.id==foodcortNumber))
  
  // console.log(foodcort)
  return (
    <>
    {map? null:<Header/>}
    <div className="wrapper">
    {foodcort===undefined? <PageNotFound/>: 

      <section className="single-page page">
        <div className="container">
      { foodcort ? (
          <motion.div initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}>
          <SingleHead date={foodcort.date.split('-')} post={foodcort} corners/>
          <section className="corners-page">
            <h2 className="corners__title">Корнеры</h2>
            <div className="corners">
              <CornerItem address={foodcort.acf["cafe-item-address"]} data={foodcort.acf.corners}/>
            </div>
          </section>
          <SingleBottom map={map} author={foodcort.acf["post-author"].data.display_name} post={foodcort} />
          </motion.div>
      ):""}
      {isMobile? 
          <>
            <Share/>
          </>
          :''}
        </div>
        {isMobile? null:
          <div className="sidebar-container">
            <div className="right-banner"></div>
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
      {map?null:<Footer/>}
    </div>
    
    </>
  )
}

export default Foodcort
