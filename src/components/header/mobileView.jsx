import React from 'react'

import { NavArrowDown, Xmark, ArrowUpRight } from 'iconoir-react'

export default function MobileView({closeModal}) {
  return (
    
    <div className="menuMobile">

            <div className="menuBarArea uppercase">
                <div className="title"> LASG Menu </div>
                <div className="close" onClick={ () => closeModal(false) } > <Xmark width={30} height={30} strokeWidth={1}/> </div>
            </div>

            <div className="menu_sm"> Government <NavArrowDown/> </div>
            <div className="menu_sm">Services</div>    
            <div className="menu_sm">News & Events </div>    
            <div className="menu_sm"> Contact </div>   
            <div className="menu_sm"> Search </div> 

            <div className="others">

                <div className="mobileMenu"> Themes Agenda <ArrowUpRight color='#42FF01' /> </div>
                <div className="mobileMenu"> Resources <ArrowUpRight color='#42FF01' /> </div>
                <div className="mobileMenu"> Visit Lagos <ArrowUpRight color='#42FF01' /> </div>
                <div className="mobileMenu"> Report Emergency <ArrowUpRight color='#42FF01' /> </div>
            
            </div>                       

    </div>

  )
}
