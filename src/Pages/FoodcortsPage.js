import React from 'react'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CafeItem from '../Components/CafeItem';
import Random from '../Components/Random';
import Share from '../Components/Share';
import NewsItem from '../Components/Single/NewsItem';
import SocialLinks from '../Components/SocialLinks';
import { fetchFoodcorts, setVisibleFoodcorts } from '../redux/actions/foodcorts';

import '../scss/Pages/BlogList.scss'

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
  },[dispatch]);

  return (
    <>
      <div className="blog-page page">
        <div className="container">
      { isLoaded ? (

          <>
          <div className="category-type">
            <h2 className="category__title">Фудкорты</h2>
            {isMobile? null :
            <div className="categories">
              <span className="categorie__name active_name">Все</span>
              <span className="categorie__name">Пицца</span>
              <span className="categorie__name">Суши</span>
              <span className="categorie__name">Говно</span>
              <span className="categorie__name">Жопа</span>
            </div>}
          </div>
          {isMobile?
              <div className="categories">
                <span className="categorie__name active_name">Все</span>
                <span className="categorie__name">Тег1</span>
                <span className="categorie__name">Проект</span>
                <span className="categorie__name">Говно</span>
                <span className="categorie__name">Жопа</span>
              </div>
          :null}
          
          <div className="items-list">
          {foodcorts.length? (foodcorts.slice(0, visibleFoodcorts).map((post,index)=>(
                    <CafeItem type={"Фудкорт"} wide={isMobile? index%3===0: (index%9)%4===0} key={post.id} post={post}/>
                  ))):''}
          </div>
          {visibleFoodcorts < foodcorts.length &&
             <button className="button load-more" onClick={()=>(dispatch(setVisibleFoodcorts()))} type="button">Загрузить ещё</button>
          }
          {isMobile? <Random/> : null}
          </>
      ):""}

        </div>
        {isMobile? null:
          <div className="sidebar-container">
            <div className="right-sidebar-container">
              <Random/>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default FoodcortsPage

