import React from 'react'
import { Dimensions } from 'react-native'
import Cart from '../Components/Cart'
import Random from '../Components/Random'
import Share from '../Components/Share'
import { motion } from 'framer-motion';

import '../scss/Pages/Favs.scss'


const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


export default function Favs() {
  window.scrollTo(0, 0)

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

  return (
    <>
      <div className="blog-page page">
        <div className="container">
          <motion.div initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}>
              <div className="category-type">
                <h2 className="category__title">Избранное</h2>
              </div>
              <p className="cart__text">
                <strong>Сохраненные</strong> в этом разделе заведения будут храниться в браузере <strong>вашего устройства</strong>.
              </p>
              <div className="items-list">
                <Cart/>
              </div>
              {isMobile? <div className="right-banner"></div>:null}
              {isMobile? <Random/> : null}
          </motion.div>
        </div>
        {isMobile? null:
          <div className="sidebar-container">
              <div div className="right-banner"></div>
              <Random/>
              <Share/>
          </div>
        }
      </div>
    </>
  )
}
