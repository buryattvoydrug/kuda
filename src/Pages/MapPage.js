import React, { useState } from 'react'
import App from '../App'
import '../scss/Pages/MapPage.scss'
import Main from './Main'
import PostsPage from './PostsPage'
import { connect, Provider } from 'react-redux';

import BigMap from '../Components/BigMap'
import {BrowserRouter, Route,HashRouter, Switch, useLocation } from 'react-router-dom'
import PageNotFound from './PageNotFound'
import Single from './Single'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRandom } from '../redux/actions/random'
import CafeItem from '../Components/CafeItem'
import { fetchPosts, setVisiblePosts } from '../redux/actions/posts'
import { fetchFoodcorts } from '../redux/actions/foodcorts'
import { fetchNews } from '../redux/actions/news'
import Foodcort from './Foodcort'
import Routee from './Routee'
import { Link } from 'react-router-dom';
import store from '../redux/store'      
import Cart from '../Components/Cart'
import { addPizzaToCart, removeCartItem } from '../redux/actions/cart'
import { Dimensions } from 'react-native'
import Header from '../Components/Header'

const windowWidth = Dimensions.get('window').width;
  const isMobile = (windowWidth<1280)
function MapPage() {
  const dispatch = useDispatch();

  const posts=useSelector(({posts})=>posts.posts);
  const isLoadedPosts=useSelector(({posts})=>posts.isLoaded);
  const foodcorts=useSelector(({foodcorts})=>foodcorts.foodcorts);
  const visiblePosts=useSelector(({posts})=>posts.visiblePosts);

  const isLoadedFoodcorts=useSelector(({foodcorts})=>foodcorts.isLoaded);
  const routes=useSelector(({random})=>random.routes);
  
  let categories=[]
  let categoriesNames=[]
  if(posts){
    posts.map((item,index)=>{categories.push((posts[index].acf.type))})
    categories.map((item,index)=>{
      categories[index].map((i,ind)=>{categoriesNames.push(categories[index][ind].name)})
    })
  }
  const categoriesNamesUnique = categoriesNames.filter(function(item, pos) {
    return categoriesNames.indexOf(item) == pos;
  })
  const arrayCat=[]
  let tmp=[]
  categories.map((item,index)=>(
    tmp=[],
    item.map((i,ind)=>(
      tmp.push(i.name)
    )),
    arrayCat.push(tmp)
  ))
  
  const [activeCategory,setActiveCategory]=useState("Все")
  function setCategory(cat){
    setActiveCategory(cat)
  }
  const filtredItems=arrayCat.map((item,index)=>(
    item.findIndex(i=>i===activeCategory)
  ))
  let coffee=[]
  coffee=posts.filter((item)=>(filtredItems[posts.indexOf(item)]>=0))




  const isLoadedRoutes=useSelector(({random})=>random.isLoadedRoutes);

  React.useEffect(()=>{
      dispatch(fetchRandom());
      dispatch(fetchPosts());
        dispatch(fetchFoodcorts());
        dispatch(fetchNews());
  },[dispatch]);
  const cart=localStorage.getItem('itemsCart')+''
  const cartItems=eval(cart)

  const buttons=[{name:"Еда",type:'post',data:posts},
                  {name:"Маршрут прогулки",type:'routes',data:routes},
                 {name:"Фудкорт",type:'foodcorts',data:foodcorts},
                 {name:"Кофе",type:'post',data:posts},
                 {name:"Избранное",type:'post',data:cartItems}]
  const [active,setActive]=useState(-1)
  const [items,setItems]=useState([])

  const [activeCart,setCart]=useState(false)
  const [singleItem,setSingleItem]=useState(0)


  

  const toggleButton=(index)=>{
    setActive(index)
    setItems(buttons[index].data)
    setCart(false)
    if(index===3){
      setCategory("Кофе")
    } else {
      setCategory("Все")
    }
  }
  const toggleCart=()=>{
    setCart(true)
    setItems(cartItems)
    setActive(-1)
    setActive(4)

  }

  let itemsToShow=[]
  if(isLoadedPosts){
    itemsToShow=items.filter((item)=>(filtredItems[items.indexOf(item)]>=0))
  }

  const [activeFav,setActiveFav]=useState(false)
  const [g,setG]=useState(true)

  const [list,setList]=useState(false)
  return (
    <>
      <div className="map-container">
        <Link to="/" className="home-button">
          <img src="/images/home.svg" alt=""/>
        </Link>
        {isMobile? 
        <button onClick={()=>setList(!list)} className={list? "to-list__button to-map__button":"to-list__button"}>
          <img src={list? "/images/map.svg" :"/images/to-list.svg"} alt="" />
        </button> : null}

        <section className={list? "map-content": "map-content list-disabled"}>
            <HashRouter>
              <Switch>
                <Route exact path="/map/">
                        <div className="random-block">
                      {/* {buttons.map((item,index)=> */}
                          <div className="random-buttons-list">
                          <button id="food" onClick={()=>toggleButton(0)} className={active===0? " random__button active_button" : " random__button"}>
                            <span>Еда</span>
                            <img src="/images/food-button.png" alt="" />
                          </button>
                          <button id="foodcort" onClick={()=>toggleButton(2)} className={active===2? " random__button active_button" : " random__button"}>
                            <span>Фудкорт</span>
                            <img src="/images/foodcort-button.png" alt="" />
                          </button>
                          {/* <button id="route" onClick={()=>toggleButton(1)} className={active===1? " random__button active_button" : " random__button"}>
                            <span>Маршрут прогулки</span>
                            <img src="/images/route-button.png" alt="" />
                          </button> */}
                          {cartItems.length? 
                            <button id="favs" onClick={()=>toggleCart()} className={active===4? " random__button active_button" : " random__button"}>
                            <span>Избранное</span>
                            <img src="/images/heart.png" alt="" />
                          </button>
                          : null}
                          
                          <button id="coffee" onClick={()=>toggleButton(3)} className={active===3? " random__button active_button" : " random__button"}>
                            <span>Кофе</span>
                            <img src="/images/coffee-button.png" alt="" />
                          </button>
                          </div>
                          
                          {/* )} */}

                    </div>
                    {isMobile && !list? null:
                      <>
                      {/* <div className="category-type">
                        <h2 className="category__title">{buttons[active].name}</h2>
                      </div> */}
                      {/* <div className="items-list">
                    { active!==-1 && items.map((item,index)=>(
                      <>
                          <div toDelete={cart.includes('"id":'+item.id)} onClick={()=>setSingleItem(item)} className={index%5===0? "item cafe-item cafe-item-wide" : "item cafe-item"}>
                                  <Link to={'/map/'+item.type+`/${item.id}`}>
                                    <img className="cafe-item__img" src={item.acf["cafe-item-main-img"]} alt="" />
                                  </Link>
                                  <div className="item-info">
                                  <div className="prefs">
                                              <div className="price">
                                              { [...Array(Number(item.acf["cafe-item-prices"]))].map((i, index) =>                       
                                              <span className="active_price" key={index}><img src={item.type==='routes'? "/images/people.svg":"/images/rub.svg"} alt=""/></span>
                                              ) }
                                              { [...Array(5-Number(item.acf["cafe-item-prices"]))].map((i, index) =>                       
                                              <span key={index}><img src={item.type==='routes'? "/images/people.svg":"/images/rub.svg"} alt=""/></span>
                                              ) }
                                              </div>
                                              {item.acf["cafe-item-vegan"]? 
                                              <img src={item.type==='routes'? "/images/bike.svg":"/images/vegan.svg"} alt="" className="vegan-icon" />
                                              : null}
                                              
                                            </div>
                                    <Link to={'/map/'+item.type+`/${item.id}`}>
                                      <h3 className="item__title">{item.title.rendered}</h3>
                                    </Link>
                                    <div className="address">
                                      <img src="/images/pin.svg" alt="" className="pin" />
                                      <span className="address__text">{item.acf["cafe-item-address"]}</span>
                                    </div>
                                </div>
                                </div>
                      </>
                            ))}
                    </div> */}
                    <div className="blog-page page">
          <div className="container">
        { isLoadedPosts? (
            
            <>
            {active!==-1 && (buttons[active].name==="Еда")?
              <>
                <div className="category-type">
                  {/* <h2 className="category__title">Заведения</h2> */}
                  {isMobile? null :
                  <div className="categories">
                  <>
                  {categoriesNamesUnique.map((item,index)=>(
                    <span key={item.id} onClick={()=>setCategory(item)} className={activeCategory==item? "categorie__name active_name": "categorie__name"}>{item}</span>
                  ))}
                  </>
                  </div>}
                </div>
                {isMobile?
                  <div className="categories">
                  {categoriesNamesUnique.map((item,index)=>(
                    <span key={item.id} onClick={()=>setCategory(item)} className={activeCategory==item? "categorie__name active_name": "categorie__name "}>{item}</span>
                  ))}
                  </div>
                :null}
                </>
              :null}
            
            <div className="items-list" id="items-list">
            {items.length? (itemsToShow.map((item,index)=>(
              <CafeItem  map toDelete={cart.includes('"id":'+item.id)}
                          wide={index%5===0} post={item}/>
                    ))):''}
            </div>
            </>
        ):""}

          </div>
          {isMobile? null:
            <div className="sidebar-container">
                <div div className="right-banner"></div>
                {/* <Random/> */}
                {/* <Share/> */}
            </div>
          }
        </div>
                      </>}
                </Route>
                <Route exact path="/map/post/:id"><Single map/></Route>
                <Route exact path="/map/foodcorts/:id"><Foodcort map/></Route>
                {/* <Route exact path="/map/routes/:id"><Routee map/></Route> */}
              </Switch>
          </HashRouter>
              
            
        </section>
        {list? null: 
        <section className="map">
          <div className="map-logo">
            <Link to="/" className="logo">куда <strong>пойдём</strong>?</Link>
          </div>
          <BigMap posts={itemsToShow} singleItem={singleItem} center={"55.73888474603424,37.624613416794176"} left={"55.72686420065968, 37.59815874589736"}
                right={"55.74984851730395, 37.652010279938324"} overlay={"/images/overlay.svg" }
              />
        </section> }
      </div>
    </>
  )
}

export default MapPage
