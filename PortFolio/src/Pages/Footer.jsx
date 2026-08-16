import React from 'react'
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}

        <div className="footer-section">

          <h2>
            <span>Silambu V</span>
          </h2>

          <p>
            Java Full Stack Developer passionate about
            creating modern, responsive and user-friendly
            web applications.
          </p>

        </div>


        {/* Quick Links */}

        <div className="footer-section">

          <h3>
            Quick Links
          </h3>

          <div className="footer-links">

            <Link to="/">
              Home
            </Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/skills">
              Skills
            </Link>

            <Link to="/projects">
              Projects
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>

        </div>


        {/* Technologies */}

        <div className="footer-section">

          <h3>
            Technologies
          </h3>

          <p>HTML & CSS</p>

          <p>JavaScript & React</p>

          <p>Java & Spring Boot</p>

          <p>MySQL & SQL</p>

        </div>


        {/* Contact */}

        <div className="footer-section">

          <h3>
            Get In Touch
          </h3>

          <p>
            📧 vksilambu14@gamil.com
          </p>

          <p>
            📱 +91 90257 56596
          </p>
            <p> 📍 2/99a,VKS Brothers Home,Andipatti,Tiruvannamalai,Tamil Nadu.</p>
              <p>
                
              </p>
        </div>

      </div>


      {/* Bottom */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Silambu.
          All Rights Reserved.
        </p>

        <p>
          Built with ❤️ using React
        </p>

      </div>

    </footer>
  )
}
