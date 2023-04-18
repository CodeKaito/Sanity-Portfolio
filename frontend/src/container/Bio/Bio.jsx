import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper';
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
                            <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile pic" className="profile__pic" />
                    </motion.div>
                        <div className="biography__description"> 
                            <h2>Fullstack Developer</h2>
                            <h5></h5>
                            <p> Hello </p>    
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