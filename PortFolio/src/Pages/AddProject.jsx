import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProjects } from "../Context/ProjectContext";

export default function AddProject() {
  const navigate = useNavigate();
  const { addProject } = useProjects();

  const [form, setForm] = useState({
    title: "",
    description: "",
    technology: "",
    github: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(form);
    navigate("/Projects");
  };

  return (
    <div className="project-form-page">
      <div className="project-form-card">
        <div className="form-page-header">
          <h1>Add <span>Project</span></h1>
          <p>Add a new project to your portfolio.</p>
        </div>

        <form className="project-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label>Project Title</label>
            <input 
              type="text" 
              name="title" 
              value={form.title}
              onChange={handleChange} 
              placeholder="Student Management System"
              required 
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea 
              name="description" 
              value={form.description}
              onChange={handleChange} 
              placeholder="Enter project description"
              rows="5" 
              required 
            />
          </div>

          <div className="form-group">
            <label>Technologies</label>
            <input 
              type="text" 
              name="technology" 
              value={form.technology}
              onChange={handleChange} 
              placeholder="React, JavaScript, CSS"
              required 
            />
          </div>

          <div className="form-group">
            <label>GitHub URL</label>
            <input 
              type="url" 
              name="github" 
              value={form.github}
              onChange={handleChange} 
              placeholder="https://github.com/..." 
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="save-project-button">
              Add Project
            </button>
            <button 
              type="button" 
              className="cancel-project-button" 
              onClick={() => navigate("/Projects")}
            >
              Cancel
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}