import React from "react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
    const fade = {
        opacity: 1,
        transition:{
            duration: 1.5
        }
    }

    const verticalLeft = {
        opacity: 1,
        y: 0,
        transition:{
            duration: 1.5
        }
    }


  return (
      <>
        <div className="contact" id='contact'>
            <div className="container">
                <motion.div className="heading" initial={{opacity: 0}} whileInView={fade} viewport={{ once: true }}>
                    <p className="heading-sub-text">Hire Me</p>
                    <p className='heading-text'>Get in Touch</p>
                </motion.div>
                <div className="contact-box">
                    <motion.div className="left-box" initial={{opacity: 0, y: '-50px'}} whileInView={verticalLeft}>
                        <div className="contact-heading">
                            <p>Currently not open to new opportunities, as I’m dedicated to my role at @Powerplay, ensuring a top-notch product reaches the end customer. However, if you have any other inquiries or requests, please feel free to use the form to reach out.</p>
                        </div>
                        <div className="contact-hello">
                            <p>Say Hello</p>
                            <Link className='hello-links' to="//wa.me/+917349414202" target='_blank'>wa.me/AmanChouhan</Link>
                            <a className='hello-links' href="mailto:amanchouhan2801@gmail.com" target='_blank' rel="noreferrer">amanchouhan2801@gmail.com</a>
                        </div>
                    </motion.div>
                    <motion.div className="right-box" initial={{opacity: 0, y: '50px'}} whileInView={verticalLeft}>
                    
                        <form
                            name="contact-form"
                            method="POST"
                            data-netlify="true"
                            action="POST"
                        >
                            <input type="hidden" name="form-name" value="contact-form" />
                            <div className="form-top">
                            <div className="name">
                                <label htmlFor="name">Your Name</label>
                                <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your name"
                                required
                                />
                            </div>

                            <div className="email">
                                <label htmlFor="email">Your Email</label>
                                <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email address"
                                required
                                />
                            </div>
                            </div>

                            <div className="form-mid">
                            <div className="message">
                                <label htmlFor="message">Your message</label>
                                <textarea
                                type="text"
                                name="message"
                                id="message"
                                placeholder="Hi, I think I need you to work on this particular product. Reach out as soon as you can"
                                required
                                ></textarea>
                            </div>
                            </div>

                            <div className="form-btn">
                            <button type="submit" className="hero-contact">
                                Send Message
                            </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Contact;
