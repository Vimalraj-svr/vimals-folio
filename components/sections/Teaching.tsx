"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { Badge } from "@/components/ui/Badge"
import { teaching } from "@/lib/data"
import { scrollToSection } from "@/lib/utils"
import { Users, Code2, Mic, ArrowRight, MapPin, Calendar, Sparkles } from "lucide-react"

const speakingTopics = [
  {
    title: "AI Products at Scale",
    description: "Building AI-powered platforms with async pipelines, contextual memory, and multilingual support — from prototype to 40K+ users.",
    tag: "AI / Product",
    color: "violet" as const,
  },
  {
    title: "Zero-Knowledge Architecture",
    description: "Designing systems where user data is never exposed — E2E encryption that doesn't break search, recall, or personalization.",
    tag: "Privacy / Security",
    color: "cyan" as const,
  },
  {
    title: "Angular at Enterprise Scale",
    description: "Modular architecture, RBAC design, performance optimization, and real-time data patterns in large Angular codebases.",
    tag: "Frontend / DX",
    color: "brand" as const,
  },
  {
    title: "Developer Experience as a Product",
    description: "Why DX is a product discipline — lessons from building VS Code extensions, automation tools, and internal platforms.",
    tag: "DevEx / Tooling",
    color: "emerald" as const,
  },
]

const formats = [
  { label: "Conference Talk", icon: "🎤", desc: "45–60 min keynote or session" },
  { label: "Workshop", icon: "🛠", desc: "Hands-on, 2–4 hours" },
  { label: "Panel Discussion", icon: "💬", desc: "Moderated Q&A or debate" },
  { label: "Podcast / Webinar", icon: "🎙", desc: "Remote, recorded or live" },
]

export function Teaching() {
  return (
    <section id="teaching" className="py-16 px-6 bg-[#070707]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Teaching & Speaking"
          title="Thinking out loud."
          description="Teaching is how I audit my own understanding. If I can't explain it clearly, I don't know it well enough."
        />

        {/* Teaching history */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {teaching.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl p-7 hover:border-white/14 transition-all group"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/15">
                  <Users size={18} className="text-indigo-400" />
                </div>
                <span className="text-xs font-mono text-zinc-600">{item.period}</span>
              </div>
              <h3 className="text-lg font-semibold text-zinc-100 mb-1 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-zinc-500 mb-4">{item.org}</p>
              <p className="text-sm text-zinc-500 leading-relaxed mb-5">{item.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.topics.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-mono text-indigo-300 bg-indigo-500/8 border border-indigo-500/15 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                <Code2 size={13} className="text-emerald-500" />
                <span className="text-xs text-zinc-500">{item.outcome}</span>
                {item.students && (
                  <Badge variant="emerald" className="ml-auto">{item.students}+ students</Badge>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Speaking Invitation ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-violet-500/8 via-indigo-500/6 to-transparent" />
          <div className="absolute inset-0 border border-violet-500/15 rounded-3xl" />

          {/* Blurred orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />

          <div className="relative p-8 md:p-12">
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-violet-500/15 border border-violet-500/20">
                    <Mic size={20} className="text-violet-400" />
                  </div>
                  <span className="text-xs font-mono text-violet-400 tracking-widest uppercase">
                    Open to Invitations
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-3 leading-tight">
                  Invite me to your conference,<br className="hidden sm:block" />
                  meetup, or event.
                </h3>
                <p className="text-zinc-400 leading-relaxed max-w-xl">
                  Whether you&apos;re running an engineering conference, a developer meetup,
                  a university tech fest, or a podcast — I&apos;m open to joining as a
                  <span className="text-zinc-200 font-medium"> speaker</span>,{" "}
                  <span className="text-zinc-200 font-medium">panelist</span>, or{" "}
                  <span className="text-zinc-200 font-medium">participant</span>. No topic
                  is too niche if the audience is curious.
                </p>
              </div>

              {/* CTA */}
              <div className="shrink-0">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="group flex items-center gap-2.5 px-6 py-3.5 bg-violet-500 hover:bg-violet-400 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 whitespace-nowrap"
                >
                  <Mic size={16} />
                  Send an Invitation
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
                <div className="flex items-center gap-1.5 mt-3 justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-zinc-500">Responds within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Topics I speak on */}
            <div className="mb-10">
              <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-5 flex items-center gap-2">
                <Sparkles size={11} className="text-violet-500" />
                Topics I speak on
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {speakingTopics.map((topic, i) => (
                  <motion.div
                    key={topic.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    className="bg-white/3 border border-white/7 rounded-xl p-4 hover:border-white/12 hover:bg-white/5 transition-all group/card"
                  >
                    <Badge variant={topic.color} className="mb-3">{topic.tag}</Badge>
                    <h4 className="text-sm font-semibold text-zinc-200 mb-2 group-hover/card:text-white transition-colors">
                      {topic.title}
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">{topic.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Format + details row */}
            <div className="flex flex-col lg:flex-row gap-8 pt-8 border-t border-white/6">
              {/* Formats */}
              <div className="flex-1">
                <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-4">
                  Available formats
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {formats.map((f) => (
                    <div key={f.label} className="flex flex-col gap-1.5 p-3 bg-white/3 border border-white/6 rounded-xl">
                      <span className="text-lg leading-none">{f.icon}</span>
                      <span className="text-xs font-semibold text-zinc-300">{f.label}</span>
                      <span className="text-[11px] text-zinc-600">{f.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick details */}
              <div className="lg:w-56 shrink-0 space-y-3">
                <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase mb-4">
                  Quick details
                </p>
                <div className="flex items-center gap-2.5 text-sm text-zinc-400">
                  <MapPin size={14} className="text-zinc-600 shrink-0" />
                  <span>Based in Tiruppur, TN</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-zinc-400">
                  <Calendar size={14} className="text-zinc-600 shrink-0" />
                  <span>In-person &amp; remote both</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-zinc-400">
                  <Mic size={14} className="text-zinc-600 shrink-0" />
                  <span>English &amp; Tamil</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white/6">
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    I don&apos;t charge for community events, open-source conferences, or university tech fests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
