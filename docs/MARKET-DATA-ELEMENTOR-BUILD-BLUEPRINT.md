# Market Data + Market Dashboard — Elementor Build Blueprint

## Objective

Build the production market-data layer and public Market Dashboard for Steel World Review.

Separate:
- market data storage;
- historical values;
- editorial presentation;
- freshness/source metadata.

Core rule: market numbers belong to WordPress data, not Elementor.

Prototype/mock market values must NOT be migrated as real market facts.

## 1. Production Data Model

Use two WordPress CPTs.

### Market Item
Post type: market_item

Suggested rewrite:
market

Fields:
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
- display_order

### Market Entry
Post type: market_entry

Fields:
- market_item → Post Object
- date
- value

Relationship:
Market Item → Market Entries → date/value

This keeps current value and historical series separate.

## 2. Market Items

Production may contain instruments such as:
- Billet
- HRC
- Rebar
- Iron Ore
- USD
- Coking Coal

Final items must come from verified production data and editorial requirements. Do not assume prototype items or values are final.

## 3. Current Market Value

Each Market Item exposes:
- name;
- English name;
- current value;
- decimals;
- unit;
- basis;
- change;
- change percentage;
- updated time;
- source.

All values are dynamic.

## 4. Data Freshness

Every displayed value needs:
updated_at

Recommended:
آخرین بروزرسانی: [dynamic date/time]

Do not imply real-time data unless the production source is actually real-time. If data is delayed, label it appropriately.

## 5. Source Attribution

Every market dataset retains source information.

Possible sources include:
- بورس کالا
- LME
- SGX
- approved internal source

Only display sources actually used for that value. Do not hard-code one global source when instruments have different sources.

## 6. Historical Data

Market Entry stores:
- Market Item
- Date
- Value

This enables:
- sparklines;
- trend charts;
- historical tables;
- future market analysis.

Do not store historical series as comma-separated text.

## 7. Trend / Sparkline

Production recommendation:
- Market Entry records are authoritative;
- generate sparklines from real historical values.

If historical data is absent:
- hide the sparkline;
- do not invent a trend;
- do not copy prototype arrays.

A sparkline communicates direction only and must not imply more precision than the underlying data.

## 8. Market Card

Create reusable Elementor Loop Template: Market Card.

Dynamic:
- Market Item name
- value
- unit
- basis
- change
- change_percent
- trend/sparkline
- updated_at
- source

Visual hierarchy:
Name → Value + Unit → Change → Optional sparkline → Updated/source

Market styling:
- Navy #0E2A47
- Accent #89CDAC
- White text
- restrained positive/negative indicators

Never hard-code values.

## 9. Market Dashboard Page

Target URL:
/market/

Elementor Page.

Structure:
1. Page Header
2. Market Overview
3. Market Cards
4. Historical / Trend Area
5. Market Reference Table
6. Related Market Articles
7. Newsletter
8. Footer

## 10. Page Header

Heading:
بازار فولاد

Optional concise description.

Do not claim "live market" unless the data is genuinely live.

## 11. Market Overview

Desktop:
- 6 cards in a row where readable;
- otherwise 3 + 3.

Tablet:
- 3 or 2 columns.

Mobile:
- 2 columns if readable;
- otherwise 1.

Prioritize:
- current value;
- change;
- freshness;
- source.

## 12. Market Card Ordering

Ordering should be explicit, not based on post creation date.

Use:
- display_order field, or
- another controlled ordering mechanism.

Do not rely on database insertion order.

## 13. Optional Market Detail

Potential URL:
/market/{slug}/

Only implement individual Market Item pages if the production requirement includes them.

If implemented:
- current value;
- historical chart;
- update time;
- source;
- unit/basis;
- related articles.

Do not create detail pages merely because the CPT exists.

## 14. Historical Chart

First production release should stay simple.

Preferred:
- sparkline inside cards;
- optional larger history chart on Market page/detail.

Data source:
Market Entry records.

Avoid heavy chart libraries when unnecessary. Never use fake historical values or hard-coded JavaScript datasets.

If custom chart code is required:
- isolate it;
- load only on Market pages;
- read structured WordPress data;
- do not put the whole dashboard in one HTML widget.

## 15. Market Reference Table

Show a compact dynamic table.

Columns:
- شاخص
- مقدار
- واحد
- مبنا
- تغییر
- درصد تغییر
- بروزرسانی

Responsive:
- horizontal scrolling on narrow screens;
- preserve readability;
- do not force tiny fonts.

## 16. Related Market Articles

Use WordPress Posts filtered by market-relevant content types/taxonomies.

Possible:
- news;
- analysis;
- outlook;
- reports.

Prefer explicit market taxonomy/relationship if market-specific linking becomes important.

Do not use title keyword matching as the primary relationship.

Display:
- 3 cards desktop;
- 2 tablet;
- 1 mobile.

