import React from 'react'
import '../../../styles/components/quickService/quickService.scss'
import { ArrowDown, ArrowUpRight, IconoirProvider } from 'iconoir-react'
import { motion } from 'framer-motion';
import Container from '../../../components/container/container';
import { SplitText } from '../SplitText';
import line from '../../../assets/icons/random/line__lasg.svg'
import housing from '../../../assets/services__illustrations/housing.svg'
import travel from '../../../assets/services__illustrations/travel.svg'
import learn from '../../../assets/services__illustrations/learn.svg'
import work from '../../../assets/services__illustrations/workinlagos.svg'
import Controls from '../../../components/control/controls';

export default function QuickCheck() {

    const handleServices = () => {

        window.scrollTo({

            top : document.querySelector('#services').getBoundingClientRect().top - document.body.getBoundingClientRect().top - 100,

        })
        
    }

  return (
    
        <div className="quickCheck" id='quickCheck'>


<div className="controlArea">
                            <Controls target = 'scrollX' />
                        </div>

                <Container>
                    
                    <div className="getStarted">

                        <div className="textString thick">

                            <div className="textChange">

                                <SplitText

                                    major = "many"
                                    initial={{ y: '100%' }}
                                    whileInView={{ y: 0,
                                    transition: { duration : 1.4 }}}   
                                >

                                Browse 200+ online services for citizens and businesses

                                </SplitText>

                            </div>

                            <div className="pasty">
                                Lagos State is committed to improving access to government services online, including taxes, licenses, permits, and more
                            </div>

                        </div>

                        {/* <div className="title"> Get started with Lagos State -  </div> */}

                        
                        <IconoirProvider
                        
                        iconProps = {

                            {
                                strokeWidth: 2,
                                width: 16,
                                height: 16,
                            }
                    
                        } 
                        
                        >

                        <div 
                        
                        className="quickAsapLinks" id='scrollX'>

                            <motion.a initial = {{opacity : 0, x : -50}} whileInView = {{opacity : 1, x:1}} transition={{delay : 0.1 }} href="/services/housing" className="linkBin">

                                <div className="content">

                                    <div className="img_quick">

                                        <img src={housing} alt="" />

                                    </div>

                                    <div className='quick__title'>

                                        <div className="main__text">
                                            Housing in Lagos <span><ArrowUpRight/></span>
                                        </div>

                                        <p>Get info on housing, permits, OPAL membership, LUC Payments etc.</p>

                                    </div>

                                    <div className="button__quick"> Go to housing </div>

                                </div>

                            </motion.a>

                            <motion.a initial = {{opacity : 0, x : -50}} whileInView = {{opacity : 1, x:1}} transition={{delay : 0.2 }} href="/services/tourism" className="linkBin">

                                <div className="content">

                                    <div className="img_quick">

                                        <img src={travel} alt="" />

                                    </div>

                                    <div className='quick__title'>

                                        <div className="main__text">
                                            Visit and Tour Lagos <span><ArrowUpRight/></span>
                                        </div>

                                        <p>book your trip, get a tour guide, how to process your visa</p>

                                    </div>

                                    <div className="button__quick"> Go to housing </div>

                                </div>

                            </motion.a>

                            <motion.a initial = {{opacity : 0, x : -50}} whileInView = {{opacity : 1, x:1}} transition={{delay : 0.3 }} href="/services/jobs" className="linkBin">

                                <div className="content">

                                    <div className="img_quick">

                                        <img src={work} alt="" />

                                    </div>

                                    <div className='quick__title'>

                                        <div className="main__text">
                                            Work in Lagos <span><ArrowUpRight/></span>
                                        </div>

                                        <p>book your trip, get a tour guide, how to process your visa</p>

                                    </div>

                                    <div className="button__quick"> Go to housing </div>

                                </div>

                            </motion.a>

                            <motion.a initial = {{opacity : 0, x : -50}} whileInView = {{opacity : 1, x:1}} transition={{delay : 0.4 }} href="/services/education" className="linkBin">

                                <div className="content">

                                    <div className="img_quick">

                                        <img src={learn} alt="" />

                                    </div>

                                    <div className='quick__title'>

                                        <div className="main__text">
                                            School in Lagos State <span><ArrowUpRight/></span>
                                        </div>

                                        <p>book your trip, get a tour guide, how to process your visa</p>

                                    </div>

                                    <div className="button__quick"> Go to housing </div>

                                </div>

                            </motion.a>
                            

                        </div>

                        </IconoirProvider>

                        <div className="linkServices">

                                Ready to explore? <a onClick={handleServices}>Browse all services</a>

                            </div>

                    </div>

                    <div className="lineBg">
                        <img src={line} alt="" />
                    </div>

                </Container>

        </div>

  )

}
