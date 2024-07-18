import HomePage from "./pages/HomePage";
import StudyNotionPage from "../src/pages/projectPages/StudyNotionPage";
import ContactPage from "./pages/ContactPage"
import { Route,Routes } from "react-router-dom";
import SkillsPage from "./pages/SkillsPage";
import FoodFusionPage from "../src/pages/projectPages/FoodFusionPage";
import ProjectsPage from "./pages/ProjectsPage";
// import Navbar from "./components/custom/Navbar";

function App() {
  return (
    <div className=" relative w-full overflow-x-hidden p-0 m-0 ">
      <>
        {/* <Navbar/> */}
        <Routes >
          <Route path="/" element={<HomePage/>}/>
          <Route path="/project/studynotion" element={<StudyNotionPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/skills" element={<SkillsPage/>}/>
          <Route path="/projects" element={<ProjectsPage/>}/>
          <Route path="/project/foodfusion" element={<FoodFusionPage/>}/>
        </Routes>
      </>
      
      
    </div>
  );
}

export default App;
