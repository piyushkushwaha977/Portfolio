import React from 'react'
import { Link } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";
import { FaArrowLeft } from 'react-icons/fa6';

const ProjectsPage = () => {
  return (
    <div className=' fixed h-full w-full top-0 left-0 -z-10'> 
      <div className="absolute top-0 z-[-2] h-screen w-screen  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className=' w-full h-full overflow-x-hidden '>  
             <div className="  flex  w-fit rounded-sm py-6 mt-8  ">
               <Link to="/"  className=" text-xl font-bold md:text-3xl flex items-center justify-center ml-3 md:ml-32   gap-2  ">
                  <FaArrowLeft className=" inline md:text-2xl text-white md:mt-2"/>
                  <div className="  text-gray-100 border-b-2 border-orange-600">
                    Back</div>
               </Link>
              </div>            
                        {/* SKILLS SECTION */}
            <div className=' w-full mx-auto mb-36  '>
                  <div className=' w-full md:max-w-4xl lg:max-w-5xl mx-auto'>
                     <h2 className=' mb-16 mt-4  w-fit mx-auto font-bold text-3xl md:text-4xl text-center bg-gradient-to-b from-slate-300 to-purple-500 text-transparent bg-clip-text border-b-2  '
                     > MY PROJECTS</h2>
                    {/* SKILLS CATEGORIES */}
                      <div className=' flex flex-col gap-12  md:max-w-2xl mx-2 md:mx-auto'>
                       {/* FRONTEND SKILLS */}
                       <div className=' flex flex-col '>
                           <div className='w-fit flex gap-1 md:gap-2 items-center justify-center'>
                            <h2 className=' md:pb-3 font-semibold text-lg text-gray-300 md:text-2xl border-b-2 border-slate-700'
                            >  MERN  | FULL STACK PROJECTS</h2>
                           </div>
                            <div className=' mx-1 md:mx-4 '>
                              <Link to={"/project/studynotion"}>
                               <div className=' ml-2 md:ml-10 py-4 md:py-4  text-gray-400 hover:text-white font-poppins md:text-2xl   border-b '>
                                StudyNotion an Edtech Platform (LMS)  <GoArrowRight className='inline ml-2 md:ml-6 left-0 '/>
                               </div>
                              </Link>
                              <Link to={"/project/foodfusion"}>
                               <div className=' ml-2 md:ml-10 py-4 md:py-3  text-gray-400 hover:text-white font-poppins md:text-2xl border-b '>
                                TrueFeedback text Messaging app  <GoArrowRight className='inline ml-2 md:ml-6 left-0 '/>
                               </div>
                              </Link>
                            </div>
                        </div>

                          {/* BACKEND SKILLS */}
                          <div className=' flex flex-col '>
                           <div className='w-fit flex gap-1 md:gap-2 items-center justify-center'>
                            <h2 className=' md:pb-3 font-semibold text-lg text-gray-300 md:text-2xl border-b-2 border-slate-700
                            '> REACT/NEXT.JS | FRONTEND-PROJECTS</h2>
                           </div>
                            <div className=' mx-1 md:mx-4 '>
                              <Link to={"/project/studynotion"}>
                               <div className=' ml-2 md:ml-10 py-4 md:py-4  text-gray-400 hover:text-white font-poppins md:text-2xl   border-b '>
                                StudyNotion an Edtech Platform (LMS)  <GoArrowRight className='inline ml-2 md:ml-6 left-0 '/>
                               </div>
                              </Link>
                              <Link to={"/project/truefeedback"}>
                               <div className=' ml-2 md:ml-10 py-4 md:py-3  text-gray-400 hover:text-white font-poppins md:text-2xl border-b '>
                                TrueFeedback text Messaging app  <GoArrowRight className='inline ml-2 md:ml-6 left-0 '/>
                               </div>
                              </Link>
                            </div>
                        </div>

                         {/* Tools and Platforms TECH */}
                         <div className=' flex flex-col '>
                           <div className='w-fit flex gap-1 md:gap-2 items-center justify-center'>
                            <h2 className=' md:pb-3 font-semibold text-lg text-gray-300 md:text-2xl border-b-2 border-slate-700
                            '>  MERN  | FULL STACK PROJECTS</h2>
                           </div>
                            <div className=' mx-1 md:mx-4 '>
                              <Link to={"/project/studynotion"}>
                               <div className=' ml-2 md:ml-10 py-4 md:py-4  text-gray-400 hover:text-white font-poppins md:text-2xl   border-b '>
                                StudyNotion an Edtech Platform (LMS)  <GoArrowRight className='inline ml-2 md:ml-6 left-0 '/>
                               </div>
                              </Link>
                              <Link to={"/project/truefeedback"}>
                               <div className=' ml-2 md:ml-10 py-4 md:py-3  text-gray-400 hover:text-white font-poppins md:text-2xl border-b '>
                                TrueFeedback text Messaging app  <GoArrowRight className='inline ml-2 md:ml-6 left-0 '/>
                               </div>
                              </Link>
                            </div>
                        </div>

                        
                          
                      </div>
                  </div>

              </div>
              
              
            </div>
          
    </div>
  )
}

export default ProjectsPage