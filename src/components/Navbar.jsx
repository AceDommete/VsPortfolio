import React from 'react'
import './Navbar.scss'
function Navbar() {
  return (
    <div className='Navbar'>
        <a href="/"><img src="./favicon.png" alt="" id='logo-nav'/></a>
            <p>File</p>
            <p>Edit</p>
            <p>View</p>
            <p>Go</p>
            <p>Run</p>
            <p>Terminal</p>
            <p>Help</p>
            <span id='center-nav'>Neek Kafle - Visual Studio Code</span>
            <span className="circleYellow"></span>
            <span className="circleGreen"></span>
            <span className="circleRed"></span>
    </div>
  )
}

export default Navbar