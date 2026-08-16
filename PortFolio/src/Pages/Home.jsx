import React from 'react'
import { Link } from 'react-router-dom';
import SilambuV from "../assets/SilambuV.jpeg";
export default function Home() {
  return (
    <div className="home-page">

      <div className="home-container">

        {/* Left Content */}

        <div className="home-content">

          <p className="home-subtitle">
            👋 WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I'm <span>Silambu</span>
          </h1>

          <h2>
            Java Full Stack Developer
          </h2>

          <p className="home-description">
            I build modern, responsive and user-friendly
            web applications using Java, React,
            JavaScript, HTML, CSS and SQL.
          </p>


          {/* Buttons */}

          <div className="home-buttons">

            <Link
              to="/projects"
              className="primary-button"
            >
              View My Projects →
            </Link>

            <Link
              to="/contact"
              className="secondary-button"
            >
              Contact Me
            </Link>

          </div>


          {/* Technologies */}

          <div className="home-tech">

            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Java</span>
            <span>SQL</span>

          </div>

        </div>


        {/* Right Code Card */}

        <div className="home-visual">
<div className="profile-image-container">

    <img
      src={SilambuV}
      alt="Silambu V"
      className="profile-image"
    />

  </div>
          

        

        </div>

      </div>


      {/* Statistics */}

      <div className="home-stats">

        <div className="stat-card">

          <h2>10+</h2>

          <p>
            Projects
          </p>

        </div>


        <div className="stat-card">

          <h2>8+</h2>

          <p>
            Technologies
          </p>

        </div>


        <div className="stat-card">

          <h2>100%</h2>

          <p>
            Passion
          </p>

        </div>


        <div className="stat-card">

          <h2>24/7</h2>

          <p>
            Learning
          </p>

        </div>

      </div>

    </div>
    
  )
}
