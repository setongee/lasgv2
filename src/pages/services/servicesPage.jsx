import React,{useState, useEffect} from 'react'
import './servicesPAGE.scss'
import Container from '../../components/container/container'
import Typewriter from 'typewriter-effect';
import { ArrowUpRight } from 'iconoir-react';
import Services from '../../components/services/services';
import LASG_SERVICES from '../../api/data/services';
import Fuse from 'fuse.js';
import ServiceSearchResults from './serviceSearchResults';

export default function ServicesPage() {

  const [ query, setQuery ] = useState('');
  const [queryResults, setQueryResults] = useState([]);
  const [totalResults, setTotalResults] = useState(0)

  useEffect(() => {

    const fuseOptions = {

    includeScore : true,
  
      keys: [
        "title",
        "text"
      ]
    
    };
  
    const fuse = new Fuse(LASG_SERVICES, fuseOptions);
    const results = fuse.search(query);
    const queriedRes =  results.map(res => res.item);
    setQueryResults(queriedRes);
   
   }, [query]);


// useEffect(() => {
    
//     const mapple = queryResults.map( e => e.services.length);
//     const rest = mapple.reduce( (a, b) => {

//         return a + b;

//     }, 0 );

//     setTotalResults(rest);

// }, [queryResults]);


   const openModal = () => {
    console.log("open");
   }

  return (

    <div className="servicesPage">

        <Container>

            <div className="servicesBody">

                <div className="servicesTop">

                    <div className="pageHeader flex flex_col">

                        <div className="pageTitle"> All Government topics & services </div>
                        <div className="pageTitleSubs"> Empowering Citizens of Lagos State to Engage with their Government. </div>

                    </div>

                </div>

                {/* Search Area Side With Search Input */}

                <div className="searchField">

                      <input type="text" className="searchInput" value = {query} onChange={ e => setQuery(e.target.value) }/>

                      {
                        
                         query === '' 
                         ?
                         <div className="typeSide">

                            <Typewriter          
                            options={{
                                strings: ['Pay for LASAA fees...', 'Register for a farm...', 'Ground Rentals...', 'Drivers Lisense Application...', 'Apply for Lagos State education scholarship...'],
                                autoStart: true,
                                loop: true,
                                delay : 40,
                                deleteSpeed : 10
                            }} />
            
                        </div> 

                        : null

                      }

                </div>

                {/* Popularly searched Services */}

                <div className="recentlyServiced flex flex_align_center">

                    <div className="linksTabs flex thick">

                        <a href ='#' className="tab flex"> 
                        
                        Pay for vehicle lisense

                        <div className="arowBon"> 

                            <div className="arrowMin arrow2"><ArrowUpRight color = '#fff' /> </div>
                            <div className="arrowMin arrow1"><ArrowUpRight color='#42FF01'/> </div>
                        
                        </div> 
                        
                        </a>

                        <a href ='#' className="tab flex"> 
                        
                        SMEDAN Application 

                        <div className="arowBon"> 

                            <div className="arrowMin arrow2"><ArrowUpRight color = '#fff' /> </div>
                            <div className="arrowMin arrow1"><ArrowUpRight color='#42FF01'/> </div>
                        
                        </div> 
                        
                        </a>

                        <a href ='#' className="tab flex"> 
                        
                        MOBILE BRANDING Advert in Lagos

                        <div className="arowBon"> 

                            <div className="arrowMin arrow2"><ArrowUpRight color = '#fff' /> </div>
                            <div className="arrowMin arrow1"><ArrowUpRight color='#42FF01'/> </div>
                        
                        </div> 
                        
                        </a>

                        <a href ='#' className="tab flex"> 
                        
                        AGRIPRENSHIP Programme

                        <div className="arowBon"> 

                            <div className="arrowMin arrow2"><ArrowUpRight color = '#fff' /> </div>
                            <div className="arrowMin arrow1"><ArrowUpRight color='#42FF01'/> </div>
                        
                        </div> 
                        
                        </a>

                        <a href ='#' className="tab flex"> 
                        
                        Book LAGRIDE - Download App

                        <div className="arowBon"> 

                            <div className="arrowMin arrow2"><ArrowUpRight color = '#fff' /> </div>
                            <div className="arrowMin arrow1"><ArrowUpRight color='#42FF01'/> </div>
                        
                        </div> 
                        
                        </a>

                    </div>

                </div>

                {/* searched query results */}

                {
                    query !== '' ? (

                        <div className="mdas_sections">

                            <div className="section all"> {totalResults} Results Found </div>

                        </div>

                    ) : null
                }

                <div className="resultArea">


                      {
                         queryResults.length && query !== '' ? queryResults.map( (data, index) => (

                            <ServiceSearchResults data = {data} key = {index} openModal = {openModal} icon = {data.id} />

                        ) ) : query !== '' ? <h1>Oops! Sorry No results Found, Try Again!</h1> : null

                      }
                    

                </div>

            </div>
            
        </Container>

        {/* services Component */}

        {
            query === '' ? (

                <div className="servicesSide">

                    <Services bgColor = "#fdfdfd" location = 'services' data_limit={1000} />

                </div>

            ) : null
        }

    </div>
  )
}
