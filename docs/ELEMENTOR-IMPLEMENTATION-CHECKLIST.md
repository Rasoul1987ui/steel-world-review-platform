# Steel World Review — Elementor Implementation Checklist

This is the execution checklist for converting the approved prototype/data model into the WordPress + Hello Elementor + Elementor Pro production build.

## 0. Before touching production

- [ ] Clone/backup the current Steel World Review site.
- [ ] Confirm staging URL and database/files are isolated from production.
- [ ] Export the current URL inventory.
- [ ] Export current categories, tags, authors and media references.
- [ ] Record current permalink structure.
- [ ] Record current XML sitemap URLs.
- [ ] Record important indexed/article/category/company URLs.
- [ ] Do not delete the existing theme/site until migration QA is complete.

## 1. WordPress base setup

- [ ] Activate Hello Elementor.
- [ ] Activate Elementor Pro.
- [ ] Confirm RTL.
- [ ] Confirm Persian font availability.
- [ ] Set Site Language to Persian where appropriate.
- [ ] Set timezone correctly.
- [ ] Set permalink structure to match the existing site unless migration requires a mapped change.
- [ ] Configure image sizes before bulk migration.
- [ ] Disable unnecessary comments/features if not used.
- [ ] Keep Yoast SEO and existing SEO configuration during migration unless there is a documented reason to change it.

## 2. Create Company CPT

CPT:
`company`

Rewrite:
`companies`

- [ ] Enable title.
- [ ] Enable editor.
- [ ] Enable featured image.
- [ ] Enable revisions.
- [ ] Register archive.
- [ ] Register REST support if the site will later use REST/API integrations.
- [ ] Do not expose comments unless required.

Expected URLs:

`/companies/`
`/companies/company-slug/`

## 3. Create editorial taxonomy

Taxonomy:
`content_type`

Terms:

- [ ] اخبار → `news`
- [ ] تحلیل → `analysis`
- [ ] گزارش → `report`
- [ ] چشم‌انداز → `outlook`
- [ ] مصاحبه → `interviews`
- [ ] فناوری → `technology`

- [ ] Assign taxonomy to Post.
- [ ] Map existing categories before removing/renaming anything.

## 4. Create technology taxonomy

Taxonomy:
`technology_topic`

Terms:

- [ ] تولید → `production`
- [ ] متالورژی → `metallurgy`
- [ ] اتوماسیون → `automation`
- [ ] تجهیزات → `equipment`
- [ ] انرژی → `energy`
- [ ] کربن‌زدایی → `decarbonization`

- [ ] Assign taxonomy to Post.
- [ ] Use only for technology content.

## 5. ACF — Editorial Metadata

Create field group:
`Editorial Metadata`

Location:
Post Type = Post

Fields:

- [ ] Reading Time — Number — `reading_time`
- [ ] Short Excerpt — Textarea — `short_excerpt`
- [ ] Custom Image Alt — Text — `custom_image_alt`
- [ ] Related Companies — Relationship/Post Object — `related_companies`
- [ ] Source URL — URL — `source_url`

Recommended:
- [ ] Relationship returns Post Object.
- [ ] Relationship allows multiple companies.
- [ ] Relationship only allows Company CPT.
- [ ] Do not create duplicate ACF title/excerpt/image fields.

## 6. ACF — Interview Metadata

Create:
`Interview Metadata`

Location:
Post + content_type = interviews

Fields:

- [ ] Interviewee Name — Text — `interviewee_name`
- [ ] Position — Text — `interviewee_position`
- [ ] Company — Text — `interviewee_company`
- [ ] Portrait — Image — `interviewee_portrait`

Elementor visibility:
- [ ] Interview block hidden when interviewee name is empty.

## 7. ACF — Report Metadata

Create:
`Report Metadata`

Location:
Post + content_type = report

Fields:

- [ ] Issue — Text — `report_issue`
- [ ] Pages — Number — `report_pages`
- [ ] Format — Select — `report_format`
- [ ] PDF — File — `report_pdf`
- [ ] Download URL — URL — `report_download_url`

Select values:
- [ ] PDF
- [ ] Online

Conditional UI:
- [ ] PDF download when PDF exists.
- [ ] Online CTA when online URL exists.
- [ ] Never show an empty CTA.

## 8. ACF — Company Profile

Create:
`Company Profile`

Location:
Post Type = Company

Fields:

- [ ] English Name — Text — `company_name_en`
- [ ] Logo — Image — `company_logo`
- [ ] Country — Text — `country`
- [ ] City — Text — `city`
- [ ] Activity — Text — `activity`
- [ ] Founded — Number — `founded`
- [ ] Capacity — Text — `capacity`
- [ ] Website — URL — `website`
- [ ] Contact — Text — `contact`
- [ ] Description — WYSIWYG — `company_description`

Native Company Title:
- [ ] Persian company name

## 9. Company relationship test

Before designing Elementor:

