import React from 'react'
import footerImg from '../../assets/photoAssets/footer_area.svg'
import ekobridge from '../../assets/photoAssets/LASGIDI.svg'
import Container from '../container/container'
import './footer.scss'
import { ArrowUpRight, Facebook, FacebookTag, Instagram, RssFeed, RssFeedTag, Search, X } from 'iconoir-react'
import { Timeline } from 'react-twitter-widgets'

export default function Footer() {
  return (

    <div className="footer">

        <div className="picture">

            <img src={footerImg} alt="" />

        </div>

        <Container>

            <div className="footerContent">

              <div className="topPart">

                <p className='thick'>lagosstate.gov.ng -</p>
                <h1> Whats up Lagos? </h1>

              </div>

              <div className="linksPart flex">

                  <div className="linkHolder flex flex_col">

                      <div className="linkHeader thick_500">Government</div>

                      <div className="links a-dark flex flex_col">

                          <a href="/government/elected_officials" className="link"> Elected officials </a>
                          <a href="/government/mdas" className="link"> Explore agencies </a>
                          <a href="https://lagoshouseofassembly.gov.ng/home/our-team/" className="link"> Legislative officers </a>
                          <a href="https://lagosjudiciary.gov.ng/directories.html#directories" className="link"> Judiciary officers </a>

                      </div>

                  </div>


                  <div className="linkHolder flex flex_col">

                      <div className="linkHeader thick_500">Quick Services</div>

                      <div className="links a-dark flex flex_col">

                          <a href="/services/jobs" className="link"> Work in Lagos </a>
                          <a href="/services/housing" className="link"> Housing and lands </a>
                          <a href="/services/tourism" className="link"> Tourism and travels </a>
                          <a href="/services/payments" className="link"> Payments and levies </a>

                      </div>

                  </div>


                  <div className="linkHolder flex flex_col">

                      <div className="linkHeader thick_500">Safety & Emergencies</div>

                      <div className="links a-dark flex flex_col">

                          <a href="https://lagos.npf.gov.ng/home/find/division" className="link"> Find police stations </a>
                          <a href="https://lagos.npf.gov.ng/news/post/3" className="link"> Report missing person </a>
                          <a href="https://citizensgate.lagosstate.gov.ng/" className="link">Make complaints or reports </a>
                          <a href="https://hei.org.ng/emergency-numbers/rrs" className="link"> RRS Numbers </a>

                      </div>

                  </div>

                  <div className="linkHolder flex flex_col twitter__holder">

                      <Timeline
                        dataSource={{
                            sourceType: 'profile',
                            screenName: 'followlasg'
                        }}
                        options={{
                            height: '285'
                        }}
                      />

                  </div>

              </div>

              <div className="footest_footer">

                  <div className="socialMedia flex flex_justify_space_between flex_align_center">

                    <div className="txt thick uppercase"> connect with us on our socials </div>

                    <div className="socialsIcon flex">

                      <a href='https://www.instagram.com/lagosstategovt/?hl=en' className="icon"><Instagram width={20} strokeWidth={1.6}/></a> 
                      <a href = 'https://x.com/followlasg' className="icon"><X width={20} strokeWidth={1.6}/></a>
                      <a href='https://web.facebook.com/followlasg' className="icon"><FacebookTag width={20} strokeWidth={1.6}/></a> 

                    </div>

                  </div>

                  <div className="copyright flex flex_justify_space_between">

                      <div className="txt uppercase">

                        © Copyright 2024, All Rights Reserved  |   Lagos State Government

                      </div>

                      <div className="txt uppercase col thick">Powered by Lagos State Ministry of Science, Innovation and Technology</div>

                  </div>
                
              </div>

            </div>

            

        </Container>

    </div>

  )
}
