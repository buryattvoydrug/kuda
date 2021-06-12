import axios from 'axios';
import React from 'react'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Share from '../Components/Share';
import NewsItem from '../Components/Single/NewsItem';
import SingleBottom from '../Components/Single/SingleBottom';
import SlimBlock from '../Components/Single/SlimBlock';
import WideBlock from '../Components/Single/WideBlock';
import { fetchNews } from '../redux/actions/news';
import { motion } from 'framer-motion';

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


function SingleBlog() {
  
  window.scrollTo(0, 0)
  const dispatch = useDispatch();
  const news=useSelector(({news})=>news.news);
  const isLoadedNews=useSelector(({news})=>news.isLoaded);

  React.useEffect(()=>{
    if(!isLoadedNews){
      dispatch(fetchNews());
    }
  },[isLoadedNews,dispatch]);
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

  const location = useLocation();
  const newsLocation=location.pathname.split('/')
  const newsNumber=newsLocation[newsLocation.length-1]
  const newsitem=news.find((item)=>(item.id==newsNumber))



  
  return (
    <>
      <section className="single-page page">
        <div className="container">
        {newsitem? (
          <motion.div  initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}>
          <NewsItem post={newsitem}/>
          <WideBlock img={newsitem.acf["cafe-item-img1"]} text={newsitem.acf["cafe-item-text1"]} post={newsitem}/>
          <SlimBlock post={newsitem}/>
          
          {newsitem.acf["cafe-item-img1_копия"] ? <WideBlock img={newsitem.acf["cafe-item-img1_копия"]} text={newsitem.acf["cafe-item-text1_копия"]} post={newsitem}/>: null}
          {newsitem.acf["cafe-item-img2_копия"] ? <SlimBlock post={newsitem}/>: null}

          {newsitem.acf["cafe-item-img1_копия2"] ? <WideBlock img={newsitem.acf["cafe-item-img1_копия2"]} text={newsitem.acf["cafe-item-text_копия2"]} post={newsitem}/>: null}
          {newsitem.acf["cafe-item-img2_копия2"] ? <SlimBlock post={newsitem}/>: null}


          <SingleBottom author={newsitem.acf["news-author"].data.display_name} post={newsitem}/>
          {isMobile? 
          <Share wide/>
          : null
          }
          </motion.div>
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

export default SingleBlog

// export default class SingleBlog extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       loading:false,
//       newsitem:{},
//       error:''
//     }
//   }
  
//   componentDidMount(){
//     window.scrollTo(0, 0)
//     const wordPressSiteUrl="http://nikuda.poydemkuda.ru/index.php";
//     this.setState({loading:true},
//       ()=>{
//         axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/news/${this.props.match.params.id}`)
//         .then(res=>{this.setState({loading:false, newsitem:res.data})})
//         .catch(error=>this.setState({loading:false,error:error.response}))
//       }
//     );
//   }
// }
