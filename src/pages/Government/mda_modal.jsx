import React from 'react'

import LogoMinistry from '../../assets/MDA/ministry.svg';
import LogoDepartment from '../../assets/MDA/department.svg';
import LogoAgency from '../../assets/MDA/agency.svg';
import { Globe, Internet, Phone, Message, Xmark, MailOut, MailOpen } from 'iconoir-react';

export default function Mda_modal( { data, closeModal } ) {

  return (

    <div className="openMdaModal">

        <div className="modal">

                <div className="closeModal" onClick={ () => closeModal() }> <Xmark/> </div>

                <div className="logoPart"> <img src={data.type === 'ministry' ? LogoMinistry : data.type === 'department' ? LogoDepartment : LogoAgency} alt="Lagos State Ministries, Departments & Agencies" /> </div>

                <div className="tag"> {data.type} </div>

                <div className="name_mda"> {data.mda} </div>

                {/* <div className="short"> {data.short} </div> */}

                <div className="address_icon"> <Globe/> Office Address </div>

                <div className="address"> {data.address} </div>

                <div className="getDirections" onClick={ () => window.open(`https://www.google.com/maps?q=${data.mda}`) } >Get Directions</div>

                <div className="contactArea">

                    <div className="icon" onClick={ () => window.open(data.website) } title='Visit Website'> <Internet/> </div>
                    <div className="icon" onClick={() => window.open(data.contact)} title='Make a phone call or send SMS' > <Phone/> </div>
                    <div className="icon" title='Send an Email' onClick={ () => window.open(`mailto:${data.email}`) } > <MailOpen /> </div>

                </div>

        </div>

    </div>

  )

}
