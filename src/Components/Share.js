import React from 'react'
import SocialLinks from './SocialLinks'

import '../scss/Components/Share.scss'

function Share() {
  return (
    <>
      <div className="item share">
        <h2 className="share__title">Делитесь <strong>своими</strong> любимыми местами</h2>
        <SocialLinks/>
      </div>
    </>
  )
}

export default Share
