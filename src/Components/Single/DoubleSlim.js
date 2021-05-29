import React from 'react'

import '../../scss/Components/Single/Blocks.scss'


function DoubleSlim({place}) {
  return (
    <>
      <section className="double-slim-block">
            <div className="col">
              <div className="slim-image">
                <img src={place.acf["place-img1"]} alt="" />
              </div>
              <p className="slim-text">
              {place.acf["place-text-1"]}
              </p>
            </div>
            <div className="col">
              <p className="slim-text">
              {place.acf["place-text-2"]}
              </p>
              <div className="slim-image">
                <img src={place.acf["place-img2"]} alt="" />
              </div>
            </div>
      </section>
    </>
  )
}

export default DoubleSlim
