# 🟢 kordoc

> 📄 한국 공문서를 AI가 읽고 쓰게 합니다. HWP·HWPX·PDF·오피스·스캔 이미지를 Markdown으로, Markdown을 HWPX 공문서로 바꾸고 양식 채우기·신구대조·서식 보존 편집까지. 라이브러리·CLI·MCP 서버 | Korean documents for AI: HWP, HWPX, PDF, Office and scans to Markdown, and Markdown back to HWPX. Library, CLI and MCP server.

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `4.25.3` |
| **Vendor** | chrisryugj |
| **Stars** | ⭐ 3094 |
| **npm Package** | `kordoc` |
| **npm Downloads (30d)** | 290.3k |
| **Language** | TypeScript |
| **Source** | [kordoc](https://github.com/chrisryugj/kordoc) |
| **Scan Date** | 2026-11-22 |
| **Scanner** | tooltrust-scanner/v0.3.20 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 1 |

## Detailed Findings

### ⚪ `AS-018` — Embedded MCP Server Detected

**Severity:** Info

**Description:**
Embedded MCP server detected in typescript source, but tool enumeration was not possible. Manual review is required for auth, scope, and input validation.

**Recommendation:**
Source-level MCP SDK usage was detected, but tools could not be enumerated statically. Run a sandboxed live scan if possible and manually review auth, scope, and input validation before trusting this server.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/kordoc.json)*
