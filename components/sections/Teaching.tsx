import { teaching } from "@/lib/data"

export function Teaching() {
  return (
    <section id="teaching" className="section">
      <div className="container">
        <div className="section-header" data-slam>
          <p className="section-label">Teaching & Mentorship</p>
          <h2 className="section-title">Building instinct<br />in others.</h2>
        </div>

        <div style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          {teaching.map((t, i) => (
            <div key={t.title} className="teaching-block" data-slam data-slam-delay={`${i * 0.07}`}>
              <div className="teaching-left">
                {t.students && (
                  <div className="teaching-big-stat">
                    <span className="teaching-big-num">{t.students}+</span>
                    <span className="teaching-big-label">Students</span>
                  </div>
                )}
                <h3 className="teaching-title">{t.title}</h3>
                <p className="teaching-org">{t.org} · {t.period}</p>
                <p className="teaching-desc">{t.description}</p>
                <span className="teaching-outcome">{t.outcome}</span>
              </div>

              <div className="teaching-right">
                <p className="teaching-right-title">Topics Covered</p>
                <div className="teaching-topics-list">
                  {t.topics.map((topic) => (
                    <span key={topic} className="teaching-topic-tag">{topic}</span>
                  ))}
                </div>
                <p className="teaching-right-body">
                  {i === 0
                    ? "Not a TA reading slides. A practitioner building instinct in others. Real curriculum, real feedback, measurable placement outcomes."
                    : "Establishing architectural patterns, code review culture, and engineering instincts that accelerate team delivery without sacrificing quality."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
