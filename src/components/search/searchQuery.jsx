import React, {useState, useEffect} from 'react'
import './search.scss'
import Container from '../container/container'
import { MicrophoneSpeakingSolid, Search, Xmark } from 'iconoir-react'
import {motion} from 'framer-motion'
import Fuse from 'fuse.js'
import SearchResultsQuery from './searchResultsQuery'
import ViewSearchModal from './searchModal'
import { useLocation } from 'react-router'
import { getAllServices } from '../../api/read/services.req'
import { useQuery } from '@tanstack/react-query'
import './searchBorderAnimation.scss'

import loader from '../../assets/loaders/loader.svg'
import Loader from '../loader/loader'
import Dictaphone from './Speech'

export default function SearchQuery({query, closeModal}) {

  const location = useLocation().pathname;

  const [search, setSearch] = useState(query === '' ? "" : query);

  const [queryResults, setQueryResults] = useState([]);
  const [relations, setRelations] = useState([]);

  const [searchView, setSearchView] = useState({});
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
   
    document.body.style.overflow = 'hidden'
   
  }, []);

  const handleClose = () => {

    setShowInfo(false);

  }

  const viewSearch = data => {

    setSearchView(data);
    setShowInfo(true);
    document.body.style.overflow = 'hidden'

  }

  const handleCloseBar = (e) => {

    if ( e.target.classList[0] === 'view_service_modal' ) {

      handleClose();

    }

  }

  const { isLoading, error, data } = useQuery({

    queryKey: ["services"],
    queryFn: () => getAllServices(),

  })

  useEffect(() => {

    let score = 0.00001;

    const fuseOptions = {

      includeScore : true,
      shouldSort : true,
      findAllMatches : false,
      keys : ['keywords.key', 'name']
    
    };
  
    const fuse = new Fuse(data?.data || [], fuseOptions);
    const results = fuse.search(search);
    const queriedRes = results.filter( item => item.score <= score ).map(res => res.item);
    const otherRelated = results.filter( item => item.score > score && item.score < 0.5 ).map(res => res.item);

    setQueryResults(queriedRes);
    setRelations(otherRelated)
   
   }, [search, data]);


   const textToSpeech = (text) => {

    const finalStatement = `Searching for services on ${text}`

    let utterance = new SpeechSynthesisUtterance(text !== '' ? finalStatement : '');

    utterance.voice = window.speechSynthesis.getVoices()[159];
  
    // Speak the utterance
    window.speechSynthesis.speak(utterance);

   }

   const checkIfMicStopped = (que) => {
    
    if( window.innerWidth > 800  && window.innerHeight > 600 ){
      textToSpeech(que);
    }


   }

   
   const transcribeSearch = (transript) => {

      if (transript !== ""){
          
        setSearch(transript);

      }

   }


  return (

    <motion.div className="search__component" initial = {{x : 1000}} animate = {{x : 0}} transition={{ type: "tween", duration : .4, ease : "easeInOut" }} >

        {
          showInfo 
          ?
          <div className="showInfo" onClick={handleCloseBar} > 

            <ViewSearchModal data = {searchView} close = {handleClose} />
        
          </div> : null
        }

        <Container>

          <div className="close__search__modal" onClick={closeModal} > <Xmark strokeWidth={1} /> </div>

          <div className="search__title">

            <div className="sub uppercase flex">

              Lagos state 
              <div className="line"></div> 
              <span className='flex flex_align_center' > <div className="searchIcon"><Search/> </div> global search</span>

            </div>

            <motion.div className="top" initial = { { opacity : 0, y : 100 } } animate = { { opacity : 1, y : 0 } } transition={ { delay : .4, duration : .4 } } ><span>Hey there,</span> get curated information from all news, services & topics </motion.div>

          </div>

    

          <div className="results__calculations"> - { queryResults?.length } Results found - </div>

          <div className="search__query__results">

              {
                isLoading ? <div className="load"><Loader/></div> : 
                queryResults?.length 
                ? 
                queryResults.map( (response, index) => (

                  <SearchResultsQuery key = {index} data = {response} i = {index} search = {viewSearch} />

                )) : search === "" ? <p className='feedback'> Start searching and get results by typing or speaking...</p> : <p className='feedback'> No results found for <span style={{color : "green"}}>'{search}'</span> at the moment, try a different search term </p>
              }

              {
                
                relations.length ?

                  <div className="relations">

                    <div className="relations__title"> - Other Related Services - </div>

                    <div className="search__query__results">

                        {
                          relations.length ?
                          relations.map( (response, index) => (

                            <SearchResultsQuery key = {index} data = {response} i = {index} search = {viewSearch} />
          
                          )) : null
                        }

                    </div>

                  </div> : null

              }

          </div>

          <div className="search__field flex">

              <div className="useCard">
              
                <input type="text" placeholder='Search for Anything here...' value={search} onChange={ e => setSearch(e.target.value)} />

                {
                  search !== "" ? <div className="closeInput" onClick={ () => setSearch("") } > <Xmark color='#fff'/> </div> :  null
                }
                
              </div>

              <Dictaphone setSpeechQuery = {transcribeSearch} checkMic = {checkIfMicStopped} />
            
          </div>

        </Container>

    </motion.div>
    
  )
  
}
