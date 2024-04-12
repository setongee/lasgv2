import React from 'react'
import { NavArrowRight } from 'iconoir-react';
import { useNavigate } from 'react-router';
import vector1 from '../../assets/navBar/gov.svg'
import { motion } from "framer-motion"
import Container from '../container/container';

export default function NestedView({navData}) {

  let navigate = useNavigate();

  const listItems = {

    initial : {
        opacity : 0,
        y : 150
    },

    animate : (index) => (

        { 

            opacity : 1,
            y : 0,

            transition : {
                delay : 0.05 * index,
                duration : 0.05
            }

        }
    )
}

const addClass = (e) => {

    const parent = e.target.parentElement;
    const parentDocument = parent.querySelector('.parentLink')

    //parentDocument.classList.add('remain')

        console.log(parent);

}

const removeClass = (e) => {

    const parent = e.target.parentElement;
    const parentDocument = parent.querySelector('.parentLink')

    //parentDocument.classList.remove('remain')
    console.log(parent);
}

  return (
    
    <div className="nests" style={{backgroundColor : navData.theme}} onMouseOut={ e => removeClass(e) } onMouseOver={ e => addClass(e) }>

        <motion.div 
        className="vectorPhoto"

        initial = {{
            opacity : 0,
            x : 100
        }}

        whileInView={{
            opacity : 1,
            x : 0
        }}

        transition = {{duration : 0.5, type : 'spring', delay : 0.2}}

        >
        
        <img src={vector1} alt="heading title part" /> 

        </motion.div>

        {/* Heading Area */}

        <Container >

        <motion.div 
        className="nest_heading thick"

        initial = {{
            opacity : 0,
            x : -100
        }}

        whileInView={{
            opacity : 1,
            x : 0
        }}

        transition = {{duration : 0.8, type : 'spring', delay : 0.2}}

        > {navData.nests.heading} </motion.div>
        
        <div className="nest_links">

            {
                navData.isNest ? navData.nests.links.map((res, index) => (
                        
                    <motion.div 

                    className="linker" 
                    key = {index} 
                    onClick= { () => navigate(res.url) } 
                    variants={listItems}
                    initial = "initial"
                    whileInView= "animate"
                    custom={index}
                    
                    >

                        <div className="linkUp">

                            <div className="link thick underline">{res.name}</div>
                            <p> {res.desc} </p>

                        </div>

                        <NavArrowRight color='#131414' />

                    </motion.div>
                    
                )) : null
            }

        </div>

        </Container>

    </div>

  )
}
