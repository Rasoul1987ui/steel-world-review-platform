# Search + 404 + Header/Footer — Elementor Build Blueprint

## Objective
Finalize shared navigation and utility templates:
- Header
- Footer
- Search Results
- 404
- Mobile Navigation
- Global utility behavior

Core rule: shared components are built once and reused site-wide.

## 1. Header Architecture
Elementor Theme Builder → Header → Entire Site.

Structure:
1. Top Utility Bar
2. Main Header
3. Primary Navigation
4. Search Action
5. Market Action
6. Mobile Navigation
7. Optional Market Ticker

Avoid separate headers for individual pages unless a genuine editorial exception exists.

## 2. Main Header
Desktop:
Logo | Primary Navigation | Search | Market

Primary navigation:
- آخرین اخبار
- تحلیل و گزارش
- بازار فولاد
- شرکت‌ها
- فناوری
- مصاحبه‌ها

Maximum approximately 6 primary items.

Do not add every archive to the main navigation. Secondary destinations belong in Footer or contextual archive links.

## 3. Logo
Use the approved Steel World Review logo asset.

Requirements:
- correct light/dark version;
- optimized SVG/image;
- meaningful alt text;
- link to homepage;
- no unnecessary internal padding.

## 4. Header Search
Desktop: visible search action; inline search or compact overlay.
Mobile: accessible search action.

Destination:
 /search/?s={query}

Input must be Persian-friendly, keyboard accessible and have a clear submit action.

Do not make search depend on client-side-only filtering.

## 5. Market Action
Compact header action linking to /market/.

Example:
بازار فولاد

This is a navigation link, not a hard-coded price display.

## 6. Navigation Behavior
Desktop:
- horizontal;
- clear active state;
- subtle hover;
- no excessive dropdowns.

Mobile:
- menu button;
- slide-down/off-canvas navigation;
- clear close control;
- accessible focus behavior.

## 7. Optional Market Ticker
If enabled:
- source data from Market Item records;
- show only important instruments;
- show current value/change;
- link to /market/.

Do not duplicate the Market Dashboard in the header.

If market data is stale/unavailable, hide the ticker or use the approved stale-data state.

## 8. Sticky Header
Recommended:
- sticky after scroll;
- compact state may reduce height;
- minimal animation.

Custom JavaScript should remain lightweight.

# Footer

## 9. Footer Architecture
Elementor Theme Builder → Footer → Entire Site.

Structure:
1. Brand/description
2. Main links
3. Market links
4. Company links
5. Contact
6. Social links
7. Copyright/legal row

## 10. Footer Navigation

### انتشار
- آخرین اخبار
- تحلیل و گزارش
- گزارش‌ها
- مصاحبه‌ها

### بازار
- بازار فولاد
- اخبار بازار
- چشم‌انداز

### شرکت‌ها
- فهرست شرکت‌ها

### فناوری
- فناوری
- تولید
- متالورژی
- اتوماسیون
- تجهیزات
- انرژی
- کربن‌زدایی

Only show links that actually exist.

## 11. Social / External Links
Use official URLs only.
Do not add placeholder accounts.
Omit unavailable social accounts.

# Search Results

## 12. Search Template
Elementor Theme Builder → Search Results.

Target:
 /search/?s={query}

Do not use a normal archive template for search.

## 13. Search Header
Display:
- title;
- search query;
- result count when available.

Example:
جستجو برای «فولاد»

Do not expose technical query parameters.

## 14. Search Query
Production search should use approved WordPress content.

At minimum:
- Post Title
- Post Content
- Excerpt

Potential later expansion:
- tags;
- technology topic;
- company relationships.

The prototype local search must not be treated as the production search engine.

Do not use company-name text matching as the primary relationship system.

## 15. Search Results
Reuse existing article Loop Cards.

Expose:
- Featured Image
- content type
- title
- excerpt
- date
- reading time where available
- permalink

Recommended:
- desktop 3 columns;
- tablet 2 columns;
- mobile 1 column.

## 16. Search Pagination
Use crawlable pagination.

Avoid infinite scroll as the only result navigation.

If no results:
- show the query;
- explain no result;
- link to latest news;
- optionally suggest broader terms.

