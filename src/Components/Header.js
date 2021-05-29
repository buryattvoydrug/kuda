import React from 'react'
import { Dimensions } from 'react-native';

import '../scss/Components/Header.scss'

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)

function Header() {
  window.addEventListener('scroll', progressBar);
  function progressBar(e){
    let windowHeight = document.documentElement.scrollHeight-document.documentElement.clientHeight;
    let windowScroll=document.body.scrollTop || document.documentElement.scrollTop;
    let per = windowScroll/windowHeight*100;
    const progress=document.querySelector('.row');
    progress.style.width=per+'vw';
  }
  return (
    <>
      <header>
        <div className="wrapper">
        <div className="container">
          <div className="logo">куда <strong>пойдём</strong>?</div>
          <div className="search">
            <button className="to-search__button">
              <span>поиск</span>
              {isMobile? null : <img src="http://localhost:3000/images/search.svg" alt="" />}
            </button>
          </div>
        </div>
        <div className="sidebar-container">
          <button className="fave__button">
            <img src="http://localhost:3000/images/fave.svg" alt="" />
          </button>
        </div>
        <div className="row"></div>
        </div>
      </header>
    </>
  )
}

export default Header
