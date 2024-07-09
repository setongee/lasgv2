import React from 'react'

import judi from '../../assets/icons/service/laws.svg'
import legi from '../../assets/icons/service/legistlative.svg'

export default function Officials( { officials, uid } ) {


  return (
    
    <div className="officialsPage">

        <div className="photosPoint" onClick = { ()=> {

            !officials.isIcon ? window.location.href = `/government/elected_officials/${uid}/view` : window.open(officials.url)

        } } >

            <div className="photoHolder">

                {
                    !officials.isIcon ? 
                    
                    (
                        <div className="imageCarrier"> 
                            <img src= {officials.image} /> 
                        </div>
                    )

                    : 

                    uid === 'legi' ? 

                    (
                        (
                            <div className="imageCarrier_sub"> 
    
                                <dotlottie-player 
                                src="https://lottie.host/d8708bb3-46d4-4e3e-9fde-4737f58941be/8QalVRPLnx.json" 
                                background="transparent" 
                                speed="1" 
                                style={{width: "300px", height: "300px"}} 
                                loop 
                                autoplay>   
                                </dotlottie-player>
    
                            </div>
                        )
                    )

                    : 

                    (
                        (
                            <div className="imageCarrier_sub"> 
    
                                <dotlottie-player 
                                src="https://lottie.host/291c86ca-3894-4239-b95a-1b1ca75fe0d0/vErgv8KUky.json" 
                                background="transparent" 
                                speed="1" 
                                style={{width: "130px", height: "130px"}} 
                                loop 
                                autoplay>   
                                </dotlottie-player>
    
                            </div>
                        )
                    )
                }

                <div className="nameCarrier">

                    <div className="fullname thick"> {officials.fullname} </div>
                    <div className="position"> {officials.position} </div>

                </div>

            </div>
            
        </div>
        
    </div>

  )

}
