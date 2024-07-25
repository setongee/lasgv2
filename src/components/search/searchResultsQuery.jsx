import React from 'react'
import {motion} from 'framer-motion'

export default function SearchResultsQuery({data, i, search}) {

  return (

    <motion.div className="result__card" initial = {{y : 100, opacity : 0}} animate = { { y : 0, opacity : 1 } } transition = { { duration : 1, delay : i * 0.1, type : 'spring' } } onClick = { () => search(data) }  >

        <div className="title">{data.sub_service}</div>
        <div className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit fwbpoy fiwewe eyqo.</div>
        <div className="themeArea uppercase"> From {data.theme} </div>
    
    </motion.div>

  )
  
}
