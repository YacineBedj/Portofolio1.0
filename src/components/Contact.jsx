import React, { useRef, useState } from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import { IoChevronBackOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Menu from './Menu';


function Msg({show, setShowMsg}){
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log("hi", form.current)
        emailjs.sendForm('service_pl5xmoo', 'template_ao8l0he', form.current, '0VxcBW4n1jxC0Hw5k')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <div className='msg' style={{transform : show ? "translateY(0%)" : "translateY(-110%)"}}>
            <form className="msg--container container" ref={form} onSubmit={sendEmail}>
                <div className="exit--btn"
                    onClick={()=>{setShowMsg((oldShow)=>{
                        console.log(oldShow);
                        return !oldShow
                    })}}
                ><IoChevronBackOutline className="exit--icon"/></div>
                <input type="text" className='input' placeholder='Name' name="user_name"/>
                <input type="email" className='input' placeholder='Email' name="user_gmail"/>
                <input type="text" className='input'placeholder='Subject' name="subject"/>
                <textarea name="message" id="" cols="30" rows="10"  className='input input--message' placeholder='Message' defaultValue="" ></textarea>
                <button className='btn'>
                    <span>Send</span>
                </button>
            </form>
        </div>
    )
}

function Contact() {
  let [showMsg, setShowMsg] = useState(false)
  return (
    <div className="contact">
        <Msg show={showMsg} setShowMsg={setShowMsg}/>
        <Menu/>
       <div className="container contact--container">
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
            <div className="contact--icon--span"><a  href="https://github.com/YacineBedj" target="_blank" rel="noopener noreferrer" >{<FaGithub className="contact--icon"/>}</a></div>
            <div className="contact--icon--span"><a  href="https://www.linkedin.com/in/yacine-bedjaoui-401126264/" target="_blank" rel="noopener noreferrer" >{<FaLinkedin  className="contact--icon"/>}</a></div>
            <div className="contact--icon--span"><a  href="https://www.facebook.com/YacineBedj2004" target="_blank" rel="noopener noreferrer" >{<FaFacebookF  className="contact--icon"/>}</a></div>
            <div className="contact--icon--span"><a  href="https://www.instagram.com/yacine__bedj/" target="_blank" rel="noopener noreferrer" >{<FaInstagram  className="contact--icon"/>}</a></div>

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