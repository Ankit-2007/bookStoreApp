import React from 'react'

function Contact() {
  return (
    <div className=' flex items-center justify-center min-h-screen '>
  <div className='text-left w-full max-w-[400px]'>
    <h1 className='font-bold text-3xl mb-6'>Contact Us</h1>
    
    <form className='space-y-4'>
      <div>
        <label className='block font-medium'>Name</label>
        <input 
          type="text" 
          placeholder="Enter your full name" 
          className='w-full px-3 py-2 border rounded-md outline-none' 
        />
      </div>

      <div>
        <label className='block font-medium'>Email</label>
        <input 
          type="email" 
          placeholder="Enter your email" 
          className='w-full px-3 py-2 border rounded-md outline-none' 
        />
      </div>

      <div>
        <label className='block font-medium'>Message</label>
        <textarea 
          placeholder="Enter your message" 
          className='w-full px-3 py-2 border rounded-md outline-none h-24 resize-none'
        />
      </div>

      <button 
        type="submit" 
        className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>
        Submit
      </button>
    </form>
  </div>
</div>
  )
}

export default Contact