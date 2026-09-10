import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// THESIS: A developer who connects web, APIs, and 3D experiences.
// OWN-WORLD: Cobalt, avatar-derived peach, offset solid layers, bold portable type.
// STORY: Meet beshurl, inspect four real projects, then explore the full toolbox.
// FIRST VIEWPORT: Identity above a large left headline and a right layered mark.
// FORM: GitHub-native portfolio; wrapping linked covers and disclosure details.

const root = fileURLToPath(new URL('../assets/', import.meta.url));
await mkdir(root, { recursive: true });
const esc = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const text = (x, y, value, size = 20, fill = '#1B2440', weight = 400, more = '') =>
  `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" font-weight="${weight}" ${more}>${esc(value)}</text>`;
const svg = (w, h, title, body) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="title"><title id="title">${esc(title)}</title><g font-family="Arial, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif">${body}</g></svg>\n`;
const stack = (x, y, scale = 1) => `<g transform="translate(${x} ${y}) scale(${scale})">
  <path d="M0 142 128 72 256 142 128 216Z" fill="#162E8C"/>
  <path d="M0 142 128 216 128 236 0 162Z" fill="#142976"/>
  <path d="M128 216 256 142 256 162 128 236Z" fill="#345FEF"/>
  <path d="M0 86 128 16 256 86 128 160Z" fill="#BFCDFE"/>
  <path d="M0 86 128 160 128 180 0 106Z" fill="#829CF8"/>
  <path d="M128 160 256 86 256 106 128 180Z" fill="#E8EAFE"/>
  <path d="M36 22 128 -28 220 22 128 74Z" fill="#F5CBB6"/>
  <path d="M36 22 128 74 128 94 36 42Z" fill="#D89776"/>
  <path d="M128 74 220 22 220 42 128 94Z" fill="#F2BA9B"/>
  <path d="M90 20 118 4 155 25 128 42Z" fill="#244DE8"/>
  <path d="M90 20 128 42 128 57 90 35Z" fill="#1B3ABC"/>
  <path d="M128 42 155 25 155 40 128 57Z" fill="#5478F4"/>
  <circle class="signal" cx="128" cy="-40" r="5" fill="#F4F6FF"/>
</g>`;
const motion = `<style>.signal{animation:signal 4s ease-in-out infinite}@keyframes signal{0%,100%{opacity:.45}50%{opacity:1}}@media(prefers-reduced-motion:reduce){.signal{animation:none}}</style>`;

await writeFile(`${root}/hero.svg`, svg(960,380,'beshurl · 정준용 — Full-stack developer. Build across the stack.',`
  ${motion}<rect width="960" height="380" rx="16" fill="#244DE8"/>
  <path d="M610 0H944Q960 0 960 16V380H610Z" fill="#2045CD"/>
  ${text(42,48,'beshurl',23,'#F4F6FF',700)}
  ${text(155,47,'/ Jeong Jun Yong · 정준용',17,'#D4DFFE')}
  ${text(42,140,'Build across',65,'#F4F6FF',700,'letter-spacing="-2"')}
  ${text(42,211,'the stack.',65,'#F4F6FF',700,'letter-spacing="-2"')}
  ${text(44,257,'화면에서 데이터까지, 하나의 서비스로.',23,'#E3EAFF')}
  <path d="M44 296H560" stroke="#829BF3" stroke-width="1"/>
  ${text(44,333,'WEB',15,'#F4F6FF',700)}${text(116,333,'/ BACKEND',15,'#F4F6FF',700)}${text(247,333,'/ 3D EXPERIENCE',15,'#F4F6FF',700)}
  ${stack(654,94,.98)}${text(782,340,'FULL-STACK DEVELOPER',13,'#D4DFFE',700,'text-anchor="middle"')}
