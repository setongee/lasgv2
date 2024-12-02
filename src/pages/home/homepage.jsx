import React, {useState, useEffect} from 'react'
import QuickCheck from './quickCheck/QuickCheck'
import Services from '../../components/services/services'
import Photo_slider_component from '../../components/photo_slider/Photo_slider_component'
import Quick from '../../components/quickIn/quick'
import NewsCarrier from './newsZone/NewsCarrier'
import News from './news/News'
import Stat from '../../components/stat/stat'
import NewQuick from '../../components/quickIn/newQuick'

const Homepage = () => {

  const [isActive, setisActive] = useState(false);

  return (

    <div className="home">

    <Photo_slider_component/>
    <Stat/>
    <NewQuick/>
    <QuickCheck/>
    <Services bgColor = "#f0f7f6" location = 'home' data_limit={100} />
    <NewsCarrier/>

  </div>

  )

}

export default Homepage;
