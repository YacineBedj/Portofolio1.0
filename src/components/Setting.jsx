import React, { useContext, useState } from 'react'
import { IoIosSettings } from "react-icons/io";
import { Theme } from '../App'
import "./Setting.css"


function Setting() {
  const {theme, setTheme} = useContext(Theme);
  const [show, setShow] = useState(false)
  return (
    <div className='setting' style={{right: show ? "0px" : "-240px",}}>  
        <main className="setting--option">
            <button className="setting--icon"
                onClick={()=>{setShow(oldShow => {return !oldShow})}}
            ><IoIosSettings className={"IoIosSettings"}/></button>

            <h2 className="setting--option--title"> color</h2>
            <div className="setting--option--colors">
              <span style={{backgroundColor:"#412a6d", border: theme.color === "#412a6d" ? "3px solid white" : "none"}}
                onClick={()=>{setTheme((oldThem)=>{return {...oldThem, color:"#412a6d"}})}}
              ></span>
              <span style={{backgroundColor:"#e74c3c", border: theme.color === "#e74c3c" ? "3px solid white" : "none"}}
                onClick={()=>{setTheme((oldThem)=>{return {...oldThem, color:"#e74c3c"}})}}
              ></span>
              <span style={{backgroundColor:"#009ec6", border: theme.color === "#009ec6" ? "3px solid white" : "none"}}
                onClick={()=>{setTheme((oldThem)=>{return {...oldThem, color:"#009ec6"}})}}
              ></span>
              <span style={{backgroundColor:"#216541" , border: theme.color === "#216541" ? "3px solid white" : "none"}}
                onClick={()=>{setTheme((oldThem)=>{return {...oldThem, color:"#216541"}})}}
              ></span>

            </div>

            <h2 className="setting--option--title">glass</h2>
            <div className="glass">
              <label className='toggel' htmlFor='glass' style={{justifyContent:theme.glass ? "flex-end" : "flex-start"}}>
                <input id='glass' type="checkbox" onChange={()=>{setTheme((oldThem)=>{return {...oldThem, glass: !oldThem.glass}})}}/>
              </label>
              <p>Glass</p>
            </div>

            <h2 className="setting--option--title">ligth</h2>
            <div className="light">
              <label className='toggel' htmlFor='light' style={{justifyContent:theme.light ? "flex-end" : "flex-start"}}>
                <input id='light' type="checkbox" onChange={()=>{setTheme((oldThem)=>{return {...oldThem, light: !oldThem.light}})}}/>
              </label>
              <p>Light & dark</p>
            </div>
        </main>
    </div>
  )
}

export default Setting