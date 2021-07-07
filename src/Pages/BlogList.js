import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Random from '../Components/Random';
import Share from '../Components/Share';
import NewsItem from '../Components/Single/NewsItem';
import { fetchNews, setVisibleNews } from '../redux/actions/news';
import { motion } from 'framer-motion';

import '../scss/Pages/BlogList.scss'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


function BlogList() {
  window.scrollTo(0, 0)


  const dispatch = useDispatch();

  const news=useSelector(({news})=>news.news);
  const visibleNews=useSelector(({news})=>news.visibleNews);
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
  
  let categories=[]
  let categoriesNames=[]
  if(news){
    news.map((item,index)=>{categories.push((news[index].acf.type))})
    categories.map((item,index)=>{
      categories[index].map((i,ind)=>{categoriesNames.push(categories[index][ind].name)})
    })
  }
  const categoriesNamesUnique = categoriesNames.filter(function(item, pos) {
    return categoriesNames.indexOf(item) == pos;
  })
  const arrayCat=[]
  let tmp=[]
  categories.map((item,index)=>(
    tmp=[],
    item.map((i,ind)=>(
      tmp.push(i.name)
    )),
    arrayCat.push(tmp)
  ))
  const [active,setActive]=useState("Все")
  function setCategory(cat){
    setActive(cat)
  }
  const filtredItems=arrayCat.map((item,index)=>(
    item.findIndex(i=>i===active)
  ))
  let itemsToShow=[]
  if(isLoadedNews){
    itemsToShow=news.filter((item)=>(filtredItems[news.indexOf(item)]>=0))
  }

  // console.log(news,categoriesNamesUnique)
  return (
    <>
    <Header/>
     <div className="wrapper">
     <div className="blog-page page">
        <div className="container">
      { isLoadedNews ? (

          <>
          <motion.div initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}>
          <div className="category-type">
            <h2 className="category__title">Блог</h2>
            {isMobile? null :
            <div className="categories">
            {categoriesNamesUnique.map((item,index)=>(
              <span key={item.id} onClick={()=>setCategory(item)} className={active==item? "categorie__name active_name": "categorie__name"}>{item}</span>
            ))}
            </div>}
          </div>
          {isMobile?
            <div className="categories">
            {categoriesNamesUnique.map((item,index)=>(
              <span key={item.id} onClick={()=>setCategory(item)} className={active==item? "categorie__name active_name": "categorie__name"}>{item}</span>
            ))}
            </div>
          :null}
          
          <div className="items-list blog-list">
          {isLoadedNews? (itemsToShow.slice(0, visibleNews).map((item,index)=>(
            <NewsItem key={index} post={item}/>
                  ))):''}
          </div>
          {visibleNews < news.length &&
             <button className="button load-more" onClick={()=>(dispatch(setVisibleNews()))} type="button">Загрузить ещё</button>
          }
          </motion.div>
          {isMobile? <Random/> : null}
          </>

      ):""}

        </div>
        {isMobile? null:
          <div className="sidebar-container">
              <div div className="right-banner"></div>
              <Random/>
              <Share/>
          </div>
        }
      </div>
      <Footer/>
     </div>
    </>
  )
}

export default BlogList
