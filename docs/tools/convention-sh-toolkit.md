# 🟢 convention-sh-toolkit

> Stop your AI agents from writing sloppy TypeScript. A toolkit that teaches coding agents like Claude Code, Codex, Cursor, Amp, and more to ship production-ready code in half the time, at half the cost.

Same task. Half the cost. Less than half the time.

Measured on Claude Opus 4.7.

  | Metric        | convention.sh | Baseline | Delta         |                                                          
  | ------------- | ------------: | -------: | ------------- |
  | Turns         |            32 |       52 | **38% fewer** |                                                          
  | Time          |       1m 56s |  4m 46s | **59% faster** |                                                           
  | Output tokens |         12.6K |    22.1K | **43% fewer** |                                                          
  | Input tokens  |          382K |   2,399K | **84% fewer** |                                                          
  | Cost          |         $1.27 |    $2.26 | **44% cheaper** |

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 8 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [convention-sh-toolkit](https://smithery.ai/server/convention-sh/toolkit) |
| **Scan Date** | 2026-05-28 |
| **Scanner** | tooltrust-scanner/v0.3.12 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 1 |
| Low      | 0 |
| Info     | 1 |

## Detailed Findings

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/convention-sh-toolkit.json)*
