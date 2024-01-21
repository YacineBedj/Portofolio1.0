import React, { useState } from 'react'
import "./Contact.css"
import { IoChevronBackOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


function Msg({show, setShowMsg}){
    return(
        <div className='msg' style={{transform : show ? "translateY(0%)" : "translateY(-110%)"}}>
            <form className="msg--container container">
                <div className="exit--btn"
                    onClick={()=>{setShowMsg((oldShow)=>{
                        console.log(oldShow);
                        return !oldShow
                    })}}
                ><IoChevronBackOutline className="exit--icon"/></div>
                <input type="text" className='input' placeholder='Name'/>
                <input type="text" className='input' placeholder='Email'/>
                <input type="email" className='input'placeholder='Subject'/>
                <textarea name="" id="" cols="30" rows="10"  className='input input--message' placeholder='Message'> </textarea>
                <button className='btn'>
                    <span>Send</span>
                </button>
            </form>
        </div>
    )
}
function Contact() {
  let [showMsg, setShowMsg] = useState(true)
  return (
    <div className="contact">
        <Msg show={showMsg} setShowMsg={setShowMsg}/>
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