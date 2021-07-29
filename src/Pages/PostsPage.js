import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CafeItem from '../Components/CafeItem';
import Random from '../Components/Random';
import Share from '../Components/Share';
import { fetchPosts, setVisiblePosts } from '../redux/actions/posts';
import { motion } from 'framer-motion';

import '../scss/Pages/BlogList.scss'
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import '../scss/Transitions.scss'
import { CSSTransition } from 'react-transition-group';

  
function PostsPage({map}) {

  const [categoryIsChanged,setCategoryIsChanged]=useState(true)


  const windowWidth = Dimensions.get('window').width;
  const isMobile = (windowWidth<1280) || map

  // window.scrollTo(0, 0)

  const dispatch = useDispatch();
  const items=useSelector(({posts})=>posts.posts);
  const visiblePosts=useSelector(({posts})=>posts.visiblePosts);
  const isLoaded=useSelector(({posts})=>posts.isLoaded);
  const [showPosts,setShowPost]=useState(false)

  
  React.useEffect(()=>{
    if(!isLoaded){
      dispatch(fetchPosts());
    }
  },[dispatch]);


  React.useEffect(()=>{
    if(isLoaded){
      setShowPost(true)
    }
    console.log(isLoaded,showPosts)
  })
  

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
    setCategoryIsChanged(false)
    setTimeout(()=>{setCategoryIsChanged(true)},100)
  }
  const filtredItems=arrayCat.map((item,index)=>(
    item.findIndex(i=>i===active)
  ))
  let itemsToShow=[]
  if(isLoaded){
    itemsToShow=items.filter((item)=>(filtredItems[items.indexOf(item)]>=0))
  }
  const cart=localStorage.getItem('itemsCart')+''


  console.log(itemsToShow)
  return (
    <>
    {map? null:<Header/>}
      <div className="wrapper">
      <div className="blog-page page">
        <div className="container">
      
          <CSSTransition
                in={showPosts}
                out={showPosts}
                timeout={1000}
                classNames="newstransition"
                unmountOnExit
              >
          <div>
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

          
          <CSSTransition
                in={categoryIsChanged}
                timeout={1000}
                classNames="newstransition"
                unmountOnExit
              >
          <div>
          <div className="items-list">
          {(itemsToShow.slice(0, visiblePosts).map((item,index)=>(

            <CafeItem  map={map} toDelete={cart.includes('"id":'+item.id)}
                         wide={isMobile? index%3===0: (index%9)%4===0} post={item}/>
                  )))}
                  
          </div>
          </div>
          </CSSTransition>
          {itemsToShow.length > visiblePosts &&
             <button className="button load-more" onClick={()=>(dispatch(setVisiblePosts()))} type="button">Загрузить ещё</button>
          }
          </div>
          
          </CSSTransition>
          {isMobile? <Random/> : null}
          

        </div>
        {isMobile? null:
          <div className="sidebar-container">
              <div div className="right-banner"></div>
              <Random/>
              <Share/>
          </div>
        }
      </div>
      {map?null:<Footer/>}
      </div>
    </>
  )
}

export default PostsPage