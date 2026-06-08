import { projects } from "@/lib/data"

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header" data-slam>
          <p className="section-label">Projects</p>
          <h2 className="section-title">Shipped.<br />Not hypothetical.</h2>
        </div>
      </div>

      <div className="projects-grid" data-slam data-slam-delay="0.06">
        {projects.map((project, i) => (
          <article key={project.id} className="project-cell">
            {project.featured && (
              <span className="project-featured-flag">Featured</span>
            )}
            <span className="project-bg-num">{String(i + 1).padStart(2, "0")}</span>

            <div className="project-cat-row">
              <span className="project-cat">{project.category}</span>
              <span className="project-year">{project.year}</span>
            </div>

            <h3 className="project-name">{project.name}</h3>
            <p className="project-tagline">{project.tagline}</p>

            <div className="project-metrics">
              {project.metrics.map((m) => (
                <span key={m} className="project-metric">{m}</span>
              ))}
            </div>

            <p className="project-tech-list">
              {project.tech.join(" / ")}
            </p>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn"
              >
                Visit ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
