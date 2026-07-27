---
title: Accessibility
description: Accessibility guidelines for color contrast, typography legibility, data visualization, and document design across Kreoza.
---

Designing a space to make room for new discoveries means building experiences that benefit **all people**. Accessibility is **not an afterthought or an optional feature**—it is a **right of all people and a fundamental principle of design**.

:::tip
Always aim for **WCAG 2.1 AA compliance** across all digital products, documentation, graphics, and external communication.
:::

## Text and Color Contrast

- **WCAG AA Contrast:** Maintain a minimum **4.5:1** contrast ratio for body copy (3:1 for large text).
- **Type Scale:** Stick to defined font scales. Keep body text at `14px` (`0.875rem`) or higher.
- **Color Independence:** Never rely on color alone for status—always pair with text or icons.
- **Neutral Canvas:** Place copy on solid neutral backgrounds with clean structural borders.

## Charts and Data Visualizations

- **Direct Labels:** Label chart elements directly rather than relying on color legends alone.
- **Visual Patterns:** Use textures, line styles (dashed/solid), or shapes alongside color.
- **Alt Summaries:** Provide text summaries or table fallbacks for complex charts.

## Documents and Media

- **Semantic Headings:** Use a logical heading hierarchy (`h1` → `h2` → `h3`) without skipping levels.
- **Alt Text:** Include descriptive alt text for informative images; use `alt=""` for decorative ones.
- **Screen Readers:** Tag exported PDFs properly and maintain comfortable reading line lengths.

## Quick Checklist

:::note

- Contrast meets WCAG AA (4.5:1 ratio)
- States don't rely solely on color
- Keyboard focus states are clearly visible
- Images include descriptive alt text
- Heading hierarchy is logical and sequential
  :::

## Recommended Testing Tools

The following Chrome extensions are recommended for hands-on accessibility auditing:

| Extension                             | Best For                  | Highlights                                                                     |
| :------------------------------------ | :------------------------ | :----------------------------------------------------------------------------- |
| **Accessibility Checker by WebYes**   | Quick scans & reports     | Balanced visual issue highlighting and structure checks; no sign-in required   |
| **WAVE Evaluation Tool**              | On-page visual audits     | Fast visual overlay of errors, ARIA tags, and contrast issues directly on page |
| **axe DevTools**                      | Technical QA & developers | Industry gold-standard automated engine powered by `axe-core`                  |
| **Accessibility Insights for Web**    | Guided developer testing  | Step-by-step guided audit workflows beyond automated scans                     |
| **Accessible Web Helper**             | Designers & FE developers | Element highlighting and remediation guidance                                  |
| **Silktide Accessibility Checker**    | Impairment simulations    | Strong visual guidance and disability simulation tools                         |
| **Siteimprove Accessibility Checker** | Dynamic & protected pages | Excellent for testing interactive states and password-protected pages          |

_Based on hands-on testing comparison by [WebYes](https://www.webyes.com/blogs/accessibility-checker-chrome-extensions/)._

## Related Content

- [Wikipedia about Accessibility](https://en.wikipedia.org/wiki/Accessibility)
- [Wikipedia about Universal Design](https://en.wikipedia.org/wiki/Universal_design)
- [GitHub about Accessibility](https://accessibility.github.com/)
- [WebYes Accessibility Extension Comparison](https://www.webyes.com/blogs/accessibility-checker-chrome-extensions/)
