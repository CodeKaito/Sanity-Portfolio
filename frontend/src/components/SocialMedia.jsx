import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://github.com/CodeKaito'>
            <BsGithub />
          </a>
        </div>
        <div>
          <a href='https://www.instagram.com/carljeromee/'>
            <BsInstagram />
          </a>
            
        </div>
        <div>
          <a href='https://www.linkedin.com/in/jeromedecinco/'>
            <BsLinkedin />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia