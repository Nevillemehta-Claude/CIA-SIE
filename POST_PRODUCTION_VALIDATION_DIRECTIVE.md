# CIA-SIE POST-PRODUCTION VALIDATION DIRECTIVE
## Cursor AI Execution Protocol — Pre-Staging Forensic Audit
### FINAL COMPREHENSIVE VERSION

---

**Document ID:** CIA-SIE-PPVD-002
**Version:** 2.0.0 (Final Comprehensive)
**Classification:** Mandatory Execution Protocol
**Applicability:** All code produced by Cursor AI prior to staging
**Synthesized From:** 
- Gold Standard Validation Protocol v2.0 (5,174 words)
- Universal Code Audit & Application Development Framework v2.0 (4,862 words)
**Compliance Alignment:** IEEE 1028, ISO/IEC 25010, ISO/IEC 27001, OWASP ASVS v4.0, NASA-STD-8739.8, SOX Section 404, PCI-DSS

---

# EXECUTIVE DIRECTIVE

**TO: Cursor AI**
**RE: Mandatory Post-Production Validation Before Staging**

You have produced code for the CIA-SIE trading system. **BEFORE any code is staged for deployment**, you are required to execute this comprehensive validation protocol. This is not optional. Every file you have created or modified must pass through this forensic audit process.

**Non-Negotiable Mandate:** No code advances to staging without documented evidence of validation against every dimension specified herein.

---

# TABLE OF CONTENTS