## 17. Search SEO
Normally:
noindex, follow

Canonical behavior should follow the SEO plugin's search-result rules.

Do not allow arbitrary search URLs to become indexable content pages.

# 404

## 18. 404 Template
Elementor Theme Builder → 404 Page.

Structure:
1. Clear 404 indicator
2. Helpful Persian heading
3. Short explanation
4. Home button
5. Latest News / useful links
6. Search action

Concept:
این صفحه پیدا نشد.

Keep the design aligned with the editorial system.

## 19. 404 Navigation
Primary:
بازگشت به صفحه اصلی

Secondary:
- آخرین اخبار
- بازار فولاد
- شرکت‌ها
- جستجو

Do not create a dead end.

## 20. 404 SEO
Return the correct HTTP 404 status.

Do not:
- redirect every unknown URL to homepage;
- return HTTP 200 for missing pages;
- index the 404 page.

Verify status during QA.

# Mobile Navigation

## 21. Mobile Menu
Include:
- primary navigation;
- market;
- companies;
- optional technology topics;
- search.

Keep hierarchy shallow.

Accessibility:
- keyboard/focus support;
- clear close button;
- logical focus behavior;
- safe body-scroll handling.

# Global Utility Rules

## 22. Link Behavior
Internal links: normal same-tab navigation.
External links: follow approved site policy.

Do not automatically add target=_blank to every link.

## 23. Active States
Active navigation should reflect:
- current page;
- current archive;
- current technology topic;
- current company section where appropriate.

Use visual state plus accessible semantics.

## 24. Global Container
Recommended:
max-width 1320px.

Keep horizontal padding consistent across:
- header;
- footer;
- homepage;
- archives;
- article;
- company;
- market;
- search.

## 25. Global Spacing
Use Elementor Global Variables / approved spacing system.

Conceptual scale:
- XS
- SM
- MD
- LG
- XL
- 2XL

Finalize exact values during implementation.

## 26. Global Typography
Use the approved Persian font.

Define globally:
- Body;
- H1;
- H2;
- H3;
- H4;
- navigation;
- labels;
- metadata;
- buttons.

## 27. Global Colors
Approved:
- Primary: #194B7E
- Accent: #89CDAC
- Navy: #0E2A47
- Text: #17202A
- Muted: #667085
- Background: #F7F9FA
- White: #FFFFFF
- Border: #E5E7EB

Use Elementor Global Colors/Variables.

## 28. Global Interaction
Hover/focus:
- subtle;
- fast;
- accessible.

Avoid:
- excessive scaling;
- heavy shadows;
- gradients;
- glass effects;
- large motion.

## 29. Responsive Rules
1440/1280:
- full navigation;
- search and market action visible;
- balanced spacing.

1024:
- switch to compact/mobile navigation if full navigation no longer fits.

768:
- logo + search + menu.

480/390/360:
- compact header;
- no clipped logo;
- controls remain tappable;
- no overflow.

Footer:
- desktop 4–5 logical columns;
- tablet 2–3;
- mobile 1–2.

## 30. Acceptance Checklist

### Header
- [ ] One global header.
- [ ] Navigation links work.
- [ ] Search works.
- [ ] Market link works.
- [ ] Mobile menu works.
- [ ] Active state works.
- [ ] Header is responsive.
- [ ] Sticky behavior does not cause layout issues.

### Footer
- [ ] One global footer.
- [ ] All links are valid.
- [ ] No placeholder social links.
- [ ] Responsive layout works.
- [ ] Copyright/legal links are correct.

### Search
- [ ] /search/?s= works.
- [ ] Query is visible.
- [ ] Results are dynamic.
- [ ] Pagination works.
- [ ] Empty state works.
- [ ] Search is noindex/follow.
- [ ] No console errors.

### 404
- [ ] Correct HTTP 404 status.
- [ ] Clear message.
- [ ] Home link works.
- [ ] Search works.
- [ ] Useful navigation exists.
- [ ] 404 is not indexable.

## Final Principle
Header and Footer define site identity and navigation.
Search is a utility, not an editorial archive.
404 is a recovery page, not a dead end.
All three use the same global design system and remain independent of individual page content.
