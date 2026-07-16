# 🟢 skone-pqc-khepra-mcp

> KHEPRA MCP Server
MCP Registry License Container PQC

Sovereign compliance engine with 36,195 STIG/CCI/NIST/CMMC mappings.

Air-gappable. Zero token costs. Run ert_scan → get a Godfather Report with dollar-denominated business impact.
The only MCP compliance server that runs on your metal — with the World's First DoD PQC STIG built in.

PQC-01-STIG-V1R1 — Full Whitepaper →
17 controls covering CNSA 2.0, FIPS 203/204/205, and the NSA's May 2026 MCP security advisory.
The world's first DoD-style Post-Quantum Cryptography STIG, including the first PQC controls for agentic AI and MCP deployments.

Tiers
Tier	License Key	Tools	Telemetry	Egress
Community	❌ Not required	pqc_stig + 12 core tools	Opt-in Dark Crypto Intel	Zero (sovereign mode)
Sovereign	✅ Required	All 34 tools	Zero	Zero
Pharaoh	✅ Required	All 34 tools + priority support	Zero	Zero
Community tier is free. Run pqc_stig to assess your project's quantum readiness against
PQC-01-STIG-V1R1 — the World's First DoD-style Post-Quantum Cryptography STIG — no license key needed.

What It Does
KHEPRA MCP connects your AI assistant directly to a hardened compliance engine. Ask Claude or any MCP client to scan a system, map findings to STIG/NIST/CMMC controls, and generate an executive-ready risk report — all without sending data to external APIs.

Key capabilities:

36,195 STIG/CCI/NIST 800-53/800-171/CMMC mappings (offline, bundled)
Post-quantum cryptographic attestation on every tool call (ML-DSA-65 / FIPS 204)
World's First DoD PQC STIG — 17 controls covering CNSA 2.0 / FIPS 203/204/205 + agentic AI / MCP (PQC-01-STIG-V1R1)
Godfather Report: dollar-denominated business impact per finding (FAIR model)
Air-gap and SCIF compatible — sovereign/ironbank modes make zero egress calls
Flat annual licensing — no per-token or per-query charges
Runs on your metal: on-prem, DoD, IC, classified environments
Installation
There are two delivery methods: Docker (recommended, no build required) and compiled binary (fastest startup, required for air-gap). Both support the same environment variables and all MCP clients.

Choose your path:

Method	Best For	Startup
Docker	Most users, easiest setup	~2s
Compiled Binary	Air-gap, SCIF, performance	~300ms
Option A: Docker (Recommended)
Requires Docker Desktop or Docker Engine. The image is pre-built and ships the full compliance database — no additional downloads in sovereign mode.

# Pull once
docker pull ghcr.io/nouchix/pqc-khepra-mcp:latest

# Test it (should print the initialize response and exit)
echo '{"jsonrpc":"2.0","method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{},"clientInfo":{"name":"test","version":"1.0"}},"id":0}' \
  | docker run --rm -i -e KHEPRA_MODE=sovereign ghcr.io/nouchix/pqc-khepra-mcp:latest
Option B: Compiled Binary
Requires Go 1.21+ for building, or download a pre-built release from GitHub Releases.

git clone https://github.com/nouchix/PQC-Khepra-MCP.git
cd PQC-Khepra-MCP

# Build (cross-compile for your OS)
go build -o khepra-mcp ./cmd/khepra-mcp        # Linux / macOS
go build -o khepra-mcp.exe ./cmd/khepra-mcp    # Windows

# Test the binary
echo '{"jsonrpc":"2.0","method":"initialize","params":{"protocolVersion":"2025-11-25","capabilities":{},"clientInfo":{"name":"test","version":"1.0"}},"id":0}' \
  | KHEPRA_MODE=sovereign ./khepra-mcp
Windows — using the batch launcher
The repo ships a run-mcp.bat launcher for Windows. It uses the pre-built binary (fast path) and falls back to go run automatically:

:: run-mcp.bat is already in the repo at the root of PQC-Khepra-MCP
:: Point your MCP client to: cmd /c C:\path\to\PQC-Khepra-MCP\run-mcp.bat
Adding to Your AI Client
Claude Desktop
Config file location:

macOS: ~/Library/Application Support/Claude/claude_desktop_config.json
Windows: %APPDATA%\Claude\claude_desktop_config.json
Linux: ~/.config/Claude/claude_desktop_config.json
Community tier — Docker (macOS / Linux)
{
  "mcpServers": {
    "khepra": {
      "command": "docker",
      "args": [
        "run", "--rm", "-i",
        "-e", "KHEPRA_MODE=sovereign",
        "-v", "/var/lib/khepra:/var/lib/khepra",
        "ghcr.io/nouchix/pqc-khepra-mcp:latest"
      ]
    }
  }
}
Community tier — Docker (Windows)
{
  "mcpServers": {
    "khepra": {
      "command": "docker",
      "args": [
        "run", "--rm", "-i",
        "-e", "KHEPRA_MODE=sovereign",
        "-v", "C:\\Users\\YourName\\.khepra:/var/lib/khepra",
        "ghcr.io/nouchix/pqc-khepra-mcp:latest"
      ]
    }
  }
}
Community tier — Binary (Windows, fastest startup)
{
  "mcpServers": {
    "khepra": {
      "command": "C:\\path\\to\\PQC-Khepra-MCP\\khepra-mcp.exe",
      "args": [],
      "env": {
        "KHEPRA_MODE": "sovereign",
        "KHEPRA_NETWORK_POLICY": "lan",
        "MCP_PQC_ENABLED": "true",
        "KHEPRA_MANIFEST_PATH": "C:\\path\\to\\PQC-Khepra-MCP\\manifest.json"
      }
    }
  }
}
Community tier — Binary via batch launcher (Windows)
{
  "mcpServers": {
    "khepra": {
      "command": "cmd",
      "args": ["/c", "C:\\path\\to\\PQC-Khepra-MCP\\run-mcp.bat"],
      "env": {
        "KHEPRA_MODE": "sovereign",
        "KHEPRA_NETWORK_POLICY": "lan",
        "MCP_PQC_ENABLED": "true"
      }
    }
  }
}
Sovereign / Pharaoh tier (with license key)
{
  "mcpServers": {
    "khepra": {
      "command": "docker",
      "args": [
        "run", "--rm", "-i",
        "-e", "KHEPRA_LICENSE_KEY",
        "-e", "KHEPRA_MODE=sovereign",
        "-v", "/var/lib/khepra:/var/lib/khepra",
        "-v", "/var/log/khepra:/var/log/khepra",
        "ghcr.io/nouchix/pqc-khepra-mcp:latest"
      ],
      "env": {
        "KHEPRA_LICENSE_KEY": "YOUR_LICENSE_KEY_HERE"
      }
    }
  }
}
After editing, restart Claude Desktop. Verify in Settings → Developer — you should see khepra with status running and all tools listed.

Cursor
Config file: .cursor/mcp.json in your project root, or ~/.cursor/mcp.json globally.

Docker (macOS / Linux)
{
  "servers": {
    "khepra": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run", "--rm", "-i",
        "-e", "KHEPRA_MODE=sovereign",
        "-v", "/var/lib/khepra:/var/lib/khepra",
        "ghcr.io/nouchix/pqc-khepra-mcp:latest"
      ]
    }
  }
}
Binary (macOS / Linux)
{
  "servers": {
    "khepra": {
      "type": "stdio",
      "command": "/path/to/khepra-mcp",
      "args": [],
      "env": {
        "KHEPRA_MODE": "sovereign",
        "KHEPRA_MANIFEST_PATH": "/path/to/PQC-Khepra-MCP/manifest.json"
      }
    }
  }
}
Binary (Windows)
{
  "servers": {
    "khepra": {
      "type": "stdio",
      "command": "C:\\path\\to\\PQC-Khepra-MCP\\khepra-mcp.exe",
      "args": [],
      "env": {
        "KHEPRA_MODE": "sovereign",
        "KHEPRA_MANIFEST_PATH": "C:\\path\\to\\PQC-Khepra-MCP\\manifest.json"
      }
    }
  }
}
VS Code (with GitHub Copilot or Cline extension)
Config file: .vscode/mcp.json in your project, or user settings.

{
  "servers": {
    "khepra": {
      "type": "stdio",
      "command": "docker",
      "args": [
        "run", "--rm", "-i",
        "-e", "KHEPRA_MODE=sovereign",
        "-v", "${env:HOME}/.khepra:/var/lib/khepra",
        "ghcr.io/nouchix/pqc-khepra-mcp:latest"
      ]
    }
  }
}
Or via user settings.json for the Cline extension:

