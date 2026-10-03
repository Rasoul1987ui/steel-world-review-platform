# Steel World Review — Prototype → WordPress Migration Matrix

This matrix is the final bridge between the existing prototype source and the WordPress/Elementor production implementation.

## 1. Data-access layer

Prototype:
`lib/content.ts`

Production decision:
- Do not reproduce this TypeScript data layer in Elementor.
- Its purpose is to prove that all UI sections can consume structured data.
- WordPress becomes the source of truth.

| Prototype function | Production replacement |
|---|---|
| getAllArticles() | WP Posts Query / Loop Grid |
| getArticleBySlug() | Single Post / WordPress permalink |
| getArticlesByCategory() | Taxonomy Query |
| getArticlesByTopic() | technology_topic Query |
| getRelatedArticles() | Related Posts Query |
| searchArticles() | Native WordPress Search |
| getCategory() | Taxonomy Term |
| getTechTopics() | technology_topic terms |
| getNewsBriefs() | Dedicated News Brief CPT/field or selected posts |
| getMarketItems() | market_item CPT |
| getMarketMeta() | Market options/global fields |
| getCompanies() | company CPT |
| getCompanyBySlug() | Single Company |
| getArticleHref() | Dynamic Permalink |
| getCategoryHref() | Dynamic Term/Archive URL |

## 2. Homepage matrix

Prototype:
`app/page.tsx`

Production:
Elementor Homepage Page + Theme Builder Header/Footer.

| Prototype component | Elementor implementation | Data |
|---|---|---|
| HeroSection | Container + Featured Story Loop/selected posts | Posts |
| LatestNewsSection | Section + News Loop Grid + optional brief list | Posts |
| MarketDashboard | Market Card Loop | market_item |
| AnalysisSection | Feature + Loop Grid + report loop | Posts |
| CompaniesSection | Company Loop Grid | company |
| TechnologySection | Feature + Loop Grid + topic links | Posts + technology_topic |
| InterviewsSection | Interview Loop Grid | Posts |
| Newsletter | Form/widget/Gravity Forms/Elementor Form | Form |

### Homepage hero

Prototype uses a hard-coded `heroSlug` and secondary slugs.

Production options:
1. Preferred: ACF Homepage Settings with selected Post Object fields.
2. Alternative: Query latest/featured posts.

Recommended ACF:
- hero_primary
- hero_secondary_1
- hero_secondary_2
- analysis_feature
- technology_feature

This allows editorial control without hard-coding IDs into Elementor.

## 3. Latest News

Prototype:
`getArticlesByCategory('news')`

Production:
- content_type = news
- order by date DESC
- exclude manually selected hero post if required

Structure:
- Featured 2
- Compact list 4
- Optional news briefs

Do not use manually entered post titles.

## 4. News Briefs

Prototype has a separate `NewsBrief` model.

Production choices:

### Preferred
Create CPT:
`news_brief`

Fields:
- title
- published_at
- optional external/internal URL

Use this only if briefs are genuinely different from normal articles.

### Alternative
Use a lightweight custom post format/field.

Do not create News Briefs as manually typed text inside the homepage.

## 5. Market Dashboard

Prototype:
`MarketDashboard`

Production:
- market_item CPT
- market_entry CPT for history

Elementor:
- Market Card Loop
- dynamic value/change/unit
- conditional positive/negative state

Do not migrate prototype numbers as verified market data.

## 6. Analysis & Reports

Prototype currently treats:
- analysis
- report
- outlook
- special-reports

Production:
Use `content_type` taxonomy.

Recommended mapping:

| Prototype | Production |
|---|---|
| analysis | content_type=analysis |
| report | content_type=report |
| outlook | content_type=outlook |
| special-reports | content_type=report + optional report subtype field |

Avoid creating `special-reports` as a separate content system unless existing URL/data requirements make it necessary.

## 7. Companies

Prototype:
`lib/data/companies.ts` + `getCompanies()`

Production:
Company CPT.

Prototype:
`Company`

Production:
- title → Persian company name
- company_name_en → ACF
- company_logo → ACF
- country → ACF
- city → ACF
- activity → ACF
- founded → ACF
- capacity → ACF
- description → ACF/editor

Company coverage:
Prototype uses string search.

Production:
Explicit post ↔ company relationship.

This is a required architectural correction.

## 8. Technology

Prototype:
`TechTopic` + article `topic`

Production:
`technology_topic` taxonomy.

Mapping:

| Prototype | Production |
|---|---|
| production | technology_topic=production |
| metallurgy | technology_topic=metallurgy |
| automation | technology_topic=automation |
| equipment | technology_topic=equipment |
| energy | technology_topic=energy |
| decarbonization | technology_topic=decarbonization |

Technology archive should use taxonomy URLs where possible.

## 9. Interviews

Prototype:
Article + optional `Interviewee`.

Production:
Post + content_type=interviews + Interview Metadata ACF.

Mapping:

| Prototype | Production |
|---|---|
| interviewee.name | interviewee_name |
| interviewee.position | interviewee_position |
| interviewee.company | interviewee_company |
| interviewee.portrait | interviewee_portrait |

Elementor:
Conditional interviewee component.

## 10. Reports

