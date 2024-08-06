import React, { useState , useEffect} from 'react'
import './view_news.scss'
import Container from '../../components/container/container'
import { ArrowArchery, ArrowDownLeftCircle, ArrowLeft, ArrowLeftCircle } from 'iconoir-react'
import { news } from '../../api/data/news'
import { useNavigate, useParams } from 'react-router'
import {motion} from 'framer-motion'

export default function News_view() {

    const params = useParams();
    const id = params.id;

    const navigate = useNavigate();

    const [data, setData] = useState({});
    const [sub_data, setSub_data] = useState([])

    useEffect(() => {
        
        const info = document.getElementById('text');
        info.innerHTML = news[id].text

        setData(news[id]);

        const subs = Object.entries(news).filter( (item) => item[0] !== id );
        
        setSub_data(subs)

    }, [id]);

  return (
    
    <div className="view_news">

        <Container>

            <motion.div whileHover={{scale : 1.05}} whileTap={{scale : 0.9}} className="back_to_news"> <a href='/news/trending'> < ArrowLeft /> <span>Back to news</span> </a> </motion.div>

            <div className="news_container">

                <div className="current_news">

                    <div className="current_news_image">
                        <img src={data.img} alt="" />
                    </div> 

                    <div className="current_news_title">
                        {data.title}
                    </div>                   

                    <div className="current_news_body" id='text'></div>

                </div>

                {/* <div className="sub_news_container">

                    {
                        sub_data.length ? sub_data.map( (res, index) => (

                            <a className="subs_news" href={`/news/trending/view/${res[0]}`}>

                                <div className="sub__image"><img src = {res[1].img} alt="" /></div>
                                <div className="sub__title"> {res[1].title} </div>

                            </a>

                        ) ) : null
                    }

                </div> */}


            </div>

        </Container>

    </div>

  )
}
