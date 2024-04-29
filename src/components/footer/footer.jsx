import React from 'react'
import footerImg from '../../assets/photoAssets/footer_area.svg'
import ekobridge from '../../assets/photoAssets/LASGIDI.svg'
import Container from '../container/container'
import './footer.scss'
import { ArrowUpRight, Facebook, FacebookTag, Instagram, RssFeed, RssFeedTag, Search, X } from 'iconoir-react'

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
                <h1> Your <span> <Search width={60} strokeWidth={1.8} color='#32C76D' /> </span> go-to government resource & service.</h1>

              </div>

              <div className="linksPart flex">

                  <div className="linkHolder flex flex_col">

                      <div className="linkHeader thick_500">Government</div>

                      <div className="links a-dark flex flex_col">

                          <a href="#" className="link"> Elected Officials </a>
                          <a href="#" className="link"> History of Lagos State </a>
                          <a href="#" className="link"> Explore Lagos Agencies </a>
                          <a href="#" className="link"> Lagos Local Information </a>
                          <a href="#" className="link"> State Statistics </a>

                      </div>

                  </div>


                  <div className="linkHolder flex flex_col">

                      <div className="linkHeader thick_500">Quick Services</div>

                      <div className="links a-dark flex flex_col">

                          <a href="#" className="link"> Job Opportunities in Lagos </a>
                          <a href="#" className="link"> Housing & Lands </a>
                          <a href="#" className="link"> Tourism & Travels </a>
                          <a href="#" className="link"> Payments & Levies </a>
                          <a href="#" className="link"> Vehicle Services </a>

                      </div>

                  </div>


                  <div className="linkHolder flex flex_col">

                      <div className="linkHeader thick_500">Safety & Emergencies</div>

                      <div className="links a-dark flex flex_col">

                          <a href="#" className="link"> Emergency Contacts </a>
                          <a href="#" className="link"> Hospitals Near Me </a>
                          <a href="#" className="link"> Get an Ambulance </a>
                          <a href="#" className="link"> Police Stations Near Me </a>

                      </div>

                  </div>
                  

                  <div className="linkHolder flex flex_col">

                      <div className="linkHeader thick_500">Safety & Emergencies</div>

                      <div className="links a-dark flex flex_col">

                          <a href="#" className="link"> Emergency Contacts </a>
                          <a href="#" className="link"> Hospitals Near Me </a>
                          <a href="#" className="link"> Get an Ambulance </a>
                          <a href="#" className="link"> Police Stations Near Me </a>

                      </div>

                  </div>

              </div>

              <div className="linksTabs flex thick">

                <a href ='#' className="tab flex"> 
                  
                Fun spots in lagos 

                  <div className="arowBon"> 

                      <div className="arrowMin arrow1"><ArrowUpRight color = '#FDCF6E' /> </div>
                      <div className="arrowMin arrow2"><ArrowUpRight color='#42FF01'/> </div>
                   
                  </div> 
                
                </a>

                <a href ='#' className="tab flex"> 
                  
                pay traffic penalty fees 

                  <div className="arowBon"> 

                      <div className="arrowMin arrow1"><ArrowUpRight color = '#FDCF6E' /> </div>
                      <div className="arrowMin arrow2"><ArrowUpRight color='#42FF01'/> </div>
                   
                  </div> 
                
                </a>

                <a href ='#' className="tab flex"> 
                  
                Govt. hospitals near ME 

                  <div className="arowBon"> 

                      <div className="arrowMin arrow1"><ArrowUpRight color = '#FDCF6E' /> </div>
                      <div className="arrowMin arrow2"><ArrowUpRight color='#42FF01'/> </div>
                   
                  </div> 
                
                </a>

                <a href ='#' className="tab flex"> 
                  
                Advertise in Lagos 

                  <div className="arowBon"> 

                      <div className="arrowMin arrow1"><ArrowUpRight color = '#FDCF6E' /> </div>
                      <div className="arrowMin arrow2"><ArrowUpRight color='#42FF01'/> </div>
                   
                  </div> 
                
                </a>

              </div>

              <div className="footest_footer">

                  <div className="socialMedia flex flex_justify_space_between flex_align_center">

                    <div className="txt thick uppercase"> connect with us on our socials </div>

                    <div className="socialsIcon flex">

                      <div className="icon"><Instagram width={20} strokeWidth={1.6}/></div> 
                      <div className="icon"><X width={20} strokeWidth={1.6}/></div>
                      <div className="icon"><FacebookTag width={20} strokeWidth={1.6}/></div>  
                      <div className="icon"><RssFeedTag width={20} strokeWidth={1.6}/></div>

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

        <div className="ekoBridge">

          <img src={ekobridge} alt="LASG" />

        </div>

    </div>

  )
}
