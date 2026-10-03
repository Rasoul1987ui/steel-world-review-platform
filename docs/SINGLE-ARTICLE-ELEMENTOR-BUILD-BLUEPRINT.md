# Single Article — Elementor Build Blueprint

## Objective
Build the production Single Post template in Elementor Theme Builder for news, analysis, reports, outlook, technology and interviews.

Core rule: WordPress is the content source; Elementor is presentation.

## Template
Elementor → Theme Builder → Single Post → Include Posts → All.

Structure:
1. Article Header
2. Main Article Layout
3. Article Body
4. Tags / Metadata
5. Related Companies
6. Conditional Interview Block
7. Conditional Report Block
8. Related Articles
9. Newsletter
10. Footer

## Layout
Site max width: 1320px.

Desktop: approximately 8/12 main article + 4/12 secondary area, 32px gap.
Tablet: reduce gap and stack secondary content when needed.
Mobile: single column, no horizontal overflow.

## Article Header
Order:
Content Type → H1 → Excerpt → Meta Row → Featured Image.

Content Type:
Dynamic taxonomy content_type. Never hard-code.

H1:
Dynamic Post Title. Exactly one H1. No duplicated title.

Excerpt:
Dynamic Post Excerpt. ACF short_excerpt may be a controlled fallback only; do not duplicate content.

Meta:
Post Author + Post Date + ACF reading_time.
Keep compact and editorial. Do not calculate reading time separately if ACF is authoritative.

## Featured Image
Dynamic Featured Image.
Use responsive WordPress image sizes, preserve aspect ratio, optimize above-the-fold loading, and define one consistent alt-text fallback rule using native image alt / custom_image_alt.

## Article Body
Use native Post Content. Never copy article text into Elementor.

Recommended reading width: approximately 760–850px on large screens.
Use semantic H2/H3/H4 hierarchy. Do not skip heading levels for visual reasons.

Support paragraphs, lists, quotes, images, tables and embeds. Tables must not create page-wide horizontal overflow.

## Tags and Topics
Use dynamic post_tag.
Show technology_topic only when assigned.
Keep tag styling restrained.

## Related Companies
Source: ACF related_companies.
Relationship is Article → Company CPT, multiple allowed.

Display logo, company name, optional English name and permalink.

Use explicit relationship queries. Do not reproduce the prototype text-search approach based on company names.

If ACF Relationship cannot be queried reliably, use the approved dedicated company taxonomy instead. Never maintain two competing relationship systems.

Hide the block when empty.

## Interview Block
Show only when content_type=interviews and interview metadata exists.

Fields:
- interviewee_name
- interviewee_position
- interviewee_company
- interviewee_portrait

Suggested layout: portrait + name + position + company.
Hide empty fields.

## Report Block
Show only when content_type=report and report metadata exists.

Fields:
- report_issue
- report_pages
- report_format
- report_pdf
- report_download_url

Show restrained report information and download/view CTA. Define one priority rule if both PDF and external URL exist. Never render empty buttons.

## Source
Optional ACF source_url.
Hide when empty. Follow the site's external-link policy.

## Author
Use native WordPress users/authors. Optional archive/avatar only where supported. Do not create an Author CPT without a real requirement.

## Related Articles
Place after article metadata/conditional modules and before Newsletter.

Query rules:
- exclude current post;
- prioritize same content_type or relevant taxonomy;
- optionally use shared technology topic/tags;
- newest first;
- controlled result count.

Do not use arbitrary title-text matching.

Desktop: 3 cards. Tablet: 2. Mobile: 1.
Reuse existing News/Analysis/Report loop components.

## Newsletter
Use the approved site-wide Newsletter component, Gravity Forms or Elementor Form. Use the actual configured form/service; never a fake endpoint.

## Share Actions
Optional and secondary. Use the approved WordPress/Elementor sharing mechanism. Avoid oversized social toolbars.

## Optional Table of Contents
Only enable if production articles consistently have enough H2/H3 sections to justify it. Derive from actual headings and avoid unnecessary custom JavaScript.

## SEO
Use the configured SEO plugin and WordPress metadata.

