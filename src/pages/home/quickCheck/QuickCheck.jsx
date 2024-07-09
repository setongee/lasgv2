import React from 'react'
import '../../../styles/components/quickService/quickService.scss'
import { ArrowDown, ArrowUpRight, IconoirProvider, Search, SplitArea } from 'iconoir-react'
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import Container from '../../../components/container/container';
import { SplitText } from '../SplitText';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import legi from '../../../assets/hd/Animation - 1720121509297.lottie'

export default function QuickCheck() {

   const strings = ['Browse 250+ online citizen and business services.','Report an Emergency / Disaster.', 'Find health care services around you.', 'Register / Renew your Lisences, Permits etc.', 'Stay up-to-date with News & Events.', 'Find out more about Lagos State Govt. benefits.', 'Explore Ministries, Departments and Agencies.']

  return (
    
        <div className="quickCheck">


                <Container>
                    
                    <div className="getStarted">

                        <div className="textString thick">

                            <div className="p">

                                <div className="txt">

                                    Welcome to <span>lagosstate.gov.ng</span>, the hub for information on lagos state government and services like education, business regulations, health, transparency, and more.
                                    
                                </div>

                            </div>

                            <ArrowUpRight className='arry first' color="#32C76D" strokeWidth={2} height={60} width={60} /> 

                            <div className="how"> Get Started, You can - </div>

                            <div className="textChange sip">

                                {/* <SplitText

                                    major = "many"
                                    initial={{ y: '100%' }}
                                    whileInView={{ y: 0,
                                    transition: { duration : 2 }}}   
                                >
                                
                                Browse 300+ online citizen and business services, health care and services, lagos state government benefits and many more.

                                </SplitText> */}

                                <Typewriter
                
                                    options={
                                        
                                        {

                                            strings : ['Browse 250+ online citizen and business services.','Report Emergencies / Disasters.', 'Find health care services and benefits for you', 'Register / Renew your Lisences, Permits etc.', 'Stay up-to-date with trending news & events.', 'Find out more about Lagos State Govt. benefits.', 'Explore Lagos state government parastatals'],
                                            autoStart: true,
                                            loop: true,
                                            delay : 40,
                                            deleteSpeed : 10

                                        }
                                
                                    }
                
                                />

                            </div>

                        </div>

                        <div className="searchAnimation">

                            <dotlottie-player 
                                src={legi} 
                                background="transparent" 
                                speed="1" 
                                loop 
                                autoplay>   
                            </dotlottie-player>

                        </div>

                        <IconoirProvider
                        
                        iconProps = {

                            {
                                strokeWidth: 2,
                                width: 16,
                                height: 16,
                            }
                    
                        } 
                        
                        >

                        

                        <motion.div 
                        
                        initial = {{ x : 150, opacity : 0 }} 
                        whileInView = {{x : 0, opacity : 1}} 
                        transition={{duration : .4}}
                        viewport={{once : true}}
                        
                        className="quickAsapLinks">

                            {/* <div className="linkBin milt milo">

                                <h1>How do I : </h1>

                            </div>

                            <div className="linkBin milt untold">

                                <p>Explore all services </p>
                                <ArrowDown/>

                            </div> */}

                            <a href="/services/housing" className="linkBin">

                                <div className="content">

                                    <div className='quick__title'> 
                                        Housing in Lagos
                                        <div className="icon"><ArrowUpRight/></div> 
                                    </div>

                                    <p>Get info on housing, permits etc.</p>

                                </div>

                            </a>

                            <a href='/services/tourism' className="linkBin">

                                <div className="content">

                                    <div className="quick__title">

                                        Visit and tour Lagos
                                        <div className="icon"><ArrowUpRight/></div> 

                                    </div>

                                    <p>Book your trip, Get a guide, etc.</p>

                                </div>

                            </a>

                            <a href="/services/education" className="linkBin">

                                <div className="content">

                                    <div className='quick__title'> 
                                        Education in Lagos
                                        <div className="icon"><ArrowUpRight/></div> 
                                    </div>

                                    <p>View Educational centers</p>

                                </div>
                                
                            </a>

                            <a href="/government/mdas" className="linkBin">

                                <div className="content">

                                    <div className='quick__title'> 
                                    Explore agencies
                                        <div className="icon"><ArrowUpRight/></div> 
                                    </div>

                                    <p>View Agencies directories</p>

                                </div>
                                
                            </a>

                            <a href="/services/laws" className="linkBin">

                                <div className="content">

                                    <div className='quick__title'> 
                                        State laws and guidlines
                                        <div className="icon"><ArrowUpRight/></div> 
                                    </div>

                                    <p>Get acquianted with Lagos Laws.</p>

                                </div>
                                
                            </a>

                            <a href="/services/disasters_emergencies" className="linkBin">

                                <div className="content">

                                    <div className='quick__title'> 
                                        Report emergencies
                                        <div className="icon"><ArrowUpRight/></div> 
                                    </div>

                                    <p>Get rapid emergency contacts</p>

                                </div>
                                
                            </a>

                            <a href="/services/jobs" className="linkBin">

                                <div className="content">

                                    <div className='quick__title'> 
                                        Work / find jobs in Lagos 
                                        <div className="icon"><ArrowUpRight/></div> 
                                    </div>

                                    <p>Find job oppurtunities in Lagos.</p>

                                </div>
                                
                            </a>

                            <a href="/services/jobs" className="linkBin">

                                <div className="content">

                                    <div className='quick__title'> 
                                        Work / find jobs in Lagos 
                                        <div className="icon"><ArrowUpRight/></div> 
                                    </div>

                                    <p>Find job oppurtunities in Lagos.</p>

                                </div>
                                
                            </a>
                            

                        </motion.div>

                        </IconoirProvider>

                        <div className="linkServices">

                            Looking for more help? <a href='#services'>Browse all services</a>

                        </div>

                    </div>

                </Container>

        </div>

  )

}