- [ ] Create 3 test companies.
- [ ] Create 5 test posts.
- [ ] Assign different companies to posts.
- [ ] Verify multiple companies can be attached to one post.
- [ ] Verify one company can have multiple posts.
- [ ] Verify Elementor can query posts for the current Company.
- [ ] If Elementor cannot reliably query ACF Relationship data, switch to one dedicated `company` taxonomy rather than maintaining two parallel systems.

Do not proceed to the final Company template until this test passes.

## 10. Market data

Create CPT:
`market_item`

Rewrite:
`market`

Fields:

- [ ] English Name — `name_en`
- [ ] Value — `value`
- [ ] Decimals — `decimals`
- [ ] Unit — `unit`
- [ ] Basis — `basis`
- [ ] Change — `change`
- [ ] Change % — `change_percent`
- [ ] Updated At — `updated_at`
- [ ] Source — `source`

If historical charts are required:

CPT:
`market_entry`

- [ ] Market Item relationship
- [ ] Date
- [ ] Value

Important:
- [ ] Do not copy prototype mock prices into production as live data.

## 11. Elementor Global Settings

Create Global Colors:

- [ ] Primary — #194B7E
- [ ] Accent — #89CDAC
- [ ] Navy — #0E2A47
- [ ] Text — #17202A
- [ ] Muted — #667085
- [ ] Background — #F7F9FA
- [ ] White — #FFFFFF
- [ ] Border — #E5E7EB

Global fonts:
- [ ] Persian primary font
- [ ] Heading font
- [ ] Body font
- [ ] Numeric/English fallback

Layout:
- [ ] Max content width = 1320px
- [ ] RTL
- [ ] Containers only
- [ ] Consistent spacing scale

## 12. Build Header

Theme Builder → Header → Entire Site

Structure:

- [ ] Top utility bar
- [ ] Main logo
- [ ] Main navigation
- [ ] Search
- [ ] Market button/link
- [ ] Mobile menu
- [ ] Optional market ticker

Navigation target:

- [ ] آخرین اخبار
- [ ] تحلیل و گزارش
- [ ] بازار فولاد
- [ ] شرکت‌ها
- [ ] فناوری
- [ ] مصاحبه‌ها

Rules:
- [ ] Maximum visual clutter avoided.
- [ ] No duplicated mobile/desktop data source.
- [ ] Sticky behavior tested on desktop/mobile.

## 13. Build Footer

Theme Builder → Footer → Entire Site

Include:

- [ ] Brand/description
- [ ] Main links
- [ ] Market links
- [ ] Company links
- [ ] Contact
- [ ] Social links
- [ ] Copyright

## 14. Build News Card Loop

Loop Item:
`News Card`

Dynamic:

- [ ] Featured Image
- [ ] content_type
- [ ] Post Title
- [ ] Excerpt when needed
- [ ] Post Date
- [ ] Permalink

- [ ] Test long Persian titles.
- [ ] Test missing image.
- [ ] Test missing excerpt.
- [ ] Test mobile.

## 15. Build Featured Story Loop

Loop Item:
`Featured Story`

- [ ] Large featured image
- [ ] Category
- [ ] Title
- [ ] Excerpt
- [ ] Date
- [ ] Link

Use only where a larger editorial presentation is intended.

## 16. Build News List Loop

- [ ] Compact thumbnail
- [ ] Category
- [ ] Title
- [ ] Date
- [ ] Permalink

Test:
- [ ] 10+ items
- [ ] Long titles
- [ ] Mobile stacking

## 17. Build Company Card Loop

Dynamic:

- [ ] Company Logo
- [ ] Company Title
- [ ] English Name
- [ ] Activity
- [ ] City/Country
- [ ] Permalink

Query:
Post Type = Company

## 18. Build Interview Card Loop

Dynamic:

- [ ] Interviewee portrait
- [ ] Interviewee name
- [ ] Position
- [ ] Company
- [ ] Article title
- [ ] Article permalink

Query:
Post + content_type = interviews

## 19. Build Market Card Loop

Dynamic:

- [ ] Market Item title
- [ ] Value
- [ ] Unit
- [ ] Change
- [ ] Change %
- [ ] Trend if available

- [ ] Verify decimal formatting.
- [ ] Verify positive/negative states.
- [ ] Verify RTL and numeric alignment.

## 20. Single Post template

Theme Builder → Single Post

Build in this order:

1. [ ] Breadcrumb
2. [ ] Content type
3. [ ] Title
4. [ ] Excerpt
5. [ ] Author/date/reading time
6. [ ] Featured image
7. [ ] Interviewee conditional block
8. [ ] Report conditional block
9. [ ] Post Content
10. [ ] Tags
11. [ ] Related posts
12. [ ] Newsletter CTA

Dynamic mapping:
- [ ] Title → Post Title
- [ ] Excerpt → Post Excerpt
- [ ] Content → Post Content
- [ ] Image → Featured Image
- [ ] Author → Post Author
- [ ] Date → Post Date
- [ ] Type → content_type
- [ ] Tags → post_tag
- [ ] Reading time → ACF

