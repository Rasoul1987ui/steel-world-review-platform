# Steel World Review — Component Inventory & Elementor Widget Specification

This document converts the current prototype components into an actionable Elementor build map.

## Rules

1. Prototype components define visual behavior, not production data ownership.
2. WordPress is the source of truth.
3. Elementor Theme Builder is the presentation layer.
4. Prefer native Elementor widgets, Dynamic Tags, Loop Grid and Query controls.
5. Use ACF only for fields that are not native WordPress fields.
6. Do not place article/company/market data manually into Elementor.
7. Custom code is reserved for behavior Elementor cannot reproduce cleanly.

---

## 1. Global system

### Container

Prototype:
`container-site`

Elementor:
- Site-wide Container
- Max width: 1320px
- RTL
- Full-width outer sections with constrained inner container

Responsive:
- Desktop: 1320px max
- Tablet: maintain horizontal gutters
- Mobile: 16–20px side padding

### Global colors

- Primary: #194B7E
- Accent: #89CDAC
- Navy: #0E2A47
- Text: #17202A
- Muted: #667085
- Background: #F7F9FA
- White: #FFFFFF
- Border: #E5E7EB

### Typography

- Vazirmatn
- Persian body: 15–17px
- Article titles: responsive 26–40px
- Section titles: responsive 24–28px
- Metadata: 11–13px

---

# 2. Header

Prototype:
- SiteHeader
- Logo
- HeaderSearch
- MobileNav
- MarketTicker

## Elementor structure

Header Template → Entire Site

```
Header
└── Top Bar
    ├── Date
    └── Utility Menu
└── Main Header
    ├── Logo/Image
    ├── WordPress Nav Menu
    ├── Search Icon
    └── Market Button
└── Market Ticker
```

### Widgets

| Prototype | Elementor |
|---|---|
| Logo | Site Logo / Image |
| mainNavigation | Nav Menu |
| HeaderSearch | Search Form / Popup |
| market button | Button + Icon |
| MarketTicker | Loop Grid / custom shortcode if necessary |

### Important

Navigation must come from WordPress Menus.

Search must use the native WordPress search endpoint.

Mobile menu should be Elementor's responsive Nav Menu unless the final design requires custom off-canvas behavior.

---

# 3. Hero

Prototype:
`HeroSection`

Structure:

```
Section
├── Main Story 8/12
│   └── Featured Story Loop Item
└── Secondary Stories 4/12
    ├── Story Loop Item
    ├── Story Loop Item
    └── Story Loop Item
```

### Main story

Widgets:
- Featured Image
- Dynamic Post Terms
- Post Title
- Post Excerpt
- Post Meta

Query:
- ACF `hero_primary` preferred
- fallback: latest selected content_type

### Secondary stories

Loop Grid:
- Post Object selection or query
- 3 items desktop
- 2-column/stacked responsive behavior

Image ratio:
- Main: 16:9
- Secondary: 4:3

---

# 4. Section Header

Prototype:
`SectionHeader`

Create one Saved Container / Loop-compatible reusable pattern.

Structure:

```
Section Header
├── Eyebrow
├── Heading
├── Description (optional)
├── Related term links (optional)
└── Archive CTA
```

Use:
- Heading widget
- Text Editor
- Dynamic Archive Title where applicable
- Button/Icon

Do not duplicate the same markup manually in every section.

---

# 5. Latest News

Prototype:
`LatestNewsSection`

Structure:

```
Section
├── Section Header
└── 12-column content
    ├── 8 columns
    │   ├── Featured News Loop
    │   └── News List Loop
    └── 4 columns
        └── News Brief Loop
```

### News Card Loop Item

Use:
- Featured Image
- Taxonomy
- Post Title
- Excerpt
- Post Date
- Author / reading time

Query:
`content_type = news`

Order:
Newest first.

### News List Item

Horizontal:
- time/date
- title
- excerpt
- thumbnail

---

# 6. News Brief

Prototype:
`BriefFeed`

Recommended production model:
CPT `news_brief` if briefs are truly separate editorial records.

Loop fields:
- title
- published_at
- optional link

If briefs are actually normal news posts, do not create a second content system; query normal posts instead.

