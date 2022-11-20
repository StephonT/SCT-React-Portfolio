import React from 'react'
import CSS from '../assets/images/css.png'
import Github from '../assets/images/github.png'
import HTML from '../assets/images/html.png'
import JavaScript from '../assets/images/javascript.png'
import MongoDB from '../assets/images/mongo.png'
import Node from '../assets/images/node.png'
import ReactImg from '../assets/images/react.png'

const Skills = () => {
  return (
    <div name= 'skills' className='bg-[#0a192f] text-slate-300'>
        {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
            <p className="text-4xl font-bold inline border-b-4 border-amber-300">Experience</p>
            <p className='py-4'>Technologies I have experience in:</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#40C16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={HTML} alt="Html icon" /> 
              <p className='my-4'>HTML</p> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills