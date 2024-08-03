import myStudynotionImg from "../../assets/projectImages/MyStudyNotion.png"
// import { Link } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa6";
import Navbar from "./Navbar";


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
        <div className=" fixed top-0 left-0 h-full w-full -z-10">
          <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        <Navbar/>

        <div className=" relative max-w-full md:max-w-7xl md:mx-auto  ">

          <div className=" max-w-full mx-1 mt-20 md:max-w-6xl lg:max-w-6xl md:mx-auto ">
            <div className="max-w-[23rem] md:max-w-[50rem] lg:max-w-6xl mx-auto h-[16rem]  md:h-[42rem] w-full aspect-square">
              <img src={myStudynotionImg} 
               className=" md:mx-auto h-full object-cover "
               alt="studynotion"
              />
            </div>

            <div className=" w-full max-w-[32rem] md:max-w-6xl lg:max-w-7xl mx-auto">
               <h2 className=" mt-12 pb-4 pl-2 font-bold font-poppins uppercase text-3xl md:text-5xl bg-gradient-to-b from-[#868F96] to-[#596164] text-transparent bg-clip-text 
                border-b border-slate-700"
               >Study Notion</h2>
           
        <div className=" max-w-full mx-2 mt-6 flex flex-col-reverse  " >

                {/* LEFT SECTION */}
            <div className="w-full pb-10 border-b border-gray-700">
                 <h3 className=" text-xl pb-2 md:pl-8 md:pr-8 mt-8  md:text-3xl text-gray-300 font-poppins border-b border-gray-700 w-fit ">Functionality & Features</h3>
                    <ul className=" max-w-full pt-2 md:pl-12 md:w-11/12 mt-3 mx-auto text-white">
                    {
                      TechFeatures.map((text,index) => (
                        <li key={index}
                        className=" text-gray-400 font-poppins  md:text-lg "
                        >
                         {text}
                        </li>
                      ))
                    }
     
                     </ul>
            </div>

                {/* RIGHT SECTION */}
                <div className="w-full border-b border-gray-700 pb-6 ">

                  <h3 className=" text-xl md:pl-8  md:text-3xl pb-2 font-poppins text-gray-300 border-b border-gray-700 w-fit ">Technologies & Frameworks</h3>

                  <div className=" w-full mt-4 md:pl-12 md:pr-8 flex gap-1 md:gap-2 flex-wrap">
                   
                      {TechList.map( (name,index) => (
                        <div key={index}
                        className=" w-fit  cursor-pointer text-gray-400 font-semibold px-2 md:px-4 py-0.5 md:py-1 rounded-lg
                         border border-gray-600 transition-all duration-200 hover:text-white "
                        >{name}</div>
                      ))}
                    
                  </div>
                </div>

              </div>
           
            </div>


            <div className=" mt-60 md:h-[42rem] w-full aspect-square">
            <img src={myStudynotionImg} 
              className=" w-full h-full object-fill "
              alt="studynotion"
            />
            </div>
          </div>
        </div>

    </div>
  );
};

export default ProjectHero;