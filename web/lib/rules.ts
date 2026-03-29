export interface RuleInfo {
  id: string;
  emoji: string;
  shortLabel: string;
  title: string;
  severity: string[];
  detects: string;
  whyItMatters: string;
  recommendation: string;
}

export const RULE_CATALOG: RuleInfo[] = [
  {
    id: "AS-001",
    emoji: "🚨",
    shortLabel: "Prompt Injection",
    title: "Prompt Injection / Tool Poisoning",
    severity: ["Critical"],
    detects:
      "Malicious instructions hidden in tool names or descriptions that try to hijack the agent, override prompts, or redirect behavior toward attacker-controlled goals.",
    whyItMatters:
      "A poisoned tool definition can manipulate the model at runtime and turn normal tool use into data exfiltration or unsafe autonomous actions.",
    recommendation:
      "Remove instruction-like text from tool metadata and validate names and descriptions before registration.",
  },
  {
    id: "AS-002",
    emoji: "⚠️",
    shortLabel: "Excess Permissions",
    title: "Excessive Permissions",
    severity: ["High", "Low (depends on permission type)"],
    detects:
      "Broad capabilities such as filesystem, network, database, or execution access without a clearly scoped justification.",
    whyItMatters:
      "Over-privileged tools increase blast radius when an agent is tricked, misconfigured, or compromised.",
    recommendation:
      "Limit permissions to the minimum needed and scope access to known paths, hosts, and resources.",
  },
  {
    id: "AS-003",
    emoji: "🔀",
    shortLabel: "Scope Mismatch",
    title: "Scope Mismatch",
    severity: ["High"],
    detects:
      "A mismatch between a tool's name, description, schema, and declared permissions.",
    whyItMatters:
      "Misleading names or descriptions make it easier for agents and humans to over-trust risky tools.",
    recommendation:
      "Keep tool names, descriptions, and permissions aligned with the actual capability.",
  },
  {
    id: "AS-004",
    emoji: "📦",
    shortLabel: "Supply Chain CVEs",
    title: "Supply Chain CVEs (OSV)",
    severity: ["High", "Critical"],
    detects:
      "Known CVEs in declared dependencies using OSV-backed dependency analysis.",
    whyItMatters:
      "A vulnerable dependency can become the easiest route to compromise the host or steal agent context.",
    recommendation:
      "Upgrade or replace the affected package, pin versions, and rescan after the fix.",
  },
  {
    id: "AS-005",
    emoji: "🔐",
    shortLabel: "Privilege Escalation",
    title: "Privilege Escalation",
    severity: ["High"],
    detects:
      "Claims or requests for admin, root, sudo, impersonation, or similarly elevated access beyond the tool's stated purpose.",
    whyItMatters:
      "Escalated privileges turn otherwise routine tool calls into high-impact operations on the host or external systems.",
    recommendation:
      "Remove elevated scopes and keep privileged actions behind explicit human approval.",
  },
  {
    id: "AS-006",
    emoji: "💻",
    shortLabel: "Code Execution",
    title: "Arbitrary Code Execution",
    severity: ["Critical"],
    detects:
      "Tool interfaces that can run arbitrary host commands, scripts, or code.",
    whyItMatters:
      "A single prompt injection on an execution-capable tool can fully compromise the machine or environment.",
    recommendation:
      "Avoid generic execution interfaces or isolate them in a tightly sandboxed environment.",
  },
  {
    id: "AS-007",
    emoji: "ℹ️",
    shortLabel: "Missing Description",
    title: "Missing Description or Schema",
    severity: ["Info"],
    detects:
      "Tools with no description or no input schema.",
    whyItMatters:
      "Agents have less context to safely decide whether and how the tool should be used.",
    recommendation:
      "Add a clear description and a complete input schema before exposing the tool to agents.",
  },
  {
    id: "AS-008",
    emoji: "🚨",
    shortLabel: "Supply Chain",
    title: "Known-Compromised Packages (Offline Blacklist)",
    severity: ["Critical"],
    detects:
      "Package versions that are already known to be compromised, using a bundled offline blacklist.",
    whyItMatters:
      "Compromised packages can steal credentials or establish persistence before public feeds fully catch up.",
    recommendation:
      "Remove the affected package immediately, rotate credentials, and move to a verified clean version.",
  },
  {
    id: "AS-009",
    emoji: "🎭",
    shortLabel: "Typosquatting",
    title: "Typosquatting",
    severity: ["Medium"],
    detects:
      "Tool names that closely imitate legitimate tools using edit-distance heuristics.",
    whyItMatters:
      "Lookalike names are a common impersonation technique for tricking users and agents into calling the wrong tool.",
    recommendation:
      "Use distinct naming and block suspicious near-copy tool names during registration or review.",
  },
  {
    id: "AS-010",
    emoji: "🔑",
    shortLabel: "Secret Handling",
    title: "Insecure Secret Handling",
    severity: ["Medium"],
    detects:
      "Parameters that appear designed to accept raw secrets such as API keys, passwords, tokens, or private keys.",
    whyItMatters:
      "Secrets passed as normal tool input can leak into prompts, traces, logs, and third-party systems.",
    recommendation:
      "Use secret managers or environment-based injection instead of raw credential parameters.",
  },
  {
    id: "AS-011",
    emoji: "ℹ️",
    shortLabel: "Missing Rate Limits",
    title: "Missing Rate-Limit / Timeout",
    severity: ["Low"],
    detects:
      "Network or execution tools that declare no timeout, retry, or rate-limit controls.",
    whyItMatters:
      "Agents can loop into runaway traffic, API quota exhaustion, or accidental cost spikes.",
    recommendation:
      "Declare explicit timeout, retry, and rate-limit behavior for network and execution operations.",
  },
  {
    id: "AS-012",
    emoji: "🔄",
    shortLabel: "Tool Drift",
    title: "Tool Drift",
    severity: ["Medium"],
    detects:
      "Changes in a tool definition since the last scan, such as new parameters, modified descriptions, or expanded permissions.",
    whyItMatters:
      "Unexpected drift can signal unreviewed updates or supply-chain compromise.",
    recommendation:
      "Review definition changes before rollout and rescan after every tool update.",
  },
  {
    id: "AS-013",
    emoji: "👥",
    shortLabel: "Tool Shadowing",
    title: "Tool Shadowing",
    severity: ["High", "Medium"],
    detects:
      "Duplicate normalized tool names that can shadow or override another tool in the same server.",
    whyItMatters:
      "A malicious duplicate can capture calls intended for a trusted tool.",
    recommendation:
      "Reject duplicate names and keep the active tool set unambiguous.",
  },
];

