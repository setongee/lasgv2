import React,{useState} from 'react'

//------------Start of styles -------------

import '../../styles/components/header.scss'
import '../../styles/global.scss'

//----------- End of styles -----------------

import {ArrowUpRight, IconoirProvider } from 'iconoir-react';
import NavElements from './navElements';
import { navigationRoutes } from './navData';
import lasgLogo from '../../assets/navBar/lasg_logo.png'
import Container from '../container/container';
import NestedView from './nestedView';

import { useLocation, useNavigate } from 'react-router';


export default function Header() {  

    let location = useLocation();
    let navigate = useNavigate();

  
//-------------------- States Management - The problem of dynamic animated nests lolz ---------------------
  

//-------------------- End of Nested States Management ---------------------



return (

    <IconoirProvider 
    
    iconProps = {

        {
            color: '#fff',
            strokeWidth: 3,
            width: 12,
            height: 12,
        }

    } >

        <div className="appHeader"> 
        
            {/* Lagos State Color Strip */}
            <div className="strip_lines">

                <div className="lineIn lasg_red"></div>
                <div className="lineIn lasg_blue"></div>
                <div className="lineIn lasg_yellow"></div>
                <div className="lineIn lasg_green"></div>

            </div>

            <div className="seth_Link">

                <Container>

                    <div className="newsScroll">
                        <p>Monday, 8th April 2024</p>
                    </div>

                    {/* quick_links */}
                    <div className="quick_links"> 
                    
                        <a href="#" className='prima' >Themes Agenda 
                            <div className="iconAnim"> 
                                <ArrowUpRight className='arr first'/> 
                                <ArrowUpRight className='arr last'/> 
                            </div> 
                        </a>

                        <a href="#" className='prima' >Resources 
                            <div className="iconAnim"> 
                                <ArrowUpRight className='arr first'/> 
                                <ArrowUpRight className='arr last'/> 
                            </div> 
                        </a>
                        
                        <a href="#" className='prima' >Visit Lagos 
                            <div className="iconAnim"> 
                                <ArrowUpRight className='arr first'/> 
                                <ArrowUpRight className='arr last'/> 
                            </div> 
                        </a>

                        <a href="#" className='prima' > Emergency 
                            <div className="iconAnim"> 
                                <ArrowUpRight className='arr first'/> 
                                <ArrowUpRight className='arr last'/> 
                            </div> 
                        </a>
                    
                    </div>

                </Container>

            </div>

            {/* main navigation links */}
            <div className="navigation"> 

                <Container>
                    
                    <div className="flex space_fully">

                        {/* Site Branding Information */}
                        <div className="siteBranding"  
                        
                        onClick = { 
                            () => { 
                                

                                if (location.pathname === '/') {

                                    window.scroll(0,0);

                                }

                                
                                navigate('/')

                            } }>

                            <div className="logo"> <img src={lasgLogo} alt="Lagos State Official Digital Logo" /> </div>
                            <div className="seth_textTop siteName uppercase thick">Official Website of Lagos State  </div>

                            </div>

                            {/* Main Navigation Links */}
                            <div className="seth_nav"> 

                            {
                                Object.keys(navigationRoutes).length ? Object.entries(navigationRoutes).map( (nav, index) => {

                                    return <NavElements navigationRoutes = {nav[1]} key = {index} point = {nav[0]} /> // Main Nav Links                           

                                } ) : null
                            }

                            </div>

                    </div>
                    
                </Container>
            
            </div>

        
        </div>

    </IconoirProvider>

  )

}
