import React, {useState} from 'react'
import './photo_slider.scss'
import Container from '../container/container'
import logo from '../../assets/navBar/lasg_logo.png'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, MoreVert, Send, Xmark } from 'iconoir-react'
import Typewriter from 'typewriter-effect';
// import { Share } from 'react-twitter-widgets'
import LasgIllustrations from './lasg_landingpage_illustrations'
import {motion} from 'framer-motion'
import SearchQuery from '../search/searchQuery'
import SpanMotion from './spanMotion'
import Top__header from '../header/top__header'
import { DotLottie, DotLottieReact } from '@lottiefiles/dotlottie-react'

import greenFilter from '../../assets/background/filters/blur__gradient.png'
import orangeFilter from '../../assets/background/filters/blur__gradient__orange.png'

export default function Photo_slider_component() {

  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [openEmergency, setOpenEmergency] = useState(false);

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

  const handleFocus = e => {

    document.querySelector('.input__body').style.borderColor = '#108a00'

  }

  const handleBlur = e => {

     document.querySelector('.input__body').style.borderColor = '#c5c5c5'

  }

  const handleSearchTab = e => {

    setSearchQuery(e.target.innerText.toLowerCase());
    setShowSearchModal(true);

  }

  const handleScroll = (id) => {

    window.scrollTo({

        top : document.querySelector(`#${id}`).getBoundingClientRect().top - document.body.getBoundingClientRect().top - 100,

    })
    
}

const handleEmergency = () => {

    document.body.style.overflowY = 'hidden';
    setOpenEmergency(true);

}

const closeEmergency = () => {

  document.body.style.overflowY = 'visible';
  setOpenEmergency(false);

}
    
  return (

    <div className="slider home">

      <div className="filters background__filters"><img src={greenFilter} alt="" /></div>
      <div className="filters orange__part"><img src={orangeFilter} alt="" /></div>

        {/* Open Space Search */}

        {
          showSearchModal ? <SearchQuery query = {searchQuery} closeModal = {closeSearchModal} /> : null
        }

        <Container>

          <div className="photo_container">

              <div className="mobile__flash__news uppercase">
                
              </div>
          
              <div className="home__content">

                  <div className="text__area">

                    <div className="welcome">Welcome to Lagos - Centre for Excellence</div>

                    <span>Simplifying</span> your access to Lagos State Government Services

                  </div>

              </div>

              {/* Search Bar for Web Searches... */}

              <div className="searchBox">


                  {/* <label> How can i ...  </label> */}

                  <div className="input__body flex">
                    
                    <input type="text" value={searchQuery} onChange={ e => setSearchQuery(e.target.value)} onKeyDownCapture={e => checkKey(e)} onFocus={handleFocus} onBlur={handleBlur} />
                    <div className="search__action__btn" onClick={handleSearchQuery}> <p>Search</p> <ArrowUpRight/> </div>
                    {
                      searchQuery === '' ?
                      
                      <div className="typeing">

                        <Typewriter 

                          options = {

                            {
                              strings: ['How can I register for LASSRA', 'How can I explore benefits', 'How can I give complaints', 'How can I pay Land use charge', 'How can I visit Lagos State', 'How can I advertise in Lagos' ],
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

                  <div className="quickSearches">

                    <div className="tip"> Popular searches </div>

                    <div className="pills__searches">
                      <p onClick={ e => handleSearchTab(e) } >Pay My Tax</p>
                      <p onClick={ e => handleSearchTab(e) } >Loans</p>
                      <p onClick={ e => handleSearchTab(e) } >LASSRA</p>
                      <p onClick={ e => handleSearchTab(e) } >Visit Lagos</p>
                      <p onClick={ e => handleSearchTab(e) } >Register LASAA</p>
                      <p onClick={ e => handleSearchTab(e) } >Benefits</p>
                      <p onClick={ e => handleSearchTab(e) } >PAY LUC</p>
                    </div>

                  </div>
                  
              </div>
              
          </div>

          <div onClick={ () => handleScroll('quickCheck') } className="trigger">
            Get Started, <span>Scroll down <div className="icon"><ArrowDown strokeWidth={2.5} /></div></span> 
          </div>

        </Container>

        <LasgIllustrations/>

    </div>

  )

}
