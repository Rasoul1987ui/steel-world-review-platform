# Staging Day-Four — Elementor Loop Components

## Goal

Day Four converts the approved design system into reusable editorial components.

The objective is to build the cards and repeated content blocks that will later power:

- Homepage
- Archives
- Single Article related content
- Company pages
- Technology pages
- Market pages
- Search results

Do not build full pages yet.

---

# 1. Day-Four Deliverables

By the end of Day Four:

1. Standard News Card.
2. Featured Story Card.
3. Compact News List Item.
4. Analysis Card.
5. Report Card.
6. Company Card.
7. Interview Card.
8. Technology Card.
9. Market Card.
10. Dynamic category/meta components integrated.
11. Loop queries tested against real staging data.
12. Responsive behavior verified.
13. Empty/missing-data states verified.
14. Loop Component Acceptance Gate passed.

---

# 2. Component Architecture

Every loop should separate:

**Data**
→ WordPress query / dynamic fields

**Presentation**
→ Elementor Loop Item

**Context**
→ archive/homepage/company/article/search

The same component should be reusable in multiple contexts.

Do not create separate copies of the same card merely because it appears in different sections.

---

# 3. Standard News Card

## Purpose

Primary reusable card for normal news listings.

## Content

- Featured image.
- Content type/category.
- Title.
- Excerpt when appropriate.
- Date.
- Reading time when available.
- Optional company/topic indicator.

## Layout

Recommended:

Image
→ category/meta
→ title
→ optional excerpt
→ metadata

The title is the primary visual element.

## Dynamic rules

- Image from featured image.
- Title from post title.
- URL from post permalink.
- Category from content_type.
- Date from publication date.
- Reading time from ACF when populated.

Do not hard-code any article title or URL.

---

# 4. Featured Story

## Purpose

Hero/featured editorial presentation.

## Content

- Large featured image.
- Category.
- Large title.
- Excerpt.
- Date/reading time.

## Rules

The image and headline receive more visual weight than metadata.

Avoid excessive overlays.

If text is placed over an image, verify contrast and readability at all breakpoints.

---

# 5. Compact News List

## Purpose

Dense editorial list used in side columns and archive sections.

## Content

- Small thumbnail.
- Category.
- Title.
- Date.

Optional:
- Reading time.

## Rules

- No unnecessary excerpt.
- Compact vertical spacing.
- Strong title readability.
- Entire item should be a clear link.

This component is important for the homepage's secondary news area.

---

# 6. Analysis Card

## Purpose

Differentiate analysis from standard news without creating a completely separate visual language.

## Content

- Image.
- Analysis label.
- Title.
- Excerpt.
- Date.
- Reading time.

Use restrained visual emphasis.

Do not rely only on color to communicate that the content is analysis.

---

# 7. Report Card

## Purpose

Reports and special editorial documents.

## Content

- Cover/featured image when available.
- Report label.
- Title.
- Issue.
- Page count when available.
- Format.
- Download/read action.

## Conditional rules

If PDF exists:
- Show download action.

If only online report exists:
- Show read/view action.

If neither exists:
- Do not render an empty button.

---

# 8. Company Card

## Purpose

Company directory and homepage company section.

## Content

- Logo or image.
- Persian company name.
- English name where available.
- Country/city where useful.
- Short activity description.
- Link to Company CPT URL.

## Rules

Company data must come from the Company CPT.

Do not generate company cards from article text.

Missing logos must have a controlled fallback.

---

# 9. Interview Card

## Purpose

Interview archive/homepage.

## Content

- Interviewee portrait when available.
- Interview label.
- Interviewee name.
- Position/company.
- Article title.
- Date.

The interviewee should remain the main human identity; the article title provides context.

If portrait is missing, layout must remain balanced.

---

# 10. Technology Card

## Purpose

Technology section and topic archives.

## Content

- Image.
- Technology topic.
- Title.
- Excerpt where appropriate.
- Date.

Topic must come dynamically from technology_topic.

Do not manually write topic labels inside each card.

---

# 11. Market Card

## Purpose

Market dashboard and market-related modules.

## Content

- Market item name.
- Current value.
- Unit.
- Change.
- Change percentage.
- Updated time.
- Optional sparkline.

## Rules

Data comes from Market Item.

Never hard-code:
- prices
- changes
- update times
- sources

The card must remain usable when historical data is unavailable.

---

# 12. Shared Components

Create reusable components for:

## Category Label

Dynamic content_type label.

## Technology Topic

Dynamic technology_topic label.

## Article Meta

Dynamic:
- date
- author
- reading time

## Company Indicator

Dynamic company relationship where context requires it.

## Market Change

Dynamic change/change percentage.

Positive/negative states must not rely on color alone.

---

# 13. Loop Query Rules

## Latest News

Query:
- Post
- content_type = news
- Published
- Newest first

## Analysis

Query:
- Post
- content_type = analysis
- Newest first

## Reports

Query:
- Post
- content_type = report
- Newest first

## Interviews

Query:
- Post
- content_type = interviews
- Newest first

## Technology

Query:
- Post
- content_type = technology
- Newest first

Optional topic filter:
- technology_topic

## Company

Query:
- Company CPT
- Published
- display/order rules as defined

## Company Articles

Query:
- Posts explicitly related to selected Company
- Newest first

## Market

Query:
- Market Item
- display_order

---

# 14. Duplicate Content Rules

Homepage sections should not unintentionally repeat the same article.

Example:

If an article is used as the primary Hero story, avoid automatically showing it again as the first item in Latest News.

Possible approach:

