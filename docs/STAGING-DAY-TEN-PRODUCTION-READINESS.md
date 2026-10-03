# Staging Day-Ten — Search, 404, SEO, Migration QA, and Production Readiness

## Goal

Day Ten is the final staging-readiness layer before production migration/cutover.

This stage does not introduce a new visual system. It verifies that the complete WordPress + Elementor architecture is usable, crawlable, recoverable, and ready for controlled migration.

The focus is:

- Search.
- 404.
- SEO.
- URL integrity.
- Redirects.
- Content integrity.
- Media integrity.
- Performance.
- Accessibility.
- Responsive QA.
- Migration safety.
- Rollback readiness.
- Final staging acceptance.

---

# 1. Day-Ten Deliverables

By the end of Day Ten:

1. Search Results template is verified.
2. 404 template is verified.
3. Search behavior is documented.
4. Indexability rules are confirmed.
5. Canonicals are verified.
6. Metadata is verified.
7. Redirect inventory is complete.
8. Internal links are checked.
9. Media integrity is checked.
10. Sitemap/robots behavior is verified.
11. Structured data is reviewed.
12. Performance baseline is recorded.
13. Responsive QA is completed.
14. Accessibility baseline is completed.
15. Migration checklist is completed.
16. Rollback procedure is documented.
17. Production Readiness Gate passes.

---

# 2. Search Results

Search is a utility surface and must remain separate from taxonomy archives.

Primary URL:

`/search/?s={query}`

The final WordPress search behavior must use the approved search query and Search Results Theme Builder template.

---

# 3. Search Query

Minimum searchable content:

- Post title.
- Post content.
- Excerpt.

Where useful, search may also include:

- Company names.
- Taxonomy terms.
- Other approved structured fields.

Do not search every database field by default.

Search should return relevant editorial content without exposing drafts/private content.

---

# 4. Search Results Layout

Recommended structure:

1. Global Header.
2. Breadcrumb or utility context.
3. Search heading.
4. Search form.
5. Result count/context where useful.
6. Result Loop Grid/list.
7. Pagination.
8. Empty state.
9. Footer.

Search cards should reuse existing editorial card components.

Do not create a separate visual language for search.

---

# 5. Search Empty State

If no results exist:

Display a clear message.

Example:

نتیجه‌ای برای جستجوی شما پیدا نشد.

Optional actions:

- Try another search.
- Latest news.
- Main categories.

Do not display an empty Loop Grid.

---

# 6. Search Pagination

Use real WordPress pagination.

Requirements:

- Query preserved across pages.
- Accessible controls.
- Crawlable URLs where appropriate.
- No JavaScript-only navigation.

---

# 7. Search SEO

Search result pages should normally use:

`noindex, follow`

unless a documented SEO strategy intentionally requires otherwise.

Do not allow arbitrary user-generated search queries to create thousands of indexable URLs.

Canonical behavior must remain consistent with the selected SEO plugin.

---

# 8. 404 Template

Create/verify:

**Theme Builder → 404**

The 404 page must return an actual HTTP 404 status.

Recommended content:

- Clear error message.
- Short explanation.
- Link to homepage.
- Search action.
- Latest news or useful navigation.

Example message:

صفحه موردنظر پیدا نشد.

Do not redirect every missing URL to the homepage.

---

# 9. 404 Recovery Paths

Recommended actions:

1. Homepage.
2. Search.
3. Latest News.
4. Main editorial categories.

The 404 page should help users recover without creating another dead end.

---

# 10. URL Inventory

Create a final staging URL inventory containing at least:

- Homepage.
- Main navigation URLs.
- Article URLs.
- Category/archive URLs.
- Technology topic URLs.
- Company archive.
- Company single URLs.
- Market page.
- Search.
- 404.
- Static pages.
- Important media/PDF URLs.

For each important URL record:

- Old URL.
- Staging URL.
- Final production URL.
- HTTP status.
- Canonical.
- Redirect requirement.
- Notes.

---

# 11. Redirect Map

Every changed production URL must have an explicit redirect decision.

Possible states:

- Preserve.
- 301 to new URL.
- Intentionally removed with appropriate handling.

Rules:

- Prefer one-hop redirects.
- Avoid redirect chains.
- Avoid redirect loops.
- Do not redirect unrelated URLs merely to avoid 404s.

