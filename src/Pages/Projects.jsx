import React from 'react'
import './Projects.scss'
import { usePageStore } from '../Store'

function Projects() {
  const projects = usePageStore(state => state.projects)
  return (
    <div className={projects ? 'Projectss':'Projects-hidd'}>This Is Projects</div>
  )
}

export default Projects