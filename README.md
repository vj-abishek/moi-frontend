# Moi landing page

Marketing site for [Moi](https://getmoi.in) – a wedding & celebration gift tracker (UPI, cash, one link for guests).

**Live site:** [getmoi.in](https://getmoi.in) · **Sign up:** [app.getmoi.in](https://app.getmoi.in/signup)

## Stack

- [Astro](https://astro.build) 5
- [Tailwind CSS](https://tailwindcss.com) 4 + [DaisyUI](https://daisyui.com)
- Deploy: Cloudflare (static + adapter)

## Commands

| Command           | Action                          |
| ----------------- | ------------------------------- |
| `npm install`     | Install dependencies            |
| `npm run dev`     | Dev server at `localhost:4321`   |
| `npm run build`   | Production build to `./dist/`    |
| `npm run preview` | Preview production build locally |

## Customizing for your fork

If you’re reusing this as a template, update:

1. **`astro.config.mjs`** – `site` (canonical origin).
2. **`src/seo.ts`** – `SEO_CONFIG`: `siteUrl`, `appUrl`, `siteName`, `schemaAppName`, `appDescription`, `description`, `email`, `logoUrl`, `keywords`.
3. **`src/consts.ts`** – `SITE_TITLE`, `SITE_TITLE_HOME`, `SITE_DESCRIPTION`, `APP_SIGNUP_URL`, `FOOTER_LINKS` (and any feature copy you want to change).

SEO (titles, meta, Schema.org) is driven from `src/seo.ts` and `src/consts.ts`; the homepage uses VideoObject + SoftwareApplication schema for rich results.

## Project structure

```
├── public/           # Static assets (favicon, images, intro video)
├── src/
│   ├── assets/       # Processed images (e.g. hero thumb)
│   ├── components/   # BaseHead, Header, Footer, etc.
│   ├── layouts/      # BlogPost, PageLayout
│   ├── pages/        # Routes (index, blog, faq, about, …)
│   ├── content/      # Blog collection (MDX)
│   ├── consts.ts     # Copy, nav, footer links, app URL
│   └── seo.ts        # Schema.org generators + SEO_CONFIG
├── astro.config.mjs
└── package.json
```

## License

MIT – see [LICENSE](LICENSE).
