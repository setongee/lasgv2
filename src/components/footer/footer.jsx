import React from 'react'
import footerImg from '../../assets/photoAssets/footer_area.svg'
import ekobridge from '../../assets/photoAssets/LASGIDI.svg'
import Container from '../container/container'
import './footer.scss'

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
                <h1>Your go-to government resource & service.</h1>

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

              </div>

              <div className="linksTabs flex">

                <div className="tab"> Moving to lagos </div>
                <div className="tab"> Fun spots in lagos </div>
                <div className="tab"> pay traffic penalty fees </div>
                <div className="tab"> Govt. hospitals near ME </div>
                <div className="tab"> Advertise in Lagos </div>

              </div>

            </div>

        </Container>

        <div className="ekoBridge">

          <img src={ekobridge} alt="LASG" />

        </div>

    </div>

  )
}
