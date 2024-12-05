import React from 'react'
import { ArrowUpRight } from 'iconoir-react'
import {motion} from 'framer-motion'

export default function FetchedOfficials( { officials } ) {


  return (
    
    <div className="officialsPage">

        <div className="photosPoint">

            <div className="photoHolder">

                <div className="imageCarrier"> 

                    <img src= {officials.photo} /> 

                </div>

                <div className="nameCarrier">

                    <div className="position"> {officials.position} </div>
                    <div className="fullname thick"> {officials.fullname} </div>

                </div>

            </div>
            
        </div>
        
    </div>

  )

}
