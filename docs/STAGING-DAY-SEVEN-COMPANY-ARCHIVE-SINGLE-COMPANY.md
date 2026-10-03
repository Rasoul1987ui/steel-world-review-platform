# Staging Day-Seven — Company Archive and Single Company

## Goal

Day Seven builds the company layer of the production WordPress + Elementor architecture.

The Company CPT is the source of truth for company identity and profile information. Elementor controls presentation. Editorial relationships are explicit and must not be inferred by text search.

This stage delivers:

- Company Archive.
- Company Card.
- Single Company template.
- Related article query.
- Company facts and profile fields.
- Empty states.
- Responsive behavior.
- SEO behavior.

---

# 1. Day-Seven Deliverables

By the end of Day Seven:

1. Company CPT is confirmed and usable on staging.
2. Company Archive Theme Builder template exists.
3. Company Card loop is dynamic.
4. Company directory displays real Company CPT records.
5. Single Company Theme Builder template exists.
6. Company identity fields are dynamic.
7. Company facts are dynamic.
8. Company description is dynamic.
9. Related articles use explicit relationships.
10. Empty relationship states work.
11. Company URLs are stable.
12. Responsive QA passes.
13. SEO behavior is defined.
14. Company Acceptance Gate passes.

---

# 2. Company Data Source

Primary source:

**Company CPT**

Recommended post type:

company

Recommended rewrite:

companies

The Company CPT supports:

- Title.
- Editor.
- Featured image.
- Revisions.

ACF/company fields:

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

Persian company name remains the native WordPress title.

Do not duplicate the company name into multiple custom fields unless a separate English name is required.

---

# 3. Company URL Architecture

Primary directory:

`/companies/`

Single company:

`/companies/{slug}/`

Rules:

- Preserve existing company URLs where applicable.
- Do not change slugs for cosmetic reasons.
- Record any changed URLs in the migration map.
- Use one-hop 301 redirects for changed URLs.
- Verify canonical URL after migration.

Company URLs must be readable and stable.

---

# 4. Company Archive Theme Builder

Create:

**Theme Builder → Archive → Company**

The archive should be restricted to the Company CPT archive.

Recommended structure:

1. Global Header.
2. Breadcrumbs.
3. Archive title.
4. Archive description/introduction.
5. Optional company search/filter if there is a real requirement.
6. Company Loop Grid.
7. Pagination when the dataset requires it.
8. Newsletter/CTA.
9. Global Footer.

Do not build the company directory as a manually maintained Elementor page.

---

# 5. Company Archive Header

Recommended title:

**شرکت‌ها**

Description should come from the archive configuration or a controlled WordPress source.

If an archive description is not available:

- Use a short controlled introduction only if editorially required.
- Do not duplicate company descriptions here.

Breadcrumb:

Home → Companies

---

# 6. Company Card

Reuse the Day-Four Company Card component.

Dynamic fields:

- Company logo.
- Company name.
- English name when useful.
- Country/city.
- Activity.
- Optional capacity.

Primary link:

Company single URL.

Rules:

- No hard-coded company names.
- No hard-coded logos.
- No text-search relationship logic.
- Missing optional fields are hidden.
- Missing logo uses a controlled fallback.

Keep the card compact and information-dense.

Avoid decorative industry clichés, excessive icons, or large empty cards.

---

# 7. Company Directory Query

Company archive query:

- Post type = company.
- Status = published.
- Newest or controlled editorial ordering.

If a deliberate company ordering is required later, introduce an explicit ordering field rather than relying on arbitrary IDs.

Do not use article queries to build the company directory.

---

# 8. Company Search or Filtering

Do not add filters simply because the directory contains many companies.

Only implement filters when there is a confirmed requirement.

If filtering is required, prefer structured fields/taxonomies such as:

- Country.
- Activity.
- Industry segment.

Do not implement filtering by free-text scraping of company descriptions.

A simple search can be introduced later if the company dataset becomes large enough to justify it.

---

# 9. Single Company Theme Builder

Create:

**Theme Builder → Single Post Type → Company**

The template must use dynamic Company CPT fields.

Recommended structure:

1. Global Header.
2. Breadcrumbs.
3. Company identity.
4. Company facts.
5. Company description.
6. Contact/website actions.
7. Related articles.
8. Optional related market/technology information.
9. Newsletter/CTA.
10. Global Footer.

---

# 10. Company Identity Section

Primary identity area:

