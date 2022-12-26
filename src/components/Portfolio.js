import React from 'react'
import registry  from '../assets/portfolio/registry.png'
import movies from '../assets/portfolio/movies.png'
import project from '../assets/portfolio/project4.png'
import realestate from '../assets/portfolio/realestate.png'
import library from '../assets/portfolio/library.png'
import agriplus from '../assets/portfolio/agriplus.png'
const Portfolio = () => {
    const portfolios = [
        {
            id:1,
            src: agriplus
        },
        {
            id: 2,
            src: realestate
        },
        {
            id: 3,
            src: registry
        },
        {
            id: 4,
            src: movies
        },
        {
            id: 5,
            src: library
        },
        {
            id: 6,
            src: project
        },
    ]
  return (
    
      <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Portfolio</p>
                  <p className='py-7'>some of my work projects</p>
              </div>

             
              <div>
                  <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                      {portfolios.map(({ id, src }) => (
                       
                          <div key={id} className='shadow-md shadow-gray-700 rounded-lg'>
                              <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
                              <div className='flex items-center justify-center'>
                                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Link</button>
                                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                              </div>

                          </div>
                      ))}


                      
                      
                      
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio