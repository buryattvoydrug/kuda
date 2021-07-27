import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/Components/Banner.scss'

export default function ToMapSingle({location,blog}) {
  return (
    <>
      <div className="banner to-map-single">
        <section className="go-to-map">
            <h3 className="go-to-map__title">
              {blog?
              <><strong>Найди</strong> место <strong>поблизости</strong></>
              :
              <>Это место <strong>на нашей карте:</strong> </>}
            </h3>
            <img src="/images/couple.png" alt="" className="go-to-map__img" />
            <Link to={blog?"/map/" :"/map"+location.pathname} className="go-to-map__button">
              <span>Открыть карту</span>
              <img src="/images/tomap.png" alt="" />
            </Link>
        </section>
      </div>
    </>
  )
}
