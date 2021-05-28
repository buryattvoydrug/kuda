import React from 'react'

import '../../scss/Components/Single/SingleHead.scss'
import Cornners from './Cornners'
import Menu from './Menu'


function SingleHead({corners,post}) {
  console.log(post)
  return (
    <>
      <section className="single-head">
            <div className="top">
              <span className="category">Рестораны</span>
              <span className="date">21 мая 2021</span>
            </div>
            <div className="head-block">
              <div className="col cafe-item">
                <div className="item-info">
                  
                  <h3 className="item__title">{post.acf["cafe-item-title"]}</h3>
                  <div className="address">
                    <img src="images/pin.svg" alt="" className="pin" />
                    <span className="address__text">{post.acf["cafe-item-address"]}</span>
                  </div>
                  <div className="prefs">
                    <div className="price">
                      <span><img src="images/rub.svg" alt=""/></span>
                      <span><img src="images/rub.svg" alt=""/></span>
                      <span><img src="images/rub.svg" alt=""/></span>
                      <span><img src="images/rub.svg" alt=""/></span>
                      <span><img src="images/rub.svg" alt=""/></span>
                    </div>
                    <img src="images/vegan.svg" alt="" className="vegan-icon" />
                  </div>
                  <button className="fave__button">
                    <img src="images/fave.svg" alt="" />
                  </button>
                </div>
                <img className="cafe-item__img" src={post.acf["cafe-item-main-img"]} alt="" />
              </div>
              <div className="col">
                {corners? <Cornners/>:<Menu post={post}/>}
                <p className="head__text">{post.acf["cafe-item-head__text"]}</p>
                <p className="accent__text">{post.acf["cafe-item-accent__text"]}</p>
                <button className="map__button">
                  <img src="images/tomap.png" alt="" />
                  <span>Как добраться?</span>
                </button>
                <a href={post.acf["cafe-item-site__link"]} className="web__button">
                  <img src="images/web.png" alt="" />
                  <span>Сайт</span>
                </a>
              </div>
            </div>
          </section>
    </>
  )
}

export default SingleHead
