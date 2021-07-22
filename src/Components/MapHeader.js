import React from 'react'
import { Link } from 'react-router-dom';
import {Link as ScrolLink} from 'react-scroll';

import '../scss/Components/Header.scss'

export default function MapHeader() {
  // window.addEventListener('scroll', progressBar);

  

  // function progressBar(e){
  //   let windowHeight = document.documentElement.scrollHeight-document.documentElement.clientHeight;
  //   let windowScroll=document.body.scrollTop || document.documentElement.scrollTop;

  //   let per = windowScroll/windowHeight*100;
  //   const progress=document.querySelector('.row');
  //   if(progress){
  //     progress.style.width=per+'vw';
  //   }

  // }
  
  
  return (
    <div className="map-header">
        <Link to="/" className="logo">куда <strong>пойдём</strong>?</Link>
        <div className="single-map-header">
          <Link className="back__button" to="/map/">
            <img src="/images/nazad.png" alt="" />
          </Link>
          <Link to="/" className="home__button">
              <img src="/images/home.svg" alt=""/>
          </Link>
          <ScrolLink spy={true}
                smooth={true}
                offset={-75}
                duration= {500}  className="to_random__button" to="random">
              <img src="/images/shuffle.svg" alt=""/>
          </ScrolLink>
        </div>
      </div>
      
  )
}
