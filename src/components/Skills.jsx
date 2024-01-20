import React from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import "./Skills.css"   
import skillsData from '../utils/skillsData'
import featuresData from '../utils/featuresData'

function Skills() {
    let StyledMySkills = styled.div`
        height:120px;
        background-color: var(--background-2);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        
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
    `
    function MySkills({name, img}){
        return(
            <StyledMySkills>
                <img src={img} alt="the img" />
                <p>{name}</p>
            </StyledMySkills>
        )
    }


    let StyledMyFeature = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 265px;
        background-color: var(--background-2);
        padding: 10px 10px 5px;
        border-radius: 6px;
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
                font-size: 35px;
                font-weight: 200px;
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
            background-color:red;
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
  return (
    <div className="skills">
        <div className="container skills--container">
            <Menu/>
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