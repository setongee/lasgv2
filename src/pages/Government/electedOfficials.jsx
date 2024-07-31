import React, {useState} from 'react'
import Container from '../../components/container/container'
import './officials.scss'
import OFFICIALS_DATA from '../../components/government/officials_data'
import { useLocation } from 'react-router'
import Officials from '../../components/government/officials'

export default function ElectedOfficials() {

let location = useLocation();

const [paramsUrl, setparamsUrl] = useState(location.pathname.split('/')[2]);


  return (

    <div className="officials_body bagElect">

        <Container>

            <div className="topMan">

                <div className="pageHeader flex flex_col">

                    {/* <div className="pageTitle"> Working together for a <span className='thick_700'> greater </span> Lagos. </div> */}

                    <div className="pageTitle">Collaborating to Build a Better Lagos : Together Towards Progress</div>

                    <div className="pageTitleSubs"> Our mission is to work together, leveraging our collective expertise and resources, to create a vibrant, prosperous, and sustainable Lagos. </div>

                </div>

            </div>

            <div className="items">

                {
                    Object.entries(OFFICIALS_DATA[paramsUrl]).map( (resData, index) => {

                        return <Officials officials = { resData[1] } key = {index} uid = {resData[0]} />

                    } )
                }
                
            </div>

        </Container>

    </div>

  )

}
