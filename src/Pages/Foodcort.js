import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
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
import ToMapSingle from '../Components/ToMapSingle';
import { CSSTransition } from 'react-transition-group';


function Foodcort({map}) {
  const windowWidth = Dimensions.get('window').width;
  const isMobile = (windowWidth<1280) || map

  window.scrollTo(0, 0)
  if(document.querySelector('.map-content') && map){
    document.querySelector('.map-content').scrollTo(0,0)
  }
  function scrollToBottom(){
    document.querySelector('.map-content').scrollTo(0,100000)
  }
  const dispatch = useDispatch();
  const foodcorts=useSelector(({foodcorts})=>foodcorts.foodcorts);
  const isLoaded=useSelector(({foodcorts})=>foodcorts.isLoaded);
  React.useEffect(()=>{
    if(!isLoaded){
      dispatch(fetchFoodcorts());
    }
    if(isLoaded){
      setShowPost(true)
      setTimeout(()=>{
        setShowSidebar(true)
      },100)
    }
  },[isLoaded,dispatch]);
  const [showPosts,setShowPost]=useState(false)
  const [showSidebar,setShowSidebar]=useState(false)



  const location = useLocation();
  const foodcortLocation=location.pathname.split('/')
  const foodcortNumber=foodcortLocation[foodcortLocation.length-1]
  const foodcort=foodcorts.find((item)=>(item.id==foodcortNumber))
  
  // console.log(foodcort)
  return (
    <>
    {map?
      null
    :<Header/>}
    <div className="wrapper">
    {foodcort===undefined? <PageNotFound/>: 

      <section className="single-page page">
        <div className="container">
        <CSSTransition
                in={showPosts}
                timeout={3000}
                classNames="newstransition"
                unmountOnExit
              >
          <div>
          <SingleHead date={foodcort.date.split('-')} post={foodcort} corners map={map}/>
          <section className="corners-page">
            <h2 className="corners__title">Корнеры</h2>
            <div className="corners">
              <CornerItem address={foodcort.acf["cafe-item-address"]} data={foodcort.acf.corners}/>
            </div>
          </section>
          <SingleBottom map={map} author={foodcort.acf["post-author"].data.display_name} post={foodcort} />
          </div></CSSTransition>
          {isMobile? 
                  <CSSTransition
                in={showSidebar}
                timeout={1000}
                classNames="newstransition"
                unmountOnExit
              >
                <div>
                  <Share/>
                </div>
              </CSSTransition>
                 : null}
        </div>
        {isMobile? null:
          <div className="sidebar-container">
            <div className="right-banner"></div>
            <ToMapSingle location={location}/>
            <Share/>
          </div>
        }
        <ScrolLink spy={true}
            smooth={true}
            offset={-75}
            duration= {500} className="to-random" to="random">
        {map?
          <div onClick={()=>(scrollToBottom())} className="to-random__button">
            <img src="/images/shuffle.svg" alt="" />
          </div>:
        <div className="to-random__button">
          <img src="/images/shuffle.svg" alt="" />
        </div>}
      </ScrolLink>
      </section>}
      {map?
        <>{windowWidth<1280? <Footer/>:null}</>
      :<Footer/>}
    </div>
    
    </>
  )
}

export default Foodcort
