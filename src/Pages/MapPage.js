import React, { useState } from 'react'
import App from '../App'
import '../scss/Pages/MapPage.scss'
import Main from './Main'
import PostsPage from './PostsPage'
import BigMap from '../Components/BigMap'
import {Route, Switch, useLocation } from 'react-router-dom'
import PageNotFound from './PageNotFound'
import Single from './Single'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRandom } from '../redux/actions/random'
import CafeItem from '../Components/CafeItem'
import { fetchPosts } from '../redux/actions/posts'
import { fetchFoodcorts } from '../redux/actions/foodcorts'
import { fetchNews } from '../redux/actions/news'
import Foodcort from './Foodcort'
import Routee from './Routee'
            


function MapPage() {
  const dispatch = useDispatch();

  const posts=useSelector(({posts})=>posts.posts);
  const isLoadedPosts=useSelector(({posts})=>posts.isLoaded);
  const foodcorts=useSelector(({foodcorts})=>foodcorts.foodcorts);
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
  
  
  const filtredItems=arrayCat.map((item,index)=>(
    item.findIndex(i=>i==='Кофе')
  ))
  let coffee=[]
  coffee=posts.filter((item)=>(filtredItems[posts.indexOf(item)]>=0))




  const isLoadedRoutes=useSelector(({random})=>random.isLoadedRoutes);

  React.useEffect(()=>{
      dispatch(fetchRandom());
      dispatch(fetchPosts());
        dispatch(fetchFoodcorts());
        dispatch(fetchNews());
      // console.log(isLoadedPlaces,isLoadedRoutes)
    // else{if(!isLoadedRoutes){
      // alert(2)
      // dispatch(fetchFoodcorts());
    // }}
      
    // if(!(isLoadedPlaces && isLoadedRoutes)){
    //   dispatch(fetchRandom());
    // }
  },[dispatch]);
  const buttons=[{name:"Еда",type:'post',data:posts},
                  {name:"Маршрут прогулки",type:'routes',data:routes},
                 {name:"Фудкорт",type:'foodcorts',data:foodcorts},
                 {name:"Кофе",type:'post',data:coffee}]
  const [active,setActive]=useState(-1)
  const [items,setItems]=useState([])

  const toggleButton=(index)=>{
    setActive(index)
    setItems(buttons[index].data)
  }

  const cart=localStorage.getItem('itemsCart')+''
  console.log(posts)
  return (
    <>
      <div className="map-container">

        <section className="map-content">
            {/* <PostsPage map/> */}
            <Switch>
              <Route exact path="/map/">
                      <div className="random-block">
                    {/* {buttons.map((item,index)=> */}
                        <button id="food" onClick={()=>toggleButton(0)} className={active===0? " random__button active_button" : " random__button"}>
                          <span>Еда</span>
                          <img src="/images/food-button.png" alt="" />
                        </button>
                        <button id="foodcort" onClick={()=>toggleButton(2)} className={active===2? " random__button active_button" : " random__button"}>
                          <span>Фудкорт</span>
                          <img src="/images/foodcort-button.png" alt="" />
                        </button>
                        <button id="route" onClick={()=>toggleButton(1)} className={active===1? " random__button active_button" : " random__button"}>
                          <span>Маршрут прогулки</span>
                          <img src="/images/route-button.png" alt="" />
                        </button>
                        <button id="coffee" onClick={()=>toggleButton(3)} className={active===3? " random__button active_button" : " random__button"}>
                          <span>Кофе</span>
                          <img src="/images/coffee-button.png" alt="" />
                        </button>
                        {/* )} */}
                  </div>
                  <div className="items-list">
                  { items.map((item,index)=>(
                    <CafeItem map toDelete={cart.includes('"id":'+item.id)}
                                wide={index%3===0} post={item}/>
                          ))}
                  </div>
              </Route>
              <Route exact path="/map/post/:id"><Single map/></Route>
              <Route exact path="/map/foodcorts/:id"><Foodcort map/></Route>
              <Route exact path="/map/routes/:id"><Routee map/></Route>
            </Switch>
        </section>
        <section className="map">
        {/* <BigMap posts={items} center={"55.73888474603424,37.624613416794176"} left={"55.72686420065968, 37.59815874589736"}
              right={"55.74984851730395, 37.652010279938324"} overlay={"/images/overlay.svg" }
            /> */}
        </section>
      </div>
    </>
  )
}

export default MapPage