1. [Part I: Governing Principles](#part-i-governing-principles)
2. [Part II: Pre-Validation Requirements](#part-ii-pre-validation-requirements)
3. [Part III: Protocol Application Matrix](#part-iii-protocol-application-matrix)
4. [Part IV: 15-Layer Validation Framework](#part-iv-15-layer-validation-framework)
5. [Part V: Audit Tier Classification](#part-v-audit-tier-classification)
6. [Part VI: Nine-Phase Audit Methodology](#part-vi-nine-phase-audit-methodology)
7. [Part VII: Phase-Specific Execution Procedures](#part-vii-phase-specific-execution-procedures)
8. [Part VIII: Constitutional Framework](#part-viii-constitutional-framework)
9. [Part IX: Automated Tooling](#part-ix-automated-tooling)
10. [Part X: Evidence & Verification Standards](#part-x-evidence-and-verification-standards)
11. [Part XI: Certification Criteria](#part-xi-certification-criteria)
12. [Part XII: Handoff Deliverables](#part-xii-handoff-deliverables)
13. [Part XIII: Quick Reference Checklists](#part-xiii-quick-reference-checklists)
14. [Part XIV: Autonomous Execution Mandate](#part-xiv-autonomous-execution-mandate)
15. [Appendices](#appendices)

---

# PART I: GOVERNING PRINCIPLES
## The Eight Gold Standard Axioms

These principles are **inviolable**. Every action you take during validation must honour these axioms.

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║  AXIOM 1: NASA-STYLE RIGOUR                                                        ║
║  • Every finding cites exact file:line reference                                   ║
║  • 100% coverage verification — never statistical sampling                         ║
║  • Binary PASS/FAIL determinations only — no partial states                        ║
║  • Reproducibility: Any auditor following this protocol reaches identical results  ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║  AXIOM 2: AUDIT BEFORE BUILD                                                       ║
║  • Validation MUST precede staging                                                 ║
║  • Building upon unvalidated foundations propagates defects exponentially          ║
║  • Technical debt compounds; foundational defects cascade to all dependents        ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║  AXIOM 3: ZERO DRIFT POLICY                                                        ║
║  • Specifications and implementation shall remain synchronised                     ║
║  • Divergence without documented justification = AUDIT FAILURE                     ║
║  • If spec differs from code: correct one, document the decision                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║  AXIOM 4: EVIDENCE-BASED VALIDATION                                                ║
║  • Assertions without evidence are INVALID                                         ║
║  • Every PASS requires documented proof                                            ║
║  • Every FAIL requires documented remediation path                                 ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║  AXIOM 5: FULL BIDIRECTIONAL TRACEABILITY                                          ║
║  • Every line of code traces to a requirement                                      ║
║  • Every requirement traces to implementation AND verification                     ║
║  • Orphan code (no requirement) is PROHIBITED                                      ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║  AXIOM 6: DOCUMENTATION-CODE ALIGNMENT                                             ║
║  • If it's documented, it MUST exist in code                                       ║
║  • If it exists in code, it MUST be documented                                     ║
║  • Stale documentation is a compliance violation                                   ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║  AXIOM 7: SINGLE SOURCE OF TRUTH                                                   ║
║  • For any information category, exactly ONE authoritative source exists           ║
║  • All other references derive from it                                             ║
║  Information Sources:                                                              ║
║    - Requirements → Requirements Specification Document                            ║
║    - API Contracts → OpenAPI Schema                                                ║
║    - Data Models → Database Schema / ORM Models                                    ║
║    - Business Logic → Authoritative Specification Document                         ║
║    - Configuration → Environment Configuration Repository                          ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║  AXIOM 8: DEFENCE IN DEPTH                                                         ║
║  • Multiple validation layers catch different issue classes                        ║
║  • No single layer provides complete coverage                                      ║
║  • Automate repeatable checks; reserve manual review for semantic validation       ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

---

# PART II: PRE-VALIDATION REQUIREMENTS

Before beginning validation, ensure these prerequisites are met. **Do not proceed if any prerequisite fails.**

## 2.1 Repository Requirements

```
□ Version control initialized (Git)
□ Main/master branch protected
□ All work committed (no uncommitted changes)
□ Clean working directory (git status shows clean)
□ Remote repository accessible
□ README.md exists at root
□ .gitignore properly configured
□ No secrets in git history
```

## 2.2 Environment Requirements

```
□ Development environment reproducible (requirements.txt, package.json, etc.)
□ All dependencies installable without errors
□ Application starts without errors
□ Database migrations can be applied to fresh database
□ Environment variables documented in .env.example
□ All external service connections verified
```

## 2.3 Documentation Requirements

```
□ Primary specification document exists and is current
□ API documentation exists (OpenAPI spec or equivalent)
□ Deployment instructions exist
□ Architecture overview document exists
□ Data model documentation exists
□ Configuration reference exists
```

## 2.4 Access Requirements

```
□ Repository read/write access confirmed
□ CI/CD pipeline access confirmed
□ Deployment environment access (staging minimum)
□ Secret management access (for validation only)
□ Database access for schema verification
```

## 2.5 Scope Classification

Before auditing, classify all files:

| Classification | Definition | Access Level |
|----------------|------------|--------------|
| **IN-SCOPE (Full Access)** | Subject to complete audit with read/write capability | Audit + Remediation |
| **IN-SCOPE (Read-Only)** | Subject to audit verification; modifications prohibited | Audit only |
| **REFERENCE-ONLY** | Used for cross-reference; not directly audited | Cross-reference |
| **OUT-OF-SCOPE** | Explicitly excluded; system-managed | No access |

**Standard Exclusions:**
- `.git/` — Version control internals (OUT-OF-SCOPE)
- `node_modules/` — Dependency artifacts (OUT-OF-SCOPE)
- `__pycache__/` — Python bytecode (OUT-OF-SCOPE)
- `venv/`, `.venv/` — Virtual environments (OUT-OF-SCOPE)

---

# PART III: PROTOCOL APPLICATION MATRIX

## 3.1 When to Apply This Protocol

| Scenario | Protocol Application |
|----------|---------------------|
| **Pre-Staging (Current)** | Full validation (all 15 layers, all 9 phases) |
| Project Handoff to New Team | Full validation |
| Major Release (vX.0.0) | Full validation |
| Minor Release (vX.Y.0) | Layers 1-8 + 12-13 |
| Patch Release (vX.Y.Z) | Layers 1-3 + 12 |
| Pre-Audit Preparation | Full validation |
| Third-Party Code Review | Layers 2-8 + 10-12 |

## 3.2 What This Protocol Guarantees

When applied correctly, this protocol certifies:

| Certification Area | Guarantee |
|--------------------|-----------|
| Code Quality | Meets maintainability standards, technical debt < 5% |
| Security Posture | OWASP Top 10 compliant, no critical vulnerabilities |
| Test Coverage | Follows testing pyramid, >80% overall, >95% critical paths |
| Documentation | Complete, accurate, and synchronized with code |
| CI/CD Pipeline | All checks passing, deployment-ready |
| API Integrity | Documented, validated, and specification-compliant |
| Constitutional Compliance | Business rules enforced in code |
| Type Safety | No implicit any, complete type coverage |

## 3.3 CMMI Level Alignment

CIA-SIE targets **CMMI Level 3-4** standards:

| CMMI Level | Framework Application | Audit Depth |
|------------|----------------------|-------------|
| Level 1: Initial | Foundational controls | Sampling permitted (≥80%) |
| Level 2: Managed | Standardised processes | Representative coverage (≥90%) |
| **Level 3: Defined** | Organisation-wide standards | Comprehensive coverage (≥95%) |
| **Level 4: Quantitatively Managed** | Metrics-driven | Full coverage (100%) with metrics |
| Level 5: Optimising | Continuous improvement | 100% + trend analysis + root cause |

## 3.4 Regulatory Compliance Context

This protocol aligns with requirements from:

| Regulatory Framework | Key Requirements | Relevant Sections |
|---------------------|------------------|-------------------|
| **ISO 27001** | Access control, audit logging | Security audit, Phase 8 |
| **SOX Section 404** | Internal controls, documentation | Documentation sync, RTM |
| **PCI-DSS** | Secure coding, testing | Security audit, test coverage |
| **OWASP ASVS** | Application security verification | Phase 8 |

---

# PART IV: 15-LAYER VALIDATION FRAMEWORK

## 4.1 Framework Overview

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                          15-LAYER VALIDATION FRAMEWORK                               │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ GOVERNANCE LAYERS (L1-L3)                                                            │
│   L1   Constitutional/Business Rules Compliance                                      │
│   L2   Specification-to-Code Reconciliation                                          │
│   L3   Architecture Diagram-to-Code Trace                                            │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ CODE QUALITY LAYERS (L4-L7)                                                          │
│   L4   Static Code Analysis                                                          │
│   L5   Technical Debt Assessment                                                     │
│   L6   Code Complexity & Maintainability                                             │
│   L7   Dead Code & Unused Dependency Detection                                       │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ DATA INTEGRITY LAYERS (L8-L9)                                                        │
│   L8   Data Model Hierarchy Validation                                               │
│   L9   Database Schema & Migration Audit                                             │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ INTERFACE LAYERS (L10-L11)                                                           │
│   L10  API Endpoint Reconciliation                                                   │
│   L11  Frontend-Backend Type Synchronization                                         │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ SECURITY LAYERS (L12-L13)                                                            │
│   L12  OWASP Top 10 Security Audit                                                   │
│   L13  Automated Security Scanning (SAST/DAST)                                       │
├─────────────────────────────────────────────────────────────────────────────────────┤
│ QUALITY ASSURANCE LAYERS (L14-L15)                                                   │
│   L14  Test Coverage & Quality Analysis                                              │
│   L15  CI/CD Pipeline Validation                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 4.2 Layer Criticality Matrix

| Layer | Name | Criticality | Blocking? | Automation Level | Maps to Phase |
|-------|------|-------------|-----------|------------------|---------------|
| L1 | Constitutional Compliance | **CRITICAL** | YES | Manual + Grep | Phase 8 |
| L2 | Spec-to-Code Reconciliation | **CRITICAL** | YES | Manual | Phase 7 |
| L3 | Architecture Trace | HIGH | YES | Manual | Phase 7 |
| L4 | Static Code Analysis | HIGH | YES | Automated | Phase 2, 3 |
| L5 | Technical Debt | MEDIUM | NO | Automated | Phase 2, 3 |
| L6 | Complexity/Maintainability | MEDIUM | NO | Automated | Phase 2, 3 |
| L7 | Dead Code Detection | LOW | NO | Automated | Phase 2, 3 |
| L8 | Data Model Hierarchy | HIGH | YES | Manual | Phase 4 |
| L9 | Database Schema Audit | HIGH | YES | Semi-Automated | Phase 4 |
| L10 | API Reconciliation | **CRITICAL** | YES | Semi-Automated | Phase 5 |
| L11 | Type Synchronization | HIGH | YES | Automated | Phase 5 |
| L12 | OWASP Security Audit | **CRITICAL** | YES | Manual | Phase 8 |
| L13 | Automated Security Scanning | **CRITICAL** | YES | Automated | Phase 8 |
| L14 | Test Coverage | HIGH | YES | Automated | Phase 6 |
| L15 | CI/CD Validation | **CRITICAL** | YES | Automated | Phase 1, 9 |

## 4.3 SDLC Phase Coverage Matrix

| SDLC Phase | Audit Layers | Coverage |
|------------|--------------|----------|
| Requirements | L2, L3, Phase 9A | Specification verification |
| Design | L3, Phase 7 | Architecture documentation |
| Implementation | L4, L5, L6, L7, Phases 2-5 | Code verification |
| Testing | L14, Phase 6 | Test coverage |
| Deployment | L15, Phase 1 | Configuration verification |
| Maintenance | L1, L2, Phases 8-9 | Compliance and traceability |

---

# PART V: AUDIT TIER CLASSIFICATION

## 5.1 Five-Tier Audit Depth Model

| Tier | Name | Coverage Depth | Evidence Standard | Apply To |
|------|------|----------------|-------------------|----------|
| **Tier 1** | Cursory Review | Structure verification | File existence confirmed | Config files, static assets |
| **Tier 2** | Standard Audit | Function-level review | Function signatures documented | Utility modules, helpers |
| **Tier 3** | Deep Audit | Line-by-line verification | Every function documented with purpose | Core business logic |
| **Tier 4** | Forensic Audit | Character-level analysis | Logic flow mapped completely | Security modules, API handlers, auth |
| **Tier 5** | Exhaustive Verification | Mathematical proof level | Formal verification artefacts | Cryptographic operations, safety-critical |

## 5.2 Tier Assignment Matrix

| Artefact Category | Default Tier | Elevation Triggers |
|-------------------|--------------|-------------------|
| Source Code — Business Logic | Tier 3 | Security implications → Tier 4 |
| Source Code — Security/Auth | Tier 4 | Cryptographic operations → Tier 5 |
| Source Code — Utility | Tier 2 | Shared across critical paths → Tier 3 |
| Test Files | Tier 3 | Coverage of Tier 4+ code → Tier 4 |
| Database Migrations | Tier 3 | Schema affecting critical data → Tier 4 |
| Configuration Files | Tier 1 | Security parameters → Tier 3 |
| CI/CD Pipelines | Tier 2 | Deployment to production → Tier 3 |
| Specifications | Tier 2 | Cross-reference verification only |
| Documentation | Tier 1 | Accuracy verification only |

## 5.3 CIA-SIE Component Tier Assignments

| Component Category | Assigned Tier | Rationale |
|-------------------|---------------|-----------|
| Kite API Integration | **Tier 4** | Financial data, security-critical |
| TradingView Webhook Handlers | **Tier 4** | External input processing |
| Claude AI Pipeline Orchestration | Tier 3 | Core business logic |
| Scrip Analysis Engine | Tier 3 | Core business logic |
| Meta-Analysis / Grading Engine | Tier 3 | Core business logic |
| Authentication / Session Management | **Tier 4** | Security-critical |
| Frontend UI Components | Tier 2-3 | Standard with elevation for data display |
| Configuration Files | Tier 1→3 | Elevated if contains secrets references |
| Test Files | Tier 3 | Must match tier of code they test |
| Database Migrations | Tier 3 | Schema integrity |
| Utility/Helper Functions | Tier 2 | Elevated if shared across critical paths |

---

# PART VI: NINE-PHASE AUDIT METHODOLOGY

## 6.1 Phase Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                      NINE-PHASE AUDIT EXECUTION SEQUENCE                             │
├─────────────────────────────────────────────────────────────────────────────────────┤
│  PHASE 1: Repository Structure Audit                                                 │
│           Layers: L15 (partial)                                                      │
│           └─ Output: PHASE_1_REPOSITORY_STRUCTURE_AUDIT.md                          │
│                                                                                      │
│  PHASE 2: Backend Code Audit                                                         │
│           Layers: L4, L5, L6, L7                                                     │
│           └─ Output: PHASE_2_BACKEND_CODE_AUDIT.md                                  │
│                                                                                      │
│  PHASE 3: Frontend Code Audit                                                        │
│           Layers: L4, L5, L6, L7, L11                                               │
│           └─ Output: PHASE_3_FRONTEND_CODE_AUDIT.md                                 │
│                                                                                      │
│  PHASE 4: Data Layer Audit                                                           │
│           Layers: L8, L9                                                             │
│           └─ Output: PHASE_4_DATA_LAYER_AUDIT.md                                    │
│                                                                                      │
│  PHASE 5: API Specification Audit                                                    │
│           Layers: L10, L11                                                           │
│           └─ Output: PHASE_5_API_SPECIFICATION_AUDIT.md                             │
│                                                                                      │
│  PHASE 6: Test Coverage Audit                                                        │
│           Layers: L14                                                                │
│           └─ Output: PHASE_6_TEST_COVERAGE_AUDIT.md                                 │
│                                                                                      │
│  PHASE 7: Documentation Synchronisation Audit                                        │
│           Layers: L2, L3                                                             │
│           └─ Output: PHASE_7_DOCUMENTATION_SYNC_AUDIT.md                            │
│                                                                                      │
│  PHASE 8: Security & Constitutional Compliance Audit                                 │
│           Layers: L1, L12, L13                                                       │
│           └─ Output: PHASE_8_SECURITY_CONSTITUTIONAL_AUDIT.md                       │
│                                                                                      │
│  PHASE 9: Final Certification                                                        │
│           Layers: L15 (complete), All layers aggregated                              │
│           └─ Outputs: 9A_RTM.md, 9B_SCORECARD.md, 9C_GAP_ANALYSIS.md,              │
│                       9D_REMEDIATION_ROADMAP.md, 9E_CERTIFICATION.md                │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 6.2 Execution Protocol

```
MANDATORY SEQUENCE:
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  1. Acknowledge: "GOLD STANDARD AUDIT INITIATED — CIA-SIE POST-PRODUCTION"          │
│  2. Verify Pre-Validation Requirements (Part II) — STOP if any fail                 │
│  3. Execute Phase 1 → Commit report → Proceed immediately                            │
│  4. Execute Phase 2 → Commit report → Proceed immediately                            │
│  5. Execute Phase 3 → Commit report → Proceed immediately                            │
│  6. Execute Phase 4 → Commit report → Proceed immediately                            │
│  7. Execute Phase 5 → Commit report → Proceed immediately                            │
│  8. Execute Phase 6 → Commit report → Proceed immediately                            │
│  9. Execute Phase 7 → Commit report → Proceed immediately                            │
│  10. Execute Phase 8 → Commit report → Proceed immediately                           │
│  11. Execute Phase 9 (all sub-phases) → Commit reports                               │
│  12. Announce: "AUDIT CYCLE COMPLETE — 13 REPORTS GENERATED"                         │
└─────────────────────────────────────────────────────────────────────────────────────┘

DO NOT pause for human intervention between phases.
DO NOT skip phases.
DO NOT proceed to staging until all phases complete with documented evidence.
```

## 6.3 Standardised Commit Messages

| Phase | Commit Message Template |
|-------|------------------------|
| 1 | `Phase 1 Complete: Repository Structure Audit [X files enumerated, Y total lines]` |
| 2 | `Phase 2 Complete: Backend Code Audit [X files, Y lines verified, Z issues found]` |
| 3 | `Phase 3 Complete: Frontend Code Audit [X files, Y components verified]` |
| 4 | `Phase 4 Complete: Data Layer Audit [schema verified, X migrations validated]` |
| 5 | `Phase 5 Complete: API Specification Audit [X endpoints verified, Y discrepancies]` |
| 6 | `Phase 6 Complete: Test Coverage Audit [X% overall coverage, Y test files verified]` |
| 7 | `Phase 7 Complete: Documentation Sync Audit [X documents verified, Y discrepancies]` |
| 8 | `Phase 8 Complete: Security & Constitutional Audit [OWASP: X/10, Constitutional: Y rules verified]` |
| 9 | `Phase 9 Complete: Final Certification [Overall: X% compliance, Status: GOLD/SILVER/BRONZE/NOT CERTIFIED]` |

---

# PART VII: PHASE-SPECIFIC EXECUTION PROCEDURES

## PHASE 1: Repository Structure Audit

**Objective:** Establish complete file manifest with line counts and categorisation.
**Layers Covered:** L15 (partial)

**Actions:**
1. Enumerate ALL files you created or modified
2. Categorise by type: Backend Source | Frontend Source | Test | Config | Documentation | Assets
3. Calculate line counts per file
4. Verify directory structure matches architectural specification
5. Identify any orphaned or untracked files
6. Verify CI/CD pipeline configuration exists

**Output Format:**
```markdown
# PHASE 1: Repository Structure Audit
**Generated:** [timestamp]
**Auditor:** Cursor AI
**Status:** COMPLETE

## Summary Statistics
| Category | Files | Lines | % of Total |
|----------|-------|-------|------------|
| Backend Source | X | Y | Z% |
| Frontend Source | X | Y | Z% |
| Test Files | X | Y | Z% |
| Configuration | X | Y | Z% |
| Documentation | X | Y | Z% |
| CI/CD | X | Y | Z% |
| **TOTAL** | **X** | **Y** | **100%** |

## Scope Classification
| Classification | File Count |
|----------------|------------|
| IN-SCOPE (Full Access) | X |
| IN-SCOPE (Read-Only) | X |
| REFERENCE-ONLY | X |
| OUT-OF-SCOPE | X |

## Complete File Manifest
### Backend Source Files
| File Path | Lines | Audit Tier | Status |
|-----------|-------|------------|--------|
| src/api/handler.py | 234 | Tier 4 | PENDING |

### Frontend Source Files
[...]

### CI/CD Configuration
| File | Purpose | Status |
|------|---------|--------|
| .github/workflows/ci.yml | Main CI pipeline | EXISTS |

## Structural Observations
- [Any directory structure concerns]
- [Any orphaned files identified]
- [Any missing expected files]
```

**Commit Message:** `Phase 1 Complete: Repository Structure Audit [X files enumerated, Y total lines]`

---

## PHASE 2: Backend Code Audit

**Objective:** Verify every backend source file at assigned Tier depth.
**Layers Covered:** L4 (Static Analysis), L5 (Technical Debt), L6 (Complexity), L7 (Dead Code)

### L4: Static Code Analysis

For EACH backend file, execute:

1. **Read entire file** — No skipping, no summarising
2. **Run linter with strict rules:**
   ```bash
   pylint src/ --exit-zero
   flake8 src/
   mypy src/ --strict
   ```
3. **Document all classes and functions:**
   ```markdown
   | Type | Name | Lines | Purpose | Tier Compliance |
   |------|------|-------|---------|-----------------|
   | Class | KiteHandler | 45-120 | Manages Kite API connections | ✓ Tier 4 |
   | Function | process_webhook | 122-156 | Parses TradingView alerts | ✓ Tier 4 |
   ```

### L5: Technical Debt Assessment

| Metric | Target | Formula | Actual | Status |
|--------|--------|---------|--------|--------|
| Technical Debt Ratio | < 5% | (Remediation Cost / Dev Cost) × 100 | | |
| Code Duplication | < 5% | Duplicated lines / Total lines | | |
| Test Debt | 0 | Commented/skipped tests | | |
| Documentation Debt | 0 | Undocumented public APIs | | |

**Debt Categorisation:**
- **Must-fix before staging:** [list]
- **Should-fix soon:** [list]
- **Nice-to-fix later:** [list]
- **Accepted technical debt (with rationale):** [list]

### L6: Complexity & Maintainability

| Metric | Target | Tool | Actual | Status |
|--------|--------|------|--------|--------|
| Cyclomatic Complexity | < 10 per function | radon, SonarQube | | |
| Cognitive Complexity | < 15 per function | SonarQube | | |
| File Length | < 500 lines | wc -l | | |
| Function Length | < 50 lines | Custom | | |
| Nesting Depth | < 4 levels | Linters | | |
| Parameter Count | < 5 | Linters | | |

### L7: Dead Code & Unused Dependency Detection

**What to Detect:**
```
□ Unreachable code
□ Unused variables
□ Unused functions/methods
□ Unused imports
□ Unused dependencies
□ Commented-out code blocks > 10 lines
□ Deprecated code without removal timeline
```

**Tools:**
| Language | Dead Code Tools | Dependency Tools |
|----------|-----------------|------------------|
| Python | vulture, pylint | pip-autoremove, pipdeptree |
| JavaScript | ts-prune, eslint | depcheck |

**Per-File Audit Template:**
```markdown
## File: src/api/kite_handler.py

### Metadata
- **Lines:** 234
- **Audit Tier:** Tier 4 (Forensic)
- **Status:** [ ] PENDING / [X] VERIFIED / [!] ISSUES FOUND

### Contents Enumeration
| Type | Name | Lines | Purpose |
|------|------|-------|---------|
| Class | KiteHandler | 10-180 | Manages Kite API lifecycle |
| Method | connect | 25-45 | Establishes authenticated session |
| Method | place_order | 47-89 | Submits trade orders to Kite |

### Prohibited Pattern Check
| Pattern | Status | Location |
|---------|--------|----------|
| Hardcoded API keys | ABSENT ✓ | — |
| SQL concatenation | ABSENT ✓ | — |
| eval()/exec() | ABSENT ✓ | — |
| Unvalidated input | ABSENT ✓ | — |

### Complexity Metrics
| Metric | Value | Threshold | Status |
|--------|-------|-----------|--------|
| Cyclomatic Complexity (max) | 8 | ≤10 | PASS |
| Function Length (max lines) | 42 | ≤50 | PASS |
| Nesting Depth (max) | 3 | ≤4 | PASS |

### Dead Code Analysis
| Check | Status | Details |
|-------|--------|---------|
| Unreachable code | NONE ✓ | — |
| Unused functions | NONE ✓ | — |
| Unused imports | NONE ✓ | — |
| Commented-out blocks | NONE ✓ | — |

### Cross-References
- Implements: REQ-API-001, REQ-API-002
- Tested by: tests/test_kite_handler.py
- Documented in: docs/api/kite-integration.md

### Findings
[List any issues with file:line references]
```

**Pass Criteria:**
```
✓ Zero linter errors in final run
✓ Warnings below threshold (< 10)
✓ Technical Debt Ratio < 5%
✓ Average cyclomatic complexity < 10
✓ No function with complexity > 25 (hard limit)
✓ No files > 1000 lines
✓ No unreachable code
✓ No unused public functions
✓ No unused dependencies
✓ No commented-out code blocks > 10 lines
```

**Commit Message:** `Phase 2 Complete: Backend Code Audit [X files, Y lines verified, Z issues found]`

---

## PHASE 3: Frontend Code Audit

**Objective:** Verify every frontend source file.
**Layers Covered:** L4, L5, L6, L7, L11 (Type Synchronization)

**For EACH frontend file, execute:**

1. **Read entire file**
2. **Run linters:**
   ```bash
   eslint . --ext ts,tsx
   tsc --noEmit
   ```
3. **Document all components and functions**
4. **Compare against component specification**
5. **Verify:**
   - TypeScript strict mode compliance (no implicit `any`)
   - Props validation
   - State management patterns
   - Error boundary implementation
   - Accessibility compliance (WCAG 2.1 AA if applicable)
6. **Check backend-frontend type parity (L11)**

### L11: Frontend-Backend Type Synchronization

```markdown
## Type Synchronization Verification

### Backend Response Types → Frontend Types
| Endpoint | Backend Response Type | Frontend Type | Match Status |
|----------|----------------------|---------------|--------------|
| /api/v1/analysis | AnalysisResponse | AnalysisData | ✓ MATCH |

### Enum Synchronization
| Enum Name | Backend Values | Frontend Values | Match Status |
|-----------|---------------|-----------------|--------------|
| OrderStatus | [PENDING, FILLED, CANCELLED] | [PENDING, FILLED, CANCELLED] | ✓ MATCH |

### TypeScript Compilation
- Status: PASS / FAIL
- Errors: [count]
- Strict mode: ENABLED / DISABLED
```

**Pass Criteria:**
```
✓ Zero TypeScript errors
✓ Strict mode enabled
✓ All API responses have frontend types
✓ Enums synchronized
✓ API service fully typed
✓ No implicit any
```

**Commit Message:** `Phase 3 Complete: Frontend Code Audit [X files, Y components verified]`

---

## PHASE 4: Data Layer Audit

**Objective:** Verify database schema integrity and migration chain.
**Layers Covered:** L8 (Data Model Hierarchy), L9 (Database Schema & Migration)

### L8: Data Model Hierarchy Validation

**What to Validate:**
```
□ Entity definitions match specification
□ Relationships are correct (1:1, 1:N, N:M)
□ Required fields are enforced
□ Prohibited fields are absent
□ Constraints are implemented
□ Indexes are appropriate
```

**Actions:**
1. **Read ALL ORM/model definitions completely**
2. **Extract data model from specification**
3. **Compare ORM models with specification**
4. **Verify NO prohibited columns exist**

### L9: Database Schema & Migration Audit

**Actions:**
1. **Apply migrations to fresh database**
   ```bash
   # Reset and apply all migrations
   python manage.py migrate --run-syncdb
   ```
2. **Test rollback capability**
3. **Validate schema matches ORM models**
4. **Performance check (EXPLAIN on critical queries)**

**Output Format:**
```markdown
## Data Model Audit

### Tables Enumerated
| Table | Columns | Primary Key | Foreign Keys | Indexes |
|-------|---------|-------------|--------------|---------|
| scrips | 12 | id | — | symbol, exchange |
| analyses | 8 | id | scrip_id → scrips | created_at |

### Prohibited Column Check
| Prohibited Type | Status | Evidence |
|-----------------|--------|----------|
| [Domain-specific] | ABSENT ✓ | grep -r "pattern" returned 0 |

### Migration Chain Verification
| Migration | Version | Status | Reversible |
|-----------|---------|--------|------------|
| 001_initial.py | 001 | APPLIED ✓ | YES |
| 002_add_analysis.py | 002 | APPLIED ✓ | YES |

### Constraint Verification
| Constraint Type | Count | Verified |
|-----------------|-------|----------|
| NOT NULL | 24 | ✓ |
| UNIQUE | 3 | ✓ |
| FOREIGN KEY | 5 | ✓ |
| CHECK | 2 | ✓ |

### Index Utilization (Critical Queries)
| Query | Uses Index? | Execution Plan |
|-------|-------------|----------------|
| Get scrip by symbol | YES | Index Scan |
```

**Pass Criteria:**
```
✓ All specified entities exist
✓ All relationships correctly implemented
✓ No prohibited fields present
✓ Constraints enforced at DB level
✓ All migrations apply without error
✓ Schema matches ORM models
✓ Critical queries use indexes
✓ No full table scans on large tables
```

**Commit Message:** `Phase 4 Complete: Data Layer Audit [schema verified, X migrations validated]`

---

## PHASE 5: API Specification Audit

**Objective:** Verify API implementation matches specification exactly.
**Layers Covered:** L10 (API Reconciliation), L11 (Type Synchronization)

### L10: API Endpoint Reconciliation

**Actions:**
1. **Read API specification document**
2. **For EACH documented endpoint:**
   - Verify route exists in code
   - Verify HTTP method matches
   - Verify request schema matches
   - Verify response schema matches
   - Document status: IMPLEMENTED | PARTIAL | MISSING | UNDOCUMENTED
3. **Reverse trace:** Find any implemented endpoints NOT in specification
4. **Validate OpenAPI spec (if applicable):**
   ```bash
   openapi-spec-validator spec.yaml
   ```
5. **Test each endpoint**

**Output Format:**
```markdown
## API Endpoint Reconciliation

### Documented → Implementation
| Endpoint | Method | Spec Location | Code Location | Schema Match | Status |
|----------|--------|---------------|---------------|--------------|--------|
| /api/v1/webhooks/tradingview | POST | spec.md#tv-webhook | routes/webhooks.py:45 | ✓ | IMPLEMENTED |
| /api/v1/analysis/{scrip_id} | GET | spec.md#get-analysis | routes/analysis.py:23 | ✓ | IMPLEMENTED |

### Implementation → Documentation (Reverse Trace)
| Endpoint | Method | Code Location | Documented? |
|----------|--------|---------------|-------------|
| /api/v1/health | GET | routes/health.py:10 | ✗ UNDOCUMENTED |

### Schema Validation Results
| Endpoint | Request Schema | Response Schema | Validation |
|----------|----------------|-----------------|------------|
| /api/v1/webhooks/tradingview | TradingViewAlert | WebhookResponse | PASS |

### OpenAPI Validation
- Status: PASS / FAIL
- Errors: [list]
```

**Pass Criteria:**
```
✓ 100% of endpoints documented
✓ Documentation matches implementation
✓ OpenAPI spec validates (if applicable)
✓ All endpoints respond correctly
✓ No undocumented endpoints
```

**Commit Message:** `Phase 5 Complete: API Specification Audit [X endpoints verified, Y discrepancies]`

---

## PHASE 6: Test Coverage Audit

**Objective:** Verify test suite completeness following testing pyramid.
**Layers Covered:** L14

### Testing Pyramid Standards

```
Target Distribution:
┌────────────────────────────────────────────┐
│              E2E Tests (10%)               │
│            ┌────────────────┐              │
│            │      E2E       │              │
│            └────────────────┘              │
│        Integration Tests (20%)             │
│       ┌────────────────────────┐           │
│       │     Integration        │           │
│       └────────────────────────┘           │
│           Unit Tests (70%)                 │
│   ┌────────────────────────────────────┐   │
│   │          Unit Tests                │   │
│   └────────────────────────────────────┘   │
└────────────────────────────────────────────┘
```

### Coverage Thresholds

| Criticality Level | Minimum Coverage |
|-------------------|------------------|
| Tier 5 (Safety-Critical) | 100% + MC/DC |
| Tier 4 (Security-Critical) | 100% statement |
| Tier 3 (Business-Critical) | ≥95% statement |
| Tier 2 (Standard) | ≥80% statement |
| Constitutional Rules | **100%** — non-negotiable |
| Overall | >80% |
| Critical paths | >95% |

**Actions:**
1. **Read every test file**
2. **Execute coverage analysis:**
   ```bash
   pytest --cov=src --cov-report=xml tests/
   npm test -- --coverage
   ```
3. **Document coverage percentage per module**
4. **Identify untested code paths**
5. **Verify constitutional compliance tests exist**
6. **Map tests to requirements (for RTM)**
7. **Assess test quality:**
   - Tests are meaningful (not just coverage padding)
   - Tests verify behavior, not implementation
   - Tests are maintainable
   - No flaky tests
   - No skipped tests without documented reason

**Output Format:**
```markdown
## Test Coverage Audit

### Coverage Summary
| Module | Lines | Covered | Coverage % | Threshold | Status |
|--------|-------|---------|------------|-----------|--------|
| api/kite_handler.py | 234 | 228 | 97.4% | 95% | PASS |
| api/webhook.py | 156 | 156 | 100% | 100% | PASS |

### Testing Pyramid Analysis
| Test Type | Count | % of Total | Target | Status |
|-----------|-------|------------|--------|--------|
| Unit | 145 | 72% | 70% | PASS |
| Integration | 38 | 19% | 20% | PASS |
| E2E | 12 | 6% | 10% | MARGINAL |

### Test Quality Assessment
| Metric | Status |
|--------|--------|
| All tests pass | ✓ |
| No flaky tests | ✓ |
| No skipped tests (without reason) | ✓ |
| Tests verify behavior | ✓ |

### Untested Code Paths
| File | Lines | Reason |
|------|-------|--------|
| utils/deprecated.py | 45-67 | Dead code — recommend removal |

### Constitutional Rule Test Coverage
| Rule | Test File | Test Function | Status |
|------|-----------|---------------|--------|
| CR-001 | test_constitutional.py | test_no_recommendations | COVERED ✓ |
```

**Pass Criteria:**
```
✓ All tests pass
✓ Coverage > 80% overall
✓ Critical paths > 95% covered
✓ Constitutional rules 100% covered
✓ Test pyramid distribution maintained
✓ No skipped tests without documented reason
✓ No flaky tests
```

**Commit Message:** `Phase 6 Complete: Test Coverage Audit [X% overall coverage, Y test files verified]`

---

## PHASE 7: Documentation Synchronisation Audit

**Objective:** Verify all documentation matches implementation.
**Layers Covered:** L2 (Spec-to-Code Reconciliation), L3 (Architecture Trace)

### L2: Specification-to-Code Reconciliation

**Actions:**
1. **Inventory all specification documents**
2. **Trace each specification to code:**
   - For each documented item, locate implementation
   - Verify parameters, return types, behavior match
3. **Reverse trace code to specifications:**
   - For each implementation, locate documentation
   - Add missing documentation for undocumented code
4. **Reconcile differences:**
   - Update documentation to match code, OR
   - Update code to match documentation
   - Document decision rationale

### L3: Architecture Diagram-to-Code Trace

**What to Validate:**
```
□ Layer diagrams (presentation, business, data)
□ Component diagrams
□ Data flow diagrams
□ Sequence diagrams
□ Deployment diagrams
```

**Actions:**
1. **Collect all architecture diagrams**
2. **For each LAYER in diagrams:**
   - Identify corresponding code directories
   - Verify layer boundaries are respected
   - Check for inappropriate cross-layer dependencies
3. **For each COMPONENT in diagrams:**
   - Locate corresponding code module
   - Verify interfaces match diagram
   - Verify dependencies match diagram
4. **For each DATA FLOW in diagrams:**
   - Trace actual code execution path
   - Verify data transformations occur as shown
   - Verify no undocumented side effects

**Output Format:**
```markdown
## Documentation Synchronisation Audit

### Specification Documents Verified
| Document | Sections | Claims Verified | Discrepancies |
|----------|----------|-----------------|---------------|
| API_SPEC.md | 12 | 45 | 2 |
| ARCHITECTURE.md | 8 | 23 | 0 |
| DATA_MODEL.md | 5 | 18 | 1 |

### Discrepancy Register
| ID | Document | Claim | Reality | Classification | Resolution |
|----|----------|-------|---------|----------------|------------|
| DISC-001 | API_SPEC.md#auth | "JWT expires in 1 hour" | Code shows 24 hours | Spec Drift | Update spec |
| DISC-002 | DATA_MODEL.md | "scrip.volume is INTEGER" | Schema shows BIGINT | Code Error | Verify intent |

### Architecture Diagram Trace
| Diagram Element | Code Location | Match Status |
|-----------------|---------------|--------------|
| WebhookReceiver | routes/webhooks.py | ✓ MATCH |
| AnalysisPipeline | services/pipeline.py | ✓ MATCH |
| KiteConnector | api/kite_handler.py | ✓ MATCH |

### Layer Boundary Verification
| Layer | Expected Directory | Actual | Cross-Layer Violations |
|-------|-------------------|--------|------------------------|
| Presentation | src/frontend/ | ✓ | 0 |
| Business Logic | src/services/ | ✓ | 0 |
| Data Access | src/models/ | ✓ | 0 |

### Data Flow Trace
| Flow | Source | Destination | Verified |
|------|--------|-------------|----------|
| Webhook → Analysis | webhooks.py:45 | pipeline.py:23 | ✓ |
```

**Pass Criteria:**
```
✓ Every documented feature exists in code
✓ Every implemented feature is documented
✓ Parameters, types, and behaviors match
✓ No stale documentation remains
✓ All diagram components exist in code
✓ Layer boundaries are respected
✓ Dependencies match diagrams
✓ Data flows match diagrams
```

**Commit Message:** `Phase 7 Complete: Documentation Sync Audit [X documents verified, Y discrepancies]`

---

## PHASE 8: Security & Constitutional Compliance Audit

**Objective:** Exhaustive verification of security posture and constitutional rules.
**Layers Covered:** L1 (Constitutional), L12 (OWASP), L13 (Automated Security)

### L12: OWASP Top 10 Security Audit (2021)

| # | Risk | Validation Method | Status | Evidence |
|---|------|-------------------|--------|----------|
| A01 | Broken Access Control | Review auth middleware, test bypass attempts | | |
| A02 | Cryptographic Failures | Review encryption usage, key management | | |
| A03 | Injection | Review input handling, verify parameterized queries | | |
| A04 | Insecure Design | Review architecture for security patterns | | |
| A05 | Security Misconfiguration | Review configs, headers, defaults | | |
| A06 | Vulnerable Components | Run dependency vulnerability scan | | |
| A07 | Auth/Session Failures | Review auth flows, session management | | |
| A08 | Data Integrity Failures | Review signatures, integrity checks | | |
| A09 | Logging Failures | Review logging, ensure no sensitive data logged | | |
| A10 | SSRF | Review URL handling, external requests | | |

### L13: Automated Security Scanning

**Tools to Run:**

| Tool Type | Purpose | Tool | Command |
|-----------|---------|------|---------|
| SAST | Static code analysis | Semgrep | `semgrep --config auto src/` |
| SAST | Python security | Bandit | `bandit -r src/` |
| SCA | Dependency scanning (Python) | pip-audit | `pip-audit` |
| SCA | Dependency scanning (Node) | npm audit | `npm audit --production` |
| Secret Scanner | Find leaked secrets | git-secrets | `git secrets --scan` |

**Triage Process:**
1. Run all scans
2. Categorize by severity
3. Identify false positives
4. Remediate critical and high issues
5. Document accepted medium/low issues with rationale
6. Re-run to verify clean

### Security Configuration Checklist

```markdown
## Security Configuration Verification

### Secrets Management
□ No hardcoded API keys in source code
□ No hardcoded tokens or passwords
□ All secrets loaded from environment variables
□ .env files in .gitignore
□ No secrets in git history (verified with git-secrets)

### Input Validation
□ All external inputs sanitized at boundaries
□ Parameterized queries used (no SQL concatenation)
□ Request body validation implemented
□ File upload restrictions enforced (if applicable)

### Authentication & Authorization
□ Token validation implemented
□ Token expiry handling correct
□ Refresh mechanism secure
□ Role-based access control enforced

### Security Headers
□ CORS properly configured
□ HTTPS enforced (production)
□ Secure cookie flags set
□ Content-Security-Policy defined

### Error Handling
□ No sensitive data in error responses
□ No stack traces exposed to clients
□ Graceful degradation implemented

### Rate Limiting
□ Rate limiting implemented on public endpoints
□ Abuse prevention patterns in place
```

### L1: Constitutional Compliance Matrix

**For each constitutional rule defined for CIA-SIE:**

```markdown
## Constitutional Compliance Matrix

| Rule ID | Description | Verification Method | Status | Evidence |
|---------|-------------|---------------------|--------|----------|
| CR-001 | [Rule description] | grep search + manual review | PASS/FAIL | [file:line or "Pattern absent"] |
| CR-002 | [Rule description] | Code path analysis | PASS/FAIL | [evidence] |

### Prohibited Pattern Search Results
| Pattern | Search Command | Occurrences | Status |
|---------|----------------|-------------|--------|
| "recommend" | grep -rn "recommend" src/ | 0 | ABSENT ✓ |
| "should buy" | grep -rn "should buy" src/ | 0 | ABSENT ✓ |
| "hardcoded.*key" | grep -rn "api_key.*=" src/ | 0 | ABSENT ✓ |

### Mandatory Artefact Verification
| Required Element | Location | Status |
|------------------|----------|--------|
| [Disclaimer text] | [file:line] | PRESENT ✓ |
| [Warning banner] | [component] | PRESENT ✓ |
```

**Pass Criteria:**
```
✓ Zero critical vulnerabilities
✓ Zero high vulnerabilities
✓ All medium/low documented with rationale
✓ No secrets in repository history
✓ All dependencies free of known CVEs
✓ All OWASP categories addressed
✓ Security headers configured
✓ 100% of constitutional rules have code enforcement
✓ Zero prohibited patterns found in codebase
✓ All required elements present and functional
```

**Commit Message:** `Phase 8 Complete: Security & Constitutional Audit [OWASP: X/10, Constitutional: Y rules verified, Z violations]`

---

## PHASE 9: Final Certification

### 9A: Requirements Traceability Matrix (RTM)

**Map EVERY requirement to implementation to verification:**

```markdown
# PHASE 9A: Requirements Traceability Matrix

| Req ID | Description | Implementation | File:Line | Test | Status |
|--------|-------------|----------------|-----------|------|--------|
| REQ-001 | Receive TradingView webhooks | WebhookHandler | routes/webhooks.py:23-67 | test_webhooks.py:test_receive | ✓ IMPLEMENTED |
| REQ-002 | Connect to Kite API | KiteHandler.connect() | api/kite.py:45-78 | test_kite.py:test_connect | ✓ IMPLEMENTED |
| REQ-003 | Process 50-100 scrips | PipelineOrchestrator | services/pipeline.py:100-234 | test_pipeline.py:test_batch | ◐ PARTIAL |

### Status Legend
| Symbol | Status | Definition |
|--------|--------|------------|
| ✓ | Implemented | Fully implemented and tested |
| ◐ | Partial | Partially implemented |
| ✗ | Not Implemented | Not yet implemented |
| N/A | Not Applicable | Requirement deferred or removed |
| ⚠ | Deviation | Implementation deviates from spec (documented) |

### Traceability Statistics
| Metric | Count |
|--------|-------|
| Total Requirements | X |
| Fully Implemented | Y |
| Partial | Z |
| Not Implemented | W |
| Coverage | Y/X = N% |

### Orphan Code Check
| Code Section | Has Requirement? | Action |
|--------------|------------------|--------|
| [Any code not mapped] | NO | Document or Remove |
```

---

### 9B: Compliance Scorecard

```markdown
# PHASE 9B: Compliance Scorecard

## Layer Results
| Layer | Name | Result | Notes |
|-------|------|--------|-------|
| L1 | Constitutional Compliance | PASS / PASS WITH EXCEPTIONS / FAIL | |
| L2 | Spec-to-Code Reconciliation | PASS / PASS WITH EXCEPTIONS / FAIL | |
| L3 | Architecture Trace | PASS / PASS WITH EXCEPTIONS / FAIL | |
| L4 | Static Code Analysis | PASS / PASS WITH EXCEPTIONS / FAIL | |
| L5 | Technical Debt | PASS / PASS WITH EXCEPTIONS / FAIL | |
| L6 | Complexity/Maintainability | PASS / PASS WITH EXCEPTIONS / FAIL | |
| L7 | Dead Code Detection | PASS / PASS WITH EXCEPTIONS / FAIL | |
| L8 | Data Model Hierarchy | PASS / PASS WITH EXCEPTIONS / FAIL | |
| L9 | Database Schema Audit | PASS / PASS WITH EXCEPTIONS / FAIL | |
| L10 | API Reconciliation | PASS / PASS WITH EXCEPTIONS / FAIL | |
| L11 | Type Synchronization | PASS / PASS WITH EXCEPTIONS / FAIL | |
| L12 | OWASP Security Audit | PASS / PASS WITH EXCEPTIONS / FAIL | |
| L13 | Automated Security Scanning | PASS / PASS WITH EXCEPTIONS / FAIL | |
| L14 | Test Coverage | PASS / PASS WITH EXCEPTIONS / FAIL | |
| L15 | CI/CD Validation | PASS / PASS WITH EXCEPTIONS / FAIL | |

## Category Scores
| Category | Items | Passed | Score | Weight | Weighted |
|----------|-------|--------|-------|--------|----------|
| Governance (L1-L3) | X | Y | Z% | 20% | W% |
| Code Quality (L4-L7) | X | Y | Z% | 20% | W% |
| Data Integrity (L8-L9) | X | Y | Z% | 15% | W% |
| Interface (L10-L11) | X | Y | Z% | 15% | W% |
| Security (L12-L13) | X | Y | Z% | 20% | W% |
| Quality Assurance (L14-L15) | X | Y | Z% | 10% | W% |
| **TOTAL** | **X** | **Y** | **Z%** | **100%** | **W%** |

## Pass/Fail Determination Rules
- All CRITICAL layers (L1, L2, L10, L12, L13, L15) must PASS
- HIGH layers: Maximum 2 with documented exceptions
- MEDIUM/LOW layers: May have documented exceptions

## Certification Determination
| Threshold | Requirement | Status |
|-----------|-------------|--------|
| Critical Findings | 0 | ✓ / ✗ |
| High Findings | ≤5 | ✓ / ✗ |
| CRITICAL layers | All PASS | ✓ / ✗ |
| Overall Score | ≥95% for GOLD | ✓ / ✗ |
| Coverage | 100% files | ✓ / ✗ |

**PRELIMINARY DETERMINATION: [GOLD / SILVER / BRONZE / NOT CERTIFIED]**
```

---

### 9C: Gap Analysis

```markdown
# PHASE 9C: Gap Analysis

## Findings Summary
| Severity | Count | Blocking? |
|----------|-------|-----------|
| CRITICAL | 0 | YES |
| HIGH | X | YES (if >5) |
| MEDIUM | Y | NO |
| LOW | Z | NO |

## Detailed Findings

### CRITICAL Severity
[None should exist for certification]

### HIGH Severity
| ID | Description | Location | Impact | Layer | Blocking? |
|----|-------------|----------|--------|-------|-----------|
| GAP-001 | Missing rate limiting on webhook endpoint | routes/webhooks.py | DoS vulnerability | L12 | YES |
| GAP-002 | Incomplete error handling in Kite reconnection | api/kite.py:156 | Session loss risk | L4 | YES |

### MEDIUM Severity
| ID | Description | Location | Impact | Layer | Blocking? |
|----|-------------|----------|--------|-------|-----------|
| GAP-003 | Cyclomatic complexity 12 in analysis_engine | services/analysis.py:89 | Maintainability | L6 | NO |

### LOW Severity
| ID | Description | Location | Impact | Layer | Blocking? |
|----|-------------|----------|--------|-------|-----------|
| GAP-010 | Improve logging verbosity | services/*.py | Observability | L4 | NO |
```

---

### 9D: Remediation Roadmap

```markdown
# PHASE 9D: Remediation Roadmap

## Priority 1: Must-Fix Before Staging (BLOCKING)
| ID | Finding | Effort | Owner | Deadline | Status |
|----|---------|--------|-------|----------|--------|
| GAP-001 | Add rate limiting to webhook endpoint | 2 hours | — | Before staging | PENDING |
| GAP-002 | Implement Kite reconnection error handling | 4 hours | — | Before staging | PENDING |

## Priority 2: Should-Fix Before Production
| ID | Finding | Effort | Owner | Deadline | Status |
|----|---------|--------|-------|----------|--------|
| GAP-003 | Refactor analysis_engine to reduce complexity | 3 hours | — | Sprint +1 | PENDING |

## Priority 3: Track for Future
| ID | Finding | Effort | Owner | Deadline | Status |
|----|---------|--------|-------|----------|--------|
| GAP-010 | Improve logging verbosity | 1 hour | — | Backlog | PENDING |

## Remediation Execution Order
1. GAP-001 (blocks security compliance)
2. GAP-002 (blocks reliability requirement)
3. Re-run Phase 8 validation on affected files
4. Update 9B Scorecard
5. Re-issue certification

## Post-Remediation Verification
| Gap ID | Remediation Commit | Re-Verification | Status |
|--------|-------------------|-----------------|--------|
| GAP-001 | [commit hash] | Phase 8 re-run | VERIFIED |
```

---

### 9E: Audit Certification

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                      │
│                        AUDIT CERTIFICATION STATEMENT                                 │
│                               CIA-SIE Trading System                                 │
│                                                                                      │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  Project: CIA-SIE Intelligent Extraction & Grading Engine                           │
│  Audit Date: [DATE]                                                                  │
│  Auditor: Cursor AI                                                                  │
│  Protocol: CIA-SIE Post-Production Validation Directive v2.0                        │
│  Protocol Alignment: IEEE 1028, ISO 25010, OWASP ASVS, NASA-STD-8739.8              │
│                                                                                      │
├─────────────────────────────────────────────────────────────────────────────────────┤
│  SCOPE                                                                               │
│  ─────                                                                               │
│  • Files Audited: [X]                                                                │
│  • Lines Verified: [Y]                                                               │
│  • Coverage: 100%                                                                    │
│  • Layers Validated: 15/15                                                           │
│  • Phases Completed: 9/9                                                             │
│                                                                                      │
├─────────────────────────────────────────────────────────────────────────────────────┤
│  FINDINGS SUMMARY                                                                    │
│  ────────────────                                                                    │
│  • Critical: [0]                                                                     │
│  • High: [X]                                                                         │
│  • Medium: [Y]                                                                       │
│  • Low: [Z]                                                                          │
│  • Total: [W]                                                                        │
│                                                                                      │
├─────────────────────────────────────────────────────────────────────────────────────┤
│  LAYER COMPLIANCE                                                                    │
│  ────────────────                                                                    │
│  • Governance (L1-L3): [X]%                                                          │
│  • Code Quality (L4-L7): [X]%                                                        │
│  • Data Integrity (L8-L9): [X]%                                                      │
│  • Interface (L10-L11): [X]%                                                         │
│  • Security (L12-L13): [X]%                                                          │
│  • Quality Assurance (L14-L15): [X]%                                                 │
│  • OVERALL: [X]%                                                                     │
│                                                                                      │
├─────────────────────────────────────────────────────────────────────────────────────┤
│  CERTIFICATION LEVELS                                                                │
│  ────────────────────                                                                │
│                                                                                      │
│    [ ] PLATINUM — Gold + External Audit Verified                                    │
│    [ ] GOLD — Full Compliance (0 critical, 0 high, ≥98% overall)                    │
│    [ ] SILVER — Minor Observations (0 critical, ≤3 high, ≥95% overall)              │
│    [ ] BRONZE — Conditional Pass (0 critical, ≤5 high, ≥90% overall)                │
│    [ ] NOT CERTIFIED — Remediation Required                                          │
│                                                                                      │
│  Status: [GOLD / SILVER / BRONZE / NOT CERTIFIED]                                   │
│                                                                                      │
├─────────────────────────────────────────────────────────────────────────────────────┤
│  EXCEPTIONS (if any)                                                                 │
│  ───────────────────                                                                 │
│  [List any accepted exceptions with rationale]                                       │
│                                                                                      │
├─────────────────────────────────────────────────────────────────────────────────────┤
│  STAGING AUTHORISATION                                                               │
│  ─────────────────────                                                               │
│  Based on the above findings, this codebase is:                                      │
│                                                                                      │
│    [ ] AUTHORISED for staging — No blocking issues                                   │
│    [ ] AUTHORISED for staging pending Priority 1 remediation                         │
│    [ ] NOT AUTHORISED — Remediation required before staging                          │
│                                                                                      │
├─────────────────────────────────────────────────────────────────────────────────────┤
│  CERTIFICATION STATEMENT                                                             │
│  ───────────────────────                                                             │
│  I certify that CIA-SIE has been validated according to the Gold Standard           │
│  Validation Protocol and meets the requirements for [CERTIFICATION LEVEL]            │
│  certification.                                                                      │
│                                                                                      │
│  Auditor: Cursor AI                                                                  │
│  Date: [DATE]                                                                        │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### L15: CI/CD Pipeline Validation (Complete in Phase 9)

**What to Validate:**
```
□ All CI jobs pass
□ Pipeline includes all required checks
□ Deployment process is documented
□ Rollback procedure exists
□ Secrets handled securely in CI
□ Branch protection enabled
```

**Required CI Checks:**
| Check | Purpose | Blocking? | Status |
|-------|---------|-----------|--------|
| Build | Code compiles/bundles | YES | |
| Lint | Code quality | YES | |
| Type Check | Type safety | YES | |
| Unit Tests | Logic verification | YES | |
| Integration Tests | System verification | YES | |
| Security Scan | Vulnerability detection | YES | |
| Coverage | Minimum coverage | OPTIONAL | |

**Validation Steps:**
1. Verify pipeline configuration exists
2. Trigger full pipeline (or verify recent green run)
3. Verify all required jobs present and passing
4. Verify branch protection settings
5. Verify deployment procedure documented
6. Verify rollback procedure documented

**Pass Criteria:**
```
✓ All CI jobs pass
✓ Pipeline includes required checks
✓ Branch protection enabled
✓ Deployment procedure documented
✓ Rollback procedure documented
✓ Secrets not exposed in logs
```

**Final Commit Message:** `Phase 9 Complete: Final Certification [Overall: X% compliance, Status: GOLD/SILVER/BRONZE/NOT CERTIFIED]`

---

# PART VIII: CONSTITUTIONAL FRAMEWORK

## 8.1 Constitutional Rule Categories

Every CIA-SIE constitutional rule must fit one of these categories:

| Category | Purpose | Examples |
|----------|---------|----------|
| **Category A: Behavioural Constraints** | What the system must NEVER do | No trading recommendations, no predictions |
| **Category B: Data Integrity Constraints** | What data states are prohibited | No storing plaintext credentials |
| **Category C: Output Constraints** | What the system must NEVER produce | No financial advice language |
| **Category D: Security Constraints** | What access patterns are prohibited | No unauthenticated API access |
| **Category E: Safety Constraints** | What operational states are prohibited | No unlimited order sizes |

## 8.2 Constitutional Rule Template

For each constitutional rule, document:

```markdown
## RULE [NUMBER]: [NAME]

**Category:** [A/B/C/D/E]

### PROHIBITION
- [Specific prohibited behaviour/pattern]
- [Additional prohibited elements]

### REQUIREMENT
- [What must exist instead]
- [Verification method]

### MANDATORY ARTEFACT (if applicable)
[Required disclaimer, warning, or output]

### DETECTION METHOD
- **Pattern search:** `grep -rn "[pattern]" src/`
- **Code analysis:** [static analysis rule]
- **Runtime verification:** [test or monitor]

### VERIFICATION EVIDENCE
- Search result: [command output or "0 matches"]
- Code reference: [file:line if enforcement exists]
- Test reference: [test file:function]

### VIOLATION SEVERITY
**CRITICAL** — Renders system non-compliant
```

## 8.3 Prohibited Patterns Registry

### Universal Security Anti-Patterns (Always Check)

| Pattern | Detection | Required Status |
|---------|-----------|-----------------|
| Hardcoded API keys | `grep -rn "api_key.*=.*['\"]" src/` | ABSENT |
| Hardcoded passwords | `grep -rn "password.*=.*['\"]" src/` | ABSENT |
| SQL string concatenation | `grep -rn "execute.*+.*" src/` | ABSENT |
| eval() usage | `grep -rn "eval(" src/` | ABSENT |
| exec() usage | `grep -rn "exec(" src/` | ABSENT |
| Disabled SSL verification | `grep -rn "verify.*=.*False" src/` | ABSENT |

### Domain-Specific Patterns (Define per project)

| Category | Pattern | Detection | Required Status |
|----------|---------|-----------|-----------------|
| A | [Define] | [grep command] | ABSENT |
| B | [Define] | [grep command] | ABSENT |
| C | [Define] | [grep command] | ABSENT |

---

# PART IX: AUTOMATED TOOLING

## 9.1 Recommended Tool Stack

### Code Quality Tools

| Purpose | Tool | Command | Language |
|---------|------|---------|----------|
| Linting | pylint | `pylint src/ --exit-zero` | Python |
| Linting | flake8 | `flake8 src/` | Python |
| Type Checking | mypy | `mypy src/ --strict` | Python |
| Linting | ESLint | `eslint . --ext ts,tsx` | JS/TS |
| Type Checking | TypeScript | `tsc --noEmit` | JS/TS |
| Complexity | radon | `radon cc src/ -a` | Python |
| Dead Code | vulture | `vulture src/` | Python |
| General Quality | SonarQube | `sonar-scanner` | Multi |

### Security Tools

| Purpose | Tool | Command |
|---------|------|---------|
| SAST | Semgrep | `semgrep --config auto src/` |
| Python Security | Bandit | `bandit -r src/` |
| SCA (Python) | pip-audit | `pip-audit` |
| SCA (Node) | npm audit | `npm audit --production` |
| Secrets | git-secrets | `git secrets --scan` |
| Secrets | truffleHog | `trufflehog git file://. --only-verified` |
| Dependencies | Dependabot | GitHub integration |

### Testing Tools

| Purpose | Tool | Command |
|---------|------|---------|
| Python Tests | pytest | `pytest --cov=src --cov-report=xml tests/` |
| JS/TS Tests | vitest/jest | `npm test -- --coverage` |
| E2E | Playwright | `npx playwright test` |
| API Testing | Postman/Newman | `newman run collection.json` |

### Documentation Tools

| Purpose | Tool | Command |
|---------|------|---------|
| OpenAPI Validation | openapi-spec-validator | `openapi-spec-validator spec.yaml` |
| Markdown Lint | markdownlint | `markdownlint '**/*.md'` |
| Link Checker | lychee | `lychee docs/` |

## 9.2 CI/CD Reference Implementation

```yaml
# .github/workflows/gold-standard-validation.yml
name: Gold Standard Validation

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  # L4: Static Code Analysis
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Python Lint
        run: |
          pip install pylint flake8
          pylint src/ --exit-zero
          flake8 src/
      - name: TypeScript Lint
        run: |
          npm ci
          npm run lint

  # L6: Type Check
  types:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Python Types
        run: |
          pip install mypy
          mypy src/ --ignore-missing-imports
      - name: TypeScript Types
        run: |
          npm ci
          npm run build

  # L13: Security Scan
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Python Security
        run: |
          pip install bandit pip-audit
          bandit -r src/
          pip-audit
      - name: Node Security
        run: npm audit --production
      - name: Secret Scan
        run: |
          pip install trufflehog
          trufflehog git file://. --only-verified --fail

  # L14: Test Coverage
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Backend Tests
        run: |
          pip install -r requirements.txt
          pytest --cov=src --cov-report=xml --cov-fail-under=80 tests/
      - name: Frontend Tests
        run: |
          npm ci
          npm test -- --coverage
      - name: Upload Coverage
        uses: codecov/codecov-action@v3

  # L15: Build Verification
  build:
    runs-on: ubuntu-latest
    needs: [lint, types, security, test]
    steps:
      - uses: actions/checkout@v4
      - name: Build Backend
        run: |
          pip install -r requirements.txt
          python -m compileall src/
      - name: Build Frontend
        run: |
          npm ci
          npm run build
```

---

# PART X: EVIDENCE AND VERIFICATION STANDARDS

## 10.1 Evidence Hierarchy

| Level | Evidence Type | Strength | Acceptable For |
|-------|--------------|----------|----------------|
| 1 | Assertion | Weak | **NEVER acceptable alone** |
| 2 | Reference | Moderate | Tier 1-2 audits only |
| 3 | Citation | Strong | Tier 3 audits |
| 4 | Verified Citation | Very Strong | Tier 4 audits |
| 5 | Formally Verified | Maximum | Tier 5 audits |

## 10.2 Citation Format Standards

| Format | Example | Use Case |
|--------|---------|----------|
| File reference | `handler.py` | General file reference |
| Path reference | `src/api/handler.py` | Specific file in hierarchy |
| Line reference | `handler.py:45` | Specific line |
| Range reference | `handler.py:45-67` | Line range |
| Function reference | `handler.py:process()` | Function citation |
| Class reference | `handler.py:Handler` | Class citation |
| Method reference | `handler.py:Handler.process()` | Method citation |
| Spec section | `SPEC.md#validation` | Specification section |

## 10.3 Evidence Sufficiency Matrix

| Claim Type | Minimum Evidence Required |
|------------|---------------------------|
| "File exists" | File path |
| "Function implemented" | Function reference + signature |
| "Logic correct" | Line range + explanation |
| "Compliant with spec" | Code reference + spec reference |
| "No violations" | Search methodology + null result evidence |
| "Test covers feature" | Test file:function + assertion description |

## 10.4 Evidence Quality Examples

**WEAK (REJECTED):**
> "The module handles errors appropriately"

**STRONG (REQUIRED):**
> "Error handling verified at `error_handler.py:45-67`; implements try-except for DatabaseError per `SPEC.md#error-handling`; tested by `test_errors.py:test_db_error` which asserts DatabaseError is caught and logged"

---

# PART XI: CERTIFICATION CRITERIA

## 11.1 Certification Levels

| Level | Requirements | Use Case |
|-------|--------------|----------|
| **PLATINUM** | GOLD + external audit verified | Compliance-critical, enterprise |
| **GOLD** | All layers PASS, 0 critical, 0 high, ≥98% overall | Production release, handoff |
| **SILVER** | All CRITICAL layers PASS, 0 critical, ≤3 high, ≥95% overall | Production with observations |
| **BRONZE** | All CRITICAL layers PASS, 0 critical, ≤5 high, ≥90% overall | Internal handoff, staging |
| **NOT CERTIFIED** | Any CRITICAL layer FAIL, OR >0 critical findings, OR >5 high findings | Remediation required |

## 11.2 Deliverable Quality Standards

| Criterion | Requirement |
|-----------|-------------|
| Completeness | Every in-scope artefact addressed |
| Evidence | Every finding cites specific file:line location |
| Objectivity | Binary determinations; no subjective language |
| Traceability | Cross-references to specifications included |
| Actionability | Findings enable remediation |

---

# PART XII: HANDOFF DELIVERABLES

## 12.1 Required Deliverables Checklist

```
DOCUMENTATION
□ README.md with quick start instructions
□ Architecture overview document
□ API documentation (OpenAPI spec or equivalent)
□ Data model documentation
□ Deployment guide
□ Configuration reference
□ Troubleshooting guide
□ KNOWN_ISSUES.md

CODE ARTIFACTS
□ Clean, passing CI/CD pipeline
□ All tests passing
□ No uncommitted changes
□ Tagged release (vX.Y.Z)
□ CHANGELOG.md updated

VALIDATION ARTIFACTS
□ All 13 audit reports (Phases 1-9)
□ Certification report (Phase 9E)
□ Security scan reports
□ Coverage reports
□ Lint/analysis reports

ACCESS & CREDENTIALS
□ Repository access documented
□ CI/CD access documented
□ Deployment credentials documented
□ Third-party service credentials documented
```

## 12.2 Handoff Package Directory Structure

```
project/
├── README.md                           # Entry point
├── CHANGELOG.md                        # Version history
├── KNOWN_ISSUES.md                     # Documented known issues
├── docs/
│   ├── architecture/                   # Architecture documentation
│   │   ├── ARCHITECTURE.md
│   │   └── diagrams/
│   ├── api/                            # API documentation
│   │   └── openapi.yaml
│   ├── data-model/                     # Data model documentation
│   └── deployment/                     # Deployment guides
├── handoff/
│   ├── PHASE_1_REPOSITORY_STRUCTURE_AUDIT.md
│   ├── PHASE_2_BACKEND_CODE_AUDIT.md
│   ├── PHASE_3_FRONTEND_CODE_AUDIT.md
│   ├── PHASE_4_DATA_LAYER_AUDIT.md
│   ├── PHASE_5_API_SPECIFICATION_AUDIT.md
│   ├── PHASE_6_TEST_COVERAGE_AUDIT.md
│   ├── PHASE_7_DOCUMENTATION_SYNC_AUDIT.md
│   ├── PHASE_8_SECURITY_CONSTITUTIONAL_AUDIT.md
│   ├── PHASE_9A_REQUIREMENTS_TRACEABILITY_MATRIX.md
│   ├── PHASE_9B_COMPLIANCE_SCORECARD.md
│   ├── PHASE_9C_GAP_ANALYSIS.md
│   ├── PHASE_9D_REMEDIATION_ROADMAP.md
│   ├── PHASE_9E_AUDIT_CERTIFICATION.md
│   ├── VALIDATION_EXECUTION_LOG.md
│   └── reports/
│       ├── coverage/                   # Test coverage reports
│       ├── security/                   # Security scan reports
│       └── quality/                    # Code quality reports
├── src/                                # Source code
└── tests/                              # Test files
```

## 12.3 Handoff Validation KPIs

These KPIs indicate handoff quality. Cursor should document known issues to achieve these targets:

| KPI | Target | Measurement |
|-----|--------|-------------|
| Environment Setup Time | < 4 hours | Time from clone to running |
| First PR Time | < 1 week | Time to first merged PR |
| Support Requests | < 5 in first month | Questions to original team |
| Critical Bug Discovery | **0** | Bugs found not in KNOWN_ISSUES.md |

---

# PART XIII: QUICK REFERENCE CHECKLISTS

## 13.1 Pre-Validation Quick Check

```
□ Git status clean (no uncommitted changes)
□ Main branch up to date
□ All dependencies installable
□ Application starts without errors
□ Database migrations apply
□ README.md exists and current
□ Specification documents accessible
```

## 13.2 Pre-Staging Quick Check

```
□ All 9 phases completed with committed reports
□ All CI jobs green
□ Main branch clean
□ Version tagged (vX.Y.Z)
□ CHANGELOG.md updated
□ No critical security alerts
□ No failing tests
□ Coverage meets thresholds (>80% overall, >95% critical)
□ Documentation synchronised
□ Certification report generated
□ Priority 1 remediation complete
□ KNOWN_ISSUES.md complete
```

## 13.3 Security Quick Check

```
□ No secrets in code or git history
□ Dependencies updated (no critical CVEs)
□ Security headers configured
□ Authentication working
□ Authorization enforced
□ Input validation present
□ Output encoding present
□ HTTPS enforced (production config)
□ Logging configured (no sensitive data logged)
□ Error messages generic (no stack traces to client)
□ Rate limiting implemented
□ CORS properly configured
```

## 13.4 Code Quality Quick Check

```
□ Linter passes (zero errors)
□ Type checker passes (strict mode)
□ No TODO/FIXME in critical paths
□ No commented-out code blocks > 10 lines
□ Functions < 50 lines
□ Files < 500 lines
□ Cyclomatic complexity < 10 (per function)
□ No code duplication > 10 lines
□ All public APIs documented
□ Consistent naming conventions
□ Technical Debt Ratio < 5%
```

## 13.5 Documentation Quick Check

```
□ README.md exists and current
□ Architecture documented
□ API endpoints documented
□ Data model documented
□ Deployment documented
□ Configuration documented
□ Troubleshooting guide exists
□ Known issues documented
□ Environment setup documented
```

---

# PART XIV: AUTONOMOUS EXECUTION MANDATE

## 14.1 Initiation Trigger

When this document is provided with the command to execute, you shall:

1. Acknowledge: `"GOLD STANDARD AUDIT INITIATED — CIA-SIE POST-PRODUCTION VALIDATION"`
2. Verify Pre-Validation Requirements (Part II)
3. Execute all 9 phases sequentially
4. Commit each phase report before proceeding
5. NOT pause for human intervention between phases
6. Upon completion announce: `"AUDIT CYCLE COMPLETE — 13 REPORTS GENERATED"`

## 14.2 Quality Gate

| Criterion | Requirement |
|-----------|-------------|
| Pre-Validation | All Part II requirements met |
| Coverage | 100% of files you created/modified |
| Evidence | Every finding cites file:line |
| Completeness | Every function/class documented |
| Layers | All 15 layers validated |
| Phases | All 9 phases + sub-phases complete |
| Constitutional | Every rule verified |
| Reports | 13 reports generated |

## 14.3 Abort Conditions

Autonomous execution may ONLY abort for:
1. Pre-Validation Requirements failure (Part II)
2. Repository access failure
3. Critical system error
4. Discovery of active security breach (immediate escalation required)

## 14.4 Post-Audit Actions

Upon completion:
1. Generate VALIDATION_EXECUTION_LOG.md summarising all phases
2. Ensure all 13 reports are committed
3. If NOT CERTIFIED: Clearly list blocking issues
4. If CERTIFIED: Confirm staging authorisation status

---

# APPENDICES

## Appendix A: Validation Execution Log Template

```markdown
# VALIDATION EXECUTION LOG

**Project:** CIA-SIE
**Date:** [DATE]
**Validator:** Cursor AI
**Protocol Version:** 2.0.0

## Pre-Validation Check
| Requirement | Status |
|-------------|--------|
| Repository clean | ✓ / ✗ |
| Dependencies installable | ✓ / ✗ |
| Application starts | ✓ / ✗ |
| Migrations apply | ✓ / ✗ |
| Documentation exists | ✓ / ✗ |

## Phase Execution

### Phase 1: Repository Structure
- Start Time: _______
- End Time: _______
- Duration: _______
- Result: PASS / FAIL
- Files Enumerated: _______
- Report: PHASE_1_REPOSITORY_STRUCTURE_AUDIT.md

### Phase 2: Backend Code
- Start Time: _______
- End Time: _______
- Duration: _______
- Result: PASS / FAIL
- Files Audited: _______
- Lines Verified: _______
- Issues Found: _______
- Report: PHASE_2_BACKEND_CODE_AUDIT.md

[Continue for all 9 phases...]

## Summary

| Metric | Value |
|--------|-------|
| Total Phases | 9 |
| Phases Passed | ___ |
| Phases Failed | ___ |
| Total Layers Validated | 15 |
| Total Files Audited | ___ |
| Total Lines Verified | ___ |
| Total Time | ___ hours |
| Reports Generated | 13 |

## Issues Summary

| Severity | Count |
|----------|-------|
| Critical | ___ |
| High | ___ |
| Medium | ___ |
| Low | ___ |

## Certification Result

**Status:** GOLD / SILVER / BRONZE / NOT CERTIFIED
**Staging Authorisation:** AUTHORISED / NOT AUTHORISED
**Blocking Issues:** [list if any]

## Sign-Off

Validator: Cursor AI
Date: [DATE]
Protocol: CIA-SIE Post-Production Validation Directive v2.0
```

## Appendix B: CIA-SIE Constitutional Rules Template

```markdown
# CIA-SIE CONSTITUTIONAL RULES

## CR-001: [Rule Name]
**Category:** [A/B/C/D/E]

### PROHIBITION
- [Specific prohibited behaviour]

### REQUIREMENT
- [What must exist instead]

### DETECTION METHOD
- Pattern: `grep -rn "[pattern]" src/`
- Test: test_constitutional.py:test_[rule]

### VIOLATION SEVERITY
CRITICAL

---

## CR-002: [Next Rule]
[...]
```

## Appendix C: Sources & References

### Industry Standards
- [OWASP Application Security Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/)
- [OWASP Top 10 Web Application Security Risks](https://owasp.org/www-project-top-ten/)
- [WebAIM WCAG 2.1 Checklist](https://webaim.org/standards/wcag/checklist)

### Software Engineering Best Practices
- [Simple Thread: Handing Off a Software Project](https://www.simplethread.com/handing-off-a-software-project/)
- [Praxent: Software Handover Documentation](https://praxent.com/blog/software-handover-documentation-checklist)
- [TechTarget: Production Readiness Checklist](https://www.techtarget.com/searchsoftwarequality/tip/A-production-readiness-checklist-for-software-development)

### Code Quality & Auditing
- [CodeAnt: Secure Code Audit Best Practices](https://www.codeant.ai/blogs/source-code-audit-checklist-best-practices-for-secure-code)
- [Code Climate: Technical Debt Assessment](https://codeclimate.com/blog/10-point-technical-debt-assessment)
- [SonarSource: Measuring Technical Debt](https://www.sonarsource.com/learn/measuring-and-identifying-code-level-technical-debt-a-practical-guide/)

### CI/CD & DevOps
- [Informatix: Ultimate CI/CD Checklist](https://informatix.systems/techops-and-optimization/the-ultimate-checklist-for-ci-cd-pipelines/)
- [StepSecurity: GitHub Actions Security Best Practices](https://www.stepsecurity.io/blog/github-actions-security-best-practices)

### Testing Standards
- [UK Home Office: Test Pyramid Standards](https://engineering.homeoffice.gov.uk/standards/test-pyramid/)
- [CircleCI: Testing Pyramid for Agile Teams](https://circleci.com/blog/testing-pyramid/)

### Regulatory Alignment
- IEEE 1028-2008: Software Reviews and Audits
- ISO/IEC 25010:2011: Software Product Quality
- ISO/IEC 27001: Information Security Management
- NASA-STD-8739.8: Software Assurance Standard

---

# DOCUMENT METADATA

```yaml
document_id: CIA-SIE-PPVD-002
version: 2.0.0
status: FINAL COMPREHENSIVE
created: [TIMESTAMP]
word_count: ~9,000
synthesized_from:
  - GOLD_STANDARD_VALIDATION_PROTOCOL_v2_0_GENERIC.md (5,174 words)
  - UNIVERSAL_CODE_AUDIT_AND_APPLICATION_DEVELOPMENT_FRAMEWORK_v2_0_GENERIC.md (4,862 words)
total_source_words: 10,036
omissions_reviewed: 27
re_inclusions: 25
compliance_alignment:
  - IEEE 1028-2008 (Software Reviews & Audits)
  - ISO/IEC 25010:2011 (Software Product Quality)
  - ISO/IEC 27001 (Information Security)
  - OWASP ASVS v4.0 (Application Security)
  - NASA-STD-8739.8 (Software Assurance)
  - SOX Section 404 (Internal Controls)
  - PCI-DSS (Payment Card Industry)
applicability: CIA-SIE Trading System — All Cursor-produced code
classification: Mandatory Execution Protocol
```

---

**END OF DIRECTIVE**

*CIA-SIE Post-Production Validation Directive v2.0 — FINAL COMPREHENSIVE*
*Synthesized from Gold Standard Validation Protocol & Universal Code Audit Framework*
*For Cursor AI execution prior to staging*
