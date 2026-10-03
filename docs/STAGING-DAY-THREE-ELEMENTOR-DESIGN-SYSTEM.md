# Staging Day-Three — Elementor Design System

## Goal

Day Three establishes the reusable visual foundation of the production site.

The objective is not to build the homepage.

The objective is to make every later template use the same design language without manually repeating styles.

## 1. Day-Three Deliverables

By the end of Day Three:

1. Elementor global colors configured.
2. Global typography configured.
3. Container/layout rules configured.
4. Spacing system defined.
5. Button/link system defined.
6. Form/input basics defined.
7. Responsive rules defined.
8. Header built.
9. Footer built.
10. Basic reusable utility components created.
11. Global design acceptance gate passed.

# Phase 1 — Elementor Global Settings

## 2. Global Colors

Configure:

| Token | Value | Use |
|---|---|---|
| Primary | #194B7E | Main brand/navigation/actions |
| Accent | #89CDAC | Highlights/hover/secondary emphasis |
| Navy | #0E2A47 | Dark market/data sections |
| Text | #17202A | Main body/headlines |
| Muted | #667085 | Secondary text |
| Background | #F7F9FA | Page/section backgrounds |
| White | #FFFFFF | Cards/header/light surfaces |
| Border | #E5E7EB | Dividers/borders |

Do not introduce arbitrary one-off colors during page construction.

If a new color is genuinely required, add it to the system rather than creating an inline exception.

# Phase 2 — Typography

## 3. Global Typography

Use Vazirmatn or the approved Persian font.

Define:
- Display/Hero
- H1
- H2
- H3
- H4
- Body
- Small/metadata
- Caption/label
- Navigation

Rules:
- Avoid excessive font-weight variation.
- Headlines need strong hierarchy without oversized magazine-style typography.
- Body text must remain readable on desktop and mobile.
- Metadata remains visually secondary.
- English numbers/data remain legible inside RTL layouts.

Article typography should separately define paragraphs, headings, lists, blockquotes, tables, links, captions and figure spacing.

Do not style individual articles manually.

# Phase 3 — Container and Spacing System

## 4. Global Container

Primary maximum width: 1320px.

Use a consistent horizontal gutter.

Content should remain centered and should not become excessively wide on large monitors.

## 5. Spacing Tokens

Use a predictable spacing scale:

- 4px
- 8px
- 12px
- 16px
- 24px
- 32px
- 48px
- 64px
- 80px

Major section spacing should normally use 48–80px depending on viewport and content density.

Do not create dozens of nearly identical spacing values.

# Phase 4 — Shape and Surface Rules

## 6. Cards

Cards should be editorial, clean, light and structured around content hierarchy.

Avoid:
- Excessive rounded corners.
- Glassmorphism.
- Heavy shadows.
- Gradient backgrounds.
- Decorative effects that compete with headlines.

A small radius may be used consistently if needed, but it must be a system decision.

## 7. Borders and Dividers

Prefer subtle borders and whitespace over heavy shadows.

Standard border: #E5E7EB.

# Phase 5 — Buttons and Links

## 8. Primary Button

Primary:
- Background: #194B7E
- Text: #FFFFFF
- Controlled hover state.
- Clear focus state.

## 9. Secondary/Accent Action

Use #89CDAC as an accent where appropriate.

Do not make every action an accent-colored button.

# Phase 6 — Editorial Utilities

## 10. Category Label

Create a reusable category label:
- Dynamic label.
- Consistent typography.
- Compact dimensions.
- Works on light and dark backgrounds.
- RTL-aware.

## 11. Article Meta

Reusable metadata:
- Author.
- Date.
- Reading time.

Optional fields must disappear cleanly when empty.

## 12. Section Header

Reusable section header:
- Section title.
- Optional description.
- Optional archive/view-all link.

Use across Latest News, Analysis, Reports, Technology, Interviews and Companies.

## 13. Breadcrumbs

Create reusable dynamic breadcrumbs for articles, archives, companies and pages.

# Phase 7 — Header

## 14. Header Structure

Build approximately:

Logo | Main Navigation | Search | Market

Main navigation target:
1. آخرین اخبار
2. تحلیل و گزارش
3. بازار فولاد
4. شرکت‌ها
5. فناوری
6. مصاحبه‌ها

Keep navigation compact. Do not add every category to the main menu.

## 15. Header Behavior

Desktop:
- Clear horizontal structure.
- Strong logo visibility.
- Comfortable navigation spacing.
- Search accessible.
- Market link/action visible.

Tablet:
- Reduce spacing.
- Preserve hierarchy.
- Avoid multi-row primary navigation.

