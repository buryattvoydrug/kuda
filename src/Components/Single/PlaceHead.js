import React from 'react'

import '../../scss/Components/Single/PlacesHead.scss'

function PlaceHead() {
  return (
    <>
      <section className="places-head">
            <div className="top">
              <span className="category">Рестораны</span>
              <span className="date">21 мая 2021</span>
            </div>
            <div className="head-block">
              <div className="col">
                <div className="item-info">
                  <h3 className="item__title">Пицца 22 сантиметра сантиметра</h3>
                  <div className="address">
                    <img src="images/pin.svg" alt="" className="pin" />
                    <span className="address__text">ул. Солянка, 1/2</span>
                  </div>
                  <div className="place-buttons">
                    <button className="map__button">
                      <img src="images/tomap.png" alt="" />
                      <span>Как добраться?</span>
                    </button>
                    <button className="fave__button">
                      <img src="images/fave.svg" alt="" />
                    </button>
                  </div>
                </div>
                <img className="cafe-item__img" src="images/item.jpg" alt="" />
              </div>
              <div className="col place-text">
                <p className="head__text">Вже давно відомо, що <strong>читабельний</strong> зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum <strong>полягає</strong> в тому, що цей текст має більш-менш нормальне розподілення літер на відміну від, наприклад, <strong>"Тут іде текст. Тут іде текст."</strong> </p>
                <p className="accent__text"><strong>Класичний текст</strong>, використовуваний <strong>з XVI сторіччя, наведено нижче для всіх</strong> зацікавлених.</p>
              </div>
            </div>
          </section>
    </>
  )
}

export default PlaceHead
