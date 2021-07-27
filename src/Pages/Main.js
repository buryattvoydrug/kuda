import React from 'react'
import { Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CafeItem from '../Components/CafeItem'
import News from '../Components/News'
import Random from '../Components/Random'
import Share from '../Components/Share'
import { fetchFoodcorts, setVisibleFoodcorts } from '../redux/actions/foodcorts'
import { fetchNews } from '../redux/actions/news'
import { fetchPosts, setVisiblePosts } from '../redux/actions/posts'

import { motion } from 'framer-motion';

import '../scss/Pages/Main.scss'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


function Main() {
  // window.scrollTo(0, 0)

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

  
    React.useEffect(()=>{
      if(!(isLoadedPosts && isLoadedFoodcorts && isLoadedNews)){
        dispatch(fetchPosts());
        dispatch(fetchFoodcorts());
        dispatch(fetchNews());
      } 
    },[dispatch]);
  // console.log(posts,foodcorts,news) 
  const cart=localStorage.getItem('itemsCart')+''
  return (
    <>
      <Header/>
      <div className="wrapper">
      <div className="main-page page">
        <div className="container">
          
          {news.length? 
          <div>
            <News count={visibleNews} news={news}/>
          </div>
          :''}
          {posts.length? <div 
              >
              <Banner/>
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
          }</div>
          :''}
          {foodcorts.length? <div>
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
          </div>
          : ''}
          {(isMobile)? 
          <>
            {/* <Random/> */}
            <Share/>
          </>
          :''}
        </div>
        {isMobile? null:
          <div className="sidebar-container">
              <div div className="right-banner"></div>
              <Share/>
          </div>
        }
      </div>
      <Footer/>
      </div>
    </>
  )
}

export default Main
