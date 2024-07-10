import React from 'react'
import road from '../../assets/LASG Illustrations/road.svg'
import theatre from '../../assets/LASG Illustrations/buildings.svg'
import water from '../../assets/LASG Illustrations/water.svg'
import eko from '../../assets/LASG Illustrations/eko.svg'
import clouds from '../../assets/LASG Illustrations/cloud.svg'

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

    </div>

  )

}
