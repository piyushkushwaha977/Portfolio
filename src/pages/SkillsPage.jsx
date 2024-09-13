import { TbBrandReact } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { GrTechnology } from "react-icons/gr";
import Navbar from "../components/custom/Navbar";
// import { FaArrowLeft } from "react-icons/fa6";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SkillsPage = () => {
  return (
          <div className=" fixed h-full w-full top-0 left-0 -z-10">
              <div className="absolute top-0 z-[-2] h-screen w-screen  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                  {/* SKILLS SECTION */}
                  
                  <Navbar/>
                  
            <div className=' w-full max-w-7xl  mx-auto mt-16 md:mt-[6rem]  h-screen overflow-y-scroll '>

            {/* <div className=" flex  w-fit rounded-sm py-2 mb-6  ">
               <Link to="/"   className=" text-xl text-white font-bold md:text-3xl flex items-center justify-center ml-3 md:36  gap-2  ">
                  <FaArrowLeft className=" inline md:text-2xl black md:mt-2"/>
                  <div className="  text-gray-100 border-b-2 border-red-600">
                    Back</div>
               </Link>
              </div> */}

                  <div className=' w-full md:max-w-5xl mx-auto'>
                     <h2 className=' mb-20 font-bold text-3xl md:text-5xl text-center bg-gradient-to-b from-slate-100 to-gray-500 text-transparent bg-clip-text'
                     > MY SKILLS</h2>
                    {/* SKILLS CATEGORIES */}
                      <div className=' flex flex-col gap-12 md:gap-16 mx-2'>
                       {/* FRONTEND SKILLS */}
                       <motion.div
                         whileInView={{opacity: 1 , x:0}}
                         initial={{opacity:0 , x:100}}
                         transition={{duration: 1}}
                        className=' flex flex-col  '>
                           <div className='w-fit flex gap-1 md:gap-2 items-center justify-center'>
                           <TbBrandReact className=' font-bold text-2xl text-blue-300 md:text-4xl'/>
                            <h2 className=' font-semibold text-xl md:text-3xl border-b-2 text-white border-purple-700'>  FRONT-END</h2>
                           </div>
                            <div className=' ml-6 md:ml-20 py-2 md:py-4 lg:py-6  font-poppins  md:text-[22px] lg:text-[27px] text-gray-400 border-b border-slate-600 '>
                                Javascript, React, Redux, Tailwind, Typescript, Nextjs, HTML/CSS
                            </div>
                            {/*  We can Add more skills in future
                            <div className=' ml-6 md:ml-20  md:py-6 font-poppins text-md md:text-[22px] lg:text-[27px] border-b border-black'>
                                Javscript, React, Redux, Tailwind, Typescript, Nextjs, HTML/CSS, Redux
                            </div> */}
                          
                         </motion.div>

                          {/* BACKEND SKILLS */}
                        <motion.div
                         whileInView={{opacity: 1 , x: 0}}
                         initial={{opacity: 0 , x: -100}}
                         transition={{duration: 1 }}
                           className=' flex flex-col '>
                           <div className='w-fit flex gap-1 md:gap-2 items-center justify-center'>
                             <FaCode className='font-bold text-teal-500 text-2xl md:text-4xl'/>
                            <h2 className=' font-semibold text-xl text-white md:text-3xl border-b-2 border-orange-700'> 
                             BACKEND-END</h2>
                           </div>
                            <div className='ml-6 md:ml-20 py-2 md:py-4 lg:py-6  font-poppins text-md md:text-[22px] lg:text-[27px] text-gray-400 border-b border-slate-600'>
                                Node, Express, MongoDB, Postman, RESTful APIs, Firebase
                            </div>
                          
                         </motion.div>

                         {/* Tools and Platforms TECH */}
                         <motion.div
                         whileInView={{opacity: 1 , x: 0}}
                         initial={{opacity: 0 , x: 100}}
                         transition={{duration: 1}}
                          className=' flex flex-col '>
                           <div className='w-fit flex gap-1 md:gap-2 items-center justify-center'>
                           <GrTechnology className=' font-bold text-2xl md:text-4xl text-orange-600'/>
                            <h2 className=' font-semibold text-xl md:text-3xl text-white border-b-2  border-green-700 uppercase'> 
                            Tools & Platforms <VscVscodeInsiders className=' text-blue-500 inline font-bold text-2xl md:text-4xl'/></h2>
                           </div>
                            <div className=' ml-6 md:ml-20 py-2 md:py-4 lg:py-6  font-poppins text-md md:text-[22px] lg:text-[27px]  text-gray-400 border-b border-slate-600'>
                                 Git, Github, Postman, VsCode, Developer-tools, Vite, NPM ... 
                            </div>
                          
                         </motion.div>
                          
                      </div>
                  </div>

              </div>
             
    </div>
  )
}

export default SkillsPage