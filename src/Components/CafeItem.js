import React from 'react'

import '../scss/Components/CafeItem.scss'

function CafeItem({wide,type}) {
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
          <h3 className="item__title">Пицца 22 сантиметра сантиметра</h3>
          <div className="address">
            <img src="images/pin.svg" alt="" className="pin" />
            <span className="address__text">ул. Солянка, 1/2</span>
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
