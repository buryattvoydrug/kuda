import axios from 'axios';
import React from 'react'
import { Dimensions } from 'react-native';
import Share from '../Components/Share';
import NewsItem from '../Components/Single/NewsItem';
import SingleBottom from '../Components/Single/SingleBottom';
import SlimBlock from '../Components/Single/SlimBlock';
import WideBlock from '../Components/Single/WideBlock';

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)

export default class SingleBlog extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loading:false,
      newsitem:{},
      error:''
    }
  }
  
  componentDidMount(){
    window.scrollTo(0, 0)
    const wordPressSiteUrl="https://localhost/wordpress";
    this.setState({loading:true},
      ()=>{
        axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/news/${this.props.match.params.id}`)
        .then(res=>{this.setState({loading:false, newsitem:res.data})})
        .catch(error=>this.setState({loading:false,error:error.response.data}))
      }
    );
  }
  render() {
    const {newsitem}=this.state
    return (
      <>
      <section className="single-page page">
        <div className="container">
        { Object.keys( newsitem ).length ? (
          <>
          <div className="main-banner"></div>
          {isMobile? 
          <div className="main-banner"></div>
          :null
          }
          <NewsItem post={newsitem}/>
          <WideBlock post={newsitem}/>
          {isMobile? 
          <Share wide/>
          :<div className="main-banner"></div>
          }
          <SlimBlock post={newsitem}/>
          {isMobile? 
          <div className="right-banner"></div> : null
          }
          <SingleBottom post={newsitem}/>
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
