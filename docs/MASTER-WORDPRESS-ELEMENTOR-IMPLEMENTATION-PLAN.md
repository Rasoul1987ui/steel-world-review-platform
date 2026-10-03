# Master WordPress + Elementor Implementation Plan

## Purpose

Execution-level plan for rebuilding Steel World Review in WordPress + Hello Elementor + Elementor Pro while preserving content, URLs, SEO value, and editorial structure.

The prototype is a visual/structural reference only. WordPress is the source of truth; Elementor is the presentation layer.

Related documents:
- docs/ELEMENTOR-BUILD-SPEC.md
- docs/WORDPRESS-DATA-MODEL.md
- docs/ELEMENTOR-IMPLEMENTATION-CHECKLIST.md
- docs/PROTOTYPE-TO-WORDPRESS-MIGRATION-MATRIX.md
- docs/ELEMENTOR-COMPONENT-INVENTORY.md
- docs/HOMEPAGE-ELEMENTOR-BUILD-BLUEPRINT.md
- docs/ARCHIVE-ELEMENTOR-BUILD-BLUEPRINT.md
- docs/COMPANY-CPT-ELEMENTOR-BUILD-BLUEPRINT.md
- docs/MARKET-DATA-ELEMENTOR-BUILD-BLUEPRINT.md
- docs/SEARCH-404-HEADER-FOOTER-ELEMENTOR-BUILD-BLUEPRINT.md

## 1. Non-Negotiable Rules

1. Work on staging first; never use production as the development environment.
2. Take and verify a full database/files backup before structural changes.
3. Crawl/export the current site's URLs and content before changing the information architecture.
4. Preserve important existing URLs and slugs wherever practical.
5. Create one-hop 301 redirects for intentionally changed URLs.
6. Never hard-code production articles, companies, market prices, repeated lists, or URLs into Elementor.
7. Do not migrate prototype market numbers as factual production data.
8. Do not use Elementor as the database.
9. Keep WordPress content editable independently of presentation.
10. Keep staging out of search engines.

## 2. Phase 0 — Freeze and Safety

- Confirm current production backup and rollback capability.
- Create fresh full backup.
- Record WordPress, PHP, theme, Elementor and plugin versions.
- Record active plugins and licenses.
- Freeze unnecessary updates during migration.
- Confirm staging domain/hosting.
- Protect staging with password/noindex where possible.
- Prevent staging forms, emails, payments and other external side effects.

Gate: backup and rollback path confirmed.

## 3. Phase 1 — Production Inventory

Before changing production structure, inventory:

- All indexable URLs.
- Posts/pages.
- Categories/tags/authors.
- Media and featured images.
- Existing redirects.
- XML sitemap URLs.
- Canonicals and metadata.
- Reports, interviews and company content.
- Current navigation.
- High-value URLs receiving traffic/backlinks.

Gate: source inventory exists and can be compared with staging.

## 4. Phase 2 — WordPress Data Foundation

Implement the data model before complex Elementor work.

### Editorial
Native WordPress Posts plus content_type:
- news
- analysis
- report
- outlook
- interviews
- technology

technology_topic:
- production
- metallurgy
- automation
- equipment
- energy
- decarbonization

### Editorial ACF
- reading_time
- short_excerpt
- custom_image_alt
- related_companies
- source_url

### Interviews
- interviewee_name
- interviewee_position
- interviewee_company
- interviewee_portrait

### Reports
- report_issue
- report_pages
- report_format
- report_pdf
- report_download_url

### Companies
Company CPT with /companies/ rewrite and required profile fields.

Use explicit article-to-company relationships. If reverse querying through ACF proves unreliable, use one dedicated company taxonomy as fallback; never maintain two competing relationship systems.

### Market
Market Item CPT plus historical Market Entry records. Store value, unit, change, source, freshness and display order.

Gate: data model works with a small real test dataset.

## 5. Phase 3 — Global Elementor System

Configure before page construction:

- RTL.
- Global colors/fonts.
- 1320px container.
- Vazirmatn/approved Persian font.
- Global spacing and typography.
- Buttons, links, forms and focus states.
- Radius/shadow rules.
- Responsive breakpoints.

Core colors:
- Primary #194B7E
- Accent #89CDAC
- Navy #0E2A47
- Text #17202A
- Muted #667085
- Background #F7F9FA
- White #FFFFFF
- Border #E5E7EB

Gate: test page works at desktop/tablet/mobile.

## 6. Phase 4 — Reusable Components and Loops

Build reusable components before full templates:

1. Standard News Card
2. Featured Story
3. Compact News List
4. Analysis Card
5. Report Card
6. Company Card
7. Interview Card
8. Technology Card
9. Market Card