{
  "cline.mcpServers": {
    "khepra": {
      "command": "docker",
      "args": [
        "run", "--rm", "-i",
        "-e", "KHEPRA_MODE=sovereign",
        "ghcr.io/nouchix/pqc-khepra-mcp:latest"
      ]
    }
  }
}
Windsurf
Config file: ~/.codeium/windsurf/mcp_config.json

{
  "mcpServers": {
    "khepra": {
      "command": "docker",
      "args": [
        "run", "--rm", "-i",
        "-e", "KHEPRA_MODE=sovereign",
        "-v", "/var/lib/khepra:/var/lib/khepra",
        "ghcr.io/nouchix/pqc-khepra-mcp:latest"
      ]
    }
  }
}
Continue.dev
Config file: ~/.continue/config.json — add to the experimental.modelContextProtocolServers array:

{
  "experimental": {
    "modelContextProtocolServers": [
      {
        "name": "khepra",
        "transport": {
          "type": "stdio",
          "command": "docker",
          "args": [
            "run", "--rm", "-i",
            "-e", "KHEPRA_MODE=sovereign",
            "ghcr.io/nouchix/pqc-khepra-mcp:latest"
          ]
        }
      }
    ]
  }
}
Cloud / SaaS AI Tools (Claude.ai, ChatGPT, Gemini, etc.)
Cloud-based AI tools cannot directly spawn local subprocesses — they need an HTTP/SSE bridge to reach your local KHEPRA server. There are two approaches:

Approach 1 — mcp-remote proxy (easiest, no server required)
mcp-remote tunnels a local stdio MCP server over HTTPS, making it accessible to any cloud tool. This is what the Kaggle MCP entry in the config above uses.

# Install once
npm install -g mcp-remote

# Start the bridge (exposes your local KHEPRA server at https://localhost:3000)
KHEPRA_MODE=sovereign mcp-remote \
  --server "docker run --rm -i -e KHEPRA_MODE=sovereign ghcr.io/nouchix/pqc-khepra-mcp:latest" \
  --port 3000
Then in Claude.ai (or any cloud tool that accepts MCP SSE URLs):

MCP Server URL: http://localhost:3000/sse
Security note: mcp-remote binds to localhost by default. Do not expose it to the public internet without TLS and authentication. In sovereign/ironbank mode, KHEPRA itself makes zero egress calls — only the bridge connection to the cloud tool carries data.

Approach 2 — Self-hosted HTTP/SSE endpoint
For teams running KHEPRA on a shared server (e.g., Hostinger VPS at IP_ADDRESS), start the server in HTTP mode:

# On your server — start KHEPRA in HTTP/SSE mode
docker run -d \
  -e KHEPRA_MODE=hybrid \
  -e KHEPRA_HTTP_PORT=8443 \
  -e KHEPRA_LICENSE_KEY="${KHEPRA_LICENSE_KEY}" \
  -p 8443:8443 \
  ghcr.io/nouchix/pqc-khepra-mcp:latest

# Point your cloud tool to:
# https://your-server.com:8443/sse
Then configure any cloud AI tool that supports MCP SSE:

Cloud Tool	Where to add MCP URL
Claude.ai (Pro/Team)	Settings → Integrations → MCP Servers
OpenAI Assistants	API tools field with type: "mcp"
Gemini for Workspace	Extensions → Custom MCP (preview)
Glama.ai	Workspace → MCP Servers
Smithery.ai	Catalog → Self-hosted server
Note: HTTP/SSE mode (hybrid/edge) enables external connections. Always terminate TLS at a reverse proxy (nginx/Caddy) and restrict access by IP or API key. The sovereign mode refuses HTTP connections by design — air-gap integrity is preserved.

Approach 3 — Smithery / MCP Registry (Community tier only)
KHEPRA is listed on Smithery.ai and the MCP Registry. Cloud tools that support registry-based discovery can install it directly:

Registry ID: io.github.nouchix/pqc-khepra-mcp
This runs the Community tier via Smithery's managed infrastructure. For sovereign deployment (air-gap, your data stays on your metal), use Options A or B above.

Validation — Test Your Installation
Run this from your terminal to verify the server responds correctly:

# Docker
echo '{"jsonrpc":"2.0","method":"tools/list","params":{},"id":1}' \
  | docker run --rm -i -e KHEPRA_MODE=sovereign ghcr.io/nouchix/pqc-khepra-mcp:latest

