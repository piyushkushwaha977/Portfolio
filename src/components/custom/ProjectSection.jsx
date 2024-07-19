import React from 'react'
import { motion } from 'framer-motion'

const ProjectSection = ({name, description, image}) => {

  return (
  <motion.div
    initial={{opacity: 0 , x: -100}}
    whileInView={{opacity:1 , x: 0}}
    transition={{duration: 0.8}} > 
    <h2 className='p-2 lg:p-0 text-center text-2xl md:text-3xl lg:text-4xl  border-b-orange-600 border-b-[4px] rounded-md w-fit mx-auto'>{name}</h2>
    <div className='mb-24 mx-2 md:mx-8 bg-black mt-8  md:mt-16 md:max-h-[36rem] md:max-w-[60rem] lg:max-h-[44rem] lg:max-w-[94rem] rounded-lg md:rounded-[25px] flex flex-col-reverse lg:flex-row lg:mx-auto shadow-2xl shadow-gray-500  '>
      <div className='rounded-lg  md:rounded-[20px] flex flex-col gap-2  md:gap-6 p-4 lg:p-0 justify-center bg-[#151514] lg:w-[35%] text-white '>
        <div className=' text-center text-2xl md:text-3xl lg:text-5xl font-bold flex gap-2 items-center justify-center '>
          <span className=' w-[3px]  h-8 md:h-10 rounded-lg bg-red-600'></span>
            {name}</div>
        <div className=' text-center text-[12px] md:text-[15px] md:max-w-[60%] text-gray-400 mx-auto font-poppins'>
              {description}</div>
      </div>
        
      <div className=' lg:aspect-square  sm:h-[240px] md:h-[500px] lg:h-[44rem] md:w-[]  lg:w-[66%] '>
        <img 
        className='w-full h-[240px] md:h-[400px] lg:h-[44rem] rounded-lg md:rounded-[25px]'
          src={image}
          alt={name}/>
      </div>  
    </div>
 </motion.div>
  )
}

export default ProjectSection