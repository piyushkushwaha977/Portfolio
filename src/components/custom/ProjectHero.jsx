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
         
             {/* <div className=" absolute  flex  rounded-sm mt-28   ">
               <Link to="/"  className=" text-xl font-bold md:text-3xl flex items-center justify-center ml-3 md:ml-12   gap-2  ">
                  <FaArrowLeft className=" inline md:text-2xl text-white md:mt-2"/>
                  <div className="  text-gray-400 border-b-2 border-orange-600">
                    Back</div>
               </Link>
              </div>  */}

             {/* <Link to="/"  className=" absolute top-28 pl-6 right-0 text-xl font-bold md:text-3xl flex items-center justify-center md:ml-12   gap-2  ">
                  <FaArrowLeft className=" inline md:text-2xl text-white md:mt-2"/>
                  <div className="  text-gray-400 border-b-2 border-orange-600">
                    Projects</div>
               </Link>    */}

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
           
        <div className=" max-w-full mx-2 mt-6 flex flex-col-reverse">

                {/* LEFT SECTION */}
            <div className="w-full">
                 <h3 className=" text-xl mt-8 md:text-3xl text-gray-300 font-poppins ">Functionality & Features</h3>
                    <ul className=" max-w-full md:w-11/12 mt-3 mx-auto text-white">
                    {
                      TechFeatures.map((text,index) => (
                        <li key={index}
                        className=" text-gray-400  md:text-lg "
                        >
                         {text}
                        </li>
                      ))
                    }
     
                     </ul>
            </div>

                {/* RIGHT SECTION */}
                <div className="w-full  ">

                  <h3 className=" text-xl md:text-3xl font-poppins text-gray-300">Technologies & Frameworks</h3>

                  <div className=" w-full mt-4 flex gap-1 md:gap-2 flex-wrap">
                   
                      {TechList.map( (name,index) => (
                        <div key={index}
                        className=" w-fit  cursor-pointer text-gray-400 font-semibold bg-gradient-to-t from-gray-800
                         to-black px-2 md:px-4 py-0.5 md:py-1 rounded-full border border-gray-600 transition-all duration-200 hover:text-white "
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