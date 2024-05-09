import React from 'react'
import Container from '../../components/container/container'
import './news.scss'
import { ArrowLeft, ArrowRight, ShareAndroid, ShareIos } from 'iconoir-react'
import NewsCard from './newsCard'

export default function News_Events() {


  return (
      
    <div className="news_body">

        <div className="news">

            <Container>

                <div className="newMain"> 

                   <div className="topHeading">

                    <div className="title"> News & Events </div>
                    <div className="short">Stay up to date with Lagos State news</div>

                   </div>

                    <div className="resultsData">

                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>

                    </div>
                
                </div>

                
                
            </Container>

        </div>

    </div>

  )


}
