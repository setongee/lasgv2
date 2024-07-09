import React, {useState} from 'react'

import LogoMinistry from '../../assets/MDA/ministry.svg'
import LogoDepartment from '../../assets/MDA/department.svg'
import LogoAgency from '../../assets/MDA/agency.svg'

import { ArrowUpRight, Internet } from 'iconoir-react';

// service icons


import agriculture from '../../assets/icons/service/agriculture.svg'
import advertisement from '../../assets/icons/service/advertisement.svg'
import business_trade_commerce from '../../assets/icons/service/business_trade_commerce.svg'
import complaints_feedbacks from '../../assets/icons/service/complaints_feedbacks.svg'
import disability_services from '../../assets/icons/service/disability_services.svg'
import disasters_emergencies from '../../assets/icons/service/disasters_emergencies.svg'
import education from '../../assets/icons/service/education.svg'
import environment from '../../assets/icons/service/environment.svg'
import events from '../../assets/icons/service/events.svg'
import government from '../../assets/icons/service/government.svg'
import health from '../../assets/icons/service/health.svg'
import housing from '../../assets/icons/service/housing.svg'
import insurance from '../../assets/icons/service/insurance.svg'
import identity from '../../assets/icons/service/identity.svg'
import jobs from '../../assets/icons/service/jobs.svg'
import lands from '../../assets/icons/service/lands.svg'
import laws from '../../assets/icons/service/laws.svg'
import lisense from '../../assets/icons/service/lisense.svg'
import loans from '../../assets/icons/service/loans.svg'
import media from '../../assets/icons/service/media.svg'
import news from '../../assets/icons/service/news.svg'
import payments from '../../assets/icons/service/payments.svg'
import permits from '../../assets/icons/service/permits.svg'
import pilgrims from '../../assets/icons/service/pilgrims.svg'
import reports from '../../assets/icons/service/reports.svg'
import security from '../../assets/icons/service/security.svg'
import science from '../../assets/icons/service/science.svg'
import tourism from '../../assets/icons/service/tourism.svg'
import transportation from '../../assets/icons/service/transportation.svg'
import water from '../../assets/icons/service/water.svg'


// end of service icons



export default function ServiceSearchResults( { data, openModal, icon } ) {

    const icons = {

        advertisement : advertisement,
        agriculture : agriculture,
        business_trade_commerce : business_trade_commerce,
        complaints_feedbacks : complaints_feedbacks,
        disability_services : disability_services,
        disasters_emergencies : disasters_emergencies,
        education : education,
        environment : environment,
        events : events,
        government : government,
        health : health,
        housing : housing,
        insurance : insurance,
        identity : identity,
        jobs : jobs,
        lands : lands,
        laws : laws,
        lisense : lisense,
        loans : loans,
        media : media,
        news : news,
        payments : payments,
        permits : permits,
        pilgrims : pilgrims,
        reports : reports,
        security : security,
        science : science,
        tourism : tourism,
        transportation : transportation,
        water : water

    }

  return (

    <div className="mda_card" id = 'na_me_be_this' onClick={ () => openModal(data) }>


        <div className="logo"> <img src={icons[icon]} alt="Lagos State Digital Services" /> </div>

        <div className="topx">

            <div className="mda_name"> {data.sub_service} </div>
            {/* <div className="mda_desc"> {data.short} </div> */}

        </div>

        <div className="arrowMai">

            <div className="arrowMe top"> <ArrowUpRight strokeWidth={2}/>  </div>
            <div className="arrowMe bot"> <ArrowUpRight color='#0C766F' strokeWidth={2}/>  </div>
        
        </div>

    </div>

  )
}
