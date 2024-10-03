import React from 'react'
import { motion } from 'framer-motion'

const ProjectSection = ({name, description, image}) => {
  
 const TechList = ["React", "nodejs" , "express" , "NextJs" , "Firebase" , "Redux" , "Cloudinary" ,"Appwrite", "nodejs"  ]

  return (
  <motion.div
    initial={{opacity: 0 , x: 100}}
    whileInView={{opacity:1 , x: 0}}
    transition={{duration: 1.5}} 
    className=' mb-[10rem] md:mb-[14rem]' > 
    <h2 className='p-2 lg:p-0  font-poppins text-center text-2xl text-neutral-200 md:text-3xl lg:text-5xl  border-b-neutral-600 border-b-2 md:border-b-[4px] w-fit mx-auto'
    >{name}</h2>
    <div className=' backdrop:blur-md bg-black/30 mb-24 mx-2 md:mx-8  mt-8  md:mt-16 md:max-h-[36rem] md:max-w-[60rem] lg:max-h-[44rem] lg:max-w-[84rem] rounded-lg md:rounded-[25px] flex flex-col-reverse lg:flex-row lg:mx-auto shadow-2xl shadow-gray-900  '>
      <div className='rounded-lg  md:rounded-[20px] flex flex-col gap-2  md:gap-6 p-4 lg:p-0 justify-center  lg:w-[35%] text-white '>
        <div className=' w-8/12 mx-auto hidden md:flex text-center text-2xl md:text-3xl lg:text-4xl font-poppins gap-2 items-center justify-center '>
          <span className=' w-[4px]  h-8 md:h-10  rounded-lg bg-red-600'></span>
            {name}</div>

        <div className=' px-2 md:px-12 text-center text-xs md:text-[15px] text-neutral-400 mx-auto tracking-wide font-poppins'>
          {description}
        </div>

        <div className=' flex justify-center items-center md:w-8/12 mx-auto px-2  '>
           <div className=' w-[4px] h-16 md:h-20 lg:h-28 rounded-lg bg-gradient-to-b from-neutral-700 via-neutral-600 to-neutral-800'></div>
                <div
                     initial={{opacity: 0 , x: -100}}
                     whileInView={{opacity:1 , x: 0}}
                     transition={{duration: 1.2}} 
                     className=" w-full my-2 mx-2 flex gap-1 md:gap-2 flex-wrap">

                      {TechList.map( (name,index) => (
                        <div            
                         key={index}
                        className=" w-fit cursor-pointer text-xs md:text-sm  text-neutral-400 font-semibold px-2 md:px-2 py-0.5 pb-0.5 rounded-lg
                         transition-all duration-200 hover:text-white hover:scale-105 bg-neutral-900 "
                        >{name}</div>
                      ))}
                    
                  </div>
        </div>
      </div>
        
      <div className=' lg:aspect-square sm:h-[240px] md:h-[500px] lg:h-[44rem]  lg:w-[66%] '>
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