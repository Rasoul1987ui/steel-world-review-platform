# Staging Day-Five — Single Article Template

## Goal

Day Five builds the first complete production Theme Builder template: the Single Article.

The template must support all editorial article types through one dynamic architecture wherever presentation is shared.

The article remains a WordPress record. Elementor only controls presentation.

---

# 1. Day-Five Deliverables

By the end of Day Five:

1. Single Post Theme Builder template exists.
2. Breadcrumbs work dynamically.
3. Content type/category works dynamically.
4. Title/excerpt/meta are dynamic.
5. Featured image is dynamic.
6. Article body is dynamic.
7. Interview fields render conditionally.
8. Report fields render conditionally.
9. Related companies render dynamically.
10. Related articles render dynamically.
11. Tags render dynamically.
12. Newsletter/CTA works.
13. SEO presentation is preserved.
14. Responsive article layout passes QA.
15. Single Article Acceptance Gate passes.

---

# 2. Template Scope

Primary template:

**Single Post → All Posts**

Do not create a separate Elementor template for every article.

Use dynamic fields and conditional display for:

- News
- Analysis
- Report
- Outlook
- Interview
- Technology

Only create a specialized template when a real structural difference cannot reasonably be handled dynamically.

---

# 3. Article Page Hierarchy

Recommended order:

1. Global Header.
2. Breadcrumbs.
3. Content type/category.
4. Article title.
5. Excerpt.
6. Article meta.
7. Featured image.
8. Main content.
9. Interview/report metadata when applicable.
10. Tags.
11. Related companies.
12. Related articles.
13. Newsletter/CTA.
14. Global Footer.

The title and article body remain the primary visual focus.

---

# 4. Breadcrumbs

Use dynamic breadcrumbs.

Examples:

Home → Analysis → Article

Home → Technology → Metallurgy → Article

Home → Interviews → Article

Home → Reports → Article

Requirements:

- RTL-aware.
- Links point to real archive URLs.
- Current article is not unnecessarily linked.
- No hard-coded article names.
- Avoid duplicate breadcrumb systems.

---

# 5. Content Type Label

Display the current content type dynamically.

Examples:

- اخبار
- تحلیل
- گزارش
- چشم‌انداز
- مصاحبه
- فناوری

The label must come from WordPress taxonomy data.

Do not manually type the label into each article.

---

# 6. Article Header

## Title

Dynamic:

WordPress post title.

Requirements:

- Strong hierarchy.
- Comfortable line height.
- Correct RTL behavior.
- No forced manual line breaks.
- Readable on mobile.

## Excerpt

Prefer:

Native WordPress excerpt.

Fallback:

short_excerpt ACF field only where required.

If no excerpt exists, hide the excerpt block.

Do not display duplicate excerpts.

---

# 7. Article Meta

Use the reusable Article Meta component.

Display:

- Author.
- Publication date.
- Reading time.

Optional:

- Modified date when editorially useful.

Do not show empty metadata placeholders.

Author should link to the correct WordPress author archive only if author archives are intentionally part of the final SEO architecture.

---

# 8. Featured Image

Use WordPress Featured Image.

Requirements:

- Dynamic.
- Correct responsive image size.
- Stable aspect ratio.
- No unnecessary full-resolution source.
- Meaningful alt text.
- Prevent layout shift.

If an article has no featured image:

Use a controlled fallback.

Do not create broken empty image containers.

---

# 9. Article Body

Use the native WordPress content.

Do not rebuild article content inside Elementor.

Elementor controls:

- Width.
- Typography.
- Spacing.
- Related modules.
- Surrounding layout.

WordPress controls:

- Paragraphs.
- Headings.
- Lists.
- Tables.
- Inline images.
- Quotes.
- Links.
- Embedded media.

This separation is critical for migration and editorial maintenance.

---

# 10. Article Reading Width

Use a narrower reading column than the overall 1320px site container.

Recommended principle:

- Main reading column approximately 720–820px depending on typography.
- Supporting/related content can occupy adjacent space on wide screens.
- Mobile uses full available width with safe gutters.

The goal is comfortable long-form reading, not maximum horizontal utilization.

---

# 11. Article Typography

Define globally:

