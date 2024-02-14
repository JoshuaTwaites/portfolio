import React from 'react'
import './About.css'
import about from '../../assets/images/guycoding.png'
import front from '../../assets/images/cursorIcon.png'
import back from '../../assets/images/serverIcon.png'
import ui from '../../assets/images/uiIcon.png'

export const About = () => {
  return (
    <section className='about-container' id='about'>
        <h2 className='about-title'>About</h2>
        <div className='about-content'>
            <img src={about} alt="A man coding" className='about-img'/>
            <ul className='about-items'>
                <li className='about-item'>
                    <img src={front} alt="Cursor Icon" />
                    <div className='about-itemText'>
                        <h3>Front-end Devloper</h3>
                        <p>I'm a front-end devloper with experience in building responsive websites as well as optimized sites.</p>
                    </div>
                </li>
                <li className='about-item'>
                    <img src={back} alt="Server Icon" />
                    <div className='about-itemText'>
                        <h3>Back-end Devloper</h3>
                        <p>I'm currently learning the basics of back-end development including how to use Node.js.</p>
                    </div>
                </li>
                <li className='about-item'>
                    <img src={ui} alt="UI icon" />
                    <div className='about-itemText'>
                        <h3>UI Designer</h3>
                        <p>I have designed multiple landing pages and have some experience working with Figma.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
