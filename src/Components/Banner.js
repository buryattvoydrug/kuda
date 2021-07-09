import React from 'react'
import Random from '../Components/Random'
import {Link} from 'react-router-dom'

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
            <Link to="/map/" className="go-to-map__button">
              <span>Открыть карту</span>
              <img src="/images/tomap.png" alt="" />
            </Link>
        </section>
        <Random main/>
      </div>
    </>
  )
}

export default Banner
