import { skills } from "@/lib/data"

export function Skills() {
  const maxItems = Math.max(...skills.map((g) => g.items.length))

  return (
    <section id="skills" className="section section-bk">
      <div className="container">
        <div className="section-header" data-slam>
          <p className="section-label">Skills</p>
          <h2 className="section-title">Tools are means.<br />Decisions are the skill.</h2>
        </div>

        <div style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <div className="skills-outer" data-slam data-slam-delay="0.06">
            <table className="skills-table">
              <thead>
                <tr>
                  {skills.map((g) => (
                    <th key={g.category}>{g.category}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: maxItems }).map((_, rowIdx) => (
                  <tr key={rowIdx}>
                    {skills.map((g) => (
                      <td key={g.category}>{g.items[rowIdx] ?? ""}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
