import React from 'react'
import "./Background.css"


function Background() {
  let animationDur = {min:8, max:15}
  return (
    <div className="black-bg">
      <span style={{animationDuration: `${(Math.random() * animationDur.max) + animationDur.min}s`}}></span>
      <span style={{animationDuration: `${(Math.random() * animationDur.max) + animationDur.min}s`}}></span>
      <span style={{animationDuration: `${(Math.random() * animationDur.max) + animationDur.min}s`}}></span>
      <span style={{animationDuration: `${(Math.random() * animationDur.max) + animationDur.min}s`}}></span>
      <span style={{animationDuration: `${(Math.random() * animationDur.max) + animationDur.min}s`}}></span>
      <span style={{animationDuration: `${(Math.random() * animationDur.max) + animationDur.min}s`}}></span>
      <span style={{animationDuration: `${(Math.random() * animationDur.max) + animationDur.min}s`}}></span>
      <span style={{animationDuration: `${(Math.random() * animationDur.max) + animationDur.min}s`}}></span>
      <span style={{animationDuration: `${(Math.random() * animationDur.max) + animationDur.min}s`}}></span>
      <span style={{animationDuration: `${(Math.random() * animationDur.max) + animationDur.min}s`}}></span>
      <span style={{animationDuration: `${(Math.random() * animationDur.max) + animationDur.min}s`}}></span>
      <span style={{animationDuration: `${(Math.random() * animationDur.max) + animationDur.min}s`}}></span>
      <span style={{animationDuration: `${(Math.random() * animationDur.max) + animationDur.min}s`}}></span>
      <span style={{animationDuration: `${(Math.random() * animationDur.max) + animationDur.min}s`}}></span>
      <span style={{animationDuration: `${(Math.random() * animationDur.max) + animationDur.min}s`}}></span>
      <span style={{animationDuration: `${(Math.random() * animationDur.max) + animationDur.min}s`}}></span>
      <span style={{animationDuration: `${(Math.random() * animationDur.max) + animationDur.min}s`}}></span>
      <span style={{animationDuration: `${(Math.random() * animationDur.max) + animationDur.min}s`}}></span>
      <span style={{animationDuration: `${(Math.random() * animationDur.max) + animationDur.min}s`}}></span>
      <span style={{animationDuration: `${(Math.random() * animationDur.max) + animationDur.min}s`}}></span>

    </div>
 
  )
}

export default Background