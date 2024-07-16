import HomePage from "./pages/HomePage";
import StudyNotionPage from "./pages/StudyNotionPage";
import ContactPage from "./pages/ContactPage"
// import Navbar from "./components/custom/Navbar";
import { Route,Routes } from "react-router-dom";
import SkillsPage from "./pages/SkillsPage";
import FoodFusionPage from "./pages/FoodFusionPage";

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
          <Route path="/project/foodfusion" element={<FoodFusionPage/>}/>
        </Routes>
      </>
      
      
    </div>
  );
}

export default App;
