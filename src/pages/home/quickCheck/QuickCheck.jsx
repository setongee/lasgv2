import React from 'react'
import '../../../styles/components/quickService/quickService.scss'
import { ArrowDown, ArrowUpRight, IconoirProvider } from 'iconoir-react'
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function QuickCheck() {

  return (
    
        <div className="quickCheck">


                <div className="getStarted">

                    <div className="textString thick">

                        <div className="p">

                            <div className="txt">

                                Welcome to <span>lagosstate.gov.ng</span>, the hub for information on lagos state government and services like education, business regulations, health, transparency, and more.
                                
                            </div>

                        </div>

                    <ArrowUpRight className='arry first' color="#32C76D" strokeWidth={2} height={60} width={60} /> 

                        <div className="how"> Get Started, You can - </div>

                        <div className="textChange">

                            <Typewriter
            
                            options={{
                                strings: ['Browse 250+ online citizen and business services.','Report an Emergency / Disaster.', 'Find health care services around you.', 'Register / Renew your Lisences, Permits etc.', 'Stay up-to-date with News & Events.', 'Find out more about Lagos State Govt. benefits.', 'Explore Ministries, Departments and Agencies.'],
                                autoStart: true,
                                loop: true,
                                delay : 40,
                                deleteSpeed : 10
                            }}
            
                        />

                        

                        </div>

                    </div>

                    <IconoirProvider
                    
                    iconProps = {

                        {
                            strokeWidth: 2,
                            width: 12,
                            height: 12,
                        }
                
                    } 
                    
                    >

                    <motion.div 
                    
                    initial = {{ x : 150, opacity : 0 }} 
                    whileInView = {{x : 0, opacity : 1}} 
                    transition={{duration : .4}}
                    viewport={{once : true}}
                    
                    className="quickAsapLinks">

                        <div className="linkBin milt milo">

                            <h1>How do I : </h1>

                        </div>

                        <div className="linkBin milt untold">

                            <p>Explore all services </p>
                            <ArrowDown/>

                        </div>

                        <div className="linkBin">

                            <div className="content">

                                <a href="/services/housing"> Live in Lagos </a>
                                <p>Residents permits, Housing in Lagos</p>

                            </div>

                            <ArrowUpRight/>

                        </div>

                        <div className="linkBin">

                            <div className="content">

                                <a href="/services/tourism"> Visit & Tour Lagos </a>
                                <p> Book yout trip, Get a guide, etc. </p>

                            </div>

                            <ArrowUpRight/>

                        </div>

                        <div className="linkBin">

                            <div className="content">

                                <a href="/services/education"> School in Lagos </a>
                                <p> Scholarships, School Applications...</p>

                            </div>

                            <ArrowUpRight/>


                        </div>

                        <div className="linkBin">

                            <div className="content">

                                <a href="/government/mdas"> Explore Agencies </a>
                                <p> View Agencies directories </p>

                            </div>

                            <ArrowUpRight/>


                        </div>

                        <div className="linkBin">

                            <div className="content">

                                <a href="/services/laws"> Laws & Guidlines </a>
                                <p>Get acquianted with Lagos Laws.</p>

                            </div>

                            <ArrowUpRight/>


                        </div>

                        <div className="linkBin milt">

                            <div className="content">

                                <a href="/services/disasters_emergencies"> Report Emergencies </a>
                                <p> Call numbers to instant authorities.</p>

                            </div>

                            <ArrowUpRight/>


                        </div>

                        <div className="linkBin milt milo_pro_max">

                            <div className="content">

                                <a href="/services/jobs">Work in Lagos </a>
                                <p>Find job oppurtunities in Lagos.</p>

                            </div>

                            <ArrowUpRight/>


                        </div>


                        

                    </motion.div>

                    </IconoirProvider>

                </div>

        </div>

  )

}
