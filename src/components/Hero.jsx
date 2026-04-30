import { useEffect, useState } from "react";
import './Hero.css';

const ROLES = [
  'Cloud Developer',
  'MERN Stack Developer',
  'Azure Enthusiast',
  'Full Stack Engineer',
];

function Hero() {
  const [displayed, setDisplayed] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let delay = deleting ? 40 : 85;

    if (!deleting && charIndex === current.length) {
      delay = 1800;
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
      return;
    }

    const timer = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!deleting && charIndex === current.length) {
        setDeleting(true);
      } else if (deleting) {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-content">

        <div className="hero-badge">
          <span className="pulse-dot" />
          Open to internships &amp; collaborations
        </div>

        <h1>Aradhana Mohanty</h1>

        <div className="hero-roles">
          <span className="typed">{displayed}</span>
          <span className="cursor">|</span>
        </div>

        <p>
          Building scalable web applications and deploying robust
          cloud-native solutions using modern technologies.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="/cv.pdf" download className="btn-ghost">Download CV</a>
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL</span>
        <span className="arrow">↓</span>
      </div>
    </section>
  );
}

export default Hero;