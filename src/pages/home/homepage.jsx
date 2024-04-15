import React from 'react'
import HomepageSlider from './HomepageSlider'
import QuickCheck from './quickCheck/QuickCheck'
import Container from '../../components/container/container'
import RecentlySearched from './recentlySearched/RecentlySearched'
import News from './news/News'

export default function Homepage() {

  return (

    <div className="home">

      <HomepageSlider />
      
      <Container>

          <QuickCheck/>
          <RecentlySearched />

      </Container>


      <News/>

    </div>

  )

}
