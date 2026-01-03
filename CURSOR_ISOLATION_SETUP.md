# Cursor Isolation Setup Guide

## How to Ensure Frontend Code is Completely Ignored

---

## METHOD 1: .cursorignore File (Recommended)

Create a file that tells Cursor to completely ignore certain directories:

### Step 1: Create .cursorignore

Create a file named `.cursorignore` in the project root with:

```
# Ignore all frontend code
frontend/
frontend/**
/frontend/**/*

# Ignore standalone HTML files
app.html
GUI_Interactive_Demonstration.html
CIA-SIE_APPLICATION_FLOWCHART.html

# Ignore any JSX/TSX files
**/*.jsx
**/*.tsx

# Ignore node_modules (frontend deps)
node_modules/
**/node_modules/**

# Ignore frontend build artifacts
dist/
build/
.next/
```

---

## METHOD 2: Separate Workspace

Create a workspace that only includes backend:

### Step 1: Create Backend-Only Folder

```bash
# Create a symlink workspace with only backend
mkdir ~/CIA-SIE-Backend-Only
ln -s /Users/nevillemehta/Downloads/CIA-SIE/src ~/CIA-SIE-Backend-Only/src
ln -s /Users/nevillemehta/Downloads/CIA-SIE/tests ~/CIA-SIE-Backend-Only/tests
ln -s /Users/nevillemehta/Downloads/CIA-SIE/alembic ~/CIA-SIE-Backend-Only/alembic
ln -s /Users/nevillemehta/Downloads/CIA-SIE/pyproject.toml ~/CIA-SIE-Backend-Only/pyproject.toml
ln -s /Users/nevillemehta/Downloads/CIA-SIE/.env ~/CIA-SIE-Backend-Only/.env

# Copy the instruction file
cp /Users/nevillemehta/Downloads/CIA-SIE/CURSOR_BACKEND_STUDY_INSTRUCTIONS.md ~/CIA-SIE-Backend-Only/
```

### Step 2: Open Only This Workspace in Cursor

```bash
# Open the backend-only workspace
cursor ~/CIA-SIE-Backend-Only
```

---

## METHOD 3: Temporary Rename (Most Foolproof)

Temporarily make frontend inaccessible:

```bash
# Rename frontend folder
mv /Users/nevillemehta/Downloads/CIA-SIE/frontend /Users/nevillemehta/Downloads/CIA-SIE/_frontend_HIDDEN

# Rename HTML files
mv /Users/nevillemehta/Downloads/CIA-SIE/app.html /Users/nevillemehta/Downloads/CIA-SIE/_app_HIDDEN.html

# After Cursor completes analysis, restore:
mv /Users/nevillemehta/Downloads/CIA-SIE/_frontend_HIDDEN /Users/nevillemehta/Downloads/CIA-SIE/frontend
mv /Users/nevillemehta/Downloads/CIA-SIE/_app_HIDDEN.html /Users/nevillemehta/Downloads/CIA-SIE/app.html
```

---

## METHOD 4: New Cursor Session with Explicit Context

### Step 1: Clear Cursor Chat History

1. Open Cursor
2. Create a **NEW** chat session (don't continue existing)
3. Use `Cmd+K` → "New Chat"

### Step 2: First Message Must Be the Isolation Protocol

Copy this EXACTLY as your first message:

```
I am starting a CLEAN ROOM analysis. I have NEVER seen this codebase before.

FORBIDDEN: I will NOT access, read, or reference:
- /frontend/ directory
- Any .jsx or .tsx files
- app.html
- Any React/Vue/Angular code

PERMITTED: I will ONLY analyze:
- /src/cia_sie/ (backend Python code)
- /tests/ (backend tests)
- /alembic/ (database migrations)

Please read the file CURSOR_BACKEND_STUDY_INSTRUCTIONS.md and follow it exactly.
Begin with Phase 1: Systematic Discovery.
```

---

## VERIFICATION THAT ISOLATION IS WORKING

After Cursor starts working, check that it:

1. **NEVER mentions** React, components, useState, useEffect
2. **NEVER references** files ending in .jsx, .tsx, .css
3. **ONLY cites** Python files from /src/cia_sie/
4. **Discovers** the architecture (doesn't recall it)

### Red Flags (Isolation Breach)

If Cursor says any of these, isolation has failed:
- "As I built earlier..."
- "In the React component..."
- "The frontend handles..."
- "I remember implementing..."

**If breach detected**: Stop immediately, clear chat, restart with Method 3 (rename).

---

## RECOMMENDED APPROACH

For maximum isolation, use **Method 3 + Method 4** together:

1. Rename the frontend folder to hide it
2. Start a fresh Cursor chat
3. Paste the isolation protocol as first message
4. Let Cursor complete all 10 phases
5. Verify flowcharts against your expectations
6. Only then restore frontend folder

---

## POST-ANALYSIS: Frontend Development Phase

After flowcharts are verified, create a NEW instruction file:

```
CURSOR_FRONTEND_BUILD_INSTRUCTIONS.md

This file will reference ONLY:
1. The flowcharts Cursor just created
2. The backend API endpoints documented
3. UI/UX requirements you specify

It will NOT reference any previous frontend code.
```

This ensures the new frontend is built from:
- ✅ Verified architectural understanding
- ✅ Documented API contracts
- ✅ Your design requirements
- ❌ NOT from memory of previous (flawed) implementation

---

## Quick Reference Commands

```bash
# Hide frontend
mv frontend _frontend_HIDDEN
mv app.html _app_HIDDEN.html

# Restore frontend (after analysis)
mv _frontend_HIDDEN frontend
mv _app_HIDDEN.html app.html

# Create .cursorignore
cat > .cursorignore << 'EOF'
frontend/
**/*.jsx
**/*.tsx
app.html
node_modules/
EOF
```

---

*Use these methods to ensure Cursor approaches the backend with fresh eyes and creates accurate documentation.*
