import React, { useRef, useState } from 'react'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Share from '../Components/Share';
import SingleBottom from '../Components/Single/SingleBottom';
import SingleHead from '../Components/Single/SingleHead';
import SlimBlock from '../Components/Single/SlimBlock';
import WideBlock from '../Components/Single/WideBlock';
import { fetchPosts } from '../redux/actions/posts';
import { motion } from 'framer-motion';
import {Link as ScrolLink} from 'react-scroll';

import '../scss/Pages/Single.scss'
import PageNotFound from './PageNotFound';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ToMapSingle from '../Components/ToMapSingle';
import { CSSTransition } from 'react-transition-group';
import MetaDecorator from '../Components/MetaDecorator';






function Single({map}) {
  const windowWidth = Dimensions.get('window').width;
  const isMobile = (windowWidth<1280) || map
  window.scrollTo(0, 0)
  if(document.querySelector('.map-content') && map){
    document.querySelector('.map-content').scrollTo(0,0)
  }
  // window.onload=function(){
  //   if(map){
  //     console.log('reload')
  //     document.querySelector('.map-content').scrollTo(0,0)
  //   }
  // }
  function scrollToBottom(){
    document.querySelector('.map-content').scrollTo(0,100000)
  }

  const dispatch = useDispatch();
  const items=useSelector(({posts})=>posts.posts);
  const isLoaded=useSelector(({posts})=>posts.isLoaded);


  const location = useLocation();
  const postLocation=location.pathname.split('/')
  const postNumber=postLocation[postLocation.length-1]
  const post=items.find((item)=>(item.id==postNumber))

  // console.log(post)
  const [showPosts,setShowPost]=useState(false)
  const [showSidebar,setShowSidebar]=useState(false)
  
  React.useEffect(()=>{
    if(!isLoaded){
      dispatch(fetchPosts());
    }
  },[dispatch]);
  React.useEffect(()=>{
    // console.log(isLoaded)

    // if(isLoaded){
    // console.log("loaded")

      setShowPost(true)
      setTimeout(()=>{
        setShowSidebar(true)
      },100)
    // }
  })
  return (
    <>
    {map? 
    null

    :<Header/>}
    <div className="wrapper">
    {post===undefined? <PageNotFound/>: 
    
      <section className="single-page page">

      <div className="container">
      
        <CSSTransition
                in={showPosts}
                timeout={3000}
                classNames="newstransition"
                unmountOnExit
              >
          <div >
          <SingleHead  location={location} map={map} date={post.date.split('-')} post={post}/>
          <WideBlock img={post.acf["cafe-item-img1"]} text={post.acf["cafe-item-text1"]} />
          <SlimBlock map post={post}/>
          <SingleBottom map={map} author={post.acf["post-author"].data.display_name} post={post}/>
          </div>
          </CSSTransition>
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
      
      </section>
    }
    {map?
      <>{windowWidth<1280? <Footer/>:null}</>
    :<Footer/>}
    </div>
    
    </>
  )
}
export default Single