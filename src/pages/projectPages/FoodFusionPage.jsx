import React from 'react'
import foodfusionImg from "../../assets/projectImages/foodfusion.png"
// import { motion } from 'framer-motion'

// const FoodFusionPage = () => {
//   return (


   
//     //  <div className=' bg-black'>
    
//     //   <div className=' w-full max-w-7xl mx-auto h-full -z-10 bg-black '>

//     //      <motion.div
//     //             initial={{ opacity: 0 }}
//     //             animate={{ opacity: 1 }}
//     //             // exit={{ x: 0 }}
//     //             transition={{ ease: "easeInOut", duration: 0.5 }}
//     //             className="card group  mb-6 flex flex-col w-full md:w-[100%] rounded-lg border border-white/20 bg-[radial-gradient(_rgba(255,255,255,0.2)_1px,transparent_1px_)]  bg-[length:1.1rem_1.1rem] bg-[50%_50%] "
//     //           >
//     //             <img
//     //               className="img w-full rounded-lg rounded-b-none   bg-white"
//     //               src={foodfusionImg}
//     //               alt="foodfusionImg"
//     //             ></img>
//     //             <div className="details w-full text-white font-Poppins  px-4 py-2 md:px-8 md:py-8 flex flex-col gap-6 relative">
//     //               <div className="project-name text-yellow-500 text-xl md:text-3xl ">
//     //                 FoodVilla
//     //               </div>
//     //               <div className="project-details text-xs   text-zinc-200 md:text-sm md:leading-6 tracking-wide ">
//     //                 <p>
//     //                   FoodVilla is a high-performance food ordering app using
//     //                   Swiggy live API for real-time data. Discover top nearby
//     //                   restaurants and their dishes, with options to select
//     //                   location, sort by delivery time, cost, and ratings for a
//     //                   seamless user experience.
//     //                 </p>
//     //               </div>
//     //               <div className="project-stack text-sm border-b border-white/20 pb-4 text-zinc-400">
//     //                 <ul className="flex justify-around pt-4">
//     //                   <li>React.js</li>
//     //                   <li>Redux toolkit</li>
//     //                   <li>React-stripe-checkout</li>
//     //                   <li>Tailwind CSS</li>
//     //                   <li>React Router</li>
//     //                 </ul>
//     //               </div>
//     //               <div className="project-links">
//     //                 <div className="md:mt-6 mb-3 flex justify-end gap-10 items-center">
//     //                   <a
//     //                     href="https://github.com/chinmay021/fooodvilla"
//     //                     className="hover:-translate-y-1 transition-all z-[3]"
//     //                     target="_blank"
//     //                     rel="noreferrer"
//     //                     cursor="pointer"
//     //                   >
//     //                     <svg
//     //                       xmlns="http://www.w3.org/2000/svg"
//     //                       width="24"
//     //                       height="24"
//     //                       viewBox="0 0 24 24"
//     //                       fill="none"
//     //                       stroke="#5FF4D1"
//     //                       strokeWidth="2"
//     //                       strokeLinecap="round"
//     //                       strokeLinejoin="round"
//     //                       className="feather feather-github"
//     //                     >
//     //                       <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
//     //                     </svg>
//     //                   </a>
//     //                   <a
//     //                     href="https://fooodvilla.netlify.app/"
//     //                     className="hover:-translate-y-1 transition-all z-[3]"
//     //                     target="_blank"
//     //                     rel="noreferrer"
//     //                     cursor="pointer"
//     //                   >
//     //                     <svg
//     //                       xmlns="http://www.w3.org/2000/svg"
//     //                       width="24"
//     //                       height="24"
//     //                       viewBox="0 0 24 24"
//     //                       fill="none"
//     //                       stroke="#5FF4D1"
//     //                       strokeWidth="2"
//     //                       strokeLinecap="round"
//     //                       strokeLinejoin="round"
//     //                       className="feather feather-external-link"
//     //                     >
//     //                       <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
//     //                       <polyline points="15 3 21 3 21 9"></polyline>
//     //                       <line x1="10" y1="14" x2="21" y2="3"></line>
//     //                     </svg>
//     //                   </a>
//     //                 </div>
//     //               </div>
//     //               <div className="blob h-full w-full absolute left-0 top-0 z-[2] bg-[radial-gradient(_800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,219,0,0.2),transparent_40%_)] opacity-0 group-hover:opacity-100 duration-500 transition-all"></div>
//     //             </div>
//     //           </motion.div>
  
 
//     //    </div>
//     // </div>   
//   )
// }

// export default FoodFusionPage

// import myStudynotionImg from "../../assets/projectImages/MyStudyNotion.png"
// import { Link } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa6";
import Navbar from '../../components/custom/Navbar';
import { GrTechnology } from "react-icons/gr";
import { RiCheckDoubleFill } from "react-icons/ri";
import { SiCountingworkspro } from "react-icons/si";


 const TechList = ["React", "nodejs" , "express" , "NextJs" , "Firebase" , "Redux" , "Cloudinary" ,"Appwrite", "nodejs" , "express" , "NextJs" , "Firebase" , "Redux" , "Cloudinary" ,"Appwrite" ]

 const TechFeatures = [
  " Virtual DOM (Document Object Model)",
  " Developers will soon have more  over document",
  " Developers will soon have more  over document",
  " Developers will soon have more  over document",
  " Developers will soon have more  over document",
  " Developers will soon have more  over document",
  " Developers will soon have more  over document",
  " Developers will soon have more  over document",
  " Developers will soon have more  over document",
  " Developers will soon have more  over document",

 ]

