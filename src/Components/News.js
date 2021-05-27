import React from 'react'

import '../scss/Components/News.scss'
import NewsItem from './Single/NewsItem'

function News() {
  return (
    <>
      <section className="news">
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        </section>
      
    </>
  )
}

export default News
