import { useEffect, useRef } from "react";
import './Education.css';

function Education() {
  const ref0 = useRef();
  const ref1 = useRef();
  const ref2 = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    [ref0, ref1, ref2].forEach((r) => r.current && observer.observe(r.current));
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="education" id="education">
      <div className="education-inner">

        <div className="edu-header reveal" ref={ref0}>
          <p className="section-label">Academic Journey</p>
          <h2 className="section-title">My <span>Education</span></h2>
        </div>

        <div className="timeline">

          <div className="edu-item reveal" ref={ref1}>
            <div className="edu-content">
              <span className="edu-year">2024 – Present</span>
              <h3>Master of Computer Applications (MCA)</h3>
              <p>Silicon University, Bhubaneswar</p>
              <p>Specializing in Cloud &amp; Full Stack Development</p>
            </div>
            <div className="edu-node">🎓</div>
            <div className="edu-empty" />
          </div>

          <div className="edu-item reveal" ref={ref2}>
            <div className="edu-empty" />
            <div className="edu-node">🎓</div>
            <div className="edu-content">
              <span className="edu-year">2021 – 2024</span>
              <h3>BSc Information Technology &amp; Management</h3>
              <p>Buxi Jagabandhu Autonomous College</p>
              <p>Core foundations in IT, programming &amp; systems</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;
