import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Contact</p>
          <p className='py-7'>Get in Touch</p>
            </div>
            <div className='flex justify-center items-center'>
          <form action='https://getform.io/f/f2851f94-13d4-41a7-bcc7-8e446de370e6' method='POST' className='flex flex-col w-full md:w-1/2'>
            <input type='text' name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
            <input type='text' name='email' placeholder='Enter your email' className='p-2 bg-transparent my-4 border-2 rounded-md text-white focus:outline-none' />
            <textarea name='message' rows='10'placeholder='Enter your message ' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
            <button className='text-white bg-gradient-to-b from-cyan-400 to-blue-400 px-6 py-4 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-200'>Submit</button>

              </form>
            </div>
        </div>
    </div>
  )
}

export default Contact