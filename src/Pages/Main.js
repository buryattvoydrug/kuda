import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CafeItem from '../Components/CafeItem'
import News from '../Components/News'
import Random from '../Components/Random'
import Share from '../Components/Share'
import SocialLinks from '../Components/SocialLinks'
import { fetchFoodcorts, setVisibleFoodcorts } from '../redux/actions/foodcorts'
import { fetchNews } from '../redux/actions/news'
import { fetchPosts, setVisiblePosts } from '../redux/actions/posts'

import { motion } from 'framer-motion';

import '../scss/Pages/Main.scss'


const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


function Main() {
  window.scrollTo(0, 0)

  const dispatch = useDispatch();

  const posts=useSelector(({posts})=>posts.posts);
  const visiblePosts=useSelector(({posts})=>posts.visiblePosts);
  const isLoadedPosts=useSelector(({posts})=>posts.isLoaded);

  const foodcorts=useSelector(({foodcorts})=>foodcorts.foodcorts);
  const visibleFoodcorts=useSelector(({foodcorts})=>foodcorts.visibleFoodcorts);
  const isLoadedFoodcorts=useSelector(({foodcorts})=>foodcorts.isLoaded);

  const news=useSelector(({news})=>news.news);
  const visibleNews=useSelector(({news})=>news.visibleNews);
  const isLoadedNews=useSelector(({news})=>news.isLoaded);

  // console.log(isLoadedPosts)
  
    React.useEffect(()=>{
      // if(!(isLoadedPosts || isLoadedFoodcorts || isLoadedNews)){
        dispatch(fetchPosts());
        dispatch(fetchFoodcorts());
        dispatch(fetchNews());
      // } 
    },[dispatch]);
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
  const cart=localStorage.getItem('itemsCart')+''
  console.log(cart)
  return (
    <>
      <div className="main-page page">
        <div className="container">
          
          {isLoadedNews? 
          <motion.div initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}>
            <News count={visibleNews} news={news}/>
          </motion.div>
          :''}
          {isLoadedPosts? <motion.div 
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}>
          <div className="category-type">
            <h2 className="category__title">Заведения</h2>
            <Link to="/posts/" className="category">Показать все</Link>
          </div>
          
            <div className="items-list">
          {posts.length? (posts.slice(0, visiblePosts).map((item,index)=>(
                    <CafeItem toDelete={cart.includes('"id":'+item.id)} wide={isMobile? index%3===0: (index%9)%4===0} key={item.id} post={item}/>
                  ))):''}
          </div>
          
          
          {posts.length > visiblePosts &&
             <button className="button load-more" onClick={()=>(dispatch(setVisiblePosts()))} type="button">Загрузить ещё</button>
          }</motion.div>
          :''}
          {isLoadedFoodcorts? <motion.div initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}>
          <div className="category-type">
            <h2 className="category__title">Фудкорты</h2>
            <Link to="/foodcorts/" className="category">Показать все</Link>
          </div>
          
          <div className="items-list">
          {foodcorts.length? (foodcorts.slice(0, visibleFoodcorts).map((post,index)=>(
                    <CafeItem toDelete={cart.includes('"id":'+post.id)} type={"Фудкорт"} wide={isMobile? index%3===0: (index%9)%4===0} key={post.id} post={post}/>
                  ))):''}
          </div>
          {visibleFoodcorts < foodcorts.length &&
             <button className="button load-more" onClick={()=>(dispatch(setVisibleFoodcorts()))} type="button">Загрузить ещё</button>
          }
          </motion.div>
          : ''}
          {(isMobile)? 
          <>
            <Random/>
            <Share/>
          </>
          :''}
        </div>
        {isMobile? null:
          <div className="sidebar-container">
              <div div className="right-banner"></div>
              <Random/>
              <Share/>
          </div>
        }
      </div>
      
    </>
  )
}

export default Main
