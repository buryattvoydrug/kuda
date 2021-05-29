import React from 'react'
import { Link } from 'react-router-dom'

import '../../scss/Components/Single/NewsItem.scss'

function NewsItem({post}) {
  const isDark=post.acf["black-text"]

  return (
    <>
      <Link to={`/news/${post.id}`} className={isDark? "news__item dark_news":"news__item"}>
          <div className="news-top">
            <div className="logo">куда <strong>пойдём</strong>?</div>
            <div className="project">{post.acf.project}</div>
          </div>
          <img src={post.acf.news__img} alt="" className="news__img"/>
          <h1 className="news__title">{post.acf.news__title}</h1>
          <span className="news__text">{post.acf.news__text}</span>
        </Link>
    </>
  )
}

export default NewsItem
