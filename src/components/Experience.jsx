import { useEffect, useRef } from "react";
import './Experience.css';

/* ── swap to img src if you have the logos ── */
import logo  from '../assets/itw.jpg';
import logo2 from '../assets/ibm.jpg';

const EXPERIENCES = [
  {
    logo,
    logoFallback: 'ITW',
    title: 'Cloud & Azure Internship',
    company: 'Ingenious Tech World · Silicon University, Bhubaneswar',
    date: 'June 2025 – July 2025',
    badge: '🏅 Certificate Earned',
  },
  {
    logo: logo2,
    logoFallback: 'IBM',
    title: 'Data Science 101',
    company: 'IBM Developer Skill Network',
    date: '2025',
    badge: '🏅 Certificate Earned',
  },
];

function Experience() {
  const headerRef = useRef();
  const cardRefs  = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    cardRefs.current.forEach((r) => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience" id="experience">
      <div className="experience-inner">

        <div className="experience-header reveal" ref={headerRef}>
          <p className="section-label">Work History</p>
          <h2 className="section-title">Experience &amp; <span>Certifications</span></h2>
        </div>

        <div className="exp-grid">
          {EXPERIENCES.map((exp, i) => (
            <div
              className="exp-card reveal"
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
            >
              <div className="exp-logo">
                {exp.logo
                  ? <img src={exp.logo} alt={exp.logoFallback} />
                  : <span className="exp-logo-text">{exp.logoFallback}</span>
                }
              </div>
              <div className="exp-body">
                <h3>{exp.title}</h3>
                <p className="exp-company">{exp.company}</p>
                <p className="exp-date">{exp.date}</p>
              </div>
              <div className="exp-badge">{exp.badge}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;