import { useEffect, useRef } from "react";
import './About.css';
import avatar from '../assets/avatar3.png';

function About() {
  const leftRef  = useRef();
  const rightRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    if (leftRef.current)  observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-wrapper">

        {/* ── Left ── */}
        <div className="about-left reveal" ref={leftRef}>
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Designing &amp; Building <span>Scalable</span> Cloud-Native Apps
          </h2>
          <p className="about-desc">
            I specialize in developing high-performance web applications using modern
            technologies and cloud-driven architecture. My focus is on building clean,
            efficient, and user-centric solutions that balance performance with intuitive design.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-num">3+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">2+</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">∞</div>
              <div className="stat-label">Curiosity</div>
            </div>
          </div>
        </div>

        {/* ── Right ── */}
        <div className="about-right reveal" ref={rightRef}>

          <div className="avatar-container">
            <div className="avatar-ring" />
            <div className="avatar-inner">
              {avatar
                ? <img src={avatar} alt="Aradhana Mohanty" />
                : <span className="avatar-initials">AM</span>
              }
            </div>
          </div>

          <div className="about-info-cards">
            <div className="info-card">
              <div className="info-icon">💻</div>
              <p>Full-stack development using MERN stack — React, Node.js, Express &amp; MongoDB.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">☁️</div>
              <p>Hands-on experience with Azure cloud deployment &amp; infrastructure management.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">⚙️</div>
              <p>Exploring DevOps practices to build scalable, reliable and automated systems.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;