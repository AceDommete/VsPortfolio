import React from 'react'
import './Navbar.scss'
function Navbar() {
  return (
    <div className='Navbar'>
        <a href="/"><img src="../public/favicon.png" alt="" id='logo-nav'/></a>
            <p>File</p>
            <p>Edit</p>
            <p>View</p>
            <p>Go</p>
            <p>Run</p>
            <p>Terminal</p>
            <p>Help</p>
    </div>
  )
}

export default Navbar