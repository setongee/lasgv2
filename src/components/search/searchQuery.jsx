import React, {useState, useEffect} from 'react'
import './search.scss'
import Container from '../container/container'
import { Search, Xmark } from 'iconoir-react'
import {motion} from 'framer-motion'
import Fuse from 'fuse.js'
import { servicesDB } from '../../api/data/servicesDB'
import SearchResultsQuery from './searchResultsQuery'
import ViewSearchModal from './searchModal'
import { useLocation } from 'react-router'

export default function SearchQuery({query, closeModal}) {

  const location = useLocation().pathname;

  const [search, setSearch] = useState(query);
  const [queryResults, setQueryResults] = useState([]);
  const [searchView, setSearchView] = useState({});
  const [showInfo, setShowInfo] = useState(false);

  const handleClose = () => {

    setShowInfo(false);

  }

  const viewSearch = data => {

    setSearchView(data);
    setShowInfo(true);

  }

  const handleCloseBar = (e) => {

    if ( e.target.classList[0] === 'view_service_modal' ) {

      handleClose();

    }

  }

  useEffect(() => {

    const fuseOptions = {

      includeScore : true,
      shouldSort : true,
      keys : [ 
        
        {
          name: 'sub_service',
          weight: 1
        },

        {
          name: 'short',
          weight: 0.6
        },

        {
          name: 'cta',
          weight: 0.7
        },

        {
          name: 'theme',
          weight: 0.5
        },

        {
          name: 'url',
          weight: 0.3
        }
      ]
    
    };
  
    const fuse = new Fuse(servicesDB, fuseOptions);
    const results = fuse.search(search);
    const queriedRes =  results.filter( item => item.score < 0.1 ).map(res => res.item);
    setQueryResults(queriedRes);
   
   }, [search]);


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

            <motion.div className="top" initial = { { opacity : 0, y : 100 } } animate = { { opacity : 1, y : 0 } } transition={ { delay : .4, duration : .4 } } ><span>Hey there,</span> get curated informations from all news, topics & services </motion.div>

          </div>

          <div className="search__field">
            <input type="text" placeholder='Search for anything here...' value={search} onChange={ e => setSearch(e.target.value)} />
          </div>

          <div className="results__calculations"> - { queryResults.length } Results found - </div>

          <div className="search__query__results">

              {
                queryResults.length 
                ? 
                queryResults.map( (data, index) => (

                  <SearchResultsQuery key = {index} data = {data} i = {index} search = {viewSearch} />

                )) : <p>Oops... There is no search result</p>

              }

          </div>

        </Container>

    </motion.div>
    
  )
  
}
