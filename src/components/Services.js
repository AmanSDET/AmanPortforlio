import React from 'react';
import "../styles/Services.css"
import {IoColorWandOutline} from "react-icons/io5"
import {BiCodeAlt} from "react-icons/bi"
import { motion } from "framer-motion";

const Services = () => {

   const fade = {
    opacity: 1,
    transition:{
        duration: 1.4
    }
   }

  return (
      <>
          <div className="services" id='services'>
              <div className="container">
                <motion.div whileInView={fade} viewport={{ once: true }} initial={{opacity: 0}} className="heading">
                    <p className="heading-sub-text">What I can do</p>
                    <p className='heading-text'>Services</p>
                </motion.div>
                <motion.div className="services-box" whileInView={fade} initial={{opacity: 0}}>
                    <div className="services-card">
                        <BiCodeAlt className='services-icon' />
                        <p className='services-title'>Backend Automation</p>
                        <p className='services-desc'>I utilize various tools and technologies to design Scalable, and robust API testing frameworks, ensuring seamless integration of APIs across multiple platforms. </p>
                    </div>
                    <div className="services-card">
                        <BiCodeAlt className='services-icon' />
                        <p className='services-title'>App Automation</p>
                        <p className='services-desc'>I leverage a range of automation tools and technologies to develop efficient, reliable, and scalable testing frameworks for Android and iOS applications.</p>
                    </div>
                </motion.div>
              </div>
          </div>
      </>
  )
};

export default Services;
