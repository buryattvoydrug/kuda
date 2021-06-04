import axios from 'axios';
import React from 'react'
import { Dimensions } from 'react-native';
import { Link } from 'react-router-dom';
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
      visible: 12,
      error:''
    }
    this.loadMore = this.loadMore.bind(this);
  }
  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 9};
    });
  }
  componentDidMount(){
    const wordPressSiteUrl="http://nikuda.poydemkuda.ru/index.php";
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
      <div className="blog-page page">
        <div className="container">
      { Object.keys( news ).length ? (

          <>
          <div className="category-type">
            <h2 className="category__title">Блог</h2>
            {isMobile? null :
            <div className="categories">
              <span className="categorie__name active_name">Все</span>
              <span className="categorie__name">Тег1</span>
              <span className="categorie__name">Проект</span>
              <span className="categorie__name">Говно</span>
              <span className="categorie__name">Жопа</span>
            </div>}
          </div>
          {isMobile?
              <div className="categories">
                <span className="categorie__name active_name">Все</span>
                <span className="categorie__name">Тег1</span>
                <span className="categorie__name">Проект</span>
                <span className="categorie__name">Говно</span>
                <span className="categorie__name">Жопа</span>
              </div>
          :null}
          
          <div className="items-list blog-list">
            {news.length? (this.state.news.slice(0, this.state.visible).map(newsitem=>(
              <NewsItem key={newsitem.id} post={newsitem}/>
            ))):''}
          </div>
          {this.state.visible  < this.state.news.length &&
             <button className="button load-more" onClick={this.loadMore} type="button">Загрузить ещё</button>
          }
          {isMobile? <Random/> : null}
          </>
      ):""}

        </div>
        {isMobile? null:
          <div className="sidebar-container">
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