import React from 'react'
import { Link } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";
import { FaArrowLeft } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import Navbar from '../components/custom/Navbar';
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { MdSpaceDashboard } from "react-icons/md";
import { TbLayoutDashboardFilled } from "react-icons/tb";

const ProjectsPage = () => {
  return (
    <>
     <div>
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <div className="fixed left-0 top-0 -z-10 w-full h-full">
                {/* Dark Theme Background code */}
         <div className="relative h-full w-full bg-black"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div></div> 
  
        <div className=' relative w-full h-screen overflow-x-hidden '> 
          <div className=' '> 
              <Navbar/>
          </div> 
                {/* BACK ARROW  */}
             <div className="  flex  w-fit rounded-sm mt-8  lg:ml-28  ">
               <Link to="/"  className=" text-xl font-bold md:text-3xl flex items-center justify-center ml-3 md:ml-28   gap-2  ">
                  <FaArrowLeft className=" inline md:text-2xl text-white md:mt-2"/>
                  <div className="  text-gray-100 border-b-2 border-orange-600">
                    Back</div>
               </Link>
              </div>            
                        {/* SKILLS SECTION */}
            <div className=' w-full mx-auto mb-36  '>
                  <div className=' w-full md:max-w-4xl lg:max-w-5xl mx-auto'>
                     <h2 className=' mb-12 mt-4  w-fit mx-auto font-bold text-3xl md:text-4xl text-center bg-gradient-to-b from-slate-100 to-gray-500 text-transparent bg-clip-text border-b-2  '
                     > MY PROJECTS</h2>
                    {/* SKILLS CATEGORIES */}
                      <motion.div 
                         initial={{opacity: 0 , x: -100}}
                         animate={{opacity:1 , x: 0}}
                         transition={{duration: 1}}
                      className=' flex flex-col gap-12  md:max-w-2xl mx-2 md:mx-auto'>
                       {/* FULL STACK PROJECTS */}
                       <div className=' flex flex-col '>
                           <div className='w-fit flex gap-1 md:gap-2 items-center justify-center'>
                            <h2 className=' md:pb-3 flex items-center font-semibold text-lg text-gray-300 md:text-2xl border-b-2 border-slate-700'
                            > <RiDashboardHorizontalFill className='inline mr-0.5  md:mr-1.5 text-purple-700 text-xl md:text-3xl'/>
                              MERN  | FULL STACK PROJECTS</h2>
                           </div>
                            <div className=' mx-1 md:mx-4 '>
                              <Link to={"/project/studynotion"}>
                               <div className=' ml-2 md:ml-10 py-4 md:py-4  text-gray-400 hover:text-white font-poppins md:text-2xl   border-b '>
                                StudyNotion an Edtech Platform (LMS)  <GoArrowRight className='inline ml-2 md:ml-6 left-0 '/>
                               </div>
                              </Link>
                              <a href='https://truefeedback.in/ '>
                              {/* <Link to={"/project/foodfusion"}> */}
                               <div className=' ml-2 md:ml-10 py-4 md:py-3  text-gray-400 hover:text-white font-poppins md:text-2xl border-b '>
                                TrueFeedback text Messaging app  <GoArrowRight className='inline ml-2 md:ml-6 left-0 '/>
                               </div>
                              {/* </Link> */}
                              </a>
                            </div>
                        </div>

                          {/* FRONTEND PROJECTS */}
                          <div className=' flex flex-col '>
                           <div className='w-fit flex gap-1 md:gap-2 items-center justify-center'>
                            <h2 className=' md:pb-3 flex items-center font-semibold text-lg text-gray-300 md:text-2xl border-b-2 border-slate-700
                            '><TbLayoutDashboardFilled className='inline mr-0.5  md:mr-1.5 text-red-700 text-xl md:text-3xl'/>
                             REACT/NEXT.JS | FRONTEND-PROJECTS</h2>
                           </div>
                            <div className=' mx-1 md:mx-4 '>
                              <Link to={"/project/foodfusion"}>
                               <div className=' ml-2 md:ml-10 py-4 md:py-4  text-gray-400 hover:text-white font-poppins md:text-2xl   border-b '>
                                FoodFusion a food app <GoArrowRight className='inline ml-2 md:ml-6 left-0 '/>
                               </div>
                              </Link>
                              <Link to={"/project/studynotion"}>
                               <div className=' ml-2 md:ml-10 py-4 md:py-3  text-gray-400 hover:text-white font-poppins md:text-2xl border-b '>
                                WebTube | Kink of youtube   <GoArrowRight className='inline ml-2 md:ml-6 left-0 '/>
                               </div>
                              </Link>
                            </div>
                        </div>

                         {/* Tools and Platforms TECH */}
                         <div className=' flex flex-col '>
                           <div className='w-fit flex gap-1 md:gap-2 items-center justify-center'>
                            <h2 className=' md:pb-3 flex items-center font-semibold text-lg text-gray-300 md:text-2xl border-b-2 border-slate-700
                            '><MdSpaceDashboard className='inline mr-0.5  md:mr-1.5 text-yellow-700 text-xl md:text-3xl'/>
                             REACT & TAILWIND | UI PROJECTS</h2>
                           </div>
                            <div className=' mx-1 md:mx-4 '>
                              <a href='https://brainwave-ui-three.vercel.app/'>
                               <div className=' ml-2 md:ml-10 py-4 md:py-4  text-gray-400 hover:text-white font-poppins md:text-2xl   border-b '>
                                Brainwave A.I  Landing Page <GoArrowRight className='inline ml-2 md:ml-6 left-0 '/>
                               </div>
                              </a>
                              <a href='https://next-music-eight.vercel.app/'>
                               <div className=' ml-2 md:ml-10 py-4 md:py-3  text-gray-400 hover:text-white font-poppins md:text-2xl border-b '>
                                Music App with Aceternity UI   <GoArrowRight className='inline ml-2 md:ml-6 left-0 '/>
                               </div>
                              </a>
                              <a href='https://dark-theme-portfolio-xi.vercel.app/'>
                               <div className=' ml-2 md:ml-10 py-4 md:py-3  text-gray-400 hover:text-white font-poppins md:text-2xl border-b '>
                                Dark Theme Portolio UI  <GoArrowRight className='inline ml-2 md:ml-6 left-0 '/>
                               </div>
                              </a>
                              
                            </div>
                        </div>

                        
                          
                      </motion.div>
                  </div>

              </div>
              
              
            </div>
          
    </div>
     </>
  )
}

export default ProjectsPage