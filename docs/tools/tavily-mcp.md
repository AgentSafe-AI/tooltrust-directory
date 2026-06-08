# 🟠 tavily-mcp

> Production ready MCP server with real-time search, extract, map & crawl.

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 49 |
| **Version** | `0.2.20` |
| **Vendor** | tavily-ai |
| **Stars** | ⭐ 2076 |
| **npm Package** | `tavily-mcp` |
| **npm Downloads (30d)** | 165.1k |
| **Language** | JavaScript |
| **Source** | [tavily-mcp](https://github.com/tavily-ai/tavily-mcp) |
| **Scan Date** | 2026-06-08 |
| **Scanner** | tooltrust-scanner/v0.3.13 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 11 |
| Medium   | 2 |
| Low      | 7 |
| Info     | 0 |

## Detailed Findings

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares exec permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🔵 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Low

**Description:**
input schema exposes 15 properties (threshold: 10)

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟠 📦 `AS-004` — Supply Chain Vulnerability (CVE)

**Severity:** High

**Description:**
GO-2026-5024 in golang.org/x/sys@v0.41.0: Invoking integer overflow in NewNTUnicodeString in golang.org/x/sys/windows (upgrade to 0.44.0)

**Recommendation:**
Upgrade or replace the vulnerable dependency. Pin all dependency versions and enable automated CVE scanning (Dependabot or OSV Scanner).

---

### 🔵 ⚡ `AS-011` — DoS Resilience — Missing Rate Limit / Timeout

**Severity:** Low

**Description:**
tool performs network or execution operations but declares no rate-limit, timeout, or retry configuration

**Recommendation:**
Declare explicit rate-limit, timeout, and retry configuration for all network and execution tools. Implement exponential back-off and surface resource state to the calling agent.

---

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟠 📦 `AS-004` — Supply Chain Vulnerability (CVE)

**Severity:** High

**Description:**
GO-2026-5024 in golang.org/x/sys@v0.41.0: Invoking integer overflow in NewNTUnicodeString in golang.org/x/sys/windows (upgrade to 0.44.0)

**Recommendation:**
Upgrade or replace the vulnerable dependency. Pin all dependency versions and enable automated CVE scanning (Dependabot or OSV Scanner).

---

### 🔵 ⚡ `AS-011` — DoS Resilience — Missing Rate Limit / Timeout

**Severity:** Low

**Description:**
tool performs network or execution operations but declares no rate-limit, timeout, or retry configuration

**Recommendation:**
Declare explicit rate-limit, timeout, and retry configuration for all network and execution tools. Implement exponential back-off and surface resource state to the calling agent.

---

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🔵 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Low

**Description:**
input schema exposes 11 properties (threshold: 10)

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟠 📦 `AS-004` — Supply Chain Vulnerability (CVE)

**Severity:** High

**Description:**
GO-2026-5024 in golang.org/x/sys@v0.41.0: Invoking integer overflow in NewNTUnicodeString in golang.org/x/sys/windows (upgrade to 0.44.0)

**Recommendation:**
Upgrade or replace the vulnerable dependency. Pin all dependency versions and enable automated CVE scanning (Dependabot or OSV Scanner).

---

### 🔵 ⚡ `AS-011` — DoS Resilience — Missing Rate Limit / Timeout

**Severity:** Low

**Description:**
tool performs network or execution operations but declares no rate-limit, timeout, or retry configuration

**Recommendation:**
Declare explicit rate-limit, timeout, and retry configuration for all network and execution tools. Implement exponential back-off and surface resource state to the calling agent.

---

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟠 📦 `AS-004` — Supply Chain Vulnerability (CVE)

**Severity:** High

**Description:**
GO-2026-5024 in golang.org/x/sys@v0.41.0: Invoking integer overflow in NewNTUnicodeString in golang.org/x/sys/windows (upgrade to 0.44.0)

**Recommendation:**
Upgrade or replace the vulnerable dependency. Pin all dependency versions and enable automated CVE scanning (Dependabot or OSV Scanner).

---

### 🔵 ⚡ `AS-011` — DoS Resilience — Missing Rate Limit / Timeout

**Severity:** Low

**Description:**
tool performs network or execution operations but declares no rate-limit, timeout, or retry configuration

**Recommendation:**
Declare explicit rate-limit, timeout, and retry configuration for all network and execution tools. Implement exponential back-off and surface resource state to the calling agent.

---

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟠 📦 `AS-004` — Supply Chain Vulnerability (CVE)

**Severity:** High

**Description:**
GO-2026-5024 in golang.org/x/sys@v0.41.0: Invoking integer overflow in NewNTUnicodeString in golang.org/x/sys/windows (upgrade to 0.44.0)

**Recommendation:**
Upgrade or replace the vulnerable dependency. Pin all dependency versions and enable automated CVE scanning (Dependabot or OSV Scanner).

---

### 🔵 ⚡ `AS-011` — DoS Resilience — Missing Rate Limit / Timeout

**Severity:** Low

**Description:**
tool performs network or execution operations but declares no rate-limit, timeout, or retry configuration

**Recommendation:**
Declare explicit rate-limit, timeout, and retry configuration for all network and execution tools. Implement exponential back-off and surface resource state to the calling agent.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/tavily-mcp.json)*
