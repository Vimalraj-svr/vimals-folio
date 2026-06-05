"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CommandPalette } from "@/components/ui/CommandPalette"
import { scrollToSection } from "@/lib/utils"

const navLinks = [
  { label: "Work", href: "experience" },
  { label: "Projects", href: "projects" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [cmdOpen, setCmdOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // ⌘K / Ctrl+K handler
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setCmdOpen((o) => !o)
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  // Active section tracking
  useEffect(() => {
    const sections = navLinks.map((l) => l.href)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/6"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="font-mono text-sm font-semibold tracking-widest text-zinc-300 hover:text-white transition-colors"
          >
            VS<span className="text-indigo-400">.</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  activeSection === link.href
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-200"
                }`}
              >
                {activeSection === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 bg-white/6 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </nav>

          {/* Right: cmd palette trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCmdOpen(true)}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 text-xs text-zinc-500 bg-white/4 border border-white/8 rounded-lg hover:bg-white/8 hover:text-zinc-300 transition-all font-mono"
            >
              <span>Search</span>
              <kbd className="flex items-center gap-0.5 text-zinc-600">
                <span>⌘</span>
                <span>K</span>
              </kbd>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden p-2 text-zinc-400 hover:text-zinc-200"
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5 w-5">
                <span
                  className={`block h-px bg-current transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-px bg-current transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-px bg-current transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-white/6 bg-[#050505]/95 backdrop-blur-xl overflow-hidden"
            >
              <nav className="px-6 py-4 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => {
                      setMobileOpen(false)
                      setTimeout(() => scrollToSection(link.href), 250)
                    }}
                    className="block w-full text-left px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-white/4 rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-2 border-t border-white/6">
                  <button
                    onClick={() => {
                      setMobileOpen(false)
                      setCmdOpen(true)
                    }}
                    className="block w-full text-left px-4 py-3 text-sm text-indigo-400 hover:bg-white/4 rounded-lg transition-colors font-mono"
                  >
                    ⌘K — Command Palette
                  </button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
    </>
  )
}
