# Staging Day-Nine — Homepage Assembly and Editorial Integration

## Goal

Day Nine assembles the production homepage using the systems already proven during Days Three through Eight.

The homepage is an editorial publication front page, not a collection of independent widgets.

At this stage:

- WordPress is the content/data source.
- Elementor is the presentation layer.
- Existing reusable components are reused.
- Existing Company and Market systems are consumed.
- No new parallel content model is introduced.

---

# 1. Day-Nine Deliverables

By the end of Day Nine:

1. Production homepage structure is assembled.
2. Header and market ticker integrate correctly.
3. Hero section uses dynamic editorial content.
4. Latest News uses dynamic queries.
5. Market Dashboard consumes Market Item data.
6. Analysis and Reports use existing editorial taxonomy/data.
7. Company section consumes Company CPT.
8. Technology section consumes technology taxonomy.
9. Interviews section consumes interview content.
10. Newsletter/CTA is integrated.
11. Duplicate content is controlled across sections.
12. Homepage responsive QA passes.
13. Homepage SEO/accessibility/performance checks pass.
14. Homepage Acceptance Gate passes.

---

# 2. Homepage Principle

The homepage must answer three questions quickly:

1. What is happening now?
2. What matters in the steel market?
3. What analysis, companies, technology, and interviews deserve attention?

The visual hierarchy should guide the reader naturally from breaking/current information toward deeper editorial content.

Avoid treating every section as an equal visual block.

---

# 3. Homepage Hierarchy

Recommended final order:

1. Global Header.
2. Market Ticker.
3. Editorial Hero.
4. Latest News.
5. Market Dashboard.
6. Analysis & Reports.
7. Companies.
8. Technology.
9. Interviews.
10. Newsletter/CTA.
11. Global Footer.

This order can change only when editorial requirements justify it.

---

# 4. Global Header Integration

Use the Day-Three global Header.

Required navigation:

- آخرین اخبار
- تحلیل و گزارش
- بازار فولاد
- شرکت‌ها
- فناوری
- مصاحبه‌ها

Primary actions:

- Search.
- Market.

Requirements:

- No homepage-specific header variant unless necessary.
- Sticky behavior remains global.
- Mobile navigation uses the same source.
- Active navigation state reflects current URL.

---

# 5. Market Ticker

Optional compact ticker directly below the Header.

Source:

Market Item data.

Display only a controlled subset of key indicators.

Each item may show:

- Name.
- Value.
- Change.
- Change direction.

Rules:

- No hard-coded values.
- No mock data in production.
- No fake live indicator.
- Link to `/market/`.

If market data is unavailable, hide the ticker or display a controlled unavailable state rather than stale-looking fake numbers.

---

# 6. Editorial Hero

Hero is the main editorial statement of the homepage.

Recommended layout:

Desktop:

- 12-column grid.
- Main story approximately 8 columns.
- Secondary stories approximately 4 columns.

Mobile:

- Main story first.
- Secondary stories below.

Hero data should be dynamic.

Recommended editorial fields:

- hero_primary
- hero_secondary_1
- hero_secondary_2
- hero_secondary_3

These may be implemented as controlled relationship/post-object fields or another documented editorial selection mechanism.

Do not hard-code post IDs into Elementor widgets.

---

# 7. Hero Query and Editorial Selection

Hero stories should be explicitly curated or selected according to an approved editorial rule.

Do not simply use newest posts if the homepage hero is intended to represent editorial priority.

If no hero selection exists:

- Use a documented fallback query.
- Avoid empty hero space.

Hero articles must be excluded from immediate duplicate positions in Latest News where possible.

---

# 8. Hero Visual Rules

The hero should remain editorial and restrained.

Avoid:

- Full-screen autoplay video.
- Excessive animation.
- Giant text covering imagery.
- Glassmorphism.
- Excessive gradients.
- Decorative icons without information value.

Use the established visual system:

- Primary #194B7E.
- Accent #89CDAC.
- Navy #0E2A47.
- Light background #F7F9FA.
- White #FFFFFF.

