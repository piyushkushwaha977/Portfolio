import myStudynotionImg from "../../assets/projectImages/MyStudyNotion.png"
import myStudynotionProjectImg from "../../assets/projectImages/studynotionproject.png"
// import { Link } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa6";
import Navbar from "./Navbar";
import { GrTechnology } from "react-icons/gr";
import { RiCheckDoubleFill } from "react-icons/ri";
import { SiCountingworkspro } from "react-icons/si";
import { TbExternalLink } from "react-icons/tb";
import { motion } from "framer-motion";
// import { FiArrowUpRight } from "react-icons/fi";
// import { FaGithub } from "react-icons/fa6";


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
    <>
        {/* Dark Theme Background code */}
        <div className="fixed left-0 top-0 -z-10 w-full h-full">
          <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>
        </div> 

        <div className=" relative h-screen w-full md:max-w-7xl md:mx-auto  ">

            <Navbar/>

          <div className=" max-w-full mx-1 mt-16 md:mt-8 md:max-w-6xl lg:max-w-7xl md:mx-auto ">
            <motion.div
                 initial={{opacity: 0 , scale: 0.5}}
                 animate={{opacity:1 , scale: 1}}
                 transition={{duration: 0.5}}             
             className="max-w-[23rem] md:max-w-[50rem] lg:max-w-[1180px] mx-auto h-[16rem] md:h-[36rem] lg:h-[46rem] w-full aspect-square  ">
              <img src={myStudynotionImg} 
               className=" rounded-xl md:rounded-3xl w-full h-[15rem] md:h-[32rem] lg:h-[45rem] object-cover border border-[#2b2a28]  shadow-2xl shadow-slate-800"
               alt="studynotion"
              />
            </motion.div>

  <div className=" w-full max-w-[32rem] md:max-w-6xl lg:max-w-7xl mx-auto">
      <motion.div
       initial={{opacity: 0 , x: -100}}
       animate={{opacity:1 , x: 0}}
       transition={{duration: 0.8}}        
       className=" flex justify-between mt-4 md:mt-10 ">
       <h2 className=" pb-2 md:pb-4 pl-2 font-bold font-poppins uppercase text-2xl md:text-5xl bg-gradient-to-b from-[#868F96] to-[#596164] text-transparent bg-clip-text 
          border-b border-slate-700" > Study Notion </h2>
           <>
           <div className=" group bg-neutral-950 rounded-md md:rounded-xl px-2 md:px-4 border border-neutral-800 mt-2 text-gray-400 md:text-2xl flex items-center font-thin hover:underline cursor-pointer"> 
            <TbExternalLink className="inline text-teal-400 text-2xl  md:text-3xl mr-1 group-hover:scale-110 transition-all duration-300 "/>
            View the Website </div>
{/* 
            <div className=" text-gray-400 md:text-2xl flex items-center font-thin"> 
            <FaGithub className="inline text-gray-400 text-2xl  md:text-3xl mr-0.5"/>
             My Github </div> */}
           </>
       </motion.div>
           
        <div className=" max-w-full mx-2 mt-6 flex flex-col-reverse  " >

                {/* LEFT SECTION */}
            <div className="w-full pb-10 border-b border-gray-700">
                 <h3 className="flex items-center text-xl pb-2 md:pl-2 md:pr-8 mt-12  md:text-3xl text-[#E2D1C3] font-poppins border-b border-gray-700 w-fit "
                 ><SiCountingworkspro className=" inline text-purple-600 mr-2"/>
                   Functionality & Features</h3>
                    <ul className=" max-w-full pt-2 md:pl-12 md:w-11/12 mt-3 mx-auto">
                    {
                      TechFeatures.map((text,index) => (
                        <motion.li
                           initial={{opacity: 0 , x: -100}}
                           whileInView={{opacity:1 , x: 0}}
                           transition={{duration: 1}}                          
                         key={index}
                         className="py-0.5 md:py-1 text-gray-400 font-poppins text-sm  md:text-lg ">
                         <RiCheckDoubleFill className=" inline text-white mr-0.5 md:mr-2"/> 
                          {text}
                        </motion.li>
                      ))
                    }
     
                     </ul>
            </div>

                {/* RIGHT SECTION */}
                <div className="w-full border-b border-gray-700 pb-6 ">

                  <h3 className=" text-xl md:pl-2 mt-6 md:text-3xl pb-2 font-poppins text-[#E2D1C3] border-b border-gray-700 w-fit "
                  > <GrTechnology className=" inline text-red-800 mr-1 md:mr-2"/>
                   Technologies & Frameworks</h3>

                  <motion.div
                     initial={{opacity: 0 , x: -100}}
                     whileInView={{opacity:1 , x: 0}}
                     transition={{duration: 1.2}} 
                      className=" w-full md:mt-4 my-6 md:pl-12 md:pr-8 flex gap-1 md:gap-2 flex-wrap">
                   
                      {TechList.map( (name,index) => (
                        <div            
                         key={index}
                        className=" w-fit cursor-pointer text-sm md:text-[16px] text-gray-400 font-semibold px-2 md:px-4 py-0.5 md:py-1 rounded-lg
                         transition-all duration-200 hover:text-white bg-neutral-900"
                        >{name}</div>
                      ))}
                    
                  </motion.div>
                </div>

              </div>


      <div className=" max-w-full mx-1 mt-8 md:max-w-6xl lg:max-w-7xl md:mx-auto ">
            <motion.div
              initial={{opacity: 0 , x: -100}}
              whileInView={{opacity:1 , x: 0}}
              transition={{duration: 1.2}}           
             className="max-w-[23rem] md:max-w-[50rem] lg:max-w-[1180px] mx-auto h-[16rem] md:h-[36rem] lg:h-[46rem] w-full aspect-square  ">
              <img src={myStudynotionImg} 
               className=" rounded-md w-full h-[15rem] md:h-[32rem] lg:h-[45rem] object-cover border border-[#2b2a28]  shadow-2xl shadow-slate-800"
               alt="studynotion"
              />
             </motion.div>

             <div className=" my-8  max-w-[23rem] md:max-w-[50rem] lg:max-w-[1180px] mx-auto h-[16rem] md:h-[36rem] lg:h-[46rem] w-full aspect-square  ">
              <img src={myStudynotionProjectImg} 
               className=" rounded-md w-full h-[15rem] md:h-[32rem] lg:h-[45rem] object-cover border border-[#2b2a28]  shadow-2xl shadow-slate-800"
               alt="studynotion"
              />
             </div>
             <div className=" my-8  max-w-[23rem] md:max-w-[50rem] lg:max-w-[1180px] mx-auto h-[16rem] md:h-[36rem] lg:h-[46rem] w-full aspect-square  ">
              <img src={myStudynotionImg} 
               className=" rounded-md w-full h-[15rem] md:h-[32rem] lg:h-[45rem] object-cover border border-[#2b2a28]  shadow-2xl shadow-slate-800"
               alt="studynotion"
              />
             </div>

             <div className=" my-8  max-w-[23rem] md:max-w-[50rem] lg:max-w-[1180px] mx-auto h-[16rem] md:h-[36rem] lg:h-[46rem] w-full aspect-square  ">
              <img src={myStudynotionProjectImg} 
               className=" rounded-md w-full h-[15rem] md:h-[32rem] lg:h-[45rem] object-cover border border-[#2b2a28]  shadow-2xl shadow-slate-800"
               alt="studynotion"
              />
             </div>

             <div className=" my-8  max-w-[23rem] md:max-w-[50rem] lg:max-w-[1180px] mx-auto h-[16rem] md:h-[36rem] lg:h-[46rem] w-full aspect-square  ">
              <img src={myStudynotionImg} 
               className=" rounded-md w-full h-[15rem] md:h-[32rem] lg:h-[45rem] object-cover border border-[#2b2a28]  shadow-2xl shadow-slate-800"
               alt="studynotion"
              />
             </div>


            
            </div>
           
            </div>

          </div>
        </div>

    </>
  )
}

export default ProjectHero;