"use client"

import { useState } from "react"
import { profile } from "@/lib/data"

const FORMSPREE = "https://formspree.io/f/xpqeqapk"

type FormState = "idle" | "sending" | "sent" | "error"

const contactLinks = [
  { type: "Email",    value: profile.email,                   href: `mailto:${profile.email}` },
  { type: "GitHub",  value: "github.com/Vimalraj-svr",        href: profile.github },
  { type: "LinkedIn",value: "linkedin.com/in/vimalrajs2002",  href: profile.linkedin },
  { type: "Phone",   value: profile.phone,                    href: `tel:${profile.phone.replace(/\s/g, "")}` },
]

export function Contact() {
  const [state, setState] = useState<FormState>("idle")
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState("sending")
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      })
      if (res.ok) {
        setState("sent")
        setFields({ name: "", email: "", subject: "", message: "" })
      } else {
        setState("error")
      }
    } catch {
      setState("error")
    }
  }

  return (
    <section id="contact" className="section">
      <div className="contact-grid" data-slam>

        {/* ── Left: black info panel ── */}
        <div className="contact-left">
          <h2 className="contact-title">
            Let&apos;s build<br />
            something<br />
            worth<br />
            building.
          </h2>

          {/* Status */}
          <div className="contact-status-bar">
            <span className="contact-status-dot" />
            <span className="contact-status-bar-text">
              Open to senior engineering &amp; leadership roles
            </span>
          </div>

          {/* Contact links */}
          <ul className="contact-links-list">
            {contactLinks.map((l) => (
              <li key={l.type}>
                <a
                  href={l.href}
                  className="contact-link-item"
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <span className="contact-link-type">{l.type}</span>
                  <span className="contact-link-value">{l.value}</span>
                  <span className="contact-link-arrow">↗</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Location */}
          <p style={{
            marginTop: "2rem",
            fontSize: "0.62rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.28)"
          }}>
            {profile.location}
          </p>
        </div>

        {/* ── Right: form panel ── */}
        <div className="contact-right">
          {state === "sent" ? (
            <div className="form-success">
              <span className="form-success-mark">✓</span>
              <h3>Message Sent.</h3>
              <p>I&apos;ll read it carefully and get back within 24 hours.</p>
              <button className="btn btn-primary" onClick={() => setState("idle")}>
                Send Another →
              </button>
            </div>
          ) : (
            <>
              <h3 className="contact-form-title">Send a Message</h3>

              {state === "error" && (
                <div className="form-error-bar">
                  Something went wrong — email me directly at {profile.email}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-border-box">
                  {/* Name + Email row */}
                  <div className="form-row">
                    <div className="form-group">
                      <div className="form-group-inner">
                        <label className="form-label">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={fields.name}
                          onChange={handleChange}
                          required
                          placeholder="Firstname Lastname"
                          className="form-input"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-group-inner">
                        <label className="form-label">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={fields.email}
                          onChange={handleChange}
                          required
                          placeholder="you@example.com"
                          className="form-input"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="form-group form-group-full">
                    <div className="form-group-inner">
                      <label className="form-label">Topic</label>
                      <select
                        name="subject"
                        value={fields.subject}
                        onChange={handleChange}
                        required
                        className="form-input"
                      >
                        <option value="">Select a topic</option>
                        <option>Job Opportunity</option>
                        <option>Project Collaboration</option>
                        <option>Technical Discussion</option>
                        <option>Speaking / Event Invitation</option>
                        <option>Open Source / Tools</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-group form-group-full">
                    <div className="form-group-inner" style={{ paddingBottom: "1.25rem" }}>
                      <label className="form-label">Message</label>
                      <textarea
                        name="message"
                        value={fields.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell me what's on your mind. The more context, the better my response."
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="form-submit-row">
                    <button
                      type="submit"
                      disabled={state === "sending"}
                      className="form-submit-btn"
                    >
                      {state === "sending" ? "Sending…" : "Send Message →"}
                    </button>
                  </div>
                </div>
              </form>

              {/* Resume links */}
              <div style={{ marginTop: "1.5rem", display: "flex", gap: 0 }}>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  View Resume
                </a>
                <a href="/resume.pdf" download="Vimalraj_S_Resume.pdf" className="btn btn-primary">
                  Download PDF ↓
                </a>
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  )
}
