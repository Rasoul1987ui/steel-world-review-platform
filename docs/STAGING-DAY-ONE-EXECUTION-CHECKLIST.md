# Staging Day-One Execution Checklist

## Goal

This is the first practical execution checklist for moving from the prototype/documentation phase into the real WordPress staging build.

The objective of Day One is **not** to start designing the homepage.

The objective is to establish a safe, measurable staging environment and produce the source inventory required for migration.

---

## 1. Day-One Deliverables

By the end of Day One, these outputs should exist:

1. Working staging clone.
2. Verified backup/rollback point.
3. Production technical snapshot.
4. URL inventory.
5. Content inventory.
6. Taxonomy inventory.
7. Author inventory.
8. Media inventory.
9. Current navigation map.
10. Existing redirect inventory.
11. Existing SEO/indexability snapshot.
12. Migration mapping sheet.
13. List of content that needs manual review.
14. Staging acceptance gate passed.

Do not begin large-scale Elementor construction until these are available.

---

# Phase 0 — Safety

## 2. Production Backup

Before any migration work:

- Full database backup.
- Full WordPress files backup.
- Confirm backup files are readable/restorable.
- Record backup timestamp.
- Record current WordPress version.
- Record PHP version.
- Record active theme.
- Record active plugins and versions.
- Record Elementor/Elementor Pro versions.
- Record PHP memory limit and relevant server limits.

### Acceptance

A rollback point exists and its location is known.

---

# Phase 1 — Create Staging

## 3. Clone Production

Create a staging clone from production.

Recommended structure:

- Production remains untouched.
- Staging has its own database.
- Staging has its own URL/subdomain.
- Staging has its own cache configuration.
- Staging is clearly identifiable in the WordPress admin.

Do not begin the redesign by deleting the existing theme or plugins.

First create a faithful working clone.

---

## 4. Protect Staging

Immediately after cloning:

### Search protection

Enable appropriate:

- WordPress search-engine discouragement.
- noindex controls.
- robots protection where appropriate.
- Password protection if available.

### External side-effect protection

Check:

- Contact forms.
- Gravity Forms.
- SMTP.
- Newsletter integrations.
- Analytics.
- Search Console.
- Social integrations.
- Payment gateways.
- Webhooks.
- API integrations.

Staging must not accidentally send real production emails or trigger production actions.

---

## 5. Verify Staging

Test:

- Homepage.
- One article.
- One category/archive.
- Search.
- Media.
- Admin login.
- Elementor editor.
- Forms where safe.
- Internal links.

Record any issue caused by cloning before continuing.

### Acceptance Gate A

Staging behaves sufficiently like production to use as the migration workspace.

---

# Phase 2 — Production Inventory

## 6. URL Inventory

Create a complete URL list from multiple sources where available:

1. XML sitemap.
2. WordPress content.
3. Existing navigation.
4. Google Search Console export.
5. Analytics/top landing pages if available.
6. Existing redirect rules.
7. Manual crawl.

For each URL record:

| Field | Purpose |
|---|---|
| Current URL | Existing production URL |
| Content type | Post/page/archive/company/etc. |
| Title | Current title |
| Status | 200/301/404/etc. |
| New URL | Planned staging/production URL |
| Keep URL? | Yes/No |
| Redirect needed? | Yes/No |
| Notes | Manual review |

Do not invent new URLs simply because the prototype uses a cleaner structure.

The live URL structure remains the starting point.

---

## 7. Content Inventory

Export/count:

- Posts.
- Pages.
- Categories.
- Tags.
- Authors.
- Media.
- Featured images.
- PDFs.
- Reports.
- Interviews.
- Company-related content.

Record both **count** and **sample records**.

The objective is to make it possible to answer:

> Did we migrate everything that mattered?

---

## 8. Taxonomy Mapping

Map current categories to the new content model.

Example:

| Current | New |
|---|---|
| Existing news category | content_type = news |
| Existing analysis category | content_type = analysis |
| Existing report category | content_type = report |
| Existing interview category | content_type = interviews |
| Existing technology category | content_type = technology + technology_topic |

Do not delete legacy categories until their URL/SEO implications have been reviewed.

---

## 9. Author Inventory

Record:

- Author ID.
- Display name.
- Login.
- Email where operationally required.
- Article count.
- Avatar/profile information.
- Existing author URL.

Prefer preserving WordPress users rather than creating duplicate authors during migration.

---

# Phase 3 — Company Discovery

## 10. Identify Company Entities

Before creating the Company CPT, identify how companies currently appear in the content.

Look for:

- Company names.
- Company profile pages.
- Company categories/tags.
- Company mentions.
- Existing company archives.
- Logos.
- Websites.
- Location information.

Create a provisional company table:

| Company | Existing URL | Profile exists | Articles | Logo | Needs review |
|---|---|---:|---:|---:|---:|

