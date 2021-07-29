import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CafeItem from '../Components/CafeItem';
import Random from '../Components/Random';
import Share from '../Components/Share';
import { fetchFoodcorts, setVisibleFoodcorts } from '../redux/actions/foodcorts';
import { motion } from 'framer-motion';

import '../scss/Pages/BlogList.scss'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../scss/Transitions.scss'
import { CSSTransition } from 'react-transition-group';
const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


function FoodcortsPage() {
  window.scrollTo(0, 0)

  const dispatch = useDispatch();

  const foodcorts=useSelector(({foodcorts})=>foodcorts.foodcorts);
  const visibleFoodcorts=useSelector(({foodcorts})=>foodcorts.visibleFoodcorts);
  const isLoaded=useSelector(({foodcorts})=>foodcorts.isLoaded);
  const [showPosts,setShowPost]=useState(false)

  React.useEffect(()=>{
    if(!isLoaded){
      dispatch(fetchFoodcorts());
    }
  },[dispatch]);
  React.useEffect(()=>{
    if(isLoaded){
      setShowPost(true)
    }
    console.log(isLoaded,showPosts)
  })
  
  const cart=localStorage.getItem('itemsCart')+''
  return (
    <>
    <Header/>
    <div className="wrapper">
    <div className="blog-page page">
        <div className="container">
      
          <CSSTransition
                in={showPosts}
                out={showPosts}
                timeout={1000}
                classNames="newstransition"
                unmountOnExit
              >
                <div>
                <div className="category-type">
                  <h2 className="category__title">Фудкорты</h2>
                </div>

                
                <div className="items-list">
                {foodcorts.length? (foodcorts.slice(0, visibleFoodcorts).map((post,index)=>(
                          <CafeItem toDelete={cart.includes('"id":'+post.id)} type={"Фудкорт"} wide={isMobile? index%3===0: (index%9)%4===0} key={post.id} post={post}/>
                        ))):''}
                </div>
                {visibleFoodcorts < foodcorts.length &&
                  <button className="button load-more" onClick={()=>(dispatch(setVisibleFoodcorts()))} type="button">Загрузить ещё</button>
                }
                {isMobile? <Random/> : null}
                </div>
              </CSSTransition>
          

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

export default FoodcortsPage

