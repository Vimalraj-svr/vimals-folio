"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Badge } from "@/components/ui/Badge"
import { projects } from "@/lib/data"
import { ExternalLink, ChevronDown, ChevronUp, Layers } from "lucide-react"

export function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null)

  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Projects"
          title="Things I've shipped."
          description="Products built with real constraints — privacy, scale, latency, or a one-month deadline. Each one taught me something the job didn't."
        />

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              expanded={expanded === project.id}
              onToggle={() =>
                setExpanded(expanded === project.id ? null : project.id)
              }
            />
          ))}
        </div>

        {/* Smaller projects */}
        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4">
            {rest.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i + featured.length}
                expanded={expanded === project.id}
                onToggle={() =>
                  setExpanded(expanded === project.id ? null : project.id)
                }
                compact
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  expanded,
  onToggle,
  compact = false,
}: {
  project: (typeof projects)[number]
  index: number
  expanded: boolean
  onToggle: () => void
  compact?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div
        className={`relative glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/14 ${
          expanded ? "glow-brand" : ""
        }`}
        style={{
          background: expanded
            ? "rgba(99,102,241,0.04)"
            : "rgba(255,255,255,0.02)",
        }}
      >
        {/* Gradient top bar */}
        <div className={`h-px w-full bg-gradient-to-r ${project.gradient} opacity-60`} />

        <div className={compact ? "p-5" : "p-6"}>
          {/* Category + year */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-zinc-600 tracking-wide">{project.category}</span>
              {project.featured && (
                <span className="text-xs font-mono text-indigo-400/70">· featured</span>
              )}
            </div>
            <span className="text-xs font-mono text-zinc-700">{project.year}</span>
          </div>

          {/* Title + optional logo */}
          <div className="flex items-start justify-between gap-3 mb-1.5">
            <h3 className={`font-bold text-zinc-100 group-hover:text-white transition-colors ${compact ? "text-base" : "text-xl"}`}>
              {project.name}
            </h3>
            {"logo" in project && project.logo && (
              <div className="shrink-0 h-7 max-w-[80px] flex items-center">
                <Image
                  src={project.logo as string}
                  alt={project.name}
                  width={80}
                  height={28}
                  className="h-6 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: "screen" }}
                />
              </div>
            )}
          </div>
          <p className="text-sm text-zinc-500 mb-4 leading-relaxed">{project.tagline}</p>

          {/* Description */}
          {!compact && (
            <p className="text-sm text-zinc-500 mb-5 leading-relaxed">{project.description}</p>
          )}

          {/* Metrics */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.metrics.map((m) => (
              <Badge key={m} variant="muted">
                {m}
              </Badge>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-xs font-mono text-zinc-500 bg-white/4 border border-white/6 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-zinc-300 border border-white/10 rounded-lg hover:bg-white/6 hover:text-white hover:border-white/20 transition-all"
              >
                <ExternalLink size={12} />
                Visit
              </a>
            )}
            <button
              onClick={onToggle}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-300 border border-transparent hover:border-white/8 rounded-lg transition-all"
            >
              <Layers size={12} />
              {expanded ? "Less" : "Architecture"}
              {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </button>
          </div>
        </div>

        {/* Expanded architecture details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-white/6"
            >
              <div className="p-6 space-y-5">
                {/* Problem */}
                <div>
                  <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-2">
                    Problem
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed">{project.problem}</p>
                </div>

                {/* Architecture */}
                <div>
                  <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-2">
                    Architecture
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed">{project.architecture}</p>
                </div>

                {/* Challenges */}
                <div>
                  <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-2">
                    Engineering Challenges
                  </p>
                  <ul className="space-y-2">
                    {project.challenges.map((c, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-500">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-violet-500/60 shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
