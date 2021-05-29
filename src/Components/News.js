import React from 'react'

import '../scss/Components/News.scss'
import NewsItem from './Single/NewsItem'

function News({news}) {
  return (
    <>
      <section className="news">
      {
        news.length? (news.map((newsitem,index)=>(
          <NewsItem key={index} post={newsitem}/>
        ))):''
      }
      </section>
      
    </>
  )
}

export default News
