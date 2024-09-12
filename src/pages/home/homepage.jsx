import React, {useState} from 'react'
import HomepageSlider from './HomepageSlider'
import QuickCheck from './quickCheck/QuickCheck'
import Container from '../../components/container/container'
import RecentlySearched from './recentlySearched/RecentlySearched'
import News from './news/News'
import Services from '../../components/services/services'
import Footer from '../../components/footer/footer'
import Resources from './resources/Resources'
import { Search } from 'iconoir-react'
import Photo_slider_component from '../../components/photo_slider/Photo_slider_component'
import Quick from '../../components/quickIn/quick'
import Themes from './themes__agenda/Themes'
import NewsCarrier from './newsZone/NewsCarrier'
import Subscribe from '../../components/subscriber/subscribe'
import transitions from '../../utils/transitions'
import Transitions from '../../utils/transitions'
import { motion } from 'framer-motion'

const Homepage = () => {

  const [isActive, setisActive] = useState(false);
  // console.log(transitions())

  return (


    <Transitions>

      <div className="home">

        <Photo_slider_component/>
        <Quick/>
        <QuickCheck/>
        <Services bgColor = "#fcfff5" location = 'home' data_limit={11} />
        <NewsCarrier/>

      </div>

    </Transitions>

  )

}

export default Homepage;
