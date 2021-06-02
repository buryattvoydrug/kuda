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
import {Link, Route, Switch, useLocation} from 'react-router-dom'

function App() {

  const location = useLocation();

  return (
    <>
      <Header/>
      <div className="wrapper">
        <Switch location={location} key={location.pathname}>
          {/* <SingleBlog/> */}
          {/* <BlogList/> */}
          {/* <Favs/> */}
          {/* <PageNotFound/> */}
          {/* <SignIn/> */}
          {/* <Foodcort/> */}
          {/* <Places/> */}
          {/* <Routee/> */}
          <Route exact path="/" component={Main}/>
          <Route exact path="/blog/" component={BlogList}/>
          <Route exact path="/post/:id" component={Single}/>
          <Route exact path="/news/:id" component={SingleBlog}/>
          <Route exact path="/foodcort/:id" component={Foodcort}/>
          <Route exact path="/place/:id" component={Places}/>
          <Route exact path="/route/:id" component={Routee}/>
        </Switch>
        <Footer/>
      </div>
    </>
  );
}

export default App;