import React from 'react'

export default function Officials( { officials, uid } ) {

  return (
    
    <div className="officialsPage">

        <div className="photosPoint" onClick = { ()=> window.location.href = `/government/elected_officials/${uid}/view` } >

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
