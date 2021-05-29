import React from 'react'
import { Dimensions } from 'react-native';
import Random from '../Components/Random';
import SocialLinks from '../Components/SocialLinks';

import '../scss/Pages/Sign.scss'

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


function SignIn() {
  return (
    <>
      <section className="sign-page page">
        <div className="container">
          <h1 className="sign__title">Войдите</h1>
          <button className="vk__button">
            <span>Через Вконтакте</span>
            <img src="http://localhost:3000/images/vk.svg" alt="" />
          </button>
          <h3 className="sign__subtitle">Или по логину и паролю</h3>
          <input placeholder="Логин" type="text" className="sign__input" />
          <input placeholder="Пароль" type="text" className="sign__input" />
          <button className="button">Подтвердить</button>
          <a href="/" className="sign__link">Нет аккаунта? Зарегистрируйтесь!</a>
        </div>
        {isMobile? null:
          <div className="sidebar-container">
            <Random/>
          </div>
        }
      </section>
    </>
  )
}

export default SignIn
