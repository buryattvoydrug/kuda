import React from 'react'
import renderHTML from "react-render-html";


import '../../scss/Components/Single/Menu.scss'
import Menu from './Menu';

function Cornners({post}) {
  return (
    <>
      <div className="menu">
                  <h4 className="menu__title">Корнеры</h4>
                  <ul className="corners-block">
                  {/* <Menu post={post}/> */}
                  </ul>
                </div>
    </>
  )
}

export default Cornners
