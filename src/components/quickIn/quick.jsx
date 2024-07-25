import React,{useState, useEffect} from 'react'
import Container from '../container/container'
import quick from '../../assets/hd/lassra.png'
import carIn from '../../assets/hd/lagosride.png'
import feedback from '../../assets/hd/feedback.jpg'
import './quick.scss'
import { ArrowRight } from 'iconoir-react'
import { SplitText } from '../../pages/home/SplitText'

export default function Quick() {

    const image__data = {

        image1 : quick,   
        image2 : carIn,  
        image3 : feedback,     

    }

    const [image, setImage] = useState("");

    const changeIndexToCurrent = (index) => {

        setImage(`image${index}`);

    }

    const animateImages = () => {



    }

    useEffect(() => {
        
        setImage("image1");

    }, []);

  return (

   <div className="quick">

        <img src={image__data[`${image}`]} alt="quick images" />
    
        <Container>

            <div className="quick__main">

                <div className="quick__content">

                    <p> Empowering Lagosians : Streamlined Services at Your Fingertips</p>

                    <div className="subtitle">
                        Every family in Lagos has a duty to register with LASRRA to get card for each member of the family.
                    </div>

                </div>

                <div className="search__cards__body flex">

                    <a target='_blank' href='https://registration.lagosresidents.gov.ng/register/' className="search__card active top" onMouseOver={ () => changeIndexToCurrent(1) }>
                       <p> Get your LAG-ID card today.</p>
                       <div className="cta flex flex_align_center">Apply Now <div className="arrt"> <ArrowRight height={18} /></div> </div>
                    </a>

                    <a target='_blank' href='https://lagosride.com/' className="search__card" onMouseOver={ () => changeIndexToCurrent(2) } >
                       <p> Ride in style with Lagos Ride</p>
                       <div className="cta flex flex_align_center">Book a ride today <div className="arrt"> <ArrowRight height={18} /></div> </div>
                    </a>

                    <a target='_blank' href = 'https://citizensgate.lagosstate.gov.ng/' className="search__card" onMouseOver={ () => changeIndexToCurrent(3) }>
                       <p> Send feedbacks to Lagos State </p>
                       <div className="cta flex flex_align_center"> Get Started Here <div className="arrt"> <ArrowRight height={18} /></div> </div>
                    </a>

                </div>

            </div>

        </Container>

   </div>

  )
}