Do not automatically turn every company name mentioned in an article into a Company CPT.

Only identifiable company entities should become company records.

---

# Phase 4 — Media and Documents

## 11. Media Audit

Check:

- Featured images.
- Article inline images.
- Company logos.
- Author portraits.
- Report PDFs.
- Duplicate files.
- Missing files.
- Oversized images.
- Incorrect image metadata.

Record media that is referenced by high-value content but missing or broken.

Do not aggressively delete duplicates during Day One.

Cleanup comes after migration verification.

---

# Phase 5 — SEO Baseline

## 12. Capture Current SEO State

Before redesign, record a baseline for important URLs.

For sampled/high-value pages capture:

- URL.
- HTTP status.
- Title.
- Meta description.
- Canonical.
- H1.
- Robots directive.
- Featured image.
- Breadcrumbs.
- Schema types where visible.
- Internal links.
- Word count/content presence.

Also record:

- sitemap URL.
- robots.txt behavior.
- Search Console property.
- existing redirects.

This becomes the comparison baseline after migration.

---

# Phase 6 — Current Frontend Structure

## 13. Screenshot / Layout Inventory

Do not rebuild every old visual component.

Instead classify existing sections:

- Header.
- Main navigation.
- Hero.
- News listing.
- Featured content.
- Company sections.
- Technology sections.
- Reports.
- Interviews.
- Market/data sections.
- Newsletter.
- Footer.

For each section record:

- Current purpose.
- Data source.
- URL destination.
- Keep concept?
- Redesign?
- Remove?
- Replace with dynamic Elementor component?

The question is:

> What does this component do?

not:

> How do we copy the old design?

---

# Phase 7 — Build the Migration Map

## 14. Create One Source Mapping

The migration map should connect:

**Old content → New WordPress model → New presentation → Final URL**

Example:

| Existing | New data model | Elementor | URL |
|---|---|---|---|
| News post | WP Post + content_type=news | Single Post | Preserve |
| Analysis | WP Post + content_type=analysis | Single Post | Preserve |
| Interview | WP Post + interview fields | Single Post | Preserve |
| Report | WP Post + report fields | Single Post | Preserve |
| Company profile | Company CPT | Single Company | /companies/{slug}/ |
| Technology | WP Post + technology taxonomy | Technology Archive | /technology/{topic}/ |
| Market item | Market Item CPT | Market Card | /market/ |

This is the document that prevents content from getting lost between design and migration.

---

# Phase 8 — Do Not Build Yet

On Day One, do **not**:

- Delete the current theme.
- Delete old plugins.
- Delete old categories.
- Delete old posts.
- Change production URLs.
- Import the full content set into a new structure without mapping.
- Build the homepage as a static design.
- Hard-code prototype content.
- Copy mock market values.
- Replace production before QA.

---

# Phase 9 — Staging Acceptance Gate

Before moving to actual Elementor implementation, confirm:

### Environment
- [ ] Staging clone works.
- [ ] Admin works.
- [ ] Elementor works.
- [ ] Backup exists.
- [ ] Rollback is understood.
- [ ] Staging is noindex/password protected.

### Inventory
- [ ] URL inventory exists.
- [ ] Content counts recorded.
- [ ] Taxonomies recorded.
- [ ] Authors recorded.
- [ ] Media/PDF inventory started.
- [ ] Company entities identified.
- [ ] Existing redirects recorded.

### SEO
- [ ] Sitemap captured.
- [ ] Robots behavior captured.
- [ ] Sample metadata captured.
- [ ] Important URLs identified.
- [ ] Current canonical behavior captured.

### Architecture
- [ ] Content model confirmed.
- [ ] Company relationship strategy confirmed.
- [ ] Market data model confirmed.
- [ ] Prototype-to-WP mapping confirmed.

Only after all of these pass should Phase 2/3 of the implementation begin.

---

# Day-Two Starting Point

Once the Day-One gate passes, the next sequence is:

1. Install/verify required production plugins on staging.
2. Configure WordPress base settings.
3. Configure the content_type taxonomy.
4. Configure technology_topic.
5. Create Company CPT.
6. Configure ACF fields.
7. Configure company relationships.
8. Create Market Item/Entry structures.
9. Load a small controlled test dataset.
10. Verify dynamic queries.
11. Then start the Elementor global system.

The first real Elementor build should be **Global Settings → Header/Footer → Loops**, not the homepage.

---

# Definition of Day One Done

Day One is complete when the team can safely answer:

- What content exists?
- What URLs exist?
- What must keep its URL?
- What needs a redirect?
- What entities become Companies?
- What fields need migration?
- What SEO elements must be preserved?
- What data belongs in WordPress?
- What belongs in Elementor?
- Can we roll back if something goes wrong?

If any of these answers are unknown, continue inventory instead of starting the redesign.
