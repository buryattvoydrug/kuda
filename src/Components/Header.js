import React from 'react'
import { Dimensions } from 'react-native';

import '../scss/Components/Header.scss'

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)
function Header() {
  return (
    <>
      <header>
        <div className="wrapper">
        <div className="container">
          <div className="logo">куда <strong>пойдём</strong>?</div>
          <div className="search">
            <button className="to-search__button">
              <span>поиск</span>
              {isMobile? null : <img src="images/search.svg" alt="" />}
            </button>
          </div>
        </div>
        <div className="sidebar-container">
          <button className="fave__button">
            <img src="images/fave.svg" alt="" />
          </button>
        </div>
        <div className="row"></div>
        </div>
      </header>
    </>
  )
}

export default Header
