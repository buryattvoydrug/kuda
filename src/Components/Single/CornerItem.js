import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCorners } from '../../redux/actions/corners';
import renderHTML from "react-render-html";


import '../../scss/Components/Single/CornerItem.scss'
import Menu from './Menu';


function CornerItem({data,address}) {
  const dispatch = useDispatch();
  const corners=useSelector(({corners})=>corners.corners);
  const isLoaded=useSelector(({corners})=>corners.isLoaded);
  React.useEffect(()=>{
    if(!isLoaded){
      dispatch(fetchCorners());
    }
  },[isLoaded,dispatch]);
  let filtredArr=[]
  if(isLoaded){
    data.map((i,index)=>(
      filtredArr.push(corners.find((item)=>item.id==i))
    ))

  }
  return (
    <>
      {isLoaded? filtredArr.map((item,index)=>(
        <div key={index} className="corner">
                  <img src={item.acf["cafe-item-main-img"]} alt="" className="corner__image" />
                  <div className="corner-info">
                  <h3 className="item__title">{item.acf["cafe-item-title"]}</h3>
                    <div className="address">
                      <img src="/images/pin.svg" alt="" className="pin" />
                      <span className="address__text">{address}</span>
                    </div>
                    <div className="prefs">
                    <div className="price">
                    
                    { [...Array(Number(item.acf["cafe-item-prices"]))].map((i, index) =>                       
                    <span className="active_price" key={index}><img src="/images/rub.svg" alt=""/></span>
                    ) }
                    { [...Array(5-Number(item.acf["cafe-item-prices"]))].map((i, index) =>                       
                    <span key={index}><img src="/images/rub.svg" alt=""/></span>
                    ) }
                    </div>
                    {item.acf["cafe-item-vegan"]? 
                    <img src="/images/vegan.svg" alt="" className="vegan-icon" />
                    : null}
                    
                  </div>
                  </div>
                  <section className="slim-block">
                    <p className="slim-text">
                    <Menu post={item}/>
                    {renderHTML(item.acf["cafe-item-text1"])}
                    </p>
                    <div className="slim-image">
                      <img src={item.acf["cafe-item-img2"]} alt="" />
                    </div>
                  </section>
<<<<<<< HEAD
                  </div>
=======
                </div>
>>>>>>> origin/favs
      )):""}
        
      </>
  )
}

export default CornerItem