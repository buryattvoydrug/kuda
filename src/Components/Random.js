import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchFoodcorts } from '../redux/actions/foodcorts';
import { fetchPosts } from '../redux/actions/posts';
import { fetchRandom } from '../redux/actions/random';
import '../scss/Components/Random.scss'

function Random() {
  const dispatch = useDispatch();

  const posts=useSelector(({posts})=>posts.posts);
  const isLoadedPosts=useSelector(({posts})=>posts.isLoaded);

  const foodcorts=useSelector(({foodcorts})=>foodcorts.foodcorts);
  const isLoadedFoodcorts=useSelector(({foodcorts})=>foodcorts.isLoaded);

  const places=useSelector(({random})=>random.places);
  const isLoadedPlaces=useSelector(({random})=>random.isLoadedPlaces);

  const routes=useSelector(({random})=>random.routes);
  const isLoadedRoutes=useSelector(({random})=>random.isLoadedRoutes);

  React.useEffect(()=>{
    // if(!isLoadedPosts){
    //   dispatch(fetchPosts());
    // }
    // if(!isLoadedFoodcorts){
    //   dispatch(fetchFoodcorts());
    // }
    if(!isLoadedPlaces || !isLoadedRoutes){
      dispatch(fetchRandom());

    }
  },[isLoadedPlaces,isLoadedRoutes,dispatch]);
  

  const [active,setActive]=useState(-1)
  const toggleButton=(index)=>{
    setActive(index)
  }
  // const buttons=['Заведение','Фудкорт','Новость']
  
  const buttons=[{name:"Еда",type:'post',data:posts},
                  {name:"Места",type:'place',data:places},
                  {name:"Маршрут прогулки",type:'route',data:routes},
                 {name:"Фудкорт",type:'foodcort',data:foodcorts}]
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function randomItem(items){
    if(items.length){
      console.log(items.length,items[getRandomInt(items.length)].id);
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
              <button onClick={()=>toggleButton(index)} className={active===index? " random__button active_button" : " random__button"}>
                <span>{buttons[index].name}</span>
                <img src="/images/icon.png" alt="" />
              </button>)}
        </div>
        <Link to={active!==-1? '/'+ buttons[active].type +'/'+randomItem(buttons[active].data) : "/"} className="button random__generate" onClick={(posts)=>randomItem(posts)}>Сгенерировать</Link>
      </div>
    </>
  )
}

export default Random
