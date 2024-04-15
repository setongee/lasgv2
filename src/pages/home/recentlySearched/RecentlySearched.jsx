import React,{useState} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import '../recentlySearched/recently.scss'
import { ArrowRight, ArrowUpRight, Car, Xmark, XmarkCircleSolid } from 'iconoir-react'
import TabTitle from '../../../components/tabHeading/tabTitle'
import { useNavigate } from 'react-router'

export default function RecentlySearched() {

    const [selectedId, setSelectedId] = useState(null)
    const [objectNumber, setObjectNumber] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    let navigateTo = useNavigate();

    const listItems = {

        initial : {
            opacity : 0,
            scale : .7
        },
    
        animate : (index) => (
    
            { 
    
                opacity : 1,
                scale : 1,
    
                transition : {
                    delay : .2 * index,
                    duration : .3,
                    type : 'spring'
                }
    
            }
        )
    }

    const items = [

        {
            
            id : "service1",
            title : "Vehicle Services.",
            subtitle : "Lisenses, Vehicle Registrations, online payments etc. ",
            url : [
                {
                    id : 'vehicle lisense',
                    name : 'Vehicle Lisense',
                    url : '#'
                },

                {
                    id : 'inspection',
                    name : 'Book an inspection',
                    url : '#'
                },

                {
                    id : 'Driver\'s license',
                    name : 'Driver\'s license',
                    url : '#'
                },

                {
                    id : 'vehicle lisense',
                    name : 'Auto-Vin Certificate',
                    url : '#'
                },

                {
                    id : 'vehicle lisense',
                    name : 'Vehicle Insurance',
                    url : '#'
                }
            ]
    
        },
    
       {
            
            id : "service2",
            title : "Explore Agencies.",
            subtitle : "Quickly locate and access applicable agency websites, contact information, and more.",
            url : [
                {
                    id : 'vehicle lisense',
                    name : 'Vehicle Lisense',
                    url : '#'
                },

                {
                    id : 'inspection',
                    name : 'Book an inspection',
                    url : '#'
                },

                {
                    id : 'Driver\'s license',
                    name : 'Driver\'s license',
                    url : '#'
                },

                {
                    id : 'vehicle lisense',
                    name : 'Auto-Vin Certificate',
                    url : '#'
                },

                {
                    id : 'vehicle lisense',
                    name : 'Vehicle Insurance',
                    url : '#'
                }
            ]
    
        },
    
        {
            id : "service3",
            title : "Pay Bills & Levies.",
            subtitle : "lorem20",
            url : [
                {
                    id : 'vehicle lisense',
                    name : 'Vehicle Lisense',
                    url : '#'
                },

                {
                    id : 'inspection',
                    name : 'Book an inspection',
                    url : '#'
                },

                {
                    id : 'Driver\'s license',
                    name : 'Driver\'s license',
                    url : '#'
                },

                {
                    id : 'vehicle lisense',
                    name : 'Auto-Vin Certificate',
                    url : '#'
                },

                {
                    id : 'vehicle lisense',
                    name : 'Vehicle Insurance',
                    url : '#'
                }
            ]
    
        },
    
        {
            id : "service4",
            title : "Visit & Tour Lagos.",
            subtitle : "lorem20",
            url : [
                {
                    id : 'vehicle lisense',
                    name : 'Vehicle Lisense',
                    url : '#'
                },

                {
                    id : 'inspection',
                    name : 'Book an inspection',
                    url : '#'
                },

                {
                    id : 'Driver\'s license',
                    name : 'Driver\'s license',
                    url : '#'
                },

                {
                    id : 'vehicle lisense',
                    name : 'Auto-Vin Certificate',
                    url : '#'
                },

                {
                    id : 'vehicle lisense',
                    name : 'Vehicle Insurance',
                    url : '#'
                }
            ]
    
        },
    
        {
            id : "service5",
            subtitle : "lorem20",
            title : "Lagos Colleges & Universities.",
            url : [
                {
                    id : 'vehicle lisense',
                    name : 'Vehicle Lisense',
                    url : '#'
                },

                {
                    id : 'inspection',
                    name : 'Book an inspection',
                    url : '#'
                },

                {
                    id : 'Driver\'s license',
                    name : 'Driver\'s license',
                    url : '#'
                },

                {
                    id : 'vehicle lisense',
                    name : 'Auto-Vin Certificate',
                    url : '#'
                },

                {
                    id : 'vehicle lisense',
                    name : 'Vehicle Insurance',
                    url : '#'
                }
            ]
    
        },
        {
            id : "service6",
            subtitle : "lorem20",
            title : "Job Openings in Lagos.",
            url : [
                {
                    id : 'vehicle lisense',
                    name : 'Vehicle Lisense',
                    url : '#'
                },

                {
                    id : 'inspection',
                    name : 'Book an inspection',
                    url : '#'
                },

                {
                    id : 'Driver\'s license',
                    name : 'Driver\'s license',
                    url : '#'
                },

                {
                    id : 'vehicle lisense',
                    name : 'Auto-Vin Certificate',
                    url : '#'
                },

                {
                    id : 'vehicle lisense',
                    name : 'Vehicle Insurance',
                    url : '#'
                }
            ]
    
        }
    
    ]

    const handleElementsFix = () => {

        document.querySelector('.recentlySearchedDom').classList.add('blur');

    }

    const handleCloseModal = () => {

        document.querySelector('.recentlySearchedDom').classList.remove('blur')

    }

  return (

    <div className="recentlySearchedDom">

        <TabTitle title = '# Top 6 most searched services' url = '#' />
        
        <div className="contentCards">

            {
            
            items.map((item, index) => (

                <motion.div className='cardPoint' layoutId={item.id} 

                key={index}
                variants={listItems}
                initial = "initial"
                whileInView= "animate"
                custom={index}
                
                onClick={() => {

                    if (!isOpen) {

                        setSelectedId(item.id);
                        setObjectNumber(index);
                        handleElementsFix();
                        setIsOpen(true);

                    }
                    

                }}>

                    <div className="iconTin"> 

                        <div className="pin pin1">0{index+1}.</div>
                        <div className="pin pin2">0{index+1}.</div>

                    </div>

                    <div className="contentPin">

                        <motion.div className='title thick'>
                            
                            <div className="titleForm"> {item.title} </div>
                            <div className="arrowIn"> 
                                <div className="arrow_Z arrow1"><ArrowUpRight /> </div>
                                <div className="arrow_Z arrow2"><ArrowUpRight /> </div>
                            </div>

                        </motion.div>

                        <motion.div className='subtitle'>{item.subtitle}</motion.div>

                    </div>

                </motion.div>

                ))
            
            }
            
            <AnimatePresence>

            {

                selectedId && (

                    <motion.div className='showMaxOn' layoutId={selectedId}>

                        <motion.div className='title_showMax'>{items[objectNumber].title}</motion.div>
                        <motion.div className='subtitle_showMax'>{items[objectNumber].subtitle}</motion.div>

                        <div className="linksRelevant">

                            {
                                items[objectNumber].url.map( (url, index) => {

                                    return <div key = {index} className="list" onClick={() => navigateTo(url.url) } > {url.name} <ArrowRight width={15} height={15} /> </div>

                                } )
                            }

                        </div>

                        <motion.div className='cancelMark' onClick={ 

                            () => {
                                setSelectedId(null) ;
                                handleCloseModal();
                                setIsOpen(false);
                            }

                        } >  
                        
                            <Xmark className='cancelModal' color='#000' strokeWidth={2}/> 
                        
                        </motion.div>

                    </motion.div>

                )

            }

            </AnimatePresence>

        </div>

    </div>

  )
}
