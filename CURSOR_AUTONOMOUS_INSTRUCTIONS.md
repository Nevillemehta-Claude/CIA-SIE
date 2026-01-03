# CURSOR AUTONOMOUS IMPLEMENTATION INSTRUCTIONS

**Date:** January 3, 2026
**Mission:** Build CIA-SIE Frontend Autonomously
**Estimated Scope:** 22+ Components, 7 Pages, ~5,000 lines of code

---

## COPY THIS ENTIRE PROMPT INTO CURSOR

```
You are about to autonomously implement the CIA-SIE frontend. This is a financial decision-support system with INVIOLABLE constitutional rules.

## YOUR MISSION

Build 22+ React components and 7 pages following the specifications in `AI_HANDOFF/AUTONOMOUS_HANDOFF_COMPREHENSIVE.md`. Work autonomously without asking questions - all specifications are complete.

## CRITICAL: READ THESE FILES FIRST (IN ORDER)

1. `AI_HANDOFF/AUTONOMOUS_HANDOFF_COMPREHENSIVE.md` - Your primary implementation guide (2105 lines)
2. `AI_HANDOFF/HANDOFF_03_CONSTITUTIONAL_RULES.md` - Rules you CANNOT violate
3. `frontend/src/types/index.ts` - All TypeScript types (already complete)
4. `frontend/src/services/api.ts` - API client (already complete)

## THE 3 CONSTITUTIONAL RULES (NEVER VIOLATE)

1. **Decision-Support NOT Decision-Making**
   - NEVER use: should, recommend, suggest, consider, buy, sell
   - ONLY use: descriptive language ("Chart X shows BULLISH")

2. **Expose Contradictions, NEVER Resolve Them**
   - When charts disagree, show BOTH with EQUAL visual size
   - NEVER suggest which is "correct" or "more reliable"
   - Use neutral amber/yellow colors, not red/green for contradictions

3. **Descriptive AI, NOT Prescriptive AI**
   - ALL AI output MUST include this EXACT disclaimer:
   "This is a description of what your charts are showing. The interpretation and any decision is entirely yours."

## IMPLEMENTATION ORDER

### Phase 1: Foundation (Do First)
- `components/layout/Layout.tsx`
- `components/layout/Sidebar.tsx`
- `components/layout/PageHeader.tsx`
- `components/shared/Card.tsx`
- `components/shared/Badge.tsx`
- `components/shared/LoadingSpinner.tsx`
- `components/shared/ErrorMessage.tsx`

### Phase 2: Core Display
- `components/signals/DirectionBadge.tsx`
- `components/signals/FreshnessIndicator.tsx`
- `components/signals/ChartSignalCard.tsx`
- `components/signals/SignalGrid.tsx`
- `components/signals/InstrumentSelector.tsx`

### Phase 3: Constitutional Components (CRITICAL)
- `components/constitutional/ConstitutionalBanner.tsx` - MUST show 3 principles
- `components/constitutional/ContradictionAlert.tsx` - MUST have equal visual weight
- `components/constitutional/ContradictionPanel.tsx`
- `components/constitutional/ConfirmationPanel.tsx`
- `components/constitutional/NarrativePanel.tsx` - MUST show disclaimer

### Phase 4: AI Components
- `components/ai/ModelSelector.tsx`
- `components/ai/TokenDisplay.tsx`
- `components/ai/CostDisplay.tsx`
- `components/ai/BudgetAlert.tsx`
- `components/ai/AIUsagePanel.tsx`
- `components/ai/ChatPanel.tsx` - Disclaimer on EVERY AI response

### Phase 5: Utility Components
- `components/shared/Accordion.tsx`
- `components/shared/Tabs.tsx`
- `components/shared/InfoBox.tsx`
- `components/shared/CommandBox.tsx`
- `components/shared/Table.tsx`

### Phase 6: Hooks
- `hooks/useAI.ts`
- `hooks/useChat.ts`
- `hooks/useNarrative.ts`

### Phase 7: Pages
- `pages/Dashboard.tsx` - MUST include ConstitutionalBanner
- `pages/InstrumentList.tsx`
- `pages/InstrumentDetail.tsx`
- `pages/SiloDetail.tsx`
- `pages/ChartsReference.tsx`
- `pages/Settings.tsx`
- `pages/Troubleshooting.tsx`

### Phase 8: App Routing
- Update `App.tsx` with React Router routes

### Phase 9: Constants
- `constants/sampleCharts.ts`

## TECHNOLOGY STACK

- React 18 + TypeScript 5
- React Query 5 (TanStack Query)
- React Router 6
- TailwindCSS 3
- Axios (already configured)

## EXISTING CODE (DO NOT MODIFY)

- `frontend/src/types/index.ts` - Complete, use these types
- `frontend/src/services/api.ts` - Complete, use these API calls
- `frontend/src/hooks/useInstruments.ts` - Exists
- `frontend/src/hooks/useRelationships.ts` - Exists
- `frontend/src/main.tsx` - Complete
- `frontend/src/index.css` - Has Tailwind setup

## VALIDATION BEFORE EACH COMMIT

Before finishing each component:
1. Does it contain "should", "recommend", "suggest", "consider"? → REJECT
2. Does ContradictionAlert have equal-sized chart displays? → REQUIRED
3. Does NarrativePanel show the mandatory disclaimer? → REQUIRED
4. Does ChatPanel show disclaimer on EVERY AI response? → REQUIRED

## COLOR SCHEME (TailwindCSS)

- Primary: `blue-600`
- Success (Bullish): `emerald-500`
- Danger (Bearish): `red-500`
- Warning (Contradiction): `amber-500` (NOT red)
- Neutral: `slate-500`
- Background: `slate-50`
- Card: `white`

## BEGIN IMPLEMENTATION

Start with Phase 1. Create each file with complete, working code. Use the exact code templates from `AUTONOMOUS_HANDOFF_COMPREHENSIVE.md`. Do not ask for clarification - all specifications are complete in that document.

After completing all phases, run:
- `npm run build` to verify no errors
- `npm run lint` to verify code quality

GO. Build autonomously.
```

