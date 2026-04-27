import { useState } from "react";
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <h2 className="logo">Aradhana Mohanty</h2>

      {/* Hamburger */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </li>
        <li>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        </li>
        <li>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
        </li>
        <li> 
          <a href ="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        </li>
        <li>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;