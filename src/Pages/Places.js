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
import SingleHead from '../Components/Single/SingleHead';
import SocialLinks from '../Components/SocialLinks';
import { fetchRandom } from '../redux/actions/random';
import { motion } from 'framer-motion';
import { fetchPosts } from '../redux/actions/posts';


const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)


function Places() {
  window.scrollTo(0, 0)


  const dispatch = useDispatch();

  const places=useSelector(({random})=>random.places);
  const isLoadedPlaces=useSelector(({random})=>random.isLoadedPlaces);

  const items=useSelector(({posts})=>posts.posts);
  const isLoaded=useSelector(({posts})=>posts.isLoaded);

  React.useEffect(()=>{
    if(!isLoadedPlaces){
      dispatch(fetchRandom());
    }
    if(!isLoaded){
      dispatch(fetchPosts());
    }
  },[isLoaded,isLoadedPlaces,dispatch]);
  const location = useLocation();
  const postLocation=location.pathname.split('/')
  const postNumber=postLocation[postLocation.length-1]
  const place=places.find((item)=>(item.id==postNumber))

  
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
  // if(isLoaded){
    // console.log(place.acf["places-nearby"])
    const placesIDs=place.acf["places-nearby"]
    console.log(placesIDs)
    const cornersArray=placesIDs.map((i,index)=>(items.filter((item)=>(item.id==i))))
    console.log(cornersArray)
    //находить нужные items из place.acf["places-nearby"] - по айди заведений
  // }
  return (
    <>
      <section className="single-page page">
        <div className="container">
      { isLoadedPlaces ? (

          <motion.div  initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}>
          <PlaceHead place={place}/>
          <DoubleSlim place={place}/>
          {place.acf["places-nearby"]? <Nearby data={cornersArray}/>:''}
          {/* <Share wide/> */}
          {isMobile? <Random/> : null}
          </motion.div>
      ):""}

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

export default Places

// export default class Places extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       loading:false,
//       place:{},
//       error:''
//     }
//   }
//   componentDidMount(){
//     const wordPressSiteUrl="https://localhost/wordpress/";
//     this.setState({loading:true},
//       ()=>{
//         axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/places/${this.props.match.params.id}`)
//         .then(res=>{this.setState({loading:false, place:res.data})})
//         .catch(error=>this.setState({loading:false,error:error.responce}))
//       }
//     );
//   }
//   render() {
//     const place=this.state.place
//     console.log(place)
//     return (
      
//     )
//   }
// }
