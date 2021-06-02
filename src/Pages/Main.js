import axios from 'axios'
import React from 'react'
import { Dimensions } from 'react-native'
import { Link } from 'react-router-dom'
import CafeItem from '../Components/CafeItem'
import News from '../Components/News'
import Random from '../Components/Random'
import Share from '../Components/Share'
import SocialLinks from '../Components/SocialLinks'

import '../scss/Pages/Main.scss'


const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)

export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loading:false,
      posts:[],
      news:[],
      foodcorts:[],
      error:''
    }
  }
  componentDidMount(){
    const wordPressSiteUrl="https://localhost/wordpress/";
    this.setState({loading:true},
      ()=>{
        axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/posts`)
        .then(res=>{this.setState({loading:false, posts:res.data})})
        .catch(error=>this.setState({loading:false,error:error.responce.data}))
        axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/news`)
        .then(res=>{this.setState({loading:false, news:res.data})})
        .catch(error=>this.setState({loading:false,error:error.responce.data}))
        axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/foodcorts`)
        .then(res=>{this.setState({loading:false, foodcorts:res.data})})
        .catch(error=>this.setState({loading:false,error:error.responce.data}))
      }
    );
  }

  render() {
    const {posts}=this.state
    const {news}=this.state
    const {foodcorts}=this.state
    console.log(foodcorts)
    return (
      <>
      <div className="main-page page">
        <div className="container">
          <News news={news}/>
          <div className="categories">
            <span className="categorie__name active_name">Все</span>
            <span className="categorie__name">Концерты</span>
            <span className="categorie__name">Фудкорты</span>
            <span className="categorie__name">Кофе</span>
            <span className="categorie__name">Секонды</span>
          </div>
          <div className="items-list">
            { Object.keys( posts ).length ? (
              <>
              {posts.length? (posts.map((post,index)=>(
                    <CafeItem wide={index%4===0} key={post.id} post={post}/>
                  ))):''}
              </>
              ):""}
                  <>
                  
                
                  </>
                  
            
            
            {/* <CafeItem wide type="Фудкорт"/> */}
            {/* <CafeItem /> */}
            {/* <CafeItem /> */}
            {/* <CafeItem /> */}
            {/* <CafeItem /> */}
            {/* <Share/> */}
            {/* <CafeItem /> */}
            {/* <CafeItem wide/> */}
            {/* <CafeItem /> */}
          </div>
          <div className="items-list">
          { Object.keys( foodcorts ).length ? (
              <>
          {foodcorts.length? (foodcorts.map((foodcort,index)=>(
                  <CafeItem type="Фудкорт" key={foodcort.id} post={foodcort}/>
                ))):''}
                </>
              ):""}
          </div>
          <button className="button load-more">Загрузить ещё</button>
          {isMobile? <Random/> : null}
        </div>
        {isMobile? null:
          <div className=" sidebar-container">
            <div className="right-sidebar-container">
              <Random/>
            </div>
          </div>
        }
      </div>
    </>
    )
  }
}