Priority URLs:

- High-traffic articles.
- Indexed articles.
- Existing category pages.
- Company pages.
- Important reports/PDFs.
- URLs with external backlinks.

---

# 12. Canonical QA

Check:

- Homepage canonical points to root.
- Article canonical points to final article URL.
- Archive canonical points to archive URL.
- Technology topic canonical points to topic URL.
- Company canonical points to company URL.
- Market canonical points to `/market/`.
- Search is handled according to noindex/search policy.

No canonical should point to the staging domain in production.

---

# 13. Staging Indexability

While staging is public:

- Use appropriate noindex protection.
- Prevent staging from competing with production.
- Do not accidentally submit staging URLs to search engines.

Before production cutover:

- Confirm production indexability settings.
- Remove staging-only noindex when appropriate.
- Verify canonical host.
- Verify sitemap host.

Never treat a staging noindex setting as a substitute for migration QA.

---

# 14. Robots.txt

Verify production robots behavior.

Check:

- Important site content is crawlable.
- CSS/JS resources required for rendering are not unnecessarily blocked.
- Staging restrictions do not accidentally carry into production.
- Search URLs are handled according to SEO policy.

Do not block entire sections without understanding the SEO impact.

---

# 15. XML Sitemap

Verify sitemap generation through the selected SEO system.

Check:

- Production host.
- Correct canonical URLs.
- No staging URLs.
- No drafts/private content.
- Important articles included.
- Intended archives included/excluded.
- Company URLs included when indexable.
- Market URLs included only when useful and indexable.

Do not create a second competing sitemap system without a documented reason.

---

# 16. Metadata QA

For representative pages verify:

### Homepage
- Title.
- Meta description.
- Canonical.
- OG title.
- OG description.
- OG image.

### Article
- Title.
- Meta description.
- Canonical.
- OG image.
- Article metadata.

### Archive
- Title.
- Description.
- Canonical.
- Indexability.

### Company
- Title.
- Description.
- Canonical.
- OG image where appropriate.

### Market
- Title.
- Description.
- Canonical.

Metadata must come from the approved SEO system, not duplicated Elementor widgets.

---

# 17. Structured Data QA

Inspect representative pages for:

- Organization/site information.
- Breadcrumbs.
- Article schema where appropriate.
- Company/other structured data only when genuinely supported.

Check for:

- Duplicate schema.
- Conflicting schema.
- Incorrect URLs.
- Staging domain references.
- Missing required properties where the selected schema implementation expects them.

Do not add schema simply to increase the number of schema types.

---

# 18. Internal Links

Check high-value navigation paths:

Homepage → Archive

Homepage → Article

Homepage → Company

Homepage → Market

Article → Company

Company → Article

Article → Related Article

Technology → Topic

Topic → Article

Search → Article

404 → Homepage/Search

No internal link should point to an obsolete staging URL or an abandoned production path.

---

# 19. Media Integrity

Verify:

- Featured images load.
- Inline article images load.
- Company logos load.
- Interview portraits load.
- Report PDFs load.
- No broken image URLs remain.
- No staging-domain media URLs remain in production.

Check representative media across old and newly migrated content.

Do not assume a successful page import means all media is valid.

---

# 20. PDF and Report Integrity

For reports:

- PDF URL resolves.
- Download action works.
- File is accessible.
- File name is sensible.
- No staging URL is embedded in the final link.
- Old PDF URLs have redirects when required.

Do not silently replace missing reports with empty download buttons.

---

# 21. Content Integrity Audit

Compare a representative sample between source and staging.

Check:

- Title.
- Slug.
- Excerpt.
- Body content.
- Author.
- Publication date.
- Featured image.
- Categories/content_type.
- Technology topic.
- Tags.
- Company relationships.
- Interview metadata.
- Report metadata.

Prioritize:

- High-traffic content.
- Recent content.
- Important evergreen content.
- Reports.
- Interviews.
- Company-related content.

---

# 22. URL Preservation Test

Select a representative set of existing production URLs.

For each:

1. Open old URL.
2. Confirm intended redirect/preservation behavior.
3. Confirm final status.
4. Confirm final content.
5. Confirm canonical.
6. Confirm no redirect chain.

