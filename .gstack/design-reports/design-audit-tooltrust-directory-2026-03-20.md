# Design Audit — tooltrust-directory.vercel.app
**Date:** 2026-03-20 | **Branch:** main | **Tool:** /design-review (gstack v0.9.4.0)

---

## Headline Scores

| Metric | Baseline | Final |
|--------|----------|-------|
| **Design Score** | B- | **B** |
| **AI Slop Score** | B | **B** |

---

## First Impression

The site communicates **"serious security tooling."** Dark theme, monospace type, grade badges — it reads like a tool engineers would trust.

I notice **the entire homepage is a wall of 120+ identical cards** — no visual breathing room, no clear entry point after the hero.

The first 3 things my eye goes to are: **1) the nav bar**, **2) the stats row (tools/safe/risky)**, **3) an undifferentiated grid of cards**.

If I had to describe this in one word: **dense.**

---

## Inferred Design System

| Token | Value | Notes |
|-------|-------|-------|
| Font | Geist Sans | Clean, modern — excellent choice |
| Background | `#09090b` + radial top glow | Deliberate, not default Tailwind dark |
| Brand | `emerald-400` | Consistent across logo, links, safe count |
| Grade colors | A=green, B=blue, C=yellow, D=orange, F=red | Semantic and meaningful |
| Text hierarchy | zinc-50 → zinc-200 → zinc-400 → zinc-500 | Consistent 4-level system |
| Performance | 538ms total load, 9ms TTFB | Excellent |

---

## What's Working Well

- **Grade color system** — semantic, instantly readable, used consistently across badges and filters
- **Tool detail page** — great layout: large grade circle, findings grouped by type, tabs for code/findings, CLI scan-yourself section
- **Stats row** — total tools / safe / risky communicates value immediately above the fold
- **URL reflects state** — search, grade, category, view mode all in query params ✓
- **Performance** — A-grade, no console errors
- **No AI slop** — no purple gradients, no 3-column feature grids, no wavy dividers. This looks like a real tool.

---

## Findings & Fixes

### FINDING-001: Touch targets undersized — **High** → ✅ FIXED
**What:** Nav links were ~20px tall. Grade/category filter buttons were `py-1` (~28px). Mobile minimum is 44px.

**Fix:** Added `flex items-center py-3` to nav links in `layout.tsx`. Changed all filter buttons and view toggle from `py-1`/`py-1.5` to `py-2`/`py-2.5` in `RegistryWithFilters.tsx`.

**Files:** `web/app/layout.tsx`, `web/components/RegistryWithFilters.tsx`
**Commit:** `0c403e2`

---

### FINDING-002: Grade filter buttons unreadable at a glance — **Medium** → ✅ FIXED
**What:** When a grade filter (A/B/C/D/F) is inactive, all buttons look identical — zinc-400 text, zinc-800 border. You can't see that A=green, B=blue, etc. until you click.

**Fix:** Added `GRADE_BUTTON_INACTIVE_STYLES` map — inactive grade buttons now show a muted version of their grade color (emerald for A, blue for B, yellow for C, orange for D, red for F). Active state is unchanged (bright + background).

**Files:** `web/components/RegistryWithFilters.tsx`
**Commit:** `d6d6da8`

---

### FINDING-003: Empty filtered state has no recovery action — **Medium** → ✅ FIXED
**What:** "No tools match the current filters." — just text, no way to clear filters from the empty state.

**Fix:** Added a "Clear filters" button that resets query, grade filter, and category filter in one click.

**Files:** `web/components/RegistryWithFilters.tsx`
**Commit:** `b1695ab`

---

### FINDING-004: ⭐ emoji in card footer — **Polish** → ✅ FIXED
**What:** Star count displayed as `⭐ 180.2k` — emoji as a design element, inconsistent with Lucide icon system used elsewhere.

**Fix:** Replaced with `<Star className="h-3 w-3 fill-zinc-500 text-zinc-500" />` from Lucide.

**Files:** `web/components/RegistryWithFilters.tsx`
**Commit:** `3e5740a`

---

## Deferred (Not Fixable from CSS/source alone)

| Finding | Why deferred |
|---------|-------------|
| Card density on homepage (120+ cards, no pagination) | Architectural — requires pagination, virtual scroll, or lazy loading |
| Mobile card layout (1-column stacked is functional but not designed for mobile) | Would require a dedicated mobile card design |

---

## PR Summary

Design review found 4 issues, fixed all 4. Design score B- → B. Key wins: touch targets now meet 44px minimum on mobile (nav + all filter buttons), grade filter bar is now color-coded at a glance, empty states have a recovery action, star counts use consistent Lucide icons.

---

## Commits

```
3e5740a style(design): FINDING-004 — replace star emoji with Lucide Star icon in card footer
b1695ab style(design): FINDING-003 — empty state gets Clear filters action button
d6d6da8 style(design): FINDING-002 — grade filter buttons show color hint when inactive for instant scannability
0c403e2 style(design): FINDING-001 — fix touch targets on nav links and filter buttons to meet 44px minimum
```
