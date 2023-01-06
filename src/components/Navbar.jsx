import React from 'react'
import './Navbar.scss'
function Navbar() {
  return (
    <div className='Navbar'>
        <a href="/"><img src="./favicon.png" alt="" id='logo-nav'/></a>
            <p className='filenav'>File</p>
            <p className='editnav'>Edit</p>
            <p className='viewnav'>View</p>
            <p className='gonav'>Go</p>
            <p className='runnav'>Run</p>
            <p className='terminalnav'>Terminal</p>
            <p className='helpnav'>Help</p>
            <span id='center-nav'>Neek Kafle - Visual Studio Code</span>
            <span className="circleYellow"></span>
            <span className="circleGreen"></span>
            <span className="circleRed"></span>
    </div>
  )
}

export default Navbar