Do not validate only the homepage.

---

# 23. Performance Baseline

Record a staging baseline for:

- Homepage.
- Representative article.
- Archive.
- Company page.
- Market page.
- Search.

Review:

- LCP.
- CLS.
- INP.
- Total page weight.
- Request count.
- Image payload.
- Font payload.
- JavaScript payload.

The exact threshold should account for hosting and final production caching/CDN configuration.

Do not optimize based on one synthetic test alone.

---

# 24. Performance Red Flags

Investigate:

- Large hero images.
- Eager loading of below-the-fold images.
- Duplicate Elementor assets.
- Heavy third-party scripts.
- Multiple chart libraries.
- Unnecessary animation.
- Large inline CSS/JS.
- Repeated database queries.
- Slow dynamic relationship queries.

Do not sacrifice editorial usability merely to reduce a single score.

---

# 25. Responsive Final QA

Test all primary templates at:

- 1440px.
- 1280px.
- 1024px.
- 768px.
- 480px.
- 390px.
- 360px.

Templates:

- Header.
- Footer.
- Homepage.
- Single Article.
- Archive.
- Technology Archive.
- Company Archive.
- Single Company.
- Market.
- Search.
- 404.

Check for:

- Overflow.
- Broken grids.
- Typography collisions.
- Incorrect image crops.
- Unusable buttons.
- Navigation failures.
- Table overflow.

---

# 26. Accessibility Final QA

Verify:

- One meaningful H1 per primary page.
- Logical heading hierarchy.
- Keyboard navigation.
- Visible focus states.
- Form labels.
- Link names.
- Image alt behavior.
- Color contrast.
- Non-color indicators.
- Accessible pagination.
- Accessible charts.
- Mobile menu keyboard behavior.

Do not treat automated accessibility scoring as the only QA method.

---

# 27. Plugin and Theme Baseline

Before production migration record:

- WordPress version.
- PHP version.
- Active theme.
- Elementor version.
- Elementor Pro version.
- SEO plugin/version.
- ACF/version if used.
- Security/caching/performance plugins.
- Other migration-critical plugins.

Confirm:

- No abandoned test plugin remains.
- No prototype-only dependency remains.
- No duplicate plugin provides the same critical function.
- License-dependent plugins are valid for production.

Do not migrate unnecessary staging-only plugins.

---

# 28. Elementor Production Check

Verify:

- Theme Builder conditions are correct.
- Global Colors are correct.
- Global Fonts are correct.
- Container widths are correct.
- Reusable components are used consistently.
- No page-specific hard-coded article content remains where dynamic content is expected.
- No obsolete templates override new templates.
- No duplicate Header/Footer templates are unintentionally active.
- CSS/JS customizations are documented.

Check Theme Builder display conditions carefully.

An incorrect condition can make a correct template appear broken.

---

# 29. Data Model Final Check

Verify the final architecture still follows:

WordPress data → Elementor presentation.

Confirm:

- Native posts contain article content.
- content_type controls editorial type.
- technology_topic controls technology topics.
- Company CPT contains company identity.
- related_companies contains explicit relationships.
- Market Item contains current market data.
- Market Entry contains historical data.
- Elementor does not become the database.

Remove any prototype-only data source that conflicts with this model.

---

# 30. Prototype Dependency Audit

Search the production implementation for prototype-only dependencies.

Potential red flags:

- Mock market values.
- Local TypeScript content arrays.
- Hard-coded article lists.
- Hard-coded company objects.
- Prototype image paths.
- Prototype-only routes.
- Static fake authors.
- Fake market trend arrays.

The final WordPress implementation must not depend on the prototype runtime.

---

# 31. Security and Admin Safety

Before cutover verify:

- Admin accounts are appropriate.
- Staging credentials are not reused insecurely.
- Debug mode is disabled in production.
- Error display is disabled in production.
- File permissions are appropriate.
- Unused admin/test accounts are removed or disabled.
- Staging-only integrations are disconnected.

Do not expose PHP warnings or debugging information to public visitors.

---

# 32. Backup and Rollback

Before migration:

Create and verify:

- Full database backup.
- Full files backup.
- Media backup.
- Configuration backup where required.

Record:

- Backup timestamp.
- Backup location.
- Restoration procedure.
- Responsible operator.

