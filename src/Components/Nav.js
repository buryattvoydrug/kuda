import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

import '../scss/Components/Nav.scss'

function Nav() {
  return (
    <>
      <div className="nav">
        <ul className="navbar">
          <li><Link to="/blog/" className="navbar__item">блог</Link></li>
          <li><Link to="/blog/" className="navbar__item">места</Link></li>
          <li><Link to="/blog/" className="navbar__item">о нас</Link></li>

        </ul>

      </div>
    </>
  )
}

export default Nav
