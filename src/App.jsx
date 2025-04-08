import './App.css';
import './styles/root.css'
import Header from './components/header/header';
import RouterClass from './routes/router';
import Footer from './components/footer/footer';
import ReactGA from "react-ga"
import Cookie from './cookie';
import Cookies from 'js-cookie';
import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router';
const TRACKING_ID = "G-NB0QB4RDM7" // LASG Main Site Tracking ID

function App() {

  const [cookies, setCookies] = useState(false);
  const {pathname} = useLocation();

  useEffect(() => {

    const cookieInfo = Cookies.get("lasgConsent");

    if(cookieInfo === undefined){

      setCookies(false);

      if (pathname === "/privacy") setCookies(true);

    }else{

      const jsonRes = JSON.parse(cookieInfo);
      
      if (jsonRes.status === "accept") {

        setCookies(true);
        ReactGA.initialize(TRACKING_ID);

      } else {
        setCookies(true)
      }

    }

  }, [cookies, pathname]);

  const setCookieStatus = (stat) => {

    setCookies(stat);

  }

  return (

    <div className="App">

    {/* Application Header */} 
    <Header/>
    <RouterClass />
    <Footer/>

    { !cookies ? <Cookie cookieStatus =  {setCookieStatus} /> : null }

    </div>

  );
}

export default App;
