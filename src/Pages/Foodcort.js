import React from 'react'
import { Dimensions } from 'react-native';
import Random from '../Components/Random';
import Share from '../Components/Share';
import SocialLinks from '../Components/SocialLinks';

import '../scss/Pages/Foodcort.scss'
import '../scss/Pages/Single.scss'

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)

function Foodcort() {
  return (
    <>
      <section className="single-page page">
        <div className="container">
          <div className="main-banner"></div>
          <section className="single-head">
            <div className="top">
              <span className="category">Фудмаркет</span>
              <span className="date">21 мая 2021</span>
            </div>
            <div className="head-block">
              <div className="col cafe-item">
                <div className="item-info">
                  
                  <h3 className="item__title">Фудмаркет</h3>
                  <div className="address">
                    <img src="images/pin.svg" alt="" className="pin" />
                    <span className="address__text">ул. Кузнецкий Мост, 20/6/9с1 этаж 2</span>
                  </div>
                  <div className="prefs">
                    <div className="price">
                      <span><img src="images/rub.svg" alt=""/></span>
                      <span><img src="images/rub.svg" alt=""/></span>
                      <span><img src="images/rub.svg" alt=""/></span>
                      <span><img src="images/rub.svg" alt=""/></span>
                      <span><img src="images/rub.svg" alt=""/></span>
                    </div>
                    <img src="images/vegan.svg" alt="" className="vegan-icon" />
                  </div>
                  <button className="fave__button">
                    <img src="images/fave.svg" alt="" />
                  </button>
                </div>
                <img className="cafe-item__img" src="images/item.jpg" alt="" />
              </div>
              <div className="col">
                <div className="menu">
                  <h4 className="menu__title">Корнеры</h4>
                  <ul className="corners-block">
                    <li className="corner__item">Парник</li>
                    <li className="corner__item">Flora No Fauna</li>
                    <li className="corner__item">Савранский бар</li>
                    <li className="corner__item">Pro Pita</li>
                    <li className="corner__item">Complex Burger</li>
                    <li className="corner__item">Loving Hut</li>
                    <li className="corner__item">Pizza Violante</li>
                  </ul>
                </div>
                <p className="head__text">Вже давно відомо, що <strong>читабельний</strong> зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum <strong>полягає</strong> в тому, що цей текст має більш-менш нормальне розподілення літер на відміну від, наприклад, <strong>"Тут іде текст. Тут іде текст."</strong> </p>
                <p className="accent__text"><strong>Класичний текст</strong>, використовуваний <strong>з XVI сторіччя, наведено нижче для всіх</strong> зацікавлених.</p>
                <button className="map__button">
                  <img src="images/tomap.png" alt="" />
                  <span>Как добраться?</span>
                </button>
                <button className="web__button">
                  <img src="images/web.png" alt="" />
                  <span>Сайт</span>
                </button>
              </div>
            </div>
          </section>
          <section className="corners-page">
            <h2 className="corners__title">Корнеры</h2>
            <div className="corners">
              <div className="corner">
                <img src="images/item.jpg" alt="" className="corner__image" />
                <div className="corner-info">
                <h3 className="item__title">Пицца 22 сантиметра сантиметра</h3>
                  <div className="address">
                    <img src="images/pin.svg" alt="" className="pin" />
                    <span className="address__text">ул. Солянка, 1/2</span>
                  </div>
                  <div className="prefs">
                    <div className="price">
                      <span><img src="images/rub.svg" alt=""/></span>
                      <span><img src="images/rub.svg" alt=""/></span>
                      <span><img src="images/rub.svg" alt=""/></span>
                      <span><img src="images/rub.svg" alt=""/></span>
                      <span><img src="images/rub.svg" alt=""/></span>
                    </div>
                    <img src="images/vegan.svg" alt="" className="vegan-icon" />
                  </div>
                  <button className="fave__button">
                    <img src="images/fave.svg" alt="" />
                  </button>


                  <div className="menu">
                    <h4 className="menu__title">Меню</h4>
                    <ul className="menu-block">
                      <li className="menu__item">
                        <span>Пепперони</span>
                        <span className="row-dots"></span>
                        <span>380 <img src="images/rub.svg" alt=""/></span>
                      </li>
                      <li className="menu__item">
                        <span>Пепперони</span>
                        <span className="row-dots"></span>
                        <span>380 <img src="images/rub.svg" alt=""/></span>
                      </li>
                      <li className="menu__item">
                        <span>Пепперони</span>
                        <span className="row-dots"></span>
                        <span>380 <img src="images/rub.svg" alt=""/></span>
                      </li>
                      <li className="menu__item">
                        <span>Пепперони</span>
                        <span className="row-dots"></span>
                        <span>380 <img src="images/rub.svg" alt=""/></span>
                      </li>
                    </ul>
                  </div>
                </div>
                <section className="slim-block">
                  <p className="slim-text">
                  На відміну від поширеної думки Lorem Ipsum не є випадковим набором літер. Він походить з уривку класичної латинської літератури 45 року до н.е., тобто має більш як 2000-річну історію. Річард Макклінток, професор латини з коледжу Хемпдін-Сидні, що у Вірджінії, вивчав одне з найменш зрозумілих латинських слів - consectetur - з уривку Lorem Ipsum, і у пошуку цього слова в класичній літературі знайшов безсумнівне джерело. Lorem Ipsum походить з розділів 1.10.32 та 1.10.33 цицеронівського "de Finibus Bonorum et Malorum" ("Про межі добра і зла").
                  </p>
                  <div className="slim-image">
                    <img src="images/item.jpg" alt="" />
                  </div>
                </section>
                {isMobile? null :
                <div className="main-banner"></div>
                
                }
              </div>
              
              <div className="corner">
                <img src="images/item.jpg" alt="" className="corner__image" />
                <div className="corner-info">
                <h3 className="item__title">Пицца 22 сантиметра сантиметра</h3>
                  <div className="address">
                    <img src="images/pin.svg" alt="" className="pin" />
                    <span className="address__text">ул. Солянка, 1/2</span>
                  </div>
                  <div className="prefs">
                    <div className="price">
                      <span><img src="images/rub.svg" alt=""/></span>
                      <span><img src="images/rub.svg" alt=""/></span>
                      <span><img src="images/rub.svg" alt=""/></span>
                      <span><img src="images/rub.svg" alt=""/></span>
                      <span><img src="images/rub.svg" alt=""/></span>
                    </div>
                    <img src="images/vegan.svg" alt="" className="vegan-icon" />
                  </div>
                  <button className="fave__button">
                    <img src="images/fave.svg" alt="" />
                  </button>


                  <div className="menu">
                    <h4 className="menu__title">Меню</h4>
                    <ul className="menu-block">
                      <li className="menu__item">
                        <span>Пепперони</span>
                        <span className="row-dots"></span>
                        <span>380 <img src="images/rub.svg" alt=""/></span>
                      </li>
                      <li className="menu__item">
                        <span>Пепперони</span>
                        <span className="row-dots"></span>
                        <span>380 <img src="images/rub.svg" alt=""/></span>
                      </li>
                      <li className="menu__item">
                        <span>Пепперони</span>
                        <span className="row-dots"></span>
                        <span>380 <img src="images/rub.svg" alt=""/></span>
                      </li>
                      <li className="menu__item">
                        <span>Пепперони</span>
                        <span className="row-dots"></span>
                        <span>380 <img src="images/rub.svg" alt=""/></span>
                      </li>
                    </ul>
                  </div>
                </div>
                <section className="slim-block">
                  <p className="slim-text">
                  На відміну від поширеної думки Lorem Ipsum не є випадковим набором літер. Він походить з уривку класичної латинської літератури 45 року до н.е., тобто має більш як 2000-річну історію. Річард Макклінток, професор латини з коледжу Хемпдін-Сидні, що у Вірджінії, вивчав одне з найменш зрозумілих латинських слів - consectetur - з уривку Lorem Ipsum, і у пошуку цього слова в класичній літературі знайшов безсумнівне джерело. Lorem Ipsum походить з розділів 1.10.32 та 1.10.33 цицеронівського "de Finibus Bonorum et Malorum" ("Про межі добра і зла").
                  </p>
                  <div className="slim-image">
                    <img src="images/item.jpg" alt="" />
                  </div>
                </section>
                {isMobile? 
                <Share wide/>
                :<div className="main-banner"></div>
                }
              </div>
            </div>
          </section>



          {isMobile? 
          <div className="main-banner"></div>
          :null
          }
          
          
          
          {isMobile? 
          <div className="right-banner"></div> : null
          }
          <section className="single-bottom">
            <Random/>
            <div className="bottom-accent">
              <h3 className="bottom-accent__title">Какой то важный акцент:</h3>
              <p className="bottom-accent__text">
              На відміну від поширеної думки Lorem Ipsum не є випадковим набором літер. Він походить з уривку класичної <strong> латинської літератури </strong>45 року до н.е., тобто має більш як 2000-річну історію. <strong>Річард Макклінток,</strong> професор латини з коледжу Хемпдін-Сидні, що у Вірджінії, вивчав одне з найменш зрозумілих.
              </p>
              <span className="author"><strong>Автор</strong> Даниил Бугров</span>
            </div>
          </section>
        </div>
        {isMobile? null:
          <div className="sidebar-container">
            <Share/>
            <div className="right-banner"></div>
          </div>
        }
      </section>
    </>
  )
}

export default Foodcort
