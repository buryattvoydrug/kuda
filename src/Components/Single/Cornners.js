import React from 'react'
import renderHTML from "react-render-html";


import '../../scss/Components/Single/Menu.scss'

function Cornners({post}) {
  return (
    <>
      <div className="menu">
                  <h4 className="menu__title">Корнеры</h4>
                  <ul className="corners-block">
                  {renderHTML( post.acf["cafe-item-menu"] )}
                  </ul>
                </div>
    </>
  )
}

export default Cornners
