import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import {Link as ScrolLink} from 'react-scroll';
import { fetchRandom } from '../redux/actions/random';
import '../scss/Components/Random.scss'

function Random({single}) {
  const dispatch = useDispatch();

  const posts=useSelector(({posts})=>posts.posts);
  // const isLoadedPosts=useSelector(({posts})=>posts.isLoaded);

  const foodcorts=useSelector(({foodcorts})=>foodcorts.foodcorts);
  // const isLoadedFoodcorts=useSelector(({foodcorts})=>foodcorts.isLoaded);


  const routes=useSelector(({random})=>random.routes);
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
                 {name:"Фудкорт",type:'foodcorts',data:foodcorts}]
  
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
        <h3 className="random__title">Рандомайзер</h3>
        <span>Если не можете определиться</span>
        <div className="random-block">
          {buttons.map((item,index)=>
              <button key={index} onClick={()=>toggleButton(index)} className={active===index? " random__button active_button" : " random__button"}>
                <span>{buttons[index].name}</span>
                <img src="/images/icon.png" alt="" />
              </button>)}
        </div>
        <Link to={active!==-1? '/'+ buttons[active].type +'/'+randomItem(buttons[active].data) : "/"} className="button random__generate" onClick={(posts)=>randomItem(posts)}>Сгенерировать</Link>
      </div>
      {single?
      null:
      <ScrolLink spy={true}
            smooth={true}
            offset={-75}
            duration= {500} className="to-random" to="random">
        <div className="to-random__button">
          <img src="/images/shuffle.svg" alt="" />
        </div>
      </ScrolLink>}
    </>
  )
}

export default Random
