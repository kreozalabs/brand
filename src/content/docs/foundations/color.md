---
title: Color System
description: Default organization color palette, shadcn/ui preset, and core token specifications.
---

Kreoza provides a **default color palette** for the organization. Each product inherits this palette as a starting baseline and overwrites only the styles it needs. This saves time choosing default colors while maintaining visual consistency across products.

---

## Default Palette & Theme Generator

Our default palette is initialized from the [shadcn/ui Neutral Preset](https://ui.shadcn.com/create?preset=bciwM7zk&rtl=true) (`preset=bciwM7zk`) using OKLCH color space.

:::tip[Interactive Theme Generator]
You can inspect or test the underlying theme structure directly using the [shadcn Theme Generator](https://ui.shadcn.com/create?preset=bciwM7zk&rtl=true).
:::

---

## Core Guidelines

1. **Start with the Default:** Always start with the organization's default palette. Only override tokens when required by your product's specific use-case or pillar.
2. **Neutral Canvas:** Keep layout frames, containers, borders, and body text strictly monochromatic.
3. **Contrast Compliance:** All body copy must maintain at least **4.5:1** contrast against its background (WCAG AA).
4. **Color Independence:** Never rely on color alone for status—always pair colored indicators with text or icons.

---

## Related Guides

- [Customization & Product Theme Overrides](/guides/customization/)
- [Accessibility Guidelines](/foundations/accessibility/)
