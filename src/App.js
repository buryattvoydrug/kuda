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
import Route from './Pages/Route';


function App() {
  return (
    <>
      <Header/>
      <div className="wrapper">
        

        <Main />
        {/* <Favs/> */}
        {/* <PageNotFound/> */}
        {/* <SignIn/> */}
        {/* <Single/> */}
        {/* <Foodcort/> */}
        {/* <Places/> */}
        {/* <Route/> */}
        <Footer/>
      </div>
    </>
  );
}

export default App;