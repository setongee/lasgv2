import React, { useState, useEffect } from 'react'
import { Timer } from 'iconoir-react'
import { news } from '../../api/data/news'
import { useParams } from 'react-router';
import none from '../../assets/icons/random/no-file.png'

export default function NewsComp() {

const [fetchNews, setFetchedNews] = useState(Object.entries(news));
let params = useParams().tag;

useEffect(() => {
    
    if (params === 'trending') {

        setFetchedNews(Object.entries(news));

    } else {

        const refetchedNews = Object.entries(news).filter(item => item[1].tag.toLowerCase() === params );

        setFetchedNews(refetchedNews);

    }

}, [params]);

    
  return (

    <div className="fetchedNews">
        {
            fetchNews.length ? (

                <div>

                    <a className="landingNews" href={`/news/trending/view/${fetchNews[0][0]}`} >

                        <div className="mainHighlight">

                            <div className="overlay"></div>

                            <div className="highlight_image">

                                <img src= {fetchNews[0][1].img} alt="" />

                            </div>

                            <div className="highlight_content">

                                <div className="highlight_title">
                                    
                                    {fetchNews[0][1].title}

                                </div>

                                <div className="info">
                                    <div className="highlight_theme">{ fetchNews[0][1].tag }</div>
                                    <div className="timeToRead"> <Timer/> { fetchNews[0][1].time } Mins Read - </div>
                                </div>

                            </div>

                        </div> 

                    </a>

                    <div className="news_card_body main">

                        <div className="news_results_section">

                            {
                                fetchNews.length > 1 ? (

                                    fetchNews.filter((item, idx) => idx !== 0 ).map( (res, index) => (

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

                                ) : <div className="noNewNews">Opps! sorry, no other <span>{params}</span> news found </div>
                            }

                        </div>

                    </div>

                </div>

            ) : <div className="noNews"> <div>Oops! sorry, no news on <span>{params}</span> found </div> </div>
        }
    </div>

  )

}
