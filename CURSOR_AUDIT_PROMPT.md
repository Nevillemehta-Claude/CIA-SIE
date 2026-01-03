# CURSOR AUDIT PROMPT

**Copy and paste the text below into Cursor Composer to start the forensic audit.**

---

## PROMPT TO COPY INTO CURSOR:

```
Read and execute the document: POST_PRODUCTION_VALIDATION_DIRECTIVE.md

This is the CIA-SIE Post-Production Validation Directive v2.0 (FINAL COMPREHENSIVE).

Execute this directive EXACTLY as specified:

1. Acknowledge: "GOLD STANDARD AUDIT INITIATED — CIA-SIE POST-PRODUCTION VALIDATION"

2. Verify all Pre-Validation Requirements (Part II)

3. Execute all 9 phases sequentially:
   - Phase 1: Repository Structure Audit
   - Phase 2: Backend Code Audit (48 Python files)
   - Phase 3: Frontend Code Audit (45 TypeScript files)
   - Phase 4: Data Layer Audit
   - Phase 5: API Specification Audit
   - Phase 6: Test Coverage Audit (38 test files)
   - Phase 7: Documentation Sync Audit
   - Phase 8: Security & Constitutional Compliance Audit
   - Phase 9: Final Certification (9A-9E)

4. Create all 13 reports in the handoff/ directory:
   - PHASE_1_REPOSITORY_STRUCTURE_AUDIT.md
   - PHASE_2_BACKEND_CODE_AUDIT.md
   - PHASE_3_FRONTEND_CODE_AUDIT.md
   - PHASE_4_DATA_LAYER_AUDIT.md
   - PHASE_5_API_SPECIFICATION_AUDIT.md
   - PHASE_6_TEST_COVERAGE_AUDIT.md
   - PHASE_7_DOCUMENTATION_SYNC_AUDIT.md
   - PHASE_8_SECURITY_CONSTITUTIONAL_AUDIT.md
   - PHASE_9A_REQUIREMENTS_TRACEABILITY_MATRIX.md
   - PHASE_9B_COMPLIANCE_SCORECARD.md
   - PHASE_9C_GAP_ANALYSIS.md
   - PHASE_9D_REMEDIATION_ROADMAP.md
   - PHASE_9E_AUDIT_CERTIFICATION.md

5. Also create: VALIDATION_EXECUTION_LOG.md

6. Commit each phase report before proceeding to the next phase.

7. Do NOT pause for human intervention between phases.

8. Upon completion announce: "AUDIT CYCLE COMPLETE — 13 REPORTS GENERATED"

IMPORTANT - FILES TO AUDIT (152+ total):
- Backend: 48 Python files in /src/cia_sie/
- Frontend: 45 TypeScript files in /frontend/src/
- Tests: 38 Python files in /tests/
- Database: 2 migration files in /alembic/versions/
- Documentation: 19 markdown files

CONSTITUTIONAL RULES TO VERIFY (CIA-SIE specific):
- CR-001: No recommendations (should, suggest, recommend, consider)
- CR-002: Contradictions exposed, NEVER resolved (equal visual weight)
- CR-003: AI disclaimers present on ALL AI output

BEGIN AUTONOMOUS EXECUTION NOW.
```

---

## HOW TO USE

1. Open **Cursor** with the CIA-SIE project
2. Press **Cmd + I** to open Composer
3. Copy everything between the ``` marks above
4. Paste into Cursor
5. Press **Enter**
6. Let Cursor work autonomously (may take 30-60 minutes)

---

## WHAT CURSOR WILL PRODUCE

After completion, you will have:

```
CIA-SIE/
└── handoff/
    ├── PHASE_1_REPOSITORY_STRUCTURE_AUDIT.md
    ├── PHASE_2_BACKEND_CODE_AUDIT.md
    ├── PHASE_3_FRONTEND_CODE_AUDIT.md
    ├── PHASE_4_DATA_LAYER_AUDIT.md
    ├── PHASE_5_API_SPECIFICATION_AUDIT.md
    ├── PHASE_6_TEST_COVERAGE_AUDIT.md
    ├── PHASE_7_DOCUMENTATION_SYNC_AUDIT.md
    ├── PHASE_8_SECURITY_CONSTITUTIONAL_AUDIT.md
    ├── PHASE_9A_REQUIREMENTS_TRACEABILITY_MATRIX.md
    ├── PHASE_9B_COMPLIANCE_SCORECARD.md
    ├── PHASE_9C_GAP_ANALYSIS.md
    ├── PHASE_9D_REMEDIATION_ROADMAP.md
    ├── PHASE_9E_AUDIT_CERTIFICATION.md
    └── VALIDATION_EXECUTION_LOG.md
```

**Certification Levels:**
- GOLD — Full Compliance (0 critical, 0 high, ≥98% overall)
- SILVER — Minor Observations (0 critical, ≤3 high, ≥95% overall)
- BRONZE — Conditional Pass (0 critical, ≤5 high, ≥90% overall)
- NOT CERTIFIED — Remediation Required
