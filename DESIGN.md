# Design: beshurl GitHub profile

## Overview

A compact, GitHub-native engineering portfolio centered on individual contributions. The user rejected a long, cluttered profile and requested the clarity of well-made developer profiles. Project summaries lead; detailed responsibility and troubleshooting records remain one disclosure away.

## Colors

All visible content uses GitHub's selected light or dark theme. Links supply the accent. Technology names are native text, not a wall of colored badges. Existing SVG assets remain in version control but are not displayed.

## Typography

Native GitHub typography. A centered name, compact identity line and introduction establish the opening. Left-aligned section headings and concise bold service names create the reading hierarchy. Code spans are reserved for the detailed engineering records. No image-rendered text.

## Layout

Compact centered introduction and three local navigation links. A two-column, five-row project index makes service context and personal implementation visible together. Five independently expandable engineering records retain the complete roles, troubleshooting, and source links. A four-row primary stack summary keeps web, backend, native mobile, and 3D visible; the full technology inventory expands below it. Tables have two wrapping columns and no fixed width. No forced two-column card layout on phones.

## Components

- Project index: repository link and platform in the first column, service and implementation summary in the second.
- Engineering record: a descriptive native details/summary control. Expanded content retains original linked project headings and personal-role bullets.
- Troubleshooting: separate bold symptom and readable explanation, followed by a direct evidence link.
- Technology inventory: visible four-domain text summary plus a single full-inventory disclosure.

## Do's and Don'ts

- Do keep the major-project summary and native mobile experience visible without expanding disclosures.
- Do distinguish code-level results from measurements or operational verification.
- Do test line wrapping and disclosure behavior on a phone.
- Don't insert screenshots, illustration covers, or long lists of minor projects.
- Don't invent impact percentages, outage stories, or responsibilities.
- Don't restore the removed library/service or AI-system supplemental disclosures.
