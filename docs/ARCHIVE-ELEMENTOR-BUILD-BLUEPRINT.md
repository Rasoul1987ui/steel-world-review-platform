# Archive / Category — Elementor Build Blueprint

## Objective

Build the production archive system for Steel World Review using Elementor Theme Builder.

Supports:
- news
- analysis
- reports
- outlook
- interviews
- technology
- technology topics
- legacy category URLs where required

Core rule: archive pages are dynamic WordPress queries presented through Elementor. Do not hard-code article lists.

## 1. Theme Builder Template

Create Elementor Theme Builder → Archive → Post Archive.

Primary template:
- Post Archive — all relevant post archives.

If different editorial types need materially different layouts, use conditional templates or controlled variants. Do not duplicate templates merely to change titles/colors.

Structure:
1. Archive Header
2. Optional Featured Stories
3. Main Archive Loop
4. Pagination
5. Newsletter
6. Footer

## 2. Archive Data Model

Primary query source: Native WordPress Posts.

Taxonomies:
- content_type
- technology_topic
- post_tag

Supported content types:
- news
- analysis
- report
- outlook
- interviews
- technology

Company content remains a Company CPT and uses its own archive template.

## 3. Archive Header

Dynamic elements:
- Archive Title
- Archive Description
- Optional taxonomy label
- Optional child-topic navigation

Do not manually enter archive names in every template. Use the current queried taxonomy/term wherever Elementor supports it.

Maximum width: 1320px.

## 4. Category / Topic Navigation

For archives with meaningful child topics, show compact navigation.

Technology:
همه | تولید | متالورژی | اتوماسیون | تجهیزات | انرژی | کربن‌زدایی

Rules:
- real taxonomy/archive URLs;
- active term visually identifiable;
- no JavaScript-only tabs;
- horizontal scrolling allowed on narrow screens;
- no duplicate content pages for filters.

Preferred production URLs:
- /technology/
- /technology/{topic}/

Final URLs must follow the migration map.

## 5. Featured Archive Stories

Optional.

Use only where editorial hierarchy improves usability.

Desktop:
- primary story: 6–7 columns;
- secondary stories: 5–6 columns.

Reuse Featured Story and Standard News Card.

Featured posts must be excluded from the following main archive loop.

## 6. Main Archive Grid

Use Elementor Loop Grid.

Query:
- current archive query/current term;
- correct post type;
- correct taxonomy;
- exclude featured posts when necessary.

Desktop: 3 columns.
Tablet: 2 columns.
Mobile: 1 column.

Reuse:
- News Card
- Analysis Card
- Report Card
- Interview Card
- Technology Card

## 7. Loop Card Mapping

### Standard News Card
Featured Image, content type label, Post Title, optional Excerpt, Post Date, Reading Time, Permalink.

### Analysis Card
Featured Image, Analysis label, Title, Excerpt, Date, Reading Time.

### Report Card
Featured Image, Report label, Title, issue/page metadata when available, Date, Permalink.

### Interview Card
Featured Image, Interview label, Title, interviewee/company metadata when appropriate, Date, Permalink.

### Technology Card
Featured Image, Technology topic, Title, Excerpt, Date, Permalink.

All data must be dynamic.

## 8. Query Rules

News Archive:
content_type = news

Analysis Archive:
content_type = analysis

Report Archive:
content_type = report

Outlook Archive:
content_type = outlook

Interview Archive:
content_type = interviews

Technology Archive:
content_type = technology

Technology Topic:
content_type = technology AND technology_topic = current topic

All standard archives: newest first.

Technology topics must use real taxonomy queries, not title searches.

## 9. Pagination

Preferred:
- standard paginated archive;
- SEO-friendly crawlable pagination.

Avoid infinite scroll as the only navigation method and client-side-only loading.

If Load More is later added, preserve crawlable pagination or another SEO-safe fallback.

Pagination must be keyboard accessible, visually consistent, and usable on mobile.

## 10. Empty States

Every archive needs a controlled empty state.

If no posts match:
- show archive title;
- explain that no content is currently available;
- link to parent archive or latest news.

Never show an empty Loop Grid or broken layout.

## 11. Search vs Archive

Do not use archive templates as search templates.

Search:
 /search/?s=query

Archive:
 taxonomy/content-driven query.

Search Results gets its own template.

## 12. Legacy Category URLs

Do not remove or redirect existing production categories blindly.

Before migration:
1. crawl current category URLs;
2. identify indexed/used URLs;
3. map each category to the new taxonomy;
4. preserve URLs where practical;
5. add 301 redirects only when the final URL changes.

Legacy categories may remain compatibility routes when necessary.

## 13. Duplicate Archive Risk

Avoid multiple indexable URLs showing the same archive.

Examples:
- /category/news/
- /news/
- /content-type/news/

