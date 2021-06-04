import React from 'react'
import { Dimensions } from 'react-native';
import { Link } from 'react-router-dom';

import '../scss/Components/News.scss'
import NewsItem from './Single/NewsItem'

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)

function scrollLeft(element, change, duration) {
  var start = element.scrollLeft,
      currentTime = 0,
      increment = 20;
      
      console.log(start)
      
  var animateScroll = function(){        
      currentTime += increment;
      var val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollLeft = val;
      if(currentTime < duration) {
          setTimeout(animateScroll, increment);
      }
  };
  animateScroll();
}
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};
function News({count,news}) {
  return (
    <>
      <div className="news-container">
        <section id="content" className="news">
        {
          news.length? (news.slice(0, count).map((newsitem,index)=>(
            <NewsItem key={index} post={newsitem}/>
          ))):''
        }
        <Link to="/blog/" className="news-load-more">Смотреть еще</Link>
        </section>
        {isMobile? null:
        <>
        <button className="news__button left-news__button"   onClick={()=>scrollLeft(document.getElementById('content'),-300, 200)}>
          <img src="/images/arrow.svg" alt="" />
        </button>
        <button className="news__button right-news__button"   onClick={()=>scrollLeft(document.getElementById('content'),300, 200)}>
          <img src="/images/arrow.svg" alt="" />
        </button>
        </>}
      </div>
    </>
  )
}

export default News
