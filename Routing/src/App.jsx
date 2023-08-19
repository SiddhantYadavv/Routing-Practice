import React from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import About from './components/about'
import Contact from './components/contact'
import Main from './components/Main'

function App() {
  return (
    <BrowserRouter>

      <div>
      <Navbar/>
    </div>
    
    <Routes>
          <Route path='/main' element={<Main/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App