Choose one canonical archive URL for each editorial concept.

Control legacy duplicates with redirects, canonical metadata and taxonomy mapping.

## 14. SEO

Use the site's SEO plugin.

Requirements:
- useful archive title;
- useful archive description;
- canonical URL;
- intentional index/noindex rule;
- crawlable pagination;
- no accidental duplicate archives.

Do not add custom schema when the SEO plugin already owns the relevant schema.

Do not noindex every taxonomy by default.

## 15. Breadcrumbs

Optional but recommended for deeper archives.

Example:
خانه → فناوری → متالورژی

Dynamic, linked and visually restrained. Breadcrumbs do not replace the main archive heading.

## 16. Technology Archive

Technology gets a dedicated editorial treatment because it has a structured topic taxonomy.

Structure:
Header
→ Topic navigation
→ Featured technology stories
→ Technology Loop Grid
→ Pagination
→ Newsletter

Topics:
- production
- metallurgy
- automation
- equipment
- energy
- decarbonization

Do not create separate manually designed Elementor pages for every topic unless genuinely required.

## 17. Sidebar

Default: no permanent sidebar on standard archives.

Use full-width editorial grids for news, analysis, technology and interviews.

A sidebar can be introduced later if real use cases justify it.

## 18. Responsive Blueprint

1440px:
- 1320px max width;
- 3-column grid;
- optional featured 7/5 or 6/6.

1280px:
- maintain 3 columns;
- reduce gaps if necessary.

1024px:
- 2 or 3 columns depending on card minimum width;
- reduce heading sizes.

768px:
- 2-column archive grid;
- featured section stacks or becomes 2-column.

480px:
- 1-column cards;
- compact archive header;
- topic navigation may scroll horizontally.

390px:
- verify long Persian titles;
- no clipped metadata;
- no horizontal page overflow.

360px:
- same checks;
- pagination remains tappable.

## 19. Performance

- Use appropriate WordPress image sizes.
- Lazy-load archive images below the first viewport.
- Do not load full-resolution originals into Loop Grid.
- Avoid unnecessary JavaScript.
- Avoid autoplay media inside archive cards.
- Reuse Loop templates.
- Keep hover effects CSS-based and lightweight.
- Do not load homepage-only market/chart scripts on standard archives.

## 20. Accessibility

- semantic archive heading;
- meaningful image alt text;
- keyboard-accessible links;
- visible focus state;
- sufficient contrast;
- active taxonomy navigation distinguishable without color alone;
- accessible pagination labels;
- meaningful card link names.

## 21. Elementor Implementation Order

1. Create Post Archive Theme Builder template.
2. Configure archive display conditions.
3. Build Archive Header.
4. Add dynamic title.
5. Add dynamic description.
6. Add taxonomy/topic navigation.
7. Build optional Featured Stories.
8. Build Main Loop Grid.
9. Assign the correct Loop Card template.
10. Configure query source.
11. Configure pagination.
12. Build empty state.
13. Add Newsletter.
14. Apply responsive settings.
15. Test every content type.
16. Test technology topics.
17. Test legacy category URLs.
18. Run SEO and performance checks.

## 22. Acceptance Checklist

### Archive behavior
- [ ] News archive works.
- [ ] Analysis archive works.
- [ ] Report archive works.
- [ ] Outlook archive works.
- [ ] Interview archive works.
- [ ] Technology archive works.
- [ ] Technology topic archives work.
- [ ] Empty states work.
- [ ] Pagination works.
- [ ] Featured posts are excluded from the main loop when applicable.

### Dynamic data
- [ ] Archive title is dynamic.
- [ ] Description is dynamic.
- [ ] Loop content is dynamic.
- [ ] Taxonomy labels are dynamic.
- [ ] Dates/authors/reading time follow the production model.
- [ ] No article lists are hard-coded.

### SEO
- [ ] Canonical URLs are correct.
- [ ] Index/noindex rules are intentional.
- [ ] Legacy category URLs are mapped.
- [ ] No duplicate archive URL is accidentally indexable.
- [ ] Pagination is crawlable.

### Responsive
- [ ] 1440
- [ ] 1280
- [ ] 1024
- [ ] 768
- [ ] 480
- [ ] 390
- [ ] 360

### Performance / Accessibility
- [ ] Correct image sizes.
- [ ] No unnecessary scripts.
- [ ] No horizontal overflow.
- [ ] Keyboard navigation works.
- [ ] Focus states are visible.
- [ ] No console errors.

## Final Principle

Archive pages should feel like editorial sections of one publication, not separate Elementor microsites.

WordPress controls the query, posts, taxonomies, pagination and metadata.

Elementor controls layout, hierarchy, reusable cards and responsive behavior.

The archive template must remain reusable as the publication grows.
