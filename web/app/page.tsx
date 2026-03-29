import {
  getAllReports,
  displayGrade,
} from "@/lib/data";
import { RegistryWithFilters } from "@/components/RegistryWithFilters";
import { getMethodologyHref, getRuleInfo } from "@/lib/rules";
import { Terminal } from "lucide-react";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const reports = getAllReports();
  const featuredRules = ["AS-001", "AS-002", "AS-006", "AS-008", "AS-009", "AS-013"]
    .map((id) => getRuleInfo(id))
    .filter((rule) => rule != null);
  const safeCount = reports.filter((r) =>
    ["S", "A", "B"].includes(displayGrade(r))
  ).length;
  const mediumCount = reports.filter((r) => displayGrade(r) === "C").length;
  const riskyCount = reports.filter((r) =>
    ["D", "F"].includes(displayGrade(r))
  ).length;
  const incompleteCount = reports.filter((r) => displayGrade(r) === "?").length;
  const scannedCount = reports.length - incompleteCount;
  const stats = [
    {
      label: "Tools Scanned",
      value: scannedCount,
      cardClass: "border-slate-500/12 bg-slate-400/[0.03]",
      valueClass: "text-slate-400",
    },
    {
      label: "Safe (S/A/B)",
      value: safeCount,
      cardClass: "border-teal-400/12 bg-teal-400/[0.03]",
      valueClass: "text-teal-300",
    },
    {
      label: "Medium Risk (C)",
      value: mediumCount,
      cardClass: "border-amber-300/12 bg-amber-300/[0.03]",
      valueClass: "text-[#d9b65d]",
    },
    {
      label: "Risky (D/F)",
      value: riskyCount,
      cardClass: "border-rose-400/12 bg-rose-400/[0.03]",
      valueClass: "text-rose-300",
    },
  ];

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
        <div className="flex flex-wrap gap-2 pt-1">
          {featuredRules.map((rule) => (
            <a
              key={rule.id}
              href={getMethodologyHref(rule.id)}
              className="rounded-full border border-zinc-700 bg-zinc-800/50 px-2.5 py-0.5 text-xs text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 transition-colors"
            >
              {rule.emoji} {rule.shortLabel}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-xl border bg-zinc-900/90 px-5 py-4 ${stat.cardClass}`}
            >
              <p className={`text-2xl font-semibold tracking-tight ${stat.valueClass}`}>{stat.value}</p>
              <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Registry with search, filters, cards */}
      <Suspense>
        <RegistryWithFilters reports={reports} />
      </Suspense>

      {/* Scan your tools */}
      <section id="scan-your-mcp" className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 space-y-5">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-emerald-400" />
          <h2 className="text-lg font-semibold text-zinc-100">Scan your MCP servers</h2>
        </div>

        {/* MCP — primary */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Via MCP (recommended) — works inside Claude Code, Cursor, Claude Desktop</p>
          <div className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3">
            <pre className="text-sm font-mono text-zinc-300 whitespace-pre">
{`{
  "mcpServers": {
    "tooltrust": {
      "command": "npx",
      "args": ["-y", "tooltrust-mcp"]
    }
  }
}`}
            </pre>
          </div>
          <p className="text-xs text-zinc-500">
            Then ask your agent: <code className="text-emerald-400">run tooltrust_scan_config</code>
          </p>
        </div>

        <div className="border-t border-zinc-800" />

        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-red-300">
            How to block a risky tool
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            If a tool is graded D or F, disable it in your production <code className="text-red-300">.mcp.json</code> before waiting for a fix and re-scan.
          </p>
          <pre className="mt-3 overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-zinc-300">{`{
  "mcpServers": {
    "tool-name": {
      "disabled": true
    }
  }
}`}</pre>
        </div>

        {/* CLI — secondary */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Via CLI</p>
          <div className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3">
            <code className="text-sm font-mono text-zinc-300">
              <span className="text-zinc-500 select-none">$ </span>
              <span className="text-emerald-400">curl</span>
              {" -sfL https://raw.githubusercontent.com/AgentSafe-AI/tooltrust-scanner/main/install.sh | bash"}
            </code>
          </div>
          <div className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3">
            <code className="text-sm font-mono text-zinc-300">
              <span className="text-zinc-500 select-none">$ </span>
              <span className="text-emerald-400">tooltrust-scanner</span>
              {` scan --server "npx -y @modelcontextprotocol/server-filesystem /tmp"`}
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
