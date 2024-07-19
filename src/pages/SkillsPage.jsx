import { TbBrandReact } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { GrTechnology } from "react-icons/gr";
// import { FaArrowLeft } from "react-icons/fa6";
// import { Link } from "react-router-dom";
import Footer from "../components/custom/Footer";
import Navbar from "../components/custom/Navbar";
import { motion } from "framer-motion";

const SkillsPage = () => {
  return (
          <div className=" h-full w-full">
              <Navbar/>
                           {/* SKILLS SECTION */}
            <div className=' w-full mx-auto mt-20 md:mt-[10rem] h-[35rem] md:h-[50rem] '>
                  <div className=' w-full md:max-w-5xl mx-auto'>
                     <h2 className=' mb-20 font-bold text-3xl md:text-5xl text-center text-gray-900'> MY SKILLS</h2>
                    {/* SKILLS CATEGORIES */}
                      <div className=' flex flex-col gap-12 md:gap-16 mx-2'>
                       {/* FRONTEND SKILLS */}
                       <motion.div
                         whileInView={{opacity: 1 , x:0}}
                         initial={{opacity:0 , x:100}}
                         transition={{duration: 1}}
                        className=' flex flex-col  '>
                           <div className='w-fit flex gap-1 md:gap-2 items-center justify-center'>
                           <TbBrandReact className=' font-bold text-2xl md:text-4xl'/>
                            <h2 className=' font-semibold text-xl md:text-3xl border-b-2 border-purple-700'>  FRONT-END</h2>
                           </div>
                            <div className=' ml-6 md:ml-20 py-2 md:py-4 lg:py-6  font-poppins text-md md:text-[22px] lg:text-[27px] border-b border-black '>
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
                         initial={{opacity: 0 , x: 100}}
                         transition={{duration: 1 }}
                           className=' flex flex-col '>
                           <div className='w-fit flex gap-1 md:gap-2 items-center justify-center'>
                             <FaCode className='font-bold text-2xl md:text-4xl'/>
                            <h2 className=' font-semibold text-xl md:text-3xl border-b-2 border-orange-700'> 
                             BACKEND-END</h2>
                           </div>
                            <div className='ml-6 md:ml-20 py-2 md:py-4 lg:py-6  font-poppins text-md md:text-[22px] lg:text-[27px] border-b border-black'>
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
                           <GrTechnology className=' font-bold text-2xl md:text-4xl'/>
                            <h2 className=' font-semibold text-xl md:text-3xl border-b-2 border-green-700 uppercase'> 
                            Tools & Platforms <VscVscodeInsiders className=' inline font-bold text-2xl md:text-4xl'/></h2>
                           </div>
                            <div className=' ml-6 md:ml-20 py-2 md:py-4 lg:py-6  font-poppins text-md md:text-[22px] lg:text-[27px] border-b border-black'>
                                 Git, Github, Postman, VsCode, Developer-tools, Vite, NPM ... 
                            </div>
                          
                         </motion.div>
                          
                      </div>
                  </div>

              </div>
              <div>
               <Footer/>
              </div>
    </div>
  )
}

export default SkillsPage