import React, {useEffect} from 'react'

import img1 from './image/img1.jpg'
import img2 from './image/img2.jpg'
import img3 from './image/img3.jpg'
import img4 from './image/img4.jpg'

import '../../styles/components/homepage/seth_slider.scss'

export default function HomepageSlider() {

    useEffect(() => {
        
        //step 1: get DOM
        let nextDom = document.getElementById('next');
        let prevDom = document.getElementById('prev');

        let carouselDom = document.querySelector('.carousel');
        let SliderDom = carouselDom.querySelector('.carousel .list');
        let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
        let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        let timeRunning = 3000;
        let timeAutoNext = 7000;

        nextDom.onclick = function(){

            showSlider('next');   
             
        }

        prevDom.onclick = function(){
            showSlider('prev');    
        }

        let runTimeOut;
        let runNextAuto = setTimeout(() => {

            nextDom.click();

        }, timeAutoNext)

        function showSlider(type){
            let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
            let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
            
            if(type === 'next'){
                SliderDom.appendChild(SliderItemsDom[0]);
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                carouselDom.classList.add('next');
            }else{
                SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
                thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                carouselDom.classList.add('prev');
            }
            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carouselDom.classList.remove('next');
                carouselDom.classList.remove('prev');
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                nextDom.click();
            }, timeAutoNext)
        }
        
    }, []);

  return (
   
    <div className="carousel">

        {/* list item */}

        <div className="list">

            <div className="item">

                <img src={img1} />

                <div className="overlay"></div>

                <div className="content">

                    <div className="author">THIS IS LAGOS</div>
                    <div className="title">The best place to find government services and information.</div>
                    <div className="des">

                        {/* Description */}
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt rerum voluptatem sunt illum voluptatum dolores sit, beatae saepe quaerat labore eum mollitia! Itaque velit ipsum exercitationem dolorum nisi, molestiae, doloribus.

                    </div>

                    <div className="buttons">

                        <button>Explore Lagos</button>
                        <button>Search Services</button>

                    </div>

                </div>

            </div>

            <div className="item">

                <img src={img2} />

                <div className="overlay"></div>

                <div className="content">

                    <div className="author">OUNJE LAGOS</div>
                    <div className="title"> Easter : Lagos to open ‘Ounje Eko’ Sunday market on Friday </div>
                    <div className="des">

                        {/* Description */}
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt rerum voluptatem sunt illum voluptatum dolores sit, beatae saepe quaerat labore eum mollitia! Itaque velit ipsum exercitationem dolorum nisi, molestiae, doloribus.

                    </div>

                    <div className="buttons">

                        <button>Explore Lagos</button>
                        <button>Search Services</button>

                    </div>

                </div>

            </div>

            <div className="item">

                <img src={img3} />

                <div className="overlay"></div>

                <div className="content">

                    <div className="author">THIS IS LAGOS</div>
                    <div className="title">The best place to find government services and information.</div>
                    <div className="des">

                        {/* Description */}
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt rerum voluptatem sunt illum voluptatum dolores sit, beatae saepe quaerat labore eum mollitia! Itaque velit ipsum exercitationem dolorum nisi, molestiae, doloribus.

                    </div>

                    <div className="buttons">

                        <button>Explore Lagos</button>
                        <button>Search Services</button>

                    </div>

                </div>

            </div>

            <div className="item">

                <img src={img4} />

                <div className="overlay"></div>

                <div className="content">

                    <div className="author">THIS IS LAGOS</div>
                    <div className="title">The best place to find government services and information.</div>
                    <div className="des">

                        {/* Description */}
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt rerum voluptatem sunt illum voluptatum dolores sit, beatae saepe quaerat labore eum mollitia! Itaque velit ipsum exercitationem dolorum nisi, molestiae, doloribus.

                    </div>

                    <div className="buttons">

                        <button>Explore Lagos</button>
                        <button>Search Services</button>

                    </div>

                </div>

            </div>

        </div>



        {/* list thumnail */}
        <div className="thumbnail">

            <div className="item">

                <img src={img1} />

                <div className="content">

                    <div className="title">Name Slider</div>
                    <div className="description">Description</div>

                </div>

            </div>

            <div className="item">
            <img src={img2} />
            <div className="content">
                <div className="title">Name Slider</div>
                <div className="description">Description</div>
            </div>
            </div>
            <div className="item">
            <img src={img3} />
            <div className="content">
                <div className="title">Name Slider</div>
                <div className="description">Description</div>
            </div>
            </div>
            <div className="item">
            <img src={img4} />
            <div className="content">
                <div className="title">Name Slider</div>
                <div className="description">Description</div>
            </div>
            </div>
        </div>
        
        {/* next prev */}
        <div className="arrows">
            <button id="prev">&lt;</button>
            <button id="next">&gt;</button>
        </div>

        {/* time running */}
        <div className="time"></div>

</div>


  )


}
