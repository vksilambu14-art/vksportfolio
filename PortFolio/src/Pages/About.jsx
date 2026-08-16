import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
   <section className="about-page">

      {/* About Header */}

      <div className="about-header">

        <p className="about-subtitle">
          ABOUT ME
        </p>

        <h1>
          Java Full Stack <span>Developer</span>
        </h1>

        <p>
          Passionate about building modern, responsive
          and user-friendly web applications.
        </p>

      </div>


      {/* About Content */}

      <div className="about-container">

        {/* Left Side */}

        <div className="about-text">

          <h2>
            Hi, I'm <span>Silambu</span> 👋
          </h2>

          <p>
            I am a passionate Java Full Stack Developer
            interested in developing complete web
            applications from frontend to backend.
          </p>

          <p>
            I enjoy creating clean and responsive user
            interfaces using HTML, CSS, JavaScript and
            React. I also have an interest in backend
            development using Java and SQL.
          </p>

          <p>
            My goal is to continuously improve my
            programming skills and build real-world
            applications using modern technologies.
          </p>

          <a href="/Silambu-Resume.pdf" download="Silambu-Resume.pdf" className="resume-button">📄 Download Resume</a>

        </div>


        {/* Right Side */}

        <div className="about-card">

          <h2>
            My Technical Stack
          </h2>

          <div className="tech-list">

            <div className="tech-item">
              <span>🌐</span>
              <div>
                <h3>Frontend</h3>
                <p>HTML, CSS, JavaScript, React</p>
              </div>
            </div>

            <div className="tech-item">
              <span>☕</span>
              <div>
                <h3>Backend</h3>
                <p>Java, Spring Boot</p>
              </div>
            </div>

            <div className="tech-item">
              <span>🗄️</span>
              <div>
                <h3>Database</h3>
                <p>MySQL, SQL</p>
              </div>
            </div>

            <div className="tech-item">
              <span>🔧</span>
              <div>
                <h3>Tools</h3>
                <p>Git, GitHub, VS Code</p>
              </div>
            </div>

          </div>

        </div>

      </div>


      {/* Developer Highlights */}

      <div className="about-highlights">

        <div className="highlight-card">

          <h2>Frontend</h2>

          <p>
            Responsive and attractive interfaces using
            HTML, CSS, JavaScript and React.
          </p>

        </div>


        <div className="highlight-card">

          <h2>Backend</h2>

          <p>
            Java-based backend development with REST
            APIs and Spring Boot.
          </p>

        </div>


        <div className="highlight-card">

          <h2>Database</h2>

          <p>
            Working with SQL and MySQL for storing
            and managing application data.
          </p>

        </div>

      </div>

    </section>
  );
}

