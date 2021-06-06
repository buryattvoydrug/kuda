import React from 'react'

import '../../scss/Components/Single/Blocks.scss'

function WideBlock({img,text}) {
  return (
    <>
      <section className="wide-block">
            <p className="wide-text">
            {/* {post.acf["cafe-item-text1"]} */}
            {text}
            </p>
            <div className="wide-image">
              {/* <img src={post.acf["cafe-item-img1"]} alt="" /> */}
              <img src={img} alt="" />
            </div>
      </section>
    </>
  )
}

export default WideBlock
