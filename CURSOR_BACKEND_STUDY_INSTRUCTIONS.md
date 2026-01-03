# CIA-SIE Backend Study & Flowchart Generation

## CRITICAL INSTRUCTIONS FOR CURSOR

---

## MANDATORY ISOLATION PROTOCOL

### YOU MUST READ THIS SECTION COMPLETELY BEFORE PROCEEDING

**IMPORTANT**: This is a **CLEAN ROOM** exercise. You are to approach this codebase as if you have **NEVER** seen it before. Any prior knowledge, assumptions, or mental models about this application must be discarded.

### FORBIDDEN DIRECTORIES - DO NOT READ OR REFERENCE

```
❌ /frontend/                    - DO NOT ACCESS
❌ /frontend/src/               - DO NOT ACCESS
❌ /frontend/public/            - DO NOT ACCESS
❌ /app.html                    - DO NOT ACCESS
❌ /GUI_Interactive_Demonstration.html - DO NOT ACCESS
❌ Any file with .jsx, .tsx extension - DO NOT ACCESS
❌ Any React, Vue, Angular code - DO NOT ACCESS
```

### PERMITTED DIRECTORIES - STUDY ONLY THESE

```
✅ /src/cia_sie/                - PRIMARY FOCUS
✅ /tests/                      - Secondary reference
✅ /docs/specifications/        - Requirements reference (if exists)
✅ /alembic/                    - Database migrations
✅ /.env.example                - Environment configuration
✅ /pyproject.toml              - Project dependencies
```

---

## YOUR MISSION

You are a **Senior Software Architect** tasked with reverse-engineering a production backend system to create comprehensive architecture documentation. You have been given access to a **fully audited, production-ready backend** with **834 passing tests** and **Gold Standard Certification**.

Your deliverable: **Complete technical flowcharts** that document every aspect of this system with such precision that a new development team could build a frontend purely from your documentation.

---

## PHASE 1: SYSTEMATIC DISCOVERY

### Step 1.1: Project Structure Analysis

First, map the complete directory structure of the backend. Execute:

```
Focus ONLY on /src/cia_sie/ directory
```

Document every folder and its apparent purpose based on naming conventions. DO NOT assume - discover.

**Required Output Format:**
```
/src/cia_sie/
├── api/           → [Your discovery: What does this contain?]
├── core/          → [Your discovery: What does this contain?]
├── services/      → [Your discovery: What does this contain?]
├── repositories/  → [Your discovery: What does this contain?]
├── platforms/     → [Your discovery: What does this contain?]
└── [other]/       → [Your discovery]
```

### Step 1.2: Entry Point Identification

Locate and read:
1. The main application entry point (likely `main.py` or `app.py`)
2. The FastAPI application instantiation
3. Router registrations

**Required Output:**
- Exact file path of entry point: `________`
- Line number where FastAPI app is created: `________`
- List of all registered routers with their file paths

### Step 1.3: Configuration Discovery

Locate and analyze the configuration system:
1. Find `config.py` or equivalent
2. Document ALL configuration parameters
3. Identify external service integrations

**Required Output:**
```
Configuration File: [path]

Environment Variables Discovered:
- [VAR_NAME]: Purpose: [discovered purpose]
- [VAR_NAME]: Purpose: [discovered purpose]
...

External Integrations Identified:
- [Service Name]: Connection method: [how it connects]
...
```

---

## PHASE 2: DOMAIN MODEL ANALYSIS

### Step 2.1: Database Models

Locate all SQLAlchemy models and document:

1. **File Location**: Where are models defined?
2. **Entity Inventory**: List every model class
3. **Relationship Mapping**: How do entities relate?

**Required Output Format:**
```
MODEL: [ModelName]
  File: [exact path]
  Table: [database table name]
  Primary Key: [field name and type]
  Foreign Keys: [list with referenced tables]
  Fields:
    - [field_name]: [type] - [your interpretation of purpose]
    - [field_name]: [type] - [your interpretation of purpose]
  Relationships:
    - [relationship_name] → [related model] (one-to-many/many-to-one/etc)
```

### Step 2.2: Pydantic Schemas

Locate all Pydantic schemas and document:

1. **Request Schemas**: What data can be sent TO the API?
2. **Response Schemas**: What data comes FROM the API?
3. **Validation Rules**: What constraints exist?

**Required Output Format:**
```
SCHEMA: [SchemaName]
  File: [exact path]
  Purpose: Create/Update/Response/Internal
  Fields:
    - [field]: [type] - Required/Optional - Constraints: [if any]
```

### Step 2.3: Entity Hierarchy Discovery

Based on your model analysis, determine:
- What is the root entity?
- What is the containment hierarchy?
- What is the signal flow direction?

