import React from 'react'
import { Dimensions } from 'react-native';
import { Link } from 'react-router-dom';

import '../scss/Components/Header.scss'
import Nav from './Nav';
import SocialLinks from './SocialLinks';

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
          <Nav/>
        </div>
        <div className="sidebar-container">
          <SocialLinks/>
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
