import React from 'react'
import App from '../App'
import '../scss/Pages/MapPage.scss'
import Main from './Main'
import PostsPage from './PostsPage'
import {Route, Switch, useLocation } from 'react-router-dom'
import PageNotFound from './PageNotFound'
import Single from './Single'


function MapSinglePage() {
const location = useLocation();

  return (
    <>
      <div className="map-container">
        <section className="map-content">
            <Single map/>
        </section>
        <section className="map"></section>
      </div>
    </>
  )
}

export default MapSinglePage