---

# 7. Analysis & Reports

Prototype:
`AnalysisSection`

Structure:

```
Section
├── Section Header
├── 12-column feature area
│   ├── 7 columns: Feature Analysis
│   └── 5 columns: Analysis List
└── Reports
    └── 4-column Report Loop
```

### Feature Analysis

Query:
- ACF `analysis_feature` preferred
- fallback: latest `content_type=analysis`

### Analysis List

Query:
- `content_type=analysis`
- exclude selected feature

### Reports

Query:
- `content_type=report`

Fields:
- title
- report_issue
- report_pages
- report_format
- report_pdf/download URL
- date

---

# 8. Company Directory

Prototype:
`CompaniesSection` + `CompanyCard`

Production:
CPT `company`

Structure:

```
Section
├── Section Header
└── Company Loop Grid
```

### Company Card

Fields:
- company_logo
- title
- company_name_en
- country
- city
- activity
- description
- founded
- capacity
- permalink

Desktop:
4 columns.

Tablet:
2 columns.

Mobile:
horizontal scroll or 1-column based on final QA.

Do not use initials as the production logo fallback unless the company has no logo.

---

# 9. Technology

Prototype:
`TechnologySection`

Structure:

```
Section
├── Section Header
├── Technology Topic Navigation
└── 12-column content
    ├── 6 columns: Feature
    └── 6 columns: Article List
```

Topic navigation:
taxonomy `technology_topic`

Terms:
- production
- metallurgy
- automation
- equipment
- energy
- decarbonization

Each term links to its taxonomy archive.

Do not preserve:
`/category/technology?topic=x`
if the migration can use the cleaner taxonomy URL without breaking live URLs.

---

# 10. Interviews

Prototype:
`InterviewsSection` + `InterviewCard`

Query:
`content_type=interviews`

Loop fields:
- interviewee_portrait
- title
- interviewee_name
- interviewee_position
- interviewee_company

Desktop:
3 columns.

Mobile:
stacked or compact horizontal card.

Portrait:
4:5.

Conditional:
Interview metadata appears only when populated.

---

# 11. Market Dashboard

Prototype:
`MarketDashboard` + `MarketCard`

Production:
CPT `market_item`

Structure:

```
Dark Section
├── Section Header
└── Market Loop Grid
    ├── Billet
    ├── HRC
    ├── Rebar
    ├── Iron Ore
    ├── USD
    └── Coking Coal
└── Source / Updated
```

### Market Card

Fields:
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

Elementor-native:
- Text
- Dynamic ACF fields
- conditional CSS classes

Potential custom:
- Sparkline

Do not hard-code prototype market values.

---

# 12. Sparkline

Prototype:
`Sparkline`

Elementor has no guaranteed native dynamic sparkline component.

Recommended options, in order:

1. Custom lightweight shortcode/widget reading market_entry.
2. Existing trusted chart widget that supports dynamic data.
3. Remove sparkline if the production data pipeline cannot support it reliably.

The chart must never display fake historical data.

---

# 13. Newsletter

Prototype:
`Newsletter + NewsletterForm`

Production:
Use the site's actual form infrastructure.

Preferred:
- Gravity Forms if already part of the production stack.
- Elementor Form if it is the chosen mail integration.

Structure:

```
Newsletter Section
├── Eyebrow
├── Heading
├── Description
└── Form
    ├── Email
    └── Submit
```

Do not reproduce the React `submitted` state.

The form must actually submit to the configured mail/list provider.

---

# 14. Footer

Prototype:
`SiteFooter`

Elementor Footer → Entire Site

Structure:

```
Footer
├── Brand / About
├── Section Menu
├── Market Menu
├── Company Menu
├── Contact
├── Social Links
└── Legal Bar
```

### Dynamic sources

- menus → WordPress Menus
- contact → global site settings / ACF Options
- social → global settings
- company links → selected menu or controlled query

Avoid dynamically listing arbitrary companies in the footer unless editorially desired.

---

# 15. Article Card System

The prototype contains several card variants.

Production should not create dozens of independent Elementor templates.

Recommended Loop Item families:

