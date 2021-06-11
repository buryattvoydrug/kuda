import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import {Link as ScrolLink} from 'react-scroll';
import {useSelector, useDispatch} from 'react-redux'
import {fetchPosts} from '../redux/actions/posts'
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
    if(progress){
      progress.style.width=per+'vw';
    }
  }

  const [menu,setMenu]=useState(false)
  const toggleMenu=()=>{
    setMenu(!menu);
    if (document.body.style.overflowY !== "hidden") {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }
  const closeMenu = () => {
    setMenu(false);
    document.body.style.overflowY = "scroll";
  }


  return (
    <>
      <header>
        <div className="wrapper">
        <div className="container">
          <Link to="/" className="logo">куда <strong>пойдём</strong>?</Link>
          {!isMobile? <Nav/> : null}
        </div>
        <div className="sidebar-container">
          {isMobile? 
          <button onClick={toggleMenu} className={menu? "nav-button active__button" : "nav-button "}>
            <span></span><span></span><span></span>
            {/* <img src="/images/search.svg" alt="" /> */}
          </button>
           : <SocialLinks/>}
          
          <button className="fave__button">
            <img src="/images/fave.svg" alt="" />
          </button>
        </div>
        <div className="row"></div>
        </div>
        {menu? 
          <div className="nav">
            <ul className="navbar">
              <li onClick={closeMenu}><Link to="/" className="navbar__item">главная</Link></li>
              <li onClick={closeMenu}><Link to="/blog/" className="navbar__item">блог</Link></li>
              <li onClick={closeMenu}><Link to="/foodcorts/" className="navbar__item">фудкорты</Link></li>
              <li onClick={closeMenu}><Link to="/posts/" className="navbar__item">заведения</Link></li>
              {/* <li onClick={closeMenu}><Link to="/blog/" className="navbar__item">кофе</Link></li> */}
              {/* <li onClick={closeMenu}><Link to="/blog/" className="navbar__item">о нас</Link></li> */}
            </ul>
            {isMobile? <SocialLinks/>:null}
            </div> : null}
      </header>
      <ScrolLink spy={true}
            smooth={true}
            offset={-100}
            duration= {500} className="to-random" to="random">
        <div className="to-random">
          <img src="/images/shuffle.svg" alt="" />
        </div>
      </ScrolLink>
    </>
  )
}

export default Header
