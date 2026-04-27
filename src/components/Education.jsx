import './Education.css';
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section className="education" id="education">
      <h2>Education</h2>

      <div className="timeline">

        {/* MCA */}
        <div className="edu-card left">
          <div className="edu-header">
            <FaGraduationCap className="edu-icon" />
            <h3>MCA (Master of Computer Applications)</h3>
          </div>

          <span className="year">2024 – Present</span>
          <p>SILICON UNIVERSITY Bhubaneswar</p>
          <p>Specializing in Cloud & Full Stack Development</p>
        </div>

        {/* Bachelor */}
        <div className="edu-card right">
          <div className="edu-header">
            <FaGraduationCap className="edu-icon" />
            <h3>Bachelor's Degree</h3>
          </div>

          <span className="year">2021 – 2024</span>
          <p>BSc Information Technology & Management</p>
          <p>Buxi Jagabandhu Autonomous College</p>
        </div>

      </div>
    </section>
  );
}

export default Education;
// function Education() {
//   return (
//     <section style={{ padding: "100px", color: "white" }}>
//       <h1>HELLO EDUCATION</h1>
//     </section>
//   );
// }
// export default Education;