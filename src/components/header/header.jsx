import React,{useState, useEffect} from 'react'

//------------Start of styles -------------

import '../../styles/components/header.scss'
import '../../styles/global.scss'

//----------- End of styles -----------------

import {ArrowUpRight, IconoirProvider, Menu, MenuScale, NavArrowDown, Search, Xmark } from 'iconoir-react';
import lasgLogo from '../../assets/navBar/lasg_logo.png'
import Container from '../container/container';

import { useLocation, useNavigate } from 'react-router';
import MobileView from './mobileView';
import SearchQuery from '../search/searchQuery';
import Top__header from './top__header';
import StripLines from './StripLines';


export default function Header() {  

const [isMobileOpen, setIsMobileOpen] = useState(false);

const [showSearch, setShowSearch] = useState(false);

let location = useLocation();
let navigate = useNavigate();
  
//--- States Management - The problem of dynamic animated nests lolz --- 

const closeModal = () => {

    setShowSearch(false);
    document.body.style.overflowY = 'visible';

}

const openModal = () => {

    setShowSearch(true);
    document.body.style.overflowY = 'hidden';

}

useEffect(() => {
    
    window.scroll(0,0);
    setIsMobileOpen(false);
    document.body.style.overflowY = 'visible';

    setActiveState();   
    
    console.log(location.pathname.split('/')[1])

}, [location.pathname]);

const setActiveState = () => {

    const target = location.pathname.split('/')[1]

    if(document.querySelector('current') !== null) {

        document.querySelector('current').classList.remove('current');

    }

    if (target === '') {
        document.querySelector(`.seth_nav [name="home"]`).classList.add('current');
    } 
    else{
        document.querySelector(`.seth_nav [name=${target}]`).classList.add('current');
    }

}

const openMobileMenu = () => {

    setIsMobileOpen(true);
    document.body.style.overflowY = 'hidden';

}

const closeMobileMenu = () => {

    setIsMobileOpen(false);
    document.body.style.overflowY = 'visible';

}



//-------------------- End of Nested States Management ---------------------

return (

    <div>

        {
            showSearch ? <SearchQuery query = '' closeModal={closeModal} /> : null
        }

        <div className="emergency">

            <div className="emergency__body">

                <div className="longCards">

                    <div className="first">
                        
                    </div>

                </div>

            </div>

        </div>

        <IconoirProvider 
    
        iconProps = {

            {
                strokeWidth: 3,
                width: 12,
                height: 12,
            }

        } >

            <div className="appHeader"> 

                { isMobileOpen ? <MobileView closeModal = {closeMobileMenu} /> : null }

                <StripLines/>
                
                <Top__header/>

                {/* main navigation links */}

                <div className="navigation"> 

                    <Container>

                        <div className="menuForm">

                            {/* Site Branding Information */}

                            <div className="siteBranding">

                                <a href='/' className="logo"> <img src={lasgLogo} alt="Lagos State Official Digital Logo" /> </a>

                                <div className="mobileBurger mobileBurger2" onClick={ () => openMobileMenu() } > <MenuScale color='#131414' width={22} height={22} strokeWidth={2.5} /></div>

                            </div>

                            {/* Main Navigation Links */}

                            <div className="seth_nav"> 

                                <a href='/' className="parentName" name = 'home'> Home <ArrowUpRight/> </a>

                                <div className="parentName" name = 'government'> 
                                   
                                    Government <NavArrowDown/>

                                    <div className="hovering">

                                        <div className="title">Explore the Lagos State Government, Officials and Parastatals.
                                        </div>
                                        
                                        <a href='/government/elected_officials' className="hover">
                                            <p>Members of the State Executive Council  <ArrowUpRight/></p>
                                            <span>View all the officers elected by lagosians this tenure.</span>
                                        </a>

                                        <a href='/government/mdas/all' className="hover">
                                            <p>Explore Ministries and Departments <ArrowUpRight/> </p>
                                            <span>View all the Legitlative Officers elected by lagosians this tenure.</span>
                                        </a>

                                        <a target='_blank' href='https://lagoshouseofassembly.gov.ng/home/our-team/' className="hover">
                                            <p>Legislative Officers  <ArrowUpRight/></p>
                                            <span>View all the Legitlative Officers elected by lagosians this tenure.</span>
                                        </a>

                                        <a target = '_blank' href='https://lagosjudiciary.gov.ng/directories.html#directories' className="hover">
                                            <p>Judiciary Officers <ArrowUpRight/></p>
                                            <span>View all the Judiciary Officers appointed for this tenure.</span>
                                        </a>

                                    </div>

                                </div>

                                <a href='/services' className="parentName" name = 'services'> Services <ArrowUpRight/> </a>

                                <a href='/news/trending' className="parentName" name = 'news'> Newsroom <ArrowUpRight/> </a>

                                <a href='/events/upcoming' className="parentName" name = 'events'>Events <ArrowUpRight/> </a>
                                
                                <a href='/connect' className="parentName" name = 'connect'> Connect <ArrowUpRight/> </a>

                            </div>

                            {/* <div className="button__search"><div className="parentName searching" onClick={ () => openModal() } > <Search height={17} width={17} strokeWidth={2.4}/> Search </div></div> */}

                            <div className="button__search"><div className="parentName searching" onClick={ () => openModal() } > <Search height={20} width={20} strokeWidth={2.7}/> </div></div>

                        </div>
                        
                    </Container>
                
                </div>

            </div>

        </IconoirProvider>

    </div>

  )

}
