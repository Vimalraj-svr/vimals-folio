import { profile } from "@/lib/data"

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-name">
              VIMAL<span>RAJ S</span>
            </div>
            <p className="footer-sub">Senior Software Engineer · Iamneo · NIIT Venture</p>
          </div>

          <div className="footer-links-col">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="footer-link">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
              LinkedIn ↗
            </a>
            <a href={`mailto:${profile.email}`} className="footer-link">
              Email ↗
            </a>
            <a href="/resume.pdf" download="Vimalraj_S_Resume.pdf" className="footer-link">
              Resume ↓
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 Vimalraj S. Built raw — Next.js 16, pure CSS, GSAP.
          </p>
          <span className="footer-domain">thisisvimal.xyz</span>
        </div>
      </div>
    </footer>
  )
}
