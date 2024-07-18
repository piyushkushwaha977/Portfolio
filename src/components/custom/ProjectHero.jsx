import myStudynotionImg from "../../assets/projectImages/MyStudyNotion.png"
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const ProjectHero = () => {

  return (
    <>
        <div className=" fixed top-0 left-0 h-full w-full -z-10">
          <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        <div className=" relative w-full mx-auto overflow-x-hidden ">
         
             <div className=" absolute  flex  rounded-sm mt-28   ">
               <Link to="/"  className=" text-xl font-bold md:text-3xl flex items-center justify-center ml-3 md:ml-12   gap-2  ">
                  <FaArrowLeft className=" inline md:text-2xl text-white md:mt-2"/>
                  {/* <div className="  text-gray-400 border-b-2 border-orange-600">
                    Back</div> */}
               </Link>
              </div> 

             {/* <Link to="/"  className=" absolute top-28 pl-6 right-0 text-xl font-bold md:text-3xl flex items-center justify-center md:ml-12   gap-2  ">
                  <FaArrowLeft className=" inline md:text-2xl text-white md:mt-2"/>
                  <div className="  text-gray-400 border-b-2 border-orange-600">
                    Projects</div>
               </Link>    */}

          <div className="max-w-[32rem] md:max-w-6xl lg:max-w-7xl mx-auto ">
            <div className=" h-[48rem] w-full aspect-square">
            <img src={myStudynotionImg} 
              className="  rounded-b-[45px] w-full h-full object-fill "
              alt="studynotion"
            />
            </div>

            <div className=" w-full max-w-[32rem] md:max-w-6xl lg:max-w-7xl mx-auto">
               <h2 className=" mt-12 pb-4 font-bold font-poppins uppercase text-5xl text-white border-b border-white">Study Notion</h2>
           
              <div className="mt-6 flex">
                {/* RIGHT SECTION */}
                <div className="w-[40%] ">
                  <h3 className=" text-2xl font-poppins text-orange-400"> TECHNOLOGIES & FRAMEWORK</h3>
                  <div className=" w-full mt-4 flex flex-wrap">
                   <div className=" m-1 py-1 px-3 border border-white rounded-lg bg-black text-gray-200  ">React</div>
                   <div className=" m-1 py-1 px-3 border border-white rounded-lg bg-black text-gray-200  ">React</div>
                   <div className=" m-1 py-1 px-3 border border-white rounded-lg bg-black text-gray-200  ">React</div>
                   <div className=" m-1 py-1 px-3 border border-white rounded-lg bg-black text-gray-200  ">React</div>
                   <div className=" m-1 py-1 px-3 border border-white rounded-lg bg-black text-gray-200  ">React</div>
                   <div className=" m-1 py-1 px-3 border border-white rounded-lg bg-black text-gray-200  ">React</div>
                   <div className=" m-1 py-1 px-3 border border-white rounded-lg bg-black text-gray-200  ">React</div>
                   <div className=" m-1 py-1 px-3 border border-white rounded-lg bg-black text-gray-200  ">React</div>
                   <div className=" m-1 py-1 px-3 border border-white rounded-lg bg-black text-gray-200  ">React</div>
                   <div className=" m-1 py-1 px-3 border border-white rounded-lg bg-black text-gray-200  ">React</div>
                  </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="w-[60%]">
                 <h3 className=" text-center text-2xl text-orange-400 font-poppins"> FEAUTRES & FUCNTIONALITY</h3>
                  <div className=" w-11/12 mx-auto">
                     <ul className="w-11/12 mx-auto text-white">
                       <li>WORK SEMALESSLEY ACROOS MULTIPLE PLATFORM SEMALESSLEY ACROOS MULTI</li>
                       <li>this is something uou have never seen before </li>
                       <li>WORK SEMALESSLEY ACROOS MULTIPLE PLATFORM</li>
                       <li>WORK SEMALESSLEY ACROOS MULTIPLE PLATFORM</li>
                       <li>WORK SEMALESSLEY ACROOS MULTIPLE PLATFORM</li>
                       <li>WORK SEMALESSLEY ACROOS MULTIPLE PLATFORM</li>
                       <li>WORK SEMALESSLEY ACROOS MULTIPLE PLATFORM</li>
                       <li>WORK SEMALESSLEY ACROOS MULTIPLE PLATFORM</li>
                       <li>WORK SEMALESSLEY ACROOS MULTIPLE PLATFORM</li>
                     </ul>
                  </div>
                </div>

              </div>
           
            </div>
          </div>
        </div>
    </>
  );
};

export default ProjectHero;