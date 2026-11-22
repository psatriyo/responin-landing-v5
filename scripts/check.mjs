// Static-site checks with no dependencies. Run: node scripts/check.mjs
//  1. Every data-i18n / data-i18n-attr key in index.html has an English string, and vice versa.
//  2. Every in-page #anchor points at an existing id; ids are unique.
//  3. Every local src/href file reference exists.
//  4. Copy does not contain claims the claims register marks "Needs evidence" or "Replace".
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (f) => readFileSync(path.join(root, f), 'utf8');
const errors = [];

const pages = ['index.html', '404.html'];
const html = read('index.html');

// 1. i18n parity
const sandbox = { window: {} };
vm.runInNewContext(read('i18n/en.js'), sandbox);
const en = sandbox.window.ResponinI18n?.en;
if (!en) errors.push('i18n/en.js did not define window.ResponinI18n.en');
const textKeys = new Set([...html.matchAll(/data-i18n="([^"]+)"/g)].map((m) => m[1]));
const attrKeys = new Set(
  [...html.matchAll(/data-i18n-attr="([^"]+)"/g)].flatMap((m) =>
    m[1].split(',').map((pair) => pair.split(':')[1]?.trim()).filter(Boolean)
  )
);
if (en) {
  for (const k of textKeys) if (!(k in en.text)) errors.push(`Missing English text key: ${k}`);
  for (const k of attrKeys) if (!(k in en.attr)) errors.push(`Missing English attr key: ${k}`);
  for (const k of Object.keys(en.text)) if (!textKeys.has(k)) errors.push(`Unused English text key: ${k}`);
  for (const k of Object.keys(en.attr)) if (!attrKeys.has(k)) errors.push(`Unused English attr key: ${k}`);
  if (!en.title || !en.meta?.description) errors.push('English title/meta.description missing');
}

// 2. anchors + unique ids
const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
const seen = new Set();
for (const id of ids) {
  if (seen.has(id)) errors.push(`Duplicate id: ${id}`);
  seen.add(id);
}
for (const [, target] of html.matchAll(/href="#([^"]+)"/g)) {
  if (!seen.has(target)) errors.push(`Broken in-page link: #${target}`);
}

// 3. local references
for (const page of pages) {
  const src = read(page);
  for (const [, ref] of src.matchAll(/(?:src|href)="([^"#]+)"/g)) {
    if (/^(https?:|mailto:|tel:|data:)/.test(ref)) continue;
    const file = path.join(root, ref.replace(/^\//, '').split('?')[0]);
    if (!existsSync(file)) errors.push(`${page}: missing local file ${ref}`);
  }
}
const manifest = JSON.parse(read('site.webmanifest'));
for (const icon of manifest.icons) {
  if (!existsSync(path.join(root, icon.src))) errors.push(`site.webmanifest: missing ${icon.src}`);
}

// 4. claims guardrail (product/13-PRODUCT-claims-register.md)
const copy = html + JSON.stringify(en ?? {});
const banned = [
  [/\b45\s?%/, '45% support time reduced (needs evidence)'],
  [/\b60\s?%/, '60% routine tasks automated (needs evidence)'],
  [/\b80\s?%/, '80%+ requests handled (needs evidence)'],
  [/<\s?30\s?s|&lt;\s?30\s?s/i, '<30s command to action (conditional)'],
  [/\b4 ?hrs?\b|\b4 jam\b/i, '4 hrs saved per employee (needs evidence)'],
  [/never leaves your environment|tidak pernah meninggalkan/i, 'absolute data-residency claim (replace)'],
  [/2 weeks .*autonomous|2 minggu .*otonom/i, '2 weeks to autonomous operations (replace)']
];
for (const [re, label] of banned) if (re.test(copy)) errors.push(`Unsupported public claim found: ${label}`);

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log(`✓ ${textKeys.size} text keys, ${attrKeys.size} attr keys, ${ids.length} ids, links and claims OK`);
