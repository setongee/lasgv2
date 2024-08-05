import React,{useState, useEffect} from 'react'
import footerImg from '../../assets/photoAssets/footer_area.svg'
import Container from '../container/container'
import './footer.scss'
import { ArrowUpRight, FacebookTag, Instagram, Linkedin, X, Youtube } from 'iconoir-react'
import Subscribe from '../subscriber/subscribe'

export default function Footer() {

  const [time, setTime] = useState('');

  useEffect(() => {
    
    const d = new Date();
    let hour = d.getHours();

    if ( hour >= 0  && hour < 12 ) {
      setTime('Good Morning ☀️');
    } else if ( hour >= 12 && hour < 18 ){
      setTime('Good Afternoon 🌤️');
    } else{
      setTime('Good Evening 🌙');
    }

  }, []);

  return (

    <div className="footer footer__new">

        <div className="subscribe__holder">
          <Subscribe/>
        </div>

        <Container>

            <div className="footerContent">

              <div className="topPart">

                <h1> Lagos, <span>{time.toLowerCase()}</span> </h1>

                {/* socials */}

                <div className="socialsIcon flex">

                  <a target = '_blank' href='https://www.instagram.com/lagosstategovt/?hl=en' className="icon"><Instagram width={22} strokeWidth={1.6}/></a> 
                  <a target = '_blank' href = 'https://x.com/followlasg' className="icon"><X width={22} strokeWidth={1.6}/></a>
                  <a target = '_blank' href='https://web.facebook.com/followlasg' className="icon"><FacebookTag width={22} strokeWidth={1.6}/></a>
                  <a target = '_blank' href='https://web.facebook.com/followlasg' className="icon"><Linkedin width={22} strokeWidth={1.6}/></a> 

                </div>

              </div>

              <div className="linksPart flex">

                  <div className="linkHolder flex flex_col">

                      <div className="linkHeader thick_500">Government</div>

                      <div className="links a-dark flex flex_col">

                          <a target = '_blank' href="/government/elected_officials/governor/view" className="link"> <span><ArrowUpRight/></span> About Governor </a>

                          <a target = '_blank' href="/government/elected_officials" className="link"> <span><ArrowUpRight/></span> Elected officials </a>

                          <a target = '_blank' href="/government/mdas" className="link"> <span><ArrowUpRight/></span> Explore agencies </a>

                          <a target = '_blank' href="https://lagoshouseofassembly.gov.ng/home/our-team/" className="link"> <span><ArrowUpRight/></span> Legislative officers  </a>

                          <a target = '_blank' href="https://lagosjudiciary.gov.ng/directories.html#directories" className="link"> <span><ArrowUpRight/></span> Judiciary officers </a>

                          <a target = '_blank' href="https://registration.lagosresidents.gov.ng/register/" className="link"> <span><ArrowUpRight/></span> Apply for Lag-ID </a>

                      </div>

                  </div>


                  <div className="linkHolder flex flex_col">

                      <div className="linkHeader thick_500">Quick Services</div>

                      <div className="links a-dark flex flex_col">

                          <a target = '_blank' href="/services/jobs" className="link"> <span><ArrowUpRight/></span> Work in Lagos </a>

                          <a target = '_blank' href="/services/housing" className="link"> <span><ArrowUpRight/></span> Housing and lands </a>

                          <a target = '_blank' href="/services/tourism" className="link"> <span><ArrowUpRight/></span> Tourism and travels </a>

                          <a target = '_blank' href="/services/payments" className="link"> <span><ArrowUpRight/></span> Payments and levies </a>

                          <a target = '_blank' href="/services/advertisement" className="link"> <span><ArrowUpRight/></span> Advertisement </a>

                          <a target = '_blank' href="/services/government" className="link"> <span><ArrowUpRight/></span> Government Benefits </a>

                      </div>

                  </div>


                  <div className="linkHolder flex flex_col">

                      <div className="linkHeader thick_500">Safety & Emergencies</div>

                      <div className="links a-dark flex flex_col">

                          <a target = '_blank' href="https://lagos.npf.gov.ng/home/find/division" className="link"> <span><ArrowUpRight/></span> Find police stations </a>

                          <a target = '_blank' href="https://lagos.npf.gov.ng/news/post/3" className="link"> <span><ArrowUpRight/></span> Report missing person </a>

                          <a target = '_blank' href="https://citizensgate.lagosstate.gov.ng/" className="link"><span><ArrowUpRight/></span> Make complaints </a>

                          <a target = '_blank' href="https://hei.org.ng/emergency-numbers/rrs" className="link"> <span><ArrowUpRight/></span> RRS Numbers </a>

                          <a target = '_blank' href="/services/jobs" className="link"> <span><ArrowUpRight/></span> Work in Lagos </a>

                          <a target = '_blank' href="/services/housing" className="link"> <span><ArrowUpRight/></span> Housing and lands </a>

                      </div>

                  </div>

                  <div className="linkHolder flex flex_col">

                      <div className="linkHeader thick_500">Help & support</div>

                      <div className="links a-dark flex flex_col">

                          <a target = '_blank' href="https://lagos.npf.gov.ng/home/find/division" className="link"> <span><ArrowUpRight/></span> Contact us </a>

                          <a target = '_blank' href="https://lagos.npf.gov.ng/news/post/3" className="link"> <span><ArrowUpRight/></span> Search LASG </a>

                          <a target = '_blank' href="https://citizensgate.lagosstate.gov.ng/" className="link"><span><ArrowUpRight/></span> MDA directory </a>

                          <a target = '_blank' href="https://hei.org.ng/emergency-numbers/rrs" className="link"> <span><ArrowUpRight/></span> Archives </a>

                      </div>

                  </div>

                  <div className="linkHolder flex flex_col">

                      <div className="linkHeader thick_500">Feedback</div>

                      <div className="links a-dark flex flex_col">

                          <a target = '_blank' href="https://lagos.npf.gov.ng/home/find/division" className="link"> <span><ArrowUpRight/></span> Give feedback </a>

                          <a target = '_blank' href="https://lagos.npf.gov.ng/news/post/3" className="link"> <span><ArrowUpRight/></span> Suggestions </a>

                          <a target = '_blank' href="https://citizensgate.lagosstate.gov.ng/" className="link"><span><ArrowUpRight/></span> Take our survey </a>

                      </div>

                  </div>

              </div>

              <div className="footest_footer">

                  <div className="copyright flex flex_justify_space_between">

                      <div className="txt uppercase">

                        © Copyright 2024, All Rights Reserved  |   Lagos State Government

                      </div>

                      <div className="txt uppercase col"><span>Powered by - </span> Lagos State Ministry of Innovation, Science and Technology</div>

                  </div>
                
              </div>

            </div>

            

        </Container>

    </div>

  )
}