Prototype:
Article + `ReportMeta`.

Production:
Post + content_type=report + Report Metadata ACF.

Mapping:

| Prototype | Production |
|---|---|
| issue | report_issue |
| pages | report_pages |
| format | report_format |
| PDF | report_pdf |
| download | report_download_url |

## 11. Single Article

Prototype:
`app/articles/[slug]/page.tsx`

Production:
Theme Builder → Single Post.

Mapping:

- category → content_type
- title → Post Title
- excerpt → Post Excerpt
- author → Post Author
- publishedAt → Post Date
- readingTime → ACF
- image → Featured Image
- body → Post Content
- tags → post_tag
- interviewee → Interview ACF
- report → Report ACF
- related articles → Query

The article body must live in WordPress Post Content, not Elementor template text.

## 12. Category Archive

Prototype:
`app/category/[slug]/page.tsx`

Production:
Archive Template.

Prototype:
- first 3 featured
- remaining list
- child/topic navigation

Production:
- Archive Title
- Archive Description
- Featured Loop Grid
- Main Loop Grid
- Pagination

Technology topic:
Use taxonomy archive rather than query parameter where possible.

## 13. Companies Archive

Prototype:
`app/companies/page.tsx`

Production:
Company Archive Template.

Query:
Post Type = company.

## 14. Single Company

Prototype:
`app/companies/[slug]/page.tsx`

Production:
Single Company Template.

Related posts must use the explicit Company relationship.

## 15. Market Page

Prototype:
`app/market/page.tsx`

Production:
Elementor Page.

Mapping:

- MarketDashboard → Market Card Loop
- Market metadata → global/current market fields
- Reference table → Market Item Loop
- Sparkline → historical Market Entry data
- market/outlook news → Post Loop filtered by content_type

## 16. Search

Prototype:
`app/search/page.tsx`

Production:
Elementor Search Results Template.

Prototype search is intentionally limited to title/excerpt.

Production search should use WordPress search infrastructure and SEO rules, with company/taxonomy coverage added only if technically supported.

Do not recreate the prototype's JavaScript search filter.

## 17. 404

Prototype:
`app/not-found.tsx`

Production:
Elementor 404 Theme Builder template.

Recommended:
- 404 message
- search
- homepage CTA
- latest articles

## 18. Header

Prototype components:
- header
- mobile-nav
- search
- market-ticker

Production:
One Elementor Header with responsive states.

Dynamic:
- navigation → WordPress Menu
- search → Search URL
- ticker → market_item query if live ticker is required

Do not hard-code navigation URLs into HTML widgets.

## 19. Footer

Prototype:
Footer component.

Production:
Elementor Footer.

Dynamic:
- menu → WordPress Menu
- company links → selected menu or company query
- market links → selected menu
- contact → global options/ACF Options if available

## 20. Visual components

Prototype component | Production
---|---
PriceChange | Elementor Text/Icon + conditional classes/CSS
Sparkline | Custom Elementor widget/shortcode or chart solution
SectionHeader | Saved Container/Global Widget pattern
ArticleCard | Loop Item
StoryCard | Loop Item
CompanyCard | Loop Item
InterviewCard | Loop Item
PageHeader | Saved Container pattern
Newsletter | Elementor Form / Gravity Forms
MobileNav | Elementor Nav Menu

## 21. Components that should NOT be copied directly

Do not port these as Next.js/React components:

- React state logic
- local TypeScript content files
- mock article arrays
- mock company arrays
- mock market numbers
- hard-coded href builders
- static search implementation
- static category lookups

The visual result can be recreated; the implementation must be WordPress-native.

## 22. Prototype assets

Before migration:

- [ ] Inventory every image in `public/`.
- [ ] Identify which images are editorial mockups.
- [ ] Replace mock article imagery with actual WordPress Media Library assets.
- [ ] Keep reusable brand assets if licensed/approved.
- [ ] Verify image aspect ratios.
- [ ] Generate appropriate image sizes.
- [ ] Add Persian alt text where applicable.

## 23. Prototype route → final route

| Prototype | Final |
|---|---|
| / | / |
| /articles/{slug} | Preserve existing live article URL if possible |
| /category/{slug} | Preserve existing live category URL where possible |
| /category/technology?topic=x | Prefer /technology/x/ if migration permits |
| /companies | /companies/ |
| /companies/{slug} | /companies/{slug}/ |
| /market | /market/ |
| /search?q=x | Map to native WP search according to existing SEO strategy |
| 404 | 404 |

The live site's existing URL structure is authoritative during migration. Prototype routes are not automatically authoritative.

## 24. Prototype disposition

### Keep as reference
- visual hierarchy
- spacing
- typography direction
- color system
- information architecture
- component concepts
- route coverage

### Replace with WordPress
- all content
- all queries
- all relationships
- all URLs
- all search
- all market data
- all company data
- all editorial metadata

### Do not migrate
- mock data
- Next.js routing
- React data state
- local content arrays
- prototype-only URLs where they conflict with live URLs

## 25. Final production rule

Prototype = design specification.

WordPress = content/database.

Elementor = presentation.

SEO/permalinks = migration-controlled.

No production page should depend on the prototype repository after the Elementor migration is complete.