---

# 9. Latest News Section

Purpose:

Show what is newly published and relevant now.

Recommended structure:

- 2 featured/current stories.
- 4 compact news items.
- Optional news briefs.

All content must come from WordPress.

Primary query:

content_type = news

Order:

Newest published first unless an explicit editorial priority field is used.

---

# 10. Latest News Duplicate Control

Latest News must not unnecessarily repeat Hero content.

Preferred behavior:

- Exclude hero post IDs.
- Fill remaining positions with the next eligible news posts.

If there are insufficient eligible posts:

- Show fewer items.
- Do not repeat the same article simply to fill a grid.

---

# 11. News Briefs

If News Briefs are implemented as a dedicated CPT:

Query that CPT explicitly.

If the final data model uses normal posts instead:

Use a documented field/taxonomy to identify briefs.

Do not create a third undocumented content source simply for the homepage.

The editorial model must remain understandable to editors.

---

# 12. Market Dashboard Integration

Use the Day-Eight Market Dashboard.

Homepage version should be compact.

Display a limited set of approved indicators.

Source:

Market Item records.

Do not duplicate market data manually in homepage widgets.

The dashboard should link to the full `/market/` page.

---

# 13. Analysis & Reports

Purpose:

Move readers from current news to deeper editorial material.

Recommended structure:

- Main analysis feature.
- Supporting analysis list.
- Report cards.
- Optional subcategory links.

Primary editorial types:

- analysis
- report
- outlook

Use existing taxonomy/data structures.

Do not create homepage-only article categories.

---

# 14. Analysis Feature

Recommended editorial selection field:

analysis_feature

Fallback:

Latest suitable analysis post.

Requirements:

- Dynamic.
- No hard-coded article.
- Exclude from adjacent duplicate lists.
- Hide section if no suitable content exists.

---

# 15. Reports

Report cards should use the Day-Four Report Card.

Dynamic fields may include:

- Title.
- Issue.
- Pages.
- Format.
- Featured image.
- Download/read action.

Only show actions when the relevant URL/file exists.

Do not invent report metadata.

---

# 16. Companies Section

Use the Day-Seven Company CPT.

Recommended display:

- 4 company cards on desktop.
- 2 on tablet.
- 1 or compact horizontal treatment on mobile.

Data source:

Company CPT.

Do not build company cards from articles.

Optional editorial selection can use an explicit featured/display order field.

---

# 17. Technology Section

Use:

content_type = technology

and technology_topic taxonomy.

Recommended layout:

- 1 technology feature.
- Supporting technology articles.
- Topic links.

The feature can use an explicit technology_feature selection.

Topic links must come from the technology taxonomy.

Do not manually maintain topic labels inside Elementor if WordPress taxonomy is already the source of truth.

---

# 18. Interviews Section

Use:

content_type = interviews

Recommended display:

- 3 cards desktop.
- 2 tablet.
- 1 mobile.

Use Interview Card.

Dynamic interview metadata:

- Interviewee name.
- Position.
- Company.
- Portrait.
- Article title.

Missing portrait must not create broken image space.

---

# 19. Newsletter / CTA

Use the reusable global newsletter component.

Purpose:

Provide a clear subscription action after sufficient editorial value has been delivered.

Requirements:

- Real form integration on production.
- Staging-safe endpoint.
- Clear privacy/consent behavior where legally required.
- No intrusive popup by default.

Do not duplicate multiple competing newsletter forms on the homepage.

---

# 20. Section Headers

Use the Day-Three Section Header component.

Each section should have:

- Clear title.
- Optional short description.
- Optional archive link.

Examples:

- آخرین اخبار
- تحلیل و گزارش
- بازار فولاد
- شرکت‌ها
- فناوری
- مصاحبه‌ها

Archive links must point to real WordPress URLs.

---

# 21. Homepage Query Map

