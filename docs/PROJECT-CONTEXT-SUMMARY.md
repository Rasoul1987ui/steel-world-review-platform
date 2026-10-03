# Steel World Review — Project Context Summary

## Purpose
Rebuild the existing steelworldreview.com WordPress site from JNews/Visual Composer into a clean, RTL, Elementor Pro-based industrial/editorial platform while preserving content, SEO value, URLs where possible, and existing relationships.

## Production Stack
- WordPress
- Hello Elementor + Elementor Pro
- Native Posts + Company CPT
- ACF for structured metadata/relationships
- Yoast SEO
- Elementor Theme Builder / Loop Grid / Dynamic Tags
- WordPress database is the source of truth.
- Elementor is presentation only.
- Do not hard-code production content into Elementor.

## Design System
- Primary: #194B7E
- Accent: #89CDAC
- Navy: #0E2A47
- Text: #17202A
- Muted: #667085
- Background: #F7F9FA
- Border: #E5E7EB
- White: #FFFFFF
- Font: Vazirmatn / approved Persian font
- RTL, premium industrial/editorial style.
- Avoid generic magazine layouts, excessive cards/icons/gradients/glassmorphism and unnecessary animation.

## Main Navigation
آخرین اخبار | تحلیل و گزارش | بازار فولاد | شرکت‌ها | فناوری | مصاحبه‌ها

## Target Homepage
Header → Market Ticker → Editorial Hero → Latest News → Market Dashboard → Analysis & Reports → Companies → Technology → Interviews → Newsletter → Footer.

## Content Model
### Posts
Native WordPress Post for:
- news
- analysis
- report
- outlook
- interviews
- technology

Taxonomy: content_type
Technology taxonomy: technology_topic
Native post_tag for tags.

### Company CPT
Slug: company
URL: /companies/{slug}/
Fields include:
English name, logo, country, city, activity, founded, capacity, website, contact, description.

Article ↔ Company relation should be explicit through ACF Relationship/Post Object. If Elementor/ACF querying is unreliable, use one dedicated company taxonomy instead. Do not maintain two competing relationship systems.

### Editorial ACF
- reading_time
- short_excerpt
- custom_image_alt
- related_companies

### Interview ACF
- interviewee_name
- interviewee_position
- interviewee_company
- interviewee_portrait

### Report ACF
- report_issue
- report_pages
- report_format
- report_pdf
- report_download_url

### Market
CPT market_item + historical market_entry.
Prototype market numbers are mock data and must NOT be migrated as real facts.

## URL Targets
- /
- /articles/{slug}/ where matching current live structure
- /category/{slug}/ where legacy URLs require it
- /technology/{topic}/
- /companies/
- /companies/{slug}/
- /market/
- /search/?s={query}
- 404

Before changing production URLs: crawl/export current URLs and create a redirect map.

## Elementor Theme Builder Templates
- Header — Entire Site
- Footer — Entire Site
- Single Post
- Post Archives
- Technology Archive
- Company Archive
- Single Company
- Search Results
- 404

## Reusable Loop Components
1. Standard News Card
2. Featured Story
3. Compact News List
4. Analysis Card
5. Report Card
6. Company Card
7. Interview Card
8. Technology Card
9. Market Card

## Existing Documentation
On branch audit/fix-v0:
- docs/ELEMENTOR-BUILD-SPEC.md
- docs/WORDPRESS-DATA-MODEL.md
- docs/ELEMENTOR-IMPLEMENTATION-CHECKLIST.md
- docs/PROTOTYPE-TO-WORDPRESS-MIGRATION-MATRIX.md
- docs/ELEMENTOR-COMPONENT-INVENTORY.md
- docs/HOMEPAGE-ELEMENTOR-BUILD-BLUEPRINT.md

## Prototype / GitHub
Repository: Rasoul1987ui/steel-world-review-platform
Branch: audit/fix-v0
Prototype is a visual/structural reference only. Production must use real WordPress data.
Current prototype routes include homepage, article, category, companies, company profile, market, search and 404.

## Completed Stabilization
- package name fixed
- TypeScript build errors no longer ignored
- generator metadata fixed
- CI workflow added
- typecheck/build passed
- draft PR #1 exists
- Vercel preview exists

## Current Build Sequence
Global System → Header/Footer → News Loops → Single Article → Archives → Company CPT/Templates → Market → Homepage → Search/404 → Responsive/SEO/Performance QA → Migration.

## Immediate Next Task
Create:
docs/SINGLE-ARTICLE-ELEMENTOR-BUILD-BLUEPRINT.md

It should be execution-level and cover:
- Single Post Theme Builder template
- 8/4 desktop article layout and mobile stacking
- dynamic Post Title/Excerpt/Content/Featured Image/Date/Author
- ACF reading time, interview and report fields
- content_type, tags, technology topic
- related companies
- related articles
- optional source
- semantic H1/headings
- SEO/schema/canonical/OG handled by SEO plugin
- responsive breakpoints
- performance/image rules
- acceptance checklist

## Important Rules
- Preserve existing content and SEO.
- WordPress DB = source of truth.
- Elementor = presentation.
- Prototype mock data ≠ production facts.
- Do not recreate company relationships using text search.
- Do not put the entire site inside HTML widgets.
- Prefer Elementor Containers, not legacy sections/columns.
