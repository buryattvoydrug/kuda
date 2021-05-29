import axios from 'axios';
import React from 'react'
import { Dimensions } from 'react-native';

import '../../scss/Components/Single/CornerItem.scss'
import Share from '../Share';
import Menu from './Menu';

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


export default class CornerItem extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loading:false,
      data:this.props.data,
      corners:[],
      error:''
    }
  }
  
  componentDidMount(){
    window.scrollTo(0, 0)
    const wordPressSiteUrl="https://localhost/wordpress";
    let tmp=[]
    this.state.data.map((item,index)=>(
      this.setState({loading:true},
        ()=>{
          axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/corners/${item.ID}`)
          .then(res=>{
            tmp.push(res.data)
            this.setState({loading:false, corners:tmp})
          })
          .catch(error=>this.setState({loading:false,error:error.response.data}))
        }
      )
    ))
  }
  render() {

    return (
      <>
      {this.state.corners.map((item,index)=>(
        <div key={index} className="corner">
                  <img src={item.acf["cafe-item-main-img"]} alt="" className="corner__image" />
                  <div className="corner-info">
                  <h3 className="item__title">{item.acf["cafe-item-title"]}</h3>
                    <div className="address">
                      <img src="http://localhost:3000/images/pin.svg" alt="" className="pin" />
                      <span className="address__text">{item.acf.address}</span>
                    </div>
                    <div className="prefs">
                    <div className="price">
                    
                    { [...Array(Number(item.acf["cafe-item-prices"]))].map((i, index) =>                       
                    <span className="active_price" key={index}><img src="http://localhost:3000/images/rub.svg" alt=""/></span>
                    ) }
                    { [...Array(5-Number(item.acf["cafe-item-prices"]))].map((i, index) =>                       
                    <span key={index}><img src="http://localhost:3000/images/rub.svg" alt=""/></span>
                    ) }
                    </div>
                    {item.acf["cafe-item-vegan"]? 
                    <img src="http://localhost:3000/images/vegan.svg" alt="" className="vegan-icon" />
                    : null}
                    
                  </div>
                    <button className="fave__button">
                      <img src="http://localhost:3000/images/fave.svg" alt="" />
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
                  {isMobile? 
                  <Share wide/>
                  :<div className="main-banner"></div>
                  }
                </div>
      ))}
        
      </>
    )
  }
}