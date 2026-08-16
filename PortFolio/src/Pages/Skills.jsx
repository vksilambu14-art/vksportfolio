import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSkills } from "../Context/SkillContext";

export default function Skills() {
  const { skills, deleteSkill } = useSkills();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this skill?")) {
      deleteSkill(id);
    }
  };

  return (
    <div className="skills-page">
      
      <div className="skills-header">
        <div>
          <p className="section-subtitle">MY TECHNICAL SKILLS</p>
          <h1>Skills & <span>Technologies</span></h1>
          <p className="skills-description">
            Here are some of the technologies and tools I use to build modern and responsive web applications.
          </p>
        </div>
        <button 
          className="add-skill-button" 
          onClick={() => navigate("/add-skill")}
        >
          + Add Skill
        </button>
      </div>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.id}>
            
            <div className="skill-top">
              <div className="skill-icon">{skill.icon}</div>
              <div>
                <h2>{skill.name}</h2>
                <p>{skill.category}</p>
              </div>
            </div>

            <div className="skill-progress">
              <div className="progress-info">
                <span>Proficiency</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>

            <div className="skill-actions">
              <Link to={`/edit-skill/${skill.id}`} className="edit-skill-button">
                ✏️ Edit
              </Link>
              <button
                className="delete-skill-button"
                onClick={() => handleDelete(skill.id)}
              >
                🗑️ Delete
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}