| Section | Source | Primary rule |
|---|---|---|
| Hero | Post relationships/curation | Explicit editorial selection |
| Latest News | Post | content_type = news |
| Market | Market Item | Approved dashboard indicators |
| Analysis | Post | content_type = analysis |
| Reports | Post | content_type = report |
| Companies | Company CPT | Published companies |
| Technology | Post | content_type = technology |
| Technology Topics | technology_topic | Taxonomy terms |
| Interviews | Post | content_type = interviews |
| Newsletter | Form integration | Production form source |

No section should rely on hard-coded article content.

---

# 22. Duplicate Content Strategy

The homepage should feel curated, not repetitive.

Track displayed post IDs across editorial sections.

Preferred exclusions:

- Hero posts excluded from Latest News.
- Hero posts excluded from Analysis/Technology/Interview lists when they would repeat immediately.
- Featured analysis excluded from supporting analysis list.
- Featured technology excluded from supporting technology list.

Exceptions are acceptable when repetition is editorially intentional.

Do not create complicated exclusion logic that makes queries fragile. Keep the rule explicit and testable.

---

# 23. Content Scarcity Rules

A section should not exist merely because the design specification contains it.

If a section lacks enough quality content:

- Reduce the number of cards.
- Use a smaller layout.
- Hide the section.
- Link to the parent archive where appropriate.

Never repeat articles to fill visual slots.

---

# 24. Homepage Responsive Behavior

Test:

- 1440px
- 1280px
- 1024px
- 768px
- 480px
- 390px
- 360px

Desktop:

- Full editorial hierarchy.
- Hero 8/4.
- Multi-column editorial sections.
- Market dashboard visible without dominating the page.

Tablet:

- Hero becomes less asymmetric if needed.
- Grids reduce columns.
- Market cards remain readable.

Mobile:

- Hero becomes a clear vertical sequence.
- Cards become one column unless a 2-up layout remains genuinely readable.
- Market dashboard becomes compact.
- No horizontal overflow.
- Section spacing remains consistent.
- Header/mobile navigation remains usable.

---

# 25. Homepage Accessibility

Verify:

- One meaningful H1.
- Logical heading hierarchy.
- All section links keyboard accessible.
- Focus states visible.
- Images have appropriate alt behavior.
- Cards do not create invalid nested links.
- Market change direction is not communicated by color alone.
- Newsletter controls have labels.
- Mobile navigation is keyboard accessible.

---

# 26. Homepage SEO

Homepage must have:

- Correct canonical root URL.
- Unique title.
- Appropriate meta description.
- Correct indexability.
- Open Graph metadata.
- Organization/site schema through the selected SEO implementation where appropriate.

Do not duplicate schema through Elementor widgets.

Homepage section headings should support content hierarchy but must not be used as an SEO keyword-stuffing mechanism.

---

# 27. Performance

Homepage is the most important performance surface.

Prioritize:

- Optimized hero image.
- Correct responsive image sizes.
- Limited initial market data.
- Lazy-loaded below-the-fold images.
- Minimal JavaScript.
- Reusable components.
- Efficient queries.

Avoid:

- Loading every article image eagerly.
- Multiple duplicate queries for the same posts.
- Large autoplay video.
- Heavy third-party widgets.
- Loading full market history on homepage.

---

# 28. Homepage Data Dependencies

Before final homepage assembly, verify these systems are working:

- Global Header.
- Global Footer.
- Section Header.
- Standard News Card.
- Featured Story.
- Compact News List.
- Analysis Card.
- Report Card.
- Company Card.
- Interview Card.
- Technology Card.
- Market Card.
- Company CPT.
- content_type taxonomy.
- technology_topic taxonomy.
- Market Item/Entry.
- Editorial relationships.

Do not build around a broken dependency and plan to fix it later.

---

# 29. Homepage Test Dataset

Staging should contain enough data to make the homepage representative.

Minimum recommended:

- 10+ news posts.
- 5+ analysis posts.
- 3+ reports.
- 3+ interviews.
- 6+ technology posts across multiple topics.
- 5+ companies.
- 6 Market Items.
- Realistic featured images.

These are staging-test targets, not production requirements.

