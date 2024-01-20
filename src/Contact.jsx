import React, { useContext } from 'react'
import { Theme } from './App'

function Contact() {
  let {theme, setTheme} = useContext(Theme);
  return (
    <div>Contact</div>
  )
}

export default Contact