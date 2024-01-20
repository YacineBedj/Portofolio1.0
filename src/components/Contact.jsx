import React, { useState } from 'react'
import "./Contact.css"
import Menu from './Menu'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Msg({show}){
    return(
        <div className='msg' style={{transform : show ? "translateY(0%)" : "translateY(-110%)"}}>msg</div>
    )
}
function Contact() {
  let [showMsg, setShowMsg] = useState(true)
  return (
    <div className="contact">
        <Msg show={showMsg}/>
       <div className="container contact--container">
        {/* <Menu/> */}
        <h1>Contact me</h1>
        <p>If you want to contact with me about project or any question, Please enter a valid Email in form, So that I can reply to the email.Thanks 🤩</p>
        <div className="info">
            <span className="contact--icon--span">{<IoMail className="contact--icon"/>}</span>
            <span>yacinebedjaoui2004@gmail.com</span>
        </div>
        <div className="info">
            <span className="contact--icon--span">{<FaPhoneAlt className="contact--icon"/>}</span>
            <span>+213782782135</span>
        </div>
        <div className="info info-meida">
            <div className="contact--icon--span"><a href="http://">{<FaGithub className="contact--icon"/>}</a></div>
            <div className="contact--icon--span"><a href="http://">{<FaLinkedin  className="contact--icon"/>}</a></div>
            <div className="contact--icon--span"><a href="http://">{<FaFacebookF  className="contact--icon"/>}</a></div>
            <div className="contact--icon--span"><a href="http://">{<FaInstagram  className="contact--icon"/>}</a></div>

        </div>
        <button className='btn' onClick={()=>{setShowMsg((oldShow)=>{
            console.log(oldShow);
            return !oldShow
        })}}>
            <span>send message</span>
        </button>
        </div>
    </div>
  )
}

export default Contact