`));
await writeFile(`${root}/hero-mobile.svg`, svg(600,540,'beshurl · 정준용 — Full-stack developer. Build across the stack.',`
  ${motion}<rect width="600" height="540" rx="16" fill="#244DE8"/>
  ${text(34,48,'beshurl',26,'#F4F6FF',700)}${text(153,48,'/ 정준용',21,'#D4DFFE')}
  ${text(34,129,'Build across',67,'#F4F6FF',700,'letter-spacing="-2"')}
  ${text(34,201,'the stack.',67,'#F4F6FF',700,'letter-spacing="-2"')}
  ${text(36,244,'화면에서 데이터까지, 하나의 서비스로.',23,'#E3EAFF')}
  ${stack(340,317,.73)}
  ${text(36,360,'WEB',20,'#F4F6FF',700)}${text(36,394,'BACKEND',20,'#F4F6FF',700)}${text(36,428,'3D EXPERIENCE',20,'#F4F6FF',700)}
  ${text(36,500,'FULL-STACK DEVELOPER',15,'#D4DFFE',700)}
`));

const card = (name, title, category, lines, bg, art, caption) => svg(480,300,`${title} — ${lines.join(' ')}`,`
  <rect x="1" y="1" width="478" height="298" rx="16" fill="${bg}"/>
  ${text(28,38,category,13,'#4B5271',700)}
  ${art}
  ${text(28,177,title,35,'#1B2440',700,'letter-spacing="-1"')}
  ${text(29,211,lines[0],18,'#39435E')}${text(29,237,lines[1],18,'#39435E')}
  ${text(29,278,caption,13,'#4B5271',700)}
  <path d="M429 266H449M440 257 449 266 440 275" fill="none" stroke="#1B2440" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
`);
const chart = `<g transform="translate(29 59)">
  <path d="M0 66H213M0 33H213M0 0H213" stroke="#C7CDF0"/>
  <g stroke="#244DE8" stroke-width="2"><path d="M20 20V61M57 11V53M94 24V70M131 2V45M168 -4V32M205 -7V23"/></g>
  <g fill="#244DE8"><rect x="12" y="31" width="16" height="21" rx="2"/><rect x="49" y="18" width="16" height="25" rx="2"/><rect x="123" y="9" width="16" height="23" rx="2"/><rect x="160" y="1" width="16" height="19" rx="2"/><rect x="197" y="-1" width="16" height="13" rx="2"/></g>
  <rect x="86" y="34" width="16" height="23" rx="2" fill="#C77F70"/>
  <path d="M253 31 292 9 331 31 292 54Z" fill="#244DE8"/><path d="M253 31 292 54V71L253 48Z" fill="#1835A6"/><path d="M292 54 331 31V48L292 71Z" fill="#8A9EEF"/>
  <path d="M331 5 357 -10 383 5 357 20Z" fill="#8A9EEF"/><path d="M331 5 357 20V32L331 17Z" fill="#5D79DF"/><path d="M357 20 383 5V17L357 32Z" fill="#BFCDFE"/>
</g>`;
const clothing = `<g transform="translate(30 57)">
  <circle cx="350" cy="31" r="49" fill="#F0C49D"/>
  <path d="M295 36H405M350 -19V91" stroke="#D5A77F"/>
  <circle cx="350" cy="31" r="29" fill="none" stroke="#AD714C" stroke-width="1.5"/>
  <path d="M23 4 64 -8 78 8 93 -8 136 4 155 41 126 55 113 31 113 82H42V31L27 55 1 41Z" fill="#244DE8"/>
  <path d="M64 -8Q78 27 93 -8" fill="none" stroke="#BFCDFE" stroke-width="4"/>
  <path d="M194 10H249V37H224V63H194Z" fill="#C67C57"/>
  <path d="M194 78H264" stroke="#AD714C" stroke-width="2"/>
