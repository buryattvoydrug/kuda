import axios from 'axios';
import React from 'react'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CafeItem from '../Components/CafeItem';
import Random from '../Components/Random';
import Share from '../Components/Share';
import NewsItem from '../Components/Single/NewsItem';
import SocialLinks from '../Components/SocialLinks';
import { fetchNews, setVisibleNews } from '../redux/actions/news';

import '../scss/Pages/BlogList.scss'

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


function BlogList() {

  const dispatch = useDispatch();

  const news=useSelector(({news})=>news.news);
  const visibleNews=useSelector(({news})=>news.visibleNews);
  const isLoadedNews=useSelector(({news})=>news.isLoaded);

  // React.useEffect(()=>{
  //   dispatch(fetchNews());
  // },[dispatch]);
  console.log(news)
  return (
    <>
      <div className="blog-page page">
        <div className="container">
      { isLoadedNews ? (

          <>
          <div className="category-type">
            <h2 className="category__title">Блог</h2>
            {isMobile? null :
            <div className="categories">
              <span className="categorie__name active_name">Все</span>
              <span className="categorie__name">Тег1</span>
              <span className="categorie__name">Проект</span>
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
          
          <div className="items-list blog-list">
          {isLoadedNews? 
              news.length? (news.slice(0, visibleNews).map((newsitem,index)=>(
                <NewsItem key={index} post={newsitem}/>
              ))):''
          :''}
          </div>
          {visibleNews < news.length &&
             <button className="button load-more" onClick={()=>(dispatch(setVisibleNews()))} type="button">Загрузить ещё</button>
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

export default BlogList
