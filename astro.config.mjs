// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://brand.kreoza.com",
  integrations: [
    starlight({
      title: "Brand Toolkit",
      customCss: ["./src/styles/custom.css"],
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
        alt: "Kreoza",
        light: "./public/favicon.svg",
        dark: "./public/favicon.svg", // TODO: Set a new icon that works with dark mode
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            { label: "Getting Started", slug: "guides/getting-started" },
            { label: "Customization", slug: "guides/customization" },
          ],
        },
        {
          label: "Brand Identity",
          items: [
            {
              label: "Co-branding",
              slug: "brand-identity/co-branding",
            },
          ],
        },
        {
          label: "Foundations",
          items: [
            { label: "Accessibility", slug: "foundations/accessibility" },
            { label: "Color", slug: "foundations/color" },
            { label: "Logo", slug: "foundations/logo" },
            { label: "Typography", slug: "foundations/typography" },
          ],
        },
      ],
      editLink: {
        baseUrl: "https://github.com/kreozalabs/brand/edit/main/",
      },
    }),
  ],
});