**CRITICAL**: You must DISCOVER this hierarchy by reading the actual foreign key relationships in the code. Do not assume.

---

## PHASE 3: API LAYER ANALYSIS

### Step 3.1: Router Inventory

For EACH router file in `/api/routes/`:

**Required Output Format:**
```
ROUTER: [filename]
  Prefix: [URL prefix]
  Tags: [API tags]

  ENDPOINTS:

  [1] [HTTP_METHOD] [path]
      Function: [function_name]
      Line Number: [line]
      Request Body: [Schema or None]
      Response Model: [Schema]
      Query Parameters: [list or None]
      Path Parameters: [list or None]
      Dependencies: [injected dependencies]
      Purpose: [your analysis of what this does]

  [2] [HTTP_METHOD] [path]
      ...
```

### Step 3.2: Dependency Injection Analysis

Locate `dependencies.py` and document:
- What dependencies are available for injection?
- How is the database session managed?
- Are there any authentication/authorization dependencies?

### Step 3.3: Webhook Endpoint Deep Dive

If a webhook endpoint exists:
1. What is the exact URL path?
2. What payload structure does it expect?
3. What validation occurs?
4. What happens after validation succeeds?

---

## PHASE 4: SERVICE LAYER ANALYSIS

### Step 4.1: Service Inventory

For EACH service in `/services/`:

**Required Output Format:**
```
SERVICE: [ServiceName]
  File: [exact path]
  Dependencies: [what it imports/requires]

  METHODS:

  [1] [method_name]
      Line: [line number]
      Parameters: [with types]
      Returns: [return type]
      Calls: [other services/repos it calls]
      Purpose: [your analysis]

  [2] [method_name]
      ...
```

### Step 4.2: Exposure Engine Analysis (CRITICAL)

Locate the component responsible for detecting contradictions/confirmations:

1. What file contains this logic?
2. What is the algorithm for detecting contradictions?
3. What is the algorithm for detecting confirmations?
4. What triggers this analysis?
5. What are the outputs?

**Required Output:**
```
EXPOSURE ENGINE ANALYSIS

Location: [exact file path]
Trigger: [what causes this to run]

CONTRADICTION DETECTION:
  Algorithm: [step-by-step logic you discovered]
  Inputs: [what data it needs]
  Outputs: [what it produces]

CONFIRMATION DETECTION:
  Algorithm: [step-by-step logic you discovered]
  Inputs: [what data it needs]
  Outputs: [what it produces]
```

### Step 4.3: Narrative Generation Analysis (CRITICAL)

Locate the AI narrative generation component:

1. What file contains this logic?
2. How does it interface with Claude AI?
3. What context does it build?
4. What filtering/validation occurs on the output?

**Required Output:**
```
NARRATIVE GENERATOR ANALYSIS

Location: [exact file path]
AI Integration: [how it connects to Claude]

PROMPT BUILDING:
  What data is included: [list]
  How context is structured: [describe]

OUTPUT FILTERING:
  What checks are performed: [list each check]
  What happens on violation: [describe]
```

---

## PHASE 5: CONSTITUTIONAL RULES DISCOVERY

### Step 5.1: Locate Constitutional Implementation

Search the codebase for:
- Any file named `constitutional*.py`
- Any references to "rule", "filter", "compliance"
- Any prohibited word lists
- Any disclaimer text

### Step 5.2: Document Each Rule

For EACH rule discovered:

**Required Output Format:**
```
RULE [N]: [Name you assign based on purpose]

Location: [file:line]

PROHIBITED PATTERNS:
  - [pattern 1]: Why prohibited: [your analysis]
  - [pattern 2]: Why prohibited: [your analysis]

ENFORCEMENT MECHANISM:
  - Detection: [how violations are found]
  - Correction: [what happens when found]

EVIDENCE FROM CODE:
  [paste relevant code snippet, max 10 lines]
```

---

## PHASE 6: PLATFORM INTEGRATION ANALYSIS

### Step 6.1: External Platform Discovery

Locate `/platforms/` directory and document each integration:

**Required Output Format:**
```
PLATFORM: [Name]
  File: [exact path]
  Purpose: [what external service]

  AUTHENTICATION:
    Method: [OAuth/API Key/etc]
    Flow: [step by step]

  OPERATIONS:
    [1] [operation_name]: [what it does]
    [2] [operation_name]: [what it does]

  ERROR HANDLING:
    [describe how errors are handled]
```

---

## PHASE 7: REPOSITORY LAYER ANALYSIS

### Step 7.1: Repository Pattern Documentation

For EACH repository in `/repositories/`:

