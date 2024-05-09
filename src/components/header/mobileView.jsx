import React, {useState, useEffect} from 'react'

import { NavArrowDown, Xmark, ArrowUpRight } from 'iconoir-react'
import { useNavigate } from 'react-router'

export default function MobileView({closeModal}) {

  let navigate = useNavigate();

  const [isClicked, setIsClicked] = useState(false);
  
  useEffect(() => {
    
    if(isClicked) {

      document.querySelector('.dropdown').classList.add('active')

    } else{

      document.querySelector('.dropdown').classList.remove('active')

    }
    

  }, [isClicked]);

  return (
    
    <div className="MobileBody">

        <div className="menuMobile">

        <div className="menuBarArea uppercase">
            <div className="title" onClick={ () => { navigate('/'); closeModal(false); window.scrollTo(0,0) } } > LASG Home </div>
            <div className="close" onClick={ () => closeModal(false) } > <Xmark width={30} height={30} strokeWidth={1}/> </div>
        </div>

        <div className="menu_sm dropdown"> 

          <div className="dropdownTop" onClick={ () => setIsClicked(!isClicked) } >  
          
              Government <div className="tagArr"><NavArrowDown/></div>
          
          </div>

          <div className="dropdownBottom">

              <a href="/government/elected_officials"> Elected Officials </a>
              <a href="/government/mdas"> Explore Ministries </a>
              <a href="https://www.lagoshouseofassembly.gov.ng/4388-2/" target='_Blank' onClick={()=>closeModal(false)} > Legislative Officers </a>
              <a href="https://lagosjudiciary.gov.ng/directories.html#directories" target='_Blank' onClick={()=>closeModal(false)} > Judiciary Officers </a>

          </div>

        </div>
        <div className="menu_sm" onClick={ () => navigate('/services') } >Services</div>    
        <div className="menu_sm" onClick={ () => navigate('/news') } >News & Events </div>    
        <div className="menu_sm" onClick={ () => navigate('/contact') } > Contact </div>   
        <div className="menu_sm" onClick={ () => navigate('/search') } > Search </div> 

        <div className="others">

            <div className="mobileMenu"> Themes Agenda <ArrowUpRight color='#42FF01' /> </div>
            <div className="mobileMenu"> Resources <ArrowUpRight color='#42FF01' /> </div>
            <div className="mobileMenu"> Visit Lagos <ArrowUpRight color='#42FF01' /> </div>
            <div className="mobileMenu"> Report Emergency <ArrowUpRight color='#42FF01' /> </div>

        </div>                       

        </div>

    </div>

  )
}