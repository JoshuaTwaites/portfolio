import React from 'react'
import './ProjectCard.css'

export const ProjectCard = ({ project }) => {
  return (
    <div className='card-container'>
        <img src={project.imageSrc} alt={project.title} className='card-image'/>
        <h3 className='card-title'>{project.title}</h3>
        <p className='card-discription'>{project.discription}</p>
        <div className='card-links'>
            <a href={project.demo} className='card-link'>Demo</a>
            <a href={project.source} className='card-link'>Source</a>
        </div>
    </div>
  )
}

