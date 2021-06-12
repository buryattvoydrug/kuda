import axios from 'axios';
import React from 'react'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Random from '../Components/Random';
import Share from '../Components/Share';
import DoubleSlim from '../Components/Single/DoubleSlim';
import Nearby from '../Components/Single/Nearby';
import PlaceHead from '../Components/Single/PlaceHead';
import WideBlock from '../Components/Single/WideBlock';
import WidePlaces from '../Components/Single/WidePlaces';
import SocialLinks from '../Components/SocialLinks';
import { fetchFoodcorts } from '../redux/actions/foodcorts';
import { fetchNews } from '../redux/actions/news';
import { fetchPosts } from '../redux/actions/posts';
import { fetchRandom } from '../redux/actions/random';
import { motion } from 'framer-motion';

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


function Routee() {
  const dispatch = useDispatch();

  const routes=useSelector(({random})=>random.routes);
  const isLoadedRoutes=useSelector(({random})=>random.isLoadedRoutes);

  const location = useLocation();
  const postLocation=location.pathname.split('/')
  const postNumber=postLocation[postLocation.length-1]
  const route=routes.find((item)=>(item.id==postNumber))

  React.useEffect(()=>{
    if(!isLoadedRoutes){
      dispatch(fetchRandom());
    }
  },[isLoadedRoutes,dispatch]);
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
      { isLoadedRoutes ? (

          <motion.div  initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}>
          <div className="main-banner"></div>
          <PlaceHead place={route}/>
          <WidePlaces text={route.acf["wide-text1"]} img={route.acf["wide-img1"]}/>
          <DoubleSlim place={route}/>
          <WidePlaces text={route.acf["wide-text2"]} img={route.acf["wide-img2"]}/>

          {isMobile? 
          <div className="main-banner"></div>
          :null
          }
          <Nearby data={route.acf["places-nearby"]}/>
          <Share wide/>

                    {isMobile? 
          <div className="right-banner"></div> : null
          }
          {isMobile? <Random/> : null}
          </motion.div>
      ):""}

          </div>
        {isMobile? null:
          <div className="sidebar-container">
            <Random/>
            <SocialLinks/>
            <div className="right-banner"></div>
          </div>
        }
      </section>
    </>
  )
}

export default Routee


// export default class Routee extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       loading:false,
//       route:{},
//       error:''
//     }
//   }
//   componentDidMount(){
//     const wordPressSiteUrl="https://localhost/wordpress/";
//     this.setState({loading:true},
//       ()=>{
//         axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/routes/${this.props.match.params.id}`)
//         .then(res=>{this.setState({loading:false, route:res.data})})
//         .catch(error=>this.setState({loading:false,error:error.responce}))
//       }
//     );
//   }
//   render() {
//     const route=this.state.route
//     console.log(route)

//     return (
      
//     )
//   }
// }