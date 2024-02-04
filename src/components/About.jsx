import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./About.css"
import Menu from './Menu';

function About() {
  return (
    <div className="about">
        <Menu/>
        <div className='container about-container'>
            <div className="about--img">
                <img src="../src/assets/img-Profile.jpg" alt="" />
            </div>
            <h1>Hi, My Name is Bedjaoui Yacine.</h1>
            <p>
                I'm a Frontend developer, living in Algies, Algeria.
                I make web applications using html, css, javascript and bootstrap and React
                . Check my latest work on the <Link className='link' to="/portofolio">portfolio page</Link>.
                want talk about a project? you can get in touch with me <Link className='link' to="/contact">Here</Link>.
            </p>
            <div className="about--btns">
                <button className='btn'>
                    <span>Download Resume</span>
                    <span className='btn--icon'>{<FaDownload />}</span>
                </button>
                <Link to="/contact" className='link-simple'>
                    <button className='btn'>
                        <span>Hire Me</span>
                        <span className='btn--icon'>{<FaTelegramPlane />}</span>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default About