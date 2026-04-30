import { useEffect, useRef } from "react";
import './Skills.css';

const SKILLS = [
  { icon: '⚛️', name: 'React.js',      level: 'Frontend'     },
  { icon: '🟢', name: 'Node.js',       level: 'Backend'      },
  { icon: '🍃', name: 'MongoDB',       level: 'Database'     },
  { icon: '🟨', name: 'JavaScript',    level: 'Language'     },
  { icon: '🐘', name: 'PHP',           level: 'Backend'      },
  { icon: '🗄️', name: 'Oracle SQL',   level: 'Database'     },
  { icon: '🐬', name: 'MySQL',         level: 'Database'     },
  { icon: '🔷', name: 'Azure',         level: 'Cloud'        },
  { icon: '🟠', name: 'AWS Basics',    level: 'Cloud'        },
  { icon: '☁️', name: 'Cloud Concepts',level: 'Architecture' },
  { icon: '🐍', name: 'Python',        level: 'Data / Scripts'},
  { icon: '🔧', name: 'Git / GitHub',  level: 'DevOps'       },
];

function Skills() {
  const headerRef = useRef();
  const gridRef   = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    if (gridRef.current)   observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills" id="skills">
      <div className="skills-inner">

        <div className="skills-header reveal" ref={headerRef}>
          <p className="section-label">Technical Stack</p>
          <h2 className="section-title">Skills &amp; <span>Technologies</span></h2>
        </div>

        <div className="skills-grid reveal" ref={gridRef}>
          {SKILLS.map((s) => (
            <div className="skill-card" key={s.name}>
              <span className="skill-icon">{s.icon}</span>
              <span className="skill-name">{s.name}</span>
              <span className="skill-level">{s.level}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;