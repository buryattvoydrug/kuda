import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {addPizzaToCart, removeCartItem} from '../redux/actions/cart'
import '../scss/Components/CafeItem.scss'

function CafeItem({wide,post,toDelete,isCart,map}) {
  const price=Number(post.acf["cafe-item-prices"])

    

  const [active,setActive]=useState(false)
  const [g,setG]=useState(true)

  
  let type=post.type
  if(map){
    type='map/'+type
  }
  return (
      <div className={wide? "item cafe-item cafe-item-wide" : "item cafe-item"}>
        <Link to={'/'+type+`/${post.id}`}>
          <img className="cafe-item__img" src={post.acf["cafe-item-main-img"]} alt="" />
        </Link>
        <div className="item-info">
        <div className="prefs">
                    <div className="price">
                    { [...Array(price)].map((item, index) =>                       
                    <span className="active_price" key={index}><img src={type==='routes'? "/images/people.svg":"/images/rub.svg"} alt=""/></span>
                    ) }
                    { [...Array(5-price)].map((item, index) =>                       
                    <span key={index}><img src={type==='routes'? "/images/people.svg":"/images/rub.svg"} alt=""/></span>
                    ) }
                    </div>
                    {post.acf["cafe-item-vegan"]? 
                    <img src={type==='routes'? "/images/bike.svg":"/images/vegan.svg"} alt="" className="vegan-icon" />
                    : null}
                    
                  </div>
          <Link to={'/'+type+`/${post.id}`}>
            <h3 className="item__title">{post.title.rendered}</h3>
          </Link>
          <div className="address">
            <img src="/images/pin.svg" alt="" className="pin" />
            <span className="address__text">{post.acf["cafe-item-address"]}</span>
          </div>

          {isCart?
            <button className="fave__button" onClick={removeCartItem(post)}>
            <img src="/images/fave_active.svg" alt="" />
          </button>
          :
          <button className="fave__button" onClick={toDelete? removeCartItem(post): addPizzaToCart(post)}>
            {toDelete? 
              <img onClick={()=>{setG(!g)}} src={g? "/images/fave_active.svg":"/images/fave.svg"} alt="" />
            : <img onClick={()=>setActive(!active)} src={active? "/images/fave_active.svg":"/images/fave.svg"} alt="" />}
          </button>}
        </div>
      </div>
  )
}

export default CafeItem