Reuse existing article card components.

## 17. Query Rules

Market Cards:
- source: market_item;
- order: display_order.

Historical:
- source: market_entry;
- filter by current market_item;
- sort date ascending for chart data;
- newest first for history tables.

Related articles:
- WordPress Posts;
- approved market-related query.

## 18. Data Update Workflow

Recommended:
Source → Validate → Update Market Item → Create Market Entries → Update updated_at → Verify source → Publish

Do not allow Elementor editors to manually overwrite market numbers inside page widgets.

Elementor only displays stored values.

## 19. Data Validation

Before publishing:
- value is numeric;
- decimals match instrument;
- unit is present;
- updated_at is valid;
- source is recorded;
- change/change_percent use the approved comparison basis.

If unavailable, hide the field rather than showing a misleading zero or placeholder.

## 20. Permissions

Market data editing should ideally be limited to the appropriate editorial/data role.

Separate:
- presentation permissions;
- data-entry permissions.

Designers editing Elementor templates should not need permission to change market values.

## 21. SEO

Market page:
- indexable if it contains useful substantive information;
- canonical /market/;
- unique title/meta;
- structured data only through the approved SEO system.

Market Item detail pages, if implemented:
- unique canonical;
- unique metadata;
- meaningful content;
- no thin auto-generated pages.

Do not index every historical Market Entry as a public page. Market Entry is data, not an editorial page.

## 22. Performance

- Load only required market data.
- Do not load chart libraries globally.
- Keep sparklines lightweight.
- Avoid polling unless real-time updates are genuinely required.
- Cache market data appropriately.
- Optimize first render.
- Avoid unnecessary animation.
- Do not load market scripts on article/company/archive pages.

## 23. Accessibility

- Market values need text equivalents.
- Positive/negative change cannot rely on color alone.
- Tables need proper headers.
- Charts need accessible summaries.
- Update/source information must remain readable.
- Keyboard users must access links/buttons.

Use explicit wording such as:
+2.4% افزایش
-1.8% کاهش

rather than color alone.

## 24. Responsive Blueprint

1440px:
- 1320px max width;
- 6 cards where practical.

1280px:
- 6 cards if readable; otherwise 3 + 3.

1024px:
- 3 or 2 columns;
- table remains readable.

768px:
- 2 columns;
- history/chart area stacks.

480px:
- 2 cards if typography remains readable, otherwise 1;
- table horizontal scroll.

390px:
- verify values, units and source/update labels.

360px:
- no page-wide horizontal overflow;
- contained table scroll.

## 25. Elementor Implementation Order

### Data Layer
1. Register market_item CPT.
2. Register market_entry CPT.
3. Create Market Item ACF group.
4. Create Market Entry ACF group.
5. Add explicit market item relationship.
6. Add display_order.
7. Create verified test data.
8. Create historical test entries.

### Presentation
9. Create Market Card Loop.
10. Create Market Dashboard page.
11. Build Page Header.
12. Build Market Overview.
13. Add Market Card Loop Grid.
14. Add historical/trend area.
15. Add Reference Table.
16. Add Related Articles.
17. Add Newsletter.

### QA
18. Test missing optional fields.
19. Test positive/negative/zero change.
20. Test missing historical data.
21. Test different update times.
22. Test responsive widths.
23. Verify source attribution.
24. Run performance/accessibility checks.

## 26. Acceptance Checklist

### Data
- [ ] Market Item CPT exists.
- [ ] Market Entry CPT exists.
- [ ] Current values are structured.
- [ ] Historical values are structured.
- [ ] Sources are stored.
- [ ] Updated timestamps are stored.
- [ ] Explicit display ordering works.
- [ ] Prototype mock values were not migrated as facts.

### Dashboard
- [ ] /market/ works.
- [ ] Cards are dynamic.
- [ ] Values are dynamic.
- [ ] Change values are dynamic.
- [ ] Update time is visible.
- [ ] Source attribution works.
- [ ] Missing data is handled safely.
- [ ] Reference table works.
- [ ] Related articles work.

### Historical Data
- [ ] Real history drives sparklines/charts.
- [ ] No fake trend data.
- [ ] Missing history hides the chart gracefully.
- [ ] Historical entries are not accidentally indexed as pages.

### SEO / Performance
- [ ] Canonical is correct.
- [ ] Metadata is configured.
- [ ] Chart scripts are not global.
- [ ] Dashboard loads without unnecessary JS.
- [ ] No horizontal overflow.
- [ ] No console errors.

## Final Principle

The Market Dashboard is a data product, not a decorative Elementor section.

WordPress/ACF owns:
- values;
- units;
- sources;
- timestamps;
- history;
- ordering.

Elementor owns:
- cards;
- tables;
- layout;
- responsive behavior.

Any chart or sparkline must be generated from real structured market data. Never turn prototype numbers into production facts.
