import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import {Link as ScrolLink} from 'react-scroll';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import '../scss/Components/Header.scss'
import Nav from './Nav';
import SocialLinks from './SocialLinks';

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)

function Header({map}) {
  const [logo,setLogo]=useState(true)


  window.addEventListener('scroll', progressBar);

  

  function progressBar(e){
    let windowHeight = document.documentElement.scrollHeight-document.documentElement.clientHeight;
    let windowScroll=document.body.scrollTop || document.documentElement.scrollTop;

    let per = windowScroll/windowHeight*100;
    const progress=document.querySelector('.row');
    if(progress){
      progress.style.width=per+'vw';
    }

    if(document.documentElement.scrollTop=='0'){
      setLogo(true)
    } else {
      setLogo(false)
    }

  }
  
  var oldScrollY = 0;
  
  if(document.querySelector('header')){window.addEventListener('scroll', function(){
    var div = document.querySelector('header');
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var dY = scrolled - oldScrollY;
    // console.log(div.classList)
    if ( dY > 0 ){
      div.classList.add('header_hidden');
    } else {
      div.classList.remove('header_hidden');
    }
    
    oldScrollY = scrolled;
  });}
  const [menu,setMenu]=useState(false)
  const toggleMenu=()=>{
    if(menu){document.getElementById('nav').classList.add('nav_hidden')}
    setTimeout(function() {
      if(menu) document.getElementById('nav').classList.remove('nav_hidden')
      setMenu(!menu);

   },300);
    if (document.body.style.overflowY !== "hidden") {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }
  const closeMenu = () => {
    console.log(document.getElementById('nav'))
    if(menu){document.getElementById('nav').classList.add('nav_hidden')}
    setTimeout(function() {
        if(menu && document.getElementById('nav')) document.getElementById('nav').classList.remove('nav_hidden')
        setMenu(!menu);
   },600);
    document.body.style.overflowY = "scroll";
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2
    }
  };
  // console.log(logo)

  return (
    <>
      <header className={menu? 'active_header':null}>
        <div className="wrapper">
        <div className="container">
        {logo?
          <Link to="/" className="logo">куда <strong>пойдём</strong>?</Link>
        :
        <ScrolLink spy={true}
            smooth={true}
            offset={0}
            duration= {500} to="root" className="logo">куда <strong>пойдём</strong>?</ScrolLink>
        }
          
          {!isMobile? <Nav/> : null}
        </div>
        <div className="sidebar-container">
        {map?
          <div className="single-map-header">
            <Link className="back__button" to="/map/">
              <img src="/images/nazad.png" alt="" />
            </Link>
            <button className="to-list__button to-map__button">
              <img src="/images/map.svg" alt="" />
            </button>
            {/* <ScrolLink spy={true}
                  smooth={true}
                  offset={-75}
                  duration= {500}  className="to_random__button" to="random">
                <img src="/images/shuffle.svg" alt=""/>
            </ScrolLink> */}
          </div>
        :
          <>
            {isMobile? 
            <button onClick={toggleMenu} className={menu? "nav-button active__button" : "nav-button "}>
              <span></span><span></span><span></span>
            </button>
            : <SocialLinks/>}
            
            <Link onClick={closeMenu}  to="/favs/" className="fave__button">
              <img src="/images/fave.svg" alt="" />
            </Link>
          </>}
        </div>
        <div className="row"></div>
        </div>
        {menu? 
          <motion.div  id="nav" initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition} className="nav">
            <ul className="navbar">
              <li onClick={closeMenu}><Link to="/" className="navbar__item">главная</Link></li>
              <li onClick={closeMenu}><Link to="/map/" className="navbar__item">карта</Link></li>
              <li onClick={closeMenu}><Link to="/blog/" className="navbar__item">блог</Link></li>
              <li onClick={closeMenu}><Link to="/foodcorts/" className="navbar__item">фудкорты</Link></li>
              <li onClick={closeMenu}><Link to="/posts/" className="navbar__item">заведения</Link></li>
            </ul>
            {isMobile? <SocialLinks/>:null}
            </motion.div> : null}
      </header>
      {/* <ScrolLink spy={true}
            smooth={true}
            offset={-75}
            duration= {500} className="to-random" to="random">
        <div className="to-random__button">
          <img src="/images/shuffle.svg" alt="" />
        </div>
      </ScrolLink> */}
    </>
  )
}

export default Header
