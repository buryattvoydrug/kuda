import axios from 'axios'
import React from 'react'
import { Dimensions } from 'react-native'
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
      error:''
    }
  }
  componentDidMount(){
    const wordPressSiteUrl="http://127.0.0.1/wordpress/";
    this.setState({loading:true},
      ()=>{
        axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/posts`)
        .then(res=>{this.setState({loading:false, posts:res.data})})
        .catch(error=>this.setState({loading:false,error:error.responce.data}))
      }
    );
  }

  render() {
    const {posts}=this.state
    return (
      <>
      <div className="main-page page">
        <div className="container">
          <div className="main-banner"></div>
          <News/>
          <div className="categories">
            <span className="categorie__name active_name">Все</span>
            <span className="categorie__name">Концерты</span>
            <span className="categorie__name">Фудкорты</span>
            <span className="categorie__name">Кофе</span>
            <span className="categorie__name">Секонды</span>
          </div>
          <div className="items-list">
            {posts.length? (posts.map(post=>(
              <CafeItem key={post.id} post={post}/>
            ))):''}
            {/* <CafeItem wide type="Фудкорт"/> */}
            {/* <CafeItem /> */}
            {/* <CafeItem /> */}
            {/* <CafeItem /> */}
            {/* <CafeItem /> */}
            <Share/>
            {/* <CafeItem /> */}
            {isMobile? <div className="right-banner"></div>:null}
            {/* <CafeItem wide/> */}
            {/* <CafeItem /> */}
          </div>
          <button className="button load-more">Загрузить ещё</button>
          {isMobile? <Random/> : null}
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

