import React from 'react'

function WidePlaces({text,img}) {
  return (
    <>
      <section className="wide-places-block">
            <div className="wide-image">
              <img src={img} alt="" />
            </div>
            <p className="wide-text">
            {text}</p>
      </section>
    </>
  )
}

export default WidePlaces
