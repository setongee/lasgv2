import React, {useState, useEffect} from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import Container from '../../components/container/container';
import { ArrowLeft } from 'iconoir-react';
import './viewService.scss';
import LASG_SERVICES from '../../api/data/services';
import Typewriter from 'typewriter-effect';
import Fuse from 'fuse.js';

// Icons

import agriculture from '../../assets/icons/service/agriculture.svg'
import advertisement from '../../assets/icons/service/advertisement.svg'
import business_trade_commerce from '../../assets/icons/service/business_trade_commerce.svg'
import complaints_feedbacks from '../../assets/icons/service/complaints_feedbacks.svg'
import disability_services from '../../assets/icons/service/disability_services.svg'
import disasters_emergencies from '../../assets/icons/service/disasters_emergencies.svg'
import education from '../../assets/icons/service/education.svg'
import environment from '../../assets/icons/service/environment.svg'
import events from '../../assets/icons/service/events.svg'
import government from '../../assets/icons/service/government.svg'
import health from '../../assets/icons/service/health.svg'
import housing from '../../assets/icons/service/housing.svg'
import insurance from '../../assets/icons/service/insurance.svg'
import identity from '../../assets/icons/service/identity.svg'
import jobs from '../../assets/icons/service/jobs.svg'
import lands from '../../assets/icons/service/lands.svg'
import laws from '../../assets/icons/service/laws.svg'
import lisense from '../../assets/icons/service/lisense.svg'
import loans from '../../assets/icons/service/loans.svg'
import media from '../../assets/icons/service/media.svg'
import news from '../../assets/icons/service/news.svg'
import payments from '../../assets/icons/service/payments.svg'
import permits from '../../assets/icons/service/permits.svg'
import pilgrims from '../../assets/icons/service/pilgrims.svg'
import reports from '../../assets/icons/service/reports.svg'
import security from '../../assets/icons/service/security.svg'
import science from '../../assets/icons/service/science.svg'
import tourism from '../../assets/icons/service/tourism.svg'
import transportation from '../../assets/icons/service/transportation.svg'
import water from '../../assets/icons/service/water.svg'
import ServiceSearchResults from './serviceSearchResults';
import { servicesDB } from '../../api/data/servicesDB';
import ViewServiceModal from './viewServiceModal';

// End of Icons

export default function ViewService() {

    const icons = {

        advertisement : advertisement,
        agriculture : agriculture,
        business_trade_commerce : business_trade_commerce,
        complaints_feedbacks : complaints_feedbacks,
        disability_services : disability_services,
        disasters_emergencies : disasters_emergencies,
        education : education,
        environment : environment,
        events : events,
        government : government,
        health : health,
        housing : housing,
        insurance : insurance,
        identity : identity,
        jobs : jobs,
        lands : lands,
        laws : laws,
        lisense : lisense,
        loans : loans,
        media : media,
        news : news,
        payments : payments,
        permits : permits,
        pilgrims : pilgrims,
        reports : reports,
        security : security,
        science : science,
        tourism : tourism,
        transportation : transportation,
        water : water

    }

    let params = useParams(); 

    const [data, setData] = useState([]);
    const [ query, setQuery ] = useState('');
    const [queryResults, setQueryResults] = useState([]);
    const [serviceData, setServiceData] = useState([]);

    // Modal States
    const [modalData, setModalData] = useState({});
    const [isModalOpen, setIsMOdalOpen] = useState(false);
    
   useEffect(() => {
    
    const getService = LASG_SERVICES.filter( res => res.id === params.theme );
    setData(getService[0]);

    const getServiceData = servicesDB.filter( res => res.theme.trim() === params.theme );
    setServiceData(getServiceData);

    document.body.style.overflow = "visible";

   }, []); 

  useEffect(() => {

    document.body.style.overflow = "visible";

    const fuseOptions = {

    includeScore : true,
  
      keys: [
        "sub_service",
        "short",
        "cta",
        "theme",
        "url"
      ]
    
    };
  
    const fuse = new Fuse(serviceData, fuseOptions);
    const results = fuse.search(query);
    const queriedRes =  query ? results.map(res => res.item) : serviceData;
    setQueryResults(queriedRes);
   
   }, [query]);



   const openModal = (data) => {

      setModalData(data);
      setIsMOdalOpen(true);
      document.body.style.overflow = "hidden";

   }

   const closeModal = (data) => {

    setModalData({});
    setIsMOdalOpen(false);
    document.body.style.overflow = "visible";

 }

 const handleCloseBar = (e) => {

  if ( e.target.classList[0] === 'view_service_modal' ) {

    closeModal();

  }

}

  return (

    <div className="viewService">

        {
          isModalOpen ? <div className="viewMax" onClick={handleCloseBar} > <ViewServiceModal data = {modalData} close = {closeModal}  /> </div> : null
        }

        <Container>

            <div className="viewArea">

                <div className="navigationPin">

                    <div className="goBack" onClick={()=> window.location.href = '/services' } ><ArrowLeft/> Back to Services</div>

                    <div className="theme_icon"> <img src={icons[data.id]} alt="" /> </div>

                </div>

                <div className="serviceName"> 
                
                    <div className="serviceTitle"> {data.title} </div>
                    <div className="shorts"> {data.text} </div>
                
                </div>

                {/* services */}

                {/* Search Area Side With Search Input */}

                <div className="searchField">

                      <input type="text" className="searchInput" value = {query} onChange={ e => setQuery(e.target.value) }/>

                      {
                        
                         query === '' 
                         ?
                         <div className="typeSide">

                            <Typewriter          
                            options={{
                                strings: [LASG_SERVICES[0].title, LASG_SERVICES[1].title, LASG_SERVICES[2].title, LASG_SERVICES[3].title],
                                autoStart: true,
                                loop: true,
                                delay : 40,
                                deleteSpeed : 10
                            }} />
            
                        </div> 

                        : null

                      }

                </div>

                {/* searched query results */}

                <div className="mdas_sections">

                    <div className="section all"> { query !=='' ? queryResults.length : serviceData.length} Results Found </div>

                </div>

                <div className="resultArea">


                      {
                         queryResults.length ? queryResults.map( (data, index) => (

                            <ServiceSearchResults data = {data} key = {index} openModal = {openModal} icon = {data.theme.trim() } />


                        ) ) : query !== '' ? <h1>Oops! Sorry No results Found, Try Again!</h1> : serviceData.map((e, index) => <ServiceSearchResults data = {e} key = {index} openModal = {openModal} icon = {e.theme.trim() } /> )

                      }
                    

                </div>


            </div>

        </Container>

    </div>

  )
}
