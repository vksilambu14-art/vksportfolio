import React from 'react'

export default function Skills() {




  const skills = [
    {
      name: "HTML",
      category: "Frontend",
      percentage: 90,
      icon: "🌐"
    },
    {
      name: "CSS",
      category: "Frontend",
      percentage: 85,
      icon: "🎨"
    },
    {
      name: "JavaScript",
      category: "Frontend",
      percentage: 85,
      icon: "⚡"
    },
    {
      name: "React",
      category: "Frontend",
      percentage: 80,
      icon: "⚛️"
    },
    {
      name: "Java",
      category: "Backend",
      percentage: 70,
      icon: "☕"
    },
    {
      name: "SQL",
      category: "Database",
      percentage: 75,
      icon: "🗄️"
    },
    {
      name: "Git",
      category: "Tools",
      percentage: 75,
      icon: "🔧"
    },
    {
      name: "GitHub",
      category: "Tools",
      percentage: 80,
      icon: "🐙"
    }
  ];

  return (
    <div className="skills-page">

      <div className="skills-header">

        <p className="section-subtitle">
          MY TECHNICAL SKILLS
        </p>

        <h1>
          Skills & <span>Technologies</span>
        </h1>

        <p className="skills-description">
          Here are some of the technologies and tools
          I use to build modern and responsive web
          applications.
        </p>

      </div>

      <div className="skills-container">

        {skills.map((skill) => (

          <div
            className="skill-card"
            key={skill.name}
          >

            <div className="skill-top">

              <div className="skill-icon">
                {skill.icon}
              </div>

              <div>
                <h2>{skill.name}</h2>

                <p>
                  {skill.category}
                </p>
              </div>

            </div>

            <div className="skill-progress">

              <div className="progress-info">

                <span>Proficiency</span>

                <span>
                  {skill.percentage}%
                </span>

              </div>

              <div className="progress-bar">

                <div
                  className="progress-fill"
                  style={{
                    width: `${skill.percentage}%`
                  }}
                ></div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
