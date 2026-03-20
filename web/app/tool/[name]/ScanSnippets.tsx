"use client";

import { useState } from "react";
import { Copy, Check, Terminal, GitBranch } from "lucide-react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        void navigator.clipboard.writeText(text).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
      }}
      className="flex items-center gap-1 rounded border border-zinc-700 bg-zinc-800 px-2 py-1 text-xs text-zinc-400 hover:border-zinc-600 hover:bg-zinc-700 hover:text-zinc-300 transition-colors shrink-0"
    >
      {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

interface Props {
  toolId: string;
  sourceUrl: string;
}

export function ScanSnippets({ toolId, sourceUrl }: Props) {
  const [tab, setTab] = useState<"cli" | "ci">("cli");

  const cliSnippet = `tooltrust-scanner scan --server "npx -y ${toolId}"`;
  const ciSnippet = `- name: Audit MCP Server
  uses: AgentSafe-AI/tooltrust-scanner@main
  with:
    server: "npx -y ${toolId}"
    fail-on: "approval"  # block D/F grade tools`;

  return (
    <div className="space-y-3">
      {/* Tab bar */}
      <div className="flex gap-1 rounded-lg border border-zinc-800 bg-zinc-900/60 p-1 w-fit">
        <button
          type="button"
          onClick={() => setTab("cli")}
          className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
            tab === "cli"
              ? "bg-zinc-700 text-zinc-100"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          <Terminal className="h-3.5 w-3.5" />
          CLI
        </button>
        <button
          type="button"
          onClick={() => setTab("ci")}
          className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
            tab === "ci"
              ? "bg-zinc-700 text-zinc-100"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          <GitBranch className="h-3.5 w-3.5" />
          GitHub Actions
        </button>
      </div>

      {tab === "cli" && (
        <div className="space-y-2">
          <p className="text-xs text-zinc-500">
            Install once, then scan any MCP server:
          </p>
          {/* Install */}
          <div className="flex items-center justify-between gap-3 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3">
            <code className="text-sm text-zinc-300 font-mono">
              <span className="text-zinc-500 select-none">$ </span>
              <span className="text-emerald-400">curl</span>
              {" -sfL https://raw.githubusercontent.com/AgentSafe-AI/tooltrust-scanner/main/install.sh | bash"}
            </code>
            <CopyButton text="curl -sfL https://raw.githubusercontent.com/AgentSafe-AI/tooltrust-scanner/main/install.sh | bash" />
          </div>
          {/* Scan this tool */}
          <div className="flex items-center justify-between gap-3 rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3">
            <code className="text-sm text-zinc-300 font-mono">
              <span className="text-zinc-500 select-none">$ </span>
              <span className="text-emerald-400">tooltrust-scanner</span>
              {` scan --server "npx -y `}
              <span className="text-sky-400">{toolId}</span>
              {`"`}
            </code>
            <CopyButton text={cliSnippet} />
          </div>
          <p className="text-xs text-zinc-600">
            Adjust the package name if your npm registry name differs from the tool ID.{" "}
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-400 underline underline-offset-2"
            >
              View source
            </a>
          </p>
        </div>
      )}

      {tab === "ci" && (
        <div className="space-y-2">
          <p className="text-xs text-zinc-500">
            Block risky tools automatically in your CI pipeline:
          </p>
          <div className="relative">
            <pre className="overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 pr-20 text-sm text-zinc-300 font-mono leading-relaxed">
              <span className="text-zinc-500">{`# .github/workflows/audit.yml\n`}</span>
              {`- name: `}<span className="text-emerald-400">Audit MCP Server</span>{`\n`}
              {`  uses: `}<span className="text-sky-400">AgentSafe-AI/tooltrust-scanner@main</span>{`\n`}
              {`  with:\n`}
              {`    server: `}<span className="text-amber-400">{`"npx -y ${toolId}"`}</span>{`\n`}
              {`    fail-on: `}<span className="text-amber-400">"approval"</span>
              <span className="text-zinc-600">{`  # blocks D/F grade`}</span>
            </pre>
            <div className="absolute right-2 top-2">
              <CopyButton text={ciSnippet} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
