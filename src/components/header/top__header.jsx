import React from 'react'
import { ArrowUpRight } from 'iconoir-react'
import Container from '../container/container'


export default function Top__header() {

  return (

    <div className="seth_Link">

        <Container>

            {/* quick_links */}
            <div className="quick_links"> 

                <a href="/resources" className='prima' >Resources 
                    <div className="iconAnim"> 
                        <ArrowUpRight className='arr first'/> 
                        <ArrowUpRight className='arr last'/> 
                    </div> 
                </a>
                
                <a target='_blank' href="https://youtu.be/VJnu7lR4Kks" className='prima' >Visit Lagos 
                    <div className="iconAnim"> 
                        <ArrowUpRight className='arr first'/> 
                        <ArrowUpRight className='arr last'/> 
                    </div> 
                </a>

                <div className="fixUp uppercase flex">
                    
                    <p>Emergency Numbers : </p>

                    <div className="numbers flex">

                        <a href="tel:08056250710"> 08056250710 </a>
                        <p>|</p>
                        <a href="tel:08033482380">08033482380</a>

                    </div>

                </div>
            
            </div>

        </Container>

    </div>

  )

}
