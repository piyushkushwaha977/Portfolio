import ProjectSection from '../components/custom/ProjectSection';
import Navbar from '../components/custom/Navbar';
import Footer from '../components/custom/Footer';
import { motion } from 'framer-motion';
import { TbBrandReact } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { GrTechnology } from "react-icons/gr";
import studynotion from "../assets/projectImages/studynotion.png"
import foodfusion from "../assets/projectImages/foodfusion.png"
import myStudyNotionImg from "../assets/projectImages/MyStudyNotion.png"
import { FaXTwitter } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { Spotlight } from '../components/ui/Spotlight';
import { Links } from '../data/links';

const description = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."

const HomePage = () => {
 
    const HelloMessage = "HI!, IM PIYUSH"
   
  return (
    <div className=''>
        <div className="fixed left-0 top-0 -z-10 w-full h-full">
          <div className=' relative h-full w-full bg-white'>
            <div className="absolute bottom-0 left-0 right-0 top-0  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          </div>
        </div> 
          
          <div className=' relative h-screen w-full '>
 
            {/* SPOTLIGHT EFFECT */}
            <Spotlight
              className=" top-10 left-0 md:left-60 md:-top-20 "
              fill="blue"
              />
             {/* NAVBAR */}
               <Navbar/>
             {/* SOME BG GRADIENTS TWEAK */}
            {/* <div className=' hidden lg:block absolute h-20 w-28  md:h-[500px] md:w-[500px] bg-purple-200 rounded-full blur-3xl md:blur-[150px] md:top-4 md:right-3 '></div>
            <div className='hidden lg:block absolute md:h-[500px] md:w-[500px] bg-slate-300 rounded-lg blur-[150px] bottom-0 left-0 '></div> */}
             {/* MAIN SECTION */}
            <div className=' w-full mx-auto'>
                <p className='mt-36 mb-6 md:mb-8 text-5xl md:text-7xl font-semibold text-center bg-gradient-to-b from-black to-purple-950 text-transparent bg-clip-text'
                  > { HelloMessage.split('').map( (char,index) => (
                    <motion.span
                    key={index}
                    initial={{opacity: 0 , y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, delay: index * 0.15}}>
                      {char}
                    </motion.span>
                  )) }  
                </p>
                <motion.p
                 initial={{opacity: 0 , x: -100}}
                 animate={{opacity:1 , x: 0}}
                 transition={{duration: 0.8}}
                 className=' font-poppins text-center text-gray-800 md:text-2xl md:w-[50rem] sm:px-3 mx-auto'>
                <span className=' underline font-bold text-black'>A Full-Stack developer</span> and A Knowledge Acquisition Specialist with a knack for creating Seamless, User-friendly Web applications. Specialize in both 
                <span className='underline font-bold text-black'> Front-end & Back-end Development</span>,
                 ensuring a cohesive and efficient user experience from start to finish.
                </motion.p> 

                <motion.div
                 initial={{opacity: 0 , x: -100}}
                 animate={{opacity:1 , x: 0}}
                 transition={{duration: 0.8}}
                 className='mt-10  mb-4 md:my-8 w-fit mx-auto flex gap-1 md:gap-7 text-black text-3xl border-b pb-2 border-teal-950 '> 
                  <a  href={Links.twitter}
                  className=' border-r-2 p-2 md:pr-4 border-teal-950'
                  ><FaXTwitter className=' hover:text-gray-900 ' />
                  </a> 

                  <a  href={Links.linkedin}
                  className=' border-r-2 p-2 md:pr-4 border-teal-950'
                  ><BsLinkedin className='hover:text-gray-900  '/>
                  </a> 

                  <a  href={Links.github}
                  className=' border-r-2 p-2 md:pr-4 border-teal-950'
                  ><VscGithubInverted className='hover:text-gray-900'/>
                  </a> 

                  <a  href={Links.instagram}
                  className=' p-2 '
                  ><FaInstagram className='hover:text-gray-900'/>
                  </a> 
               
                </motion.div>

          {/* Button for project */}
            <motion.a
             initial={{opacity: 0 , x: -50}}
             animate={{opacity:1 , x: 0}}
             transition={{duration: 1}}
               href="#projects" className=" w-fit mx-auto flex items-center  gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800
              to-black px-4 py-2 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-orange-300 ">
                 See my Projects 
                 <FaArrowCircleDown className=' text-xl'/>
            </motion.a>
          
          <motion.div 
           initial={{ y: 50}}
           animate={{ y: 0  }}
           transition={{duration: 3, repeat:Infinity}}
          >
          <FaArrowCircleDown className=' mt-24 mb-28  md:mt-20 lg:mt-40 text-3xl w-fit mx-auto'/>
          </motion.div>
            </div>


              {/* PROJECT SECTION */}
          <section id='projects'>
            <div  className=' w-full md:mt-[12rem] overflow-x-hidden'>

              <h2 className=' mx-2 text-center text-xl md:text-3xl lg:text-5xl border-b border-blue-900 max-w-7xl lg:mx-auto py-4 mb-12 shadow-sm shadow-gray-400 rounded-md
               bg-gradient-to-r from-[#020617] to-purple-800 text-transparent bg-clip-text'
              >MY WORK | SOME FEATURED PROJECTS</h2>

                <ProjectSection name={"StudyNotion"} description={description} image={myStudyNotionImg} />
                <ProjectSection name={"FoodFusion"} description={description} image={foodfusion} />
                <ProjectSection name={"TrueFeedback"} description={description} image={studynotion} />
            </div>
          </section>

                {/* SKILLS SECTION */}
            <div className=' w-full mx-auto mt-20 md:mt-[10rem] h-[35rem] md:h-[50rem] '>
                  <div className=' w-full md:max-w-5xl mx-auto'>
                     <h2 className=' mb-20 font-bold text-3xl md:text-5xl text-center text-gray-900'> MY SKILLS</h2>
                    {/* SKILLS CATEGORIES */}
                      <div className=' flex flex-col gap-12 md:gap-16 mx-2'>
                       {/* FRONTEND SKILLS */}
                       <div className=' flex flex-col  '>
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
                          
                         </div>

                          {/* BACKEND SKILLS */}
                          <div className=' flex flex-col '>
                           <div className='w-fit flex gap-1 md:gap-2 items-center justify-center'>
                             <FaCode className='font-bold text-2xl md:text-4xl'/>
                            <h2 className=' font-semibold text-xl md:text-3xl border-b-2 border-orange-700'> 
                             BACKEND-END</h2>
                           </div>
                            <div className='ml-6 md:ml-20 py-2 md:py-4 lg:py-6  font-poppins text-md md:text-[22px] lg:text-[27px] border-b border-black'>
                                Node, Express, MongoDB, Postman, RESTful APIs, Firebase
                            </div>
                          
                         </div>

                         {/* Tools and Platforms TECH */}
                         <div className=' flex flex-col '>
                           <div className='w-fit flex gap-1 md:gap-2 items-center justify-center'>
                           <GrTechnology className=' font-bold text-2xl md:text-4xl'/>
                            <h2 className=' font-semibold text-xl md:text-3xl border-b-2 border-green-700 uppercase'> 
                            Tools & Platforms <VscVscodeInsiders className=' inline font-bold text-2xl md:text-4xl'/></h2>
                           </div>
                            <div className=' ml-6 md:ml-20 py-2 md:py-4 lg:py-6  font-poppins text-md md:text-[22px] lg:text-[27px] border-b border-black'>
                                 Git, Github, Postman, VsCode, Developer-tools, Vite, NPM ... 
                            </div>
                          
                         </div>
                          
                      </div>
                  </div>

              </div>

           
             {/* FOOTER SECTION */}
               <Footer/>
   




          </div>
         
    
    
    
    
    
    </div>
  )
}

export default HomePage


