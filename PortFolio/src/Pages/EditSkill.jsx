import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSkills } from "../Context/SkillContext";

export default function EditSkill() {
  const { skills, updateSkill, deleteSkill } = useSkills();
  const { id } = useParams();
  const navigate = useNavigate();

  const skill = skills.find((item) => item.id === Number(id));

  const [form, setForm] = useState({
    name: skill?.name || "",
    category: skill?.category || "",
    percentage: skill?.percentage || "",
    icon: skill?.icon || ""
  });

  if (!skill) {
    return (
      <div className="skill-not-found">
        <h2>Skill Not Found</h2>
        <button onClick={() => navigate("/Skills")}>
          Back to Skills
        </button>
      </div>
    );
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateSkill(Number(id), form);
    navigate("/Skills");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this skill?")) {
      deleteSkill(Number(id));
      navigate("/Skills");
    }
  };

  return (
    <div className="skill-form-page">
      <div className="skill-form-card">
        <div className="form-page-header">
          <h1>Edit <span>Skill</span></h1>
          <p>Update your skill information.</p>
        </div>

        <form onSubmit={handleUpdate} className="skill-form">
          
          <div className="form-group">
            <label>Skill Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Database">Database</option>
              <option value="Tools">Tools</option>
            </select>
          </div>

          <div className="form-group">
            <label>Proficiency</label>
            <input
              type="number"
              name="percentage"
              value={form.percentage}
              onChange={handleChange}
              min="0"
              max="100"
              required
            />
          </div>

          <div className="form-group">
            <label>Icon</label>
            <input
              type="text"
              name="icon"
              value={form.icon}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="update-button">
              Update Skill
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={() => navigate("/Skills")}
            >
              Cancel
            </button>
            <button
              type="button"
              className="delete-form-button"
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