const ProjectHero = () => {

  return (
    <div className=" w-full top-0 left-0">
        {/* <div className=" fixed top-0 left-0 h-full w-full -z-10">
          <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div> */}
        <div className="fixed left-0 top-0 -z-10 w-full h-full">
                {/* Dark Theme Background code */}
         <div className="relative h-full w-full bg-black"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>

        </div> 

        <Navbar/>

        <div className=" relative max-w-full md:max-w-7xl md:mx-auto  ">

          <div className=" max-w-full mx-1 mt-8 md:max-w-6xl lg:max-w-7xl md:mx-auto ">
            <div className="max-w-[23rem] md:max-w-[50rem] lg:max-w-[1180px] mx-auto h-[16rem] md:h-[36rem] lg:h-[46rem] w-full aspect-square  ">
              <img src={foodfusionImg} 
               className=" rounded-md w-full h-[15rem] md:h-[32rem] lg:h-[45rem] object-cover border border-[#2b2a28]  shadow-2xl shadow-slate-800"
               alt="studynotion"
              />
            </div>

            <div className=" w-full max-w-[32rem] md:max-w-6xl lg:max-w-7xl mx-auto">
               <h2 className="mt-4 md:mt-12 pb-4 pl-2 font-bold font-poppins uppercase text-3xl md:text-5xl bg-gradient-to-b from-[#868F96] to-[#596164] text-transparent bg-clip-text 
                border-b border-slate-700"
               >Study Notion</h2>
           
        <div className=" max-w-full mx-2 mt-6 flex flex-col-reverse  " >

                {/* LEFT SECTION */}
            <div className="w-full pb-10 border-b border-gray-700">
                 <h3 className="flex items-center text-xl pb-2 md:pl-2 md:pr-8 mt-8  md:text-3xl text-[#E2D1C3] font-poppins border-b border-gray-700 w-fit "
                 ><SiCountingworkspro className=" inline text-purple-600 mr-2"/>
                 Functionality & Features</h3>
                    <ul className=" max-w-full pt-2 md:pl-12 md:w-11/12 mt-3 mx-auto">
                    {
                      TechFeatures.map((text,index) => (
                        <li key={index}
                         className=" py-1 text-gray-400 font-poppins text-sm  md:text-lg ">
                         <RiCheckDoubleFill className=" inline text-white mr-0.5 md:mr-2"/> 
                          {text}
                        </li>
                      ))
                    }
     
                     </ul>
            </div>

                {/* RIGHT SECTION */}
                <div className="w-full border-b border-gray-700 pb-6 ">

                  <h3 className=" text-xl md:pl-2  md:text-3xl pb-2 font-poppins text-[#E2D1C3] border-b border-gray-700 w-fit "
                  > <GrTechnology className=" inline text-red-800 mr-1 md:mr-2"/>
                   Technologies & Frameworks</h3>

                  <div className=" w-full mt-4 md:pl-12 md:pr-8 flex gap-1 md:gap-2 flex-wrap">
                   
                      {TechList.map( (name,index) => (
                        <div key={index}
                        className=" w-fit cursor-pointer text-sm md:text-[16px] text-gray-400 font-semibold px-2 md:px-4 py-0.5 md:py-1 rounded-lg
                         border border-gray-600 transition-all duration-200 hover:text-white "
                        >{name}</div>
                      ))}
                    
                  </div>
                </div>

              </div>

              <div className=" max-w-full mx-1 mt-8 md:max-w-6xl lg:max-w-7xl md:mx-auto ">
            <div className="max-w-[23rem] md:max-w-[50rem] lg:max-w-[1180px] mx-auto h-[16rem] md:h-[36rem] lg:h-[46rem] w-full aspect-square  ">
              <img src={foodfusionImg} 
               className=" rounded-md w-full h-[15rem] md:h-[32rem] lg:h-[45rem] object-cover border border-[#2b2a28]  shadow-2xl shadow-slate-800"
               alt="studynotion"
              />
             </div>

             <div className="max-w-[23rem] md:max-w-[50rem] lg:max-w-[1180px] mx-auto h-[16rem] md:h-[36rem] lg:h-[46rem] w-full aspect-square  ">
              <img src={foodfusionImg} 
               className=" rounded-md w-full h-[15rem] md:h-[32rem] lg:h-[45rem] object-cover border border-[#2b2a28]  shadow-2xl shadow-slate-800"
               alt="studynotion"
              />
             </div>

             <div className="max-w-[23rem] md:max-w-[50rem] lg:max-w-[1180px] mx-auto h-[16rem] md:h-[36rem] lg:h-[46rem] w-full aspect-square  ">
              <img src={foodfusionImg} 
               className=" rounded-md w-full h-[15rem] md:h-[32rem] lg:h-[45rem] object-cover border border-[#2b2a28]  shadow-2xl shadow-slate-800"
               alt="studynotion"
              />
             </div>

             <div className="max-w-[23rem] md:max-w-[50rem] lg:max-w-[1180px] mx-auto h-[16rem] md:h-[36rem] lg:h-[46rem] w-full aspect-square  ">
              <img src={foodfusionImg} 
               className=" rounded-md w-full h-[15rem] md:h-[32rem] lg:h-[45rem] object-cover border border-[#2b2a28]  shadow-2xl shadow-slate-800"
               alt="studynotion"
              />
             </div>
            </div>
           
            </div>

          </div>
        </div>

    </div>
  );
};

export default ProjectHero;