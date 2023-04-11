import React from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

const ProjectCard = (props) => {
  return (
    <div className='project-blocks'>
      <div className='img-box'>
        <img src={props.proj.image} alt="ProjectImg" />
        <span>{props.proj.category}</span>
        {/* AiFillEye, AiFillGithub */}
        <div className="click-icons">
          <a href={props.proj.link}><AiFillEye/></a>
          <a href={props.proj.github}><AiFillGithub/></a>
        </div>
      </div>

      <p className="name">{props.proj.name}</p>
      <p>{props.proj.desc}</p>
    </div>
  )
}

export default ProjectCard