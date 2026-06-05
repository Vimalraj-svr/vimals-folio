"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { profile } from "@/lib/data"
import { Mail, Phone, Copy, Check, MapPin, Send, ArrowRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqeqapk"

type FormState = "idle" | "loading" | "success" | "error"

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-md text-zinc-600 hover:text-zinc-300 hover:bg-white/6 transition-all"
      aria-label="Copy to clipboard"
    >
      {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
    </button>
  )
}

const contactLinks = [
  {
    icon: Mail,
    label: "Primary",
    value: profile.email,
    href: `mailto:${profile.email}`,
    copyable: true,
    description: "hello@thisisvimal.xyz",
    badge: "custom domain",
  },
  {
    icon: Mail,
    label: "Hotmail",
    value: profile.emailAlt,
    href: `mailto:${profile.emailAlt}`,
    copyable: true,
    description: "vimalrajsvr@hotmail.com",
    badge: null,
  },
  {
    icon: Mail,
    label: "Gmail",
    value: profile.emailGmail,
    href: `mailto:${profile.emailGmail}`,
    copyable: true,
    description: "vimalrajsvr404@gmail.com",
    badge: null,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/vimalrajs2002",
    href: profile.linkedin,
    copyable: false,
    description: "Professional background & updates",
    badge: null,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/vimalrajsvr404",
    href: profile.github,
    copyable: false,
    description: "Open source & side projects",
    badge: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    copyable: true,
    description: "+91 7604912953",
    badge: null,
  },
]

function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("loading")
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      })
      if (res.ok) {
        setFormState("success")
        setFields({ name: "", email: "", subject: "", message: "" })
      } else {
        setFormState("error")
      }
    } catch {
      setFormState("error")
    }
  }

  const inputBase =
    "w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 focus:ring-1 focus:ring-indigo-500/20 transition-all duration-200"

  return (
    <AnimatePresence mode="wait">
      {formState === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center py-16 text-center glass-card rounded-2xl border-emerald-500/20 bg-emerald-500/3"
        >
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-5">
            <CheckCircle size={28} className="text-emerald-400" />
          </div>
          <h3 className="text-lg font-semibold text-zinc-100 mb-2">Message sent.</h3>
          <p className="text-sm text-zinc-500 max-w-xs leading-relaxed mb-6">
            I&apos;ll read it carefully and get back to you within 24 hours.
          </p>
          <button
            onClick={() => setFormState("idle")}
            className="text-xs text-zinc-500 hover:text-zinc-300 underline decoration-zinc-700 hover:decoration-zinc-500 transition-all"
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Name + Email row */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-zinc-600 mb-2 tracking-wide">
                Your name
              </label>
              <input
                type="text"
                name="name"
                value={fields.name}
                onChange={handleChange}
                required
                placeholder="Firstname Lastname"
                className={inputBase}
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-zinc-600 mb-2 tracking-wide">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className={inputBase}
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-xs font-mono text-zinc-600 mb-2 tracking-wide">
              What&apos;s this about?
            </label>
            <select
              name="subject"
              value={fields.subject}
              onChange={handleChange}
              required
              className={`${inputBase} cursor-pointer`}
            >
              <option value="" disabled className="bg-zinc-900 text-zinc-400">
                Select a topic
              </option>
              <option value="Job Opportunity" className="bg-zinc-900">Job Opportunity</option>
              <option value="Project Collaboration" className="bg-zinc-900">Project Collaboration</option>
              <option value="Speaking / Event Invitation" className="bg-zinc-900">Speaking / Event Invitation</option>
              <option value="Technical Discussion" className="bg-zinc-900">Technical Discussion</option>
              <option value="Open Source / Tools" className="bg-zinc-900">Open Source / Tools</option>
              <option value="Other" className="bg-zinc-900">Other</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-mono text-zinc-600 mb-2 tracking-wide">
              Message
            </label>
            <textarea
              name="message"
              value={fields.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me what's on your mind. The more context, the better my response."
              className={`${inputBase} resize-none leading-relaxed`}
            />
          </div>

          {/* Error banner */}
          <AnimatePresence>
            {formState === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2.5 p-3.5 rounded-xl bg-red-500/8 border border-red-500/20 text-sm text-red-300"
              >
                <AlertCircle size={14} className="shrink-0" />
                Something went wrong. Email me directly at{" "}
                <a href={`mailto:${profile.email}`} className="underline hover:text-red-200">
                  {profile.email}
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit */}
          <button
            type="submit"
            disabled={formState === "loading"}
            className="group w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-indigo-500 hover:bg-indigo-400 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            {formState === "loading" ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending…
              </>
            ) : (
              <>
                <Send size={15} />
                Send Message
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </>
            )}
          </button>

          <p className="text-xs text-zinc-600 text-center">
            Powered by Formspree · No spam, ever.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#070707]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: headline + links */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-xs tracking-[0.2em] text-indigo-400 uppercase mb-4">
              // Contact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 leading-tight mb-6">
              Let&apos;s build something worth building.
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Whether it&apos;s a technical discussion, a product idea, an engineering role, or
              just an interesting problem — I&apos;m listening. I respond to every message that
              deserves a response.
            </p>

            {/* Status */}
            <div className="flex items-center gap-3 p-4 glass-card rounded-xl mb-8">
              <div className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-200">Open to impactful roles</p>
                <p className="text-xs text-zinc-500">Senior full-stack or engineering leadership positions</p>
              </div>
            </div>

            {/* Contact links */}
            <div className="space-y-3 mb-6">
              {contactLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="group flex items-center gap-3.5 p-4 glass-card rounded-xl hover:border-white/14 hover:bg-white/3 transition-all"
                >
                  <div className="p-2 rounded-lg bg-white/4 border border-white/8 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-all shrink-0">
                    <link.icon size={15} className="text-zinc-400 group-hover:text-indigo-400 transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-xs text-zinc-600">{link.label}</p>
                      {link.badge && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-md leading-none">
                          {link.badge}
                        </span>
                      )}
                    </div>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium text-zinc-200 hover:text-white transition-colors truncate block"
                    >
                      {link.value}
                    </a>
                  </div>
                  {link.copyable && <CopyButton text={link.value} />}
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-zinc-600">
              <MapPin size={14} />
              <span>{profile.location}</span>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="text-base font-semibold text-zinc-200 mb-1">Send a message</h3>
              <p className="text-xs text-zinc-600 mb-6">
                Prefer email? Write to{" "}
                <a href={`mailto:${profile.email}`} className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  {profile.email}
                </a>
              </p>
              <ContactForm />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
