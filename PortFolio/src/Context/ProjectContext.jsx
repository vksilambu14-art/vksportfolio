import React, { createContext, useContext, useState } from "react";
import projectData from "../Pages/projectdata";

const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState(projectData);

  const addProject = (project) => {
    setProjects((prevProjects) => [
      ...prevProjects,
      { id: Date.now(), ...project }
    ]);
  };

  const updateProject = (id, updatedProject) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id ? { ...project, ...updatedProject } : project
      )
    );
  };

  const deleteProject = (id) => {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== id)
    );
  };

  return (
    <ProjectContext.Provider 
      value={{ projects, addProject, updateProject, deleteProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjects() {
  return useContext(ProjectContext);
}