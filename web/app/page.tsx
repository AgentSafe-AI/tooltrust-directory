import {
  getAllReports,
  displayGrade,
} from "@/lib/data";
import { RegistryWithFilters } from "@/components/RegistryWithFilters";
import Link from "next/link";
import { Terminal } from "lucide-react";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const reports = getAllReports();
  const safeCount = reports.filter((r) =>
    ["S", "A", "B"].includes(displayGrade(r))
  ).length;
  const mediumCount = reports.filter((r) => displayGrade(r) === "C").length;
  const riskyCount = reports.filter((r) =>
    ["D", "F"].includes(displayGrade(r))
  ).length;
  const incompleteCount = reports.filter((r) => displayGrade(r) === "?").length;
  const scannedCount = reports.length - incompleteCount;

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
          {[
            { label: "Prompt Injection", anchor: "as-001" },
            { label: "Excess Permissions", anchor: "as-002" },
            { label: "Code Execution", anchor: "as-006" },
            { label: "Supply Chain", anchor: "as-008" },
            { label: "Typosquatting", anchor: "as-009" },
            { label: "Tool Shadowing", anchor: "as-013" },
          ].map((r) => (
            <a
              key={r.label}
              href={`https://github.com/AgentSafe-AI/tooltrust-scanner/blob/main/docs/RULES.md#${r.anchor}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 bg-zinc-800/50 px-2.5 py-0.5 text-xs text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 transition-colors"
            >
              {r.label}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4">
            <p className="text-2xl font-bold text-zinc-100">{scannedCount}</p>
            <p className="text-sm text-zinc-500">Tools Scanned</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4">
            <p className="text-2xl font-bold text-emerald-400">{safeCount}</p>
            <p className="text-sm text-zinc-500">Safe (S/A/B)</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4">
            <p className="text-2xl font-bold text-yellow-400">{mediumCount}</p>
            <p className="text-sm text-zinc-500">Medium Risk (C)</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4">
            <p className="text-2xl font-bold text-red-400">{riskyCount}</p>
            <p className="text-sm text-zinc-500">Risky (D/F)</p>
          </div>
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
