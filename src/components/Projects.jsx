import './Projects.css';
import ProjectCard from './ProjectCard';

import railwayImg from '../assets/railwayde.jpg';
import azureImg from '../assets/azurecd.jpg';   // ✅ fixed
import quickImg from '../assets/quickb.jpg';

import { useRef } from "react";

function Projects() {

  const scrollRef = useRef();

  const scroll = (dir) => {
    if (dir === "left") {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="slider-wrapper">

        {/* LEFT BUTTON */}
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          ◀
        </button>

        {/* SLIDER */}
        <div className="projects-slider" ref={scrollRef}>

          <ProjectCard
            image={quickImg}
            title="QuickBite (MERN)"
            desc="Food ordering platform using MERN stack."
            tags={["MERN", "MongoDB", "React"]}
            github="https://github.com/Aradhana-Mohanty2000/quickbite-frontend"
            demo="https://quickbite-frontend-mocha.vercel.app/"
          />

          <ProjectCard
            image={azureImg}
            title="Azure Cloud Deployment"
            desc="Deployed full stack app using Azure cloud."
            tags={["Azure", "VM", "VNet"]}
            github="https://github.com/Aradhana-Mohanty2000/azure-fullstack-project"
          />

          <ProjectCard
            image={railwayImg}
            title="Railway Data Engineering"
            desc="Built data pipelines for railway data processing using ETL and analytics."
            tags={["Pandas", "Python", "Jupyter"]}
            github="https://github.com/Aradhana-Mohanty2000/railway-data-engineering"
          />

        </div>

        {/* RIGHT BUTTON */}
        <button className="scroll-btn right" onClick={() => scroll("right")}>
          ▶
        </button>

      </div>
    </section>
  );
}

export default Projects;