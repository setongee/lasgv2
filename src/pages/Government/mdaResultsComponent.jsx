import React, {useState} from 'react'

import LogoMinistry from '../../assets/MDA/ministry.svg'
import LogoDepartment from '../../assets/MDA/department.svg'
import LogoAgency from '../../assets/MDA/agency.svg'

import { ArrowUpRight, Internet } from 'iconoir-react';
import Mda_modal from './mda_modal';



export default function MdaResultsComponent( { data, openModal } ) {

  return (

    <div className="mda_card" onClick={ () => openModal(data) }>


        <div className="logo"> <img src={data.type === 'ministry' ? LogoMinistry : data.type === 'department' ? LogoDepartment : LogoAgency} alt="Lagos State Ministries, Departments & Agencies" /> </div>

        <div className="topx">

            <div className="mda_name"> {data.name} </div>
            <div className="mda_desc"> {data.short} </div>

        </div>

        <div className="arrowMai">

            <div className="arrowMe top"> <ArrowUpRight strokeWidth={2}/>  </div>
            <div className="arrowMe bot"> <ArrowUpRight color='#0C766F' strokeWidth={2}/>  </div>
        
        </div>

    </div>


  )
}
