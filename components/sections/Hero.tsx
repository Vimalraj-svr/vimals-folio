import Image from "next/image"
import { stats, awards, profile } from "@/lib/data"

const stack = ["Angular", "NestJS", "FastAPI", "TypeScript", "GCP", "Gemini AI", "Cloudflare"]

const building = [
  "NeoPAT 2.0 ERP",
  "AI Mock Interview Platform",
]

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-body">
        {/* Left — name + tagline + CTAs */}
        <div className="hero-left" data-slam>
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">Senior Software Engineer · Iamneo</span>
          </div>

          <h1 className="hero-name">
            VIMAL<br />
            <span className="hero-name-accent">RAJ S.</span>
          </h1>

          <p className="hero-tagline">
            Building scalable enterprise platforms, AI-powered products, and
            developer tooling that engineers actually want to use. Currently
            shipping at Iamneo — an NIIT Venture.
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">View My Work →</a>
            <a href="#contact" className="btn btn-ghost">Get in Touch</a>
            <a href="/resume.pdf" download="Vimalraj_S_Resume.pdf" className="btn btn-ghost">Resume ↓</a>
          </div>
        </div>

        {/* Centre — photo column */}
        <div className="hero-photo-col">
          <Image
            src="/profile.png"
            alt="Vimalraj S"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 280px"
            style={{ objectFit: "cover", objectPosition: "top center", filter: "grayscale(1) contrast(1.45)", mixBlendMode: "multiply" }}
          />
        </div>

        {/* Right — structured info panel */}
        <div className="hero-right" data-slam data-slam-delay="0.08">
          {/* Role */}
          <div className="hero-role-block">
            <span className="hero-role-kicker">Current Role</span>
            <span className="hero-role-title">Senior Software<br />Engineer</span>
          </div>

          {/* Awards */}
          <div className="hero-awards-box">
            <span className="hero-awards-head">Recognition</span>
            {awards.map((a) => (
              <div key={a.title} className="hero-award-row">
                <span className="hero-award-dot" />
                <span>{a.title} — {a.period}</span>
              </div>
            ))}
          </div>

          {/* Currently building */}
          <div className="hero-building-block">
            <span className="hero-role-kicker">Currently Building</span>
            <div className="hero-building-items">
              {building.map((item) => (
                <div key={item} className="hero-building-item">
                  <span className="hero-building-bullet" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div className="hero-stack-block">
            <span className="hero-role-kicker">Stack</span>
            <div className="hero-stack-tags">
              {stack.map((s) => (
                <span key={s} className="hero-stack-tag">{s}</span>
              ))}
            </div>
          </div>

          {/* Social links — pinned to bottom */}
          <div className="hero-socials" style={{ marginTop: "auto" }}>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <span>github.com/Vimalraj-svr</span>
              <span className="hero-social-platform">Github</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-link">
              <span>linkedin.com/in/vimalrajs2002</span>
              <span className="hero-social-platform">LinkedIn</span>
            </a>
            <a href={`mailto:${profile.email}`} className="hero-social-link">
              <span>{profile.email}</span>
              <span className="hero-social-platform">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Stats table — full bleed */}
      <div className="stats-row" data-slam data-slam-delay="0.15">
        {stats.map((s) => (
          <div key={s.label} className="stat-cell">
            <span className="stat-number">{s.value}{s.suffix}</span>
            <span className="stat-label">{s.label}</span>
            <span className="stat-sub">{s.sub}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
