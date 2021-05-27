import React from 'react'
import { Dimensions } from 'react-native';
import Random from '../Components/Random';
import Share from '../Components/Share';
import CornerItem from '../Components/Single/CornerItem';
import SingleBottom from '../Components/Single/SingleBottom';
import SingleHead from '../Components/Single/SingleHead';
import SocialLinks from '../Components/SocialLinks';

import '../scss/Pages/Foodcort.scss'
import '../scss/Pages/Single.scss'

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)

function Foodcort() {
  return (
    <>
      <section className="single-page page">
        <div className="container">
          <div className="main-banner"></div>
          <SingleHead corners/>
          <section className="corners-page">
            <h2 className="corners__title">Корнеры</h2>
            <div className="corners">
              <CornerItem/>
              <CornerItem/>
              <CornerItem/>
            </div>
          </section>



          {isMobile? 
          <div className="main-banner"></div>
          :null
          }
          
          
          
          {isMobile? 
          <div className="right-banner"></div> : null
          }
          <SingleBottom/>
        </div>
        {isMobile? null:
          <div className="sidebar-container">
            <Share/>
            <div className="right-banner"></div>
          </div>
        }
      </section>
    </>
  )
}

export default Foodcort
