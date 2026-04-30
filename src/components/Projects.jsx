import { useEffect, useRef } from "react";
import './Projects.css';

import railwayImg from '../assets/railwayde.jpg';
import azureImg   from '../assets/azurecd.jpg';
import quickImg   from '../assets/quickb.jpg';
import studentImg from '../assets/studentms.jpg';

const PROJECTS = [
  {
    image: quickImg,
    emoji: '🍔',
    title: 'QuickBite',
    desc: 'Full-featured food ordering platform built with the MERN stack — real-time updates, cart management, and seamless checkout.',
    tags: ['MERN', 'MongoDB', 'React'],
    github: 'https://github.com/Aradhana-Mohanty2000/quickbite-frontend',
    demo: 'https://quickbite-frontend-mocha.vercel.app/',
  },
  {
    image: azureImg,
    emoji: '☁️',
    title: 'Azure Cloud Deployment',
    desc: 'Deployed a full-stack application using Azure Virtual Machines, VNets, and cloud networking infrastructure.',
    tags: ['Azure', 'VM', 'VNet'],
    github: 'https://github.com/Aradhana-Mohanty2000/azure-fullstack-project',
  },
  {
    image: railwayImg,
    emoji: '🚂',
    title: 'Railway Data Engineering',
    desc: 'End-to-end ETL data pipelines for railway data processing, analysis, and visualization using Python and Pandas.',
    tags: ['Python', 'Pandas', 'Jupyter'],
    github: 'https://github.com/Aradhana-Mohanty2000/railway-data-engineering',
  },
  {
    image: studentImg,
    emoji: '🎓',
    title: 'MarkMyWord (SMS)',
    desc: 'Student management system for tracking and managing student records, marks, and profiles with a clean UI.',
    tags: ['HTML', 'CSS', 'MySQL'],
    github: 'https://github.com/Aradhana-Mohanty2000/markmywords',
  },
];

function Projects() {
  const headerRef = useRef();
  const cardRefs  = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    cardRefs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="projects-inner">

        <div className="projects-header reveal" ref={headerRef}>
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-subtitle">A selection of things I've built across full-stack and cloud domains.</p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div
              className="project-card reveal"
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
            >
              {p.image
                ? <img className="project-cover" src={p.image} alt={p.title} />
                : <div className="project-cover-placeholder">{p.emoji}</div>
              }

              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>

                <div className="project-tags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>

                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-link github">
                    ↗ GitHub
                  </a>
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="project-link demo">
                      ⚡ Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;