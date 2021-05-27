import React from 'react'
import { Dimensions } from 'react-native';
import Random from '../Components/Random';
import Share from '../Components/Share';
import Menu from '../Components/Single/Menu';
import SingleBottom from '../Components/Single/SingleBottom';
import SingleHead from '../Components/Single/SingleHead';
import SlimBlock from '../Components/Single/SlimBlock';
import WideBlock from '../Components/Single/WideBlock';
import SocialLinks from '../Components/SocialLinks';

import '../scss/Pages/Single.scss'

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)

function Single() {
  return (
    <>
      <section className="single-page page">
        <div className="container">
          <div className="main-banner"></div>
          <SingleHead/>
          {isMobile? 
          <div className="main-banner"></div>
          :null
          }
          <WideBlock/>
          {isMobile? 
          <Share wide/>
          :<div className="main-banner"></div>
          }
          <SlimBlock/>
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

export default Single
