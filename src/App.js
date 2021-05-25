import './scss/_Style.scss'
import Main from './Pages/Main.js'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Favs from './Pages/Favs';
import PageNotFound from './Pages/PageNotFound';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';


function App() {
  return (
    <>
      <Header/>
      <div className="wrapper">
        

        {/* <Main /> */}
        {/* <Favs/> */}
        {/* <PageNotFound/> */}
        <SignIn/>

        <Footer/>
      </div>
    </>
  );
}

export default App;