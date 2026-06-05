"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Search, ArrowRight } from "lucide-react"
import { commandItems } from "@/lib/data"
import { scrollToSection } from "@/lib/utils"

interface CommandPaletteProps {
  open: boolean
  onClose: () => void
}

type FlatItem = {
  id: string
  label: string
  description: string
  href: string
  external?: boolean
  group: string
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const allItems: FlatItem[] = commandItems.flatMap((g) =>
    g.items.map((item) => ({ ...item, group: g.group }))
  )

  const filtered = query.trim()
    ? allItems.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.group.toLowerCase().includes(query.toLowerCase())
      )
    : allItems

  useEffect(() => {
    setSelected(0)
  }, [query])

  useEffect(() => {
    if (open) {
      setQuery("")
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  const handleSelect = useCallback(
    (item: FlatItem) => {
      onClose()
      if (item.external) {
        window.open(item.href, "_blank", "noopener")
      } else {
        const id = item.href.replace("#", "")
        setTimeout(() => scrollToSection(id), 100)
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelected((s) => Math.min(s + 1, filtered.length - 1))
      }
      if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelected((s) => Math.max(s - 1, 0))
      }
      if (e.key === "Enter" && filtered[selected]) {
        handleSelect(filtered[selected])
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [open, filtered, selected, onClose, handleSelect])

  const groupedFiltered = query.trim()
    ? [{ group: "Results", items: filtered }]
    : commandItems.map((g) => ({
        group: g.group,
        items: g.items as FlatItem[],
      }))

  let itemIndex = -1

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-xl bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
            >
              {/* Search input */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/8">
                <Search size={16} className="text-zinc-500 shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search commands, projects, pages…"
                  className="flex-1 bg-transparent text-sm text-zinc-100 placeholder-zinc-600 outline-none"
                />
                <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 text-xs text-zinc-600 bg-white/5 border border-white/8 rounded-md font-mono">
                  ESC
                </kbd>
              </div>

              {/* Items */}
              <div className="max-h-80 overflow-y-auto py-2">
                {filtered.length === 0 ? (
                  <p className="px-4 py-8 text-sm text-zinc-600 text-center">
                    No results for &quot;{query}&quot;
                  </p>
                ) : (
                  groupedFiltered.map((group) => (
                    <div key={group.group}>
                      <p className="px-4 py-2 text-xs font-mono text-zinc-600 tracking-widest uppercase">
                        {group.group}
                      </p>
                      {group.items.map((item) => {
                        itemIndex++
                        const idx = itemIndex
                        const isSelected = idx === selected
                        return (
                          <button
                            key={item.id}
                            onClick={() => handleSelect(item)}
                            onMouseEnter={() => setSelected(idx)}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                              isSelected ? "bg-white/6" : "hover:bg-white/4"
                            }`}
                          >
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-zinc-200 font-medium">{item.label}</p>
                              <p className="text-xs text-zinc-500 truncate">{item.description}</p>
                            </div>
                            {isSelected && (
                              <ArrowRight size={14} className="text-zinc-500 shrink-0" />
                            )}
                          </button>
                        )
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center gap-4 px-4 py-2.5 border-t border-white/6">
                <span className="flex items-center gap-1.5 text-xs text-zinc-600">
                  <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/8 rounded text-[10px] font-mono">↑↓</kbd>
                  navigate
                </span>
                <span className="flex items-center gap-1.5 text-xs text-zinc-600">
                  <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/8 rounded text-[10px] font-mono">↵</kbd>
                  select
                </span>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
