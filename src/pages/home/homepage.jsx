import React from 'react'
import HomepageSlider from './HomepageSlider'
import QuickCheck from './quickCheck/QuickCheck'
import Container from '../../components/container/container'
import RecentlySearched from './recentlySearched/RecentlySearched'
import News from './news/News'
import Services from '../../components/services/services'
import Footer from '../../components/footer/footer'
import Resources from './resources/Resources'

export default function Homepage() {

  return (

    <div className="home">

      <HomepageSlider />
      
      <Container>

          <QuickCheck/>
          <RecentlySearched />

      </Container>

      <News/>

      <Services bgColor = "#FFF8DE" />

      <Resources/>

      <Footer/>

    </div>

  )

}
