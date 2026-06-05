"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Badge } from "@/components/ui/Badge"
import { experience } from "@/lib/data"
import { MapPin } from "lucide-react"

const impactColorMap: Record<string, "brand" | "violet" | "cyan" | "emerald"> = {
  brand: "brand",
  violet: "violet",
  cyan: "cyan",
  emerald: "emerald",
}

const typeLabel: Record<string, { label: string; color: "brand" | "violet" | "cyan" | "emerald" | "muted" }> = {
  current: { label: "Current", color: "emerald" },
  "full-time": { label: "Full-time", color: "brand" },
  internship: { label: "Internship", color: "violet" },
  "part-time": { label: "Part-time", color: "cyan" },
}

export function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-[#070707]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Experience"
          title="How I grew, and what I shipped."
          description="Three years at one company, compounding ownership. From intern to senior engineer — here's the work."
        />

        <div className="relative">
          {/* ── Desktop: three-column layout — date | line+dot | card ── */}
          {/* ── Mobile: dot + card, date inside card ── */}

          {/* Vertical line — sits exactly on the dot column */}
          <div className="absolute left-3 md:left-[9.5rem] top-0 bottom-0 w-px bg-linear-to-b from-indigo-500/50 via-violet-500/25 to-transparent" />

          <div className="space-y-10">
            {experience.map((exp, expIdx) => {
              const type = typeLabel[exp.type]
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: expIdx * 0.05 }}
                  className="flex items-start gap-0"
                >
                  {/* ── Date column — desktop only, fixed width, right-aligned ── */}
                  <div className="hidden md:flex w-36 shrink-0 flex-col items-end pr-6 pt-[14px]">
                    {exp.period.split(" — ").map((part, i) => (
                      <span key={i} className="text-xs font-mono text-zinc-600 leading-5">
                        {i === 0 ? part : `— ${part}`}
                      </span>
                    ))}
                  </div>

                  {/* ── Dot — sits on the line ── */}
                  <div className="relative flex flex-col items-center shrink-0 w-6 pt-[14px]">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 ring-2 ring-indigo-500/30 ring-offset-2 ring-offset-[#070707] z-10" />
                  </div>

                  {/* ── Card ── */}
                  <div className="flex-1 min-w-0 pl-5 md:pl-8 pb-2">
                    <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-white/12 transition-all group">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                        <div>
                          <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                            <Badge variant={type.color}>{type.label}</Badge>
                            {/* Period — mobile only (desktop shows it in the date column) */}
                            <span className="text-xs font-mono text-zinc-600 md:hidden">
                              {exp.period}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-zinc-100 mb-0.5 group-hover:text-white transition-colors">
                            {exp.title}
                          </h3>
                          {/* Company + logo */}
                          <div className="flex items-center gap-2.5 mt-1">
                            {exp.logo && (
                              <div className="w-5 h-5 rounded-md overflow-hidden flex items-center justify-center bg-white/8 border border-white/10 shrink-0">
                                <Image
                                  src={exp.logo}
                                  alt={exp.company}
                                  width={20}
                                  height={20}
                                  className="w-full h-full object-contain"
                                  style={{ mixBlendMode: "screen" }}
                                />
                              </div>
                            )}
                            <p className="text-sm text-zinc-400 font-medium">{exp.company}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-zinc-600 shrink-0">
                          <MapPin size={12} />
                          {exp.location}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-5">
                        {exp.highlights.map((h, i) => (
                          <motion.div
                            key={h.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.06 }}
                          >
                            <div className="flex items-start gap-3">
                              <div className="mt-[7px] w-1 h-1 rounded-full bg-indigo-500/60 shrink-0" />
                              <div className="flex-1">
                                <div className="flex items-center gap-2.5 flex-wrap mb-1">
                                  <span className="text-sm font-semibold text-zinc-200">
                                    {h.title}
                                  </span>
                                  <Badge variant={impactColorMap[h.impactColor] || "brand"}>
                                    {h.impact}
                                  </Badge>
                                </div>
                                <p className="text-sm text-zinc-500 leading-relaxed">{h.body}</p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