</g>`;
const shelf = `<g transform="translate(32 51)">
  <path d="M0 50 110 0 245 47 135 98Z" fill="#C59C7E"/><path d="M0 50 135 98V110L0 63Z" fill="#8B6247"/><path d="M135 98 245 47V60L135 110Z" fill="#B18261"/>
  <path d="M35 38V-4L56 -14V28Z" fill="#1736A7"/><path d="M56 -14 84 -4V38L56 28Z" fill="#244DE8"/><path d="M35 -4 56 -14 84 -4 63 6Z" fill="#9CACEE"/>
  <path d="M91 57V-5L113 -15V47Z" fill="#6C4E9A"/><path d="M113 -15 146 -3V59L113 47Z" fill="#A58CD2"/><path d="M91 -5 113 -15 146 -3 124 7Z" fill="#DBCBF4"/>
  <path d="M154 58V17L176 7V48Z" fill="#567F69"/><path d="M176 7 202 17V58L176 48Z" fill="#80AE97"/><path d="M154 17 176 7 202 17 180 27Z" fill="#B7DAC7"/>
  <path d="M304 19 336 1 368 19 336 38Z" fill="#244DE8"/><path d="M304 19 336 38V75L304 56Z" fill="#1936A6"/><path d="M336 38 368 19V56L336 75Z" fill="#7F98EE"/>
</g>`;
const people = `<g transform="translate(30 60)">
  <path d="M22 27H167Q185 27 185 45V62H340" stroke="#72AB9A" stroke-width="3" fill="none"/>
  <path d="M167 27V-1H267" stroke="#72AB9A" stroke-width="3" fill="none"/>
  <rect x="0" y="-6" width="103" height="74" rx="10" fill="#244DE8"/>
  <circle cx="29" cy="18" r="10" fill="#C6D3FE"/><path d="M13 48Q29 25 45 48" fill="#C6D3FE"/>
  <path d="M59 19H87M59 31H79M59 43H86" stroke="#A4B9FD" stroke-width="4"/>
  <rect x="249" y="-20" width="103" height="48" rx="8" fill="#A3CBBE"/><path d="M264 -2H331M264 10H310" stroke="#3B7562" stroke-width="4"/>
  <rect x="300" y="44" width="100" height="48" rx="8" fill="#A3CBBE"/><circle cx="321" cy="68" r="9" fill="#3B7562"/><path d="M340 62H382M340 74H369" stroke="#3B7562" stroke-width="4"/>
  <circle cx="167" cy="27" r="7" fill="#244DE8"/>
</g>`;
const projects = [
 ['sallaemallae','살래말래','AI · FINANCIAL DATA',['시세와 뉴스, AI 분석을 한 화면에.','주식 분석을 위한 통합 서비스.'],'#E8EAFE',chart,'NEXT.JS  /  SPRING  /  REDIS'],
 ['bonetobe','Bone To Be','AI · STYLE',['체형을 이해하고, 스타일을 찾다.','골격 인식 기반 의류 추천 서비스.'],'#F8E4D1',clothing,'REACT  /  TYPESCRIPT  /  MOTION'],
 ['dotshelf','DotShelf','3D · READING',['책과 취향이 쌓이는 나만의 공간.','Unity로 만드는 3D 책장 서비스.'],'#F0E6DE',shelf,'UNITY  /  C#  /  SPRING'],
 ['sequence','Sequence','WEB · COLLABORATION',['만들고 싶은 사람들을 연결하다.','대학생 개발자·디자이너 협업 플랫폼.'],'#DFF4ED',people,'REACT  /  TYPESCRIPT  /  RECOIL'],
];
for (const [name,...args] of projects) await writeFile(`${root}/project-${name}.svg`,card(name,...args));
await writeFile(`${root}/footer.svg`,svg(960,100,'Explore more work — github.com/beshurl',`
  <rect width="960" height="100" rx="12" fill="#244DE8"/>
  ${text(28,42,'More ideas. More things to build.',26,'#F4F6FF',700)}
  ${text(29,72,'github.com/beshurl',17,'#D4DFFE')}
  <path d="M869 50H919M899 30 919 50 899 70" stroke="#F2BA9B" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
`));
console.log(`Generated ${projects.length + 3} profile assets.`);
