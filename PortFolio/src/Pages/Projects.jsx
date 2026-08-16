import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
export default function Projects() {
   const [projects, setProjects] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    fetch("http://localhost:3000/projects")

      .then((response) => {

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        return response.json();

      })

      .then((data) => {

        setProjects(data);

        setLoading(false);

      })

      .catch((error) => {

        setError(error.message);

        setLoading(false);

      });

  }, []);

  if (loading) {
    return (
      <div className="page">
        <h1>My Projects</h1>
        <p>Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <h1>My Projects</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="projects-page">

      <div className="projects-header">

        <p className="projects-subtitle">
          MY WORK
        </p>

        <h1>
          My <span>Projects</span>
        </h1>

        <p>
          Here are some of the projects I have built
          using modern web technologies.
        </p>

      </div>


      <div className="projects-grid">

        {projects.map((project) => (

          <div
            className="project-card"
            key={project.id}
          >

            <div className="project-number">
              0{project.id}
            </div>

            <div className="project-content">

              <h2>
                {project.title}
              </h2>

              <p>
                {project.description}
              </p>

              <div className="project-tech">
                {project.technology}
              </div>

              <div className="project-buttons">

                <Link
                  to={`/projects/${project.id}`}
                  className="view-button"
                >
                  View Details →
                </Link>

                <Link
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-button"
                >
                  GitHub
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}
