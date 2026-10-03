# Company CPT + Company Archive + Single Company — Elementor Build Blueprint

## Objective

Build the production company directory as a structured WordPress content system, not a collection of manually designed pages.

The system consists of:
1. Company CPT
2. Company Archive
3. Single Company template
4. Article → Company relationship
5. Company → Related Articles query

Core rule: Company data belongs to WordPress/ACF. Elementor only presents it.

---

## 1. Company CPT

Post type:

`company`

Rewrite:

`/companies/`

Supports:
- title
- editor
- thumbnail
- revisions

Native WordPress title:
- Persian company name.

ACF fields:
- `company_name_en`
- `company_logo`
- `country`
- `city`
- `activity`
- `founded`
- `capacity`
- `website`
- `contact`
- `company_description`

Optional later fields should only be added when there is a real editorial requirement.

---

## 2. Company Data Rules

The Company CPT is the single source of truth for company information.

Do not repeat the same company facts manually inside articles.

Examples:
- company name;
- English name;
- logo;
- location;
- activity;
- capacity;
- website.

Articles should reference companies through the approved relationship field.

---

## 3. Article → Company Relationship

Preferred field:

ACF Relationship / Post Object

Field:
`related_companies`

Rules:
- multiple companies allowed;
- only Company CPT entries;
- relationship stored on the article;
- a company can be related to many articles.

Example:

Article A:
- Company X
- Company Y

Article B:
- Company X

Company X archive/single page should therefore show Article A and Article B through an explicit relationship query.

Do not use:
- company-name text search;
- title matching;
- manual article ID lists.

---

## 4. Relationship Fallback

If Elementor/ACF cannot reliably query the Relationship field for reverse company queries, use one dedicated non-hierarchical taxonomy:

`company`

Rules:
- one system only;
- migrate article/company relationships into that system;
- use taxonomy queries for related articles.

Do not maintain both Relationship and company taxonomy as competing sources of truth.

---

## 5. Company Archive

URL:

`/companies/`

Theme Builder:
Elementor → Theme Builder → Archive → Company Archive.

Structure:

1. Archive Header
2. Company Directory Grid
3. Pagination if required
4. Newsletter
5. Footer

---

## 6. Company Archive Header

Title:

Dynamic archive title.

Suggested editorial title:
شرکت‌ها

Optional description:
A short explanation of the company directory.

Keep the header compact and professional.

Do not turn the company directory into a generic corporate logo wall.

---

## 7. Company Directory Loop

Use Elementor Loop Grid.

Desktop:
- 4 columns.

Tablet:
- 2 columns.

Mobile:
- 1 column.

Company Card fields:
- Company Logo
- Persian Name
- English Name
- Activity
- City/Country
- Permalink

Optional:
- capacity if reliable and useful.

Do not display empty fields.

---

## 8. Company Card Design

Recommended visual hierarchy:

Logo
↓
Persian company name
↓
English company name
↓
Activity
↓
Location

Interaction:
- entire card or clear primary link opens the company profile;
- subtle hover state;
- no excessive shadow;
- no giant rounded container;
- no unnecessary icons.

Use the global Steel World Review design system.

---

## 9. Company Search / Filtering

Phase 1:
- standard WordPress search may be used only if it reliably searches Company CPT.

Phase 2, if the directory becomes large:
- add structured filtering by country/city/activity.

Do not build complex filters before the real company dataset and requirements are known.

If filters are introduced:
- use real taxonomy/metadata;
- preserve crawlable company URLs;
- avoid making every filter combination indexable.

---

## 10. Single Company Template

Theme Builder:

Elementor → Theme Builder → Single → Company.

Display condition:

Include → Company → All.

Structure:

1. Company Header
2. Company Facts
3. Company Description
4. Contact / Website
5. Related Articles
6. Optional CTA/Newsletter
7. Footer

---

## 11. Company Header

Dynamic fields:

- Company Logo
- Post Title
- company_name_en
- city
- country
- activity

Suggested layout desktop:
- logo / identity area on the left;
- company name and key identity data on the right in RTL-aware layout.

