import React from 'react'
import { Link } from 'react-router-dom'

import '../../scss/Components/Single/NewsItem.scss'

function NewsItem({post,single}) {
  const isDark=post.acf["black-text"]


  const day=Number(post.date.split('-')[2].slice(0,2))
  const month=Number(post.date.split('-')[1])
  const year=Number(post.date.split('-')[0])
  const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", 
            "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];





  return (
    <>
      <Link to={`/news/${post.id}`} className={isDark? "news__item dark_news":"news__item"}>
          
          <div className="news-top">
          {single?
          <>
          <div className="type">{post.acf.type[0].name}</div>
          <span className="date">{day} {months[month-1]} {year}</span>
          
          </>
          :
            <>
            <div className="logo">куда <strong>пойдём</strong>?</div>
            {
              post.acf.project?
              <div className="project">{post.acf.project}</div>
              : null
            }
            </>
            }
          </div>
          <img src={post.acf.news__img} alt="" className="news__img"/>
          <h1 className="news__title">{post.acf.news__title}</h1>
          {single? <span className="news__text">{post.acf.news__text}</span> : null}
        </Link>
    </>
  )
}

export default NewsItem
