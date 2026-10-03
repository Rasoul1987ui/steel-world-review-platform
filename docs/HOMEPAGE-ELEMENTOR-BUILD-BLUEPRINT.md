# Steel World Review — Homepage Elementor Build Blueprint

This is the execution blueprint for rebuilding the homepage in Elementor Pro using real WordPress data.

## Production assumptions

- WordPress is the source of truth.
- Elementor Pro is the presentation layer.
- Hello Elementor is the base theme.
- RTL is enabled.
- Vazirmatn is the approved working font.
- Main content width: 1320px.
- Homepage content must be dynamic except editorial selections explicitly controlled through ACF.
- Prototype/mock market numbers are not production data.

## 1. Global Elementor settings

### Site Settings → Layout
- Content Width: 1320px
- Container Padding: Desktop 0 / Tablet 24px / Mobile 16px
- Use controlled custom gaps rather than Elementor defaults where possible.

### Global colors
| Token | Value |
|---|---|
| Primary | #194B7E |
| Accent | #89CDAC |
| Navy | #0E2A47 |
| Text | #17202A |
| Muted | #667085 |
| Background | #F7F9FA |
| White | #FFFFFF |
| Border | #E5E7EB |

### Global typography
- Body: Vazirmatn, 15–17px, line-height 1.9–2.0
- H1: 40–48px desktop, 30–34px tablet, 26–30px mobile
- H2: 28px desktop, 24px tablet, 21–23px mobile
- H3: 18–22px
- Metadata: 11–13px

## 2. Homepage hierarchy

Homepage → Header Template → Market Ticker → Editorial Hero → Latest News → Market Dashboard → Analysis & Reports → Companies → Technology → Interviews → Newsletter → Footer Template

Header/Footer are Theme Builder templates, not duplicated inside the homepage.

## 3. Market Ticker

Full-width white container, 1px bottom border, minimum height 44px. Inner width 1320px. Left link: «بازار امروز» with primary color and status dot. Right side: dynamic market items from market_item CPT. Each item shows name, value and change percentage. Mobile uses horizontal scrolling without page overflow. Never use prototype market values as production facts.

## 4. Editorial Hero

Desktop 12-column grid: main story 8 columns, secondary stories 4 columns. Max width 1320px, top 48px, bottom 64px, gap 32px. Stack on tablet/mobile when needed.

### Main Hero Story
Dynamic elements: Featured Image, content_type label, Post Title, Post Excerpt, Author, Date, Reading Time. Image 16:9. Title 40px desktop, 34px tablet, 28px mobile, ExtraBold. Preferred editorial selection: ACF Options field hero_primary, Post Object. Fallback: latest relevant post.

### Secondary Hero Stories
Three stories in the 4-column area. Each has 4:3 thumbnail, content type, title and metadata. Recommended selections: hero_secondary_1, hero_secondary_2, hero_secondary_3. Fallback: query-based selection. Exclude hero_primary.

## 5. Latest News

Desktop 12 columns: main area 8, brief feed 4. Top 64px, bottom 72px.

Section Header: eyebrow LATEST NEWS, title آخرین اخبار, CTA مشاهده همه.

Featured news: two cards in a 2-column grid. Query content_type=news, order date DESC, exclude hero selections where practical. Use Standard News Card, image 3:2.

News list: horizontal list with date/time, category, title, excerpt on desktop/tablet and thumbnail. Desktop thumbnail 176px, mobile 96px. Use Compact News List Loop.

News brief: 4-column sidebar. Preferred CPT news_brief if briefs are genuinely separate records; otherwise use normal news posts with compact presentation. Never type a static list into the homepage.

## 6. Market Dashboard

Full-width dark section, background #0E2A47, text white, accent #89CDAC. Inner width 1320px. Padding 56–64px desktop and about 40px mobile.

Header: eyebrow MARKET DATA, title نبض بازار فولاد, dynamic update/source information.

Market grid: desktop 6 cards, tablet 3, mobile 2 only if readable otherwise 1. Loop: Market Card. Fields: name, name_en, value, decimals, unit, basis, change, change_percent, trend, updated_at, source.

Display dynamic updated_at and source. Sparkline is optional and should only be implemented when market_entry historical data exists. If unavailable, omit it rather than showing artificial history.

## 7. Analysis & Reports

Desktop 12 columns: feature analysis 7, analysis list 5, reports below.

Header: eyebrow ANALYSIS, title تحلیل و گزارش, CTA مشاهده همه.

Feature analysis: image, content_type, title, excerpt, author, date. Preferred selection: ACF analysis_feature. Fallback: latest analysis. Image 16:10.

Analysis list: query content_type=analysis, exclude selected feature, display 3–5 posts.

Reports: title گزارش‌های تخصصی, query content_type=report. Fields: issue, pages, format, title, date, download link. Desktop 3–4 columns, mobile 1.

## 8. Companies