For RTL Persian:
The visual order should remain intentional rather than blindly reversing every component.

---

## 12. Company Identity

Primary title:

Dynamic Post Title.

Secondary:

Dynamic `company_name_en`.

Use the Persian company name as the H1.

English name should not become a second H1.

---

## 13. Company Facts

Recommended facts:

- Activity
- Location
- Founded
- Capacity

Dynamic ACF fields:
- activity
- city
- country
- founded
- capacity

Display only populated values.

Suggested desktop:
- 4 fact blocks/cards.

Tablet:
- 2 columns.

Mobile:
- 1 or 2 columns depending on width.

Do not invent values when a field is empty.

---

## 14. Company Description

Source:

`company_description`

If the Company CPT editor contains the primary long-form description instead, establish one authoritative source and avoid duplicating the same description in two fields.

Recommended approach:
- structured short facts → ACF;
- long-form editorial description → Post Content.

If `company_description` remains the approved source, keep it consistent and do not create a second competing description.

---

## 15. Website / Contact

Fields:
- website
- contact

Website:
- render only when populated;
- use a clear external-link action;
- do not expose an empty button.

Contact:
- render only when populated;
- keep formatting consistent.

Do not assume that every company has public contact information.

---

## 16. Related Articles

This is one of the most important parts of the company profile.

Query:

Current Company → Articles explicitly related to that Company.

Preferred source:
ACF `related_companies` reverse relationship.

Fallback:
dedicated `company` taxonomy.

Sort:
Newest first.

Exclude:
No current Company post exists in the article query, so no self-exclusion is needed.

Do not search article titles for the company name.

---

## 17. Related Article Layout

Desktop:
- 3 cards.

Tablet:
- 2 cards.

Mobile:
- 1 card.

Use existing:
- Standard News Card;
- Analysis Card;
- Report Card;
- Interview Card;
- Technology Card.

The card should preserve the article's actual content type.

Example:
A company profile may contain:
- 2 news stories;
- 1 analysis;
- 1 interview.

Do not force every related article into a generic news card if the existing component system can preserve type.

---

## 18. Related Articles Empty State

If no related articles exist:

Show a restrained message such as:
`هنوز مطلب مرتبطی برای این شرکت منتشر نشده است.`

Optionally link to latest news.

Do not display a large empty section.

---

## 19. Company Taxonomy / Metadata Strategy

Do not create country, city and activity taxonomies unless filtering becomes a real requirement.

Initial approach:
- Company CPT;
- ACF structured fields;
- explicit article/company relationship.

If later filtering is required:
- promote stable filter dimensions into taxonomies;
- preserve existing company URLs;
- do not rebuild the whole Company CPT.

---

## 20. Company URL Rules

Directory:

`/companies/`

Single:

`/companies/{slug}/`

Slug source:
native Company CPT slug.

Rules:
- preserve existing production company URLs where they exist;
- do not change slugs during routine design work;
- if a slug must change, create a 301 redirect;
- verify canonical URL after migration.

---

## 21. SEO

Company pages should have:
- one H1;
- unique title/meta where needed;
- canonical URL;
- indexability only when the profile contains useful substantive content;
- meaningful company logo alt text;
- appropriate structured data only through the approved SEO/schema system.

Do not create duplicate schema systems.

Thin placeholder company profiles should not automatically become indexable simply because the CPT exists.

---

## 22. Company Archive SEO

Archive:
`/companies/`

Requirements:
- useful title;
- useful description;
- canonical;
- intentional indexability;
- crawlable company links.

Company cards must link directly to canonical single-company URLs.

---

## 23. Responsive Blueprint

### 1440px
- max width 1320px;
- company grid 4 columns;
- single-company header has strong identity hierarchy;
- facts in 4 columns.

### 1280px
- 4-column archive if card width remains comfortable;
- reduce gaps where necessary.

### 1024px
- 2–4 columns depending on actual card width;
- facts can move to 2 columns.

