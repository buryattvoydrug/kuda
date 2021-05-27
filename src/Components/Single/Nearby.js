import React from 'react'

import '../../scss/Components/Single/Nearby.scss'
import CafeItem from '../CafeItem'

function Nearby() {
  return (
    <>
      <section className="nearby">
        <h2 className="nearby__title">Заведения поблизости</h2>
        <div className="items-list">
            <CafeItem wide/>
            <CafeItem />
            <CafeItem />
        </div>
      </section>
    </>
  )
}

export default Nearby
