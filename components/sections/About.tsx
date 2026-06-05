"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { philosophy, awards } from "@/lib/data"
import { Trophy } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="About"
          title="Engineer first. Builder always."
          description="I didn't start by writing production code. I started by teaching it — and that changed how I think about everything."
        />

        {/* Photo + Narrative row */}
        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 mb-16">
          {/* Photo — 2/5 width, left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 flex justify-center md:justify-start"
          >
            <div className="relative w-full max-w-xs md:max-w-none">
              {/* Glow behind */}
              <div className="absolute -inset-3 rounded-3xl bg-indigo-500/12 blur-2xl" />
              {/* Gradient border */}
              <div className="relative p-[1.5px] rounded-2xl bg-linear-to-br from-indigo-500/60 via-violet-500/40 to-transparent">
                <div className="rounded-2xl overflow-hidden bg-zinc-950">
                  <Image
                    src="/images/profile.png"
                    alt="Vimalraj S"
                    width={480}
                    height={580}
                    className="w-full object-cover object-top"
                    priority
                  />
                </div>
              </div>
              {/* Floating name badge */}
              <div className="absolute -bottom-4 -right-4 px-4 py-2.5 glass-card rounded-xl border border-indigo-500/20 bg-indigo-500/8 backdrop-blur-xl">
                <p className="text-xs font-mono text-indigo-300 tracking-widest">VIMALRAJ S</p>
                <p className="text-[10px] text-zinc-500 mt-0.5">Senior Software Engineer</p>
              </div>
            </div>
          </motion.div>

          {/* Career narrative — 3/5 width */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-3 space-y-5 text-zinc-400 leading-relaxed pt-4"
          >
            <p>
              During my final two years at Bannari Amman Institute of Technology, I trained{" "}
              <span className="text-zinc-200 font-medium">105+ students</span> across C/C++,
              Machine Learning, and MERN Stack — not as a TA reading from slides, but as someone
              who had to figure out what makes complex ideas actually stick. That experience
              sharpened something more valuable than technical skill:{" "}
              <em className="text-zinc-300">clarity of thought</em>.
            </p>
            <p>
              In August 2023, I joined Iamneo as an intern. Within nine months, I had shipped
              real-time notification infrastructure, automated operational workflows, and
              IP-based security systems that cut fraudulent access by{" "}
              <span className="text-zinc-200 font-medium">95%</span>.
            </p>
            <p>
              By 2024, as Software Engineer, I was operating at a different scale — a WhatsApp
              system reaching{" "}
              <span className="text-zinc-200 font-medium">40,000+ students</span>, a resume
              platform processing{" "}
              <span className="text-zinc-200 font-medium">50,000+ documents</span> in its launch
              month, and a complete mobile-to-web migration in a single month.
            </p>
            <p>
              Today, as Senior Engineer, I design the systems that make the platform work: RBAC
              hierarchies, AI-powered interview pipelines, and the engineering culture that makes
              teams faster. I still teach — because it&apos;s how I stay sharp.
            </p>
          </motion.div>
        </div>

        {/* Philosophy cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-6">
            Engineering Philosophy
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {philosophy.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-xl p-5 hover:border-white/12 transition-colors group"
              >
                <h3 className="text-sm font-semibold text-zinc-200 mb-2 group-hover:text-white transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-6">
            Recognition
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card rounded-xl p-5 group hover:border-yellow-500/20 hover:bg-yellow-500/3 transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-1.5 rounded-lg bg-yellow-500/10">
                    <Trophy size={14} className="text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-600">{award.period}</p>
                    <p className="text-xs text-zinc-500">{award.org}</p>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-zinc-200 mb-2">{award.title}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
