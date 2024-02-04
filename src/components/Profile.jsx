import React, { useState } from 'react'
import styled from 'styled-components'
import projectsData from '../utils/portfolioData'
import "./Profile.css"
import { Link } from 'react-router-dom'
import Menu from './Menu'


// this is the project component 
let OneProjectStyled = styled.div`
  color: var(--text-color);
  .img{
    position: relative;
    overflow: hidden;
    padding:0px;
    height: 250px;
    border-radius: 10px;

  }
  .img .btn{
    position: absolute;
    top: 40%;
    left: 35%;
    transform: scale(0);
    transition: transform .6s linear;
    /* transition: display 0s linear .6s; */
    z-index: 10;
  }
  .img::before{
    content:"";
    position: absolute;
    width:100%;
    height: 50%;
    transform: translateY(-100%);
    transition: all .7s;
    background-color: var(--background);
    opacity: 0.8;
  }
  .img::after{
    content:"";
    position: absolute;
    width:100%;
    height: 50%;
    bottom:0%;
    left:0%;
    transform: translateY(100%);
    transition: all .7s;
    background-color: var(--background);
    opacity: 0.8;
  }
  .img:hover{
    &:before{
      transform: translateY(0%);
    }
    &:after{
      transform: translateY(0%);
    }
    .btn{
      display: flex;
      transform: scale(1);
    }
  }
  img{
    width: 100%;
    height: 250px;
    margin-bottom: 6px;
    border-radius: 10px;
  }
  h2{
    padding-left:6px;
    text-transform:capitalize;
  }
  @keyframes to-up{
    0%{
      transform: translateY(+500px);
    }
    100%{
      transform: translateY(0%);
    }
  }
`
function OneProject({img, name, id}){
  return(
    <Link to={`/portofolio/${id}`} className='link-simple'>
      <OneProjectStyled className="one--project">
        <div className="img">
          <img src={img} alt="" />
          <button className='btn'>
                <span>Hire Me</span>
                <span className='btn--icon'></span>
          </button>
        </div>
        <h2>{name}</h2>
      </OneProjectStyled>
    </Link>
  )
}
// this the input component 
let InputFilteerStyled = styled.label`
  margin-left: 15px;
  padding:6px;
  border-radius: 6px;
  text-transform: capitalize;
  transition: all 0.5s;
  background-color: var(--background-2);
  &:has(input:checked){
    background-color: var(--main-color);
  }
  &:hover{
    cursor: pointer;
  }
  input{
    display:none;
  }
`
function InputFiltter(props){
  return(
    <InputFilteerStyled>
    <input type="radio" value={props.value} name='fillter' defaultChecked = {props.value === "all" ? "checked" : ""}
      onClick={(e)=>{props.setCategory(e.target.value)}}
    />
    {props.value}
  </InputFilteerStyled>
  )
}


function Profile() {
  const [category, setCategory] = useState("all");
  const filteredProjectData = projectsData.filter((project)=>{return project.categories.includes(category)});
  return (
    <div className="profile">
        <Menu/>
        <div className=" container  profile--container">
            <h1>recent works</h1>
            <div className="profile--filtter">
              {
                ["all", "html-css-js", "sass", "reactJs", "api", "challenges"]
                .map((category,index)=>{return <InputFiltter key={index} value={category} setCategory={setCategory}/>})
              }
            </div>
            <div className="profile--projects">
              {
                filteredProjectData
                .map((project, index)=>{return <OneProject key={project.id} name={project.name} img={project.img} id={project.id}/>})
              }
            </div>
        </div>
    </div>
  )
}
export default Profile