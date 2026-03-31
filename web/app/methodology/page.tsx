import type { Metadata } from "next";
import Link from "next/link";
import { RULE_CATALOG, getSeverityBadgeClass } from "@/lib/rules";
import { GradeBadge } from "@/lib/grades";

const methodologyUrl = "https://www.tooltrust.dev/methodology";

export const metadata: Metadata = {
  title: "Methodology | ToolTrust",
  description:
    "How ToolTrust Scanner grades MCP servers, what each AS rule detects, and how ToolTrust maps findings to allow, approval, or block decisions.",
  alternates: {
    canonical: methodologyUrl,
  },
  openGraph: {
    title: "Methodology | ToolTrust",
    description:
      "How ToolTrust Scanner grades MCP servers, what each AS rule detects, and how ToolTrust maps findings to allow, approval, or block decisions.",
    url: methodologyUrl,
    siteName: "ToolTrust",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Methodology | ToolTrust",
    description:
      "How ToolTrust Scanner grades MCP servers, what each AS rule detects, and how ToolTrust maps findings to allow, approval, or block decisions.",
  },
};

const GRADES = [
  { grade: "A", score: "0-9", policy: "Allow" },
  { grade: "B", score: "10-24", policy: "Allow + rate limit" },
  { grade: "C", score: "25-49", policy: "Require approval" },
  { grade: "D", score: "50-74", policy: "Require approval" },
  { grade: "F", score: "75+", policy: "Block" },
];

export default function MethodologyPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Directory",
        item: "https://www.tooltrust.dev",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Methodology",
        item: methodologyUrl,
      },
    ],
  };
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "ToolTrust Security Methodology",
    description:
      "How ToolTrust Scanner grades MCP servers, what each AS rule detects, and how ToolTrust maps findings to allow, approval, or block decisions.",
    url: methodologyUrl,
    author: {
      "@type": "Organization",
      name: "AgentSafe-AI",
    },
    publisher: {
      "@type": "Organization",
      name: "AgentSafe-AI",
      url: "https://www.tooltrust.dev",
    },
    about: [
      "MCP server security",
      "AI agent security",
      "Static analysis",
      "Prompt injection",
      "Supply-chain risk",
    ],
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <nav className="text-sm text-zinc-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-zinc-400">
          Directory
        </Link>
        <span className="mx-1">/</span>
        <span className="text-zinc-400">Methodology</span>
      </nav>

      <section className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50">
          ToolTrust Security Methodology
        </h1>
        <p className="max-w-3xl text-zinc-400">
          How ToolTrust grades MCP servers, what each AS rule detects, and why those findings matter.
        </p>
      </section>

      <section className="space-y-4">
        <h2 id="grading" className="scroll-mt-24 text-2xl font-semibold text-zinc-100">
          Grading
        </h2>
        <p className="max-w-4xl text-sm leading-7 text-zinc-400 sm:text-base">
          Scores are worst-case across all tools in a server. Each finding adds weight based on
          severity: Critical (+25), High (+15), Medium (+8), Low (+2).
        </p>
        <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="px-4 py-3 font-medium text-zinc-400">Grade</th>
                <th className="px-4 py-3 font-medium text-zinc-400">Score</th>
                <th className="px-4 py-3 font-medium text-zinc-400">Policy</th>
              </tr>
            </thead>
            <tbody>
              {GRADES.map((row) => (
                <tr key={row.grade} className="border-b border-zinc-800/80 last:border-0">
                  <td className="px-4 py-3 text-zinc-300">
                    <GradeBadge grade={row.grade} size="sm" dark />
                  </td>
                  <td className="px-4 py-3 text-zinc-300">{row.score}</td>
                  <td className="px-4 py-3 text-zinc-300">{row.policy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 id="rule-catalog" className="scroll-mt-24 text-2xl font-semibold text-zinc-100">
          Rule Catalog
        </h2>
        <p className="max-w-4xl text-sm leading-7 text-zinc-400 sm:text-base">
          The directory UI and tool detail pages use this shared rule catalog, so labels, anchors,
          and emojis stay consistent everywhere on ToolTrust.
        </p>
      </section>

      <article className="space-y-6">
        {RULE_CATALOG.map((rule) => (
          <section
            key={rule.id}
            id={rule.id.toLowerCase()}
            className="scroll-mt-24 rounded-xl border border-zinc-800 bg-zinc-900/80 p-5"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded bg-zinc-800 px-2 py-1 font-mono text-sm text-zinc-300">
                {rule.id}
              </span>
              <h3 className="text-lg font-semibold text-zinc-100">
                <span className="mr-2">{rule.emoji}</span>
                {rule.title}
              </h3>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-400">
              <div>
                <p className="font-medium text-zinc-200">Severity</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {rule.severity.map((item) => (
                    <span
                      key={item}
                      className={getSeverityBadgeClass(item)}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-medium text-zinc-200">Detects</p>
                <p className="mt-1">{rule.detects}</p>
              </div>
              <div>
                <p className="font-medium text-zinc-200">Why it matters</p>
                <p className="mt-1">{rule.whyItMatters}</p>
              </div>
              <div>
                <p className="font-medium text-zinc-200">Recommendation</p>
                <p className="mt-1">{rule.recommendation}</p>
              </div>
            </div>
          </section>
        ))}
      </article>
    </div>
  );
}
