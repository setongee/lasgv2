import React, {useEffect} from 'react'
import Container from '../../components/container/container'
import './news.scss'
import { ArrowLeft, ArrowRight, ShareAndroid, ShareIos, Timer } from 'iconoir-react'
import NewsCard from './newsCard'
import { useLocation, useNavigate, useNavigation, useParams } from 'react-router'
import NewsComp from './NewsComp'
import { news } from '../../api/data/news'

export default function News_Events() {

    const news_tag = [ "trending", "benefits", "commerce", "business", "entertainment", "sports", "housing", "emergency", "technology", "education", "government", "tourism", "advertisement", "jobs", "health" ]

    let params = useParams();
    let navigate = useNavigate();

    useEffect(() => {

    }, [params]);

  return (
      
    <div className="news_body">

        <div className="news">

            <div className="news_tag"> 

                {
                    news_tag.length ? news_tag.map( (res, index) => {

                        return <div className={`news_tagging ${res === params.tag ? "active" : ""} `} onClick = { () => navigate(`/news/${res}`) } > {res} </div>

                    }) : null
                }
            
            </div>

            <Container>

                {/* news body */}

                <div className="news__show__body">

                    <NewsComp />    

                </div>

            </Container>

        </div>  

    </div>

  )


}
