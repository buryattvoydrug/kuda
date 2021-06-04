import React from 'react'
import { Dimensions } from 'react-native';
import Random from '../Components/Random';

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)

function SignUp() {
  return (
    <>
      <section className="sign-page page">
        <div className="container">
          <h1 className="sign__title">Зарегистрируйтесь</h1>
          <button className="vk__button">
            <span>Через Вконтакте</span>
            <img src="/images/vk.svg" alt="" />
          </button>
          <h3 className="sign__subtitle">Или по логину и паролю</h3>
          <input placeholder="Ваше имя" type="text" className="sign__input" />
          <input placeholder="Логин" type="text" className="sign__input" />
          <input placeholder="Пароль" type="text" className="sign__input" />
          <button className="button">Подтвердить</button>
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

export default SignUp
