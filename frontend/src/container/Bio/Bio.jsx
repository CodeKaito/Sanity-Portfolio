import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants'
import './Bio.scss'

const Bio = () => {
    return (
        <>
            <div className='app__profiles'>
                <h2 className='head-text'>Get To <span>Know</span> Me</h2>

                <div className="biography__wrapper">
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className='biography__image' >
                            <img src={images.profile3} alt="profile pic" className="profile__pic" />
                    </motion.div>
                        <div className="biography__description"> 
                            <h2>A Fullstack Developer & DevOps Engineer</h2>
                            <p> As a passionate fullstack developer, I am always excited to explore new technologies and create innovative solutions to everyday problems. 
                                <br/>My journey began years ago, when I discovered my love for programming and embarked on a journey to become a developer.
                                <br/>Over time, I honed my skills by studying various programming languages and tools, constantly challenging myself to learn and grow in my field. I have worked on projects of all sizes and complexity levels, ranging from small web applications to full-fledged enterprise solutions.
                                <br/>Through my years of experience, I have become an expert in a variety of programming languages such as <span>Java, PHP, Python, and JavaScript, as well as front-end frameworks like ReactJS and AngularJS</span>. 
                                <br/>I am also skilled in <span>database management</span>, <span>DevOps</span>, and <span>software architecture</span>.
                                <br/>As a fullstack developer, I take pride in my ability to design and develop the back-end infrastructure as well as the user-facing front-end of applications. I have a passion for creating solutions that are not only robust and secure, but that also provide an exceptional user experience.
                                <br/>My enthusiasm for programming and solving complex challenges has allowed me to continuously improve as a developer. I am always looking for new and exciting opportunities to push myself further and continue to learn, grow and innovate. </p>    
                        </div>
                    </div>
                    
                </div>
        </>
        );
    }
    
    export default AppWrap(
        MotionWrap(Bio, 'app__bio'),
        'bio',
        'app__whitebg',
    );