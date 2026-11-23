import type { Metadata } from "next"
import { Anton, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Vimalraj S — Senior Software Engineer",
  description:
    "Senior Software Engineer leading a team of 5 on a 110,000+ user campus placement platform: AI features, MCP integrations, GKE reliability and cloud security.",
  keywords: ["full stack engineer", "angular", "react", "nodejs", "nestjs", "ai", "typescript", "vimalraj"],
  authors: [{ name: "Vimalraj S" }],
  openGraph: {
    title: "Vimalraj S — Senior Software Engineer",
    description: "Senior Software Engineer building scalable placement platforms, AI products and developer tooling.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vimalraj S — Senior Software Engineer",
    description: "Building scalable systems at the intersection of intelligence and craft.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${ibmPlexMono.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
