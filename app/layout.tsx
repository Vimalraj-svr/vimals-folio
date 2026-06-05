import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Vimalraj S — Senior Software Engineer",
  description:
    "Full Stack Engineer building scalable enterprise platforms, AI-powered products, and developer tooling. 40,000+ users served, 50,000+ document generations shipped.",
  keywords: [
    "full stack engineer",
    "angular",
    "react",
    "nodejs",
    "nestjs",
    "ai",
    "typescript",
    "vimalraj",
    "iamneo",
  ],
  authors: [{ name: "Vimalraj S" }],
  openGraph: {
    title: "Vimalraj S — Senior Software Engineer",
    description:
      "Full Stack Engineer building scalable enterprise platforms, AI-powered products, and developer tooling.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vimalraj S — Senior Software Engineer",
    description: "Building scalable systems at the intersection of intelligence and craft.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  )
}