- Company logo.
- Persian company name.
- English name when available.
- Country.
- City.
- Activity.

The company name must be the main H1.

Only one meaningful H1 should exist.

If no logo exists:

- Use the controlled fallback.
- Do not leave a broken image container.

---

# 11. Company Facts

Use a compact facts component.

Potential fields:

- کشور
- شهر
- حوزه فعالیت
- سال تأسیس
- ظرفیت
- وب‌سایت

Only display fields that contain values.

Do not show labels with empty values.

If a value is unavailable, the entire fact row should disappear.

---

# 12. Company Description

Primary source:

Company CPT editor content or company_description field according to the final data model.

Choose one primary source and avoid maintaining duplicate descriptions in both places.

The description should support:

- Introductory company overview.
- Main activity.
- Products/services.
- Relevant industrial context.

Do not automatically generate factual claims from article content.

---

# 13. Company Website and Contact

If website exists:

Display a clear external website action.

If contact exists:

Display contact information in the designated contact area.

Rules:

- No fake URLs.
- No empty buttons.
- External links should be distinguishable.
- Use appropriate target/security behavior according to the site's global link policy.

---

# 14. Related Articles — Source of Truth

The relationship must come from:

`related_companies`

on the editorial post.

The Company page should reverse-query posts where the current Company is explicitly selected.

Do not use:

- Company name text search.
- Article title search.
- Content keyword matching.
- Fuzzy matching.

This prevents false company relationships.

---

# 15. Related Article Query

Preferred query:

- Post type = post.
- Status = published.
- related_companies contains current Company.
- Newest first.

Display approximately 4–8 articles depending on content volume.

If there are no related articles:

- Hide the related section or show a clean empty state.
- Do not manufacture relationships.

Exclude irrelevant content types only when an editorial requirement explicitly defines the rule.

---

# 16. Related Article Cards

Reuse existing components:

- Standard News Card.
- Compact News List.

Dynamic fields:

- Featured image.
- Content type.
- Title.
- Date.
- Reading time.

Do not create a separate company-specific card unless visual requirements genuinely differ.

---

# 17. Company and Technology Context

Optional related technology information may be displayed only when there is a real structured relationship.

Do not infer technology relationships from company descriptions.

If a future requirement needs company ↔ technology relationships, add a documented structured field/taxonomy first.

Do not introduce an undocumented relationship during Elementor implementation.

---

# 18. Empty States

### No related articles

Example:

مطلب مرتبطی برای این شرکت ثبت نشده است.

### Missing company logo

Use fallback identity treatment.

### Missing facts

Hide empty rows.

### Missing website

Hide website action.

### Missing description

Hide description section or show a controlled editorial fallback only if approved.

The page must never display broken fields or placeholder labels in production.

---

# 19. Company Archive Pagination

If the company count exceeds one page:

- Use real WordPress pagination.
- Preserve archive context.
- Ensure page URLs are crawlable.
- Keep pagination accessible.

If the company directory is small enough for one page, pagination is unnecessary.

Do not introduce pagination only to imitate a magazine layout.

---

# 20. Company Ordering

Default:

Newest published Company CPT first, unless the business requirement defines a different ordering.

If a curated order is required:

Create an explicit field such as display_order.

Do not use:

- Random order.
- Article count as an ordering mechanism.
- Text length.
- Company name alphabetically unless that is explicitly the desired UX.

Document any future ordering rule before implementation.

---

# 21. SEO — Company Archive

Company archive should have:

- Canonical archive URL.
- Appropriate title.
- Appropriate meta description.
- Correct indexability.
- Breadcrumbs where supported.

Avoid thin archive pages.

If the Company CPT contains substantial unique editorial value, the archive can be indexable.

SEO plugin remains the source of truth for final metadata/schema.

---

# 22. SEO — Single Company

Each company page should have:

- Unique title.
- Unique meta description where possible.
- Canonical URL.
- Indexability according to content quality.
- Open Graph image where appropriate.
- Breadcrumb support.

Do not duplicate SEO metadata through Elementor widgets.

Company structured data should only be added if the selected SEO/schema implementation supports it correctly and without conflicting schema.

Do not invent legal, financial, ownership, capacity, or certification facts.

---

# 23. Breadcrumbs

Single Company:

Home → Companies → Company Name

Company Archive:

Home → Companies

Breadcrumbs must be dynamic.

---

# 24. Responsive Layout

Test:

- 1440px
- 1280px
- 1024px
- 768px
- 480px
- 390px
- 360px

