---
name: beshurl — Build across the stack
description: A cobalt portfolio with a modular three-layer signature and project-specific artwork.
colors:
  primary: "#244DE8"
  navy: "#1B2440"
  peach: "#F2BA9B"
  lilac: "#E8EAFE"
  mint: "#DFF4ED"
  paper: "#F4F6FF"
typography:
  display:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontWeight: 700
  body:
    fontFamily: "Arial, Apple SD Gothic Neo, Malgun Gothic, sans-serif"
    fontWeight: 400
rounded:
  panel: "16px"
  badge: "7px"
spacing:
  small: "8px"
  medium: "24px"
  large: "40px"
---

## Overview

**Creative North Star: "Build across the stack."**

A personal engineering portfolio within GitHub's native reading surface. Cobalt carries the first viewport; a peach accent echoes the owner's existing avatar. Offset layers connect the web, backend, and 3D disciplines. Project art is authored for the actual subjects: stock analysis, clothing, books, and collaboration.

The user asked to replace the basic appearance with a richer profile referencing accomplished README compositions. The layout borrows category conventions—project links, categorized tools, expandable detail—while its graphic language is original.

## Colors

Cobalt and paper create the signature header. Peach, lilac, and mint distinguish project covers. Navy carries labels and badge surfaces. Body content inherits GitHub's selected theme.

## Typography

Large, bold sans-serif display type is used inside SVGs for portable rendering. Korean body text has explicit system fallbacks. The body remains native GitHub text; image alt text preserves identity and project descriptions when images are unavailable.

## Layout

The hero has separate desktop and mobile compositions. Project covers are 400px wide inside a wrapping paragraph, producing two columns in the 846px desktop README and one column on a phone. Badge images wrap individually. Long personal-contribution and project-system notes use native disclosures. Avoid wide tables with long prose.

## Elevation & Depth

Depth comes from offset solid layers and isometric book geometry. No shadow or blur is needed. The profile is static, with a single subtle header signal animation disabled by prefers-reduced-motion.

## Shapes

Header and covers have 16px corners. Modular rectangles, cut corners, and a three-layer stack define the authored artwork. Badge corners are 7px.

## Components

- Hero: 960×380 desktop; 600×540 mobile, selected with picture media.
- Project covers: 480×300 SVGs, native links, full descriptions in alt text and text disclosures.
- Technology badge: self-contained local SVG with a logo or readable abbreviation, 32px high.
- Closing strip: compact repository link with an original layered mark.

## Do's and Don'ts

- Do keep names, descriptions, and contributions traceable to public project evidence.
- Do keep the first viewport focused on the owner's identity and work.
- Do test GitHub's actual rendering at desktop and phone widths.
- Do preserve readable native prose alongside decorative assets.
- Don't present team-wide ML or infrastructure tools as individual mastery.
- Don't add unsupported experience bars, ratings, or contribution statistics.
