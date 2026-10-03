# Steel World Review — Elementor Build Specification

## 1. Production architecture

The v0/Next.js prototype is a design and information-architecture reference. Production must remain WordPress + Hello Elementor + Elementor Pro and use real WordPress data.

### Content model

- WordPress Post: News, Analysis, Report, Outlook, Interview, Technology
- Company CPT: `company`
- Taxonomy: `content_type`
- Taxonomy: `technology_topic`
- Taxonomy: `post_tag`
- Company relationship: `company` taxonomy or ACF relationship on posts; use one canonical method consistently
- ACF/Post meta for Interview and Report fields
- Market Data: dedicated CPT or structured options/data source; do not hard-code prototype values into production

### Content type terms

`content_type`:
- news
- analysis
- report
- outlook
- interviews
- technology

`technology_topic`:
- production
- metallurgy
- automation
- equipment
- energy
- decarbonization

## 2. Elementor Theme Builder

| Template | Elementor type | Display condition |
|---|---|---|
| Header | Header | Entire Site |
| Footer | Footer | Entire Site |
| Single Post | Single Post | All Posts |
| Post Archive | Archive | All relevant post archives |
| Company Archive | Archive | Company CPT archive |
| Single Company | Single Post/CPT | Company CPT |
| Search Results | Search Results | Search |
| 404 | 404 | 404 |
| News Card | Loop Item | Reusable Loop |
| Featured Story | Loop Item | Reusable Loop |
| Company Card | Loop Item | Company Loop |
| Interview Card | Loop Item | Interview Loop |
| Market Card | Loop Item | Market Loop |

## 3. URL map

| Prototype route | WordPress/Elementor target |
|---|---|
| / | Elementor Page — Homepage |
| /articles/{slug} | Single Post |
| /category/{slug} | Post Archive / taxonomy archive |
| /category/technology?topic={slug} | Replace with SEO-friendly technology topic archive where possible |
| /companies | Company CPT archive |
| /companies/{slug} | Single Company |
| /market | Elementor Page — Market Dashboard |
| /search?q= | Search Results |
| 404 | Elementor 404 |

Preserve existing live URLs wherever practical. Any changed canonical URL must receive a 301 redirect.

## 4. Homepage build

Create one Elementor Page using Containers only.

Order:

1. Global Header
2. Market ticker
3. Editorial Hero
4. Latest News
5. Market Dashboard
6. Analysis & Reports
7. Companies
8. Technology
9. Interviews
10. Newsletter
11. Global Footer

### Dynamic sources

- Hero: selected featured post(s)
- Latest News: Posts filtered by `content_type=news`
- Analysis: `content_type=analysis`
- Reports: `content_type=report`
- Technology: `content_type=technology`
- Interviews: `content_type=interviews`
- Companies: Company CPT
- Market: Market Data source

Do not manually duplicate article titles, images or URLs inside widgets.

## 5. Single Post template

Build with Elementor Theme Builder → Single Post.

Structure:

- Breadcrumb
- Category
- Post title
- Excerpt
- Author / published date / reading time
- Featured image
- Optional interviewee block
- Post Content
- Tags
- Related Posts
- Newsletter CTA

Dynamic fields:

- Post Title
- Excerpt
- Featured Image
- Author
- Date
- Content
- Terms
- ACF fields where applicable

### Interview fields

ACF group:

- interviewee_name
- interviewee_position
- interviewee_company
- interviewee_portrait

Show the interviewee component only when interview fields exist.

### Report fields

ACF group:

- report_issue
- report_pages
- report_format
- report_pdf
- report_download_url

Show report metadata/download component conditionally.

## 6. Archive template

One reusable archive layout should handle News, Analysis, Reports and Outlook where the visual structure is shared.

Structure:

- Archive title
- Archive description
- Child-term/topic navigation when applicable
- Featured Loop Grid
- Main Loop Grid/List
- Pagination

Technology should preferably use a real taxonomy archive such as:

- /technology/
- /technology/production/
- /technology/metallurgy/
- /technology/automation/
- /technology/equipment/
- /technology/energy/
- /technology/decarbonization/

This is preferable to relying only on `?topic=` for SEO and maintainability.

## 7. Company model

Company CPT slug: `companies`

Recommended fields:

- company_logo
- company_name_en
- country
- city
- activity
- founded
- capacity
- website
- contact
- description

Single Company structure:

- Company logo/name
- English name
- Description
- Facts
- Products/activity
- Related news/articles
- Contact/website

Related content must use the explicit Company relationship, not a text search on company name.

## 8. Market Dashboard

Keep market presentation separate from article content.

Market item fields:

- name
- name_en
- value
- decimals
- unit
- basis
- change
- change_percent
- trend
- updated_at
- source

If historical charts are required, use a child data model:

Market Item → Market Data Entries → date/value.

The prototype values in `lib/data/market.ts` are mock data and must not be copied into production as factual live prices.

## 9. Reusable Loop Items

### News Card
- image
- category
- title
- excerpt where needed
- date
- permalink

### Featured Story
- large image
- category
- title
- excerpt
- date

### News List
- compact thumbnail
- category
- title
- date

### Company Card
- logo/initials
- company name
- activity
- location
- permalink

### Interview Card
- portrait
- interviewee
- position/company
- article title
- permalink

### Market Card
- instrument
- current value
- unit
- absolute change
- percentage change
- trend

## 10. Global Elementor system

Colors:

- Primary: #194B7E
- Accent: #89CDAC
- Navy: #0E2A47
- Text: #17202A
- Muted: #667085
- Background: #F7F9FA
- White: #FFFFFF
- Border: #E5E7EB

Typography:
- Primary Persian font: Vazirmatn or the approved site font
- RTL
- Establish Global Fonts before page construction

Layout:
- Maximum content width: 1320px
- Containers only
- Consistent gaps/padding
- Avoid unnecessary nested containers
- Avoid excessive rounded cards, gradients, glassmorphism and animation

## 11. Query rules

Elementor Loop/Grid queries should use WordPress taxonomies and relationships:

- News → `content_type=news`
- Analysis → `content_type=analysis`
- Reports → `content_type=report`
- Technology → `content_type=technology`
- Interviews → `content_type=interviews`
- Company archive → Company CPT
- Company related articles → explicit company relationship
- Technology topic → `technology_topic` taxonomy

Do not reproduce the prototype's `searchArticles(company.name)` approach in production.

## 12. SEO and migration

Before replacing the current site:

1. Export/crawl all existing URLs.
2. Record current titles, canonicals, indexability and important metadata.
3. Preserve slugs where possible.
4. Map every changed URL to a 301 destination.
5. Preserve article/category/tag/company relationships.
6. Verify XML sitemap after migration.
7. Verify robots/noindex rules.
8. Test canonical URLs.
9. Test pagination and archives.
10. Crawl staging before production cutover.

## 13. Build order

1. Global Elementor system
2. Header + Footer
3. News/Featured/Company/Interview/Market loops
4. Single Post
5. Archive
6. Company CPT + Company templates
7. Market Dashboard
8. Homepage
9. Search + 404
10. Responsive QA
11. SEO/URL migration QA
12. Production deployment

## 14. Prototype-to-production rule

The Next.js prototype should not become the production frontend. Its components, route map, content model and visual hierarchy are the specification for the Elementor implementation.

Production acceptance requires:
- real WordPress dynamic content
- Elementor Theme Builder templates
- preserved URL/SEO mapping
- responsive RTL behavior
- no dependency on prototype mock data
- no duplicated static article/company content inside Elementor
