import React, { useState , useEffect} from 'react'
import './view_news.scss'
import Container from '../../components/container/container'
import { ArrowArchery, ArrowDownLeftCircle, ArrowLeft, ArrowLeftCircle } from 'iconoir-react'
import { news } from '../../api/data/news'
import { useNavigate, useParams } from 'react-router'
import {motion} from 'framer-motion'
import { getSingleNews } from '../../api/read/news.req'
import { useQuery } from '@tanstack/react-query'

export default function News_view() {

    const params = useParams();
    const id = params.id;

    const navigate = useNavigate();

    // const [data, setData] = useState({});
    // const [sub_data, setSub_data] = useState([])
    

    const { isPending, error, data } = useQuery({

        queryKey: ["view_news", {id}],
        queryFn: () => getSingleNews(id)

    })

    useEffect(() => {
        
        if(data) {
            const tc = document.getElementById("text");
            console.log(data?.data.content)
            tc.innerHTML = data?.data.content
        }
        
    }, [data]);
    

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


  return (
    
    <div className="view_news">

        <Container>

            <motion.div whileHover={{scale : 1.05}} whileTap={{scale : 0.9}} className="back_to_news"> <a href='/news/trending'> < ArrowLeft /> <span>Back to news</span> </a> </motion.div>

            <div className="news_container">

                <div className="current_news">

                    <div className="current_news_image">
                        <img src={data?.data.photo} alt="" />
                    </div> 

                    <div className="current_news_title">
                        {data?.data.title}
                    </div>                   

                    <div className="current_news_body" id='text'>
                        {/* <LASGEditor value = {data.content} readOnly = {true} submittableText = {"hellooooo"} /> */}
                    </div>

                </div>

                {/* <div className="sub_news_container">

                    {
                        sub_data.length ? sub_data.map( (res, index) => (

                            <a className="subs_news" href={`/news/trending/view/${res._id}`}>

                                <div className="sub__image"><img src = {res.photo} alt="" /></div>
                                <div className="sub__title"> {res.title} </div>

                            </a>

                        ) ) : null
                    }

                </div> */}

            </div>

        </Container>

    </div>

  )
}
