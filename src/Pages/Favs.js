import React from 'react'
import { Dimensions } from 'react-native'
import CafeItem from '../Components/CafeItem'
import Random from '../Components/Random'
import Share from '../Components/Share'
import SocialLinks from '../Components/SocialLinks'

import '../scss/Pages/Favs.scss'


const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


export default function Favs() {
  return (
    <>
      <div className="favs-page page">
        <div className="container">
          <div className="main-banner"></div>
          <div className="favs-head">
            <h2 className="favs__title">Избранное</h2>
            <button className="exit">выйти <br />из профиля</button>
          </div>
          <div className="items-list">
            <CafeItem wide type="Фудкорт"/>
            <CafeItem />
            <CafeItem />
            <CafeItem />
            <CafeItem />
            <CafeItem wide/>
            <CafeItem />
          </div>
          <button className="button load-more">Загрузить ещё</button>
          <Share wide/>
          {isMobile? <div className="right-banner"></div>:null}
          {isMobile? <Random/> : null}
        </div>
        {isMobile? null:
          <div className="sidebar-container">
            <Random/>
            <SocialLinks/>
            <div className="right-banner"></div>
          </div>
        }
      </div>
    </>
  )
}
