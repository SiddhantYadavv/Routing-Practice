import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    
    <div className='navbar'>

        <Link to="/main">Main</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> 
        
    </div>
  )
}

export default Navbar