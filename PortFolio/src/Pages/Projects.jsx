import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProjects } from "../Context/ProjectContext";

export default function Projects() {
  const { projects, deleteProject } = useProjects();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      deleteProject(id);
    }
  };

  return (
    <div className="projects-page">
      
      <div className="projects-header">
        <div>
          <p className="projects-subtitle">MY WORK</p>
          <h1>My <span>Projects</span></h1>
          <p>Here are some of the projects I have built using modern web technologies.</p>
        </div>
        <button 
          className="add-project-button" 
          onClick={() => navigate("/add-project")}
        >
          + Add Project
        </button>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={project.id}>
            
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            ) : (
              <div className="project-image-placeholder">💻</div>
            )}

            <div className="project-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-tech">{project.technology}</div>

              <div className="project-buttons">
                <Link to={`/projects/${project.id}`} className="view-button">
                  View Details →
                </Link>

                <Link to={`/edit-project/${project.id}`} className="edit-project-button">
                  ✏️ Edit
                </Link>

                <button
                  className="delete-project-button"
                  onClick={() => handleDelete(project.id)}
                >
                  🗑️ Delete
                </button>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-button"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}