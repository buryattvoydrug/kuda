import axios from 'axios';
import React from 'react'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Random from '../Components/Random';
import Share from '../Components/Share';
import CornerItem from '../Components/Single/CornerItem';
import SingleBottom from '../Components/Single/SingleBottom';
import SingleHead from '../Components/Single/SingleHead';
import SocialLinks from '../Components/SocialLinks';
import { fetchFoodcorts } from '../redux/actions/foodcorts';
import { motion } from 'framer-motion';

import '../scss/Pages/Foodcort.scss'
import '../scss/Pages/Single.scss'

const windowWidth = Dimensions.get('window').width;
const isMobile = (windowWidth<1280)

function Foodcort() {
  window.scrollTo(0, 0)

  const dispatch = useDispatch();

  const foodcorts=useSelector(({foodcorts})=>foodcorts.foodcorts);
  const visibleFoodcorts=useSelector(({foodcorts})=>foodcorts.visibleFoodcorts);
  const isLoaded=useSelector(({foodcorts})=>foodcorts.isLoaded);
  React.useEffect(()=>{
    if(!isLoaded){
      dispatch(fetchFoodcorts());
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

  const location = useLocation();
  const foodcortLocation=location.pathname.split('/')
  const foodcortNumber=foodcortLocation[foodcortLocation.length-1]
  const foodcort=foodcorts.find((item)=>(item.id==foodcortNumber))
  return (
    <>
      <section className="single-page page">
        <div className="container">
      { foodcort ? (
          <motion.div initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}>
          <SingleHead date={foodcort.date.split('-')} post={foodcort} corners/>
          <section className="corners-page">
            <h2 className="corners__title">Корнеры</h2>
            <div className="corners">
              <CornerItem data={foodcort.acf.corners}/>
            </div>
          </section>
          <SingleBottom post={foodcort} />
          </motion.div>
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

export default Foodcort

// export default class Foodcort extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       loading:false,
//       foodcort:{},
//       error:''
//     }
//   }
  
//   componentDidMount(){
//     window.scrollTo(0, 0)
//     const wordPressSiteUrl="http://nikuda.poydemkuda.ru/index.php";
//     this.setState({loading:true},
//       ()=>{
//         axios.get(`${wordPressSiteUrl}/wp-json/wp/v2/foodcorts/${this.props.match.params.id}`)
//         .then(res=>{this.setState({loading:false, foodcort:res.data})})
//         .catch(error=>this.setState({loading:false,error:error.response}))
//       }
//     );
//   }
//   render() {
//     const {foodcort}=this.state
    
//     return (
//       <>
//       <section className="single-page page">
//         <div className="container">
//       { Object.keys( foodcort ).length ? (
//           <>
//           {console.log(foodcort.acf.corners)}

//           <SingleHead post={foodcort} corners/>
//           <section className="corners-page">
//             <h2 className="corners__title">Корнеры</h2>
//             <div className="corners">
//               <CornerItem data={foodcort.acf.corners}/>
//             </div>
//           </section>
//           <SingleBottom post={foodcort} />
//           </>
//       ):""}

//         </div>
//         {isMobile? null:
//           <div className="sidebar-container">
//             <Share/>
//             <div className="right-banner"></div>
//           </div>
//         }
//       </section>
//     </>
//     )
//   }
// }