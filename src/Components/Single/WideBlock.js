import React from 'react'

import '../../scss/Components/Single/Blocks.scss'

function WideBlock({post}) {
  return (
    <>
      <section className="wide-block">
            <p className="wide-text">
            {post.acf["cafe-item-text1"]}
            </p>
            <div className="wide-image">
              <img src={post.acf["cafe-item-img1"]} alt="" />
            </div>
      </section>
    </>
  )
}

export default WideBlock
