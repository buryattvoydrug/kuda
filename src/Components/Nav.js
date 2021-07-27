import React from 'react'
import { Link } from 'react-router-dom'

import '../scss/Components/Nav.scss'

function Nav() {
  return (
    <>
      <div className="nav">
      <ul className="navbar">
        <li><Link to="/map/" className="navbar__item">карта</Link></li>
        <li><Link to="/blog/" className="navbar__item">блог</Link></li>
        <li><Link to="/foodcorts/" className="navbar__item">фудкорты</Link></li>
        <li><Link to="/posts/" className="navbar__item">заведения</Link></li>
      </ul>
      </div>
      
    </>
  )
}

export default Nav
