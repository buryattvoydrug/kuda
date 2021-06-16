import React from 'react'
import renderHTML from "react-render-html";

import '../../scss/Components/Single/Blocks.scss'

function SlimBlock({post}) {
  return (
    <>
      <section className="slim-block">
            <p className="slim-text">
            {renderHTML(post.acf["cafe-item-text2"])}
            </p>
            <div className="slim-image">
              <img src={post.acf["cafe-item-img2"]} alt="" />
            </div>
      </section>
    </>
  )
}

export default SlimBlock
