import axios from 'axios';
import React from 'react'
import { Dimensions } from 'react-native';
import Random from '../Components/Random';
import Share from '../Components/Share';
import DoubleSlim from '../Components/Single/DoubleSlim';
import Nearby from '../Components/Single/Nearby';
import PlaceHead from '../Components/Single/PlaceHead';
import SingleHead from '../Components/Single/SingleHead';
import SocialLinks from '../Components/SocialLinks';


const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)

export default class Places extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loading:false,
      place:{},
      error:''
    }
  }
  componentDidMount(){
    const wordPressSiteUrl="https://localhost/wordpress/";
    this.setState({loading:true},
      ()=>{
        axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/places/${this.props.match.params.id}`)
        .then(res=>{this.setState({loading:false, place:res.data})})
        .catch(error=>this.setState({loading:false,error:error.responce}))
      }
    );
  }
  render() {
    const place=this.state.place
    console.log(place)
    return (
      <>
      <section className="single-page page">
        <div className="container">
      { Object.keys( place ).length ? (

          <>
          <div className="main-banner"></div>
          <PlaceHead place={place}/>
          <DoubleSlim place={place}/>
          <Nearby data={place.acf["places-nearby"]}/>
          <Share wide/>
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
