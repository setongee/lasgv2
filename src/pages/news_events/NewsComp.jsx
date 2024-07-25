import { Timer } from 'iconoir-react'
import React from 'react'
import { news } from '../../api/data/news'

export default function NewsComp() {
    
  return (

    <div className="news_card_body main">

        <div className="news_results_section">

            {
                Object.entries(news).filter((item, idx) => idx !== 0 ).map( (res, index) => (

                    <a className="news_card" key = {res[0]} href={`/news/trending/view/${res[0]}`} >

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

  )

}
