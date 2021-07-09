import React from 'react'
import App from '../App'
import '../scss/Pages/MapPage.scss'
import Main from './Main'
import PostsPage from './PostsPage'
import {Route, Switch, useLocation } from 'react-router-dom'
import PageNotFound from './PageNotFound'
import Single from './Single'
import Maps from '../Components/Maps'

function MapSinglePage() {
const location = useLocation();

  return (
    <>
      <div className="map-container">
        <section className="map-content">
            <Single map/>
        </section>
        <section className="map">
        {/* <Maps center={"55.73888474603424,37.624613416794176"} left={"55.72686420065968, 37.59815874589736"}
              right={"55.74984851730395, 37.652010279938324"} overlay={"/images/overlay.svg" }
            /> */}
        </section>
      </div>
    </>
  )
}

export default MapSinglePage
