import React from "react";
import { Link, useParams } from "react-router-dom";

const projects = [
  {
    id: "1",
    title: "Student Management System",
    description:
      "A responsive student management application for adding, viewing, updating and managing student information.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    features: [
      "Add new students",
      "View student details",
      "Edit student information",
      "Delete students",
      "Responsive design",
    ],
  },

  {
    id: "2",
    title: "Employee Management System",
    description:
      "A web application designed to manage employee information and provide an easy-to-use interface for employee records.",
    technologies: ["React", "JavaScript", "CSS"],
    features: [
      "Employee registration",
      "Employee list",
      "Employee details",
      "Search employees",
      "Responsive interface",
    ],
  },

  {
    id: "4",
    title: "Portfolio Website",
    description:
      "A personal developer portfolio website showcasing my skills, projects, experience and contact information.",
    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "React Router",
    ],
    features: [
      "Responsive design",
      "Dark and light mode",
      "React Router navigation",
      "Project showcase",
      "Contact form",
    ],
  },

  {
    id: "3",
    title: "E-Commerce Website",
    description:
      "A responsive e-commerce website where users can browse products and view detailed product information.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    features: [
      "Product listing",
      "Product details",
      "Search functionality",
      "Responsive design",
      "Navigation",
    ],
  },
];

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (item) => item.id === id);

  if (!project) {
    return (
      <div className="project-details-page">
        <div className="project-not-found">
          <h1>Project Not Found</h1>

          <p>
            The project you are looking for does not exist.
          </p>

          <Link
            to="/Projects"
            className="primary-button"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-details-page">

  

      <div className="project-details-header">

        <p className="projects-subtitle">
          PROJECT DETAILS
        </p>

        <h1>
          {project.title}
        </h1>

        <p>
          {project.description}
        </p>

      </div>


     

      <div className="project-details-container">

     

        <div className="project-details-card">

          <h2>
            About This Project
          </h2>

          <p>
            {project.description}
          </p>

        </div>


    

        <div className="project-details-card">

          <h2>
            Technologies Used
          </h2>

          <div className="project-detail-tech">

            {project.technologies.map(
              (technology, index) => (
                <span key={index}>
                  {technology}
                </span>
              )
            )}

          </div>

        </div>


       

        <div className="project-details-card">

          <h2>
            Key Features
          </h2>

          <ul className="project-features">

            {project.features.map(
              (feature, index) => (
                <li key={index}>
                  {feature}
                </li>
              )
            )}

          </ul>

        </div>



        <div className="project-detail-buttons">

          <Link
            to="/Projects"
            className="secondary-button"
          >
            ← Back to Projects
          </Link>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            View GitHub →
          </a>

        </div>

      </div>

    </div>
  );
}