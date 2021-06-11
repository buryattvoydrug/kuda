import axios from 'axios';
import React from 'react'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Random from '../Components/Random';
import Share from '../Components/Share';
import Menu from '../Components/Single/Menu';
import SingleBottom from '../Components/Single/SingleBottom';
import SingleHead from '../Components/Single/SingleHead';
import SlimBlock from '../Components/Single/SlimBlock';
import WideBlock from '../Components/Single/WideBlock';
import SocialLinks from '../Components/SocialLinks';
import { fetchPosts } from '../redux/actions/posts';

import '../scss/Pages/Single.scss'

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)

function Single() {
  window.scrollTo(0, 0)

  const dispatch = useDispatch();
  const items=useSelector(({posts})=>posts.posts);
  const isLoaded=useSelector(({posts})=>posts.isLoaded);

  React.useEffect(()=>{
    if(!isLoaded){
      dispatch(fetchPosts());
    }
  },[dispatch]);

  const location = useLocation();
  const postLocation=location.pathname.split('/')
  const postNumber=postLocation[postLocation.length-1]
  const post=items.find((item)=>(item.id==postNumber))

  return (
    <>
      <section className="single-page page">
      <div className="container">

      { isLoaded ? (
          <>
          <SingleHead date={post.date.split('-')} post={post}/>
          <WideBlock img={post.acf["cafe-item-img1"]} text={post.acf["cafe-item-text1"]} />
          <SlimBlock post={post}/>
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
export default Single




// export default class Single extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       loading:false,
//       post:{},
//       error:''
//     }
//   }
  
//   componentDidMount(){
//     const wordPressSiteUrl="http://nikuda.poydemkuda.ru/index.php";
//     this.setState({loading:true},
//       ()=>{
//         axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/posts/${this.props.match.params.id}`)
//         .then(res=>{this.setState({loading:false, post:res.data})})
//         .catch(error=>this.setState({loading:false,error:error.response}))
//       }
//     );
//   }

//   render() {
//     const {post}=this.state
//     return (
      
//     )
//   }
// }