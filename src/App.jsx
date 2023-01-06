import {React, useState, useEffect } from 'react'
import './App.scss'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Subnav from './components/Subnav'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Github from './Pages/Github'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
function App() {
  const [loadingScreen, setLoading] = useState(false);
  
  return (
    <div className={loadingScreen ? 'App-hidden': 'App'}>
      <Navbar/>
      <Subnav/>
      <Sidebar/>
      <Home />
      <About/>
      <Contact/>
      <Projects/>
      <Github/>
      <Footer/>
    </div>
  )
}
export default App
