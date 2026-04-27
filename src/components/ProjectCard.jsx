function ProjectCard({ image, title, desc, tags, github, demo }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />

      <h3>{title}</h3>
      <p>{desc}</p>

      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>

      <div className="project-buttons">
        <a href={github} target="_blank" rel="noreferrer">GitHub</a>
        {demo && <a href={demo}>Live Demo</a>}
      </div>
    </div>
  );
}

export default ProjectCard;