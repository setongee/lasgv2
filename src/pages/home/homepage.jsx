import React, {useState, useEffect} from 'react'
import QuickCheck from './quickCheck/QuickCheck'
import Services from '../../components/services/services'
import Photo_slider_component from '../../components/photo_slider/Photo_slider_component'
import Quick from '../../components/quickIn/quick'
import NewsCarrier from './newsZone/NewsCarrier'

const Homepage = () => {

  const [isActive, setisActive] = useState(false);

  return (

    <div className="home">

    <Photo_slider_component/>
    <Quick/>
    <QuickCheck/>
    <Services bgColor = "#fcfff5" location = 'home' data_limit={11} />
    {/* <NewsCarrier/> */}

  </div>

  )

}

export default Homepage;
