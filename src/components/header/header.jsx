import React,{useState, useEffect} from 'react'

//------------Start of styles -------------

import '../../styles/components/header.scss'
import '../../styles/global.scss'

//----------- End of styles -----------------

import {ArrowUpRight, IconoirProvider, Menu, MenuScale, NavArrowDown, Search } from 'iconoir-react';
import { navigationRoutes } from './navData';
import lasgLogo from '../../assets/navBar/lasg_logo.png'
import Container from '../container/container';

import { useLocation, useNavigate } from 'react-router';
import NestedView from './nestedView';
import Pong from './pong';


export default function Header() {  

const [showTab, setShowTab] = useState(false);
const [indexing, setIndexing] = useState('')

let location = useLocation();
let navigate = useNavigate();

  
//-------------------- States Management - The problem of dynamic animated nests lolz ---------------------


const showMenuIndex = (index) => {

    setShowTab(true);
    const arrParent = Array.from(document.querySelectorAll('.parentName'));
    
    if( document.querySelector('.fix') === null ) {
        
        arrParent[index].classList.add('fix');

    } else {

        document.querySelector('.fix').classList.remove('fix');
        arrParent[index].classList.add('fix');

    }

    if(index === indexing && showTab) {

        setShowTab(false);
        document.querySelector('.fix').classList.remove('fix');

    }

}  

useEffect(() => {
    
    //setShowTab(true);

}, [indexing]);


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

                            <div className="mobileBurger"> <MenuScale color='#fff' width={20} height={20} strokeWidth={2.5} /></div>

                            <div className="logo"> <img src={lasgLogo} alt="Lagos State Official Digital Logo" /> </div>

                            <div className="seth_textTop siteName uppercase thick">Official Website of Lagos State  </div>

                            <div className="mobileBurger mobileBurger2"> <Search color='#fff' width={20} height={20} strokeWidth={2} /></div>

                        </div>

                            {/* Main Navigation Links */}
                            <div className="seth_nav"> 

                            {
                                Object.values(navigationRoutes).map( (data, index) => {

                                    return (
                                    
                                    <div 
                                        key = {index} 
                                        className="parentName thick uppercase" 
                                        onClick = { 

                                            () => {
                                                
                                                if(data.isNest) {

                                                    showMenuIndex(index); setIndexing(index)

                                                } else {

                                                    window.location.href = data.url

                                                }

                                            } 
                                            
                                        } 
                                        
                                        > 
                                        
                                        {data.parentName}
                                        {
                                            data.isNest ? <NavArrowDown color='#131414' className='navi' /> : <ArrowUpRight color='#131414' /> 
                                        }
                                        
                                        </div> 
                                
                                )

                                } )
                            }

                            </div>

                            <div className="showPage">

                                {
                                    showTab ?  <NestedView navData = {navigationRoutes[`route${indexing+1}`]} /> : null
                                }

                            </div>

                    </div>
                    
                </Container>
            
            </div>

        
        </div>

    </IconoirProvider>

  )

}
