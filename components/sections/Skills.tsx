"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { skills } from "@/lib/data"

const colorMap: Record<string, string> = {
  indigo: "bg-indigo-500/8 text-indigo-300 border-indigo-500/15 hover:bg-indigo-500/14 hover:border-indigo-500/25",
  violet: "bg-violet-500/8 text-violet-300 border-violet-500/15 hover:bg-violet-500/14 hover:border-violet-500/25",
  cyan: "bg-cyan-500/8 text-cyan-300 border-cyan-500/15 hover:bg-cyan-500/14 hover:border-cyan-500/25",
  purple: "bg-purple-500/8 text-purple-300 border-purple-500/15 hover:bg-purple-500/14 hover:border-purple-500/25",
  emerald: "bg-emerald-500/8 text-emerald-300 border-emerald-500/15 hover:bg-emerald-500/14 hover:border-emerald-500/25",
  orange: "bg-orange-500/8 text-orange-300 border-orange-500/15 hover:bg-orange-500/14 hover:border-orange-500/25",
}

const headerColorMap: Record<string, string> = {
  indigo: "text-indigo-400",
  violet: "text-violet-400",
  cyan: "text-cyan-400",
  purple: "text-purple-400",
  emerald: "text-emerald-400",
  orange: "text-orange-400",
}

export function Skills() {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Skills"
          title="What I work with."
          description="Tools are means, not ends. The decisions around when to use which tool — that's the skill."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: groupIdx * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass-card rounded-2xl p-6 hover:border-white/12 transition-colors"
            >
              <p
                className={`text-xs font-mono tracking-widest uppercase mb-4 font-semibold ${
                  headerColorMap[group.color]
                }`}
              >
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: groupIdx * 0.07 + i * 0.03 }}
                    className={`px-2.5 py-1 text-xs font-mono border rounded-lg transition-all cursor-default ${
                      colorMap[group.color]
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
