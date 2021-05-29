import axios from 'axios';
import React from 'react'
import { Dimensions } from 'react-native';
import Random from '../Components/Random';
import Share from '../Components/Share';
import DoubleSlim from '../Components/Single/DoubleSlim';
import Nearby from '../Components/Single/Nearby';
import PlaceHead from '../Components/Single/PlaceHead';
import WideBlock from '../Components/Single/WideBlock';
import WidePlaces from '../Components/Single/WidePlaces';
import SocialLinks from '../Components/SocialLinks';

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


export default class Routee extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loading:false,
      route:{},
      error:''
    }
  }
  componentDidMount(){
    const wordPressSiteUrl="https://localhost/wordpress/";
    this.setState({loading:true},
      ()=>{
        axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/routes/${this.props.match.params.id}`)
        .then(res=>{this.setState({loading:false, route:res.data})})
        .catch(error=>this.setState({loading:false,error:error.responce}))
      }
    );
  }
  render() {
    const route=this.state.route
    console.log(route)

    return (
      <>
      <section className="single-page page">
        <div className="container">
      { Object.keys( route ).length ? (

          <>
          <div className="main-banner"></div>
          <PlaceHead place={route}/>
          <WidePlaces text={route.acf["wide-text1"]} img={route.acf["wide-img1"]}/>
          <DoubleSlim place={route}/>
          <WidePlaces text={route.acf["wide-text2"]} img={route.acf["wide-img2"]}/>

          {isMobile? 
          <div className="main-banner"></div>
          :null
          }
          <Nearby data={route.acf["places-nearby"]}/>
          <Share wide/>

                    {isMobile? 
          <div className="right-banner"></div> : null
          }
          {isMobile? <Random/> : null}
          </>
      ):""}

          </div>
        {isMobile? null:
          <div className="sidebar-container">
            <Random/>
            <SocialLinks/>
            <div className="right-banner"></div>
          </div>
        }
      </section>
    </>
    )
  }
}