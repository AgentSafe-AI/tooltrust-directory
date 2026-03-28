/**
 * Client-safe report helpers (no Node/fs). Used by RegistryWithFilters and server.
 */
export interface Finding {
  id: string;
  severity: string;
  title: string;
  description: string;
  recommendation: string;
  tool_name?: string;
  metadata?: Record<string, unknown>;
}

export interface Summary {
  critical: number;
  high: number;
  medium: number;
  low: number;
  info: number;
}

export interface Report {
  tool_id: string;
  version: string;
  grade: string;
  risk_score: number;
  scan_date: string;
  scanner: string;
  source_url: string;
  category?: string;
  vendor?: string;
  stars?: number;
  license?: string;
  language?: string;
  description?: string;
  findings: Finding[];
  summary: Summary;
  methodology: string;
  scan_incomplete?: boolean;
}

export interface FindingNarrative {
  shortLabel: string;
  impact: string;
  suggestion: string;
}

export interface ToolNarrative {
  title: string;
  impactLine: string;
  consequence: string;
  actionNow: string;
  saferConfig: string;
}

export function displayGrade(r: Report): string {
  if (r.scan_incomplete || r.grade === "I") return "?";
  if (r.risk_score === 0 && r.findings.length === 0) return "A";
  return r.grade;
}

export function findingEmoji(id: string): string {
  switch (id) {
    case "AS-001": return "🚨"; // Prompt Injection
    case "AS-002": return "⚠️"; // Excessive Permissions
    case "AS-003": return "🔀"; // Scope Mismatch
    case "AS-004": return "📦"; // Supply Chain CVEs
    case "AS-005": return "🔐"; // Privilege Escalation
    case "AS-006": return "💻"; // Arbitrary Code Execution
    case "AS-007": return "ℹ️"; // Missing Description/Schema
    case "AS-008": return "🚨"; // Known-Compromised Packages
    case "AS-009": return "🎭"; // Typosquatting
    case "AS-010": return "🔑"; // Insecure Secret Handling
    case "AS-011": return "ℹ️"; // Missing Rate-Limit/Timeout
    case "AS-012": return "🔄"; // Tool Drift
    case "AS-013": return "👥"; // Tool Shadowing
    default:       return "";
  }
}

export function keyFindingsSummary(r: Report): string {
  if (!r.findings || r.findings.length === 0) {
    return "✅ None";
  }
  const counts: Record<string, number> = {};
  const order: string[] = [];
  for (const f of r.findings) {
    if (counts[f.id] == null) {
      order.push(f.id);
      counts[f.id] = 0;
    }
    counts[f.id]++;
  }
  return order
    .map((id) => {
      const emoji = findingEmoji(id);
      const pre = emoji ? `${emoji} ` : "";
      const n = counts[id];
      return n > 1 ? `${pre}${id} ×${n}` : `${pre}${id}`;
    })
    .join(", ");
}

