# Staging Day-Eight — Market Data and Market Dashboard

## Goal

Day Eight builds the market-data layer and the production Market Dashboard.

The market area is treated as a structured data product, not as decorative statistics inside Elementor.

WordPress structured market data is the source of truth. Elementor presents the data.

Prototype market values are reference-only and must not be migrated as production facts.

---

# 1. Day-Eight Deliverables

By the end of Day Eight:

1. Market Item data structure is verified.
2. Historical Market Entry structure is verified.
3. Current value fields work dynamically.
4. Change and percentage change work dynamically.
5. Source and updated time work dynamically.
6. Market Card loop works.
7. Market Dashboard works.
8. Market archive/page works.
9. Historical sparkline uses real entries.
10. Empty/error states are controlled.
11. Data freshness is visible where appropriate.
12. Responsive QA passes.
13. Market Acceptance Gate passes.

---

# 2. Market Data Architecture

Primary structured records:

**Market Item**

Represents a tracked market indicator.

Examples:

- Billet.
- HRC.
- Rebar.
- Iron Ore.
- USD.
- Coking Coal.

These are examples of data types only. Actual production indicators must be approved and populated from real sources.

Historical data:

**Market Entry**

Represents a dated value belonging to one Market Item.

Relationship:

Market Item → Market Entries → date/value

---

# 3. Market Item Fields

Recommended fields:

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

Optional:

- market_region
- currency
- notes
- external_source_url

Only implement optional fields when a real editorial/data requirement exists.

---

# 4. Market Entry Fields

Recommended fields:

- market_item
- date
- value

Optional:

- source
- note

The minimum valid historical record requires:

- A Market Item.
- A valid date.
- A numeric value.

Do not create historical entries with placeholder values.

---

# 5. Data Ownership

WordPress database is the source of truth.

Elementor is presentation only.

Do not hard-code market values into:

- Elementor text widgets.
- HTML widgets.
- Custom JavaScript arrays.
- Homepage copy.
- Static JSON files in production.

Do not migrate the prototype market values as factual production data.

---

# 6. Market Data Validation

Before publishing a market update, verify:

- Indicator name.
- Numeric value.
- Unit.
- Basis.
- Currency where relevant.
- Change.
- Change percentage.
- Timestamp.
- Source.

Reject or flag records with missing critical values.

A missing value should not silently become zero.

---

# 7. Freshness

Every current Market Item should have an updated_at value.

Display freshness in a human-readable way where useful.

Examples:

- به‌روزرسانی: امروز، ۱۰:۳۰
- آخرین به‌روزرسانی: ۲ ساعت پیش

Avoid misleading freshness claims when the source timestamp is unknown.

If data is stale beyond the defined editorial threshold:

- Mark it as stale.
- Do not present it as live.

The exact stale threshold must be documented according to the source/update frequency.

---

# 8. Source Attribution

Each market indicator should identify its source.

Examples of possible source types:

- Exchange.
- Official market organization.
- Commodity data provider.
- Internal data desk.

Do not claim a source unless the production workflow actually obtains the data from that source.

If an external source URL is stored, it must be a real verified URL.

---

# 9. Market Card

Use the Day-Four Market Card component.

Dynamic display:

- Market name.
- Current value.
- Unit.
- Change.
- Change percentage.
- Trend indicator when available.
- Updated time when useful.

Keep the card compact.

Avoid oversized numbers that make the dashboard look like a trading terminal.

---

# 10. Positive/Negative Change

Change direction should be represented semantically.

Possible states:

- Positive.
- Negative.
- Neutral.
- Unknown.

Do not assume that green always means positive economic meaning or red always means negative economic meaning without confirming the indicator semantics.

The system should use the actual change value/direction.

If change is unavailable:

- Hide the change indicator.
- Do not display 0% as a fake value.

---

# 11. Market Dashboard Structure

Recommended dashboard:

1. Section Header.
2. Current market cards.
3. Selected indicator detail.
4. Historical trend visualization.
5. Data source/freshness note.
6. Link to full Market page.

Homepage dashboard should remain compact.

The full Market page can provide deeper detail.

---

# 12. Homepage Market Dashboard

Use the dashboard already defined in the homepage blueprint.

Recommended card density:

Desktop: up to 6 indicators.

Tablet: 3–4 visible at once depending on layout.

Mobile: 1–2 per row or horizontal interaction only if usability remains excellent.

