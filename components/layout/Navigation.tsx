"use client"

import { useState, useEffect } from "react"

const links = [
  { label: "About",    href: "#about" },
  { label: "Work",     href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills" },
  { label: "Teaching", href: "#teaching" },
  { label: "Contact",  href: "#contact" },
]

export function Navigation() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <nav className="nav" role="navigation" aria-label="Primary">
        <a href="#hero" className="nav-logo" onClick={(e) => { e.preventDefault(); handleNav("#hero") }}>
          VIMALRAJ<span>&nbsp;S</span>
        </a>

        <span className="nav-tagline">SWE · IAMNEO · NIIT VENTURE</span>

        <div className="nav-links" role="list">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="nav-link" role="listitem"
              onClick={(e) => { e.preventDefault(); handleNav(l.href) }}>
              {l.label}
            </a>
          ))}
          <a href="/resume.pdf" download="Vimalraj_S_Resume.pdf" className="nav-link nav-link-accent">
            Resume ↓
          </a>
        </div>

        <button className="nav-mobile-toggle" aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}>
          {open ? "✕" : "Menu"}
        </button>
      </nav>

      <div className={`nav-mobile-menu${open ? " open" : ""}`} aria-hidden={!open}>
        {links.map((l) => (
          <a key={l.label} href={l.href} className="nav-mobile-link"
            onClick={(e) => { e.preventDefault(); handleNav(l.href) }}>
            {l.label}
          </a>
        ))}
        <a href="/resume.pdf" download="Vimalraj_S_Resume.pdf" className="nav-mobile-link"
          onClick={() => setOpen(false)}>
          Resume ↓
        </a>
      </div>
    </>
  )
}
