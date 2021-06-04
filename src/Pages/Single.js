import axios from 'axios';
import React from 'react'
import { Dimensions } from 'react-native';
import Random from '../Components/Random';
import Share from '../Components/Share';
import Menu from '../Components/Single/Menu';
import SingleBottom from '../Components/Single/SingleBottom';
import SingleHead from '../Components/Single/SingleHead';
import SlimBlock from '../Components/Single/SlimBlock';
import WideBlock from '../Components/Single/WideBlock';
import SocialLinks from '../Components/SocialLinks';

import '../scss/Pages/Single.scss'

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)

export default class Single extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loading:false,
      post:{},
      error:''
    }
  }
  
  componentDidMount(){
    window.scrollTo(0, 0)
    const wordPressSiteUrl="http://nikuda.poydemkuda.ru/index.php";
    this.setState({loading:true},
      ()=>{
        axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/posts/${this.props.match.params.id}`)
        .then(res=>{this.setState({loading:false, post:res.data})})
        .catch(error=>this.setState({loading:false,error:error.response}))
      }
    );
  }

  render() {
    const {post}=this.state
    return (
      <>
      <section className="single-page page">
      <div className="container">

      { Object.keys( post ).length ? (
          <>
          <div className="main-banner"></div>
          <SingleHead post={post}/>
          {isMobile? 
          <div className="main-banner"></div>
          :null
          }
          <WideBlock post={post}/>
          {isMobile? 
          <Share wide/>
          :<div className="main-banner"></div>
          }
          <SlimBlock post={post}/>
          {isMobile? 
          <div className="right-banner"></div> : null
          }
          <SingleBottom post={post}/>
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