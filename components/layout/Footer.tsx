import { profile } from "@/lib/data"
import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/6 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-zinc-600">
          <span className="font-mono tracking-widest text-zinc-500">
            VS<span className="text-indigo-400">.</span>
          </span>
          <span>© {year} Vimalraj S. Built with Next.js, Tailwind, Framer Motion.</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-300 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-300 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-zinc-600 hover:text-zinc-300 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
