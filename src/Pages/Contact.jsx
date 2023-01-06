import React from 'react'
import './Contact.scss'
import { usePageStore } from '../Store'

function Contact() {
  const contact = usePageStore(state => state.contact)
  console.log(contact)
  return (
    <div className={contact ? 'Contect':'Contect-hidd'}>This Is Contact Page</div>
  )
}

export default Contact