import React from 'react'

const About = () => {
  return (
      <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-gray-400'>About</p>

            </div>
              <p className='text-xl mt-20'>
                  I am a web developer, working in both, backend and frontend programming. Excited for improving my skills and learning new technologies. I'm open to learn and work with any web technology and currently looking for an internship.
              </p>
              <br />
              <p className='text-xl'>
                  I like to code matters from scratch and love the idea of bringing thoughts to life. Connect with me to get your project done.
                  I value minimalistic designs, thoughtful branding of the content, and customer relatable experience. Let’s discover together how we can make your project convert better!
                  I enjoy creating or redesigning a distinct identity for a product or service.
              </p>

          </div>
        

    </div>
  )
}

export default About