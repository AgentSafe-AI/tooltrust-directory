# 🟡 kafka-mcp-server

> A Model Context Protocol (MCP) server for Apache Kafka implemented in Go, leveraging franz-go and mcp-go.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 16 |
| **Version** | `2.0.2` |
| **Vendor** | tuannvm |
| **Stars** | ⭐ 44 |
| **Language** | Go |
| **Source** | [kafka-mcp-server](https://github.com/tuannvm/kafka-mcp-server) |
| **Scan Date** | 2026-03-02 |
| **Scanner** | AgentSentry/0.1.2 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 2 |
| Low      | 0 |
| Info     | 0 |

## Detailed Findings

### 🟡 `AS-004` — Supply Chain CVE: GHSA-9h8m-3fm2-qjrq in go.opentelemetry.io/otel/sdk@1.35.0

**Severity:** Medium

**Description:**
GHSA-9h8m-3fm2-qjrq in go.opentelemetry.io/otel/sdk@1.35.0 (Go ecosystem).

**Recommendation:**
Upgrade go.opentelemetry.io/otel/sdk to a version that resolves GHSA-9h8m-3fm2-qjrq. Check https://osv.dev/vulnerability/GHSA-9h8m-3fm2-qjrq for patched versions. Enable Dependabot or OSV-Scanner in CI to catch future CVEs automatically.

---

### 🟡 `AS-004` — Supply Chain CVE: GO-2026-4394 in go.opentelemetry.io/otel/sdk@1.35.0

**Severity:** Medium

**Description:**
GO-2026-4394 in go.opentelemetry.io/otel/sdk@1.35.0 (Go ecosystem).

**Recommendation:**
Upgrade go.opentelemetry.io/otel/sdk to a version that resolves GO-2026-4394. Check https://osv.dev/vulnerability/GO-2026-4394 for patched versions. Enable Dependabot or OSV-Scanner in CI to catch future CVEs automatically.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/kafka-mcp-server.json)*
