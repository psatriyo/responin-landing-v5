// Regenerates assets/og-image.png and assets/apple-touch-icon.png.
// Dev-only helper (the deployed site does not use it). Requires Playwright:
//   node scripts/render-images.cjs
const { chromium } = require('playwright');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

const root = path.resolve(__dirname, '..');
const url = (file) => pathToFileURL(path.join(root, file)).href;

(async () => {
  const browser = await chromium.launch();

  const og = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await og.goto(url('scripts/og-image.html'));
  await og.screenshot({ path: path.join(root, 'assets/og-image.png') });

  const icon = await browser.newPage({ viewport: { width: 180, height: 180 } });
  await icon.goto(url('favicon.svg'));
  await icon.screenshot({ path: path.join(root, 'assets/apple-touch-icon.png'), omitBackground: true });

  await browser.close();
  console.log('Rendered assets/og-image.png and assets/apple-touch-icon.png');
})();
