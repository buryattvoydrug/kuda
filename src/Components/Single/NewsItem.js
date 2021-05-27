import React from 'react'

import '../../scss/Components/Single/NewsItem.scss'

function NewsItem() {
  return (
    <>
      <div className="news__item">
          <div className="news-top">
            <div className="logo">куда <strong>пойдём</strong>?</div>
            <div className="project">Экология</div>
          </div>
          <img src="images/news.png" alt="" className="news__img"/>
          <h1 className="news__title">10 лучших эко-ярмарок</h1>
          <span className="news__text">Собрали для вас лучшие места для экологичного отдыха и покупок.</span>
        </div>
    </>
  )
}

export default NewsItem
