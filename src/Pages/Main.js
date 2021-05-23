import React from 'react'
import CafeItem from '../Components/CafeItem'
import Share from '../Components/Share'

import '../scss/Pages/Main.scss'

export default function Main() {
  return (
    <>
      <div className="main-page page">
        <div className="container">
          <div className="items-list">
            <CafeItem wide type="Фудкорт"/>
            <CafeItem />
            <CafeItem />
            <CafeItem />
            <CafeItem />
            <Share/>
            <CafeItem />
            <CafeItem wide/>
            <CafeItem />
          </div>
          <button className="load-more">Загрузить ещё</button>
        </div>
        <div className="sidebar-container">

        </div>
      </div>
    </>
  )
}