### Loop 01 — Standard News Card
Used:
- Latest News
- category archives
- related content

### Loop 02 — Featured Story
Used:
- homepage hero
- archive featured area

### Loop 03 — Compact News List
Used:
- latest news
- sidebars

### Loop 04 — Analysis Card
Used:
- analysis sections

### Loop 05 — Report Card
Used:
- report collections

### Loop 06 — Company Card
Used:
- company archive
- homepage company section

### Loop 07 — Interview Card
Used:
- interviews

### Loop 08 — Technology Card
Used:
- technology section/archive

### Loop 09 — Market Card
Used:
- market dashboard

This keeps the Elementor system maintainable.

---

# 16. Article Meta

Prototype:
`ArticleMeta`

Create one reusable dynamic metadata row.

Possible fields:
- Post Date
- Author
- Reading Time
- Taxonomy

Reading time:
ACF `reading_time`.

Do not calculate reading time separately in every template.

---

# 17. Category Label

Prototype:
`CategoryLabel`

Production:
Dynamic Taxonomy Terms.

Preferred display:
content_type label.

Technology posts may additionally display:
technology_topic.

Avoid manually typing labels.

---

# 18. Page Header

Prototype:
`PageHeader`

Production:
Saved Container for static pages.

For archives:
- Archive Title
- Archive Description
- Breadcrumbs if required

For company:
- Dynamic Company Title
- Company metadata

For market:
- Static title + dynamic update information

---

# 19. Search

Prototype:
`HeaderSearch` + `search/page.tsx`

Production:
- Header Search Form
- Search Results Template
- Loop Grid
- Pagination

Search endpoint:
native WordPress `?s=`.

Do not use the prototype's client-side filtering.

---

# 20. Mobile Navigation

Prototype:
`MobileNav`

Production:
Elementor Nav Menu responsive/mobile dropdown or off-canvas.

Requirements:
- keyboard accessible
- focus handling
- body scroll lock where needed
- clear close action
- RTL
- same WordPress menu as desktop

Do not maintain separate hard-coded navigation arrays.

---

# 21. Logo

Prototype:
`Logo`

Production:
Site Logo widget / Image widget.

Use the actual approved Steel World Review logo asset.

The prototype's CSS-generated logo bars are only a visual fallback/reference.

---

# 22. Responsive specification

### 1440 / 1280

- max content 1320px
- full editorial hierarchy
- 12-column layouts
- 3–4 column grids

### 1024

- reduce gaps
- maintain 12-column logic where useful
- check header navigation

### 768

- collapse multi-column sections
- switch to compact cards
- mobile/tablet menu behavior

### 480 / 390 / 360

- no horizontal page overflow
- readable Persian headings
- cards remain tappable
- ticker can scroll horizontally
- no forced desktop tables
- images maintain aspect ratio

---

# 23. Custom code boundary

Custom CSS/JS is acceptable for:

- exact visual details
- hover behavior
- ticker overflow
- sparkline if required
- small responsive corrections

Custom code should NOT own:

- post data
- company data
- market values
- URLs
- taxonomy relationships
- search results
- editorial content

---

# 24. Final Elementor build sequence

1. Global Colors / Fonts
2. Header
3. Footer
4. Standard News Loop
5. Featured Story Loop
6. Compact News Loop
7. Single Post
8. Archive
9. Company CPT + Company Loop
10. Single Company
11. Technology taxonomy
12. Interview metadata + Loop
13. Report metadata + Loop
14. Market CPT + Market Loop
15. Market page
16. Homepage sections
17. Search
18. 404
19. Responsive QA
20. SEO/migration QA

---

# 25. Acceptance test

A component is production-ready only when:

- [ ] It uses WordPress data.
- [ ] It has no hard-coded article/company content.
- [ ] Dynamic URLs work.
- [ ] Responsive states are tested.
- [ ] Empty/missing fields have a graceful state.
- [ ] It does not depend on the Next.js prototype.
- [ ] SEO semantics are preserved.
- [ ] It passes the staging crawl.

## Final rule

Build the Elementor site as a **design-system implementation**, not as a page-by-page recreation of React components.

The target is one reusable, maintainable Elementor system backed by real WordPress data.
