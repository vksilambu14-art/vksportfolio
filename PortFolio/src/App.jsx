import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Contexts
import { SkillProvider } from "./Context/SkillContext";
import { ProjectProvider } from "./Context/ProjectContext";

// Components
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Footer from "./Pages/Footer";
import ProjectDetails from "./Pages/ProjectDetails";
import AddSkill from "./Pages/AddSkill";
import EditSkill from "./Pages/EditSkill";
import AddProject from "./Pages/AddProject";
import EditProject from "./Pages/EditProject";

// Styles
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <SkillProvider> 
        <ProjectProvider>
          
          <div className={`app ${darkMode ? "dark" : ""}`.trim()}>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

            <div className="page-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Skills" element={<Skills />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Projects/:id" element={<ProjectDetails />} />
                <Route path="/add-skill" element={<AddSkill />} />
                <Route path="/edit-skill/:id" element={<EditSkill />} />
                <Route path="/add-project" element={<AddProject />} />
                <Route path="/edit-project/:id" element={<EditProject />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            
            <Footer />
          </div>

        </ProjectProvider>
      </SkillProvider>
    </BrowserRouter>
  );
}

export default App;