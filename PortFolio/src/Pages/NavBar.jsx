import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SilambuV from "../assets/SilambuV.jpeg";

export default function NavBar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img src={SilambuV} alt="Silambu Logo" />
          <span>Silambu V</span>
        </NavLink>

        <nav className={`nav-links ${menuOpen ? "menu-open" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/About" onClick={closeMenu}>About</NavLink>
          <NavLink to="/Skills" onClick={closeMenu}>Skills</NavLink>
          <NavLink to="/Projects" onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/Contact" onClick={closeMenu}>Contact</NavLink>
        </nav>

        <div className="nav-actions">
          <button
            className="theme-button"
            onClick={() => setDarkMode(!darkMode)}
            title="Change Theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

      </div>
    </header>
  );
}