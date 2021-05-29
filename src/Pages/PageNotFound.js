import React from 'react'

import '../scss/Pages/NotFound.scss'

function PageNotFound() {
  return (
    <>
      <section className="notfound-page">
        <h1 className="notfound__title">никуда <br /><strong>не пойдем</strong>!</h1>
        <span className="notfound__text">404. Страница не найдена</span>
        <button className="button">Вернуться на главную</button>
        <img className="notfound__image" src="http://localhost:3000/images/search.svg" alt="" />
      </section>
    </>
  )
}

export default PageNotFound
