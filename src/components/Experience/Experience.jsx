import React from 'react'
import './Experience.css'
import {skills }from '../../Data/skills'

export const Experience = () => {
  return (
    <section className='skills.container' id='experience'>
        <h2 className='skills-title'>Skills</h2>
        <div className='skills-content'>
        <div className='skills'>
          {skills.map((skill, id) => {
            return (
              <div key={id} className='skill'>
                <div className='skillImageContainer'>
                <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
        })}
    </div>
        </div>
    </section>
  )
}
