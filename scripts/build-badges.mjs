#!/usr/bin/env node
/**
 * Build local, self-contained technology badges with no npm dependencies.
 * Run: node scripts/build-badges.mjs
 * The first run fetches pinned Devicon artwork; subsequent runs work offline.
 * Use --refresh to fetch the same pinned sources again.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'assets/tech');
const vendor = path.join(root, 'assets/vendor/devicon');
const revision = '7330accdbc47e2dc0c19789a48533c4a3c50fe58';
const origin = `https://raw.githubusercontent.com/devicons/devicon/${revision}`;
const refresh = process.argv.includes('--refresh');

// slug, visible label, Devicon directory, variant (or fallback initials/color).
// A technology's presence documents project use, not a proficiency claim.
const technologies = [
  ['typescript', 'TypeScript', 'typescript'],
  ['javascript', 'JavaScript', 'javascript'],
  ['java', 'Java', 'java'],
  ['python', 'Python', 'python'],
  ['csharp', 'C#', 'csharp'],
  ['react', 'React', 'react'],
  ['nextjs', 'Next.js', 'nextjs'],
  ['vue', 'Vue', 'vuejs'],
  ['vite', 'Vite', 'vitejs'],
  ['tailwindcss', 'Tailwind CSS', 'tailwindcss'],
  ['styled-components', 'styled-components', 'styledcomponents'],
  ['tanstack-query', 'TanStack Query', null, 'TQ', '#FFCB54'],
  ['zustand', 'Zustand', 'zustand'],
  ['pinia', 'Pinia', null, 'P', '#FFD65B'],
  ['recoil', 'Recoil', null, 'R', '#6DABFF'],
  ['kotlin', 'Kotlin', 'kotlin'],
  ['jetpack-compose', 'Jetpack Compose', 'jetpackcompose'],
  ['swift', 'Swift', 'swift'],
  ['swiftui', 'SwiftUI', null, 'SU', '#65B5F6'],
  ['spring-boot', 'Spring Boot', 'spring'],
  ['spring-security', 'Spring Security', 'spring'],
  ['jpa', 'JPA', null, 'JP', '#B8AC90'],
  ['querydsl', 'QueryDSL', null, 'QD', '#70BEF6'],
  ['fastapi', 'FastAPI', 'fastapi'],
  ['postgresql', 'PostgreSQL', 'postgresql'],
  ['mysql', 'MySQL', 'mysql'],
  ['redis', 'Redis', 'redis'],
  ['unity', 'Unity', 'unity'],
  ['uitoolkit', 'UI Toolkit', null, 'UI', '#BDC8EB'],
  ['unitask', 'UniTask', null, 'UT', '#A594ED'],
  ['docker', 'Docker', 'docker'],
  ['nginx', 'Nginx', 'nginx'],
  ['aws', 'AWS', 'amazonwebservices', 'original-wordmark'],
  ['git', 'Git', 'git'],
  ['github-actions', 'GitHub Actions', 'githubactions'],
  ['gitlab-ci', 'GitLab CI', 'gitlab'],
  ['playwright', 'Playwright', 'playwright'],
  ['vitest', 'Vitest', 'vitest'],
  ['storybook', 'Storybook', 'storybook'],
  ['msw', 'MSW', null, 'MW', '#FF9C70'],
  ['junit', 'JUnit', 'junit'],
  ['figma', 'Figma', 'figma'],
];

const xml = (value) => String(value).replace(/[&<>"']/g, (c) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
}[c]));

async function cachedSource(relative) {
  const local = path.join(vendor, relative);
  if (!refresh) {
    try { return await readFile(local, 'utf8'); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
  const response = await fetch(`${origin}/${relative}`);
  if (!response.ok) throw new Error(`${relative}: HTTP ${response.status}`);
  const body = await response.text();
  await mkdir(path.dirname(local), { recursive: true });
  await writeFile(local, body);
  return body;
}

function embedIcon(source, slug) {
  // Do not embed executable markup, linked content, or external CSS resources.
  if (/<(?:script|foreignObject|iframe|image)\b|\son\w+\s*=|<!ENTITY/i.test(source)) {
    throw new Error(`Unsafe SVG markup in ${slug}`);
  }
  for (const match of source.matchAll(/(?:href|xlink:href)\s*=\s*["']([^"']*)["']/gi)) {
    if (!match[1].startsWith('#')) throw new Error(`External SVG reference in ${slug}`);
  }
  for (const match of source.matchAll(/url\(\s*["']?([^)'"\s]+)/gi)) {
    if (!match[1].startsWith('#')) throw new Error(`External SVG CSS URL in ${slug}`);
  }
  const cleaned = source.replace(/<\?xml[\s\S]*?\?>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '').replace(/<!DOCTYPE[^>]*>/g, '').trim();
  const match = cleaned.match(/^<svg\b([^>]*)>([\s\S]*)<\/svg>$/i);
  if (!match) throw new Error(`Invalid SVG in ${slug}`);
  const viewBox = match[1].match(/viewBox\s*=\s*["']([^"']+)["']/i)?.[1];
  if (!viewBox || !/^[\d.\s,-]+$/.test(viewBox)) throw new Error(`Missing viewBox in ${slug}`);
  const presentation = [...match[1].matchAll(/\b(fill|stroke|fill-rule|clip-rule|stroke-width|xml:space)\s*=\s*["']([^"']*)["']/gi)]
    .map((attribute) => ` ${attribute[1]}="${xml(attribute[2])}"`).join('');
  // Preserve the official logo's colors. A small light backing keeps black marks legible.
  const backing = ['nextjs', 'unity', 'aws'].includes(slug)
    ? '<rect x="8" y="6" width="20" height="20" rx="4" fill="#F4F6FF"/>' : '';
  return `${backing}<svg x="10" y="8" width="16" height="16" viewBox="${xml(viewBox)}"${presentation} aria-hidden="true">${match[2].trim()}</svg>`;
}

function fallbackIcon(initials, color) {
  return `<rect x="11" y="9" width="14" height="14" rx="3" fill="${color}"/>` +
    `<text x="18" y="19.3" text-anchor="middle" fill="#172039" font-family="Arial,Helvetica,sans-serif" font-size="8" font-weight="700">${xml(initials)}</text>`;
}

function labelWidth(label) {
  // Approximate Arial 13 semibold advances, with a generous right-hand margin.
  const narrow = new Set('ijlItfr. ');
  const wide = new Set('MWm@');
  return Math.ceil([...label].reduce((width, character) => width + (
    narrow.has(character) ? 4 : wide.has(character) ? 10.5 : /[A-Z#]/.test(character) ? 8.6 : 7.2
  ), 0));
}

await Promise.all([mkdir(output, { recursive: true }), mkdir(vendor, { recursive: true })]);
await cachedSource('LICENSE');

const attribution = [];
for (const [slug, label, directory, variant, color] of technologies) {
  let icon;
  if (directory) {
    const asset = `icons/${directory}/${directory}-${variant || 'original'}.svg`;
    icon = embedIcon(await cachedSource(asset), slug);
    attribution.push(`| ${label} | [${asset}](${origin}/${asset}) |`);
  } else {
    icon = fallbackIcon(variant, color);
    attribution.push(`| ${label} | Custom initials mark; not an official logo. |`);
  }
  const width = 46 + labelWidth(label);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="32" viewBox="0 0 ${width} 32" role="img" aria-labelledby="title"><title id="title">${xml(label)}</title><rect width="${width}" height="32" rx="7" fill="#1B2440"/>${icon}<text x="35" y="20.5" fill="#F4F6FF" font-family="Arial,Helvetica,sans-serif" font-size="13" font-weight="600">${xml(label)}</text></svg>\n`;
  await writeFile(path.join(output, `${slug}.svg`), svg);
}

await writeFile(path.join(vendor, 'ATTRIBUTION.md'), `# Technology badge artwork\n\n` +
  `Logo artwork is from [Devicon](https://github.com/devicons/devicon), pinned at ` +
  `\`${revision}\`. Original source SVGs are retained under \`icons/\`.\n\n` +
  `Devicon is distributed under the MIT license; its unmodified [LICENSE](LICENSE) is included. ` +
  `Product names and logos belong to their respective owners. Their use identifies technologies and does not imply endorsement.\n\n` +
  `The local badges wrap the logos with a navy background and a text label. ` +
  `Next.js, Unity, and AWS receive a light backing for contrast; original logo colors are preserved. ` +
  `Spring's logo represents Spring Boot and Spring Security. ` +
  `Entries marked as custom use small, original initials tiles rather than third-party logo artwork.\n\n` +
  `Regenerate with \`node scripts/build-badges.mjs\`. Existing vendored source files make regeneration work offline. ` +
  `Use \`--refresh\` to download the same pinned revision again. All generated badges are standalone SVGs without external image/font references.\n\n` +
  `| Badge | Artwork source |\n| --- | --- |\n${attribution.join('\n')}\n`);

console.log(`Built ${technologies.length} self-contained badges in assets/tech/`);
