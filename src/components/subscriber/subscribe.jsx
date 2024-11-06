import React, { useState } from 'react'
import './subs.scss'
import { ArrowUpRight } from 'iconoir-react'
import pattern from '../../assets/hd/patthern.png'
import Container from '../container/container'
import SubscribeModal from './subscribeModal'

export default function Subscribe() {

  const [ subscription, setSubscription ] = useState(false);

  const handleCloseSubscription = () => {

    setSubscription(false);
    document.body.style.overflowY = 'visible'

  }

  return (

    <div className="subs">

        {
          subscription ? <SubscribeModal closeSubscribe = {handleCloseSubscription} /> : null
        }
        
        <Container>

            <div className="subscribe">

                <div className="subscribe__card">

                    <div className="path"> <img src = {pattern} alt="patternnns" /> </div>


                    <div className="main"> Get notified with latest news, events and topics that interests you!</div>
                    <div className="main__sub"> Never miss an update, stay up-to-date with information and topics that are tailor fit for your interests.  </div>
                    <div className="subscribe__action__button" onClick={ () => setSubscription(true) }> Setup your interests <ArrowUpRight width={18} strokeWidth={2} /> </div>

                </div>

            </div>

        </Container>
        
    </div>

  )
}
