import Image from "next/image"
import { profile, philosophy, stats } from "@/lib/data"

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header" data-slam>
          <p className="section-label">About</p>
          <h2 className="section-title">Engineer.<br />Builder.<br />Pragmatist.</h2>
        </div>
      </div>

      <div className="about-top" data-slam data-slam-delay="0.06">
        <aside className="about-sidebar">
          <div className="about-sidebar-item">
            <span className="about-sidebar-num">{stats[0].value}{stats[0].suffix}</span>
            <span className="about-sidebar-label">Users Served</span>
          </div>
          <div className="about-sidebar-item">
            <span className="about-sidebar-num">{stats[1].value}{stats[1].suffix}</span>
            <span className="about-sidebar-label">Issues Resolved</span>
          </div>
          <div className="about-sidebar-item">
            <span className="about-sidebar-num">{stats[2].value}{stats[2].suffix}</span>
            <span className="about-sidebar-label">Students Trained</span>
          </div>
          <div className="about-sidebar-item">
            <span className="about-sidebar-num">{stats[3].value}{stats[3].suffix}</span>
            <span className="about-sidebar-label">Latency Cut</span>
          </div>
        </aside>

        <div className="about-text-block">
          <p className="about-intro">
            <strong>Full Stack Engineer specialising in enterprise-grade Angular systems, Node.js backends, and AI-powered workflows.</strong>{" "}
            {profile.summary.split('. ').slice(1).join('. ')}
          </p>
          <p className="about-intro" style={{ marginTop: "1.5rem" }}>
            Based in {profile.location}. Currently at {profile.company} — building platforms, mentoring engineers, and shipping things that matter.
          </p>
        </div>

        <div className="about-photo-col">
          <Image
            src="/profile.png"
            alt="Vimalraj S"
            fill
            sizes="240px"
            style={{ objectFit: "cover", objectPosition: "top center", filter: "grayscale(1) contrast(1.45)", mixBlendMode: "multiply" }}
          />
          <div className="about-photo-caption">
            <span className="about-photo-caption-name">Vimalraj S.</span>
            <span className="about-photo-caption-role">SWE · Iamneo</span>
          </div>
        </div>
      </div>

      <div className="philosophy-grid" data-slam data-slam-delay="0.1">
        {philosophy.map((p, i) => (
          <div key={p.title} className="philosophy-cell">
            <span className="philosophy-idx">0{i + 1}</span>
            <h3 className="philosophy-title">{p.title}</h3>
            <p className="philosophy-body">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
