import React from 'react'
import Navbar from '../components/Navbar'
import { Form } from 'react-router-dom'
import Contact from '../components/contact'

function Contacts() {
  return (
    <>
     <div className='dark:bg-slate-900 dark:text-white'>
        <Navbar/>
        <div className='min-h-screen '>
          <Contact/>
        </div>
     </div>
    </>
    
  )
}

export default Contacts