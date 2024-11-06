import React, {useState, useEffect} from 'react'
import Container from '../../components/container/container'
import './news.scss'
import NewsCard from './newsCard'
import { useParams } from 'react-router'
import NewsComp from './NewsComp'
import { getAllNews } from '../../api/read/news.req'
import { useQuery } from '@tanstack/react-query'

export default function News_Events() {

    const [newsdata, setnewsdata] = useState([]);
    const [page, setPage] = useState(0);
    const [topic, setTopic] = useState("all");
    
    let params = useParams();

    const { isLoading, error, data, isFetching } = useQuery({

        queryKey: ["news", page, topic],
        queryFn: () => getAllNews(page, topic)

    })

    useEffect(() => {
        
       window.scroll(0,0);

    }, []);

    console.log({isloading : isLoading, isFetching : isFetching})


    if (error) return 'An error has occurred: ' + error.message


  return (
      
    <div className="news_body">

        <div className="news">

            {/* <div className="news_tag"> 

                {
                    news_tag.length ? news_tag.map( (res, index) => {

                        return <div className={`news_tagging ${res === params.tag ? "active" : ""} `} onClick = { () => navigate(`/news/${res}`) } > {res} </div>

                    }) : null
                }
            
            </div> */}

            <Container>

                {/* news body */}

                <div className="news__show__body">

                    <NewsComp data = {data?.data} />    

                </div>

            </Container>

        </div>  

    </div>

  )


}
