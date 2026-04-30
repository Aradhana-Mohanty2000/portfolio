import { useState } from "react";
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const close = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">
        Aradhana<span className="dot">.</span>
      </a>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#about"      onClick={close}>About</a></li>
        <li><a href="#skills"     onClick={close}>Skills</a></li>
        <li><a href="#education"  onClick={close}>Education</a></li>
        <li><a href="#experience" onClick={close}>Experience</a></li>
        <li><a href="#projects"   onClick={close}>Projects</a></li>
        <li><a href="#contact"    onClick={close}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;