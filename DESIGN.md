# Design: beshurl GitHub profile

## Overview

Actual work leads. The owner explicitly requested real service screens from project READMEs and rejected the previous illustration covers. The native GitHub surface, restrained introduction, and full-width project screenshots form the profile.

## Colors

Body content inherits GitHub's selected light or dark theme. Screenshots retain their original pixels, colors, borders, and any existing presentation headings. Local technology badges retain the navy background (#1B2440) and light labels (#F4F6FF).

## Typography

Use native GitHub headings and body text for names, descriptions, technologies, responsibilities, and links. No rasterized or SVG display headline.

## Layout

Compact identity and introduction, then a showcase of two projects with actual screenshots, the categorized technology inventory, and concise text-only entries for other projects. Each screenshot uses the available README width and preserves its original aspect ratio. Additional screens sit inside native details elements.

## Shapes

No invented project covers or surrounding decorative frames. Native GitHub links, headings, disclosures and wrapping badges establish the layout.

## Components

- Project showcase: linked title, one-sentence description, full-width screenshot, concise role and stack.
- Screenshot: unmodified local PNG, descriptive alt text, a link to view its full-resolution original.
- Secondary screenshot: native disclosure, collapsed initially.
- Technology badge: self-contained local SVG, 32px tall, individually wrapping.
- Text-only project: project link, stack and one concise responsibility description.

## Do's and Don'ts

- Do use only existing actual application screens from the linked project README.
- Do preserve original image proportions and publish source links in .github/profile/SOURCES.md.
- Do omit imagery for projects without screenshots.
- Do check desktop and mobile rendering, disclosure expansion and image links.
- Don't fabricate a UI screenshot or substitute artwork, diagrams, textures, or logos as a project screen.
