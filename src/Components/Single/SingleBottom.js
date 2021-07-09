import React from 'react'
import renderHTML from "react-render-html";

import '../../scss/Components/Single/Blocks.scss'
import Random from '../Random'

function SingleBottom({post,author,map}) {
  return (
    <>
      <section className="single-bottom">
            <Random map={map} single/>
            <div className="bottom-accent">
              <h3 className="bottom-accent__title">Итог:</h3>
              <p className="bottom-accent__text">
              {renderHTML(post.acf["cafe-item-accent"])}
              </p>
              <span className="author"><strong>Автор</strong> {author}</span>
            </div>
          </section>
    </>
  )
}

export default SingleBottom
