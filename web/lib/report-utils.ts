/**
 * Client-safe report helpers (no Node/fs). Used by RegistryWithFilters and server.
 */
export interface Finding {
  id: string;
  severity: string;
  title: string;
  description: string;
  recommendation: string;
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
}

export function displayGrade(r: Report): string {
  if (r.risk_score === 0 && r.findings.length === 0) {
    return "A";
  }
  return r.grade;
}

export function findingEmoji(id: string): string {
  switch (id) {
    case "AS-004":
      return "📦";
    case "AS-001":
      return "🚨";
    case "AS-002":
      return "⚠️";
    case "AS-011":
      return "ℹ️";
    default:
      return "";
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
