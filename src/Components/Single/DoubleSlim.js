import React from 'react'

import '../../scss/Components/Single/Blocks.scss'


function DoubleSlim() {
  return (
    <>
      <section className="double-slim-block">
            <div className="col">
              <div className="slim-image">
                <img src="http://localhost:3000/images/item.jpg" alt="" />
              </div>
              <p className="slim-text">
              На відміну від поширеної думки Lorem Ipsum не є випадковим набором літер. Він походить з уривку класичної латинської літератури 45 року до н.е., .
              </p>
            </div>
            <div className="col">
              <p className="slim-text">
              На відміну від поширеної думки Lorem Ipsum не є випадковим набором літер. Він походить з уривку класичної латинської літератури 45 року до н.е., .
              </p>
              <div className="slim-image">
                <img src="http://localhost:3000/images/item.jpg" alt="" />
              </div>
            </div>
      </section>
    </>
  )
}

export default DoubleSlim
