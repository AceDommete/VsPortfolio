import React from 'react'
import {VscSourceControl} from 'react-icons/vsc'
import {VscError} from 'react-icons/vsc'
import {VscWarning} from 'react-icons/vsc'
import {FaReact} from 'react-icons/fa'
import {VscCheckAll} from 'react-icons/vsc'
import {VscBellDot} from 'react-icons/vsc'
import './Footer.scss'
function Footer() {
  return (
    <div className='Footer'>
        <VscSourceControl size={15} className='mastericon'/><p className='mainicontext'>main</p>
        <VscError size={15} className='footererroricon'/><p className='footererroricontext'>0</p>
        <VscWarning size={15} className='footerwarnicon'/><p className='footerwarnicontext'>0</p>
        <FaReact size={15} className='poweredbyreacticon'/><p className='poweredbyreacttext'>Powered By React.js</p>
        <VscCheckAll size={15} className='footerprettiericon'/><p className='footerprettiericontext'>Prettier</p>
        <VscBellDot size={15} className='footerbellicon'/>
    </div>
  )
}

export default Footer