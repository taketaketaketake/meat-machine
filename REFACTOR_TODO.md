# Refactoring Task List

Detailed checklist for page refactoring. Check off items as completed.

---

## Phase 1: Shared Infrastructure ✅ COMPLETE

### 1.1 Constants File
- [x] Create `src/data/constants.ts`
- [x] Add `CARD_GRADIENTS` array
- [x] Add `REEL_GRADIENTS` array
- [x] Add `AI_TOOLS` array (full descriptions)
- [x] Add `AI_TOOLS_SIMPLE` array (minimal)
- [x] Add `CREATORS` array
- [x] Add `TRENDING_TAGS` array
- [x] Add `TOP_VOTED` array
- [x] Add `NEWEST_MEMBERS` array
- [x] Add `FEATURED_ROOMS` array
- [x] Add `ALL_ROOMS` array
- [x] Add `HOME_CATEGORIES` array
- [x] Add `VIDEO_CATEGORIES` array
- [x] Add `PHOTO_CATEGORIES` array
- [x] Add `FEATURED_SLIDES` array
- [x] Add `VIDEO_SHORTS` array
- [x] Add `REELS_DATA` array

### 1.2 Utility Functions
- [x] Create `src/utils/date.ts`
- [x] Add `isNew(date, thresholdDays)` function
- [x] Add `formatRelativeTime(date)` function
- [x] Create `src/utils/format.ts`
- [x] Add `formatNumber(n)` function
- [x] Add `formatCompact(n)` function
- [x] Add `getGradient(index, gradients)` function
- [x] Add `range(length)` function
- [x] Create `src/utils/index.ts` re-exports

---

## Phase 2: React Components ✅ COMPLETE

### FilteredContent.jsx
- [x] Import `isNew` from utils
- [x] Import `getGradient` from utils
- [x] Replace hardcoded date logic with utility
- [x] Use `getGradient` helper for gradient cycling

### AudioPageLayout.jsx
- [x] Add TODO comment for incomplete filter handler
- [x] Extract handler to named function

### AppLayout.jsx
- [x] Already refactored in previous session (skipped)

### VideoPageLayout.jsx
- [x] Minimal issues - skipped

---

## Phase 3: Page Refactoring

### 3a. High Priority Pages

#### index.astro
- [x] Import constants from `@/data/constants`
- [x] Remove duplicate `featuredSlides` - use `FEATURED_SLIDES`
- [x] Remove duplicate `reelsData` - use `REELS_DATA`
- [x] Remove duplicate `gradients` - use `CARD_GRADIENTS`
- [x] Remove duplicate `creators` - use `CREATORS`
- [x] Remove duplicate `categories` - use `HOME_CATEGORIES`
- [x] Remove unused `tools` array
- [x] Remove unused `trendingTags` array
- [x] Remove unused `topVoted` array
- [x] Remove unused `newestMembers` array
- [x] Remove unused `today` variable
- [x] Remove unused `isNew` function
- [x] Remove unused `featureCategories` array
- [x] Remove unused inline `<style>` block
- [x] Ensure `global.css` import present

#### videos.astro
- [x] Import constants from `@/data/constants`
- [x] Remove duplicate `creators` - use from constants
- [x] Remove duplicate `categories` - use `VIDEO_CATEGORIES`
- [x] Remove duplicate `videoShorts` - use `VIDEO_SHORTS`
- [x] Remove duplicate `gradients` - use `CARD_GRADIENTS`
- [x] Remove duplicate `tools` - use `AI_TOOLS`
- [x] Simplify video data generation
- [x] Ensure `global.css` import present

#### photos.astro
- [x] Import constants from `@/data/constants`
- [x] Remove unused `SectionTitle` import
- [x] Remove duplicate `categories` - use `PHOTO_CATEGORIES`
- [x] Remove duplicate `aiTools` - use `AI_TOOLS_SIMPLE`
- [x] Remove duplicate `.tag-chip` styles (already in global.css)
- [x] Ensure `global.css` import present

#### video-layouts.astro
- [ ] Import constants from `@/data/constants`
- [ ] Remove duplicate `trendingTags` - use `TRENDING_TAGS`
- [ ] Remove duplicate `topVoted` - use `TOP_VOTED`
- [ ] Remove duplicate `newestMembers` - use `NEWEST_MEMBERS`
- [ ] Remove duplicate `tools` - use `AI_TOOLS`
- [ ] Replace `Array.from({ length: N })` with `range(N)`
- [ ] Extract hardcoded random values to data
- [ ] Consider breaking into smaller components

### 3b. Medium Priority Pages

#### words.astro
- [ ] Review for duplicate data
- [ ] Replace inline JSX patterns with components
- [ ] Move prose styles to global.css if reused

#### audio.astro
- [ ] Review for duplicate data
- [ ] Add proper types/documentation for mock data

#### creators.astro
- [ ] Import `CREATORS` from constants
- [ ] Remove duplicate creator data
- [ ] Move scrollbar-hide styles to global.css

#### search.astro
- [ ] Remove async from synchronous function
- [ ] Create `CONTENT_TYPE_ICONS` map constant
- [ ] Document TODO for API integration

#### community.astro
- [ ] Import `FEATURED_ROOMS`, `ALL_ROOMS` from constants
- [ ] Use `formatNumber` utility
- [ ] Document missing search handler

### 3c. Lower Priority Pages

#### videos/[slug].astro
- [ ] Extract tab switching logic to shared module
- [ ] Review for duplicate code

#### photos/[slug].astro
- [ ] Same as videos/[slug].astro (likely identical)

#### words/[...slug].astro
- [ ] Remove old refactoring comments
- [ ] Review prose styling

#### audio/[id].astro
- [ ] Fix duplicate import statements at end of file
- [ ] Review for consistency

#### audio/playlist.astro
- [ ] Use `class:list` for conditional classes
- [ ] Extract repeated ternary to variable

#### videos/category/[category].astro
- [ ] Extract hardcoded sort options
- [ ] Document incomplete filter UI

#### creator/dashboard.astro
- [ ] Minimal - review for issues

#### creator/settings.astro
- [ ] Remove copy-paste comment artifacts

#### creator/[username].astro
- [ ] Extract creation grid to shared component
- [ ] Fix typo in title if present

#### community/[room].astro
- [ ] Extract tab switching logic (same as detail pages)

#### discussions/index.astro
- [ ] Change relative imports to alias imports
- [ ] Import room data from constants
- [ ] Remove old fix comments

#### discussions/[channel].astro
- [ ] Change relative imports to alias imports
- [ ] Simplify conditional rendering

#### register.astro
- [ ] Remove copy-paste comment artifacts
- [ ] Consider data-driven feature list

#### upload.astro
- [ ] Minimal - review for issues

#### 404.astro
- [ ] Remove unused `SuggestedContent` import if present

---

## Phase 4: Final Cleanup

- [ ] Run grep for unused imports across all files
- [ ] Run `npm run build` to verify no errors
- [ ] Run linter if configured
- [ ] Review console for any warnings
- [ ] Test all pages manually
- [ ] Commit and push changes

---

## Notes

- Keep `global.css` import in all page files
- Use `@/` alias for imports (not relative paths)
- Don't change functionality - only improve code quality
- Ask for clarity if unsure about any change
