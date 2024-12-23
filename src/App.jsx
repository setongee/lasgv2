import './App.css';
import './styles/root.css'
import Header from './components/header/header';
import RouterClass from './routes/router';
import Footer from './components/footer/footer';
import ReactGA from "react-ga"

// const TRACKING_ID = "G-NB0QB4RDM7" // LASG Main Site Tracking ID
// ReactGA.initialize(TRACKING_ID);

function App() {

  return (

    <div className="App">

    {/* Application Header */} 
    <Header/>
    <RouterClass />
    <Footer/>

    </div>

  );
}

export default App;
