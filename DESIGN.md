# Design: beshurl GitHub profile

## Overview

A compact, GitHub-native engineering portfolio centered on individual contributions. The user rejected a long, cluttered profile and requested the clarity of well-made developer profiles. Project summaries lead; detailed responsibility and troubleshooting records remain one disclosure away.

## Colors

Body content uses GitHub's selected light or dark theme. Links supply the accent. At the owner's request, technology names use the previous local navy icon badges with original logo colors, grouped by field rather than displayed as an undifferentiated wall.

## Typography

Native GitHub typography. A centered name, compact identity line and introduction establish the opening. Left-aligned section headings and concise bold service names create the reading hierarchy. Code spans are reserved for the detailed engineering records. Technology badges include readable labels and matching alt text; all other copy remains native text.

## Layout

Compact centered introduction and three local navigation links. A two-column, five-row project index makes service context and personal implementation visible together. Five independently expandable engineering records retain the complete roles, troubleshooting, and source links. Four labeled badge groups keep web, backend, native mobile, and 3D visible; the full badge inventory expands below them. Badges have a uniform 32px height and wrap naturally on phones. The project table retains two wrapping columns and no fixed width.

## Components

- Project index: repository link and platform in the first column, service and implementation summary in the second.
- Engineering record: a descriptive native details/summary control. Expanded content retains original linked project headings and personal-role bullets.
- Troubleshooting: separate bold symptom and readable explanation, followed by a direct evidence link.
- Technology inventory: four visible icon-badge groups plus a single full-inventory disclosure. Reuse assets/tech SVGs; retain secondary native networking/storage tools as supporting text.

## Do's and Don'ts

- Do keep the major-project summary and native mobile experience visible without expanding disclosures.
- Do distinguish code-level results from measurements or operational verification.
- Do test line wrapping and disclosure behavior on a phone.
- Don't insert screenshots, illustration covers, or long lists of minor projects.
- Don't invent impact percentages, outage stories, or responsibilities.
- Don't restore the removed library/service or AI-system supplemental disclosures.
