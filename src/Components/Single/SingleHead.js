import React, { useState } from 'react'

import '../../scss/Components/Single/SingleHead.scss'
import Cornners from './Cornners'
import Menu from './Menu'
import renderHTML from "react-render-html";
import { addPizzaToCart, removeCartItem } from '../../redux/actions/cart';
import { Dimensions } from 'react-native';

function SingleHead({corners,post,date,route,map}) {
  const windowWidth = Dimensions.get('window').width;
  const isMobile = (windowWidth<1280) || map
  // console.log(post)

  const day=Number(date[2].slice(0,2))
  const month=Number(date[1])
  const year=Number(date[0])
  const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", 
            "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
  const titles=[{name:"Заведения",type:'post'},
            {name:"Маршруты",type:'routes'},
           {name:"Фудкорт",type:'foodcorts'}]

  const price=Number(post.acf["cafe-item-prices"])

  const cart=localStorage.getItem('itemsCart')+''
  const [g,setG]=useState(cart.includes('"id":'+post.id))
  const activeTitle=titles.find((item)=>(item.type==post.type)).name
  return (
    <>
      <section className="single-head">
            <div className="top">
              <span className="category">{activeTitle}</span>
              <span className="date">{day} {months[month-1]} {year}</span>
            </div>
            <div className="head-block">
            {isMobile? '':
            <div className="item-links">
            <button onClick={g? removeCartItem(post): addPizzaToCart(post)} className="fave__button">
                    <img onClick={()=>{setG(!g)}} src={g? "/images/fave_active.svg":"/images/fave.svg"} alt="" />
                  </button>
                  <a href={post.acf["cafe-item-map__link"]} className="map__button">
                      <img src="/images/tomap.png" alt="" />
                      {/* <span>Как добраться?</span> */}
                    </a>
                    {corners ||post.type=='routes'? null:
                  <a href={post.acf["cafe-item-site__link"]} className="web__button">
                  <img src="/images/web.png" alt="" />
                  {/* <span>Сайт</span> */}
                </a>}
            </div>}
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
                    <span className="active_price" key={index}><img src={route? "/images/people.svg":"/images/rub.svg"} alt=""/></span>
                    ) }
                    { [...Array(5-price)].map((item, index) =>                       
                    <span key={index}><img src={route? "/images/people.svg":"/images/rub.svg"} alt=""/></span>
                    ) }
                    </div>
                    {post.acf["cafe-item-vegan"]? 
                    <img src={route? "/images/bike.svg":"/images/vegan.svg"} alt="" className="vegan-icon" />
                    : null}
                    
                  </div>
                  {isMobile? 
                  <><button onClick={g? removeCartItem(post): addPizzaToCart(post)} className="fave__button">
                    <img onClick={()=>{setG(!g)}} src={g? "/images/fave_active.svg":"/images/fave.svg"} alt="" />
                  </button>
                  <a href={post.acf["cafe-item-map__link"]} className="map__button">
                      <img src="/images/tomap.png" alt="" />
                      {/* <span>Как добраться?</span> */}
                    </a>
                    {corners? null:
                  <a href={post.acf["cafe-item-site__link"]} className="web__button">
                  <img src="/images/web.png" alt="" />
                  {/* <span>Сайт</span> */}
                </a>}
                  

                  </>
                  :null}



                </div>
                {route? null:
                <img className="cafe-item__img" src={post.acf["cafe-item-main-img"]} alt="" />}
              </div>
              {route? null:<div className="col">
                {corners? <Cornners post={post}/>:<Menu post={post}/>}
                <p className="head__text">{renderHTML(post.acf["cafe-item-head__text"])}</p>
                <p className="accent__text">{renderHTML(post.acf["cafe-item-accent__text"])}</p>
                {/* <a href={post.acf["cafe-item-map__link"]} className="map__button">
                  <img src="/images/tomap.png" alt="" />
                </a> */}
                
              </div>}
            </div>
          </section>
    </>
  )
}

export default SingleHead
