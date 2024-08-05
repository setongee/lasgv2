import React from 'react'
import './events.scss'
import Container from '../../components/container/container'
import calender from '../../assets/icons/random/calendar.png'

export default function Events() {

  return (

    <div className="events">

        <Container>

            <div className="events__body">

                <div className="events__body__title"> Upcoming Events </div>
                
                <div className="events">

                    <div className="empty__events">

                        Oops! sorry there isn't any upcoming events

                    </div>
                    
                </div>

            </div>

        </Container>

    </div>

  )

}