# Binary (Linux / macOS)
echo '{"jsonrpc":"2.0","method":"tools/list","params":{},"id":1}' \
  | KHEPRA_MODE=sovereign ./khepra-mcp

# Binary (Windows PowerShell)
'{"jsonrpc":"2.0","method":"tools/list","params":{},"id":1}' \
  | & ".\khepra-mcp.exe"
Expected output: a JSON-RPC response listing all available tools. If you see "tools": [...] with 12+ entries — you're connected.

Full protocol validation (Windows)
# Runs the complete Claude Desktop handshake sequence and validates all responses
.\scripts\test-mcp-handshake.ps1 -BinaryPath ".\khepra-mcp.exe"

# Expected output:
# [PASS] initialize | protocolVersion=2025-11-25 | listChanged=False
# [PASS] tools/list | count=34
# TRL-10 READY - Server passes full Claude Desktop protocol validation
MCP Tools
Community Tier (Free — No License Key)
pqc_stig — World's First DoD PQC STIG ⭐
Assesses a source code directory against PQC-01-STIG-V1R1: 12 controls covering CNSA 2.0 algorithm approval, ML-DSA-65 key strength, ML-KEM-768 encapsulation, hybrid cryptography, key storage, constant-time implementation, and certificate chain requirements.

pqc_stig(scan_path?: string, profile?: "quick" | "full" | "executive")
Example: "Run pqc_stig on my project and tell me if I'm CNSA 2.0 compliant"

nist_map
Map CCI identifiers or STIG findings to NIST 800-53 Rev 5 controls.

khepra_query_stig
Query the 36,195-row STIG/CCI/NIST/CMMC compliance database by control ID.

dark_crypto_contribute (opt-in)
Contribute anonymized cryptographic algorithm telemetry to the SouHimBou AI Dark Crypto Intelligence Network. No PII. Opt-in only — never fires without explicit invocation.

Sovereign / Pharaoh Tier
ert_scan
Enterprise Risk & Threat scan across STIG, NIST 800-53, NIST 800-171, CMMC, and FedRAMP. Returns Godfather Report with dollar-denominated business impact.

ert_scan(target: string, frameworks?: string[], output_format?: "godfather" | "json" | "csv")
Example: "Run ert_scan on /etc and generate a Godfather Report"

stig_check
Automated RHEL-09-STIG-V1R3 compliance scan against a live system or configuration path.

cmmc_assess
Full CMMC Level 1, 2, or 3 assessment with gap analysis and POA&M generation.

godfather_report
Generate an executive Godfather Report from prior scan results: top 10 findings ranked by dollar exposure, remediation ROI, and FAIR model business impact.

+ 20 additional tools
agent_record, dag_attestation, flight_export, khepra_get_dag_chain, nhi_inventory, acp_status, owasp_agent_assess, khepra_export_attestation, khepra_export_poam, khepra_get_compliance_score, ert_crypto, ert_readiness, stig_benchmark, ir_analysis, vuln_hunter, sbom_generate, threat_model, khepra_query_threat_intel, discover_assets, and more.

The Godfather Report
Unlike compliance scanners that output a wall of CVEs, KHEPRA translates findings into the language executives care about:

Finding: RHEL-09-212030 — No FIPS-validated crypto on /etc/ssh
Severity: CAT I (HIGH)
Business Impact: $2.4M estimated breach exposure (FAIR model)
Remediation Cost: $800 (4 hours engineer time)
ROI: 3,000x
Every finding includes control ID, framework mapping, business impact in dollars, remediation cost estimate, and ROI.

Deployment Modes
Mode	Air-Gap	Egress	Telemetry	Use Case
sovereign	✅ Yes	Zero	Zero	On-prem, SCIF, classified (DEFAULT)
ironbank	✅ Yes	Zero	Zero	DoD/IC production, FIPS-only
hybrid	❌ No	LAN	Zero	Edge + cloud coordination
edge	❌ No	Unrestricted	Zero	Fully stateless SaaS
Set via KHEPRA_MODE environment variable. Unknown values are rejected at startup and fall back to sovereign (fail-closed).

