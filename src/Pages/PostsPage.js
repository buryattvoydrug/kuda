import React from 'react'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CafeItem from '../Components/CafeItem';
import Random from '../Components/Random';
import Share from '../Components/Share';
import NewsItem from '../Components/Single/NewsItem';
import SocialLinks from '../Components/SocialLinks';
import { fetchPosts, setVisiblePosts } from '../redux/actions/posts';

import '../scss/Pages/BlogList.scss'

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


function PostsPage() {
  const dispatch = useDispatch();
  const items=useSelector(({posts})=>posts.posts);
  const visiblePosts=useSelector(({posts})=>posts.visiblePosts);
  const isLoaded=useSelector(({posts})=>posts.isLoaded);

  React.useEffect(()=>{
    if(!isLoaded){
      dispatch(fetchPosts());
    }
  },[dispatch]);
  return (
    <>
      <div className="blog-page page">
        <div className="container">
      { isLoaded? (

          <>
          <div className="category-type">
            <h2 className="category__title">Заведения</h2>
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
          {items.length? (items.slice(0, visiblePosts).map((item,index)=>(
                    <CafeItem wide={isMobile? index%3===0: (index%9)%4===0} key={item.id} post={item}/>
                  ))):''}
          </div>
          {items.length > visiblePosts &&
             <button className="button load-more" onClick={()=>(dispatch(setVisiblePosts()))} type="button">Загрузить ещё</button>
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

export default PostsPage

// export default class PostsPage extends React.Component {

//   constructor(props){
//     super(props);
//     this.state={
//       loading:false,
//       posts:[],
//       visiblePosts: 9,
//       error:''
//     }
//     this.loadMorePosts = this.loadMorePosts.bind(this);
//   }
//   loadMorePosts() {
//     this.setState((prev) => {
//       return {visiblePosts: prev.visiblePosts + 9};
//     });
//   }
//   componentDidMount(){
//     // http://nikuda.poydemkuda.ru/index.php
//     const wordPressSiteUrl="http://nikuda.poydemkuda.ru/index.php";
//     this.setState({loading:true},
//       ()=>{
//         axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/posts`)
//         .then(res=>{this.setState({loading:false, posts:res.data})})
//         .catch(error=>this.setState({loading:false,error:error.responce.data}))
//         axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/news`)
//         .then(res=>{this.setState({loading:false, news:res.data})})
//         .catch(error=>this.setState({loading:false,error:error.responce.data}))
//         axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/foodcorts`)
//         .then(res=>{this.setState({loading:false, foodcorts:res.data})})
//         .catch(error=>this.setState({loading:false,error:error.responce.data}))
//       }
//     );
//   }
//   render() {
//     const {posts}=this.state
//     console.log(posts)
//     return (
      
//     )
//   }
// }