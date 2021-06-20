import React from 'react'
import '../../scss/Components/Single/Menu.scss'

function Menu({post}) {
  console.log(post)

  return (
    <>
      <div className="menu">
                  <h4 className="menu__title">Меню</h4>
                  <ul className="menu-block">
                    <li className="menu__item">
                      <span>{post.acf.menu.блюдо}</span>
                      <span className="row-dots"></span>
                      <span>{post.acf.menu.цена_блюда} <img src="/images/rub.svg" alt=""/></span>
                    </li>
                    <li className="menu__item">
                      <span>{post.acf.menu.блюдо_копия}</span>
                      <span className="row-dots"></span>
                      <span>{post.acf.menu.цена_блюда_копия} <img src="/images/rub.svg" alt=""/></span>
                    </li>
                    <li className="menu__item">
                      <span>{post.acf.menu.блюдо_копия2}</span>
                      <span className="row-dots"></span>
                      <span>{post.acf.menu.цена_блюда_копия2} <img src="/images/rub.svg" alt=""/></span>
                    </li>
                    <li className="menu__item">
                      <span>{post.acf.menu.блюдо_копия3}</span>
                      <span className="row-dots"></span>
                      <span>{post.acf.menu.цена_блюда_копия3} <img src="/images/rub.svg" alt=""/></span>
                    </li>
                  </ul>
                </div>
    </>
  )
}

export default Menu
