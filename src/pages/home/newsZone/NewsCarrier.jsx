import React from 'react'
import './news__carrier.scss'
import NewsComp from '../../news_events/NewsComp'
import Container from '../../../components/container/container'
import { Timer } from 'iconoir-react'
import { news } from '../../../api/data/news'

export default function NewsCarrier() {
  
return (

   <div className="rent">

    <Container>

        <div className="news_card_body renty">

            <div className="notion"> Stay Informed with the latest news </div>
            <p> Read latest news and events in Lagos state </p>

            <div className="news_results_section">

                {
                    Object.entries(news).filter( (news_item, idx) => idx < 4 ).map( (res, index) => (

                        <a className="news_card" key = {res[0]} href={`/news/trending/view/${res[0]}`}  >

                            <div className="news_image">
                                <img src={res[1].img} />
                            </div>

                            <div className="news_body_content">

                                <div className="news_topic"> {res[1].title} </div>

                                <div className="news_details">

                                    <div className="details_themes"> {res[1].tag} </div>
                                    <div className="details_readTime"> <Timer/> {res[1].time} Mins Read - </div>

                                </div>

                            </div>

                        </a>

                    ))
                }

            </div>

        </div>

    </Container>

   </div>

  )

}
