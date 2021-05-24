import React from 'react'
import '../scss/Components/Random.scss'

function Random() {
  return (
    <>
      <div className="random">
        <h3 className="random__title">Рандомайзер</h3>
        <span>Если не можете определиться</span>
        <div className="random-block">
          <button className=" random__button active_button">
            <span>Еда</span>
            <img src="images/icon.png" alt="" />
          </button>
          <button className="random__button">
            <span>Место <br />встречи</span>
            <img src="images/icon.png" alt="" />
          </button>
          <button className="random__button">
            <span>Маршрут <br />прогулки</span>
            <img src="images/icon.png" alt="" />
          </button>
          <button className="random__button">
            <span>Кофе</span>
            <img src="images/icon.png" alt="" />
          </button>
          <button className="random__button">
            <span>Место <br />встречи</span>
            <img src="images/icon.png" alt="" />
          </button>
        </div>
        <button className="button random__generate">Сгенерировать</button>
      </div>
    </>
  )
}

export default Random
