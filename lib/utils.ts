import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    const navHeight = 64
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight
    window.scrollTo({ top, behavior: "smooth" })
  }
}
