import React from 'react'

import '../../scss/Components/Single/SingleHead.scss'
import Cornners from './Cornners'
import Menu from './Menu'
import renderHTML from "react-render-html";


function SingleHead({corners,post,date}) {
  console.log(post)

  const day=Number(date[2].slice(0,2))
  const month=Number(date[1])
  const year=Number(date[0])
  const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", 
            "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];


  const price=Number(post.acf["cafe-item-prices"])
  return (
    <>
      <section className="single-head">
            <div className="top">
              <span className="category">Рестораны</span>
              <span className="date">{day} {months[month-1]} {year}</span>
            </div>
            <div className="head-block">
              <div className="col cafe-item">
                <div className="item-info">
                  
                  <h3 className="item__title">{post.acf["cafe-item-title"]}</h3>
                  <div className="address">
                    <img src="/images/pin.svg" alt="" className="pin" />
                    <span className="address__text">{post.acf["cafe-item-address"]}</span>
                  </div>
                  <div className="prefs">
                    <div className="price">
                    { [...Array(price)].map((item, index) =>                       
                    <span className="active_price" key={index}><img src="/images/rub.svg" alt=""/></span>
                    ) }
                    { [...Array(5-price)].map((item, index) =>                       
                    <span key={index}><img src="/images/rub.svg" alt=""/></span>
                    ) }
                    </div>
                    {post.acf["cafe-item-vegan"]? 
                    <img src="/images/vegan.svg" alt="" className="vegan-icon" />
                    : null}
                    
                  </div>
                  <button className="fave__button">
                    <img src="/images/fave.svg" alt="" />
                  </button>
                </div>
                <img className="cafe-item__img" src={post.acf["cafe-item-main-img"]} alt="" />
              </div>
              <div className="col">
                {corners? <Cornners post={post}/>:<Menu post={post}/>}
                <p className="head__text">{renderHTML(post.acf["cafe-item-head__text"])}</p>
                <p className="accent__text">{renderHTML(post.acf["cafe-item-accent__text"])}</p>
                <a href={post.acf["cafe-item-map__link"]} className="map__button">
                  <img src="/images/tomap.png" alt="" />
                  <span>Как добраться?</span>
                </a>
                {corners? null:
                  <a href={post.acf["cafe-item-site__link"]} className="web__button">
                  <img src="/images/web.png" alt="" />
                  <span>Сайт</span>
                </a>}
              </div>
            </div>
          </section>
    </>
  )
}

export default SingleHead
