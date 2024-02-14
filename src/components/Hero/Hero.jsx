import React from 'react'
import './Hero.css'
import profilePic from '../../assets/images/profilepic.png'
import { Typewriter } from 'react-simple-typewriter'

export const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h1 className='hero-title'>Hi, I'm Josh</h1>
            <h2 className='dynamic-text'>
              I'm a Web {' '}
              <span style={{ color: 'red', fontWeight: 'bold' }}>
              <Typewriter
                words={['Developer.', 'Designer.']}
                loop={10}
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
          />
        </span>
      </h2>
            <p className='hero-discription'>I'm a front-end developer who likes working with React. <br />
            Reach out if you'd like to learn more.</p>
            <a href="mailto:joshuatwaites5@gmail.com" className='hero-contactBtn'>Contact Me</a>
        </div>
        <img src={profilePic} alt="Profile Pic" className='hero-img' />
        <div className='topBlur' />
        <div className='bottomBlur' />
    </section>
  )
}