Desktop company page:

- Strong identity area.
- Compact facts.
- Comfortable description width.
- Related content grid.

Tablet:

- Reduce multi-column facts.
- Preserve logo/name hierarchy.

Mobile:

- Single-column identity.
- Facts become stacked rows/cards.
- Related articles use one column.
- Website/contact actions remain easy to tap.
- No horizontal overflow.

---

# 25. Accessibility

Verify:

- One meaningful H1.
- Correct heading hierarchy.
- Logo/image alt behavior.
- Keyboard-accessible website/contact links.
- Visible focus state.
- Clear link labels.
- Sufficient contrast.
- No color-only status indicators.
- Facts remain understandable without visual styling.

---

# 26. Performance

Company pages should remain lightweight.

Use:

- Responsive logo/image sizes.
- Lazy loading for below-the-fold media.
- Efficient related-article query.
- Reusable lightweight cards.
- Minimal JavaScript.

Avoid:

- Loading all company articles before rendering the page.
- Multiple duplicate relationship queries.
- Unnecessary sliders.
- Heavy map embeds unless specifically required.

---

# 27. Test Dataset

Create or verify at least 5 staging companies:

1. Company with complete fields and logo.
2. Company with missing logo.
3. Company with partial facts.
4. Company with many related articles.
5. Company with no related articles.

At least two editorial posts should be explicitly related to more than one company to verify multi-company relationships.

Do not use company-name text search to populate the test relationships.

---

# 28. Company Test Matrix

| Scenario | Expected |
|---|---|
| Company archive | Published Company CPT records only |
| Company card | Dynamic fields |
| Complete company | All populated fields render |
| Missing logo | Controlled fallback |
| Missing facts | Empty rows hidden |
| Missing website | Website action hidden |
| Related articles | Explicit relationships only |
| Multiple related companies | Article can appear on each related company |
| No related articles | Clean empty state |
| Company URL | Correct permalink/canonical |
| Mobile | No overflow |

---

# 29. Relationship Verification

This is a critical Day-Seven test.

Test Company A:

- Explicitly relate Article 1.
- Do not relate Article 2.
- Article 2 mentions Company A only in its body text.

Expected Company A page:

- Article 1 appears.
- Article 2 does not appear.

This proves the production system is not using text search to infer company coverage.

---

# 30. Implementation Order

1. Verify Company CPT.
2. Verify company fields.
3. Verify relationship field.
4. Build Company Card.
5. Build Company Archive.
6. Build Company Archive pagination if needed.
7. Build Single Company identity.
8. Build facts.
9. Build description.
10. Build website/contact actions.
11. Build reverse related-article query.
12. Add empty states.
13. Add SEO configuration.
14. Responsive QA.
15. Accessibility QA.
16. Performance QA.

Do not style the final company page before relationship behavior is proven.

---

# 31. Company Acceptance Gate

### Data
- [ ] Company CPT works.
- [ ] Company fields are populated correctly.
- [ ] Company slugs are stable.
- [ ] Relationship field works.

### Archive
- [ ] Company archive is dynamic.
- [ ] Company Card is dynamic.
- [ ] Only published companies appear.
- [ ] Pagination works if required.

### Single Company
- [ ] Identity dynamic.
- [ ] Facts dynamic.
- [ ] Description dynamic.
- [ ] Website/contact conditional.
- [ ] Related articles dynamic.
- [ ] Empty states work.

### Relationship
- [ ] Explicit relationships are respected.
- [ ] Text-only mentions do not create relationships.
- [ ] Multi-company relationships work.
- [ ] Current company context is correct.

### SEO
- [ ] Canonical correct.
- [ ] Metadata correct.
- [ ] Indexability correct.
- [ ] No conflicting schema/meta.

### Quality
- [ ] Responsive QA passes.
- [ ] Accessibility baseline passes.
- [ ] Performance acceptable.
- [ ] No hard-coded company content.

---

# 32. Definition of Day Seven Done

Day Seven is complete when:

**A Company CPT record can be created or edited in WordPress, and its archive card and full company profile update automatically without manual Elementor editing.**

The key relationship test is:

**Select a company on an article → publish → open the company page → the article appears in related coverage. Remove the relationship → the article disappears.**

---

# 33. Next Stage

After Day Seven:

**Day Eight — Market Data + Market Dashboard**

The Market layer must consume structured market data and historical entries, not the mock prototype values.
