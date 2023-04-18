import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { AppWrap, MotionWrap } from '../../wrapper';
import './Bio.scss'

const Bio = () => {
    return (
        <>
            <h2 className='head-text'>My Biography</h2>

            <motion>
                <img src="" alt="" />
            </motion>
        </>
      )
    }
    
    export default AppWrap(
        MotionWrap(Bio, 'app__bio'),
        'bio',
        'app__whitebg',
    );