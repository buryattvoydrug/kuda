import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Share from '../Components/Share';
import NewsItem from '../Components/Single/NewsItem';
import SingleBottom from '../Components/Single/SingleBottom';
import { fetchNews } from '../redux/actions/news';
import { motion } from 'framer-motion';
import renderHTML from "react-render-html";
import '../scss/Components/Single/SingleBlog.scss'
import PageNotFound from './PageNotFound';
import {Link as ScrolLink} from 'react-scroll';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import ToMapSingle from '../Components/ToMapSingle';
import { CSSTransition } from 'react-transition-group';



const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


function SingleBlog() {
  
  window.scrollTo(0, 0)
  const dispatch = useDispatch();
  const news=useSelector(({news})=>news.news);
  const isLoadedNews=useSelector(({news})=>news.isLoaded);

  React.useEffect(()=>{
    if(!isLoadedNews){
      dispatch(fetchNews());
    }
  },[dispatch]);
  const [showPosts,setShowPost]=useState(false)
  const [showSidebar,setShowSidebar]=useState(false)

  React.useEffect(()=>{
      setShowPost(true)
      setTimeout(()=>{
        setShowSidebar(true)
      },100)
    // }
  })

  const location = useLocation();
  const newsLocation=location.pathname.split('/')
  const newsNumber=newsLocation[newsLocation.length-1]
  const newsitem=news.find((item)=>(item.id==newsNumber))
  
  // console.log(newsitem)
  return (
    <>
    <Header/>
    <div className="wrapper">
    {newsitem===undefined? <PageNotFound/>: 

<section className="single-page single-blog page">
  <div className="container">
    <CSSTransition
                in={showPosts}
                timeout={3000}
                classNames="newstransition"
                unmountOnExit
              >
          <div >
    <NewsItem single post={newsitem}/>
   

    {renderHTML(newsitem.acf.body)}

    <SingleBottom author={newsitem.acf["news-author"].data.display_name} post={newsitem}/>
    {isMobile? 
      <CSSTransition
                in={showSidebar}
                timeout={1000}
                classNames="newstransition"
                unmountOnExit
              >
                <div>
      <Share wide/>
    </div>
    </CSSTransition>
    : null
    }
    </div>
              </CSSTransition>
  </div>
  {isMobile? null:
    <div className="sidebar-container">
      <div className="right-banner"></div>
      <ToMapSingle blog/>
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
    <Footer/>

    </div>
    </>
  )
}

export default SingleBlog
