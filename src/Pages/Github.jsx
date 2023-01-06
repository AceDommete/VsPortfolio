import React from 'react'
import './Github.scss'
import { usePageStore } from '../Store'

function Github() {
  const github = usePageStore(state => state.githubb)
  return (
    <div className={github ? 'Githubb' : 'Githubb-hidd'}>This Is Git Page!</div>
  )
}

export default Github