import React from 'react'
import Random from '../Components/Random'

import '../scss/Components/Banner.scss'
function Banner() {
  return (
    <>
      <div className="banner">
        <section className="go-to-map">
            <h3 className="go-to-map__title">
              <strong>Найди</strong> место <strong>поблизости</strong>
            </h3>
            <img src="/images/couple.png" alt="" className="go-to-map__img" />
            <button className="go-to-map__button">
              <span>Открыть карту</span>
              <img src="/images/tomap.png" alt="" />
            </button>
        </section>
        <Random main/>
      </div>
    </>
  )
}

export default Banner
