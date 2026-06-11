# 🟠 cyanheads-clinicaltrialsgov-mcp-server

> Search ClinicalTrials.gov trials, retrieve study details and results, and match patients to eligible trials via MCP. STDIO or Streamable HTTP. 

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 40 |
| **Version** | `2.6.5` |
| **Vendor** | cyanheads |
| **Stars** | ⭐ 79 |
| **npm Package** | `clinicaltrialsgov-mcp-server` |
| **npm Downloads (30d)** | 5.2k |
| **Language** | TypeScript |
| **Source** | [cyanheads-clinicaltrialsgov-mcp-server](https://github.com/cyanheads/clinicaltrialsgov-mcp-server) |
| **Scan Date** | 2026-06-11 |
| **Scanner** | tooltrust-scanner/v0.3.13 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 11 |
| Medium   | 3 |
| Low      | 5 |
| Info     | 0 |

## Detailed Findings

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
input schema exposes 18 properties (threshold: 10)

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

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares db permission

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

### 🟠 📦 `AS-004` — Supply Chain Vulnerability (CVE)

**Severity:** High

**Description:**
GO-2026-5024 in golang.org/x/sys@v0.41.0: Invoking integer overflow in NewNTUnicodeString in golang.org/x/sys/windows (upgrade to 0.44.0)

**Recommendation:**
Upgrade or replace the vulnerable dependency. Pin all dependency versions and enable automated CVE scanning (Dependabot or OSV Scanner).

---

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares db permission

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

### 🟠 📦 `AS-004` — Supply Chain Vulnerability (CVE)

**Severity:** High

**Description:**
GO-2026-5024 in golang.org/x/sys@v0.41.0: Invoking integer overflow in NewNTUnicodeString in golang.org/x/sys/windows (upgrade to 0.44.0)

**Recommendation:**
Upgrade or replace the vulnerable dependency. Pin all dependency versions and enable automated CVE scanning (Dependabot or OSV Scanner).

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/cyanheads-clinicaltrialsgov-mcp-server.json)*
