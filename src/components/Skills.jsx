import './Skills.css';
import { FaReact, FaNodeJs, FaDatabase, FaCloud, FaMicrosoft, FaPhp, FaAws } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiMysql } from "react-icons/si";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Technical Skills</h2>

      <div className="skills-container">

        {/* MERN */}
        <div className="skill-card">
          <FaReact className="icon" />
          <p>React.js</p>
        </div>

        <div className="skill-card">
          <FaNodeJs className="icon" />
          <p>Node.js</p>
        </div>

        <div className="skill-card">
          <SiMongodb className="icon" />
          <p>MongoDB</p>
        </div>

        <div className="skill-card">
          <SiJavascript className="icon" />
          <p>JavaScript</p>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <FaPhp className="icon" />
          <p>PHP</p>
        </div>

        {/* Database */}
        <div className="skill-card">
          <FaDatabase className="icon" />
          <p>Oracle SQL</p>
        </div>

        <div className="skill-card">
          <SiMysql className="icon" />
          <p>MySQL</p>
        </div>

        {/* Cloud */}
        <div className="skill-card">
          <FaMicrosoft className="icon" />
          <p>Azure</p>
        </div>

        <div className="skill-card">
          <FaAws className="icon" />
          <p>AWS (Basics)</p>
        </div>

        <div className="skill-card">
          <FaCloud className="icon" />
          <p>Cloud Concepts</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;