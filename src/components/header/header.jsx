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

}, [location.pathname]);

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

                        <div className="menuForm flex">

                            {/* Site Branding Information */}

                            <div className="siteBranding">

                                <a href='/' className="logo"> <img src={lasgLogo} alt="Lagos State Official Digital Logo" /> </a>

                                <div className="mobileBurger mobileBurger2" onClick={ () => openMobileMenu() } > <MenuScale color='#131414' width={20} height={20} strokeWidth={2} /></div>

                            </div>

                            {/* Main Navigation Links */}

                            <div className="seth_nav"> 

                                <div className="parentName"> 
                                   
                                    Government <NavArrowDown/>

                                    <div className="hovering">

                                        <div className="title">Explore the Lagos State Government, Officials and Parastatals.
                                        </div>
                                        
                                        <a href='/government/elected_officials' className="hover">
                                            <p>Elected Officials  <ArrowUpRight/></p>
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

                                <a href='/services' className="parentName"> Services <ArrowUpRight/> </a>

                                <a href='/news/trending' className="parentName">Newsroom <ArrowUpRight/> </a>

                                <a href='/events/upcoming' className="parentName">Events <ArrowUpRight/> </a>
                                
                                <a href='/connect' className="parentName"> Connect <ArrowUpRight/> </a>

                                <div className="parentName searching" onClick={ () => openModal() } > <Search height={17} width={17} strokeWidth={2.4}/> Search </div>

                            </div>

                        </div>
                        
                    </Container>
                
                </div>

            </div>

        </IconoirProvider>

    </div>

  )

}
