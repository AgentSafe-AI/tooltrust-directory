import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ArrowUpRight } from "lucide-react";
import "./globals.css";
import Link from "next/link";
import { ToolTrustLogo } from "@/components/ToolTrustLogo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ToolTrust — Static Analyzer for AI Agents",
  description:
    "Automated static analysis and linting for MCP servers and AI agent tools. Grades and findings for safe tool adoption.",
  metadataBase: new URL("https://www.tooltrust.dev"),
  openGraph: {
    title: "ToolTrust — Static Analyzer for AI Agents",
    description:
      "Scan MCP servers for prompt injection, excessive permissions, and supply-chain risk before your agent trusts them.",
    url: "https://www.tooltrust.dev",
    siteName: "ToolTrust",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ToolTrust MCP Security Directory",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolTrust — Static Analyzer for AI Agents",
    description:
      "Scan MCP servers for prompt injection, excessive permissions, and supply-chain risk before your agent trusts them.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon",
    shortcut: "/icon",
    apple: "/icon",
  },
};

const scannerRepoUrl = "https://github.com/AgentSafe-AI/tooltrust-scanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#09090b] text-zinc-200`}
      >
        <header className="border-b border-zinc-800/80 bg-zinc-900/80 backdrop-blur-md sticky top-0 z-50">
          <div className="mx-auto flex min-h-14 max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:flex-nowrap sm:py-0">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-emerald-400"
            >
              <ToolTrustLogo className="h-6 w-6" />
              ToolTrust
            </Link>
            <nav className="flex flex-wrap items-center gap-3 text-sm text-zinc-400 sm:gap-6">
              <Link href="/" className="flex items-center py-1 hover:text-zinc-100 sm:py-3">
                Directory
              </Link>
              <a
                href={scannerRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 py-1 hover:text-zinc-100 sm:py-3"
              >
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <footer className="border-t border-zinc-800/80 mt-16">
          <div className="mx-auto max-w-6xl px-4 py-6 flex flex-wrap items-center justify-between gap-4 text-sm text-zinc-500">
            <span>© 2026 AgentSafe-AI · MIT License</span>
            <div className="flex items-center gap-6">
              <a href="mailto:contact@tooltrust.dev" className="hover:text-zinc-300">
                contact@tooltrust.dev
              </a>
              <a
                href={scannerRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-zinc-300"
              >
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
