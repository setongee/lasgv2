import React, {useState} from 'react'
import { ArrowUpRight } from 'iconoir-react';
import { convertToTitleCase, truncateText } from '../../middleware/middleware';

export default function ServiceSearchResults( { data, openModal, logo } ) {
console.log(data)
  return (

    <div className="mda_card" id = 'na_me_be_this' onClick={ () => openModal(data) }>

        {/* <div className="topx">

            <div className="mda_name"> {data.name} </div>
            <div className="mda_desc"> {convertToTitleCase(data.short)} </div>

        </div>

        <div className="arrowMai">

            <div className="arrowMe top"> <ArrowUpRight strokeWidth={2}/>  </div>
            <div className="arrowMe bot"> <ArrowUpRight color='#0C766F' strokeWidth={2}/>  </div>
        
        </div> */}

<div className="details__zone flex">

<div className="logo"> <img src={logo} alt="Lagos State Ministries, Departments & Agencies" />  </div>

<div className="mda_name"> {truncateText(data.name, 60)} </div>

</div>

<div className="topx">
  <div className="mda_desc"> {convertToTitleCase(truncateText(data.short, 80))} </div>

</div>

    </div>

  )
}
