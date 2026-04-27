import './Experience.css';
import cert1 from '../assets/cert1.jpg';  
import cert2 from '../assets/cert2.jpg';  
import logo from '../assets/itw.jpg';
import logo2 from '../assets/ibm.jpg' 

function Experience() {
  return (
    <section className="experience" id="experience">

      <h2>Work Experience</h2>

      {/* CARD 1 */}
      <div className="exp-card">

        {/* LEFT LOGO */}
        <div className="exp-left">
          <img src={logo} alt="company" />
        </div>

        {/* CENTER TEXT */}
        <div className="exp-center">
          <h3>Cloud & Azure Internship</h3>
          <p className="company">Ingenious Tech World, Silicon University, Bhubaneswar</p>
          <span className="date">June 2025 – July 2025</span>
        </div>

        {/* RIGHT CERTIFICATE */}
        <div className="exp-right">
          <img src={cert1} alt="certificate" />
        </div>

      </div>

      {/* CARD 2 */}
      <div className="exp-card">

        <div className="exp-left">
          <img src={logo2} alt="company" />
        </div>

        <div className="exp-center">
          <h3>Data Science 101</h3>
          <p className="company">IBM Developer Skill Network</p>
          <span className="date">2025</span>
        </div>

        <div className="exp-right">
          <img src={cert2} alt="certificate" />
        </div>

      </div>

    </section>
  );
}

export default Experience;