const RULES_BY_ID = new Map(RULE_CATALOG.map((rule) => [rule.id, rule]));

export function getRuleInfo(id: string): RuleInfo | undefined {
  return RULES_BY_ID.get(id);
}

export function getMethodologyHref(id: string): string {
  return `/methodology#${id.toLowerCase()}`;
}

export function getSeverityBadgeClass(severity: string): string {
  const normalized = severity.toUpperCase();
  const base = "rounded-md border px-2.5 py-1 text-xs font-medium";
  if (normalized.startsWith("CRITICAL")) return `${base} border-red-400/25 bg-red-400/10 text-[#ff6b6b]`;
  if (normalized.startsWith("HIGH")) return `${base} border-orange-400/25 bg-orange-400/10 text-[#f4a261]`;
  if (normalized.startsWith("MEDIUM")) return `${base} border-yellow-300/20 bg-yellow-300/10 text-[#d9b65d]`;
  if (normalized.startsWith("LOW")) return `${base} border-zinc-500/20 bg-zinc-500/10 text-zinc-400`;
  return `${base} border-zinc-500/20 bg-zinc-500/10 text-zinc-500`;
}

export function formatSeverityLabel(severity: string): string {
  const normalized = severity.trim().toLowerCase();
  if (!normalized) return severity;
  return normalized.replace(/\b\w/g, (char) => char.toUpperCase());
}