---

## HOW TO USE THIS IN CURSOR

### Step 1: Open Project in Cursor
```bash
# Open Cursor and navigate to:
/Users/nevillemehta/Downloads/CIA-SIE
```

### Step 2: Open Composer (Cmd+K or Ctrl+K)

### Step 3: Copy the entire prompt above (between the ``` marks)

### Step 4: Paste into Cursor Composer and press Enter

### Step 5: Let Cursor work autonomously

Cursor will:
1. Read the referenced files
2. Create all components in order
3. Follow constitutional rules
4. Build the complete frontend

---

## WHAT CURSOR WILL BUILD

| Category | Count | Files |
|----------|-------|-------|
| Layout Components | 3 | Layout, Sidebar, PageHeader |
| Shared Components | 9 | Card, Badge, LoadingSpinner, ErrorMessage, Accordion, Tabs, InfoBox, CommandBox, Table |
| Signal Components | 5 | DirectionBadge, FreshnessIndicator, ChartSignalCard, SignalGrid, InstrumentSelector |
| Constitutional Components | 5 | ConstitutionalBanner, ContradictionAlert, ContradictionPanel, ConfirmationPanel, NarrativePanel |
| AI Components | 6 | ModelSelector, TokenDisplay, CostDisplay, BudgetAlert, AIUsagePanel, ChatPanel |
| Hooks | 3 | useAI, useChat, useNarrative |
| Pages | 7 | Dashboard, InstrumentList, InstrumentDetail, SiloDetail, ChartsReference, Settings, Troubleshooting |
| Constants | 1 | sampleCharts |
| **TOTAL** | **39 files** | ~5,000 lines of code |

---

## EXPECTED OUTCOME

After Cursor completes:

1. **Run the frontend:**
   ```bash
   cd frontend && npm run dev
   ```

2. **Verify in browser:**
   - Dashboard shows ConstitutionalBanner
   - Signal cards show direction and freshness
   - Contradictions show with equal visual weight
   - AI narrative shows mandatory disclaimer

3. **Run validation:**
   ```bash
   npm run build && npm run lint
   ```

---

## IF CURSOR ASKS QUESTIONS

It shouldn't - everything is specified. But if it does:

- **"Which styling framework?"** → TailwindCSS 3
- **"Where are the types?"** → `frontend/src/types/index.ts`
- **"Where is the API?"** → `frontend/src/services/api.ts`
- **"What's the routing?"** → React Router 6, routes in App.tsx
- **"What about state?"** → React Query for server state, useState for UI state

---

## SUCCESS CRITERIA

The implementation is complete when:

- [ ] All 39 files created
- [ ] `npm run build` passes
- [ ] `npm run lint` passes
- [ ] Dashboard shows ConstitutionalBanner
- [ ] ContradictionAlert has equal visual weight
- [ ] NarrativePanel shows mandatory disclaimer
- [ ] ChatPanel shows disclaimer on every AI response
- [ ] No instances of "should", "recommend", "suggest", "consider" in component code

---

**This is the moment. Let Cursor build.**
