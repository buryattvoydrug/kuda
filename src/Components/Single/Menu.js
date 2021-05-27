import React from 'react'

import '../../scss/Components/Single/Menu.scss'

function Menu() {
  return (
    <>
      <div className="menu">
                  <h4 className="menu__title">Меню</h4>
                  <ul className="menu-block">
                    <li className="menu__item">
                      <span>Пепперони</span>
                      <span className="row-dots"></span>
                      <span>380 <img src="images/rub.svg" alt=""/></span>
                    </li>
                    <li className="menu__item">
                      <span>Пепперони</span>
                      <span className="row-dots"></span>
                      <span>380 <img src="images/rub.svg" alt=""/></span>
                    </li>
                    <li className="menu__item">
                      <span>Пепперони</span>
                      <span className="row-dots"></span>
                      <span>380 <img src="images/rub.svg" alt=""/></span>
                    </li>
                    <li className="menu__item">
                      <span>Пепперони</span>
                      <span className="row-dots"></span>
                      <span>380 <img src="images/rub.svg" alt=""/></span>
                    </li>
                  </ul>
                </div>
    </>
  )
}

export default Menu