### 768px
- company archive 2 columns;
- company header stacks if required;
- related articles 2 columns.

### 480px
- company archive 1 column;
- compact identity header;
- facts 1–2 columns;
- related articles 1 column.

### 390px
- verify long company names;
- English name wraps safely;
- logo does not overflow.

### 360px
- no horizontal overflow;
- buttons/links remain tappable;
- facts remain readable.

---

## 24. Performance

- Use responsive logo/image sizes.
- Do not load full-resolution company logos into cards.
- Lazy-load below-fold logos/images.
- Avoid unnecessary JavaScript filters.
- Reuse Company Card and article Loop templates.
- Keep company pages lightweight.
- Do not load market dashboard scripts on company pages.

---

## 25. Accessibility

- Company Persian name is the H1.
- English name is not a second H1.
- Company logo has meaningful alt text.
- All company cards have clear accessible links.
- Facts are understandable without color.
- External website action is clearly labeled.
- Keyboard focus is visible.

---

## 26. Elementor Implementation Order

### Company CPT / Data
1. Register Company CPT.
2. Configure title/editor/thumbnail/revisions.
3. Create approved ACF field group.
4. Configure `related_companies`.
5. Create test companies.
6. Create test article relationships.
7. Verify reverse relationship query.

### Company Archive
8. Create Company Archive template.
9. Build archive header.
10. Build Company Card Loop.
11. Configure 4/2/1 responsive grid.
12. Add pagination if needed.
13. Test empty state.

### Single Company
14. Create Single Company template.
15. Build identity header.
16. Add company facts.
17. Add description.
18. Add website/contact.
19. Add related articles Loop Grid.
20. Add empty state.
21. Add Newsletter if approved.

### QA
22. Test 3–5 companies with different data completeness.
23. Test company with no articles.
24. Test company with many articles.
25. Test article linked to multiple companies.
26. Test responsive widths.
27. Test SEO/canonical.
28. Test performance and accessibility.

---

## 27. Test Dataset Requirements

Before production migration, create at least:

Company A:
- complete data;
- logo;
- multiple related articles.

Company B:
- partial data;
- no website;
- some missing facts.

Company C:
- complete data;
- multiple related articles;
- article types including news + analysis/interview.

Also test:
- one article related to two companies;
- one company with zero articles.

This catches conditional-field and relationship problems before migration.

---

## 28. Acceptance Checklist

### CPT
- [ ] Company CPT exists.
- [ ] URL is /companies/.
- [ ] Title/editor/thumbnail/revisions enabled.
- [ ] ACF fields work.
- [ ] No duplicate data sources.

### Relationship
- [ ] Article → Company works.
- [ ] Multiple companies per article work.
- [ ] Company → Related Articles reverse query works.
- [ ] No text-search relationship is used.
- [ ] Fallback taxonomy is used only if necessary.

### Archive
- [ ] /companies/ works.
- [ ] Dynamic archive title works.
- [ ] Company Loop Grid works.
- [ ] 4/2/1 responsive behavior works.
- [ ] Empty fields are hidden.
- [ ] Company links use canonical URLs.

### Single Company
- [ ] Persian name is H1.
- [ ] English name is secondary.
- [ ] Logo renders correctly.
- [ ] Facts are dynamic.
- [ ] Description renders correctly.
- [ ] Website/contact are conditional.
- [ ] Related articles are explicit and newest-first.
- [ ] Empty related state works.

### SEO / Performance
- [ ] Canonical is correct.
- [ ] Indexability is intentional.
- [ ] Logo/image alt text works.
- [ ] No duplicate schema.
- [ ] Responsive images are used.
- [ ] No unnecessary JS.
- [ ] No horizontal overflow.
- [ ] No console errors.

## Final Principle

The Company section is a structured database layer for the publication, not a collection of static Elementor pages.

WordPress/ACF owns company data and relationships.

Elementor owns:
- layout;
- identity presentation;
- facts;
- reusable company cards;
- related article presentation;
- responsive behavior.

The Company system must remain maintainable when the directory grows from a few profiles to hundreds.
