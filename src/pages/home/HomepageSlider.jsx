import React, {useState, useEffect} from 'react'
import './homeslider.scss'
import Container from '../../components/container/container'
import img1 from './image/img1.jpg'
import { ArrowLeft, ArrowRight, Search } from 'iconoir-react'
import { motion, AnimatePresence } from 'framer-motion'
import { SplitText } from './SplitText'

export default function HomepageSlider() {

let [visible, setVisible] = useState(true)

const [news, setNews] = useState(0)
const [muted, setMuted] = useState(false);
const [timemap, setTimeMap] = useState(5);


const NewsDesktop = [

    {
        main : "The best platform to find all Lagos State Government Services, Topics & Information.",
        sub : "Lorem ipsum dolor sit amet, consectetur elit adfh, Curabitur venenatis velit eget massa volutpat, at rhoncus turpis consequat.",
        date : "Tues. 06 April, 2024",
        photo : 'https://images.unsplash.com/photo-1589797688224-5fc840fa09e5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        // photo : 'https://firebasestorage.googleapis.com/v0/b/lasg-a9f5c.appspot.com/o/IMG_1282%20(2).jpg?alt=media&token=7708e0a3-5211-411b-b2c4-fbda2c88cd4c'
    },

    {
        main : "Press Conference On Lagos Tourism Nbc Trade Fair At Bagauda Kaltho Press Centre, Alausa, Ikeja.",
        sub : "Lorem ipsum dolor sit amet, consectetur elit adfh, Curabitur venenatis velit eget massa volutpat, at rhoncus turpis consequat.",
        date : "Tues. 06 April, 2024",
        photo : "https://www.securenigeria365.com/wp-content/uploads/2024/04/PIX-9474.jpg",
    },

    {
        main : "Gov. Sanwo-olu At The Presentation Of Eko Cares Initiative (An Initiative To Ease Economic Hardship On Lagosians) At The Sports...",
        sub : "Lorem ipsum dolor sit amet, consectetur elit adfh, Curabitur venenatis velit eget massa volutpat, at rhoncus turpis consequat.",
        date : "Tues. 06 April, 2024",
        photo : "https://pbs.twimg.com/media/GL8vjqvXIAAmnat.jpg",
    },

    {
        main : "Gov. Sanwo-olu, Fashola At The Lateef Jakande Leadership Academy Lagos Summit At Konga Place, Lekki.",
        sub : "Lorem ipsum dolor sit amet, consectetur elit adfh, Curabitur venenatis velit eget massa volutpat, at rhoncus turpis consequat.",
        date : "17th April 2024",
        photo : "https://pbs.twimg.com/media/GLZkwX4XcAAhWJW.jpg:large",
    }

]

const NewsMobile = [

    {
        main : "The best platform to find all Lagos State Government Services, Topics & Information.",
        sub : "Lorem ipsum dolor sit amet, consectetur elit adfh, Curabitur venenatis velit eget massa volutpat, at rhoncus turpis consequat.",
        date : "Tues. 06 April, 2024",
        photo : 'https://images.unsplash.com/photo-1589797688224-5fc840fa09e5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        // photo : 'https://firebasestorage.googleapis.com/v0/b/lasg-a9f5c.appspot.com/o/IMG_1282%20(2).jpg?alt=media&token=7708e0a3-5211-411b-b2c4-fbda2c88cd4c'
    },

    {
        main : "Press Conference On Lagos Tourism Nbc Trade Fair At Bagauda Kaltho Press Centre, Alausa, Ikeja.",
        sub : "Lorem ipsum dolor sit amet, consectetur elit adfh, Curabitur venenatis velit.",
        date : "Tues. 06 April, 2024",
        photo : "https://www.securenigeria365.com/wp-content/uploads/2024/04/PIX-9474.jpg",
    },

    {
        main : "Gov. Sanwo-olu At The Presentation Of Eko Cares Initiative (An Initiative To Ease Economic Hardship On Lagosians) At The Sports...",
        sub : "Lorem ipsum dolor sit amet, consectetur elit adfh, Curabitur venenatis velit.",
        date : "Tues. 06 April, 2024",
        photo : "https://pbs.twimg.com/media/GL8vjqvXIAAmnat.jpg",
    },

    {
        main : "Gov. Sanwo-olu, Fashola At The Lateef Jakande Leadership Academy Lagos Summit At Konga Place, Lekki.",
        sub : "Lorem ipsum dolor sit amet, consectetur elit adfh, Curabitur venenatis velit.",
        date : "17th April 2024",
        photo : "https://pbs.twimg.com/media/GLZkwX4XcAAhWJW.jpg:large",
    }

]

const [newsData, setNewsData] = useState(NewsDesktop);
const [widthTo, setWidthTo] = useState(0);

const nextShow = () => {


    if ( news !== (newsData.length - 1) ) {

        const zoom = document.querySelector('.imageZoom');

        setNews( news + 1 );
        document.querySelector('.newsPhotoshop').scrollLeft += widthTo;
        
        if (zoom !== null) {

            document.querySelector('.imageZoom').classList.remove('imageZoom');

        } else {

            const newsphoto = Array.from(document.querySelectorAll('.newsImage'));
            newsphoto[news+1].classList.add('imageZoom');

        }
        
        setTimeout(() => {

            const newsphoto = Array.from(document.querySelectorAll('.newsImage'));
            newsphoto[news+1].classList.add('imageZoom');
            
        }, 100);


    } else{
        resetSlider();
        
        setTimeout(() => {
            
        }, 100);
    }

}

const prevShow = () => {

    if ( news !== 0 ) {

        const zoom = document.querySelector('.imageZoom');

        console.log(zoom);

        setNews(news-1);

        document.querySelector('.newsPhotoshop').scrollLeft -= document.body.scrollWidth;
        
        if (zoom !== null) {

            document.querySelector('.imageZoom').classList.remove('imageZoom');

        } else {

            const newsphoto = Array.from(document.querySelectorAll('.newsImage'));
            newsphoto[news-1].classList.add('imageZoom');

        }
        
        setTimeout(() => {

            const newsphoto = Array.from(document.querySelectorAll('.newsImage'));
            newsphoto[news-1].classList.add('imageZoom');
            
        }, 100);

    } else {

        const zoom = document.querySelector('.imageZoom');

        setNews(newsData.length - 1)
        document.querySelector('.newsPhotoshop').scrollLeft += document.body.scrollWidth * newsData.length;

        if (zoom !== null) {

            document.querySelector('.imageZoom').classList.remove('imageZoom');

        } else {

            const newsphoto = Array.from(document.querySelectorAll('.newsImage'));
            newsphoto[newsData.length - 1].classList.add('imageZoom');

        }
        
        setTimeout(() => {

            const newsphoto = Array.from(document.querySelectorAll('.newsImage'));
            newsphoto[newsData.length - 1].classList.add('imageZoom');
            
        }, 100);
    }

}

const resetSlider = () => {

    setNews(0);
    document.querySelector('.newsPhotoshop').scrollTo(0,0);
   
    document.querySelector('.imageZoom').classList.remove('imageZoom');
    setTimeout(() => {

        document.querySelector('.newsImage').classList.add('imageZoom');
        
    }, 100);

}

const soundControl = e => {

    setMuted(!muted)

    const videoPlaying = document.getElementById('videoControl');
    videoPlaying.muted = muted;

}

useEffect(() => {
    
    document.querySelector('.newsImage').classList.add('imageZoom');
    
}, []);

useEffect(() => {

    
    const screen = document.body.offsetWidth;

    if (screen <= 500) {

        setNewsData(NewsMobile);
        setWidthTo(document.body.scrollWidth)

    } else{
        setNewsData(NewsDesktop);
        setWidthTo(document.body.scrollWidth);
    }

}, [document.body.offsetWidth]);

useEffect(() => {

    if(newsData[news].type !== 'video') {   

        setTimeMap(5);

        const interval = setInterval(() => {

            nextShow();
            
        }, 5000);
        
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

        <div className="mobileHome">

            <Container>

                <div className="flashNews"> <span>⚒️ 👷🏾</span>  Happy Workers Day - Stay rested! </div>

                <div className="mainText">

                    <AnimatePresence>

                        {
                            visible && (

                                <motion.div
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                >

                                    <SplitText
                                    major = "yep"
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
                                    
                                    Explore all Lagos State Services, Topics & Information. 

                                    </SplitText>

                                </motion.div>
                            )
                        }

                    </AnimatePresence>

                    
                </div>

                <p> Search services in one place</p>

                <div className="buttons">

                    <a href = '#services' className="btnPrimary"> Explore Services </a>
                    <a href = '#news' className="btnPrimary"> Latest News </a>

                </div>

            </Container>

        </div>

        <div className="contents">

            <div className="checkIn">
                
                <Container classList = "pinty">

                    <div className="coreItem">

                        <div className="placeHolder">

                            <div className="topTag thick uppercase"> {newsData[news].date} </div>

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
                                                major = {news}
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

                            <div className="description"> {newsData[news].sub} </div>
    
                        </div>

                        <div className="fillUp flex flex_justify_space_between flex_align_center">

                            <div className="actionBtn flex thick">

                                <div className="button button1"> Read More </div>
                                <a href='#services' className="button button2"> Explore Services </a>

                            </div>

                            <div className="arrowNavigation flex">

                                <motion.div whileHover = { { x : -3 } }  whileTap = { { scale : .9 } } className="arrowNav arrow1" onClick={()=> prevShow()} > <ArrowLeft strokeWidth={2} /> </motion.div>
                                <motion.div whileHover = { { x : 3 } }   whileTap = { { scale : .9 } } className="arrowNav arrow2" onClick={()=> nextShow()}> <ArrowRight strokeWidth={2} /> </motion.div>

                            </div>

                        </div>

                    </div>

                </Container>

            </div>


            <div className="newsPhotoshop">

                {
                    newsData.map((newsRes, index) => (

                        <div className="newsImage" style={{animationDuration : `${timemap}s`}}>

                            <img src={newsRes.photo} alt="" />

                        </div>   
                        
                    ))
                }
                
            </div>

            <div className="overlayImg"></div>

        </div>

   </div>

  )

}
