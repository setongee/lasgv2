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

export default function Homepage() {

  const [isActive, setisActive] = useState(false);

  return (

    <div className="home">

      <div className={`floatingBubble ${isActive ? "active" : ""}`} onClick={() => setisActive(!isActive)} >

        <div className="activeWay">
          <Search color='#fff' strokeWidth={2.5} width={20}/> 
        </div>

      </div>

      <HomepageSlider />
      
      <Container>

          <QuickCheck/>
          <RecentlySearched />

      </Container>

      <News/>

      <Services bgColor = "#095F59" />

      <Resources/>

      <Footer/>

    </div>

  )

}
