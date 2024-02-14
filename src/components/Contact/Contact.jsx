import React from 'react'
import './Contact.css'
import email from '../../assets/images/emailIcon.png'
import gitHub from '../../assets/images/githubIcon.png'

export const Contact = () => {
  return (
    <footer id='contact' className='contact-container'>
        <div className='contact-text'>
            <h2>Contact Me</h2>
            <p>If you are interested reach out</p>
        </div>
        <ul className='contact-links'>
            <li className='contact-link'>
                <img src={email} alt="Email Icon" />
                <a href="mailto:joshuatwaites5@gmail.com">joshuatwaites5@gmail.com</a>
            </li>
            <li className='contact-link'>
                <img src={gitHub} alt="GitHub Icon" />
                <a href="https://github.com/JoshuaTwaites">github.com</a>
            </li>
        </ul>
    </footer>
  )
}
