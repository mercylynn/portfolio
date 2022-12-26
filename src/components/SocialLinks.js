import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from "react-icons/bs"

function SocialLinks() {
    const links = [
        {
            id:1,
            child:(
                <>Linkedin <FaLinkedin size={30} /></>

            ),
            href:'http://www.linkedin.com/in/mercy-kamene',
            style:'rounded-tr-md'
        },
        {
        id: 2,
        child: (
            <>Github <FaGithub size={30} /></>

        ),
            href: 'https://github.com/mercylynn',
       
        },
        {
            id: 3,
            child: (
                <>Mail <HiOutlineMail size={30} /></>

            ),
            href: 'mailto:mercykmualuko@gmail.com',
            
        },
        {
            id: 4,
            child: (
                <>Resume <BsFillPersonLinesFill size={30} /></>

            ),
            href: '/resume.pdf',
            style: 'rounded-br-md',
            download: true
        },
    ]


  return (
      <div className='hidden lg:flex flex-col top-[37%] left-0 fixed'>
        <ul>
              {links.map(({id, child,href,style,download}) =>(

                  <li key={id} className={'flex justify-between items-center w-40 h-14 bg-black ml-[-100px] hover:ml-[-2px] hover:rounded-md duration-200' + " " + style }>
                    <a href={href} 
                  className='flex justify-between items-center w-full text-white'
                      download = {download}
                      target = '_blank'
                     rel="noreferrer">
                   {child}
                   </a></li>

              ) )}
              
        </ul>
    </div>
  )
}

export default SocialLinks