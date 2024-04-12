import React from 'react'
import Container from '../../components/container/container'
import '../../styles/components/quickService/quickService.scss'
import Arrow from '../../components/arrowEvents/arrow'
import { ArrowDown, ArrowDownLeftCircleSolid, ArrowUpRight, IconoirProvider, NavArrowLeft, NavArrowRight } from 'iconoir-react'
import {motion} from 'framer-motion'
import Typewriter from 'typewriter-effect';

export default function QuickCheck() {

const dataService = {

    service1 : {

        title : "Report an emergency",
        url : "#"

    },

    service2 : {

        title : "move to lagos",
        url : "#"

    },

    service3 : {

        title : "Find Govt. hospitals near ME",
        url : "#"

    },

    service4 : {

        title : "pay traffic penalty fees",
        url : "#"

    },

    service5 : {

        title : "work in Lagos",
        url : "#"

    }

}

const moveScrollRight = () => {

    document.querySelector('.serviceBox').scrollLeft += 300;

}

const moveScrollLeft = () => {

    document.querySelector('.serviceBox').scrollLeft -= 300;

}

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
                                strings: ['Report an Emergncy / Disaster.', 'Find health care services around you.', 'Register / Renew your Lisences, Permits etc.', 'Find out more about Lagos State Govt. benefits.', 'Explore Ministries, Departments and Agencies'],
                                autoStart: true,
                                loop: true,
                                delay : 30,
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

                    <div className="quickAsapLinks">

                        <div className="linkBin milt">

                            <h1>How do I : </h1>

                        </div>

                        <div className="linkBin milt untold">

                            <p>Explore all services </p>
                            <ArrowDown/>

                        </div>

                        <div className="linkBin">

                            <div className="content">

                                <a href="#"> About Lagos </a>
                                <p>Lorem ipsum dolor sit amet.</p>

                            </div>

                            <ArrowUpRight/>

                        </div>

                        <div className="linkBin">

                            <div className="content">

                                <a href="#"> Live in Lagos </a>
                                <p>Lorem ipsum dolor sit amet.</p>

                            </div>

                            <ArrowUpRight/>

                        </div>

                        <div className="linkBin">

                            <div className="content">

                                <a href="#"> Visit & Tour Lagos </a>
                                <p>Lorem ipsum dolor sit amet.</p>

                            </div>

                            <ArrowUpRight/>

                        </div>

                        <div className="linkBin">

                            <div className="content">

                                <a href="#"> School in Lagos </a>
                                <p>Lorem ipsum dolor sit amet.</p>

                            </div>

                            <ArrowUpRight/>


                        </div>

                        <div className="linkBin">

                            <div className="content">

                                <a href="#"> Explore Agencies </a>
                                <p>Lorem ipsum dolor sit amet.</p>

                            </div>

                            <ArrowUpRight/>


                        </div>

                        <div className="linkBin">

                            <div className="content">

                                <a href="#"> Laws & Guidlines </a>
                                <p>Lorem ipsum dolor sit amet.</p>

                            </div>

                            <ArrowUpRight/>


                        </div>

                        <div className="linkBin milt">

                            <div className="content">

                                <a href="#"> Report Emergencies </a>
                                <p>Lorem ipsum dolor sit amet.</p>

                            </div>

                            <ArrowUpRight/>


                        </div>

                        <div className="linkBin milt">

                            <div className="content">

                                <a href="#">Work in Lagos </a>
                                <p>Lorem ipsum dolor sit amet.</p>

                            </div>

                            <ArrowUpRight/>


                        </div>


                        

                    </div>

                    </IconoirProvider>

                </div>

        </div>

  )

}
