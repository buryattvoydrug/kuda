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
import BlogList from './Pages/BlogList';
import SingleBlog from './Pages/SingleBlog';
import {BrowserRouter ,Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <div className="wrapper">
        
        <BrowserRouter >
        <Switch>
          {/* <SingleBlog/> */}
          {/* <BlogList/> */}
          {/* <Favs/> */}
          {/* <PageNotFound/> */}
          {/* <SignIn/> */}
          <Route exact path="/" component={Main}/>
          <Route exact path="/post/:id" component={Single}/>
          {/* <Foodcort/> */}
          {/* <Places/> */}
          {/* <Route/> */}
        </Switch>
          
        </BrowserRouter>
        
        <Footer/>
      </div>
    </>
  );
}

export default App;