"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons"

import { heroRoles, stats, profile } from "@/lib/data"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { scrollToSection } from "@/lib/utils"

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % heroRoles.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 left-[10%] w-[480px] h-[480px] rounded-full blur-[140px] animate-float"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 right-[10%] w-[400px] h-[400px] rounded-full blur-[140px] animate-float-delayed"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[160px] opacity-30"
        style={{ background: "radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="text-center">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/3 text-sm text-zinc-400 mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Senior Software Engineer · Iamneo, An NIIT Venture
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-6"
          >
            <span className="gradient-text">Vimalraj S</span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-10 flex items-center justify-center mb-6"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={heroRoles[roleIndex]}
                initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="text-xl md:text-2xl text-zinc-400 font-light tracking-wide"
              >
                {heroRoles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Building scalable enterprise platforms, AI-powered products, and developer tooling
            that engineers actually want to use.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              View My Work
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-2 px-6 py-3 border border-white/10 text-zinc-300 text-sm font-medium rounded-xl hover:bg-white/4 hover:text-white hover:border-white/20 transition-all duration-200"
            >
              <Mail size={16} />
              Get in Touch
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-center gap-4 mb-20"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-zinc-600 hover:text-zinc-300 transition-colors font-mono"
            >
              <GithubIcon size={14} />
              github.com/vimalrajsvr404
            </a>
            <span className="text-zinc-800">·</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-zinc-600 hover:text-zinc-300 transition-colors font-mono"
            >
              <LinkedinIcon size={14} />
              linkedin.com/in/vimalrajs2002
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/6"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-bg p-6 md:p-8 text-center group hover:bg-white/2 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold mb-1 text-zinc-100 tabular-nums">
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-zinc-300 mb-1">{stat.label}</div>
              <div className="text-xs text-zinc-600 font-mono">{stat.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex justify-center mt-12"
        >
          <div className="flex flex-col items-center gap-2 text-zinc-700">
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-px h-8 bg-linear-to-b from-zinc-600 to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
