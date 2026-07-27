---
title: Typography
description: Font stacks, relative type scales, and line spacing guidelines.
---

Kreoza uses a clean, modern typographic system built on standard sans-serif font stacks for UI body text and monospace fonts for technical code.

---

## Font Stacks

```css
:root {
  --font-sans: "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, "Roboto Mono", Consolas, monospace;
}
```

- **UI & Reading Text:** `Inter` (or system sans-serif) for high legibility across all screen densities.
- **Code & Technical Input:** System monospace / `Roboto Mono` for code snippets, terminal commands, and configuration blocks.

---

## Type Scale

Our type scale uses relative `rem` units based on a standard `16px` (`1rem`) body size.

| Element | Scale | Line Height | Usage |
| :--- | :--- | :--- | :--- |
| `h1` | `3.5rem` (`56px`) | `1.1` | Main page title & document header |
| `h2` | `2.5rem` (`40px`) | `1.2` | Major section headers |
| `h3` | `1.75rem` (`28px`) | `1.3` | Panel and card section titles |
| `h4` | `1.5rem` (`24px`) | `1.4` | Sub-panel headings |
| `body` | `1rem` (`16px`) | `1.5` | Standard paragraph reading copy |
| `small` | `0.875rem` (`14px`) | `1.4` | Metadata, timestamps, captions, table text |

---

## Guidelines

- **Line Length:** Keep body text between **50–75 characters** per line for comfortable reading.
- **Line Spacing:** Use `1.5` line height for body paragraphs and tighter line spacing (`1.1`–`1.2`) for large headings.
- **Hierarchy:** Maintain a logical heading hierarchy (`h1` → `h2` → `h3`) without skipping levels.

---

## Related Guides

- [Color System](/foundations/color/)
- [Accessibility Guidelines](/foundations/accessibility/)
