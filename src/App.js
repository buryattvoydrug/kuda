import './scss/_Style.scss'
import Main from './Pages/Main.js'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Favs from './Pages/Favs';
import PageNotFound from './Pages/PageNotFound';
import Single from './Pages/Single';
import Foodcort from './Pages/Foodcort';
import Routee from './Pages/Routee';
import BlogList from './Pages/BlogList';
import MapPage from './Pages/MapPage';
import SingleBlog from './Pages/SingleBlog';
import {Route, Switch, useLocation } from 'react-router-dom'
import PostsPage from './Pages/PostsPage';
import FoodcortsPage from './Pages/FoodcortsPage';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MapSinglePage from './Pages/MapSinglePage';


function App() {

  const location = useLocation();
  const isLoadedPosts=useSelector(({posts})=>posts.isLoaded);
  const isLoadedFoodcorts=useSelector(({foodcorts})=>foodcorts.isLoaded);
  const isLoadedNews=useSelector(({news})=>news.isLoaded);

  

  const [active,setActive] = useState(true)
  // console.log(isLoadedNews,isLoadedFoodcorts,isLoadedPosts)
  React.useEffect(()=>{
    if(isLoadedNews && isLoadedFoodcorts && isLoadedPosts){
      setTimeout(function() {
        setActive(false)
     },10);
    }
  })
    
    
  return (
    <>
      {/* <Header/> */}
          <Switch location={location} key={location.key}>
            <Route exact path="/"><Main/></Route>
            <Route exact path="/blog/"><BlogList/></Route>
            <Route exact path="/map/"><MapPage/></Route>
            <Route exact path="/posts/" ><PostsPage/></Route>
            <Route exact path="/map/post/:id"><MapPage/></Route>
            <Route exact path="/map/foodcorts/:id"><MapPage/></Route>
            <Route exact path="/map/routes/:id"><MapPage/></Route>
            <Route exact path="/favs/" ><Favs/></Route>
            <Route exact path="/foodcorts/"><FoodcortsPage/></Route>
            <Route exact path="/post/:id"><Single/></Route>
            <Route exact path="/news/:id"><SingleBlog/></Route>
            <Route exact path="/foodcorts/:id"><Foodcort/></Route>
            <Route exact path="/routes/:id"><Routee/></Route>
            <Route path="*" component={PageNotFound}/>
          </Switch>
        {/* <Footer/> */}
      {/* {!!active ? '':  */}
          <div className={!active ? "preloader hidden_preloader" : "preloader"}>
            <img src="/images/loading.webp" alt="" />
            <div className="preloader-logo"><strong>куда</strong> пойдём?</div>
          </div>
          {/* } */}
    </>
  );
}

export default App;