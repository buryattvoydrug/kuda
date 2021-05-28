import React from 'react'
import { Link } from 'react-router-dom'

import '../scss/Components/CafeItem.scss'

function CafeItem({wide,type,post}) {
  return (
    <>
      <div className={wide? "item cafe-item cafe-item-wide" : "item cafe-item"}>
        {type? 
        <span className="type">{type}</span>
        : null}
        <img className="cafe-item__img" src="images/item.jpg" alt="" />
        <div className="item-info">
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
          <Link to={`/post/${post.id}`} className="item__title">{post.title.rendered}</Link>
          <div className="address">
            <img src="images/pin.svg" alt="" className="pin" />
            <span className="address__text">{post.acf["cafe-item-address"]}</span>
          </div>
          <button className="fave__button">
            <img src="images/fave.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  )
}

export default CafeItem
