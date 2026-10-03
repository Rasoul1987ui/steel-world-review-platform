# Steel World Review — WordPress Data Model

This document translates the prototype's TypeScript models into a concrete WordPress data model for Elementor Pro.

## 1. Canonical model

Use:

- WordPress Posts for editorial content
- `company` CPT for companies
- `content_type` taxonomy for editorial type
- `technology_topic` taxonomy for technology topics
- native `post_tag` for tags
- ACF field groups for structured editorial metadata
- explicit post-to-company relationship
- dedicated market-data model for market values/history

Do not create a separate CPT for every editorial category.

## 2. Editorial content

### Post

Use the native WordPress Post type.

Core fields:
- title
- slug
- excerpt
- content
- featured image
- author
- published date
- modified date

Taxonomies:
- `content_type`
- `technology_topic`
- `post_tag`
- company relationship

### content_type taxonomy

Hierarchical: No.

Terms:

| Term | Slug |
|---|---|
| اخبار | news |
| تحلیل | analysis |
| گزارش | report |
| چشم‌انداز | outlook |
| مصاحبه | interviews |
| فناوری | technology |

Optional legacy terms such as `special-reports` can be retained only if existing production URLs/data require them.

### technology_topic taxonomy

Hierarchical: No.

Terms:

- تولید — production
- متالورژی — metallurgy
- اتوماسیون — automation
- تجهیزات — equipment
- انرژی — energy
- کربن‌زدایی — decarbonization

Only use this taxonomy for technology-related posts.

## 3. Post ACF fields

Field Group: `Editorial Metadata`

Location:
Post Type = Post

Fields:

| Field | Type | Key/Name | Required |
|---|---|---|---|
| زمان مطالعه | Number | reading_time | No |
| خلاصه کوتاه | Textarea | short_excerpt | No |
| تصویر Alt سفارشی | Text | custom_image_alt | No |
| شرکت مرتبط | Relationship/Post Object | related_companies | No |
| لینک منبع | URL | source_url | No |

Notes:
- Prefer native excerpt over duplicating excerpt data in ACF.
- Prefer native featured image over an ACF image field.
- Reading time may be calculated automatically later; keep the field only if editorial control is needed.
- `related_companies` must be a real relationship, never a text field.

## 4. Interview metadata

Field Group: `Interview Metadata`

Location:
Post Type = Post AND content_type = interviews

Fields:

| Field | Type | Name |
|---|---|---|
| نام مصاحبه‌شونده | Text | interviewee_name |
| سمت | Text | interviewee_position |
| شرکت | Text | interviewee_company |
| تصویر | Image | interviewee_portrait |

Elementor:
- Show interviewee block only when `interviewee_name` is not empty.
- Portrait → ACF Image
- Name → ACF Text
- Position → ACF Text
- Company → ACF Text

## 5. Report metadata

Field Group: `Report Metadata`

Location:
Post Type = Post AND content_type = report

Fields:

| Field | Type | Name |
|---|---|---|
| شماره گزارش | Text | report_issue |
| تعداد صفحات | Number | report_pages |
| فرمت | Select | report_format |
| فایل PDF | File | report_pdf |
| لینک دانلود | URL | report_download_url |

Allowed `report_format` values:
- PDF
- Online

Rules:
- If PDF exists, show Download PDF CTA.
- If only Online is selected, show Read Online CTA.
- Do not require both PDF and URL.

## 6. Company CPT

Post Type:
`company`

Recommended rewrite slug:
`companies`

Supports:
- title
- editor
- thumbnail
- revisions

Do not expose unnecessary comments.

### Company fields

Field Group: `Company Profile`

| Field | Type | Name |
|---|---|---|
| نام انگلیسی | Text | company_name_en |
| لوگو | Image | company_logo |
| کشور | Text | country |
| شهر | Text | city |
| حوزه فعالیت | Text | activity |
| سال تأسیس | Number | founded |
| ظرفیت تولید | Text | capacity |
| وب‌سایت | URL | website |
| تلفن/تماس | Text | contact |
| توضیحات تکمیلی | WYSIWYG/Text | company_description |

Native title = Persian company name.

### Company relationship

For editorial posts, use an ACF Relationship field:

`related_companies`

- Return format: Post Object
- Allowed post type: company
- Multiple: Yes

This allows:
Article → Company 1, Company 2, ...

For Single Company:
Elementor Query → Posts where `related_companies` contains Current Company.

If the installed ACF version or Elementor query tooling cannot reliably filter by relationship meta, use a non-hierarchical WordPress taxonomy `company` instead. Choose one approach globally; do not maintain two competing relationship systems.

## 7. Company archive

Archive URL:

`/companies/`

Company Loop fields:
- Company logo
- Title
- English name
- Activity
- City/Country
- Permalink

Query:
Post Type = company

## 8. Single Company

URL:

`/companies/{company-slug}/`

Dynamic structure:

1. Logo
2. Persian company name
3. English company name
4. Description
5. Activity
6. Location
7. Founded
8. Capacity
9. Website/contact
10. Related articles

Related article query:
- Post Type = post
- Relationship = current company
- Order = newest first

Do not use title text search.

## 9. Market data model