- Exclude IDs already selected by higher-priority sections.
- Keep editorial priority explicit.
- Do not rely on random ordering.

The same principle applies to:

- Hero → Latest News
- Analysis feature → Analysis list
- Technology feature → Technology list

---

# 15. Dynamic Field Rules

For every component:

### Required field

If missing:
- Use a safe fallback.
- Never render broken markup.

### Optional field

If empty:
- Hide the element.

Examples:

Missing:
- Reading time → hide reading-time element.
- Excerpt → hide excerpt.
- Logo → show fallback.
- Portrait → use controlled placeholder/fallback.
- Report PDF → hide download button.
- Company website → hide website action.

---

# 16. Link Rules

Every card should have a predictable destination.

Article cards:
- Post permalink.

Company cards:
- Company CPT permalink.

Market cards:
- Market page or market detail if implemented.

Do not duplicate different URLs inside the same card unless necessary.

Avoid nested interactive elements that create invalid HTML/accessibility problems.

---

# 17. Image Rules

For editorial cards:

- Use WordPress featured image.
- Use appropriate image size.
- Do not load full-resolution originals when unnecessary.
- Define aspect ratios per component.
- Prevent layout shift.
- Use meaningful alt text for content images.
- Decorative images should not receive unnecessary descriptive alt text.

Recommended principle:

**Consistent crop > arbitrary image height.**

---

# 18. Responsive Component Rules

Test every component at:

- 1440px
- 1280px
- 1024px
- 768px
- 480px
- 390px
- 360px

Check:

- Image ratio.
- Title wrapping.
- Metadata wrapping.
- Card height.
- Touch target.
- Spacing.
- RTL alignment.
- No horizontal overflow.

Do not simply scale desktop cards down.

Mobile layouts should have intentional hierarchy.

---

# 19. Accessibility Rules

Each card must:

- Have a clear link target.
- Have readable text.
- Preserve heading hierarchy.
- Have keyboard-visible focus.
- Avoid color-only meaning.
- Use appropriate alt text.
- Avoid multiple confusing links to the same destination.

If the whole card is clickable, structure it so the interaction remains accessible.

---

# 20. Performance Rules

Loop components should not introduce unnecessary frontend cost.

Avoid:

- Large background videos.
- Heavy animation.
- Multiple third-party libraries.
- Full-size images.
- Duplicate dynamic queries.
- Unnecessary nested widgets.

Use Elementor Loop Grid/query controls where sufficient.

Custom code is only justified when Elementor cannot implement the required behavior cleanly.

---

# 21. Test Dataset

Use the Day-Two controlled dataset:

- 3 news.
- 2 analysis.
- 2 reports.
- 1 interview.
- 3 technology posts.
- 3 companies.
- Multiple company relationships.
- 3 market items.
- Historical market entries.

Also test:

- Article without excerpt.
- Article without reading time.
- Company without logo.
- Interview without portrait.
- Report without PDF.
- Market item without historical entries.

---

# 22. Visual QA Checklist

For each component:

### Desktop
- [ ] Correct hierarchy.
- [ ] Image ratio consistent.
- [ ] Typography correct.
- [ ] Metadata secondary.
- [ ] Hover state works.
- [ ] Focus state works.

### Tablet
- [ ] No collisions.
- [ ] Grid/stack behavior intentional.
- [ ] Text remains readable.

### Mobile
- [ ] Correct order.
- [ ] No horizontal overflow.
- [ ] Touch targets usable.
- [ ] Titles do not become unreadably small.
- [ ] Images do not dominate the viewport.

---

# 23. Elementor Implementation Order

Build in this exact order:

1. Category Label.
2. Article Meta.
3. Standard News Card.
4. Compact News List.
5. Featured Story.
6. Analysis Card.
7. Report Card.
8. Company Card.
9. Interview Card.
10. Technology Card.
11. Market Card.

After each component:

1. Connect real dynamic fields.
2. Test with multiple records.
3. Test missing optional fields.
4. Test responsive behavior.
5. Save as reusable/global component where appropriate.
6. Document any custom CSS.

---

# 24. Loop Component Acceptance Gate

Do not start Single Article until:

### Editorial
- [ ] News Card dynamic.
- [ ] Featured Story dynamic.
- [ ] Compact List dynamic.
- [ ] Analysis Card dynamic.
- [ ] Report Card dynamic.
- [ ] Interview Card dynamic.
- [ ] Technology Card dynamic.

### Company
- [ ] Company Card dynamic.
- [ ] Company relationship query works.

### Market
- [ ] Market Card dynamic.
- [ ] Current value works.
- [ ] Change works.
- [ ] Empty history works.

### Quality
- [ ] No hard-coded production content.
- [ ] Optional fields hide correctly.
- [ ] Links are correct.
- [ ] Images use appropriate sizes.
- [ ] Responsive QA passes.
- [ ] Accessibility baseline passes.
- [ ] No major performance issue introduced.

---

# 25. What Comes Next

After the Loop Component Acceptance Gate:

1. Build Single Article Theme Builder template.
2. Test it against all editorial types.
3. Build Post Archive.
4. Build Technology Archive.
5. Build Company Archive.
6. Build Single Company.
7. Build Market page.
8. Then assemble the Homepage.

The homepage remains intentionally late in the sequence because it depends on all reusable systems being stable.

---

# Definition of Day Four Done

Day Four is complete when the future site can render its repeated content through reusable Elementor components driven entirely by WordPress data.

The key architectural test is:

**Change the content in WordPress → the component updates automatically → no Elementor layout edit is required.**
