import React from 'react'
import '../../../styles/components/quickService/quickService.scss'
import { ArrowDown, ArrowUpRight, IconoirProvider } from 'iconoir-react'
import { motion } from 'framer-motion';
import Container from '../../../components/container/container';
import { SplitText } from '../SplitText';
import line from '../../../assets/icons/random/line__lasg.svg'

export default function QuickCheck() {

    const handleServices = () => {

        window.scrollTo({

            top : document.querySelector('#services').getBoundingClientRect().top - document.body.getBoundingClientRect().top - 100,

        })
        
    }

  return (
    
        <div className="quickCheck" id='quickCheck'>

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
                                Discover and access a wide range of Lagos state services for citizens and businesses online
                            </div>

                        </div>

                        <div className="title"> Frequently searched services - </div>

                        
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
                        
                        className="quickAsapLinks">

                            <motion.a initial = {{opacity : 0, y : -50}} whileInView = {{opacity : 1, y:1}} transition={{delay : 0.1 }} viewport = {{once : true}} href="/services/housing" className="linkBin">

                                <div className="content">

                                    <div className='quick__title'> 
                                        Housing in Lagos
                                        <div className="icon"><ArrowUpRight/></div> 
                                    </div>

                                    <p>Get info on housing, permits etc.</p>

                                </div>

                            </motion.a>

                            <motion.a initial = {{opacity : 0, y : -50}} whileInView = {{opacity : 1, y:1}} transition={{delay : 0.2 }} viewport = {{once : true}} href='/services/tourism' className="linkBin">

                                <div className="content">

                                    <div className="quick__title">

                                        Visit and tour Lagos
                                        <div className="icon"><ArrowUpRight/></div> 

                                    </div>

                                    <p>Book your trip, Get a guide, etc.</p>

                                </div>

                            </motion.a>

                            <motion.a initial = {{opacity : 0, y : -50}} whileInView = {{opacity : 1, y:1}} transition={{delay : 0.3}} viewport = {{once : true}} href="/services/education" className="linkBin">

                                <div className="content">

                                    <div className='quick__title'> 
                                        Education in Lagos
                                        <div className="icon"><ArrowUpRight/></div> 
                                    </div>

                                    <p>View Educational centers</p>

                                </div>
                                
                            </motion.a>

                            <motion.a initial = {{opacity : 0, y : -50}} whileInView = {{opacity : 1, y:1}} transition={{delay : 0.4 }} viewport = {{once : true}} href="/government/mdas" className="linkBin">

                                <div className="content">

                                    <div className='quick__title'> 
                                    Explore agencies
                                        <div className="icon"><ArrowUpRight/></div> 
                                    </div>

                                    <p>View Agencies directories</p>

                                </div>
                                
                            </motion.a>

                            <motion.a initial = {{opacity : 0, y : -50}} whileInView = {{opacity : 1, y:1}} transition={{delay : 0.5 }} viewport = {{once : true}} href="/services/laws" className="linkBin">

                                <div className="content">

                                    <div className='quick__title'> 
                                        State laws and guidlines
                                        <div className="icon"><ArrowUpRight/></div> 
                                    </div>

                                    <p>Get acquianted with Lagos Laws.</p>

                                </div>
                                
                            </motion.a>

                            <div className="linkServices">

                                Ready to explore? <a onClick={handleServices}>Browse all services</a>

                            </div>
                            

                        </div>

                        </IconoirProvider>

                    </div>

                    <div className="lineBg">
                        <img src={line} alt="" />
                    </div>

                </Container>

        </div>

  )

}
