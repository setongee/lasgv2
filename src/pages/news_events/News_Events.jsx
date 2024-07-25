import React from 'react'
import Container from '../../components/container/container'
import './news.scss'
import { ArrowLeft, ArrowRight, ShareAndroid, ShareIos, Timer } from 'iconoir-react'
import NewsCard from './newsCard'
import { useLocation, useParams } from 'react-router'
import NewsComp from './NewsComp'
import { news } from '../../api/data/news'

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

                <a className="landingNews" href={`/news/trending/view/${Object.keys(news)[0]}`} >

                    <div className="mainHighlight">

                        <div className="overlay"></div>

                        <div className="highlight_image">

                            <img src= {news[Object.keys(news)[0]].img} alt="" />

                        </div>

                        <div className="highlight_content">

                            

                            <div className="highlight_title">
                                
                                {news[Object.keys(news)[0]].title}

                            </div>

                            <div className="info">
                                <div className="highlight_theme">{news[Object.keys(news)[0]].tag}</div>
                                <div className="timeToRead"> <Timer/> {news[Object.keys(news)[0]].time} Mins Read - </div>
                            </div>

                        </div>

                    </div>

                    

                </a>

                {/* news body */}

                <div className="news__show__body">

                    <NewsComp />    

                </div>

            </Container>

        </div>

        

    </div>

  )


}
