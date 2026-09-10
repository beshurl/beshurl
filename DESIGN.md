# Design: beshurl GitHub profile

## Overview

A text-first engineering portfolio centered on individual responsibilities and troubleshooting. The user explicitly removed the screenshot direction and requested major projects only.

## Colors

Body content uses GitHub's selected theme. Secondary technology badges retain their local navy surfaces and original logo colors inside the collapsed tools section.

## Typography

Native GitHub headings, body text, code spans for identifiers and tools, and brief bold labels for responsibilities and problem statements. No image-rendered text.

## Layout

Compact introduction, five major project sections (including a visible Android & iOS project), and a collapsed technology inventory. Each project has a short product description, a stack line, personal-role bullets, and two or three troubleshooting cases. Each case states the code-level cause and implemented correction and links to its source. Use normal-width prose, not a wide problem/solution table. Native mobile has its own technology category rather than a nested exploration footnote.

## Components

- Project title: native heading linked to the repository.
- Personal role: concise first-person implementation bullets.
- Troubleshooting: bold symptom heading, short cause and solution paragraph, direct commit or implementation record link.
- Technology inventory: collapsed disclosure containing the previously requested categorized tools.

## Do's and Don'ts

- Do keep the major-project narrative visible without expanding disclosures.
- Do distinguish code-level results from measurements or operational verification.
- Do test line wrapping and disclosure behavior on a phone.
- Don't insert screenshots, illustration covers, or long lists of minor projects.
- Don't invent impact percentages, outage stories, or responsibilities.
