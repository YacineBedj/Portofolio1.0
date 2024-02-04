import React from 'react'
import { Link, useParams } from 'react-router-dom'
import projectsData from '../utils/portfolioData';
import "./Project.css"
import { IoChevronBackOutline } from 'react-icons/io5';

function Project() {
  let {projectId} = useParams();
  let projectInfo = projectsData[projectId];
  
  return (
    <div className="project">
        <Link to="../" className='.link-simple'>
        <div className="exit--btn"><IoChevronBackOutline className="exit--icon"/></div>
        </Link>
        <img src={projectInfo.img} alt=""/>
        <h1>{projectInfo.name}</h1>
        <p>{projectInfo.disription}</p>
        <p><span className="title">Technologies Used : </span>{projectInfo.technologies.join(' - ')}</p>
        <p><span className="title">View Live: </span> <a href={projectInfo.live} className='link'> click here</a></p>
        <p><span className="title">Source Code : </span><a href={projectInfo.live} className='link'> click here</a></p>
    </div>
  )
}

export default Project