import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../scss/Components/Random.scss'

function Random({posts,foodcorts,news}) {
  const [active,setActive]=useState(-1)
  const toggleButton=(index)=>{
    setActive(index)
  }
  // const buttons=['Заведение','Фудкорт','Новость']
  
  const buttons=[{name:"Заведение",type:'post',data:posts},
                 {name:"Фудкорт",type:'foodcort',data:foodcorts},
                 {name:"Новость",type:'news',data:news}]
  
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
      <div className="random">
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
