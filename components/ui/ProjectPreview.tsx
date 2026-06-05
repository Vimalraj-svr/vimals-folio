"use client"

import { useState, useEffect, useRef } from "react"
import { ExternalLink, MonitorOff } from "lucide-react"

export function ProjectPreview({ url, name }: { url: string; name: string }) {
  const [status, setStatus] = useState<"loading" | "ready" | "blocked">("loading")
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    // If iframe hasn't fired onLoad within 6s, treat as blocked
    timerRef.current = setTimeout(() => {
      if (status === "loading") setStatus("blocked")
    }, 6000)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [])  // eslint-disable-line react-hooks/exhaustive-deps

  const domain = url.replace(/^https?:\/\//, "").replace(/\/$/, "")

  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-white/8 mb-5 bg-zinc-950 group/preview">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border-b border-white/6 shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-zinc-700" />
          <div className="w-2 h-2 rounded-full bg-zinc-700" />
          <div className="w-2 h-2 rounded-full bg-zinc-700" />
        </div>
        <div className="flex-1 bg-zinc-800 rounded-md px-2 py-0.5 text-center">
          <span className="text-[10px] font-mono text-zinc-500 truncate block">{domain}</span>
        </div>
      </div>

      {/* Preview area */}
      <div className="relative h-44 overflow-hidden bg-zinc-950">
        {status !== "blocked" && (
          <iframe
            ref={iframeRef}
            src={url}
            title={name}
            className="absolute top-0 left-0 border-0 pointer-events-none"
            style={{
              width: "200%",
              height: "200%",
              transform: "scale(0.5)",
              transformOrigin: "top left",
            }}
            onLoad={() => {
              if (timerRef.current) clearTimeout(timerRef.current)
              setStatus("ready")
            }}
            onError={() => {
              if (timerRef.current) clearTimeout(timerRef.current)
              setStatus("blocked")
            }}
          />
        )}

        {status === "blocked" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-4">
            <MonitorOff size={20} className="text-zinc-700" />
            <p className="text-xs text-zinc-600 font-mono">Preview restricted by site</p>
          </div>
        )}

        {status === "loading" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 border border-indigo-500/40 border-t-indigo-400 rounded-full animate-spin" />
          </div>
        )}

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-zinc-950 to-transparent pointer-events-none z-10" />

        {/* Hover overlay */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover/preview:opacity-100 transition-opacity duration-200 bg-black/50 backdrop-blur-[2px]"
        >
          <span className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white text-xs font-semibold rounded-lg shadow-lg">
            <ExternalLink size={12} />
            Open Live Site
          </span>
        </a>
      </div>
    </div>
  )
}
