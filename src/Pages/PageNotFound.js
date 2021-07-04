import React from 'react'
import { Link } from 'react-router-dom'

import '../scss/Pages/NotFound.scss'

function PageNotFound() {
  return (
    <>
      <section className="notfound-page">
        <h1 className="notfound__title">никуда <br /><strong>не пойдем</strong>!</h1>
        <span className="notfound__text">404. Страница не найдена</span>
        <Link to="/" className="button">Вернуться на главную</Link>
      </section>
    </>
  )
}

export default PageNotFound
