import axios from 'axios';
import React from 'react'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCorners } from '../../redux/actions/corners';
import { fetchPosts } from '../../redux/actions/posts';

import '../../scss/Components/Single/CornerItem.scss'
import Share from '../Share';
import Menu from './Menu';

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


function CornerItem() {
  const dispatch = useDispatch();


  const corners=useSelector(({corners})=>corners.corners);
  const isLoaded=useSelector(({corners})=>corners.isLoaded);

  React.useEffect(()=>{
    if(!isLoaded){
      dispatch(fetchCorners());
    }
  },[isLoaded,dispatch]);
  return (
    <>
      {corners? corners.map((item,index)=>(
        <div key={index} className="corner">
                  <img src={item.acf["cafe-item-main-img"]} alt="" className="corner__image" />
                  <div className="corner-info">
                  <h3 className="item__title">{item.acf["cafe-item-title"]}</h3>
                    <div className="address">
                      <img src="/images/pin.svg" alt="" className="pin" />
                      <span className="address__text">{item.acf.address}</span>
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
                    <button className="fave__button">
                      <img src="/images/fave.svg" alt="" />
                    </button>
  
                    <Menu post={item}/>
                  </div>
                  <section className="slim-block">
                    <p className="slim-text">
                    {item.acf["cafe-item-text1"]}
                    </p>
                    <div className="slim-image">
                      <img src={item.acf["cafe-item-img2"]} alt="" />
                    </div>
                  </section>
                  </div>
      )):""}
        
      </>
  )
}

export default CornerItem


// export default class CornerItem extends React.Component {
//   constructor(props){
//     super(props);
//     const data=this.props.data
//     this.state={
//       loading:false,
//       data:data,
//       corners:[],
//       error:''
//     }
//     console.log(this.state.data)
//   }
  
//   componentDidMount(){
//     window.scrollTo(0, 0)
//     const wordPressSiteUrl="http://nikuda.poydemkuda.ru/index.php";
//     let tmp=[]
//     console.log(this.state.data)
//   this.state.data.map((item,index)=>(
//     this.setState({loading:true},
//       ()=>{
//         axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/corners/${item.ID}`)
//         .then(res=>{
//           tmp.push(res.data)
//           this.setState({loading:false, corners:tmp})
//         })
//         .catch(error=>this.setState({loading:false,error:error.response}))
//       }
//     )
//   ))
//   }
//   render() {
//     return (
      
//     )
//   }
// }