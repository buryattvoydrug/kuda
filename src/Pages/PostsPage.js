import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CafeItem from '../Components/CafeItem';
import Random from '../Components/Random';
import Share from '../Components/Share';
import { fetchPosts, setVisiblePosts } from '../redux/actions/posts';
import { motion } from 'framer-motion';

import '../scss/Pages/BlogList.scss'

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


function PostsPage() {

  // window.scrollTo(0, 0)

  const dispatch = useDispatch();
  const items=useSelector(({posts})=>posts.posts);
  const visiblePosts=useSelector(({posts})=>posts.visiblePosts);
  const isLoaded=useSelector(({posts})=>posts.isLoaded);

  
  React.useEffect(()=>{
    if(!isLoaded){
      dispatch(fetchPosts());
    }
  },[isLoaded,dispatch]);


  
  
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2
    }
  };

  let categories=[]
  let categoriesNames=[]
  if(items){
    items.map((item,index)=>{categories.push((items[index].acf.type))})
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
  const [active,setActive]=useState("Все")
  function setCategory(cat){
    setActive(cat)
  }
  const filtredItems=arrayCat.map((item,index)=>(
    item.findIndex(i=>i===active)
  ))
  let itemsToShow=[]
  if(isLoaded){
    itemsToShow=items.filter((item)=>(filtredItems[items.indexOf(item)]>=0))
  }
  const cart=localStorage.getItem('itemsCart')+''
  // console.log(cart)
  return (
    <>
      <div className="blog-page page">
        <div className="container">
      { isLoaded? (
          
          <motion.div initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}>
          <div className="category-type">
            <h2 className="category__title">Заведения</h2>
            {isMobile? null :
            <div className="categories">
            {categoriesNamesUnique.map((item,index)=>(
              <span key={item.id} onClick={()=>setCategory(item)} className={active==item? "categorie__name active_name": "categorie__name"}>{item}</span>
            ))}
            </div>}
          </div>
          {isMobile?
            <div className="categories">
            {categoriesNamesUnique.map((item,index)=>(
              <span key={item.id} onClick={()=>setCategory(item)} className={active==item? "categorie__name active_name": "categorie__name "}>{item}</span>
            ))}
            </div>
          :null}
          
          <div className="items-list">
          {items.length? (itemsToShow.slice(0, visiblePosts).map((item,index)=>(
            <CafeItem   toDelete={cart.includes('"id":'+item.id)}
                         wide={isMobile? index%3===0: (index%9)%4===0} post={item}/>
                  ))):''}
          </div>
          {itemsToShow.length > visiblePosts &&
             <button className="button load-more" onClick={()=>(dispatch(setVisiblePosts()))} type="button">Загрузить ещё</button>
          }
          {isMobile? <Random/> : null}
          </motion.div>
      ):""}

        </div>
        {isMobile? null:
          <div className="sidebar-container">
              <div div className="right-banner"></div>
              <Random/>
              <Share/>
          </div>
        }
      </div>
    </>
  )
}

export default PostsPage