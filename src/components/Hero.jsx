import './Hero.css';
import { ReactTyped } from "react-typed";
import heroImg from '../assets/hero3.jpg'; // ✅ correct file name

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${heroImg})`
      }}
    >

      <div className="overlay">
        <div className="hero-content">

          <h1>Aradhana Mohanty</h1>

          <h2>
            <ReactTyped
              strings={[
                "Cloud Developer",
                "MERN Stack Developer",
                "Azure Enthusiast"
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </h2>

          <p>
            Building scalable web apps and deploying on cloud infrastructure.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn">View Work</a>
            <a href="/cv.pdf" download className="btn-outline">Download CV</a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;