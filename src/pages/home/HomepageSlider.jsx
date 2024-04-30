import React, {useState, useEffect} from 'react'
import './homeslider.scss'
import Container from '../../components/container/container'
import img1 from './image/img1.jpg'
import { ArrowLeft, ArrowRight } from 'iconoir-react'
import { motion, AnimatePresence } from 'framer-motion'
import { SplitText } from './SplitText'

export default function HomepageSlider() {

let [visible, setVisible] = useState(true)

const [news, setNews] = useState(0)
const [muted, setMuted] = useState(false);
const [timemap, setTimeMap] = useState(5);

const newsData = [

    {
        main : "The best online platform to find all Lagos State Government Services, Topics & Information.",
        sub : "Lorem ipsum dolor sit amet, consectetur elit adfh, Curabitur venenatis velit eget massa volutpat, at rhoncus turpis consequat.",
        date : "Tues. 06 April, 2024",
        // photo : "https://lagostoday.com.ng/wp-content/uploads/2024/03/IMG_8916.jpeg",
        photo : 'https://images.unsplash.com/photo-1589797688224-5fc840fa09e5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        main : "Gov. Sanwo-Olu meets London - Lagos solo driver, Ms. Pelumi Nubi, at the Lagos house, marina, on Monday, 8th April 2024.",
        sub : "Lorem ipsum dolor sit amet, consectetur elit adfh, Curabitur venenatis velit eget massa volutpat, at rhoncus turpis consequat.",
        date : "Tues. 06 April, 2024",
        photo : "https://pbs.twimg.com/media/GKpzMPhWsAAP1zB?format=jpg",
    },

    {
        main : "I met with the National Emergency Management Agency (NEMA) team led by the Director-General, Mrs. Zubaida Umar.",
        sub : "Lorem ipsum dolor sit amet, consectetur elit adfh, Curabitur venenatis velit eget massa volutpat, at rhoncus turpis consequat.",
        date : "Tues. 06 April, 2024",
        photo : "https://pbs.twimg.com/media/GK-gJQ_XUAEDeia?format=jpg&name=large",
    }

]

const nextShow = () => {

    if ( news !== (newsData.length - 1) ) {

        setNews( news + 1 );
        document.querySelector('.lineCheck').classList.remove('running');
        document.querySelector('.newsImage').classList.remove('imageZoom');
        
        setTimeout(() => {

            document.querySelector('.lineCheck').classList.add('running');
            document.querySelector('.newsImage').classList.add('imageZoom');
            
        }, 100);


    } else{
        resetSlider();
        document.querySelector('.lineCheck').classList.remove('running');
        document.querySelector('.newsImage').classList.remove('imageZoom');
        
        setTimeout(() => {

            document.querySelector('.lineCheck').classList.add('running');
            document.querySelector('.newsImage').classList.add('imageZoom');
            
        }, 100);
    }

}

const prevShow = () => {

    if ( news !== 0 ) {

        setNews(news-1);
        document.querySelector('.lineCheck').classList.remove('running');
        setMuted(false);
        
        setTimeout(() => {

            document.querySelector('.lineCheck').classList.add('running');
            
        }, 100);

    } else {
        setNews(newsData.length - 1)
        document.querySelector('.lineCheck').classList.remove('running');
        setMuted(false);
        
        setTimeout(() => {

            document.querySelector('.lineCheck').classList.add('running');
            
        }, 100);
    }

}

const resetSlider = () => {

    setNews(0);

}

const soundControl = e => {

    setMuted(!muted)

    const videoPlaying = document.getElementById('videoControl');
    videoPlaying.muted = muted;

}


useEffect(() => {

    if(newsData[news].type !== 'video') {   

        setTimeMap(10);

        const interval = setInterval(() => {

            nextShow();
            
        }, 10000);
        
        return () => clearInterval(interval);

    } else {

        const videoPlaying = document.getElementById('videoControl');   
        videoPlaying.onloadedmetadata = function() {

            const duration = Math.round(this.duration);
            setTimeMap(duration);

          };
    }
   
}, [news]);

  return (
   
   <div className="homeSlider">

        <div className="contents">

            <Container>

                <div className="coreItem">

                    <div className="placeHolder">

                        <div className="topTag thick uppercase"> This is Lagos </div>

                        <div className="topic">

                            <AnimatePresence>

                                {
                                    visible && (

                                        <motion.div
                                        initial={{ opacity: 1 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        >

                                            <SplitText
                                            initial={{ y: '100%' }}
                                            animate="visible"
                                            variants={{
                                            visible: i => ({
                                                y: 0,
                                                transition: {
                                                duration : 1
                                                }
                                            })
                                            }}
                                            >
                                            
                                            {newsData[news].main}

                                            </SplitText>

                                        </motion.div>
                                    )
                                }

                            </AnimatePresence>

                        </div>

                        <div className="description"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, provident, sequi optio placeat ad! Nostrum temporibus possimus quod deserunt! </div>
 
                    </div>

                    <div className="fillUp flex flex_justify_space_between flex_align_center">

                        <div className="actionBtn flex thick">

                            <div className="button button1"> Read More </div>
                            <div className="button button2"> Explore Services </div>

                        </div>

                        <div className="arrowNavigation flex">

                            <motion.div whileHover = { { x : -3 } }  whileTap = { { scale : .9 } } className="arrowNav arrow1" onClick={()=> prevShow()} > <ArrowLeft/> </motion.div>
                            <motion.div whileHover = { { x : 3 } }   whileTap = { { scale : .9 } } className="arrowNav arrow2" onClick={()=> nextShow()}> <ArrowRight/> </motion.div>

                        </div>

                    </div>


                    <div className="lineCheck" style={{animationDuration : `${timemap}s`}} ></div>

                </div>

            </Container>

            <div className="newsImage" style={{animationDuration : `${timemap}s`}}>

                <img src={newsData[news].photo} alt="" />

            </div>

        </div>

   </div>

  )

}
