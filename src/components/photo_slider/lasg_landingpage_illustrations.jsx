import React from 'react'
import road from '../../assets/LASG Illustrations/road.svg'
import theatre from '../../assets/LASG Illustrations/buildings.svg'
import water from '../../assets/LASG Illustrations/water.svg'
import eko from '../../assets/LASG Illustrations/eko.svg'
import clouds from '../../assets/LASG Illustrations/cloud.svg'

// Motion Animation
import danfo from '../../assets/LASG Illustrations/danfo.svg'
import lasumbus from '../../assets/LASG Illustrations/lasumbus.svg'
import brt from '../../assets/LASG Illustrations/brt.svg'
import lagride from '../../assets/LASG Illustrations/lagosride.svg'
import okada from '../../assets/LASG Illustrations/okada.svg'
import car1 from '../../assets/LASG Illustrations/car1.svg'
import car2 from '../../assets/LASG Illustrations/car2.svg'

export default function LasgIllustrations() {

  return (

    <div className="lasg__illustration">

        {/* Road Component */}
        <div className="lasg__illustration__road">
            <img src={road} alt="" />
        </div>

        {/* National Theatre Component */}
        <div className="lasg__illustration__theatre">
            <img src={theatre} alt="" />
        </div>

        {/* Water Component */}
        <div className="lasg__illustration__water">
            <img src={water} alt="" />
        </div>

         {/* Eko Bridge Component */}
         <div className="lasg__illustration__eko">
            <img src={eko} alt="" />
        </div>

        {/* Clouds Component */}
        <div className="lasg__illustration__clouds">
            <img src={clouds} alt="" />
        </div>

        {/* Clouds Component */}
        <div className="lasg__illustration__clouds lasg__illustration__clouds_2x">
            <img src={clouds} alt="" />
        </div>



        {/* Motion Moves */}

        <div className="motion__illustration lagride">
            <img src={lagride} alt="Lagos State Assets" />
        </div>

        <div className="motion__illustration brt">
            <img src={brt} alt="Lagos State Assets" />
        </div>

        <div className="motion__illustration car">
            <img src={car1} alt="Lagos State Assets" />
        </div>
       
        <div className="motion__illustration lasumbus">
            <img src={lasumbus} alt="Lagos State Assets" />
        </div>

        <div className="motion__illustration danfo">
            <img src={danfo} alt="Lagos State Assets" />
        </div>
        

    </div>

  )

}
