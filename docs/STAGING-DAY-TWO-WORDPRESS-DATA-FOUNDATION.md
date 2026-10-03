# Staging Day-Two — WordPress Data Foundation

## Goal

Day Two converts the approved architecture into a working WordPress data model on staging.

The objective is to prove that real WordPress records can drive the future Elementor templates dynamically before building the visual system.

Do not migrate the entire production database yet. Start with a controlled test dataset.

---

## 1. Day-Two Deliverables

By the end of Day Two:

1. WordPress base settings verified.
2. Required plugins verified.
3. Editorial taxonomies created.
4. Technology topics created.
5. Company CPT working.
6. ACF fields configured.
7. Article-to-company relationship working.
8. Market data structures working.
9. Test dataset loaded.
10. Dynamic queries verified.
11. No hard-coded prototype content used.
12. Data Foundation Acceptance Gate passed.

---

## 2. WordPress Base Configuration

Verify:

- Site language.
- RTL.
- Timezone.
- Date/time format.
- Permalink structure.
- Media settings.
- User roles.
- Reading settings.
- Discussion settings where relevant.
- Search-engine visibility remains disabled for staging.
- Site URL/home URL point to staging.
- Admin email and notification behavior are safe for staging.

Do not change production permalink rules yet unless the migration map explicitly requires it.

---

## 3. Plugin Baseline

Verify only the plugins required for the production architecture.

Expected core stack:

- Elementor.
- Elementor Pro.
- ACF or approved custom-field solution.
- SEO plugin already selected for production.
- Required performance/cache tooling.
- Any plugin required for forms or media.

Do not install unnecessary plugins merely to reproduce the prototype.

Every additional plugin should have a clear production purpose.

---

# 4. Editorial Taxonomy

Create:

## content_type

Terms:

- news
- analysis
- report
- outlook
- interviews
- technology

Use human-readable Persian labels while keeping stable machine slugs.

Do not create duplicate taxonomies for the same editorial concept.

### Test

Create at least one test post for each content type and verify:

- Term assignment.
- Query filtering.
- Archive URL behavior.
- Elementor dynamic access.

---

# 5. Technology Topic Taxonomy

Create:

## technology_topic

Terms:

- production
- metallurgy
- automation
- equipment
- energy
- decarbonization

A technology article may have:

- content_type = technology
- technology_topic = one or more topics

Do not make every technology topic a separate post type.

---

# 6. Editorial Custom Fields

Configure the agreed fields.

## Core

### reading_time
Type: Number

### short_excerpt
Type: Textarea

Use native WordPress excerpt when sufficient. Do not create duplicate fields without a reason.

### custom_image_alt
Type: Text

Use only when the normal media metadata is insufficient.

### source_url
Type: URL

Only show when an actual source exists.

---

# 7. Company Relationship

## related_companies

Type:

ACF Relationship/Post Object, multiple values.

Target:

Company CPT only.

The relationship must be attached to the article/editorial content.

### Test

Create:

- Company A
- Company B
- Article 1 → Company A
- Article 2 → Company A + Company B
- Article 3 → Company B

Then verify:

Company A returns Article 1 and Article 2.

Company B returns Article 2 and Article 3.

This test is mandatory before importing real company relationships.

---

# 8. Company CPT

Create:

## Post Type

Slug:

company

Rewrite:

/companies/

Supports:

- Title
- Editor
- Featured Image
- Revisions

Do not expose unnecessary WordPress features.

---

# 9. Company Fields

Configure:

- company_name_en
- company_logo
- country
- city
- activity
- founded
- capacity
- website
- contact
- company_description

### Data ownership

Persian company name:

Native WordPress title.

English name:

ACF field.

Company logo:

ACF/image or featured image according to the final component strategy.

Description:

Prefer native editor content when it is the primary long-form company description.

Do not store the same information in multiple fields.

---

# 10. Company Test Dataset

Create at least three test companies.

Each should contain different combinations of:

- Logo.
- English name.
- Location.
- Activity.
- Capacity.
- Website.
- Description.

Then test:

- Company archive query.
- Single company dynamic fields.
- Related article query.
- Empty company relationship.

The empty state must work without PHP errors or broken Elementor layouts.

---

# 11. Interview Fields

Configure:

- interviewee_name
- interviewee_position
- interviewee_company
- interviewee_portrait

Create one test interview article.

Verify:

- Normal articles do not display empty interview blocks.
- Interview articles display interview metadata.
- Portrait is optional.
- Missing optional fields do not create broken spacing.

---

# 12. Report Fields

Configure:

- report_issue
- report_pages
- report_format
- report_pdf
- report_download_url

Create one test report.

Verify:

- Report metadata appears only when populated.
- PDF link works.
- Online report works without PDF.
- Empty download fields do not create empty buttons.

---

