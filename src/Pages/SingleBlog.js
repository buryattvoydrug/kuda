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
    const wordPressSiteUrl="http://nikuda.poydemkuda.ru/index.php";
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
    console.log(newsitem)
    return (
      <>
      <section className="single-page page">
        <div className="container">
        { Object.keys( newsitem ).length ? (
          <>
          <NewsItem post={newsitem}/>
          <WideBlock img={newsitem.acf["cafe-item-img1"]} text={newsitem.acf["cafe-item-text1"]} post={newsitem}/>
          <SlimBlock post={newsitem}/>
          
          {newsitem.acf["cafe-item-img1_копия"].length ? <WideBlock img={newsitem.acf["cafe-item-img1_копия"]} text={newsitem.acf["cafe-item-text1_копия"]} post={newsitem}/>: null}
          {newsitem.acf["cafe-item-img2_копия"].length ? <SlimBlock post={newsitem}/>: null}

          {newsitem.acf["cafe-item-img1_копия2"].length ? <WideBlock img={newsitem.acf["cafe-item-img1_копия2"]} text={newsitem.acf["cafe-item-text_копия2"]} post={newsitem}/>: null}
          {newsitem.acf["cafe-item-img2_копия2"].length ? <SlimBlock post={newsitem}/>: null}


          <SingleBottom post={newsitem}/>
          {/* {isMobile? 
          <Share wide/>
          : null
          } */}
          </>
          ):""}
        </div>
        {isMobile? null:
          <div className="sidebar-container">
            <div className="right-sidebar-container">
              <Share/>
            </div>
          </div>
        }
      </section>
    </>
    )
  }
}