Goal: present the corporate intelligence layer without becoming a directory dump.

Header: eyebrow COMPANIES, title شرکت‌های فولادی, CTA مشاهده همه شرکت‌ها.

Grid: desktop 4, tablet 2, mobile 1. Query CPT company.

Company Card dynamic fields: logo, Persian title, English name, country, city, activity, description, founded, capacity. Primary link: Single Company. Use real logos where available; do not rely on generated initials as the primary production representation.

## 9. Technology

Desktop 12 columns: feature 6, list 6.

Header: eyebrow TECHNOLOGY, title فناوری و صنعت, topic links for تولید، متالورژی، اتوماسیون، تجهیزات، انرژی، کربن‌زدایی. Each links to technology_topic taxonomy archive.

Feature query content_type=technology. Preferred selection: ACF technology_feature. Fallback: latest technology post. Image 16:10.

List query content_type=technology, exclude feature, use Technology Card Loop.

## 10. Interviews

Header: eyebrow INTERVIEWS, title گفت‌وگو, CTA مشاهده همه. Query content_type=interviews. Grid desktop 3, tablet 2, mobile 1. Interview Card: portrait, title, interviewee name, position, company. Portrait 4:5. Hide interview metadata when fields are empty.

## 11. Newsletter

Dark/navy editorial CTA. Background #194B7E or #0E2A47. 12-column layout: copy 7, form 5.

Copy: eyebrow NEWSLETTER, heading مهم‌ترین اخبار فولاد را دریافت کنید, short description.

Use Gravity Forms or Elementor Form. Field: email. Do not reproduce prototype client-side submission state; connect the form to actual mailing infrastructure.

## 12. Footer

Theme Builder Footer → Entire Site. Do not duplicate it inside homepage content.

## 13. Dynamic query rules

| Section | Query |
|---|---|
| Hero | ACF selected posts, then fallback |
| Latest News | content_type=news |
| Analysis | content_type=analysis |
| Reports | content_type=report |
| Companies | post_type=company |
| Technology | content_type=technology |
| Interviews | content_type=interviews |
| Market | post_type=market_item |

## 14. Duplicate-content handling

Recommended exclusion chain: Hero primary → Hero secondary → Latest News → Analysis → Technology → Interviews. Do not over-engineer exclusions if Elementor query controls make the system fragile. Editorial duplication is acceptable when a story legitimately belongs in multiple contexts.

## 15. Responsive blueprint

### Desktop ≥ 1200
1320px max width; Hero 8/4; News 8/4; Market 6 columns; Analysis 7/5; Companies 4 columns; Technology 6/6; Interviews 3 columns; Newsletter 7/5.

### Tablet 768–1199
24px side padding; Hero may stack; News may stack; Market 3 columns; Companies 2 columns; Interviews 2 columns; Technology stacks when required.

### Mobile ≤ 767
16px side padding; one column; market ticker horizontal scroll; hero main first; secondary stories below; news brief below news list; market cards 2 columns only when readable; companies one column; interviews one column; newsletter one column.

## 16. Elementor implementation order

1. Site Settings
2. Header
3. Footer
4. Market Ticker
5. Featured Story Loop
6. Standard News Loop
7. Compact News Loop
8. Market Card Loop
9. Analysis Card Loop
10. Report Card Loop
11. Company Card Loop
12. Technology Card Loop
13. Interview Card Loop
14. Homepage Hero
15. Latest News
16. Market Dashboard
17. Analysis & Reports
18. Companies
19. Technology
20. Interviews
21. Newsletter
22. Responsive QA

## 17. Acceptance checklist

### Content
- [ ] Every article is dynamic.
- [ ] Every company is dynamic.
- [ ] Every market value is dynamic.
- [ ] No prototype mock values remain.
- [ ] No hard-coded article URLs remain.

### Design
- [ ] 1320px grid works.
- [ ] RTL spacing is correct.
- [ ] Typography matches the approved direction.
- [ ] No unnecessary rounded cards.
- [ ] No generic gradient/glass UI.
- [ ] Editorial hierarchy remains clear.

### Responsive
- [ ] 1440
- [ ] 1280
- [ ] 1024
- [ ] 768
- [ ] 480
- [ ] 390
- [ ] 360

### SEO
- [ ] One H1.
- [ ] Correct archive links.
- [ ] Dynamic image alt text.
- [ ] No duplicate hidden headings.
- [ ] No JS-only critical content.
- [ ] Internal links use real WordPress URLs.

### Performance
- [ ] Correct image sizes.
- [ ] Lazy loading below fold.
- [ ] Hero image prioritized.
- [ ] No unnecessary custom JS.
- [ ] No giant background images for simple sections.

## Final build principle

The homepage should feel like one editorial publication, not a collection of Elementor widgets. The prototype supplies the visual reference. Elementor supplies the reusable presentation system. WordPress supplies the content and relationships.
