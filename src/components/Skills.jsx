import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import "./Skills.css"   
import skillsData from '../utils/skillsData'
import featuresData from '../utils/featuresData'

// skills component 
let StyledMySkills = styled.div`
    height:120px;
    background-color: var(--background-2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    img{
        width: 40px;
    }
    p {
        text-transform: uppercase;
        margin-top: 10px;
        font-weight: 400;
        font-size:large;
        color: var(--text-color);
    }
    &::before{
        content:"";
        position: absolute;
        top: 0px;
        bottom: 0px;
        height: 100%;
        width: 100%;
        background-color: var(--text-color-2);
        transition:all .5s;
        transform: scale(0);
        opacity: 0.1;
    }
    &:hover::before{
        transform: scale(1);
    }
`
function MySkills({name, img}){
    return(
        <StyledMySkills>
            <img src={img} alt="the img" />
            <p>{name}</p>
        </StyledMySkills>
    )
}
// feature component 
let StyledMyFeature = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 265px;
    background-color: var(--background-2);
    padding: 10px 10px 5px;
    border-radius: 6px;
    transition: all 0.5s;
    div{
        background-color: var(--main-color);
        height: 70px;
        width: 70px;
        border-radius: 50%;
        margin-bottom:28px;
        display: flex;
        align-items: center;
        justify-content: center;
        .feature--icon{
            color:white;
            font-size: 45px;
            font-weight: 500px;
        }
    }
    h2{
        text-transform: capitalize;
        margin-bottom: 15px;
        color:var(--text-color-2);
    }
    p{
        text-align: center;
        color:var(--text-color);
    }
    &:hover{
        background-color: var(--background);
        div{
            background-color: var(--text-color-2);
            .feature--icon{
                animation: retate .5s alternate;
                transform: rotate(90deg);
                color: var(--main-color);
            }
        }
    }
    @keyframes retate{
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(90deg);
        }
    }
`
function MyFeature({icon, name, discription}){
    return(
        <StyledMyFeature>
            <div>{icon}</div>
            <h2>{name}</h2>
            <p>{discription}</p>
        </StyledMyFeature>
    )
}

function Skills() {
  return (
    <div className="skills">
        <Menu/>
        <div className="container skills--container">
            <h1>my skills</h1>
            <div className="skills--myskills">
                {
                    skillsData.map((skill, index)=>{return <MySkills key={index} name={skill.name} img={skill.img}>sdd</MySkills>})
                }
            </div>
            <h1>my features</h1>
            <div className="skills--myfeatures">
                {
                    featuresData.map((feature, index)=>{return <MyFeature key={index+10} name={feature.name} icon={feature.icon} discription={feature.discription}></MyFeature>})
                }
            </div>
        </div>
    </div>
  )
}

export default Skills