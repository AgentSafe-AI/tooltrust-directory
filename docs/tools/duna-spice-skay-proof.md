# 🟠 duna-spice-skay-proof

> # Proof

     Code-validated pattern intelligence from pydantic-ai's actual source code.

     ## What It Does

     Proof extracts working patterns from real library code via analysis — not from documentation, blog posts, or human guesses. 391 patterns from pydantic-ai and pydantic, mapped to a knowledge graph of 
     1,251 nodes and 8,911 edges.

     When you ask Proof to build an agent, it assembles code from patterns the library's own code structure validates. If a pattern fails, your feedback makes the network smarter.

     ## Quick Start

     No API keys. No auth. No configuration needed.
    Connect via Smithery CLI
    npx -y @smithery/cli add proof --transport streamable-http https://mcp.aigentys.com


     Then in your AI assistant: *"Run catalog() to see what's available."*

     ## Tools (5)

     | Tool | Description |
     |------|-------------|
     | **catalog()** | List all libraries, pattern counts, and available data. Start here. |
     | **search(query)** | Find patterns by keyword (e.g., "agent", "tool", "validator"). |
     | **explain(symbol)** | Deep-dive into a class or function — its methods, dependencies, gotchas. |
     | **build_agent(description)** | Generate working agent code from validated patterns. |
     | **report(about, worked, details)** | Report whether generated code worked. Feedback drives confidence scores. |

     ## How It Works

     1. **Graph Engine** loads the knowledge graph (SurrealDB, 1,251 nodes, 8,911 edges)
     2. **Pattern Extractor** finds validated patterns from AST analysis of pydantic-ai source
     3. **Agent Assembler** composes working code from patterns, not hallucinated guesses
     4. **Confidence Scores** start at 0.5 (code-derived) and update with user feedback

     ## What's in the Network

     - **pydantic-ai v1.77.0** — 751 classes, 369 functions, 98 docs, 33 examples
     - **pydantic v2.12.4** — type system, validation, serialization patterns
     - **391 extracted patterns** — reusable code structures validated by the library itself


     ## Roadmap

     Cross-library intelligence (langchain, crewai, OpenAI) is next. Right now it's pydantic-ai + pydantic only.

     Your feedback is what makes the network smart. Use `report()` after every build.

| Field | Value |
|-------|-------|
| **Grade** | **C** |
| **Risk Score** | 25 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [duna-spice-skay-proof](https://smithery.ai/server/duna-spice-skay/proof) |
| **Scan Date** | 2026-04-17 |
| **Scanner** | tooltrust-scanner/v0.3.8 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 2 |
| Medium   | 1 |
| Low      | 2 |
| Info     | 5 |

## Detailed Findings

### ⚪ `AS-014` — DEPENDENCY_INVENTORY_UNAVAILABLE

**Severity:** Info

**Description:**
Tool did not expose metadata.dependencies or repo_url, so supply-chain coverage is limited.

**Recommendation:**
Review and remediate the identified issue.

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

### 🔵 ⚡ `AS-011` — DoS Resilience — Missing Rate Limit / Timeout

**Severity:** Low

**Description:**
tool performs network or execution operations but declares no rate-limit, timeout, or retry configuration

**Recommendation:**
Declare explicit rate-limit, timeout, and retry configuration for all network and execution tools. Implement exponential back-off and surface resource state to the calling agent.

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

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares exec permission

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### 🔵 ⚡ `AS-011` — DoS Resilience — Missing Rate Limit / Timeout

**Severity:** Low

**Description:**
tool performs network or execution operations but declares no rate-limit, timeout, or retry configuration

**Recommendation:**
Declare explicit rate-limit, timeout, and retry configuration for all network and execution tools. Implement exponential back-off and surface resource state to the calling agent.

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/duna-spice-skay-proof.json)*
