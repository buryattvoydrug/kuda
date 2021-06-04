import React from 'react'

import '../../scss/Components/Single/PlacesHead.scss'

function PlaceHead({place}) {
  return (
    <>
      <section className="places-head">
            <div className="top">
              <span className="category">Рестораны</span>
              <span className="date">21 мая 2021</span>
            </div>
            <div className="head-block">
              <div className="col">
                <div className="item-info">
                  <h3 className="item__title">{place.acf["place-name"]}</h3>
                  <div className="address">
                    <img src="/images/pin.svg" alt="" className="pin" />
                    <span className="address__text">{place.acf["place-address"]}</span>
                  </div>
                  <div className="place-buttons">
                    <button className="map__button">
                      <img src="/images/tomap.png" alt="" />
                      <span>Как добраться?</span>
                    </button>
                    <button className="fave__button">
                      <img src="/images/fave.svg" alt="" />
                    </button>
                  </div>
                </div>
                <img className="cafe-item__img" src={place.acf["main-image"]} alt="" />
              </div>
              <div className="col place-text">
                <p className="head__text">{place.acf["place-text"]}</p>
                <p className="accent__text">{place.acf["accent-place-text"]}</p>
              </div>
            </div>
          </section>
    </>
  )
}

export default PlaceHead