Mobile:
- Logo.
- Menu trigger.
- Search/action as space allows.
- Full navigation inside mobile menu.

## 16. Sticky Header

If used:
- Keep it compact.
- Avoid dramatic layout changes after scrolling.
- Avoid excessive animation.
- Preserve accessibility.
- Do not obscure article content.

# Phase 8 — Footer

## 17. Footer Structure

Include:
- Brand/description.
- Main sections.
- Important links.
- Contact/social links where applicable.
- Legal/utility links.
- Copyright.

Use a simple editorial/industrial language. Avoid a giant low-value link wall.

# Phase 9 — Mobile Navigation

## 18. Mobile Menu

Requirements:
- Clear open/close state.
- Keyboard/focus accessibility.
- Adequate touch targets.
- RTL ordering.
- No horizontal overflow.
- Same destination URLs as desktop.

Do not create a second independent navigation structure with different URLs.

# Phase 10 — Responsive Rules

## 19. Required Test Widths

Test every global component at:
- 1440px
- 1280px
- 1024px
- 768px
- 480px
- 390px
- 360px

Verify:
- No horizontal overflow.
- Navigation remains usable.
- Text does not collide.
- Logo remains readable.
- Touch targets are practical.
- Header does not consume excessive mobile viewport height.

# Phase 11 — Accessibility Baseline

## 20. Global Accessibility

Ensure:
- Semantic headings.
- Keyboard focus.
- Visible focus states.
- Sufficient contrast.
- Meaningful link text.
- Alt text for meaningful images.
- Decorative images are not unnecessarily announced.
- Buttons are actual buttons where appropriate.
- Navigation has accessible labels.
- Mobile menu works without a mouse.

Do not use color alone to communicate meaning.

# Phase 12 — Custom CSS/JS Boundary

## 21. Elementor First

Prefer:
- Elementor Global Settings.
- Containers.
- Classes.
- CSS variables.
- Theme Builder.
- Dynamic widgets.

Use custom CSS only where Elementor cannot reasonably achieve the behavior.

Use custom JavaScript only for genuinely interactive behavior.

Do not introduce large JavaScript frameworks for basic WordPress interactions.

# Phase 13 — Reusable Class Strategy

## 22. Naming

Use predictable classes such as:
- swr-container
- swr-section
- swr-section-header
- swr-card
- swr-card--featured
- swr-meta
- swr-category
- swr-market-card
- swr-company-card

Avoid generic names such as box1, custom2, test-new or final-final.

Classes should describe purpose, not the current design experiment.

# Phase 14 — Header/Footer Acceptance Test

Test the global system on:
1. Normal page.
2. Article.
3. Archive.
4. Company page.
5. Market page.
6. Search.
7. 404.

Verify:
- Same logo.
- Same navigation.
- Same typography.
- Same spacing system.
- Correct active state.
- Correct links.
- Correct mobile behavior.
- No duplicated styles.

# Phase 15 — Visual Quality Rules

The site should feel like a professional steel-industry editorial platform.

It should not feel like:
- A generic WordPress magazine.
- A news portal overloaded with cards.
- A SaaS dashboard.
- A futuristic AI interface.
- A template marketplace demo.

Prioritize:
- Editorial hierarchy.
- Information density with breathing room.
- Strong typography.
- Structured data presentation.
- Restrained color.
- Clear navigation.
- Professional industrial tone.

# Day-Three Acceptance Gate

## Global
- [ ] Colors configured.
- [ ] Typography configured.
- [ ] Container configured.
- [ ] Spacing system defined.
- [ ] Button/link states defined.
- [ ] Responsive behavior defined.

## Components
- [ ] Category Label.
- [ ] Article Meta.
- [ ] Section Header.
- [ ] Breadcrumbs.

## Header
- [ ] Desktop.
- [ ] Tablet.
- [ ] Mobile.
- [ ] Search.
- [ ] Market action.
- [ ] Active states.

## Footer
- [ ] Desktop.
- [ ] Tablet.
- [ ] Mobile.
- [ ] Links verified.

## Quality
- [ ] No horizontal overflow.
- [ ] Focus states visible.
- [ ] Contrast acceptable.
- [ ] No unnecessary custom code.
- [ ] No arbitrary one-off colors/spacing.

# What Comes Next

After this gate:

1. Build Standard News Card.
2. Build Featured Story.
3. Build Compact News List.
4. Build Analysis Card.
5. Build Report Card.
6. Build Company Card.
7. Build Interview Card.
8. Build Technology Card.
9. Build Market Card.
10. Test every loop with the Day-Two dataset.
11. Then build Single Article.
12. Then Archives.

Key rule:

**Build reusable components first; assemble pages second.**
