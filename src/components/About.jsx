import './About.css';
import { FaCode, FaCloud, FaTools } from "react-icons/fa";
import avatar from '../assets/avatar3.png';

function About() {
  return (
    <section className="about" id="about">

      <div className="about-wrapper">

        {/* LEFT TEXT */}
        <div className="about-left">
          <h1>
            Designing & Building <br />
            <span>Scalable</span> Cloud-Native <br />
            Applications.
          </h1>

          <p>
            I specialize in developing scalable, high-performance web applications 
            using modern technologies and cloud-driven architecture. My focus is on 
            building clean, efficient, and user-centric solutions that balance 
            performance with intuitive design.
          </p>

          <div className="about-stats">
            <div>
              <h3>3+</h3>
              <span>Projects Delivered</span>
            </div>

            <div>
              <h3>1+</h3>
              <span>Continuous Learning</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">

          {/* Avatar */}
          <div className="avatar-box">
            <img src={avatar} alt="Aradhana Avatar" />
          </div>

          {/* Info Card */}
          <div className="about-card">

            <div className="about-item">
              <FaCode className="about-icon" />
              <p>Developing full-stack applications using MERN stack.</p>
            </div>

            <div className="about-item">
              <FaCloud className="about-icon" />
              <p>Hands-on experience with Azure cloud deployment & infrastructure.</p>
            </div>

            <div className="about-item">
              <FaTools className="about-icon" />
              <p>Exploring DevOps practices to build scalable, reliable systems.</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;