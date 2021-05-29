import axios from 'axios';
import React from 'react'
import { Dimensions } from 'react-native';
import CafeItem from '../Components/CafeItem';
import Random from '../Components/Random';
import Share from '../Components/Share';
import NewsItem from '../Components/Single/NewsItem';
import SocialLinks from '../Components/SocialLinks';

import '../scss/Pages/BlogList.scss'

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


export default class BlogList extends React.Component {

  constructor(props){
    super(props);
    this.state={
      loading:false,
      news:[],
      error:''
    }
  }
  componentDidMount(){
    const wordPressSiteUrl="https://localhost/wordpress/";
    this.setState({loading:true},
      ()=>{
        axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/news`)
        .then(res=>{this.setState({loading:false, news:res.data})})
        .catch(error=>this.setState({loading:false,error:error.responce.data}))
      }
    );
  }

  render() {
    const {news}=this.state
    console.log(news)
    return (
      <>
      <div className="main-page page">
        <div className="container">
      { Object.keys( news ).length ? (

          <>
          <div className="main-banner"></div>
          <div className="categories">
            <span className="categorie__name active_name">Все</span>
            <span className="categorie__name">Концерты</span>
            <span className="categorie__name">Фудкорты</span>
            <span className="categorie__name">Кофе</span>
            <span className="categorie__name">Секонды</span>
          </div>
          <div className="items-list blog-list">
            {news.length? (news.map(newsitem=>(
              <NewsItem key={newsitem.id} post={newsitem}/>
            ))):''}
            {/* 
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/>
            <NewsItem/> */}
          </div>
          <button className="button load-more">Загрузить ещё</button>
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
      </div>
    </>
    )
  }
}