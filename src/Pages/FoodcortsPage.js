import React from 'react'
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

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


function FoodcortsPage() {
  window.scrollTo(0, 0)

  const dispatch = useDispatch();

  const foodcorts=useSelector(({foodcorts})=>foodcorts.foodcorts);
  const visibleFoodcorts=useSelector(({foodcorts})=>foodcorts.visibleFoodcorts);
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
  const cart=localStorage.getItem('itemsCart')+''
  return (
    <>
    <Header/>
    <div className="wrapper">
    <div className="blog-page page">
        <div className="container">
      { isLoaded ? (

          <>
          <motion.div initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}>
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

export default FoodcortsPage

