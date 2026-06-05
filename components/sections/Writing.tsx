"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { writingTopics } from "@/lib/data"
import { FileText, ArrowRight, Rss } from "lucide-react"

export function Writing() {
  return (
    <section id="writing" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Writing"
          title="Ideas worth writing down."
          description="Technical articles on the decisions, trade-offs, and lessons behind the systems I've built."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Coming soon card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 glass-card rounded-2xl p-10 text-center border-dashed"
          >
            <div className="flex justify-center mb-5">
              <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/15">
                <Rss size={24} className="text-indigo-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-zinc-200 mb-3">First post in progress</h3>
            <p className="text-sm text-zinc-500 max-w-md mx-auto leading-relaxed mb-8">
              I write when I have something specific to say — not for the sake of content. The first few articles are already taking shape.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {writingTopics.map((topic, i) => (
                <motion.span
                  key={topic}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="px-3.5 py-1.5 text-xs font-medium text-zinc-500 bg-white/4 border border-white/8 rounded-full hover:text-zinc-300 hover:bg-white/6 transition-colors cursor-default"
                >
                  {topic}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Subscribe placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-3 text-sm text-zinc-600"
        >
          <FileText size={14} />
          <span>
            Follow{" "}
            <a
              href="https://github.com/vimalrajsvr404"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white underline decoration-zinc-700 hover:decoration-zinc-400 transition-all"
            >
              GitHub
            </a>{" "}
            for updates when articles go live.
          </span>
        </motion.div>
      </div>
    </section>
  )
}
