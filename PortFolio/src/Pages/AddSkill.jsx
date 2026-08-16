import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSkills } from "../Context/SkillContext";

export default function AddSkill() {
  const navigate = useNavigate();
  const { addSkill } = useSkills();

  const [form, setForm] = useState({
    name: "",
    category: "",
    percentage: "",
    icon: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSkill(form);
    navigate("/Skills");
  };

  return (
    <div className="skill-form-page">
      <div className="skill-form-card">
        <div className="form-page-header">
          <h1>Add <span>Skill</span></h1>
          <p>Add a new technical skill to your portfolio.</p>
        </div>

        <form onSubmit={handleSubmit} className="skill-form">
          
          <div className="form-group">
            <label>Skill Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Example: React"
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
              placeholder="80"
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
              placeholder="⚛️"
              required
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="save-button">
              Add Skill
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={() => navigate("/Skills")}
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}