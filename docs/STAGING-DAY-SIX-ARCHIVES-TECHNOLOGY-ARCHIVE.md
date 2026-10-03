# Staging Day-Six — Archives and Technology Archive

## Goal

Day Six builds the archive layer of the production Elementor architecture.

Archives must be fully dynamic WordPress queries presented through reusable Elementor components.

The archive system must support:

- Main editorial archive.
- Content type archives.
- Technology topic archives.
- Legacy category URLs where required.
- Pagination.
- Dynamic archive headers.
- Featured content where justified.
- Empty states.
- SEO-safe archive behavior.

The archive is not a manually assembled list of articles.

## 1. Day-Six Deliverables

By the end of Day Six:

1. Post Archive Theme Builder template exists.
2. Content type archives work dynamically.
3. Technology archive works dynamically.
4. Technology topic filtering works.
5. Archive headers are dynamic.
6. Loop Grid uses reusable cards.
7. Pagination works.
8. Current archive context is preserved.
9. Empty states work.
10. Legacy category URLs are mapped.
11. Archive SEO behavior is defined.
12. Responsive archive QA passes.
13. Archive Acceptance Gate passes.

## 2. Archive Architecture

Primary template: Theme Builder → Archive.

The template must serve archive contexts dynamically:

- All editorial posts.
- content_type archives.
- technology_topic archives.
- Legacy category archives where migration requires them.
- Search is handled separately and must not be treated as a normal archive.

The archive template should not contain hard-coded article titles, images, URLs, or article lists.

## 3. URL Architecture

Preferred production URLs, subject to the live migration inventory:

- /category/news/
- /category/analysis/
- /category/report/
- /category/outlook/
- /category/interviews/
- /category/technology/
- /technology/production/
- /technology/metallurgy/
- /technology/automation/
- /technology/equipment/
- /technology/energy/
- /technology/decarbonization/

Do not change live URLs merely to make the architecture cleaner.

Before production migration:

- Crawl existing URLs.
- Export indexed URLs where available.
- Build old → new mapping.
- Create one-hop 301 redirects for changed URLs.
- Verify canonical URLs.

## 4. Dynamic Archive Header

Archive header should use the current archive context.

Display:

- Archive title.
- Optional description.
- Breadcrumbs.
- Optional topic/category navigation.

Examples:

- News → آخرین اخبار
- Analysis → تحلیل و گزارش
- Technology → فناوری
- Technology topic → current topic name

Do not hard-code one title for every archive.

## 5. Breadcrumbs

Use the global breadcrumb component.

Examples:

Home → Analysis

Home → Technology → Metallurgy

Home → Reports

Requirements:

- Dynamic.
- RTL.
- Correct archive links.
- Current archive not unnecessarily linked.
- No duplicate breadcrumb component.

## 6. Content Type Archive

The editorial content_type taxonomy controls archive membership.

Supported terms:

- news
- analysis
- report
- outlook
- interviews
- technology

Optional: special-reports only if real legacy content requires it.

The archive query must use the current WordPress archive context.

Do not manually select posts inside Elementor.

## 7. Main Editorial Archive

If the site has a general editorial archive, it should use:

- WordPress posts.
- Current editorial taxonomy.
- Newest first unless editorial requirement says otherwise.
- Pagination.

Recommended structure:

1. Breadcrumb.
2. Dynamic archive title.
3. Description if available.
4. Optional featured stories.
5. Main Loop Grid.
6. Pagination.
7. Newsletter/CTA.
8. Footer.

Do not create a permanent sidebar unless a concrete editorial requirement exists.

## 8. Featured Archive Content

Optional featured section may be used when the archive has enough editorial volume.

Recommended:

- 1 primary featured story.
- 2 secondary stories.

Selection must be dynamic using an editorial featured flag/field or controlled query.

Do not manually hard-code article IDs into the template.

If no featured content is available, hide the featured section and start directly with the archive Loop Grid.

## 9. Archive Loop Grid

Use the reusable components created on Day Four.

Primary: Standard News Card.

Optional: Featured Story and Compact News List.

The archive card should display:

- Image.
- Content type/category.
- Title.
- Excerpt when appropriate.
- Date.
- Reading time when available.

Do not display every available field.

Archive cards should remain editorial and information-dense.

## 10. Query Rules

Default archive query:

- Current archive context.
- Published posts only.
- Newest first unless editorial requirement says otherwise.
- Correct post type.
- Correct taxonomy context.

Do not query drafts, private posts, revisions, or unpublished content.

## 11. Pagination

Use real WordPress pagination.

Requirements:

- Previous.
- Next.
- Page numbers where appropriate.
- Correct query state.
- Correct archive context.
- Crawlable pagination links where supported.
- No infinite scroll as the only navigation method.

Do not create fake pagination with JavaScript-only buttons.

## 12. Technology Archive

Technology uses the additional taxonomy layer: technology_topic.

Terms:

- production
- metallurgy
- automation
- equipment
- energy
- decarbonization

The technology archive must support /technology/ and topic archives at /technology/{topic}/.

The topic archive uses the same base archive template with the current topic context.

## 13. Technology Navigation

At the top of the Technology archive, provide dynamic topic navigation.

Example labels:

- همه
- تولید
- متالورژی
- اتوماسیون
- تجهیزات
- انرژی
- کربن‌زدایی

Requirements:

- Dynamic from taxonomy terms.
- Current topic visually active.
- Links use real archive URLs.
- No hard-coded topic list if taxonomy is already the source of truth.
- Empty terms should be hidden where appropriate.

## 14. Technology Topic Header

For a topic archive display:

- Technology label.
- Current topic name.
- Topic description when available.
- Breadcrumb.

Example:

Home → Technology → Metallurgy

Then the current topic name and taxonomy description.

Do not duplicate the same description in multiple Elementor widgets.

## 15. Technology Query

Topic archive must query:

- post type = post.
- content_type includes technology.
- technology_topic = current topic.
- status = published.

This prevents unrelated content from appearing inside a technology topic archive.

If the project later allows other editorial types to have technology topics, document that rule before changing the query.

## 16. Technology Feature Section

Optional.

If used:

- Select featured technology content dynamically.
- Use the Featured Story component.
- Do not repeat the same article immediately in the main Loop Grid.

If no feature exists, hide the section.

## 17. Duplicate Content Prevention

An article shown in the featured section should normally be excluded from the first page of the main Loop Grid.

Use explicit post-ID exclusions so primary and secondary featured articles do not immediately repeat in the grid.

## 18. Archive Empty State

If an archive contains no published content, display a controlled empty state.

Example:

محتوایی برای نمایش وجود ندارد.

Optional actions:

- Parent archive.
- Latest news.
- Search.

Do not show an empty Loop Grid or broken pagination.

## 19. Archive Card Behavior

Cards must use the Day-Four component system.

Rules:

- Entire card may be clickable only if accessible.
- Title must be a real link.
- Image must link to article.
- Avoid nested interactive elements.
- Preserve clear focus states.
- Avoid excessive hover animation.

Use WordPress featured images with correct responsive sizes and meaningful alt behavior.

## 20. Legacy Category Handling

Existing live category URLs must be audited before migration.

For each legacy category:

1. Identify current URL.
2. Identify content membership.
3. Map to content_type or technology_topic.
4. Decide whether URL can remain unchanged.
5. If URL changes, create 301.
6. Test final destination.
7. Verify canonical.

Do not delete old categories before migration mapping is complete.

## 21. Search vs Archive

Search is not an archive.

Search:

- User-generated query.
- /search/?s=query
- Separate Search Results template.
- Noindex/follow policy as defined in the Search blueprint.

Archive:

- Taxonomy/context driven.
- Indexable when editorially valuable.
- Stable canonical archive URL.

## 22. Archive SEO

For indexable archives:

- Unique title.
- Appropriate meta description.
- Canonical archive URL.
- Correct indexability.
- Breadcrumb support.
- Valid pagination.
- Useful archive content.

Avoid thin archives. If an archive has insufficient editorial value, consider noindex rather than exposing it as a major navigation destination.

SEO plugin remains responsible for final meta/schema behavior. Elementor should not create conflicting metadata.

## 23. Structured Data

Use the selected SEO/schema system for archive and breadcrumb structured data where supported.

Do not manually inject duplicate schema through Elementor unless a documented requirement exists.