Environment Variables
Variable	Required	Default	Description
KHEPRA_LICENSE_KEY	Sovereign/Pharaoh only	—	License key. Community tier runs without one. Get at nouchix.com
KHEPRA_MODE	No	sovereign	Deployment mode: sovereign, ironbank, hybrid, edge
KHEPRA_MANIFEST_PATH	No	manifest.json	Path to signed tool manifest file
KHEPRA_HOME	No	/var/lib/khepra	Data and compliance DB directory
KHEPRA_LOG_DIR	No	/var/log/khepra	Log directory
KHEPRA_DAG_PATH	No	~/.khepra/dag	DAG audit chain storage path
KHEPRA_AUDIT_LOG_PATH	No	~/.khepra/audit.ndjson	Signed audit log path
KHEPRA_MAX_CONCURRENT	No	5	Max concurrent tool calls per agent
KHEPRA_NETWORK_POLICY	No	lan	Network scope: lan, none, unrestricted
MCP_PQC_ENABLED	No	true	Enable ML-DSA-65 PQC attestation on all responses
Air-Gap & SCIF Deployment
KHEPRA makes zero external network calls in sovereign and ironbank modes:

License validated offline via ML-DSA-65 signed license.adinkhepra file
Compliance databases (36,195 mappings) bundled in container — no external downloads
No telemetry, no heartbeat, no egress — verified at the transport layer
# Transfer image to air-gapped network
docker save ghcr.io/nouchix/pqc-khepra-mcp:latest | gzip > khepra-mcp.tar.gz

# On air-gapped host:
docker load < khepra-mcp.tar.gz
Note on telemetry: The dark_crypto_contribute tool (Community tier) sends anonymized cryptographic algorithm telemetry to the SouHimBou AI intelligence network only when explicitly invoked by the user. It is never triggered automatically. In sovereign/ironbank mode, all network calls are blocked at the transport layer regardless.

Compliance Coverage
Framework	Version	Mappings
STIG (RHEL 9)	V1R3	Automated scanning
NIST 800-53	Rev 5	2,120 CCIs
NIST 800-171	Rev 2	320 controls
CMMC	Level 3	Full practice set
FedRAMP	High	Baseline scanning
PQC-01-STIG-V1R1	V1R1	17 PQC controls (CNSA 2.0)
Total		36,195+ mappings
Licensing
Flat annual licensing — no per-token or per-query charges.

Tier	Cost	License Key	Tools
Community	Free	Not required	pqc_stig + 12 core tools
Sovereign	Annual flat fee	Required	All 34 tools, air-gap, on-prem
Pharaoh	Annual flat fee	Required	All 34 tools + priority support + SLA
Community tier is permanently free — contribute to open-source PQC adoption
Sovereign/Pharaoh: contact contact@nouchix.com or visit nouchix.com
Security
Reporting Vulnerabilities
Do not open public issues for security vulnerabilities.

Report privately via GitHub Security Advisories or email support@nouchix.com.

SLA	Target
Acknowledgement	24 hours
Initial assessment	5 business days
Patch / mitigation (Critical)	30 days
We accept encrypted reports via PGP (keys/security_contact.asc) and Post-Quantum channels (Dilithium / ML-DSA-65 keys in keys/). See SECURITY.md for the full disclosure policy and ASAF event taxonomy.

Security Posture
Deploying advanced post-quantum cryptography, air-gapped isolation, and comprehensive STIG mappings — built in direct alignment with NSA & ASD Model Context Protocol guidelines.

NSA & ASD MCP Security Alignment
The NSA and Australian Signals Directorate (ASD) have published specific threat vectors for AI systems interacting with local environments. KHEPRA MCP is explicitly designed to mitigate every identified vector:

NSA/ASD Requirement	KHEPRA Implementation
Cryptographic validation of tool responses	ML-DSA-65 (Dilithium) signatures on all JSON-RPC 2.0 payloads
Input validation & sanitization	Parameter injection resistance via strict JSON Schema validation
Principle of least privilege credentials	Short-lived ephemeral tokens tied to specific task execution windows
Comprehensive audit logging	Tamper-evident events compiled into an immutable DAG structure
Resource consumption limits	Rate limiting + backpressure for LLM request loops
Authorization gates for sensitive actions	Human-in-the-loop gate for destructive state changes
Environment isolation	Containerized execution with zero-egress sovereign mode
Software supply chain integrity	Manifest pinning for all loaded tools and dependencies
Network exposure reduction	Air-gappable — zero internet transit in sovereign/ironbank modes
Post-quantum resilience	PQC-signed DAG trail protecting against harvest-now-decrypt-later
Compliance Certifications
Framework	Status	Coverage
CMMC Level 2	✅	Automates evidence collection for AU, CM, SI, SC domains
NIST SP 800-171 Rev 2	✅	Logging, accountability, system integrity
NIST SP 800-53 Rev 5	✅	Continuous monitoring (AU-2, SI-4)
FIPS 203 (ML-KEM)	✅	Key encapsulation for secure transit
FIPS 204 (ML-DSA)	✅	Digital signatures for payload authentication
NSM-10 PQC Mandate	✅	National Security Memorandum 10 compliance
DFARS 252.204-7012	✅	Immutable forensic trails for cyber incident reporting
NSA MCP Security Guidelines	✅	Direct mapping to all published AI agent threat mitigations
Live Deployment — Physical Edge
Running continuously on constrained edge hardware since May 12, 2026 to prove efficiency in sovereign environments:

Hardware: Raspberry Pi 2 · 1 GB RAM · 900 MHz ARM · Live Spectrum Router
SCADA Pod: STM32U585 / QRB2210 · Modbus TCP · MQTT · Zephyr RTOS 3.4+ · Live Dilithium Signature Verification
Controls active: 3 open ports secured · 12 STIG violations detected · 100% file integrity monitoring (AIDE) · 24/7 continuous operation
Academic Validation
Event	Date	Institution
UAlbany AI Plus Symposium 2026 — "KHEPRA Protocol: Quantum-Resilient Agentic AI Security Using Cultural Cryptography"	March 7, 2026	NSA CAE-CDE Institution · 200+ audience
SUNY Albany Cybersecurity Showcase — First PQC key ceremony on STM32-class device (SCADA Pod)	May 12–13, 2026	Live demo · SCADA architecture poster
USPTO Provisional Patent #73565085 — pending.
🔒 Iron Bank containers in DISA vetting process.

About NouchiX
Veteran-led advisory firm translating CMMC, NIST, and STIG mandates into executive roadmaps.

Sales / General: contact@nouchix.com
Support: support@nouchix.com
Website: https://nouchix.com
Phone: (518) 304-4450
Developed by SecRed Knowledge Inc. dba NouchiX, Albany, NY.

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 2 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [skone-pqc-khepra-mcp](https://smithery.ai/server/skone/pqc-khepra-mcp) |
| **Scan Date** | 2026-07-16 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 13 |
| Info     | 108 |

## Detailed Findings

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: network access, filesystem access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: network access, database access

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

### ⚪ 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** Info

**Description:**
input parameter "staged_token" accepts a credential (informational; not evidence of insecure handling)

**Recommendation:**
Avoid accepting raw credentials as input parameters. Use secret managers (e.g. 1Password CLI, AWS Secrets Manager) and ensure credentials are never logged or stored in agent traces.

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access, HTTP requests

**Recommendation:**
Tool requests broad permissions (exec/fs/network). Validate input parameters using Enums where possible, and restrict file system operations to explicit allowed directories.

---

### ⚪ 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** Info

**Description:**
input parameter "password" accepts a credential (informational; not evidence of insecure handling)

**Recommendation:**
Avoid accepting raw credentials as input parameters. Use secret managers (e.g. 1Password CLI, AWS Secrets Manager) and ensure credentials are never logged or stored in agent traces.

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: network access, filesystem access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: network access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: network access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: network access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: network access, environment variables

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
declared capabilities: filesystem access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

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

### ⚪ 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** Info

**Description:**
input parameter "credential_id" accepts a credential (informational; not evidence of insecure handling)

**Recommendation:**
Avoid accepting raw credentials as input parameters. Use secret managers (e.g. 1Password CLI, AWS Secrets Manager) and ensure credentials are never logged or stored in agent traces.

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: network access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access, database access

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

### ⚪ 🗝️ `AS-010` — Insecure Secret Handling

**Severity:** Info

**Description:**
input parameter "password" accepts a credential (informational; not evidence of insecure handling)

**Recommendation:**
Avoid accepting raw credentials as input parameters. Use secret managers (e.g. 1Password CLI, AWS Secrets Manager) and ensure credentials are never logged or stored in agent traces.

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: network access, database access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: code/command execution

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: network access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: network access, database access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

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

### ⚪ 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Info

**Description:**
declared capabilities: filesystem access

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/skone-pqc-khepra-mcp.json)*
