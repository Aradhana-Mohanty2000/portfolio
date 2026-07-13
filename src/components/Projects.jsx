import { useEffect, useRef } from "react";
import './Projects.css';

import railwayImg from '../assets/railwayde.jpg';
import azureImg   from '../assets/azurecd.jpg';
import studentImg from '../assets/studentms.jpg';
import jenkinscicdImg    from '../assets/jenkins cicd.jpg';
import awsserver from '../assets/awsserver.jpg';

const PROJECTS = [
  {
    emoji: '☁️',
    image: awsserver,
    title: 'AWS Serverless Data Pipeline',
    desc: 'End-to-end automated data pipeline using AWS S3, Lambda, Glue ETL, Glue Crawler, CloudWatch, SNS, and EventBridge — processes retail sales CSV/Parquet data with zero manual intervention.',
    tags: ['AWS S3', 'AWS Glue', 'Lambda', 'EventBridge', 'SNS', 'CloudWatch'],
    github: 'https://github.com/Aradhana-Mohanty2000/AWS-Serverless-Data-Pipeline',
  },
  {
    emoji: '🚀',
    image: jenkinscicdImg,
    title: 'Jenkins CI/CD — React to EKS',
    desc: 'Complete CI/CD pipeline using Jenkins on EC2 to automatically build, dockerize, and deploy a React Vite app to Amazon EKS. Every Git push triggers a new build, image push to ECR, and K8s deployment.',
    tags: ['Jenkins', 'Docker', 'Amazon EKS', 'Kubernetes', 'ECR', 'CI/CD'],
    github: 'https://github.com/Aradhana-Mohanty2000/Jenkins-CI-CD-',
  },
  {
    emoji: '🔷',
    image: azureImg,
    title: 'Azure Cloud Full-Stack Deployment',
    desc: 'Deployed a production-ready full-stack application on Microsoft Azure using VM, VNet, Load Balancer, and LAMP stack with VMSS auto-scaling and SSL/HTTPS configuration.',
    tags: ['Azure', 'VMSS', 'Load Balancer', 'LAMP', 'SSL'],
    github: 'https://github.com/Aradhana-Mohanty2000/azure-fullstack-project',
  },
  {
    emoji: '🚂',
    image: railwayImg,
    title: 'Railway Data Engineering Pipeline',
    desc: 'End-to-end ETL data pipeline for railway dataset — data ingestion, cleaning, transformation, and analytical visualization using Python, Pandas, and Jupyter Notebook.',
    tags: ['Python', 'Pandas', 'ETL', 'Jupyter'],
    github: 'https://github.com/Aradhana-Mohanty2000/railway-data-engineering',
  },
  {
    emoji: '🎓',
    image: studentImg,
    title: 'MarkMyWord — Student Management System',
    desc: 'Student records management system with full CRUD operations, secure MySQL database connectivity, and clean UI built using HTML, CSS, PHP, and MySQL.',
    tags: ['HTML', 'CSS', 'PHP', 'MySQL'],
    github: 'https://github.com/Aradhana-Mohanty2000/markmywords',
  },
];

function Projects() {
  const headerRef = useRef();
  const cardRefs  = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
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
          <p className="section-subtitle">
            Cloud, DevOps &amp; Data Engineering projects built with real AWS and Azure infrastructure.
          </p>
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
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link github"
                  >
                    ↗ GitHub
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link demo"
                    >
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