Article schema belongs to Single Article. Archive schema belongs to archive/context where appropriate.

## 24. Responsive Layout

Test:

- 1440px
- 1280px
- 1024px
- 768px
- 480px
- 390px
- 360px

Desktop: optional featured grid and 3- or 4-column article grid depending on card density.

Tablet: 2-column grid where appropriate.

Mobile: 1-column feed, compact metadata, usable topic navigation, accessible pagination, no horizontal overflow.

## 25. Accessibility

Verify:

- One meaningful H1 per archive page.
- Logical heading hierarchy.
- Current topic has a clear active state.
- Pagination has accessible labels.
- Keyboard navigation works.
- Focus states are visible.
- Links have meaningful names.
- Images have appropriate alt behavior.
- Color is not the only active-state indicator.

## 26. Performance

Archive pages can contain many cards, so performance is important.

Use:

- Appropriate image sizes.
- Lazy loading.
- Limited initial query size.
- Efficient taxonomy queries.
- Reusable lightweight cards.
- Minimal custom JavaScript.

Avoid rendering hidden cards, duplicate queries, large background assets, heavy animation, and unnecessary third-party widgets.

## 27. Archive Test Dataset

Test with:

- News: at least 8 published posts.
- Analysis: at least 5.
- Reports: at least 3.
- Interviews: at least 3.
- Technology: at least 6 distributed across multiple topics.
- Technology topics: test production, metallurgy, automation, and an empty topic.

These are staging-test targets, not production content requirements.

## 28. Archive Test Matrix

| Scenario | Expected |
|---|---|
| News archive | Only matching editorial content |
| Analysis archive | Only analysis |
| Report archive | Only reports |
| Interview archive | Only interviews |
| Technology archive | Technology content |
| Technology topic | Matching topic |
| Empty topic | Clean empty state |
| Pagination page 2 | Correct next set |
| Featured content | No duplicate in grid |
| Missing image | Controlled fallback |
| Missing excerpt | Clean card |
| Legacy category | Correct mapping/redirect |
| Mobile archive | No overflow |

## 29. Implementation Order

1. Archive Theme Builder template.
2. Dynamic archive header.
3. Breadcrumbs.
4. Topic/category navigation.
5. Loop Grid.
6. Pagination.
7. Featured archive section.
8. Empty state.
9. Technology topic context.
10. Legacy category mapping.
11. SEO configuration.
12. Responsive QA.
13. Accessibility QA.
14. Performance QA.

Do not optimize decorative details before archive queries and pagination are proven.

## 30. Archive Acceptance Gate

### Dynamic
- [ ] Archive title dynamic.
- [ ] Archive description dynamic.
- [ ] Archive query dynamic.
- [ ] Loop Grid dynamic.
- [ ] Pagination dynamic.
- [ ] Technology topic dynamic.
- [ ] Breadcrumbs dynamic.

### Query
- [ ] Only published content.
- [ ] Correct taxonomy context.
- [ ] Correct technology topic filtering.
- [ ] Featured items excluded from main grid.
- [ ] No accidental duplicates.

### UX
- [ ] Empty state works.
- [ ] Active taxonomy state works.
- [ ] Mobile navigation works.
- [ ] Pagination works.
- [ ] No horizontal overflow.

### SEO
- [ ] Canonical correct.
- [ ] Indexability correct.
- [ ] Archive metadata correct.
- [ ] Legacy redirects tested.
- [ ] No conflicting schema/meta.

### Quality
- [ ] Responsive QA passes.
- [ ] Accessibility baseline passes.
- [ ] Performance acceptable.
- [ ] No hard-coded article lists.

## 31. Definition of Day Six Done

Day Six is complete when opening any supported archive URL automatically produces the correct archive title, taxonomy context, article query, reusable cards, pagination, and SEO behavior from WordPress data.

The key test is:

Assign a post to a taxonomy/topic → publish it → open the corresponding archive → the article appears automatically without editing Elementor.

## 32. Next Stage

After Day Six:

**Day Seven — Company Archive + Single Company**

Company pages should consume the Company CPT and explicit article relationships already defined in the data foundation.

The Company layer must not reintroduce text-search-based article matching.
