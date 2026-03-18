# 🟡 db-mcp-server

> A powerful multi-database server implementing the Model Context Protocol (MCP) to provide AI assistants with structured access to databases.

| Field | Value |
|-------|-------|
| **Grade** | **B** |
| **Risk Score** | 17 |
| **Version** | `1.8.0` |
| **Vendor** | FreePeak |
| **Stars** | ⭐ 354 |
| **Language** | Go |
| **Source** | [db-mcp-server](https://github.com/FreePeak/db-mcp-server) |
| **Scan Date** | 2026-03-18 |
| **Scanner** | tooltrust-scanner/v0.1.6 |

---

## Findings Summary

| Severity | Count |
|----------|:-----:|
| Critical | 0 |
| High     | 4 |
| Medium   | 3 |
| Low      | 4 |
| Info     | 58 |

## Detailed Findings

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'MCPResponse' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'NotPostgres' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'PostgresWithExplicitTimescaleFalse' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'PostgresWithExplicitTimescaleOne' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'PostgresWithExplicitTimescaleTrue' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'PostgresWithoutExplicitTimescale' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'Test' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'add_compression_policy' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'add_continuous_aggregate_policy' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'add_dimension' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'add_retention_policy' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'alter_job' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'approx_percentile' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'bad_structure' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'bucket' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'create_hypertable' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'create_materialized_view' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'daily_metrics' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'dbExecute' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'dbList' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

**Recommendation:**
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'dbQuery' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

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
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'dbQueryBuilder' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### 🔵 ⚡ `AS-011` — DoS Resilience — Missing Rate Limit / Timeout

**Severity:** Low

**Description:**
tool performs network or execution operations but declares no rate-limit, timeout, or retry configuration

**Recommendation:**
Declare explicit rate-limit, timeout, and retry configuration for all network and execution tools. Implement exponential back-off and surface resource state to the calling agent.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'dbSchema' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'error_table' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'execute' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'first' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'histogram' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'hypertable_detailed_size' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'hypertable_size' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'last' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'list_databases' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'mysql' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'not_found' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'performance' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'policy_compression' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'policy_refresh_continuous_aggregate' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'policy_retention' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'postgres' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'public' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

**Recommendation:**
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'query' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### 🔵 ⚡ `AS-011` — DoS Resilience — Missing Rate Limit / Timeout

**Severity:** Low

**Description:**
tool performs network or execution operations but declares no rate-limit, timeout, or retry configuration

**Recommendation:**
Declare explicit rate-limit, timeout, and retry configuration for all network and execution tools. Implement exponential back-off and surface resource state to the calling agent.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'refresh_continuous_aggregate' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'regular_table' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'schema' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'test' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'test_table' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'testdb' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'time_bucket' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'time_bucket_gapfill' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'time_bucket_ng' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'time_weight' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'timescaledb' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### 🟡 🔑 `AS-002` — Excessive Permission Surface

**Severity:** Medium

**Description:**
tool declares fs permission

**Recommendation:**
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'timescaledb_create_continuous_aggregate_test_db' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'timescaledb_drop_continuous_aggregate_test_db' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'timescaledb_get_continuous_aggregate_info_test_db' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'timescaledb_list_continuous_aggregates_test_db' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'timescaledb_refresh_continuous_aggregate_test_db' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### 🟠 🔑 `AS-002` — Excessive Permission Surface

**Severity:** High

**Description:**
tool declares network permission

**Recommendation:**
Restrict tool capabilities to the minimum required. Audit each declared permission (exec, network, db, fs) and remove any not strictly necessary.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'timescaledb_timeseries_query_test_db' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

### 🔵 ⚡ `AS-011` — DoS Resilience — Missing Rate Limit / Timeout

**Severity:** Low

**Description:**
tool performs network or execution operations but declares no rate-limit, timeout, or retry configuration

**Recommendation:**
Declare explicit rate-limit, timeout, and retry configuration for all network and execution tools. Implement exponential back-off and surface resource state to the calling agent.

---

### ⚪ ℹ️ `AS-007` — INSUFFICIENT_TOOL_DATA

**Severity:** Info

**Description:**
Tool 'transaction' has no description - agents cannot reason about its purpose, and static analysis coverage is limited

**Recommendation:**
Review and remediate the identified issue.

---

*Scored using [ToolTrust methodology](../methodology.md) · [Raw JSON report](../../data/reports/db-mcp-server.json)*
