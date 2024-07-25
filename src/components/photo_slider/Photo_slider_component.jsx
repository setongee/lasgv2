import React, {useState} from 'react'
import './photo_slider.scss'
import Container from '../container/container'
import logo from '../../assets/navBar/lasg_logo.png'
import { MoreVert, Send } from 'iconoir-react'
import Typewriter from 'typewriter-effect';
// import { Share } from 'react-twitter-widgets'
import LasgIllustrations from './lasg_landingpage_illustrations'
import {motion} from 'framer-motion'
import SearchQuery from '../search/searchQuery'

export default function Photo_slider_component() {

  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchModal, setShowSearchModal] = useState(false);

  const closeSearchModal = () => {

    setShowSearchModal(false);
    setSearchQuery('');
    document.body.style.overflowY = 'visible'

  }

  const checkKey = e => {

    if (e.key === 'Enter' ) {

      handleSearchQuery()

    }

  }

  const handleSearchQuery = () => {

    if(searchQuery !== '' && searchQuery.split('').length >= 3 ){

      setShowSearchModal(true);
      document.body.style.overflowY = 'hidden'

    }

  }
    
  return (

    <div className="slider home">

        {/* Open Space Search */}

        {
          showSearchModal ? <SearchQuery query = {searchQuery} closeModal = {closeSearchModal} /> : null
        }

        <Container>

          <div className="photo_container">

              <div className="mobile__flash__news">

                <div className="flashNews"> <span>💳 </span>  Unlimited benefits with a LASSRA card - <a href="#"> Apply Now </a> </div>
                
              </div>
          
              <div className="home__content">

                  <div className="title">Welcome to <span>Lasgidi</span></div>

                  <div className="text__area">

                      <span>Simplifying </span>your access to Lagos state government services

                  </div>

                  <div className="text__area_sub">
                    lagosstate.gov.ng helps you find essential Lagos state resources, services, information and loads more... 
                  </div>

              </div>

              {/* Search Bar for Web Searches... */}

              <div className="searchBox">


                  <label> Search for anything  </label>

                  <div className="input__body flex">
                    
                    <input type="text" value={searchQuery} onChange={ e => setSearchQuery(e.target.value)} onKeyDownCapture={e => checkKey(e)} />
                    <div className="search__action__btn" onClick={handleSearchQuery}> Search </div>
                    {
                      searchQuery === '' ?
                      
                      <div className="typeing">

                        <Typewriter 

                          options = {

                            {
                              strings: ['Register for LASSRA card', 'Explore government benefits', 'Give complaints and feedbacks', 'Land usecharge payments', 'Find quick emergency numbers', 'Plan a visit to Lagos state', 'Advertise in Lagos' ],
                              autoStart: true,
                              loop: true,
                              delay : 40,
                              deleteSpeed : 10
                            }

                          } 
                          
                        />

                      </div>
                      
                      : null

                    }

                  </div>
                  
              </div>
              
          </div>

        </Container>


        <LasgIllustrations/>


    </div>

  )

}
