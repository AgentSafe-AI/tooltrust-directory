# 🟢 wsl2-distro-manager

> GUI for the Windows Subsystem for Linux — and native Linux/macOS VMs on Mac. Install, back up, move and configure distros without CLI flags; AI assistant with tools, MCP server for agents, remote WSL over SSH.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 0 |
| **Version** | `2.0.0` |
| **Vendor** | bostrot |
| **Stars** | ⭐ 3969 |
| **Language** | Dart |
| **Source** | [wsl2-distro-manager](https://github.com/bostrot/wsl2-distro-manager) |
| **Scan Date** | 2026-09-07 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 5 |

## Detailed Findings

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: database access

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

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/wsl2-distro-manager.json)*
