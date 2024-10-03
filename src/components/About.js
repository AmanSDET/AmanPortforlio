import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile_me.jpg'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p>Welcome to my corner of the web!</p>
                        <br />
                        <p>I'm a passionate QA Lead dedicated to ensuring the quality of the products people rely on. I began my journey in quality assurance back in 2016 during a Java development internship, where I discovered that delivering reliable, well-tested software is just as critical as building it. Since then, I’ve worked with talented teams to create robust, user-friendly products that are accessible even in remote areas. Outside of work, I love exploring test automation and innovative QA strategies, and when I'm not immersed in testing, I enjoy reading captivating books and embarking on new adventures.</p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