### Paragraph
Readable size and line height.

### H2/H3
Strong hierarchy with clear vertical spacing.

### Lists
Readable indentation and RTL behavior.

### Blockquote
Visually distinct but restrained.

### Tables
Responsive where possible.

### Links
Clearly distinguishable from normal text.

### Captions
Smaller and visually secondary.

Do not solve article typography with manual formatting inside individual posts.

---

# 12. Interview Conditional Block

Show only when:

content_type = interviews

and relevant interview data exists.

Display:

- Interviewee portrait.
- Interviewee name.
- Position.
- Company.

The interview block should appear close to the article header or at the most useful editorial position defined by the final design.

If portrait is missing:

- Keep name/position/company.
- Remove empty image space.

If optional fields are missing:

- Hide those fields.

---

# 13. Report Conditional Block

Show when:

content_type = report

or report metadata is populated.

Display:

- Report issue.
- Page count.
- Format.
- PDF/download action.
- Online read action when applicable.

Rules:

If PDF exists:
- Show download.

If online URL exists:
- Show read/view.

If neither exists:
- Do not show an empty action area.

Do not invent report metadata.

---

# 14. Technology Metadata

For technology articles:

Display technology topic dynamically where useful.

Examples:

- تولید
- متالورژی
- اتوماسیون
- تجهیزات
- انرژی
- کربن‌زدایی

Topic comes from technology_topic.

Do not manually write topic names inside the template.

---

# 15. Related Companies

Display related companies only when explicit relationships exist.

Source:

related_companies

Display:

- Company logo/name.
- Optional location/activity.
- Link to Company CPT.

Do not derive company relationships by searching article text.

If no company is related:

Hide the block or use a clean spacing rule.

---

# 16. Tags

Use native WordPress post tags.

Display tags after the article body where useful.

Rules:

- Dynamic.
- Clickable.
- No empty tag container.
- Avoid displaying dozens of tags without editorial value.

---

# 17. Related Articles

Use a dynamic related-content query.

Preferred signals:

1. Same content type.
2. Shared technology topic where relevant.
3. Shared related company where relevant.
4. Recency.

Do not use title-text similarity as the only relationship mechanism.

Avoid returning the current article.

Recommended display:

- 3–4 related articles.
- Reuse Standard News Card or a compact variant.

---

# 18. Newsletter / CTA

Place a reusable newsletter/CTA module after the main editorial content and before the footer/related content according to the final visual hierarchy.

Requirements:

- Reusable.
- Responsive.
- Does not appear as an intrusive popup inside article content.
- Form integration is staging-safe.
- Production destination is configurable.

---

# 19. Author and Source Handling

Author:

Use native WordPress author data.

Source URL:

If source_url exists:
- Show a clear source action.

If empty:
- Hide the source action.

Do not create fake source links.

---

# 20. SEO Rules

Single Article must preserve:

- Canonical URL.
- Article title.
- Meta description.
- Indexability.
- Open Graph image/title.
- Appropriate article schema through the selected SEO/schema system.
- Breadcrumb schema where supported.

Elementor must not generate conflicting canonical/meta values.

Do not put SEO-critical article content into decorative Elementor-only widgets when native WordPress content can provide it.

---

# 21. URL Rules

Article URLs must follow the migration map.

If the existing production URL can be preserved:

**Preserve it.**

If a change is necessary:

- Record old URL.
- Record new URL.
- Create one-hop 301.
- Test redirect.
- Verify canonical points to final URL.

Do not change article slugs merely for visual cleanliness.

---

# 22. Responsive Layout

Test at:

- 1440px
- 1280px
- 1024px
- 768px
- 480px
- 390px
- 360px

Desktop:

- Comfortable reading column.
- Supporting content where appropriate.
- Strong title hierarchy.

Tablet:

- Reduce supporting columns.
- Preserve reading width.

Mobile:

- Single-column reading flow.
- No horizontal overflow.
- Comfortable side padding.
- Metadata wraps cleanly.
- Tables/media remain usable.
- Header does not dominate viewport.

---

# 23. Accessibility

Verify:

