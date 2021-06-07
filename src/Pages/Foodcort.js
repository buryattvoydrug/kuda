import axios from 'axios';
import React from 'react'
import { Dimensions } from 'react-native';
import Random from '../Components/Random';
import Share from '../Components/Share';
import CornerItem from '../Components/Single/CornerItem';
import SingleBottom from '../Components/Single/SingleBottom';
import SingleHead from '../Components/Single/SingleHead';
import SocialLinks from '../Components/SocialLinks';

import '../scss/Pages/Foodcort.scss'
import '../scss/Pages/Single.scss'

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


export default class Foodcort extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loading:false,
      foodcort:{},
      error:''
    }
  }
  
  componentDidMount(){
    window.scrollTo(0, 0)
    const wordPressSiteUrl="http://nikuda.poydemkuda.ru/index.php";
    this.setState({loading:true},
      ()=>{
        axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/foodcorts/${this.props.match.params.id}`)
        .then(res=>{this.setState({loading:false, foodcort:res.data})})
        .catch(error=>this.setState({loading:false,error:error.response}))
      }
    );
  }
  render() {
    const {foodcort}=this.state
    
    return (
      <>
      <section className="single-page page">
        <div className="container">
      { Object.keys( foodcort ).length ? (
          <>
          {console.log(foodcort.acf.corners)}

          <SingleHead post={foodcort} corners/>
          <section className="corners-page">
            <h2 className="corners__title">Корнеры</h2>
            <div className="corners">
              <CornerItem data={foodcort.acf.corners}/>
            </div>
          </section>
          <SingleBottom post={foodcort} />
          </>
      ):""}

        </div>
        {isMobile? null:
          <div className="sidebar-container">
            <Share/>
            <div className="right-banner"></div>
          </div>
        }
      </section>
    </>
    )
  }
}