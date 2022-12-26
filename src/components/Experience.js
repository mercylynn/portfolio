import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import github from '../assets/github.png'
import ruby from '../assets/ruby.png'
const Experience = () => {

    const technologies = [
        {
            id:1,
            src:html,
            title:'html'
        },
        {
            id: 2,
            src: css,
            title: 'css'
        },
        {
            id: 3,
            src: javascript,
            title: 'javascript'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React'
        },
        {
            id: 5,
            src: github,
            title: 'Github'
        },
        {
            id: 5,
            src: ruby,
            title: 'Ruby On Rails'
        },
    ]
  return (
      <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen-lg '>

          <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-screen text-white'>
        <div>
                  <p className='text-4xl font-bold border-b-4 border-gray-400 p-1 inline'>Experience</p>
                  <p className='py-7'>Technologies i have worked with</p>
        </div>

              <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                  {technologies.map(({ id, src, title })=>(
                      <div key={id} className='shadow-md shadow-white hover:scale-105 duration-500 py-2 rounded-lg'>
                          <img src={src} alt='' className='w-20 mx-auto' />
                          <p className='mt-4'>{title}</p>
                      </div>

                ))}
                  
        </div>
       </div>



    </div>
  )
}

export default Experience