import React, { createContext, useContext, useState } from "react";

const SkillContext = createContext();

export function SkillProvider({ children }) {
  const [skills, setSkills] = useState([
    { id: 1, name: "HTML", category: "Frontend", percentage: 90, icon: "🌐" },
    { id: 2, name: "CSS", category: "Frontend", percentage: 85, icon: "🎨" },
    { id: 3, name: "JavaScript", category: "Frontend", percentage: 85, icon: "⚡" },
    { id: 4, name: "React", category: "Frontend", percentage: 80, icon: "⚛️" },
    { id: 5, name: "Java", category: "Backend", percentage: 70, icon: "☕" },
    { id: 6, name: "SQL", category: "Database", percentage: 75, icon: "🗄️" },
    { id: 7, name: "Git", category: "Tools", percentage: 75, icon: "🔧" },
    { id: 8, name: "GitHub", category: "Tools", percentage: 80, icon: "🐙" }
  ]);

  const addSkill = (skill) => {
    setSkills((prevSkills) => [
      ...prevSkills,
      { id: Date.now(), ...skill, percentage: Number(skill.percentage) }
    ]);
  };

  const updateSkill = (id, updatedSkill) => {
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.id === id 
          ? { ...skill, ...updatedSkill, percentage: Number(updatedSkill.percentage) } 
          : skill
      )
    );
  };

  const deleteSkill = (id) => {
    setSkills((prevSkills) =>
      prevSkills.filter((skill) => skill.id !== id)
    );
  };

  return (
    <SkillContext.Provider
      value={{ skills, addSkill, updateSkill, deleteSkill }}
    >
      {children}
    </SkillContext.Provider>
  );
}

export function useSkills() {
  return useContext(SkillContext);
}