## 21. Archive template

Theme Builder → Archive

Build:

- [ ] Archive title
- [ ] Archive description
- [ ] Optional child/topic navigation
- [ ] Featured Loop Grid
- [ ] Main Loop Grid
- [ ] Pagination

Conditions:
- [ ] content_type archives
- [ ] technology_topic archives

Do not create six separate Elementor archive designs unless the editorial layout genuinely differs.

## 22. Technology archive

Preferred routes:

- [ ] /technology/
- [ ] /technology/production/
- [ ] /technology/metallurgy/
- [ ] /technology/automation/
- [ ] /technology/equipment/
- [ ] /technology/energy/
- [ ] /technology/decarbonization/

Use taxonomy archives rather than relying only on query-string filters.

## 23. Company Archive template

Theme Builder → Archive → Company

- [ ] Page title
- [ ] Intro
- [ ] Company Loop Grid
- [ ] Pagination if needed

Condition:
Post Type Archive = Company

## 24. Single Company template

Theme Builder → Single → Company

- [ ] Company logo
- [ ] Persian name
- [ ] English name
- [ ] Description
- [ ] Activity
- [ ] Location
- [ ] Founded
- [ ] Capacity
- [ ] Website
- [ ] Contact
- [ ] Related articles

Related articles:
- [ ] Current Company relationship
- [ ] Newest first
- [ ] No title text search

## 25. Market page

Elementor Page:
`/market/`

Sections:

- [ ] Market header
- [ ] Last updated
- [ ] Source
- [ ] Market cards
- [ ] Reference price table
- [ ] Historical charts if implemented
- [ ] Market-related news

## 26. Homepage

Elementor Page:

1. [ ] Header
2. [ ] Market ticker
3. [ ] Editorial Hero
4. [ ] Latest News
5. [ ] Market Dashboard
6. [ ] Analysis & Reports
7. [ ] Companies
8. [ ] Technology
9. [ ] Interviews
10. [ ] Newsletter
11. [ ] Footer

All article/company content:
- [ ] Dynamic
- [ ] Query-driven
- [ ] No manually duplicated production content

## 27. Search

Theme Builder → Search Results

- [ ] Search input
- [ ] Query
- [ ] Result count
- [ ] News List/Loop Grid
- [ ] Pagination
- [ ] Noindex where required by SEO strategy

Search should cover:
- [ ] title
- [ ] content
- [ ] tags
- [ ] relevant taxonomy
- [ ] company relationship where technically supported

## 28. 404

Theme Builder → 404

Include:

- [ ] 404 message
- [ ] Search
- [ ] Home CTA
- [ ] Latest News
- [ ] Responsive layout

## 29. Responsive QA

Desktop:
- [ ] 1440px
- [ ] 1280px
- [ ] 1024px

Mobile:
- [ ] 768px
- [ ] 480px
- [ ] 390px
- [ ] 360px

Check:
- [ ] RTL
- [ ] overflow
- [ ] title wrapping
- [ ] card heights
- [ ] navigation
- [ ] ticker
- [ ] tables
- [ ] images
- [ ] buttons
- [ ] typography
- [ ] spacing

## 30. SEO QA

- [ ] Every important page has canonical URL.
- [ ] Existing important URLs preserved.
- [ ] Changed URLs have 301 mappings.
- [ ] No accidental noindex.
- [ ] Sitemap contains canonical URLs.
- [ ] Robots rules checked.
- [ ] Breadcrumbs correct.
- [ ] Article structured data preserved/configured.
- [ ] Open Graph/Twitter metadata checked.
- [ ] Image alt text checked.
- [ ] Pagination checked.
- [ ] Search pages excluded according to SEO strategy.

## 31. Performance QA

- [ ] Image dimensions/format optimized.
- [ ] No unnecessary Elementor widgets.
- [ ] Avoid nested container explosion.
- [ ] Avoid loading large unused icon libraries.
- [ ] Avoid unnecessary animations.
- [ ] Test cache configuration.
- [ ] Test mobile performance.
- [ ] Test logged-out page performance.
- [ ] Test homepage.
- [ ] Test Single Post.
- [ ] Test Company page.

## 32. Migration acceptance

Do not switch production until all are true:

- [ ] URL inventory reconciled.
- [ ] Posts migrated.
- [ ] Authors preserved.
- [ ] Categories/taxonomies mapped.
- [ ] Tags preserved.
- [ ] Companies migrated.
- [ ] Company relationships verified.
- [ ] Media verified.
- [ ] Reports verified.
- [ ] Interviews verified.
- [ ] Elementor templates complete.
- [ ] Responsive QA passed.
- [ ] SEO crawl passed.
- [ ] 301 redirects tested.
- [ ] Backup verified.
- [ ] Rollback path documented.

## 33. Final rule

The prototype is the visual/structural reference.

WordPress is the content source of truth.

Elementor is the presentation layer.

Do not solve missing production data by hard-coding it into Elementor.
