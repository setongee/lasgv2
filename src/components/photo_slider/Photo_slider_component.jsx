import React from 'react'
import './photo_slider.scss'
import Container from '../container/container'
import logo from '../../assets/navBar/lasg_logo.png'
import { MoreVert, Send } from 'iconoir-react'
import Typewriter from 'typewriter-effect';
// import { Share } from 'react-twitter-widgets'
import level1 from '../../assets/hd/oing__real.png'

export default function Photo_slider_component() {
    
  return (

    <div className="slider home">

        <Container>

          <div className="photo_container flex flex_align_center flex_justify_space_between">
          
              <div className="home__content">

                  <div className="title">Welcome to <span>Lasgidi</span></div>

                  <div className="text__area">

                      <span>Simplifying </span>your access to Lagos state government services.

                  </div>

                  <div className="text__area_sub">
                    Welcome to the official Lagos state government site dedicated to serving you. Find essential resources, services, and information... 
                  </div>

                  <div className="search__ready">



                  </div>

              </div>

              <div className="chat__search__here">

                  <div className="chat__header flex_justify_space_between">

                    <div className="profile flex">

                      <div className="avartar">

                        <img src={logo} alt="" />

                      </div>

                      <div className="name"> 

                        <p> Lagos Chatbot</p> 
                        <span className='flex flex_align_center'> <div className="dot"></div> Online</span> 

                      </div>

                    </div>

                    <div className="actions">

                       <MoreVert/>

                    </div>

                  </div>

                  {/* chat body */}

                  <div className="chat__body">

                      <div className="chat__bubble">

                        <div className="bubble">

                          <div className="bubble__tm">

                              Welcome to the official Lagos state government site dedicated to serving you. Find essential resources, services, and information
                          </div>

                          <div className="profile">

                            <p>Lagos Chatbot</p>

                          </div>

                        </div>

                      </div>

                  </div>

                  {/* chat typing area */}

                  <div className="chat__message">

                      <div className="inputBin">

                          <input type="text" placeholder='Type your message here'/>

                      </div>

                      <div className="send">

                          <Send/>

                      </div>

                  </div>

              </div>
              
          </div>

        </Container>

    </div>

  )

}
