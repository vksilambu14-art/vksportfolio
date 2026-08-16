import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProjects } from "../Context/ProjectContext";

export default function EditProject() {
  const { projects, updateProject, deleteProject } = useProjects();
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((item) => String(item.id) === String(id));

  const [form, setForm] = useState({
    title: project?.title || "",
    description: project?.description || "",
    technology: project?.technology || "",
    github: project?.github || "",
  });

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <button onClick={() => navigate("/Projects")}>
          Back to Projects
        </button>
      </div>
    );
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProject(Number(id), form);
    navigate("/Projects");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      deleteProject(Number(id));
      navigate("/Projects");
    }
  };

  return (
    <div className="project-form-page">
      <div className="project-form-card">
        <div className="form-page-header">
          <h1>Edit <span>Project</span></h1>
          <p>Update your project information.</p>
        </div>

        <form className="project-form" onSubmit={handleUpdate}>
          
          <div className="form-group">
            <label>Project Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
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
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="update-project-button">
              Update Project
            </button>
            <button
              type="button"
              className="cancel-project-button"
              onClick={() => navigate("/Projects")}
            >
              Cancel
            </button>
            <button
              type="button"
              className="delete-form-project-button"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}