A rollback plan is not complete until restoration has been understood and, where practical, tested.

---

# 33. Cutover Sequence

Recommended order:

1. Freeze content changes when practical.
2. Take final production backup.
3. Record final production database/files state.
4. Complete final content delta migration.
5. Apply theme/Elementor production configuration.
6. Apply data model/plugins.
7. Apply redirects.
8. Verify canonical/SEO settings.
9. Verify sitemap/robots.
10. Clear relevant caches.
11. Test homepage.
12. Test representative articles.
13. Test archives.
14. Test companies.
15. Test market.
16. Test search.
17. Test 404.
18. Monitor errors.

Do not switch traffic before the critical-path smoke test passes.

---

# 34. Post-Cutover Smoke Test

Immediately after launch verify:

### Core
- [ ] Homepage loads.
- [ ] Header works.
- [ ] Footer works.
- [ ] Mobile menu works.
- [ ] Search works.

### Editorial
- [ ] Latest news works.
- [ ] Representative article works.
- [ ] Analysis works.
- [ ] Report download works.
- [ ] Interview works.
- [ ] Technology topic works.

### Company
- [ ] Company archive works.
- [ ] Company single works.
- [ ] Related article relationship works.

### Market
- [ ] Market page works.
- [ ] Current values display.
- [ ] Historical data displays where available.

### SEO
- [ ] Canonicals correct.
- [ ] Sitemap correct.
- [ ] Robots correct.
- [ ] Production metadata correct.

### Errors
- [ ] No critical PHP errors.
- [ ] No critical JavaScript errors.
- [ ] No broken CSS/assets.

---

# 35. Monitoring After Launch

Monitor at minimum:

- 404 volume.
- PHP errors.
- JavaScript errors.
- Server response time.
- Critical plugin errors.
- Search Console coverage/indexing.
- Sitemap processing.
- High-value URL accessibility.

Priority should be given to:

- Homepage.
- High-traffic articles.
- Company pages.
- Market page.
- Important reports.

Do not immediately change design based on isolated post-launch anomalies without identifying the underlying cause.

---

# 36. Final Production Readiness Gate

## Content

- [ ] Representative content migrated correctly.
- [ ] Authors correct.
- [ ] Taxonomies correct.
- [ ] Tags correct.
- [ ] Companies correct.
- [ ] Company relationships correct.
- [ ] Interview metadata correct.
- [ ] Report metadata correct.
- [ ] Media correct.

## Templates

- [ ] Header.
- [ ] Footer.
- [ ] Homepage.
- [ ] Single Article.
- [ ] Archives.
- [ ] Technology Archive.
- [ ] Company Archive.
- [ ] Single Company.
- [ ] Market.
- [ ] Search.
- [ ] 404.

## SEO

- [ ] Canonicals.
- [ ] Metadata.
- [ ] Robots.
- [ ] Sitemap.
- [ ] Redirects.
- [ ] Structured data.
- [ ] Staging URLs removed.

## Technical

- [ ] Performance baseline acceptable.
- [ ] Responsive QA complete.
- [ ] Accessibility baseline complete.
- [ ] No critical console errors.
- [ ] No critical PHP errors.
- [ ] Production plugins verified.
- [ ] Backup verified.
- [ ] Rollback plan verified.

## Launch

- [ ] Content freeze understood.
- [ ] Final delta migration understood.
- [ ] Cutover sequence documented.
- [ ] Smoke test ready.
- [ ] Monitoring ready.

---

# 37. Definition of Day Ten Done

Day Ten is complete when the staging site can be treated as a production candidate rather than a prototype.

The decisive test is:

**A representative user journey can move from homepage → article/archive/company/market → search → back to useful content without broken URLs, incorrect data, duplicate SEO signals, layout failures, or prototype dependencies.**

At this point, further work should be treated as QA, content migration, polish, or issue resolution rather than architectural experimentation.

---

# 38. Final Project Principle

The production system is:

**WordPress = content and data source**

**ACF/CPT/Taxonomies = structured content model**

**Elementor = presentation and templates**

**SEO plugin = metadata/canonical/indexing/schema authority where applicable**

**Migration map = URL preservation authority**

**Backups + rollback = operational safety**

The prototype is a visual and structural reference, not the production database.
