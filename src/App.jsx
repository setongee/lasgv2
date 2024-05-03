import { useEffect } from 'react';
import './App.css';
import './styles/root.css'
import Header from './components/header/header';
import RouterClass from './routes/router';
import { useParams, useLocation } from 'react-router';
import Footer from './components/footer/footer';

function App() {
  
  let location = useLocation();
  
  useEffect(() => {

    switch (location.pathname) {

      case '/' : document.title = "Ofiicial Lagos State Website | The best place to find government services and information"  
      break;

      case '/services' : document.title = "Services | The best place to find government services and information"  
      break;
    
      default : document.title = "Ofiicial Lagos State Website | The best place to find government services and information"
      break;

    }

  }, [location.pathname]);


  return (

    <div className="App">

    {/* Application Header */} 
    <Header/>

    {/* All Routers and pages in the Lagos State Web Application */}
    <RouterClass/>

    <Footer/>

    </div>

  );
}

export default App;
