import React from 'react'
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
  },[isLoadedNews,dispatch]);
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
  const newsLocation=location.pathname.split('/')
  const newsNumber=newsLocation[newsLocation.length-1]
  const newsitem=news.find((item)=>(item.id==newsNumber))



  // console.log(newsitem)
  return (
    <>
    {newsitem===undefined? <PageNotFound/>: 

      <section className="single-page single-blog page">
        <div className="container">
        {newsitem? (
          <motion.div  initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}>
          <NewsItem single post={newsitem}/>
         

          {renderHTML(newsitem.acf.body)}

          <SingleBottom author={newsitem.acf["news-author"].data.display_name} post={newsitem}/>
          {isMobile? 
          <Share wide/>
          : null
          }
          </motion.div>
          ):""}
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
    </>
  )
}

export default SingleBlog
