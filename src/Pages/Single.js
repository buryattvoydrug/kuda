import React from 'react'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Share from '../Components/Share';
import SingleBottom from '../Components/Single/SingleBottom';
import SingleHead from '../Components/Single/SingleHead';
import SlimBlock from '../Components/Single/SlimBlock';
import WideBlock from '../Components/Single/WideBlock';
import { fetchPosts } from '../redux/actions/posts';
import { motion } from 'framer-motion';

import '../scss/Pages/Single.scss'
import Random from '../Components/Random';





const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)

function Single() {
  window.scrollTo(0, 0)
  const dispatch = useDispatch();
  const items=useSelector(({posts})=>posts.posts);
  const isLoaded=useSelector(({posts})=>posts.isLoaded);


  const location = useLocation();
  const postLocation=location.pathname.split('/')
  const postNumber=postLocation[postLocation.length-1]
  const post=items.find((item)=>(item.id==postNumber))

  // const postNumber=23
  // const post=items.find((item)=>(item.id==postNumber))

  // console.log(post)
  React.useEffect(()=>{
    if(!isLoaded){
      dispatch(fetchPosts());
    }
  },[isLoaded,dispatch]);
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };
  const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2
    }
  };

  return (
    <>
      <section className="single-page page">
      <div className="container">

      { post ? (
          <motion.div  initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}>
          <SingleHead date={post.date.split('-')} post={post}/>
          <WideBlock img={post.acf["cafe-item-img1"]} text={post.acf["cafe-item-text1"]} />
          <SlimBlock post={post}/>
          <SingleBottom author={post.acf["post-author"].data.display_name} post={post}/>
          </motion.div>
      
      ):""}
      {isMobile? 
          <>
            <Share/>
          </>
          :''}
      </div>
        
        {isMobile? null:
          <div className="sidebar-container">
            <div className="right-banner"></div>
            <Share/>
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