Market data is not an editorial Post.

Recommended CPT:
`market_item`

Rewrite:
`market`

Supports:
- title

Fields:

| Field | Type | Name |
|---|---|---|
| English Name | Text | name_en |
| Value | Number | value |
| Decimals | Number | decimals |
| Unit | Text | unit |
| Basis | Text | basis |
| Change | Number | change |
| Change % | Number | change_percent |
| Trend | Repeater | trend |
| Updated At | Date Time | updated_at |
| Source | Text | source |

Trend repeater:
- value: Number

### Historical market data

If real historical charts are required, do not store an ever-growing JSON array in one field.

Create:

CPT `market_entry`

Fields:
- market_item → Post Object
- date → Date
- value → Number

Then:

Market Item
→ Market Entries
→ date/value

This supports real historical charts and future imports.

## 10. Market dashboard

Page:
`/market/`

Elementor dynamic sections:

### Market cards
Loop Item → Market Item

Display:
- name
- value
- unit
- change
- change_percent
- trend

### Last update
Use the newest `updated_at`.

### Source
Use `source`.

### Historical chart
Query Market Entry by current Market Item and sort ascending by date.

Prototype mock values must not be migrated as real market facts.

## 11. Authors

Use native WordPress Users/Authors.

Do not create an Author CPT.

Native:
- display name
- avatar
- bio
- author archive

Optional ACF user fields may be added later for editorial role/job title.

## 12. Tags

Use native WordPress `post_tag`.

Do not duplicate tags in ACF.

Elementor Single Post:
Post Terms → post_tag.

## 13. URLs

Recommended canonical routes:

- / → Homepage
- /articles/{slug}/ → Single Post, if this matches the existing live structure
- /category/{slug}/ → legacy/category archive where required
- /technology/{topic}/ → technology topic archives
- /companies/ → Company archive
- /companies/{slug}/ → Single Company
- /market/ → Market Dashboard
- /search/?s={query} → native WordPress search
- 404 → Elementor 404

Important:
Before changing any existing production URL, crawl/export the current site and build a redirect map.

## 14. Elementor Dynamic Field mapping

| Prototype field | WordPress source | Elementor |
|---|---|---|
| Article title | Post Title | Dynamic Post Title |
| Excerpt | Post Excerpt | Dynamic Post Excerpt |
| Body | Post Content | Dynamic Post Content |
| Image | Featured Image | Dynamic Featured Image |
| Date | Post Date | Dynamic Post Date |
| Author | Post Author | Dynamic Author |
| Category/type | content_type | Dynamic Terms |
| Tags | post_tag | Dynamic Terms |
| Technology topic | technology_topic | Dynamic Terms |
| Reading time | ACF reading_time | ACF Dynamic Field |
| Interviewee | ACF group | ACF Dynamic Fields |
| Report | ACF group | ACF Dynamic Fields |
| Company logo | company_logo | ACF Image |
| Company English name | company_name_en | ACF Text |
| Company facts | Company ACF | ACF Dynamic Fields |
| Related posts | relationship query | Loop Grid |
| Market value | market_item ACF | ACF Dynamic Field |
| Market change | market_item ACF | ACF Dynamic Field |
| Market history | market_entry CPT | Loop/query/chart integration |

## 15. Migration rules

Before implementation:

1. Back up production database and files.
2. Export/crawl all existing URLs.
3. Export existing categories, tags and authors.
4. Identify company references in existing articles.
5. Map old categories to `content_type` terms.
6. Map technology categories/topics to `technology_topic`.
7. Import companies first.
8. Import posts and preserve original slugs.
9. Attach company relationships.
10. Populate report/interview fields.
11. Verify featured images/media.
12. Build Elementor templates.
13. Test every canonical URL.
14. Create 301 redirects only for URLs that actually changed.
15. Crawl staging before production cutover.

## 16. Data ownership rule

The WordPress database is the source of truth.

Elementor stores presentation/templates only.

Do not place:
- article text
- company lists
- market prices
- repeated URLs
- repeated metadata

directly into Elementor widgets when the same information belongs in WordPress data.

## 17. Implementation order

### Phase A — Data
1. CPT company
2. content_type taxonomy
3. technology_topic taxonomy
4. ACF editorial fields
5. ACF interview fields
6. ACF report fields
7. company relationship
8. market_item
9. market_entry if historical data is required

### Phase B — Elementor
1. Global styles
2. Header/Footer
3. News Card
4. Featured Story
5. News List
6. Company Card
7. Interview Card
8. Market Card
9. Single Post
10. Archives
11. Company templates
12. Market page
13. Homepage
14. Search/404

### Phase C — Migration/QA
1. Content import
2. URL preservation
3. Redirects
4. Responsive QA
5. SEO QA
6. Performance QA
7. Final crawl
8. Production cutover

## 18. Acceptance criteria

The data model is ready for Elementor when:

- every editorial item has a real WordPress source
- categories are represented by taxonomies
- technology topics are represented by taxonomy
- companies are real CPT records
- articles have explicit company relationships
- reports and interviews have structured metadata
- market data is separate from editorial posts
- no production-critical content depends on prototype TypeScript data
- URLs are mapped before migration