Also build:
- Category Label
- Article Meta
- Section Header
- Page Header
- Breadcrumbs
- Newsletter
- Empty State

All repeated content must come from dynamic WordPress data.

Gate: each loop works with multiple records without manual duplication.

## 7. Phase 5 — Header and Footer

Header:
- Logo.
- Maximum approximately six primary navigation items.
- Search.
- Market link/action.
- Mobile navigation.
- Current/active states.
- Sticky behavior if retained.

Footer:
- Brand/description.
- Navigation groups.
- Contact/social links where needed.
- Legal/utility links.
- Responsive layout.

Gate: works on normal page, article, archive, company and 404.

## 8. Phase 6 — Single Article

Theme Builder Single Post template:

1. Breadcrumbs
2. Content type/category
3. Title
4. Excerpt
5. Author/date/reading time
6. Featured image
7. Main content
8. Interview metadata when applicable
9. Report metadata/download when applicable
10. Tags
11. Related companies
12. Related articles
13. Newsletter/CTA

Use dynamic fields/conditions instead of creating unnecessary hard-coded templates.

Test with news, analysis, report, interview and technology articles.

## 9. Phase 7 — Archives

Build dynamic Post Archive template for:
- News
- Analysis
- Reports
- Outlook
- Interviews
- Technology
- Technology topics
- Required legacy category URLs

Include dynamic archive header, optional featured stories, Loop Grid, pagination, empty state and breadcrumbs.

Avoid duplicate archive systems and unnecessary URL variants.

Gate: taxonomy, pagination, counts and URLs behave correctly.

## 10. Phase 8 — Company System

Build:
1. Company Archive
2. Company Card
3. Single Company

Single Company:
- Identity/logo
- English name
- Country/city
- Activity
- Founded
- Capacity
- Contact/website
- Description
- Related articles

Related articles must use explicit relationships, not text search.

Gate: verify Article → Company and Company → Articles.

## 11. Phase 9 — Market Data

Build only after the market data model is stable.

Include:
- Market cards
- Current value
- Unit
- Change/change percentage
- Updated time
- Source
- Historical entries
- Sparkline/mini chart if required
- Reference table
- Related market content

Prototype market values are mock data and must not be copied into production as facts.

Gate: editing a market item in WordPress updates all relevant front-end locations dynamically.

## 12. Phase 10 — Homepage

Build the homepage after loops, archives, companies and market data are stable.

Order:
1. Header
2. Market ticker
3. Editorial Hero
4. Latest News
5. Market Dashboard
6. Analysis & Reports
7. Companies
8. Technology
9. Interviews
10. Newsletter
11. Footer

Hero should use controlled dynamic fields such as hero_primary and hero_secondary_1/2/3.

Avoid manual duplication of articles unless editorial rules explicitly permit it.

Gate: homepage is fully driven by WordPress data.

## 13. Phase 11 — Search and 404

Search:
- /search/?s={query}
- Search title/content/excerpt at minimum.
- Reusable result card.
- Pagination.
- noindex, follow.

404:
- Real 404 Theme Builder template.
- Clear message.
- Search.
- Useful content links.
- Home recovery path.
- Verify HTTP status is actually 404.

## 14. Migration Order

1. Full backup.
2. URL crawl/export.
3. Content inventory.
4. Data mapping.
5. Create/import companies.
6. Create taxonomies.
7. Import posts preserving slugs, titles, excerpts, dates, authors, content and media where practical.
8. Attach content types.
9. Attach technology topics.
10. Attach company relationships.
11. Populate interview fields.
12. Populate report fields.
13. Verify media.
14. Verify metadata/canonicals.
15. Build redirect map.
16. Build Elementor templates.
17. Run staging crawl.
18. Fix discrepancies.
19. Final SEO QA.
20. Production cutover.

## 15. Staging Rules

Staging must not compete with production:
- Password protect where possible.
- Enable noindex/discouragement.
- Do not submit staging sitemap.
- Verify staging URLs are absent from production canonicals, Open Graph, schema, internal links and sitemap.

## 16. SEO Acceptance Gate

### URLs
- Important URLs preserved.
- Intentional changes have one-hop 301s.
- No redirect chains.
- No unexpected mass 404s.

### Indexability
- Important pages indexable.
- Search noindex.
- Staging noindex removed on production.
- No accidental noindex on articles/archives.

### Metadata
Verify title, meta description, canonical, Open Graph and social metadata where used.

### Structured data
Verify schema contains valid production URLs and appropriate content.

### Sitemap
- Production URLs only.
- No staging.
- No unnecessary parameter URLs.

### Internal links
- No staging references.
- No broken internal links.
- Correct company/article/archive relationships.

