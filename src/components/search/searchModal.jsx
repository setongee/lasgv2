import React, {useEffect, useState} from 'react'
import './searchModal.scss'
import { motion } from 'framer-motion'
import { Xmark } from 'iconoir-react'

export default function ViewSearchModal({data, close}) {

    const { sub_service, theme, url, short, cta } = data
    const [themeArea, setThemeArea] = useState('')

    useEffect(() => {
      
      const info = document.querySelector('.modal_info');
      info.innerHTML = short;

      switch (theme.trim()) {

        case 'business_trade_commerce' : setThemeArea('Business, Trade & Commerce')  
        break;

        case 'identity' : setThemeArea('My Identity')  
        break;

        case 'complaints_feedbacks' : setThemeArea('Complaints & Feedbacks')  
        break;

        case 'disasters_emergencies' : setThemeArea('Disasters & Emergencies')  
        break;

        case 'tourism' : setThemeArea('Tourism, Events & Culture')  
        break;

        case 'lisense' : setThemeArea('Licenses, Permits & Applications')  
        break;
      
        default : setThemeArea(theme);
        break;

      }
      
    }, []);

  return (

    <div className="view_service_modal">

        <motion.div className="modal_item" initial = { { opacity : 0, y : 100 } } animate = { { opacity : 1, y : 0 } } transition = {{type : 'spring', duration : 1}}  >

            <div className="closeModal" onClick={() => close()}> <Xmark/> </div>

            <div className="modal_theme"> {themeArea} </div>

            <div className="modal_title"> {sub_service} </div>
            
            <div className="modal_info"></div>

            <div className="modal_CTA" onClick={() => window.open(url)} > {cta} </div>

        </motion.div>

    </div>

  )

}
