import React from 'react'
import { Link } from 'react-router-dom'

import '../scss/Components/CafeItem.scss'

function CafeItem({wide,type,post}) {
  const price=Number(post.acf["cafe-item-prices"])

  return (
    <>
      <Link to={type=="Фудкорт"? `/foodcort/${post.id}` : `/post/${post.id}`}  className={wide? "item cafe-item cafe-item-wide" : "item cafe-item"}>
        
        <img className="cafe-item__img" src={post.acf["cafe-item-main-img"]} alt="" />
        <div className="item-info">
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
          <h3 className="item__title">{post.title.rendered}</h3>
          <div className="address">
            <img src="/images/pin.svg" alt="" className="pin" />
            <span className="address__text">{post.acf["cafe-item-address"]}</span>
          </div>
          <button className="fave__button">
            <img src="/images/fave.svg" alt="" />
          </button>
        </div>
      </Link>
    </>
  )
}

export default CafeItem
