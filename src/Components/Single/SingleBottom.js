import React from 'react'

import '../../scss/Components/Single/Blocks.scss'
import Random from '../Random'

function SingleBottom({post}) {
  return (
    <>
      <section className="single-bottom">
            <Random/>
            <div className="bottom-accent">
              <h3 className="bottom-accent__title">Какой то важный акцент:</h3>
              <p className="bottom-accent__text">
              {post.acf["cafe-item-accent"]}
              </p>
              <span className="author"><strong>Автор</strong> Даниил Бугров</span>
            </div>
          </section>
    </>
  )
}

export default SingleBottom
