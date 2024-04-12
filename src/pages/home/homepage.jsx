import React from 'react'
import HomepageSlider from './HomepageSlider'
import QuickCheck from '../quickCheck/QuickCheck'
import Container from '../../components/container/container'

export default function Homepage() {

  return (

    <div className="home">

      <HomepageSlider />
      
      <Container>

          <QuickCheck/>
          <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, fuga!</h1>

      </Container>

    </div>

  )

}
