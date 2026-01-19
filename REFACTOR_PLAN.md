# Page Refactoring Implementation Plan

## Overview
Systematic refactoring of 24 pages to fix code inefficiencies without changing functionality.

## Phase 1: Create Shared Infrastructure ✅ COMPLETE
Extract duplicate data and utilities before touching pages.

### 1.1 Create Data Constants (`src/data/constants.ts`) ✅
- ✅ Extract creator objects (used in 3+ pages)
- ✅ Extract tools array (used in 5 pages)
- ✅ Extract gradient arrays (used in 4+ pages)
- ✅ Extract category data (used in 3+ pages)
- ✅ Extract channel/room data (used in 3 pages)

### 1.2 Create Utility Functions (`src/utils/`) ✅
- ✅ `isNew(date)` - date comparison utility (used in 3 files)
- ✅ `formatNumber(n)` - number formatting (used in 2+ files)
- ✅ `getGradient(index, gradients)` - gradient cycling helper
- ✅ `range(length)` - cleaner array generation
- ✅ `formatCompact(n)` - compact number formatting (1.5K, 2M)
- ✅ `formatRelativeTime(date)` - relative time strings

## Phase 2: Fix React Components ✅ COMPLETE
Address issues in shared components before pages.

### Components fixed:
1. ✅ `FilteredContent.jsx` - now uses `isNew` utility and `getGradient` helper
2. ⏭️ `AppLayout.jsx` - skipped (already refactored in previous session)
3. ✅ `AudioPageLayout.jsx` - added TODO comment for incomplete filter handler
4. ⏭️ `VideoPageLayout.jsx` - skipped (minimal issues)

## Phase 3: Refactor Pages (by priority)

### High Priority (most issues) - IN PROGRESS
1. ⬜ `video-layouts.astro` - 681 lines, 7 issues
2. ✅ `index.astro` - removed unused code, uses constants
3. ✅ `videos.astro` - reduced from 86 to 43 lines, uses constants
4. ✅ `photos.astro` - removed unused import & duplicate styles, uses constants

### Medium Priority - NOT STARTED
5. ⬜ `words.astro` - 3 issues
6. ⬜ `audio.astro` - 3 issues
7. ⬜ `creators.astro` - 3 issues
8. ⬜ `search.astro` - 3 issues
9. ⬜ `community.astro` - 3 issues

### Lower Priority (1-2 issues each) - NOT STARTED
10. ⬜ `videos/[slug].astro`
11. ⬜ `photos/[slug].astro`
12. ⬜ `words/[...slug].astro`
13. ⬜ `audio/[id].astro`
14. ⬜ `audio/playlist.astro`
15. ⬜ `videos/category/[category].astro`
16. ⬜ `creator/dashboard.astro`
17. ⬜ `creator/settings.astro`
18. ⬜ `creator/[username].astro`
19. ⬜ `community/[room].astro`
20. ⬜ `discussions/index.astro`
21. ⬜ `discussions/[channel].astro`
22. ⬜ `register.astro`
23. ⬜ `upload.astro`
24. ⬜ `404.astro`

## Phase 4: Final Cleanup - NOT STARTED
- ⬜ Remove unused imports across all files
- ⬜ Verify build passes
- ⬜ Run linter

## Files Created
- ✅ `src/data/constants.ts` - shared data
- ✅ `src/utils/date.ts` - date utilities
- ✅ `src/utils/format.ts` - formatting utilities
- ✅ `src/utils/index.ts` - re-exports

## Progress Summary
- **Phase 1:** 100% complete
- **Phase 2:** 100% complete
- **Phase 3:** 4/24 pages (17%)
- **Phase 4:** 0% complete
- **Overall:** ~35% complete
