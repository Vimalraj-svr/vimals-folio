import { cn } from "@/lib/utils"

type BadgeVariant = "default" | "brand" | "violet" | "cyan" | "emerald" | "orange" | "muted"

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-white/5 text-zinc-300 border-white/10",
  brand: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  violet: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  orange: "bg-orange-500/10 text-orange-300 border-orange-500/20",
  muted: "bg-white/3 text-zinc-500 border-white/5",
}

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border font-mono tracking-wide",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
