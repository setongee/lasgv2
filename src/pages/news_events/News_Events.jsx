import React from 'react'
import Container from '../../components/container/container'
import './news.scss'
import { ArrowLeft, ArrowRight, ShareAndroid, ShareIos, Timer } from 'iconoir-react'
import NewsCard from './newsCard'
import { useLocation, useParams } from 'react-router'

export default function News_Events() {

    const news_tag = [ "trending", "all", "benefits", "commerce", "business", "entertainment", "sports", "housing", "emergency", "technology", "education", "government", "tourism", "advertisement", "job oppurtunities", "health" ]

    let params = useParams();


  return (
      
    <div className="news_body">

        <div className="news">

            <div className="news_tag"> 

                {
                    news_tag.length ? news_tag.map( (res, index) => {

                        return <div className={`news_tagging ${res === params.tag ? "active" : ""} `}> {res} </div>

                    }) : null
                }
            
            </div>

            <Container>

                <div className="top_top_heading">  Recommended for you </div>

                <div className="landingNews">

                    <div className="mainHighlight">

                        <div className="overlay"></div>

                        <div className="highlight_image">

                            <img src="https://pbs.twimg.com/media/GRl5noiaUAAf4NT?format=jpg&name=large" alt="" />

                        </div>

                        <div className="highlight_content">

                            

                            <div className="highlight_title">
                                
                                Inauguration of the two-storey Paediatric Sickle Cell Centre located in the Lagos State University Teaching Hospital (LASUTH), Ikeja.

                            </div>

                            <div className="info">
                                <div className="highlight_theme">Environment</div>
                                <div className="timeToRead"> <Timer/> 7 Mins Read - </div>
                            </div>

                        </div>

                    </div>

                    

                </div>

                {/* news body */}

                <div className="news_card_body">

                    <div className="section_header">Trending News</div>

                    <div className="news_results_section">

                        <div className="news_card">

                            <div className="news_image">
                                <img src="https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/Sanwo-olu.gif" alt="" />
                            </div>

                            <div className="news_body_content">

                                <div className="news_topic"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, et. </div>

                                <div className="news_details">

                                    <div className="details_themes"> Technology </div>
                                    <div className="details_readTime"> <Timer/> 7 Mins Read - </div>

                                </div>

                            </div>

                        </div>

                        <div className="news_card">

                            <div className="news_image">
                                <img src="https://ssg.lagosstate.gov.ng/wp-content/uploads/sites/131/2023/06/eb672f5e-edf2-4438-a926-d2fb55db9dab.jpeg" alt="" />
                            </div>

                            <div className="news_body_content">

                                <div className="news_topic"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, et. </div>

                                <div className="news_details">

                                    <div className="details_themes"> Government </div>
                                    <div className="details_readTime"> <Timer/> 7 Mins Read - </div>

                                </div>

                            </div>

                        </div>

                        <div className="news_card">

                            <div className="news_image">
                                <img src="https://i0.wp.com/lagosstate.gov.ng/wp-content/uploads/2024/06/a8ef4abb-6eb7-4b95-b332-923b3e9a9255.jpeg?w=1024&ssl=1" alt="" />
                            </div>

                            <div className="news_body_content">

                                <div className="news_topic"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, et. </div>

                                <div className="news_details">

                                    <div className="details_themes"> Events </div>
                                    <div className="details_readTime"> <Timer/> 7 Mins Read - </div>

                                </div>

                            </div>

                        </div>

                        <div className="news_card">

                            <div className="news_image">
                                <img src="https://i0.wp.com/lagosstate.gov.ng/wp-content/uploads/2024/06/4a31b1ca-2907-4510-aacd-f8791d944d5a.jpeg?w=1080&ssl=1" alt="" />
                            </div>

                            <div className="news_body_content">

                                <div className="news_topic"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, et. </div>

                                <div className="news_details">

                                    <div className="details_themes"> Sports </div>
                                    <div className="details_readTime"> <Timer/> 7 Mins Read - </div>

                                </div>

                            </div>

                        </div>

                        <div className="news_card">

                            <div className="news_image">
                                <img src="https://i0.wp.com/lagosstate.gov.ng/wp-content/uploads/2024/05/c2f6d969-5d22-4ef8-860a-da04147316ea.jpeg?w=994&ssl=1" alt="" />
                            </div>

                            <div className="news_body_content">

                                <div className="news_topic"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, et. </div>

                                <div className="news_details">

                                    <div className="details_themes"> Events </div>
                                    <div className="details_readTime"> <Timer/> 7 Mins Read - </div>

                                </div>

                            </div>

                        </div>

                        <div className="news_card">

                            <div className="news_image">
                                <img src="https://govima.com/news/wp-content/uploads/2023/12/Governor-of-Lagos-State-Mr.-Babajide-Sanwo-Olu-addressing-a-side-meeting-at-the-ongoing-28th-session-of-Conference-of-Parties-COP28-768x512-1.jpg" alt="" />
                            </div>

                            <div className="news_body_content">

                                <div className="news_topic"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, et. </div>

                                <div className="news_details">

                                    <div className="details_themes"> Culture & Tourism </div>
                                    <div className="details_readTime"> <Timer/> 7 Mins Read - </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                

            </Container>

        </div>

        

    </div>

  )


}
