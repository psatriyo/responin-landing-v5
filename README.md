# Responin Landing (v5)

Production landing page for **[responin.com](https://responin.com)** — a static, dependency-free
HTML/CSS/JS site built from the Responin system-design documentation.

- Indonesian (default) is written directly in `index.html`, so the page is complete without
  JavaScript and indexable by search engines and link previews.
- English is applied client-side from `i18n/en.js` via the ID/EN switcher.
  Shareable English link: `https://responin.com/?lang=en`.
- No build step, no runtime dependencies, no analytics or cookies.

## Run locally

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. (Opening `index.html` directly also works.)

## Checks

```bash
node scripts/check.mjs
npx --yes html-validate@9 index.html 404.html
```

`scripts/check.mjs` verifies:

1. every `data-i18n` / `data-i18n-attr` key in `index.html` has an English string (and no unused ones);
2. in-page anchors resolve, ids are unique, and local files referenced from HTML exist;
3. the copy contains none of the claims that the system-design claims register marks as
   *Needs evidence* or *Replace* (45%, 60%, 80%+, <30s, "4 hrs saved", "data never leaves your
   environment", "2 weeks to autonomous operations").

Both checks run in CI on every PR and before every deploy.

## Editing copy

1. Change the Indonesian text in `index.html`.
2. Change the matching key in `i18n/en.js`.
3. New text element? Add `data-i18n="section.key"` in the HTML and the same key in `en.js`.
4. Run `node scripts/check.mjs`.

Before publishing any new number or privacy statement, check it against
`product/13-PRODUCT-claims-register.md` and `product/16-PRODUCT-privacy-and-trust-wording-guide.md`
in the system-design repo.

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` deploys on every push to `main`: it runs the checks, copies only
public files into `_site/`, and publishes with GitHub Pages. `CNAME` sets the custom domain to
`responin.com`.

One-time setup:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. DNS for `responin.com` at your registrar:
   - apex `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - (optional IPv6) `AAAA` → `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `www` `CNAME` → `psatriyo.github.io`
3. **Settings → Pages → Custom domain:** `responin.com`, wait for the DNS check, then tick
   **Enforce HTTPS**.
4. Recommended: verify the domain for your account/org (Settings → Pages → Verified domains) to
   prevent domain takeover.

## Files

| Path | Purpose |
|---|---|
| `index.html` | Page structure and Indonesian copy |
| `styles.css` | Design tokens, layout, responsive styles |
| `script.js` | Language switching and accessible smooth scrolling |
| `i18n/en.js` | English strings |
| `404.html` | Not-found page |
| `favicon.svg`, `assets/` | Icon, Apple touch icon, Open Graph share image |
| `robots.txt`, `sitemap.xml`, `site.webmanifest` | SEO and browser metadata |
| `scripts/check.mjs` | CI checks (no dependencies) |
| `scripts/render-images.cjs`, `scripts/og-image.html` | Regenerate PNG assets (needs Playwright) |
| `docs/content-sources.md` | Which system-design document each section comes from |

## Not included (by decision)

- No pricing amounts (packages only; pricing by consultation).
- No analytics, cookies, or form backend — CTAs are `mailto:hello@responin.com`.
- No privacy-policy page yet (the site collects no data).
