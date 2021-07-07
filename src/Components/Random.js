import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import {Link as ScrolLink} from 'react-scroll';
import { fetchRandom } from '../redux/actions/random';
import '../scss/Components/Random.scss'

function Random({single,main}) {
  const dispatch = useDispatch();

  const posts=useSelector(({posts})=>posts.posts);
  // const isLoadedPosts=useSelector(({posts})=>posts.isLoaded);
  const foodcorts=useSelector(({foodcorts})=>foodcorts.foodcorts);
  // const isLoadedFoodcorts=useSelector(({foodcorts})=>foodcorts.isLoaded);
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

  console.log(coffee)



  const isLoadedRoutes=useSelector(({random})=>random.isLoadedRoutes);

  React.useEffect(()=>{
    if(!isLoadedRoutes){
      dispatch(fetchRandom());
      // console.log(isLoadedPlaces,isLoadedRoutes)
    }
    // else{if(!isLoadedRoutes){
      // alert(2)
      // dispatch(fetchFoodcorts());
    // }}
      
    // if(!(isLoadedPlaces && isLoadedRoutes)){
    //   dispatch(fetchRandom());
    // }
  },[isLoadedRoutes,dispatch]);
  

  const [active,setActive]=useState(-1)
  const toggleButton=(index)=>{
    setActive(index)
  }
  
  const buttons=[{name:"Еда",type:'post',data:posts},
                  {name:"Маршрут прогулки",type:'routes',data:routes},
                 {name:"Фудкорт",type:'foodcorts',data:foodcorts},
                 {name:"Кофе",type:'post',data:coffee}]
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function randomItem(items){
    if(items.length){
      // console.log(items.length,items[getRandomInt(items.length)].id);
      return items[getRandomInt(items.length)].id
    }
  }
  return (
    <>
      <div className="random" id="random">
        {main?
        <div className="random-top">
          <h3 className="random__title">Или мы подберем <strong>рандомное</strong></h3>
          <img src="/images/shuffle.svg" alt="" />
        </div>
        :
        <>
        <h3 className="random__title">Рандомайзер</h3>
        <span>Если не можете определиться</span>
        </>}
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
        <Link to={active!==-1? '/'+ buttons[active].type +'/'+randomItem(buttons[active].data) : "/"} className="button random__generate" onClick={(posts)=>randomItem(posts)}>Сгенерировать</Link>
      </div>
      {/* {single?
      null:
      <ScrolLink spy={true}
            smooth={true}
            offset={-75}
            duration= {500} className="to-random" to="random">
        <div className="to-random__button">
          <img src="/images/shuffle.svg" alt="" />
        </div>
      </ScrolLink>} */}
    </>
  )
}

export default Random
