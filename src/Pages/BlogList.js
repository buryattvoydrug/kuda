import React from 'react'
import { Dimensions } from 'react-native';
import CafeItem from '../Components/CafeItem';
import Random from '../Components/Random';
import Share from '../Components/Share';
import NewsItem from '../Components/Single/NewsItem';
import SocialLinks from '../Components/SocialLinks';

import '../scss/Pages/BlogList.scss'

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


function BlogList() {
  return (
    <>
      <div className="main-page page">
        <div className="container">
          <div className="main-banner"></div>
          <div className="categories">
            <span className="categorie__name active_name">Все</span>
            <span className="categorie__name">Концерты</span>
            <span className="categorie__name">Фудкорты</span>
            <span className="categorie__name">Кофе</span>
            <span className="categorie__name">Секонды</span>
          </div>
          <div className="items-list blog-list">
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
          </div>
          <button className="button load-more">Загрузить ещё</button>
          {isMobile? <Random/> : null}
        </div>
        {isMobile? null:
          <div className="sidebar-container">
            <Random/>
            <SocialLinks/>
            <div className="right-banner"></div>
          </div>
        }
      </div>
    </>
  )
}

export default BlogList
