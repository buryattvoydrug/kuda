import React from 'react'
import renderHTML from "react-render-html";
import '../../scss/Components/Single/Menu.scss'

function Menu({post}) {
  return (
    <>
      <div className="menu">
                  <h4 className="menu__title">Меню</h4>
                  <ul className="menu-block">
                  {renderHTML( post.acf["cafe-item-menu"] )}
                    {/* <li className="menu__item">
                      <span>Пепперони</span>
                      <span className="row-dots"></span>
                      <span>380 <img src="http://localhost:3000/images/rub.svg" alt=""/></span>
                    </li>
                    <li className="menu__item">
                      <span>Пепперони</span>
                      <span className="row-dots"></span>
                      <span>380 <img src="http://localhost:3000/images/rub.svg" alt=""/></span>
                    </li>
                    <li className="menu__item">
                      <span>Пепперони</span>
                      <span className="row-dots"></span>
                      <span>380 <img src="http://localhost:3000/images/rub.svg" alt=""/></span>
                    </li>
                    <li className="menu__item">
                      <span>Пепперони</span>
                      <span className="row-dots"></span>
                      <span>380 <img src="http://localhost:3000/images/rub.svg" alt=""/></span>
                    </li> */}
                  </ul>
                </div>
    </>
  )
}

export default Menu
