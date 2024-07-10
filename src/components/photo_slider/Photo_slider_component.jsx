import React from 'react'
import './photo_slider.scss'
import Container from '../container/container'
import logo from '../../assets/navBar/lasg_logo.png'
import { MoreVert, Send } from 'iconoir-react'
import Typewriter from 'typewriter-effect';
// import { Share } from 'react-twitter-widgets'
import level1 from '../../assets/hd/oing__real.png'
import LasgIllustrations from './lasg_landingpage_illustrations'

export default function Photo_slider_component() {
    
  return (

    <div className="slider home">

        <Container>

          <div className="photo_container">

              <div className="mobile__flash__news">

                <div className="flashNews"> <span>💳 </span>  Unlimited benefits with a LASSRA card - <a href="#"> Apply Now </a> </div>
                
              </div>
          
              <div className="home__content">

                  <div className="title">Welcome to <span>Lasgidi</span></div>

                  <div className="text__area">

                      <span>Simplifying </span>your access to Lagos state government services.

                  </div>

                  <div className="text__area_sub">
                    Welcome to the official Lagos state government website dedicated to serving you. Find essential resources, services, and information... 
                  </div>

              </div>
              
          </div>

        </Container>


        <LasgIllustrations/>


    </div>

  )

}