# 13. Market Data Foundation

Create two structures:

## Market Item

Fields:

- name_en
- value
- decimals
- unit
- basis
- change
- change_percent
- trend
- updated_at
- source
- display_order

## Market Entry

Fields:

- market_item
- date
- value

The relationship is:

Market Item → multiple Market Entries.

---

# 14. Market Test Data

Create three test market items.

Use clearly synthetic staging values.

For example:

- Test Billet
- Test HRC
- Test Iron Ore

Add several historical entries to each.

Verify:

- Current value query.
- Historical entries ordered by date.
- Trend data can be retrieved.
- Source and update time display.
- Missing history produces a clean fallback.

Do not use prototype values as real market data.

---

# 15. Dynamic Query Tests

Before Elementor design begins, prove the data can be queried correctly.

Test:

### Latest News
Posts where:

content_type = news

Ordered by publication date descending.

### Analysis
content_type = analysis

### Reports
content_type = report

### Interviews
content_type = interviews

### Technology
content_type = technology

Filtered by technology_topic where required.

### Company Articles
Articles explicitly related to selected Company CPT.

### Market
Market Item records ordered by display_order.

### Historical Market
Market Entry records ordered by date descending.

---

# 16. Duplicate and Conflict Rules

Prevent these situations:

- Same article assigned to multiple competing editorial taxonomies unnecessarily.
- Company stored both as free text and relationship without a reason.
- Market price hard-coded into Elementor.
- Technology topic duplicated as both taxonomy and separate post type.
- Same company created twice under different names.
- Same report represented by multiple unrelated records.

When a piece of data has one clear owner, keep one source of truth.

---

# 17. Test Dataset Matrix

Use a controlled dataset approximately like this:

| Record | Purpose |
|---|---|
| 3 News posts | Latest News |
| 2 Analysis posts | Analysis |
| 2 Report posts | Reports |
| 1 Interview | Interview template |
| 3 Technology posts | Technology/topic |
| 3 Companies | Company system |
| 6+ Company relationships | Reverse relationship test |
| 3 Market Items | Market cards |
| 5+ Market Entries/item | Historical data |
| 1 Empty Company | Empty state |
| 1 Article with missing optional fields | Conditional rendering |

This dataset is enough to expose most architecture mistakes before large migration.

---

# 18. Elementor Readiness Test

Before starting visual construction, verify that Elementor can dynamically access:

- Post title.
- Excerpt.
- Featured image.
- Author.
- Date.
- Content type.
- Technology topic.
- Reading time.
- Interview fields.
- Report fields.
- Company fields.
- Related companies.
- Related company articles.
- Market values.
- Market history.

If any required field cannot be reliably exposed to Elementor, solve the data/query problem now.

Do not work around a broken data model with hard-coded Elementor content.

---

# 19. Performance and Maintainability Rules

During data setup:

- Avoid unnecessary plugins.
- Avoid duplicate custom fields.
- Avoid unnecessary database queries.
- Keep relationships explicit.
- Use stable slugs.
- Keep machine names in English.
- Keep user-facing labels in Persian.
- Document custom code.
- Do not modify third-party plugin core files.

Any custom PHP required for reverse relationships or specialized queries should be isolated and documented.

---

# 20. Data Foundation Acceptance Gate

Do not start the main Elementor build until all are true:

### WordPress
- [ ] RTL works.
- [ ] Staging remains protected.
- [ ] Permalink strategy is known.
- [ ] Required plugins work.

### Editorial
- [ ] content_type works.
- [ ] technology_topic works.
- [ ] Test posts query correctly.

### Companies
- [ ] Company CPT works.
- [ ] Company fields work.
- [ ] Article → Company works.
- [ ] Company → Articles works.
- [ ] Empty relationship works.

### Interviews
- [ ] Fields work.
- [ ] Conditional display works.

### Reports
- [ ] Fields work.
- [ ] PDF/online behavior works.

### Market
- [ ] Market Item works.
- [ ] Market Entry works.
- [ ] Historical query works.
- [ ] Source/update metadata works.

### Elementor
- [ ] Required dynamic fields are accessible.
- [ ] Required relationships can be queried.
- [ ] No hard-coded prototype data is required.

---

# 21. What Comes Next

After this gate, the project moves into the first visual implementation stage:

1. Elementor Global Colors.
2. Elementor Global Typography.
3. Container/spacing system.
4. Header.
5. Footer.
6. Reusable Loop Item templates.
7. Article Meta components.
8. Breadcrumbs.
9. Section headers.

Only after these are stable should Single Article and Archives be built.

---

# Definition of Day Two Done

Day Two is complete when the WordPress installation can represent the site's real editorial structure without relying on the prototype.

At that point:

**WordPress owns the data.**

**Elementor is ready to present the data.**

**The prototype no longer needs to provide production content.**
