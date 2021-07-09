import React from 'react'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoodcorts } from '../../redux/actions/foodcorts';
import { fetchPosts } from '../../redux/actions/posts';

import '../../scss/Components/Single/Nearby.scss'
import CafeItem from '../CafeItem'


function Nearby({data}) {
  const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)

  const dispatch = useDispatch();

  const items=useSelector(({posts})=>posts.posts);
  const isLoaded=useSelector(({posts})=>posts.isLoaded);

  const foodcorts=useSelector(({foodcorts})=>foodcorts.foodcorts);
  const isLoadedFoodcorts=useSelector(({foodcorts})=>foodcorts.isLoaded);

  React.useEffect(()=>{
      if(!(isLoaded)){
        dispatch(fetchPosts());
       }
       if(!(isLoadedFoodcorts)){
        dispatch(fetchFoodcorts());
       }
  },[dispatch]);

  let filtredArr=[]

  if(isLoaded && isLoadedFoodcorts){
    const nearbyFoodcorts=data.filter((item)=>(
      item.post_type==="foodcorts"
    ))
    const nearbyPosts=data.filter((item)=>(
      item.post_type==="post"
    ))
  
      nearbyPosts.map((i,index)=>(
        filtredArr.push(items.find((item)=>item.id==i.ID))
      ))
      nearbyFoodcorts.map((i,index)=>(
        filtredArr.push(foodcorts.find((item)=>item.id==i.ID))
      ))
  }
  const cart=localStorage.getItem('itemsCart')+''

  return (
    <>
      
        <section className="nearby">
        <h2 className="nearby__title">Заведения поблизости</h2>
        <div className="items-list">
          {filtredArr.map((item,index)=>(
              <CafeItem key={index}  toDelete={cart.includes('"id":'+item.id)} wide={isMobile? index%3===0: (index%9)%4===0} post={item} />
          ))}
        </div>
      </section>
      
    </>
  )
}

export default Nearby
