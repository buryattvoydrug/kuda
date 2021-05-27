import React from 'react'

import '../../scss/Components/Single/Blocks.scss'
import Random from '../Random'

function SingleBottom() {
  return (
    <>
      <section className="single-bottom">
            <Random/>
            <div className="bottom-accent">
              <h3 className="bottom-accent__title">Какой то важный акцент:</h3>
              <p className="bottom-accent__text">
              На відміну від поширеної думки Lorem Ipsum не є випадковим набором літер. Він походить з уривку класичної <strong> латинської літератури </strong>45 року до н.е., тобто має більш як 2000-річну історію. <strong>Річард Макклінток,</strong> професор латини з коледжу Хемпдін-Сидні, що у Вірджінії, вивчав одне з найменш зрозумілих.
              </p>
              <span className="author"><strong>Автор</strong> Даниил Бугров</span>
            </div>
          </section>
    </>
  )
}

export default SingleBottom
