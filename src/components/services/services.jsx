import React, {useState} from 'react'
import Container from '../container/container'
import './services.scss'
import { useNavigate } from 'react-router'
import { motion } from 'framer-motion'

import LASG_SERVICES from '../../api/data/services'

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
import { ArrowDown, ArrowRight, ArrowUp } from 'iconoir-react'


export default function Services({bgColor}) {

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

    
    const [limit, setLimit] = useState(11);

    

  return (

    <div className="services" style={{backgroundColor : bgColor}} >

        <Container>

            <div className="midTopic">
                <div className="topic thick_700">All Government Topics & Services</div>
                <div className="subtitle">Empowering Citizens of Lagos State to Engage with their Government.</div>
            </div>

            <div className="servicesPlatoon">

                {
                    LASG_SERVICES.map( (lasg_service, index) => {

                        if (index <= limit) {

                            return (

                                <motion.div 
                                className="services_card" 
                                onClick={() => window.location.href = `/services/${lasg_service.id}` } key={index}
                                
                                >
    
                                    <div className="icon"> 

                                        <div className="hov hov1">

                                            <img src={icons[lasg_service.id]} alt="" />   

                                        </div>  

                                        <div className="hov hov2">

                                            <img src={icons[lasg_service.id]} alt="" />   

                                        </div>                                      

                                    </div>
    
                                    <div className="title thick"> {lasg_service.title} </div>
    
                                    <div className="subtext"> {lasg_service.text} </div>
    
                                </motion.div>      
    
                            )

                        }

                    })
                }
                

            </div>

            <motion.div className="view_all thick"
            
            onClick={ () => {
                
                if (limit === 11) {

                    setLimit( LASG_SERVICES.length )

                } else {
                    setLimit(11)
                }

            } } > 
            
            Explore More { limit === 11 ? <ArrowDown strokeWidth={2} width={15} height={15} /> : <ArrowUp strokeWidth={2} width={15} height={15} /> } 
            
            </motion.div>

        </Container>

    </div>

  )
}