export function formatScannedAgo(scanDate: string): string {
  try {
    const d = new Date(scanDate);
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "1d ago";
    if (diffDays < 7) return `${diffDays}d ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
    return `${Math.floor(diffDays / 30)}mo ago`;
  } catch {
    return "";
  }
}

const FINDING_NARRATIVES: Record<string, FindingNarrative> = {
  "AS-001": {
    shortLabel: "Prompt Injection",
    impact:
      "Malicious tool descriptions can hijack the agent's decision flow and redirect behavior.",
    suggestion:
      "Remove instruction-like text from descriptions and keep prompts out of tool metadata.",
  },
  "AS-002": {
    shortLabel: "Excessive Permissions",
    impact:
      "The agent may gain overly broad access to files, network, databases, or execution capabilities.",
    suggestion:
      "Restrict filesystem, network, db, and exec scope to only what the tool actually needs.",
  },
  "AS-003": {
    shortLabel: "Scope Mismatch",
    impact:
      "A tool name that downplays its actual permissions makes misuse and over-trust more likely.",
    suggestion:
      "Align the tool name, description, and permissions so the capability matches expectations.",
  },
  "AS-004": {
    shortLabel: "Supply Chain CVEs",
    impact:
      "Known dependency vulnerabilities can be exploited during install or runtime and widen the attack surface.",
    suggestion: "Upgrade affected dependencies, confirm the fix, and scan again.",
  },
  "AS-005": {
    shortLabel: "Privilege Escalation",
    impact:
      "The tool may expose admin-level capabilities that let the agent perform high-privilege actions.",
    suggestion:
      "Remove admin, sudo, or impersonation access, or keep the tool behind explicit approval.",
  },
  "AS-006": {
    shortLabel: "Arbitrary Code Execution",
    impact:
      "An attacker may be able to make the agent run arbitrary commands or scripts on the host.",
    suggestion:
      "Avoid evaluate or execute style interfaces; if required, isolate them in a sandboxed environment.",
  },
  "AS-008": {
    shortLabel: "Known Compromised Package",
    impact:
      "Known malicious packages may steal AWS or SSH credentials at startup, as seen in the LiteLLM .pth backdoor case.",
    suggestion:
      "Block the package immediately, switch versions, and do not use it in any agent pipeline.",
  },
  "AS-010": {
    shortLabel: "Secret Handling",
    impact:
      "Sensitive credentials may be read, logged, or leaked to external systems.",
    suggestion:
      "Do not treat secrets as normal input parameters, and verify logs never record credentials.",
  },
  "AS-011": {
    shortLabel: "Missing Rate Limits",
    impact:
      "Missing timeout, retry, or rate-limit controls makes network and execution tools easier to abuse.",
    suggestion:
      "Add timeout, retry, and rate-limit settings before letting agents call the tool automatically.",
  },
  "AS-013": {
    shortLabel: "Tool Shadowing",
    impact:
      "Lookalike tool names can hijack calls that were intended for a trusted tool.",
    suggestion:
      "Remove duplicate or near-duplicate names so agents do not confuse risky tools for trusted ones.",
  },
};

export function getFindingNarrative(findingId: string): FindingNarrative {
  return (
    FINDING_NARRATIVES[findingId] ?? {
      shortLabel: findingId,
      impact: "This finding indicates the tool should be reviewed before it is trusted.",
      suggestion:
        "Review the tool's permissions, metadata, and dependencies before allowing it.",
    }
  );
}

function countFindingIds(report: Report): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const finding of report.findings ?? []) {
    counts[finding.id] = (counts[finding.id] ?? 0) + 1;
  }
  return counts;
}

function topFindingIds(report: Report, limit = 2): string[] {
  const counts = countFindingIds(report);
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([id]) => id);
}

export function getToolNarrative(report: Report): ToolNarrative {
  const grade = displayGrade(report);
  const topIds = topFindingIds(report, 2);
  const primary = topIds[0] ? getFindingNarrative(topIds[0]) : null;
  const secondary = topIds[1] ? getFindingNarrative(topIds[1]) : null;

  if (grade === "D" || grade === "F") {
    return {
      title: "High Risk",
      impactLine:
        primary && secondary
          ? `${primary.shortLabel} + ${secondary.shortLabel} risk is significant. Avoid using this in production agents.`
          : "High-risk permissions or supply-chain issues were detected. Avoid use until fixed.",
      consequence:
        primary?.impact ??
        "If exploited, the agent may perform privileged actions, read sensitive data, or pull in malicious dependencies.",
      actionNow: "Block this tool in production until the findings are reviewed and fixed.",
      saferConfig:
        secondary?.suggestion ?? primary?.suggestion ??
        "Reduce permission scope, upgrade dependencies, and rescan before allowing it again.",
    };
  }

  if (grade === "C") {
    return {
      title: "Needs Approval",
      impactLine:
        primary && secondary
          ? `${primary.shortLabel} plus ${secondary.shortLabel} raises enough risk that this tool should not be auto-trusted.`
          : "Moderate risk signals were detected. Review before allowing unattended use.",
      consequence:
        primary?.impact ??
        "Combined with prompt injection or bad defaults, the agent may gain broader capabilities than expected.",
      actionNow:
        "Keep this tool behind manual approval or tighter restrictions before enabling unattended flows.",
      saferConfig:
        primary?.suggestion ??
        "Tighten permissions, reduce scope, and add protections around risky operations.",
    };
  }

  return {
      title: "Allowed with Review Notes",
      impactLine:
      primary?.shortLabel
        ? `${primary.shortLabel} is the main signal, but overall risk remains within an acceptable range.`
        : "No blocking-level issues were found, and the tool is generally safe to use.",
      consequence:
      primary?.impact ??
      "There are no obvious high-risk signals, but the tool should still follow least-privilege defaults.",
    actionNow:
      "Allow the tool, but keep permissions and accessible scope aligned with the environment.",
    saferConfig:
      primary?.suggestion ??
      "Keep least-privilege defaults and continue tracking new scan results over time.",
  };
}

export function getToolImpactLine(report: Report): string {
  return getToolNarrative(report).impactLine;
}

export function getBlockSnippet(report: Report): string {
  return `{
  "mcpServers": {
    "${report.tool_id}": {
      "disabled": true
    }
  }
}`;
}
