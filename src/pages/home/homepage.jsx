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

export default function Homepage() {

  const [isActive, setisActive] = useState(false);

  return (

    <div className="home">

      <Photo_slider_component/>

      <QuickCheck/>

      <Quick/>

      {/* <Themes/> */}

      <News/>

      <Services bgColor = "#FFF8DE" location = 'home' data_limit={70} />

    </div>

  )

}
