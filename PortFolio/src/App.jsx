import { useState,useEffect } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Footer from "./Pages/Footer";
import SilambuV from "./assets/SilambuV.jpeg";
import ProjectDetails from "./Pages/ProjectDetails";


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
      <div className={darkMode ? "app dark" : "app"}>

        <NavBar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Projects/:id" element={<ProjectDetails />}/>
             <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>

     

 
  );
}

export default App;