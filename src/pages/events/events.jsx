import React from 'react'
import './events.scss'
import Container from '../../components/container/container'
import calender from '../../assets/icons/random/calendar.png'
import aot from  '../../assets/events/aot6.0.png'

export default function Events() {

  return (

    <div className="events">

        <Container>

            <div className="events__body">

                <div className="events__body__title"> Upcoming Events </div>
                
                <div className="events">

                    <div className="event__item">
                        <img src={aot} alt="aot 6.0" />
                    </div>

                    {/* <div className="empty__events">

                        Oops! sorry there isn't any upcoming events

                    </div> */}
                    
                </div>

            </div>

        </Container>

    </div>

  )

}
