import React from 'react'
import { Dimensions } from 'react-native';
import Random from '../Components/Random';
import Share from '../Components/Share';
import DoubleSlim from '../Components/Single/DoubleSlim';
import Nearby from '../Components/Single/Nearby';
import PlaceHead from '../Components/Single/PlaceHead';
import SingleHead from '../Components/Single/SingleHead';
import SocialLinks from '../Components/SocialLinks';


const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)

export default function Places() {
  return (
    <>
      <section className="single-page page">
        <div className="container">
          <div className="main-banner"></div>
          <PlaceHead/>
          <DoubleSlim/>

          {isMobile? 
          <div className="main-banner"></div>
          :null
          }
          <Nearby/>
          <Share wide/>

                    {isMobile? 
          <div className="right-banner"></div> : null
          }
          {isMobile? <Random/> : null}
          </div>
        {isMobile? null:
          <div className="sidebar-container">
            <Random/>
            <SocialLinks/>
            <div className="right-banner"></div>
          </div>
        }
      </section>
    </>
  )
}
