# 🟢 cvpop-server

> # CVpop MCP Server

Create and customize professional CVs and resumes directly from your AI assistant.

## What it does

The CVpop MCP server lets you build polished, ready-to-use CVs through natural conversation — no manual editing required. Just describe your experience, skills, and goals, and your AI assistant will generate a complete CV and let you refine every detail.

Once your CV is ready, you get an **import code** to open and edit it inside the CVpop app (available on iOS, Android, macOS, and Web).

## Tools

| Tool | Description |
|------|-------------|
| `createCv` | Generate a complete CV from your professional information |
| `editCvModel` | Change the layout style — choose from *classic*, *creative*, *simple*, or *dynamic* |
| `editCvColor` | Set the CV accent color using any hex value |
| `editCvFont` | Pick a font from 19 curated typefaces (Montserrat, Raleway, Poppins, and more) |
| `getCvImportCode` | Get the import code to open your CV in the CVpop app |

## Example workflow

> "Create a CV for a senior frontend developer with 8 years of experience in React. Use a creative layout, blue color scheme, and Montserrat font."

Your assistant will handle the rest — and hand you an import code to take the CV into CVpop for final touches.

## Get the app

Download **CVpop** to edit, export, and share your CV:
- [iOS & macOS](https://apps.apple.com/us/app/resume-ai-intelligent-cv-app/id1473493711)
- [Android](https://play.google.com/store/apps/details?id=com.curriculify.app)
- [Web](https://cvpop.com)

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 8 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [cvpop-server](https://smithery.ai/server/cvpop/server) |
| **Scan Date** | 2026-04-15 |
| **Scanner** | tooltrust-scanner/v0.3.8 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 1 |
| Low      | 0 |
| Info     | 5 |

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/cvpop-server.json)*
