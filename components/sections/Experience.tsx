import { experience } from "@/lib/data"

const badgeLabel: Record<string, string> = {
  current: "Current",
  "full-time": "Full-time",
  internship: "Internship",
  "part-time": "Part-time",
}

export function Experience() {
  return (
    <section id="experience" className="section section-bk">
      <div className="container">
        <div className="section-header" data-slam>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Three years.<br />One company.<br />Compounding ownership.</h2>
        </div>

        <div style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          {experience.map((exp, i) => (
            <div key={exp.id} className="exp-entry" data-slam data-slam-delay={`${i * 0.07}`}>
              <div className="exp-sidebar">
                <span className="exp-period">{exp.period.replace(" — ", "\n— ")}</span>
                <span className={`exp-badge${exp.type === "current" ? " exp-badge-current" : ""}`}>
                  {badgeLabel[exp.type] ?? exp.type}
                </span>
                <h3 className="exp-title">{exp.title}</h3>
                <p className="exp-company">{exp.company}</p>
                <p className="exp-location">{exp.location}</p>
              </div>

              <div className="exp-body">
                {exp.highlights.map((h) => (
                  <div key={h.title} className="exp-highlight">
                    <span className="exp-impact">{h.impact}</span>
                    <div>
                      <p className="exp-highlight-title">{h.title}</p>
                      <p className="exp-highlight-body">{h.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
