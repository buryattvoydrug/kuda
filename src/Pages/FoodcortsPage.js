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


export default class FoodcortsPage extends React.Component {

  constructor(props){
    super(props);
    this.state={
      loading:false,
      foodcorts:[],
      visiblefoodcorts: 9,
      error:''
    }
    this.loadMorefoodcorts = this.loadMorefoodcorts.bind(this);
  }
  loadMorefoodcorts() {
    this.setState((prev) => {
      return {visiblefoodcorts: prev.visiblefoodcorts + 9};
    });
  }
  componentDidMount(){
    // http://nikuda.poydemkuda.ru/index.php
    const wordPressSiteUrl="http://nikuda.poydemkuda.ru/index.php";
    this.setState({loading:true},
      ()=>{
        axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/foodcorts`)
        .then(res=>{this.setState({loading:false, foodcorts:res.data})})
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
    const {foodcorts}=this.state
    return (
      <>
      <div className="blog-page page">
        <div className="container">
      { Object.keys( foodcorts ).length ? (

          <>
          <div className="category-type">
            <h2 className="category__title">Фудкорты</h2>
            {isMobile? null :
            <div className="categories">
              <span className="categorie__name active_name">Все</span>
              <span className="categorie__name">Пицца</span>
              <span className="categorie__name">Суши</span>
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
          
          <div className="items-list">
          {foodcorts.length? (this.state.foodcorts.slice(0, this.state.visiblefoodcorts).map((post,index)=>(
                    <CafeItem wide={isMobile? index%3===0: (index%9)%4===0} key={post.id} post={post}/>
                  ))):''}
          </div>
          {this.state.visiblefoodcorts < this.state.foodcorts.length &&
             <button className="button load-more" onClick={this.loadMorefoodcorts} type="button">Загрузить ещё</button>
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