import './scss/_Style.scss'
import Main from './Pages/Main.js'
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Header/>
      <div className="wrapper">
        

        <Main />

        <Footer/>
      </div>
    </>
  );
}

export default App;