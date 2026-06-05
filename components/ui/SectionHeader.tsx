"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <p className="font-mono text-xs tracking-[0.2em] text-indigo-400 uppercase mb-4">
        // {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  )
}
