import React, { createContext, useState } from 'react'
import "./app.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Setting from "./components/Setting"
import Background from "./components/Background"
import About from "./components/About"  
import Skills from './components/Skills';
import Contact from './components/Contact'


export const Theme = createContext();

function App() {
  const [theme, setTheme] = useState({color:"#412a6d", glass: false, light: false});
  const themStyle = {
    "--main-color" : theme.color,
    "--background" : theme.light ? "#dddddd" : "#1b1b22",
    "--background-2" : theme.light ? "#c8c8c8" : "#9999b01a",
    "--text-color" : theme.light ? "#32323a" : "#c8c8c8",
    "--text-color-2" : theme.light ? "black" : "white",

  }
  return (
    <BrowserRouter >
      <div className="app" style={themStyle}>
      <Theme.Provider value={{theme, setTheme}}>
          <Setting/>
      </Theme.Provider>
        <Background/>
        <main className='main-app'>
          <Routes>
              <Route path="/" element={<About/>}/>
              <Route path="/portfolio">
                <Route path=''element={<h1>portofolio</h1>}/>
                <Route path=":id" element={<h1>id portofolio</h1>}/>
              </Route>
              <Route path="/skills" element={<Skills/>}/>
              <Route path="/education" element={<h1>education</h1>}/>
              <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </main>
      </div>
      </BrowserRouter>
  )
}

export default App