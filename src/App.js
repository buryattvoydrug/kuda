import './scss/_Style.scss'
import Main from './Pages/Main.js'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Favs from './Pages/Favs';
import PageNotFound from './Pages/PageNotFound';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Single from './Pages/Single';
import Foodcort from './Pages/Foodcort';
import Places from './Pages/Places';
import Routee from './Pages/Routee';
import BlogList from './Pages/BlogList';
import SingleBlog from './Pages/SingleBlog';
import {Link, Route, Switch, useLocation } from 'react-router-dom'
import PostsPage from './Pages/PostsPage';
import FoodcortsPage from './Pages/FoodcortsPage';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from "framer-motion";


function App() {

  const location = useLocation();
  const isLoadedPosts=useSelector(({posts})=>posts.isLoaded);
  const isLoadedFoodcorts=useSelector(({foodcorts})=>foodcorts.isLoaded);
  const isLoadedNews=useSelector(({news})=>news.isLoaded);
  const isLoadedPlaces=useSelector(({random})=>random.isLoadedPlaces);

  

  const [active,setActive] = useState(true)

    if(isLoadedNews || isLoadedFoodcorts || isLoadedPosts||isLoadedPlaces){
      setTimeout(function() {
        setActive(false)
     },700);
    }
    
  return (
    <>
      <Header/>
      <div className="wrapper">
        <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route exact path="/"><Main/></Route>
            <Route exact path="/blog/"><BlogList/></Route>
            <Route exact path="/posts/" ><PostsPage/></Route>
            <Route exact path="/favs/" ><Favs/></Route>
            <Route exact path="/foodcorts/"><FoodcortsPage/></Route>
            <Route exact path="/post/:id"><Single/></Route>
            <Route exact path="/news/:id"><SingleBlog/></Route>
            <Route exact path="/foodcort/:id"><Foodcort/></Route>
            <Route exact path="/place/:id"><Places/></Route>
            <Route exact path="/route/:id"><Routee/></Route>
          </Switch>
        </AnimatePresence>
        <Footer/>
      </div>
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