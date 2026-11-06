# 🟢 kordoc

> 한국 문서를 읽고·고치고·새로 쓰는 AI 문서 도구 — HWP·HWPX·PDF·오피스·스캔(OCR)을 Markdown으로, 신구대조·서식 보존 편집·Markdown→HWPX 작성·HWP→HWPX 변환·양식 채우기·공문서 검수까지. 라이브러리·CLI·MCP | Read, diff, edit, write and convert Korean documents (HWP, HWPX, PDF, Office, scans) — library, CLI and MCP server

| Field | Value |
|-------|-------|
| **Grade** | **I** |
| **Risk Score** | 0 |
| **Version** | `4.24.47` |
| **Vendor** | chrisryugj |
| **Stars** | ⭐ 2931 |
| **npm Package** | `kordoc` |
| **npm Downloads (30d)** | 191.9k |
| **Language** | TypeScript |
| **Source** | [kordoc](https://github.com/chrisryugj/kordoc) |
| **Scan Date** | 2026-11-06 |
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
