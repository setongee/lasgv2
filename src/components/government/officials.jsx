import React from 'react'

export default function Officials( { officials } ) {

  return (
    
    <div className="officialsPage">

        <div className="photosPoint">

            <div className="photoHolder">

                <div className="imageCarrier"> 
                    <img src= {officials.image} /> 
                </div>

                <div className="nameCarrier">

                    <div className="fullname thick"> {officials.fullname} </div>
                    <div className="position"> {officials.position} </div>

                </div>

            </div>
            
        </div>
        
    </div>

  )

}
