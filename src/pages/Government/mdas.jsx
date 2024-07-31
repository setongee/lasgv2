import React, {useRef, useState, useEffect} from 'react'
import './mda.scss'
import Container from '../../components/container/container'
import { useNavigate, useParams } from 'react-router';
import Typewriter from 'typewriter-effect';
import { mdaDBv2 } from '../../api/data/mdaDBReal';
import LogoAgency from '../../assets/MDA/agency.svg'

import Fuse from 'fuse.js';
import MdaResultsComponent from './mdaResultsComponent';
import { Globe, Internet, Message, Phone, PinSolid, Xmark } from 'iconoir-react';
import Mda_modal from './mda_modal';

export default function Mdas() {

  const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

 const [indexFilter, setIndexFilter] = useState('');
 //const [searchTerm, setSearchTerm] = useState('');

 const [isVisible, setIsVisible] = useState(false);
 const targetRef = useRef(null);

 let navigate = useNavigate();
 let params = useParams().index;

 const [ query, setQuery ] = useState('');
 const [queryResults, setQueryResults] = useState(mdaDBv2);


 const [isOpen, setIsOpen] = useState(false);
 const [modalData, setModalData] = useState({});

  const closeModal = () => {

      setIsOpen(false);

  }

  const openModal = (modal_data) => {

    setModalData(modal_data);
    setIsOpen(true);

  }


 useEffect(() => {

  const fuseOptions = {

    keys: [
      "mda",
      "tags",
      "short"
    ]
  
  };

  const fuse = new Fuse(mdaDBv2, fuseOptions);
  const results = fuse.search(query);
  const queriedRes =  query ? results.map(res => res.item) : mdaDBv2;
  setQueryResults(queriedRes); 
 
 }, [query]);



 useEffect(() => {

const active = document.querySelector('.index__active')

if (active === null) {

  const pin = document.querySelectorAll(`.${params}`)
  const p = Array.from(pin);
  p.forEach( e => e.classList.add('index__active'));
  
} else {

  active.classList.remove('index__active');
  const pin = document.querySelectorAll(`.${params}`)
  const p = Array.from(pin);
  p.forEach( e => e.classList.add('index__active'));

}


if (params !== 'all') {

  const filterByIndex = mdaDBv2.filter( e => e.index === params.toUpperCase());
  setQueryResults(filterByIndex);

} else {

  setQueryResults(mdaDBv2);

}
  
 }, [params]);

 //UseRef in Intersection Observer;

 useEffect(() => {

   const observer = new IntersectionObserver(
     ([entry]) => {
       setIsVisible(entry.isIntersecting);
     },
     {
       root: null, // viewport
       rootMargin: '0px', // no margin
       threshold: 0, // 50% of target visible
     }
   );

   if (targetRef.current) {
     observer.observe(targetRef.current);
   }

   // Clean up the observer
   return () => {
     if (targetRef.current) {
       observer.unobserve(targetRef.current);
     }
   };

 }, []);
  
  return (
    
        <div className="government_style">

            {
                isOpen ? <Mda_modal data = {modalData} closeModal = { closeModal } /> : null
            }

            {/* {
                !isVisible ? (

                  <div className="abcAgain">

                    <div className="indexHeader">

                      <div className="mdas_index all" onClick={ () => navigate(`/government/mdas/all`) }> - </div>

                        {
                          alpha.map( (e, index) => (

                              <div className={`mdas_index ${e.toLowerCase()}`} key = {index} onClick={ () => navigate(`/government/mdas/${e.toLowerCase()}`) }> {e} </div>

                          ) )
                        }
                      
                    </div>

                    <div className="searchField fixedTop">

                      <input type="text" className="searchInput" value = {query} onChange={ e => setQuery(e.target.value) }/>

                      {
                        
                         query === '' 
                         ?
                         <div className="typeSide">

                            <Typewriter          
                            options={{
                                strings: ['Search for Lagos State Ministries...', 'Search for Lagos State Departments...', 'Search for Lagos State Agencies...' ],
                                autoStart: true,
                                loop: true,
                                delay : 40,
                                deleteSpeed : 10
                            }} />
            
                        </div> 

                        : null

                      }

                     </div>

                     <div className="mdas_sections fixedTop_2">

                        <div className="section all"> {queryResults.length} Results Found </div>
                       
                    </div>

                  </div>

                ) : null
            } */}

            <Container>

                <div className="topArea">

                    <div className="mdaHeader flex flex_col">

                        <div className="mdaTitle"> <span className='thick_700'> A-Z index </span> of Lagos government Ministries, Departments & Agencies. </div>

                        <div className="mdaTitleSubs">Find contact information for Lagos government ministries, departments and agencies including websites, emails, phone numbers, addresses, and more. </div>

                    </div>

                </div>

                <div className="abcZone" ref = { targetRef } >

                      <div className="mdas_index all" onClick={ () => navigate(`/government/mdas/all`) }> - </div>

                      {
                        alpha.map( (e, index) => (

                            <div className={`mdas_index ${e.toLowerCase()}`} key = {index} onClick={ () => navigate(`/government/mdas/${e.toLowerCase()}`) }> {e} </div>

                         ) )
                      }

                </div>

                <div className="searchField">

                      <input type="text" id = "yass" className="searchInput" value = {query} onChange={ e => setQuery(e.target.value) }/>

                      {
                        
                         query === '' 
                         ?
                         <div className="typeSide">

                            <Typewriter          
                            options={{
                                strings: ['Search for Lagos State Ministries...', 'Search for Lagos State Departments...', 'Search for Lagos State Agencies...' ],
                                autoStart: true,
                                loop: true,
                                delay : 40,
                                deleteSpeed : 10
                            }} />
            
                        </div> 

                        : null

                      }

                </div>

                <div className="mdas_sections">

                      <div className="section all"> {queryResults.length} Results Found </div>

                </div>

                <div className="resultArea">


                      {
                         queryResults.length ? queryResults.map( (data, index) => {

                            return <MdaResultsComponent data = {data} key = {index} openModal = {openModal} />

                         } ) : <h1>Oops! Sorry No results Found, Try Again!</h1>
                      }
                    

                </div>

            </Container>

        </div>

  )
}
