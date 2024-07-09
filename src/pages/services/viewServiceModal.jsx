import React, {useEffect} from 'react'
import './serviceModal.scss'
import { motion } from 'framer-motion'
import { Xmark } from 'iconoir-react'

export default function ViewServiceModal({data, close}) {

    console.log(data);

    const { sub_service, theme, url, short, cta } = data

    console.log(short)

    useEffect(() => {
      
      const info = document.querySelector('.modal_info');
      info.innerHTML = short;

      
    }, []);

  return (

    <div className="view_service_modal">

        <motion.div className="modal_item" initial = { { opacity : 0, y : 100 } } animate = { { opacity : 1, y : 0 } } transition = {{type : 'spring', duration : 1}}  >

            <div className="closeModal" onClick={() => close()}> <Xmark/> </div>

            <div className="modal_theme"> Theme Area </div>

            <div className="modal_title"> {sub_service} </div>
            
            <div className="modal_info"></div>

            <div className="modal_CTA" onClick={() => window.open(url)} > {cta} </div>

        </motion.div>

    </div>

  )

}
