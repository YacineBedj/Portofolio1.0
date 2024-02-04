import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Menu.css"

function Menu() {
  const [show, setShow] = useState(false);
  return (
    <div className="menu">
            <div className="menu--icon" onClick={()=>{setShow((oldShow)=>{return !oldShow})}}>
              <span ></span>
              <span ></span>
              <span ></span>
            </div>
              <ul className='menu--list' style={{transform : show ? "translateX(0%)" : "translateX(-110%)"}}>
                  <Link className='link-simple' to="/"><li>about</li></Link>
                  <Link className='link-simple' to="/portofolio"><li>portfolio</li></Link>
                  <Link className='link-simple' to="/skills"><li>skills</li></Link>
                  <Link className='link-simple' to="/contact"><li>contact</li>            </Link>
              </ul>
    </div>
  )
}

export default Menu