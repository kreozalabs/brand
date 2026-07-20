// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Brand Toolkit",
      customCss: [
        "./src/styles/custom.css",
      ],
      components: {
        ThemeSelect: "./src/components/ThemeToggle.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/kreozalabs/brand",
        },
      ],
      logo: {
        src: "./public/favicon.svg",
        alt: "Kreoza",
      },
      sidebar: [
        {
          label: "Guides",
          items: [{ label: "Getting Started", slug: "guides/getting-started" }],
        },
        {
          label: "Brand Identity",
          items: [
            {
              label: "Brand Attributes",
              slug: "brand-identity/brand-attributes",
            },
            { label: "Voice and Tone", slug: "brand-identity/voice-and-tone" },
          ],
        },
        {
          label: "Foundations",
          items: [
            { label: "Accessibility", slug: "foundations/accessibility" },
            { label: "Color", slug: "foundations/color" },
            { label: "Logo", slug: "foundations/logo" },
            { label: "Typography", slug: "foundations/typography" },
            { label: "UI Modes", slug: "foundations/ui-modes" },
          ],
        },
      ],
      editLink: {
        baseUrl: "https://github.com/kreozalabs/brand/edit/main/",
      },
    }),
  ],
});
