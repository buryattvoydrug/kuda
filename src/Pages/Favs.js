import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import Cart from '../Components/Cart'
import Random from '../Components/Random'
import Share from '../Components/Share'
import { motion } from 'framer-motion';

import '../scss/Pages/Favs.scss'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../scss/Transitions.scss'
import { CSSTransition } from 'react-transition-group';

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


export default function Favs() {
  window.scrollTo(0, 0)

  const [showPosts,setShowPost]=useState(false)
  const [showSidebar,setShowSidebar]=useState(false)


  setTimeout(()=>{
    setShowPost(true)
    setTimeout(()=>{
      setShowSidebar(true)
    },100)
  },100)

  return (
    <>
    <Header/>
    <div className="wrapper">
    <div className="blog-page page">
        <div className="container">
        <CSSTransition
                in={showPosts}
                timeout={1000}
                classNames="newstransition"
                unmountOnExit
              >
          <div>
            <div className="category-type">
                  <h2 className="category__title">Избранное</h2>
                </div>
                <p className="cart__text">
                  <strong>Сохраненные</strong> в этом разделе заведения будут храниться в браузере <strong>вашего устройства</strong>.
                </p>
                <div className="items-list">
                  <Cart/>
                </div>
                {isMobile? 
                  <CSSTransition
                in={showSidebar}
                timeout={1000}
                classNames="newstransition"
                unmountOnExit
              >
                <div>
                  <Random/>
                </div>
              </CSSTransition>
                 : null}
          </div>
          </CSSTransition>
        </div>
        {isMobile? null:
          <div className="sidebar-container">
              <div div className="right-banner"></div>
              <Random/>
              <Share/>
          </div>
        }
      </div>
      <Footer/>
    </div>
      
    </>
  )
}
