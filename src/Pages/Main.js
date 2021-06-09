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
      visiblePosts: 9,
      news:[],
      visibleNews: 10,
      foodcorts:[],
      visibleFoodcorts: 9,
      error:''
    }
    this.loadMorePosts = this.loadMorePosts.bind(this);
    this.loadMoreFoodcorts = this.loadMoreFoodcorts.bind(this);
  }
  loadMorePosts() {
    this.setState((prev) => {
      return {visiblePosts: prev.visiblePosts + 9};
    });
  }
  loadMoreFoodcorts() {
    this.setState((prev) => {
      return {visibleFoodcorts: prev.visibleFoodcorts + 9};
    });
  }
  componentDidMount(){
    const wordPressSiteUrl="http://nikuda.poydemkuda.ru/index.php";
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
    return (
      <>
      <div className="main-page page">
        <div className="container">
          <News count={this.state.visibleNews} news={news}/>
          <div className="category-type">
            <h2 className="category__title">Заведения</h2>
            <Link to="/posts/" className="category">Показать все</Link>
          </div>
          <div className="items-list">
            { Object.keys( posts ).length ? (
              <>
              {posts.length? (this.state.posts.slice(0, this.state.visiblePosts).map((post,index)=>(
                    <CafeItem wide={isMobile? index%3===0: (index%9)%4===0} key={post.id} post={post}/>
                  ))):''}
              </>
              ):""}
          </div>
          {this.state.visiblePosts < this.state.posts.length &&
             <button className="button load-more" onClick={this.loadMorePosts} type="button">Загрузить ещё</button>
          }
          <div className="category-type">
            <h2 className="category__title">Фудкорты</h2>
            <Link to="/foodcorts/" className="category">Показать все</Link>
          </div>
          <div className="items-list">
          { Object.keys( foodcorts ).length ? (
              <>
          {foodcorts.length? (this.state.foodcorts.slice(0, this.state.visibleFoodcorts).map((foodcort,index)=>(
                  <CafeItem type={"Фудкорт"} wide={isMobile? index%3===0: (index%9)%4===0} key={foodcort.id} post={foodcort}/>
                ))):''}
                </>
              ):""}
          </div>
          {this.state.visibleFoodcorts < this.state.foodcorts.length &&
             <button className="button load-more" onClick={this.loadMoreFoodcorts} type="button">Загрузить ещё</button>
          }
          {isMobile? <Random news={news} posts={posts} foodcorts={foodcorts}/> : null}
        </div>
        {isMobile? null:
          <div className=" sidebar-container">
            <div className="right-sidebar-container">
              <Random news={news} posts={posts} foodcorts={foodcorts}/>
            </div>
          </div>
        }
      </div>
    </>
    )
  }
}

