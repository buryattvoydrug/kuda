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
import {Link as ScrolLink} from 'react-scroll';
import MapHeader from '../Components/MapHeader'

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)
  
function MapPage() {
  const dispatch = useDispatch();
  const location = useLocation();
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


  const [activeHeart,setActiveHeart]=useState(false)


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
  const [singleItem,setSingleItem]=useState(null)

  // console.log(singleItem)
  

  const toggleButton=(index)=>{
    setActive(index)
    setItems(buttons[index].data)
    setCart(false)
    setSingleItem(null)
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
  // if(isLoadedPosts){
    itemsToShow=items.filter((item)=>(filtredItems[items.indexOf(item)]>=0))
    // setItemsToShow(i)
  // }
  // let j=posts.concat(foodcorts)
  if(itemsToShow.length===0){
    itemsToShow=posts.concat(foodcorts)
  }
  if(singleItem){
    itemsToShow=[]
    itemsToShow.push(singleItem)
  }
  
//  console.log(itemsToShow,singleItem)
  const [g,setG]=useState(true)

  const [list,setList]=useState(false)


  const [logo,setLogo]=useState(true)

 
  window.addEventListener('scroll', progressBar);

 

  function progressBar(e){
    let windowHeight = document.documentElement.scrollHeight-document.documentElement.clientHeight;
    let windowScroll=document.body.scrollTop || document.documentElement.scrollTop;

    let per = windowScroll/windowHeight*100;
    const progress=document.querySelector('.row');
    if(progress){
      progress.style.width=per+'vw';
    }


  }
  
  if(list && document.querySelector('.map-header')){
    var oldScrollY = 0;
  
  window.addEventListener('scroll', function(){
    var div = document.querySelector('.map-header');
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var dY = scrolled - oldScrollY;
    if ( dY > 0 ){
      div.classList.add('header_hidden');
    } else if(document.querySelector('.map-header')){
      div.classList.remove('header_hidden');
    }
    oldScrollY = scrolled;
  });
  }
  React.useEffect(()=>{
    if(location.pathname.split('/').length>=4 && isMobile){
      setList(true)
      
    }
    else{
      if(isMobile){
        setSingleItem(null)
      }
    }
    if(location.pathname.split('/')[1]=='map' && location.pathname.split('/').length<4){
      
      setSingleItem(null)
    }
  },[location.pathname])
  // const locType=location.pathname.split('/')[2]
  // const locId=location.pathname.split('/')[3]
  // if(location.pathname.split('/').length>=4 && isMobile){
  //   console.log(items,locType,locId)
  //   itemsToShow=items.filter((item)=>(item.type==locType && locId==item.id))
  // }
  return (
    <>
      {list?
        <header className="map-header">
        <div className="wrapper">
        <div className="container">
        <h2 className="category__title">{buttons[active]? buttons[active].name :"Все"}</h2>
        </div>
        <div className="sidebar-container">
        
          <div className="single-map-header">
            
            {location.pathname==='/map/'?
            <Link to="/" className="home__button">
              <img src="/images/home.svg" alt=""/>
            </Link>
            :
            <Link className="back__button" to="/map/">
              <img src="/images/nazad.png" alt="" />
            </Link>
            }
            {location.pathname.split('/').length>=4 && isMobile && !singleItem?
            <Link onClick={()=>setList(!list)} className="back__button" to="/map/">
              <img src="/images/map.svg" alt="" />
            </Link>
            :
            <button onClick={()=>setList(!list)} className="to-map__button">
                <img src="/images/map.svg" alt="" />
              </button>
            }
              
          </div>
        </div>
        <div className="row"></div>
        </div>
        
      </header>
      :null}
      <div className="map-container">
        {isMobile && !list? 
        <button onClick={()=>setList(!list)} className={location.pathname.split("/").length>=4? "to-list__button single_to-list__button":"to-list__button"}>
          <img src="/images/to-list.svg" alt="" />
          {location.pathname.split('/').length>=4?
          <span>Перейти к описанию заведения</span>
          :null}
        </button> : null}


        <section className={list? "map-content": "map-content list-disabled"}>
        {/* <header className="map-header">
        <div className="wrapper">
        <div className="container">
        <h2 className="category__title">{buttons[active]? buttons[active].name :"Все"}</h2>
        </div>
        <div className="sidebar-container">
        
          <div className="single-map-header">
            
            {location.pathname==='/map/'?
            <Link to="/" className="home__button">
              <img src="/images/home.svg" alt=""/>
            </Link>
            :
            <Link className="back__button" to="/map/">
              <img src="/images/nazad.png" alt="" />
            </Link>
            }
            
              <button onClick={()=>setList(!list)} className="to-map__button">
                <img src="/images/map.svg" alt="" />
              </button>
          </div>
        </div>
        <div className="row"></div>
        </div>
        
      </header> */}
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
            
            
            <>
            
            {active!==-1 && (buttons[active].name==="Еда")?
              <>
               
                  {isMobile? null :
                  <div className="categories">
                  <>
                  {categoriesNamesUnique.map((item,index)=>(
                    <span key={item.id} onClick={()=>setCategory(item)} className={activeCategory==item? "categorie__name active_name": "categorie__name"}>{item}</span>
                  ))}
                  </>
                  </div>}
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
            {itemsToShow.length? (itemsToShow.map((post,index)=>(
              <div className={index%5===0? "item cafe-item cafe-item-wide" : "item cafe-item"} onClick={()=>setSingleItem(post)}>
                  <Link to={'/map/'+post.type+`/${post.id}`}>
                    <img className="cafe-item__img" src={post.acf["cafe-item-main-img"]} alt="" />
                  </Link>
                  <div className="item-info">
                  <div className="prefs">
                              <div className="price">
                              { [...Array(Number(post.acf["cafe-item-prices"]))].map((item, index) =>                       
                              <span className="active_price" key={index}><img src={post.type==='routes'? "/images/people.svg":"/images/rub.svg"} alt=""/></span>
                              ) }
                              { [...Array(5-Number(post.acf["cafe-item-prices"]))].map((item, index) =>                       
                              <span key={index}><img src={post.type==='routes'? "/images/people.svg":"/images/rub.svg"} alt=""/></span>
                              ) }
                              </div>
                              {post.acf["cafe-item-vegan"]? 
                              <img src={post.type==='routes'? "/images/bike.svg":"/images/vegan.svg"} alt="" className="vegan-icon" />
                              : null}
                              
                            </div>
                    <Link to={'/map/'+post.type+`/${post.id}`}>
                      <h3 className="item__title">{post.title.rendered}</h3>
                    </Link>
                    <div className="address">
                      <img src="/images/pin.svg" alt="" className="pin" />
                      <span className="address__text">{post.acf["cafe-item-address"]}</span>
                    </div>

                    
                    {/* <button className="fave__button" onClick={cart.includes('"id":'+post.id)? removeCartItem(post): addPizzaToCart(post)}>
                      {cart.includes('"id":'+post.id)? 
                        <img onClick={()=>{setG(!g)}} src={g? "/images/fave_active.svg":"/images/fave.svg"} alt="" />
                      : <img onClick={()=>setActiveHeart(!activeHeart)} src={activeHeart? "/images/fave_active.svg":"/images/fave.svg"} alt="" />}
                    </button> */}
                  </div>
                </div>
              
                    ))):''}
            </div>
            </>

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
          {isMobile?null:
            <div className="map-buttons">
              <Link className="back__button" to="/map/">
                <img src="/images/nazad.png" alt="" />
              </Link>
              <Link to="/" className="home__button">
                <img src="/images/home.svg" alt=""/>
              </Link>
            </div>
          }
          <BigMap posts={itemsToShow} center={"55.73888474603424,37.624613416794176"} left={"55.72686420065968, 37.59815874589736"}
                right={"55.74984851730395, 37.652010279938324"} overlay={"/images/overlay.svg" }
              />
        </section> }
      </div>
    </>
  )
}

export default MapPage