---

# 30. Homepage Test Matrix

| Scenario | Expected |
|---|---|
| Hero selection | Correct selected stories |
| Hero missing selection | Documented fallback |
| News archive content | Latest eligible news |
| Hero/news overlap | No unnecessary duplicate |
| Analysis | Correct analysis content |
| Reports | Correct report metadata/actions |
| Companies | Published Company CPT records |
| Technology | Correct technology content/topics |
| Interviews | Correct interview metadata |
| Market | Current structured values |
| Missing market data | Controlled unavailable state |
| Sparse section | Reduced/hidden section |
| Mobile | No horizontal overflow |
| Missing images | Controlled fallback |

---

# 31. Visual QA

Evaluate the homepage as one editorial composition, not as isolated sections.

Check:

- Header-to-hero transition.
- Hero-to-news rhythm.
- Section spacing consistency.
- Card density.
- Typography hierarchy.
- Color balance.
- Image consistency.
- CTA prominence.
- Footer transition.

Avoid:

- Too many dark sections.
- Repeated identical card grids.
- Excessive rounded containers.
- Excessive shadows.
- Icon overload.
- Decorative gradients without purpose.

The result should feel like a professional steel-industry publication rather than a generic SaaS dashboard or magazine template.

---

# 32. Editorial QA

For each section ask:

1. Is the content actually useful?
2. Is the query returning the intended content?
3. Is the section duplicating another section?
4. Is the ordering understandable?
5. Is the archive link correct?
6. Does the section still work if content volume is low?

If the answer to these questions is not clear, fix the data/query model before adding visual complexity.

---

# 33. Implementation Order

1. Assemble global Header/Footer.
2. Add Market Ticker.
3. Build Hero.
4. Connect Latest News.
5. Connect Market Dashboard.
6. Connect Analysis/Reports.
7. Connect Companies.
8. Connect Technology.
9. Connect Interviews.
10. Add Newsletter/CTA.
11. Implement duplicate exclusions.
12. Implement sparse-content behavior.
13. Responsive QA.
14. Accessibility QA.
15. SEO QA.
16. Performance QA.
17. Full visual/editorial review.

Do not introduce new components unless the existing component inventory cannot satisfy a real requirement.

---

# 34. Homepage Acceptance Gate

### Structure
- [ ] Global Header works.
- [ ] Market Ticker works or hides cleanly.
- [ ] Hero works.
- [ ] Latest News works.
- [ ] Market Dashboard works.
- [ ] Analysis/Reports works.
- [ ] Companies works.
- [ ] Technology works.
- [ ] Interviews works.
- [ ] Newsletter works.
- [ ] Global Footer works.

### Dynamic Data
- [ ] No hard-coded article lists.
- [ ] No hard-coded company content.
- [ ] No hard-coded market values.
- [ ] Taxonomies are dynamic.
- [ ] Relationships are respected.

### Editorial Quality
- [ ] Hero has editorial priority.
- [ ] Latest News is current.
- [ ] Duplicate articles are controlled.
- [ ] Sparse sections degrade gracefully.
- [ ] Archive links are correct.

### SEO
- [ ] Canonical correct.
- [ ] Homepage metadata correct.
- [ ] Indexability correct.
- [ ] No conflicting schema.

### Quality
- [ ] Responsive QA passes.
- [ ] Accessibility baseline passes.
- [ ] Performance acceptable.
- [ ] Visual hierarchy is coherent.

---

# 35. Definition of Day Nine Done

Day Nine is complete when:

**The homepage can be populated entirely from WordPress content/data and the previously approved Elementor components, with no prototype-only content or data dependency.**

The key test is:

Change an article, company, technology topic, or Market Item in WordPress → refresh homepage → the correct section updates automatically without editing Elementor.

---

# 36. Next Stage

After Day Nine:

**Day Ten — Search, 404, SEO, Migration QA, and Production Readiness**

The next stage focuses on utility pages, redirects, metadata, crawlability, content integrity, performance, and final staging acceptance before migration/cutover.
