import React from 'react'
import hero from '../assets/heroimage.jpeg'
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm Mercy kamene a Full stack developer</h2>
          <p className='text-gray-400 py-4 max-w-md'>currently am working on web development on the following technologies JavaSript|ReactJS|Ruby|Ruby on Rails</p>
        
        <div>
            <Link to='portfolio' smooth duration={400} className='text-white w-fit px-7 my-2 flex items-center rounded-md bg-gradient-to-r from-slate-500 to-blue-500 cursor-pointer'>portfolio
          </Link>
            {/* <button className='text-white w-fit px-7 my-2 flex items-center rounded-md bg-gradient-to-r from-slate-500 to-blue-500 cursor-pointer'>
            portfolio

          </button> */}
        </div>
        </div>

        <div>
          <img src={hero} alt='my profile' className='mx-auto w-2/3 h-1/3 rounded-2xl '/>
        </div>
      </div>
    </div>
)}

export default Home