Do not force all indicators into a crowded mobile grid.

---

# 13. Full Market Page

Primary URL:

`/market/`

Recommended structure:

1. Header.
2. Breadcrumb.
3. Market page title.
4. Intro/data freshness statement.
5. Market indicator grid.
6. Selected/current market table.
7. Historical trend area.
8. Related market news.
9. Source note.
10. Newsletter/CTA.
11. Footer.

The exact depth depends on available real data.

Do not build empty analytical sections merely to fill the page.

---

# 14. Historical Trend

Historical chart/sparkline must be generated from Market Entry records.

Do not use:

- Fake random values.
- Hard-coded SVG paths representing invented data.
- Prototype trend arrays.

Minimum chart input:

- Date.
- Value.

Recommended sparkline behavior:

- Last N valid entries.
- Chronological order.
- Missing points handled explicitly.
- No false interpolation presented as actual data.

---

# 15. Sparkline Implementation Boundary

Possible implementations:

1. Elementor-compatible chart component.
2. Lightweight custom JavaScript fed from structured WordPress data.
3. Server-rendered SVG generated from real data.

Choose the simplest implementation that meets the visual requirement.

Do not introduce a large charting library for a small sparkline without a clear need.

The chart layer must never become the source of truth.

---

# 16. Historical Data Query

For a selected Market Item:

- Retrieve related Market Entries.
- Order chronologically.
- Limit to a defined window where appropriate.
- Return only valid numeric values.

If no historical entries exist:

- Hide the chart.
- Show a controlled message such as:

داده تاریخی برای این شاخص موجود نیست.

Do not show a fake flat line.

---

# 17. Market Table

The full Market page may include a reference table.

Recommended columns:

- شاخص
- مقدار
- واحد
- تغییر
- درصد تغییر
- آخرین به‌روزرسانی
- منبع

Rules:

- Dynamic.
- Sort/order according to display_order or approved rule.
- Empty fields hidden or represented clearly.
- Mobile must remain usable.

Do not duplicate the same data manually in a second table.

---

# 18. Market News

Related market articles should use editorial content already stored in WordPress.

Preferred query signals:

- content_type = market-related editorial type when defined.
- Market taxonomy or structured relationship if introduced.
- Relevant market topics.
- Recency.

Do not infer market relationships from random keyword matches unless that is explicitly approved as a temporary editorial fallback.

If no structured market relationship exists yet, keep the related-news query conservative rather than presenting misleading results.

---

# 19. Market Data Ordering

Use explicit display_order for dashboard indicators when a curated order is required.

Example conceptual order:

1. Billet.
2. HRC.
3. Rebar.
4. Iron Ore.
5. USD.
6. Coking Coal.

This is a presentation example only.

Production order must be approved and stored as data.

Do not rely on database IDs or random ordering.

---

# 20. Market Dashboard Empty States

### No Market Items

Show a controlled state:

داده بازار در حال حاضر در دسترس نیست.

### Missing current value

Hide the value rather than displaying zero.

### Missing change

Hide change indicators.

### Missing historical data

Hide chart and show a concise message.

### Missing source

Do not invent source attribution.

---

# 21. Data Update Workflow

Minimum editorial workflow:

1. Obtain source data.
2. Verify source and timestamp.
3. Create/update Market Item.
4. Update current value.
5. Record change and percentage change.
6. Add Market Entry for historical record.
7. Verify unit/basis.
8. Preview dashboard.
9. Publish.
10. Verify front-end display.

If automated ingestion is introduced later, it must still pass validation before front-end publication where appropriate.

---

# 22. Permissions and Editorial Safety

Only authorized editors/admins should be able to modify market data.

If Market Item editing is exposed to a broader editorial team:

- Add clear field labels.
- Explain units and basis.
- Validate numeric fields.
- Prevent accidental deletion of historical data where possible.

Historical entries should be treated as editorial/data records, not disposable presentation content.

---

# 23. Market SEO

Market page:

- Canonical `/market/`.
- Unique title.
- Useful description.
- Appropriate indexability.
- Breadcrumbs.
- No duplicate metadata.

Market Item detail pages should only be indexable if the final information architecture actually exposes them as useful standalone pages.

Do not create thin indexable pages simply because the CPT technically supports them.

---

# 24. Structured Data

Use the selected SEO/schema system where appropriate.

Do not create unsupported financial/market schema merely for SEO.