### 404/redirects
- 404 returns HTTP 404.
- Changed URLs return one-hop 301.

## 17. Content Migration Acceptance

Compare old/new counts for:
- Posts
- Pages
- Categories
- Tags
- Authors
- Companies
- Reports
- Interviews
- Technology topics
- Media

Spot-check at least:
- 20 high-value articles
- 10 random articles
- 5 companies
- 3 reports
- 3 interviews
- Several technology articles

For each sampled article verify URL, title, date, author, content, image, type/category, tags, company relation, metadata and canonical.

## 18. Responsive QA

Test every major template at:
- 1440px
- 1280px
- 1024px
- 768px
- 480px
- 390px
- 360px

Check header, hero, cards, typography, images, tables, market dashboard, company facts, article content, forms, footer, touch targets and horizontal overflow.

## 19. Performance QA

Before launch:
- Optimize image dimensions/formats.
- Avoid oversized hero assets.
- Use lazy loading appropriately.
- Load fonts efficiently.
- Minimize third-party scripts and custom JavaScript.
- Avoid unnecessary duplicate Elementor widgets.
- Regenerate Elementor CSS after structural changes.
- Verify cache/CDN behavior.
- Test mobile separately.
- Do not load chart libraries on pages that do not use them.

## 20. Critical Path

Backup
→ Inventory
→ Data Model
→ Global Design
→ Loops
→ Header/Footer
→ Single Article
→ Archives
→ Company
→ Market
→ Homepage
→ Search/404
→ Migration/Redirects
→ SEO QA
→ Responsive/Performance QA
→ Production Cutover

Do not build the homepage before loops exist, company pages before relationships exist, market charts before market data exists, or redirects before URL inventory is complete.

## 21. Rollback Plan

Before cutover:
- Full database backup.
- Full files backup.
- Backup verification.
- Redirect map export.
- Critical URL inventory.
- Production plugin/theme version record.

If a critical launch failure occurs:
1. Stop migration.
2. Restore production if required.
3. Revert deployment/DNS changes when applicable.
4. Preserve logs and error details.
5. Fix staging.
6. Re-test.
7. Repeat cutover only after acceptance passes.

## 22. Production Cutover

Before cutover:
- Backup complete.
- Migration counts verified.
- URL comparison complete.
- Redirect map complete.
- SEO metadata verified.
- Sitemap/robots verified.
- Elementor CSS regenerated.
- Responsive/performance QA complete.
- Forms/search/404 tested.
- Company relationships tested.
- Market data tested.

Immediately after:
- Homepage, header/footer, articles, archives, companies, market and search work.
- 404 works.
- Redirects work.
- Canonicals point to production.
- Sitemap is production-only.
- No staging URL remains.
- No new critical PHP/JS/console errors.

## 23. Post-Launch Monitoring

### First 24 hours
Monitor HTTP errors, 404s, redirects, PHP/Elementor errors, server resources, forms, search, critical URLs, sitemap and robots.

### First 72 hours
Review Search Console coverage/indexing signals, crawl errors, redirect misses, performance and broken links/images.

### First 7 days
Review organic landing pages, indexed URL coverage, 404 patterns, core templates, user reports and application/server errors.

## 24. Milestones

### A — Foundation
WordPress + data model + test data.

### B — Design System
Global Elementor + loops + Header/Footer.

### C — Editorial
Single Article + Archives.

### D — Data Products
Companies + Market.

### E — Frontend
Homepage + Search + 404.

### F — Migration
Real content + relationships + redirects.

### G — QA
SEO + responsive + performance.

### H — Launch
Production cutover + monitoring.

Each milestone must be testable before the next begins.

## 25. Definition of Done

The project is complete only when:
- WordPress is the source of truth.
- Elementor is the presentation layer.
- Priority content is migrated.
- Important URLs are preserved or redirected.
- Company relationships are explicit and reliable.
- Market data is editable and source-traceable.
- Single Article works across content types.
- Archives are dynamic.
- Company pages are dynamic.
- Homepage is dynamic.
- Search and 404 work correctly.
- Responsive QA passes.
- SEO QA passes.
- No staging URLs remain.
- No major PHP/JS errors remain.
- Performance is acceptable.
- Backup/rollback remains available.
- Production has been monitored after launch.

## Final Architecture

WordPress owns content, authors, taxonomies, companies, relationships, reports, interviews, market data, media and SEO data.

Elementor owns layout, typography, visual hierarchy, templates, loops, reusable components and responsive presentation.

The migration layer owns URL mapping, redirects, content mapping, media verification and SEO preservation.

The prototype remains a design/information-architecture reference and is not a production content source.
