import { getAllReports, displayGrade } from "@/lib/data";
import { GradeBadge } from "@/lib/grades";
import { RegistryWithFilters } from "@/components/RegistryWithFilters";
import Link from "next/link";
import { Terminal } from "lucide-react";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const reports = getAllReports();
  const sorted = [...reports].sort((a, b) => {
    const starsA = a.stars ?? 0;
    const starsB = b.stars ?? 0;
    if (starsB !== starsA) return starsB - starsA;
    const rank: Record<string, number> = {
      S: 0,
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      F: 5,
    };
    const gA = rank[displayGrade(a)] ?? 6;
    const gB = rank[displayGrade(b)] ?? 6;
    return gA - gB;
  });
  const sTier = sorted.filter((r) => displayGrade(r) === "S");

  const safeCount = reports.filter((r) =>
    ["S", "A", "B"].includes(displayGrade(r))
  ).length;
  const riskyCount = reports.filter((r) =>
    ["D", "F"].includes(displayGrade(r))
  ).length;

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
          AI Agent Tool Security Directory
        </h1>
        <p className="max-w-2xl text-zinc-400">
          Security analysis for MCP servers, skills, and AI agent tools. Every
          tool is scanned for prompt injection, permission risks, and scope
          mismatches.
        </p>

        {/* Stats row: 3 dark cards */}
        <div className="grid grid-cols-3 gap-4 pt-4">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4">
            <p className="text-2xl font-bold text-zinc-100">{reports.length}</p>
            <p className="text-sm text-zinc-500">Tools Scanned</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4">
            <p className="text-2xl font-bold text-emerald-400">{safeCount}</p>
            <p className="text-sm text-zinc-500">Safe (S/A/B)</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4">
            <p className="text-2xl font-bold text-red-400">{riskyCount}</p>
            <p className="text-sm text-zinc-500">Risky (D/F)</p>
          </div>
        </div>
      </section>

      {/* S-Tier Wall */}
      {sTier.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-semibold text-zinc-100">
            S-Tier — Zero Risks
          </h2>
          <p className="mb-4 text-sm text-zinc-500">
            Tools with risk_score 0 and no findings. Safe for production agents.
          </p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {sTier.slice(0, 12).map((r) => (
              <Link
                key={r.tool_id}
                href={`/tool/${r.tool_id}`}
                className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 transition hover:border-zinc-700 hover:bg-zinc-800/60"
              >
                <span className="font-medium text-zinc-100">{r.tool_id}</span>
                <GradeBadge grade="S" size="sm" dark />
              </Link>
            ))}
          </div>
          {sTier.length > 12 && (
            <p className="mt-2 text-sm text-zinc-500">
              +{sTier.length - 12} more S-grade tools in the registry below.
            </p>
          )}
        </section>
      )}

      {/* Registry with search, filters, cards */}
      <Suspense>
        <RegistryWithFilters reports={reports} />
      </Suspense>

      {/* Quick Start */}
      <section className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-sky-400" />
          <h2 className="text-lg font-semibold text-zinc-100">Scan your own MCP tools</h2>
        </div>
        <p className="text-sm text-zinc-500 max-w-xl">
          ToolTrust Scanner is a free CLI that audits MCP servers for prompt injection,
          permission risks, and supply-chain vulnerabilities.
        </p>
        <div className="space-y-2">
          <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">1 · Install</p>
          <div className="flex items-center justify-between gap-3 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3">
            <code className="text-sm font-mono text-zinc-300 truncate">
              <span className="text-zinc-500 select-none">$ </span>
              <span className="text-emerald-400">curl</span>
              {" -sfL https://raw.githubusercontent.com/AgentSafe-AI/tooltrust-scanner/main/install.sh | bash"}
            </code>
          </div>
          <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider pt-1">2 · Scan any MCP server</p>
          <div className="flex items-center justify-between gap-3 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3">
            <code className="text-sm font-mono text-zinc-300 truncate">
              <span className="text-zinc-500 select-none">$ </span>
              <span className="text-emerald-400">tooltrust-scanner</span>
              {" scan --server "}
              <span className="text-amber-400">"npx -y @modelcontextprotocol/server-filesystem /tmp"</span>
            </code>
          </div>
        </div>
        <a
          href="https://github.com/AgentSafe-AI/tooltrust-scanner"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs text-sky-500 hover:text-sky-400 underline underline-offset-2"
        >
          Full docs & GitHub Actions integration →
        </a>
      </section>
    </div>
  );
}