Requirements:
- one H1;
- semantic heading hierarchy;
- canonical from WordPress/SEO plugin;
- title/meta description from SEO configuration;
- Open Graph/Twitter metadata from SEO plugin;
- Article schema from one approved system only;
- no accidental noindex;
- correct image metadata.

Do not duplicate schema across systems.

## URLs
The template does not define the permalink. Preserve existing article URLs where possible.

Before migration:
1. crawl/export live URLs;
2. preserve matching slugs;
3. identify changed URLs;
4. create 301 redirects only where required;
5. verify staging and production behavior.

Target structure is preferably /articles/{slug}/ only if approved by the migration map.

## Responsive
1440px: 1320px max width, 8/4 layout, 3 related cards.
1280px: same structure, reduced gaps if needed.
1024px: reduce sidebar and title size; prepare for stacking.
768px: single-column article priority; related cards 2 columns.
480px: compact metadata, smaller headings, 1-column related cards.
390px: verify long Persian titles, buttons and metadata.
360px: verify no clipping or fixed-width components.

## Performance
- responsive WordPress image sizes;
- lazy-load below-fold images;
- prioritize/optimize featured image;
- avoid duplicate background/foreground images;
- no unnecessary JavaScript;
- minimal animation;
- no homepage-only modules on article pages;
- reuse Elementor Loop templates;
- custom CSS/JS only for genuine gaps.

## Accessibility
- semantic H1/H2/H3;
- meaningful alt text;
- visible keyboard focus;
- sufficient contrast;
- understandable link/button labels;
- no color-only information;
- usable mobile controls.

## Implementation Order
1. Create Single Post Theme Builder template.
2. Build Article Header.
3. Add dynamic H1.
4. Add excerpt.
5. Add meta row.
6. Add featured image.
7. Add Post Content.
8. Style article typography.
9. Add tags.
10. Add related companies.
11. Add conditional interview block.
12. Add conditional report block.
13. Add optional source.
14. Add Related Articles Loop Grid.
15. Add Newsletter.
16. Apply responsive settings.
17. Test against all post types and missing optional fields.
18. Run SEO, accessibility and performance checks.

## Dynamic Mapping
| UI | Production source |
|---|---|
| Content type | content_type taxonomy |
| H1 | Post Title |
| Excerpt | Post Excerpt / short_excerpt fallback |
| Body | Post Content |
| Featured image | Featured Image |
| Date | Post Date |
| Author | Post Author |
| Reading time | ACF reading_time |
| Tags | post_tag |
| Technology topic | technology_topic |
| Related companies | ACF related_companies |
| Interview data | ACF interviewee_* |
| Report data | ACF report_* |
| Source | ACF source_url |
| Related articles | WordPress query / Loop Grid |

## Acceptance Checklist

### Content
- [ ] Dynamic title and exactly one H1
- [ ] Dynamic excerpt
- [ ] Native Post Content
- [ ] Featured image
- [ ] Author/date/reading time
- [ ] Tags and technology topic
- [ ] Explicit company relationships
- [ ] Conditional interview block
- [ ] Conditional report block
- [ ] Conditional source
- [ ] Related articles exclude current post

### Design
- [ ] Global colors and typography
- [ ] Containers, not legacy sections/columns
- [ ] Comfortable article width
- [ ] Sidebar remains secondary
- [ ] Existing loop components reused

### Responsive
- [ ] 1440
- [ ] 1280
- [ ] 1024
- [ ] 768
- [ ] 480
- [ ] 390
- [ ] 360

### SEO / Performance
- [ ] Correct canonical
- [ ] SEO metadata
- [ ] One schema implementation
- [ ] No accidental noindex
- [ ] Optimized images
- [ ] No unnecessary scripts
- [ ] No horizontal overflow
- [ ] No console errors

## Final Principle
The article content belongs to WordPress. Elementor controls structure, visual hierarchy, reusable components and responsive behavior. ACF supplies structured metadata. The SEO plugin owns canonical/meta/schema responsibilities. Migration controls URL preservation and redirects. The prototype is only a visual/architectural reference.