- One meaningful H1.
- Logical H2/H3 hierarchy.
- Keyboard-accessible links/buttons.
- Visible focus.
- Image alt text.
- Sufficient contrast.
- No color-only meaning.
- Download/read actions clearly labeled.
- Embedded media has accessible context.

Do not use multiple H1 elements simply because Elementor sections contain headings.

---

# 24. Performance

Single Article should remain lightweight.

Avoid:

- Large decorative animations.
- Background videos.
- Unnecessary sliders.
- Duplicate dynamic queries.
- Heavy third-party embeds when avoidable.

Use:

- Correct image sizes.
- Lazy loading where appropriate.
- Efficient fonts.
- Cached assets.
- Minimal custom JavaScript.

---

# 25. Test Articles

Use the Day-Two/Day-Four dataset.

Minimum tests:

1. Standard news article.
2. Analysis.
3. Report with PDF.
4. Report without PDF.
5. Interview with portrait.
6. Interview without portrait.
7. Technology article with topic.
8. Article with related company.
9. Article without related company.
10. Article with missing excerpt/reading time.

Every test must render without broken layout.

---

# 26. Single Article Visual QA

Check:

### Header
- [ ] Breadcrumb correct.
- [ ] Category correct.
- [ ] Title correct.
- [ ] Excerpt conditional.
- [ ] Meta correct.

### Media
- [ ] Featured image correct.
- [ ] Alt behavior correct.
- [ ] No layout shift.

### Content
- [ ] Body typography correct.
- [ ] H2/H3 hierarchy correct.
- [ ] Lists/tables/quotes work.
- [ ] Links work.
- [ ] Inline media works.

### Conditional
- [ ] Interview block conditional.
- [ ] Report block conditional.
- [ ] Technology topic conditional.
- [ ] Company block conditional.
- [ ] Source link conditional.

### Related
- [ ] Related articles exclude current article.
- [ ] Related companies correct.
- [ ] Tags correct.

### SEO
- [ ] Canonical correct.
- [ ] Metadata correct.
- [ ] Schema not duplicated/conflicting.

---

# 27. Elementor Implementation Order

Build in this order:

1. Single Post Theme Builder template.
2. Header/breadcrumb.
3. Article header.
4. Featured image.
5. Content area.
6. Article Meta.
7. Interview conditional block.
8. Report conditional block.
9. Technology metadata.
10. Related companies.
11. Tags.
12. Related articles.
13. Newsletter/CTA.
14. Footer.
15. Responsive adjustments.
16. Final QA.

Do not optimize every pixel before dynamic behavior is proven.

---

# 28. Single Article Acceptance Gate

Do not move to Archives until:

### Dynamic
- [ ] Title dynamic.
- [ ] Excerpt dynamic.
- [ ] Meta dynamic.
- [ ] Featured image dynamic.
- [ ] Content dynamic.
- [ ] Taxonomy dynamic.
- [ ] Technology topic dynamic.
- [ ] Interview fields dynamic.
- [ ] Report fields dynamic.
- [ ] Company relationships dynamic.
- [ ] Tags dynamic.
- [ ] Related articles dynamic.

### Conditional
- [ ] Empty optional fields hide.
- [ ] Interview block conditional.
- [ ] Report block conditional.
- [ ] Company block conditional.
- [ ] Source action conditional.

### SEO
- [ ] Canonical preserved.
- [ ] Metadata preserved.
- [ ] No conflicting schema/meta.

### Quality
- [ ] Responsive QA passes.
- [ ] Accessibility baseline passes.
- [ ] No horizontal overflow.
- [ ] No hard-coded article content.
- [ ] No major performance issue.

---

# 29. What Comes Next

After the Single Article Acceptance Gate:

1. Build Post Archive.
2. Build Technology Archive.
3. Build Company Archive.
4. Build Single Company.
5. Build Market page.
6. Build Search Results.
7. Build 404.
8. Assemble Homepage last.

The homepage should consume the same components already proven here rather than introducing a second design system.

---

# Definition of Day Five Done

Day Five is complete when any supported article can be opened on staging and the entire page is assembled from WordPress data through one reusable Elementor Single Post architecture.

The core test is:

**Create or edit a WordPress article → assign its content type/fields → open the permalink → the correct article layout appears automatically.**
