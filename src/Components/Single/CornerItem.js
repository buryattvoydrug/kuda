import React from 'react'
import { Dimensions } from 'react-native';

import '../../scss/Components/Single/CornerItem.scss'
import Share from '../Share';

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)

function CornerItem() {
  return (
    <>
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
    </>
  )
}

export default CornerItem
