import React from 'react'

import '../scss/Components/Footer.scss'

function Footer() {
  return (
    <>
      <div className="footer-logo">куда <strong>пойдём</strong>?</div>
      <footer>
        <div className="container">
          <div className="footer__text"><strong>не знаете</strong> куда пойти? <strong></strong> <strong>мы поможем вам</strong> с выбором места <strong>для прекрасного времяпровождения. хорошей вам </strong>прогулки!</div>
        </div>
        <div className="wrapper">
          <div className="footer">
              <span className="copyright">© Куда пойдем? , 2021</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