Do not claim live financial data through schema when the data is not actually live.

---

# 25. Responsive Layout

Test:

- 1440px
- 1280px
- 1024px
- 768px
- 480px
- 390px
- 360px

Desktop:

- Compact indicator grid.
- Clear hierarchy.
- Trend visualization has sufficient width.

Tablet:

- Reduce card columns.
- Keep values readable.

Mobile:

- Avoid tiny market numbers.
- Use stacked cards/table treatment.
- Horizontal table scrolling only when necessary and clearly usable.
- No chart overflow.
- Source/freshness remains readable.

---

# 26. Accessibility

Verify:

- Meaningful headings.
- Market values are understandable without color.
- Change direction has text/semantic meaning.
- Charts have accessible text summaries.
- Table headers are real headers.
- Links/buttons have meaningful labels.
- Keyboard navigation works.
- Focus states are visible.

A sparkline alone must never be the only representation of a market trend.

---

# 27. Performance

Market dashboard should be lightweight.

Use:

- Small data payloads.
- Limited historical window for homepage.
- Efficient queries.
- Lightweight chart rendering.
- Cached output where appropriate.

Avoid:

- Loading full historical datasets on every homepage request.
- Large chart libraries for simple sparklines.
- Duplicate market queries in multiple widgets.
- Client-side requests that expose unnecessary data.

---

# 28. Test Dataset

Create a synthetic staging dataset only for testing.

Minimum:

- 6 Market Items.
- At least 10 historical entries for 3 indicators.
- Positive change.
- Negative change.
- Neutral change.
- Missing change.
- Missing historical data.
- Stale timestamp.
- Missing optional source URL.

Clearly label synthetic data as staging/test data.

Never confuse it with production market information.

---

# 29. Market Test Matrix

| Scenario | Expected |
|---|---|
| Complete Market Item | All valid fields render |
| Missing value | Value area handled without fake zero |
| Positive change | Correct positive state |
| Negative change | Correct negative state |
| Neutral change | Neutral state |
| Missing change | Change hidden |
| Historical entries | Real trend renders |
| No historical entries | Chart hidden/empty state |
| Stale data | Freshness warning/state |
| Missing source | No invented source |
| Mobile dashboard | No overflow |
| Homepage dashboard | Compact subset only |

---

# 30. Implementation Order

1. Verify Market Item structure.
2. Verify Market Entry structure.
3. Create synthetic staging data.
4. Validate current values.
5. Validate historical relationships.
6. Build Market Card.
7. Build homepage Market Dashboard.
8. Build full Market page.
9. Build historical visualization.
10. Build reference table.
11. Add freshness/source states.
12. Add related market content conservatively.
13. Configure SEO.
14. Responsive QA.
15. Accessibility QA.
16. Performance QA.
17. Remove/replace synthetic data before production migration.

---

# 31. Market Acceptance Gate

### Data
- [ ] Market Item fields work.
- [ ] Market Entry relationship works.
- [ ] Numeric validation works.
- [ ] Unit/basis is clear.
- [ ] Timestamp works.
- [ ] Source attribution is accurate.

### Dashboard
- [ ] Market Cards are dynamic.
- [ ] Homepage dashboard is compact.
- [ ] Full Market page works.
- [ ] Ordering is controlled.
- [ ] Empty states work.

### Historical
- [ ] Trend uses real Market Entries.
- [ ] Chronological order is correct.
- [ ] Missing data is handled.
- [ ] No fake trend data remains.

### SEO
- [ ] Market canonical is correct.
- [ ] Metadata is correct.
- [ ] Indexability is intentional.
- [ ] No unsupported/conflicting schema.

### Quality
- [ ] Responsive QA passes.
- [ ] Accessibility baseline passes.
- [ ] Performance acceptable.
- [ ] Synthetic data is clearly separated from production data.

---

# 32. Definition of Day Eight Done

Day Eight is complete when:

**A Market Item can be updated in WordPress, its current value/change/source/freshness update automatically, and its historical entries drive the visible trend without editing Elementor.**

The key test is:

Update one Market Item → add one Market Entry → refresh homepage and `/market/` → both current data and historical visualization reflect the WordPress data.

---

# 33. Next Stage

After Day Eight:

**Day Nine — Homepage Assembly and Editorial Integration**

The homepage will now consume the proven global system, loops, Single Article, archives, Company layer, and Market data rather than introducing new data structures.
