import React from 'react'
import { Dimensions } from 'react-native';
import Share from '../Components/Share';
import NewsItem from '../Components/Single/NewsItem';
import SingleBottom from '../Components/Single/SingleBottom';
import SlimBlock from '../Components/Single/SlimBlock';
import WideBlock from '../Components/Single/WideBlock';

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)

function SingleBlog() {
  return (
    <>
      <section className="single-page page">
        <div className="container">
          <div className="main-banner"></div>
          {isMobile? 
          <div className="main-banner"></div>
          :null
          }
          <NewsItem/>
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

export default SingleBlog