**Required Output Format:**
```
REPOSITORY: [Name]
  File: [exact path]
  Entity: [what model it manages]

  METHODS:
    [1] [method_name](params) → [return]
        SQL/ORM operation: [describe]

    [2] [method_name](params) → [return]
        SQL/ORM operation: [describe]
```

---

## PHASE 8: TEST ANALYSIS (VERIFICATION)

### Step 8.1: Test Coverage Review

Review the `/tests/` directory to:
1. Confirm your understanding of each component
2. Discover edge cases you may have missed
3. Understand expected behaviors

**Required Output:**
```
TEST INSIGHTS:

Component: [name]
  Test File: [path]
  Key Test Cases:
    - [test name]: Tests that [behavior]
    - [test name]: Tests that [behavior]
  Edge Cases Discovered:
    - [description]
```

---

## PHASE 9: FLOWCHART GENERATION

Now that you have completed systematic discovery, create the following flowcharts:

### Required Flowcharts (Mermaid Format)

1. **System Architecture Diagram**
   - All layers from external to database
   - All component interactions
   - All external integrations

2. **Data Model ER Diagram**
   - All entities with fields
   - All relationships with cardinality
   - Primary and foreign keys

3. **Signal Ingestion Sequence Diagram**
   - From webhook receipt to database storage
   - Include validation steps
   - Include exposure analysis trigger

4. **Contradiction Detection Flowchart**
   - Decision logic
   - All possible outcomes
   - Alert generation

5. **AI Narrative Generation Sequence**
   - Context building
   - API call
   - Constitutional filtering
   - Response delivery

6. **Platform Integration Sequence** (for each platform)
   - Authentication flow
   - Data import flow
   - Error handling

7. **Constitutional Rules Decision Tree**
   - Each rule as a decision node
   - Violation paths
   - Correction paths

8. **API Endpoint Map**
   - All endpoints organized by resource
   - HTTP methods
   - Request/response types

9. **Complete User Journey State Diagram**
   - From initial setup
   - Through active monitoring
   - To analysis consumption

### Flowchart Requirements

Each flowchart must:
1. Use Mermaid syntax
2. Include relevant color coding
3. Reference actual file paths where logic exists
4. Be accurate to the code (not assumptions)

---

## PHASE 10: VERIFICATION CHECKLIST

Before declaring your analysis complete, verify:

### Backend Completeness Checklist

- [ ] All SQLAlchemy models documented
- [ ] All Pydantic schemas documented
- [ ] All API endpoints documented with exact paths
- [ ] All services documented with method signatures
- [ ] All repositories documented
- [ ] Exposure engine algorithm fully understood
- [ ] Narrative generation pipeline fully understood
- [ ] Constitutional rules fully documented
- [ ] Platform integrations fully documented
- [ ] Webhook payload structure documented

### Flowchart Accuracy Checklist

- [ ] Entity relationships match foreign keys in models
- [ ] API endpoints match router registrations
- [ ] Service calls match actual method invocations
- [ ] Constitutional rules match implementation
- [ ] Sequence diagrams reflect actual code flow

---

## OUTPUT STRUCTURE

Deliver your findings in this structure:

```
/docs/cursor_analysis/
├── 1_project_structure.md
├── 2_domain_models.md
├── 3_api_endpoints.md
├── 4_services.md
├── 5_repositories.md
├── 6_exposure_engine.md
├── 7_narrative_generator.md
├── 8_constitutional_rules.md
├── 9_platform_integrations.md
├── 10_test_insights.md
└── flowcharts/
    ├── system_architecture.md
    ├── data_model_er.md
    ├── signal_flow.md
    ├── contradiction_detection.md
    ├── narrative_generation.md
    ├── platform_integration.md
    ├── constitutional_rules.md
    ├── api_map.md
    └── user_journey.md
```

---

## IMPORTANT REMINDERS

1. **DO NOT GUESS** - If uncertain, state "REQUIRES CLARIFICATION: [question]"

2. **CITE EVERYTHING** - Every claim must include `file_path:line_number`

3. **DISCOVER, DON'T ASSUME** - Read the actual code, don't rely on naming conventions alone

4. **IGNORE FRONTEND COMPLETELY** - If you accidentally encounter frontend code, immediately stop and return to backend

5. **NO SHORTCUTS** - Complete every phase in order. Do not skip to flowchart generation.

6. **QUALITY OVER SPEED** - Accuracy is paramount. Take time to understand deeply.

---

## VERIFICATION GATE

After completing all phases, the user will review your flowcharts against their expectations. Only after verification passes will you proceed to frontend development.

**This isolation protocol ensures your frontend work will be built on a solid, accurate understanding of the backend architecture.**

---

*End of Instructions*
