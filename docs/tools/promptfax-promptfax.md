# 🟢 promptfax-promptfax

> PromptFax is a pay-per-use remote MCP server that lets an AI assistant send a real fax to a US fax number.

Your assistant uploads a PDF or image, enters the destination, reviews a quote, opens Stripe Checkout, and queues the transmission. Pricing is $2.00 for the first 5 pages, then $0.10 per page after that, capped at $4.50 for up to 35 pages. Payment is captured only after the fax is recorded as delivered.

There is no PromptFax account, no subscription, and no API key to manage. PromptFax uses OAuth and Streamable HTTP, so users install once and their assistant can start a fax workflow when needed.

Inside ChatGPT, PromptFax opens a connector widget that handles document review, destination entry, Stripe Checkout, and the delivery report. Inside Claude or other MCP hosts, PromptFax falls back to an agent-friendly hosted session page that handles the same flow without requiring the host to pass files directly.

Every real send requires a user-reviewed quote and Stripe authorization. The assistant cannot silently complete a fax. The `send_fax` and `cancel` tools are marked as destructive so well-behaved MCP hosts can surface confirmation steps.

## Capabilities

- Send outbound faxes to US fax numbers
- Attach a PDF or image from the host, widget, hosted session page, or HTTPS URL
- Generate a pay-per-use quote before payment
- Open Stripe Checkout for payment authorization
- Queue a paid fax for transmission
- Check workflow, payment, and delivery status
- Retry eligible failed faxes
- Cancel an active send while cancellation is still possible

## Tools

- `start_session` — Create or resume a PromptFax MCP session.
- `attach_document` — Bind a PromptFax document or HTTPS PDF URLs to an MCP session.
- `get_quote` — Create a fax quote from a session, document, or HTTPS PDF URL.
- `checkout` — Open Stripe Checkout after the user accepts a quote.
- `send_fax` — Queue a paid fax for transmission.
- `get_status` — Fetch workflow, payment, and transmission status.
- `retry_failed_fax` — Prepare a retry flow after a retry-eligible failed fax.
- `cancel` — Cancel the active send while cancellation is still possible.

## Common use cases

- Sending a one-off medical record, referral, or intake form to a clinic's fax line.
- Returning a signed contract to a small business or law office that still operates by fax.
- Sending insurance claim forms, prior-authorization paperwork, or appeal letters.
- Sending a benefits or HR form to a payroll vendor that requires fax submission.
- Sending court filings or notarized documents to a filing office.

## Data handling

PromptFax does not require an email address, does not provision a PromptFax account, and stores uploaded documents only as long as the fax workflow needs them. Server-side working copies are deleted after transmission. The browser-local delivery report persists for up to 24 hours unless cleared sooner.

PromptFax is outbound-only and currently supports US fax numbers only. Payments are processed by Stripe for Cogint Labs LLC.

## Links

- Homepage: https://promptfax.app/
- MCP endpoint: https://promptfax.app/mcp
- Setup docs: https://promptfax.app/mcp-setup
- Tool catalog: https://promptfax.app/mcp-tools
- Demo: https://promptfax.app/mcp-demo
- Pricing: https://promptfax.app/pricing
- Privacy: https://promptfax.app/privacy
- Terms: https://promptfax.app/terms

| Field | Value |
|-------|-------|
| **Grade** | **A** |
| **Risk Score** | 2 |
| **Version** | `smithery` |
| **Vendor** | Smithery |
| **Source** | [promptfax-promptfax](https://smithery.ai/server/promptfax/promptfax) |
| **Scan Date** | 2026-07-25 |
| **Scanner** | tooltrust-scanner/v0.3.19 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 0 |
| Medium   | 0 |
| Low      | 4 |
| Info     | 12 |

## Detailed Findings

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

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/promptfax-promptfax.json)*
