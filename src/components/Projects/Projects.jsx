import React from 'react'
import './Projects.css'
import { projects } from '../../Data/projects'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
  return (
    <section id='projects' className='projects-container' >
      <h2 className='projects-title'>Projects</h2>
      <div className='projects'>
        {
          projects.map((project, id) => {
            return(
              <ProjectCard key={id} project={project}/>
            )
          })
        }
      </div>
    </section>
  )
}
