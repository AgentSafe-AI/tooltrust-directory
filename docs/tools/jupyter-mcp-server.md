# ⛔ jupyter-mcp-server

> 🪐 🔧 Model Context Protocol (MCP) Server for Jupyter.

| Field | Value |
|-------|-------|
| **Grade** | **F** |
| **Risk Score** | 75 |
| **Version** | `0.22.1` |
| **Vendor** | datalayer |
| **Stars** | ⭐ 918 |
| **Language** | Python |
| **Source** | [jupyter-mcp-server](https://github.com/datalayer/jupyter-mcp-server) |
| **Scan Date** | 2026-03-06 |
| **Scanner** | tooltrust-scanner/0.1.4 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 1 |
| High     | 1 |
| Medium   | 0 |
| Low      | 0 |
| Info     | 0 |

## Detailed Findings

### 🔴 `AS-006` — Arbitrary Code Execution: executes arbitrary code in Jupyter kernel

**Severity:** Critical

**Description:**
jupyter-mcp-server allows direct execution of arbitrary Python/R/Julia code in a Jupyter kernel via execute_code and run_cell tools. This is the highest possible code execution risk — unrestricted kernel access with full OS-level capabilities from the kernel process.

**Recommendation:**
BLOCK or require explicit approval for every invocation. Run the Jupyter kernel in a gVisor/sandbox container. Restrict kernel networking and filesystem access. Never expose to untrusted agents.

---

### 🟠 ⚠️ `AS-002` — Dangerous Permission: exec + filesystem + network permissions implied

**Severity:** High

**Description:**
A Jupyter kernel has full exec, fs, and network capabilities by default. Any agent invoking this server can read/write files, make network requests, and execute OS commands via subprocess.

**Recommendation:**
Use kernel gateway with restricted profiles. Apply strict network and filesystem policies at the container level.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/jupyter-mcp-server.json)*
