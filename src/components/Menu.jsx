import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Menu.css"

function Menu() {
  const [show, setShow] = useState(false);
  return (
    <div className="menu">
            <div className="menu--icon" onClick={()=>{setShow((oldShow)=>{return !oldShow})}}>
              <span style={{display: !show? "block" : "none"}}></span>
              <span></span>
              <span style={{display: !show? "block" : "none"}}></span>
            </div>
              <ul className='menu--list' style={{display: show? "flex" : "none"}}>
                  <Link className='link-simple' to="/"><li>about</li></Link>
                  <Link className='link-simple' to="/portofolio"><li>portfolio</li></Link>
                  <Link className='link-simple' to="/skills"><li>skills</li></Link>
                  <Link className='link-simple' to="/education"><li>educataion</li></Link>
                  <Link className='link-simple' to="/contact"><li>contact</li>            </Link>
              </ul>
    </div>
  )
}

export default Menu