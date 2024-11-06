import React, { useState, useEffect } from 'react'
import { Timer } from 'iconoir-react'
import { news } from '../../api/data/news'
import { useParams } from 'react-router';
import none from '../../assets/icons/random/no-file.png'
import { formatDate } from 'date-fns';

export default function NewsComp({ data }) {

    const [news, setNews] = useState(data);
    const [filteredResults, setFilteredResults] = useState([]);

    // let q = 

useEffect(() => {
    
    const exportedData = data?.filter((item, idx) => idx > 0 );
    setFilteredResults(exportedData);

}, [data]);

    
  return (

    <div className="fetchedNews">
        {
            data?.length ? (

                <div>

                    <a className="landingNews" href={`/news/trending/view/${data[0]._id}`} >

                        <div className="mainHighlight">

                            <div className="overlay"></div>

                            <div className="highlight_image">

                                <img src= {data[0].photo} alt="" />

                            </div>

                            <div className="highlight_content">

                                <div className="highlight_title">
                                    
                                    {data[0].title}

                                </div>

                                <div className="info">
                                    <div className="highlight_theme">{ data[0].categories[0] }</div>
                                    {/* <div className="timeToRead"> <Timer/> { fetchNews[0][1].time } Mins Read - </div> */}
                                </div>

                            </div>

                        </div> 

                    </a>

                    <div className="news_card_body main">

                        <div className="news_results_section">

                            {
                                filteredResults?.length ? (

                                    filteredResults.map( (res, index) => (

                                        <a className="news_card" key = {index} href={`/news/trending/view/${res._id}`} >
    
                                            <div className="news_image">
                                                <img src={res.photo} />
                                            </div>
    
                                            <div className="news_body_content">
    
                                                <div className="news_topic"> {res.title} </div>
    
                                                <div className="news_details">
    
                                                    <div className="details_themes"> {res.categories[0]} </div>
                                                    {/* <div className="details_readTime"> <Timer/> {formatDate(res.data)} - </div> */}
    
                                                </div>
    
                                            </div>
    
                                        </a>
    
                                    ))

                                ) : null
                            }

                        </div>

                    </div>

                </div>

            ) : null
        }
    </div>

  )

}
