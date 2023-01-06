import React from 'react'
import './About.scss'
import { usePageStore } from '../Store'

function About() {
  const about = usePageStore(state => state.about)
  console.log(about)
  return (
    <div className={about ? 'About':'About-hidd'}>
    This Is About Page
    </div>
  )
}

export default About