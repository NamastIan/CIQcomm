---
version: alpha
name: Seven Levels Editorial
description: "Calm, editorial and high contrast: white paper, large light serif headlines in Deep Navy, Near Black text, Orange only as an accent, level colours only where a level appears."
colors:
  near-black: "#252727"   # body text, navigation, dark sections, footer
  deep-navy: "#1150AB"    # headlines, primary buttons, links
  orange: "#F47324"       # accent only: rules, markers, icons, borders, overlines on dark
  purple: "#935EB2"       # secondary accent, sparingly
  white: "#FFFFFF"        # page and section backgrounds, text on dark
  muted: "#555757"        # Near Black 78% over white, secondary text (7.27:1)
  input-line: "#878888"   # Near Black 55% over white, input outlines (3.55:1)
  tint-ink: "#F6F6F6"     # Near Black 4%: tonal bands, panels
  tint-navy: "#F1F5FA"    # Deep Navy 6%: chips, hovers, current item
  tint-navy-strong: "#ECF1F8" # Deep Navy 8%: legal fields still to confirm
  on-navy-muted: "#DBE5F2" # white 85% over Deep Navy (5.98:1)
  on-dark-muted: "#D0D1D1" # white 78% over Near Black (9.64:1)
  border: "#E5E7EB"
  error: "#B42318"
levels:
  space: "#E60012"
  emotions: "#F47324"
  identity: "#B99C0A"
  relationships: "#419A5C"
  expression: "#51A8E7"
  intuition: "#6075AB"
  spirituality: "#935EB2"
typography:
  serif: "Newsreader (Google Fonts), 400; headlines and expressive paragraphs"
  sans: "Google Sans Flex (Google Fonts), 400-600; interface text"
  display: "68px / 1.04 serif (40px at 390px wide)"
  headline-lg: "50px / 1.06 serif (32px on phones)"
  headline-md: "37px / 1.19 serif (28px on phones)"
  headline-sm: "27px / 1.19 serif (22px on phones)"
  body-lg: "20px / 1.5 serif (18px on phones)"
  body-md: "16px / 1.5 sans"
  body-sm: "13.5px / 20px sans"
  label: "15.75px / 500 sans (buttons)"
  nav: "14px sans"
  overline: "12px / 500 sans, 0.08em tracking, uppercase"
  caption: "12px sans"
rounded: {sm: "4px", md: "8px", lg: "11px", full: "9999px"}
spacing: {xs: "6px", sm: "14px", md: "28px", lg: "46px", xl: "72px"}
---

# Seven Levels Editorial

The public website's design system. Implemented in `src/styles/site.css`, every rule scoped
to `.ciq` (the class `Base.astro` puts on `<body>`). The Community Guidelines page and the
portal do not carry the class and keep the earlier look (`global.css`); leave them so.

Adapted from an editorial reference system (warm serif, image-led, flat), re-keyed to the
brand colours above. The brand rules win over the reference wherever they differ.

## Colour
- White pages; tonal bands in `tint-ink`; one Deep Navy closing band per page (`CtaBand`,
  `.band-feature`); the footer in Near Black.
- Headlines Deep Navy, text Near Black, secondary text `muted`.
- Orange is never a button fill and never text on white (2.87:1). It is the rule before a
  page eyebrow, the current-page underline, check icons, step rings, featured borders and the
  footer's overline labels on Near Black (5.24:1).
- Level colours appear only in level contexts (mandala, level cards, level sections, level
  legends, swatches) and only as markers. Level names stay Near Black or Deep Navy text:
  Emotions, Identity and Expression fail 3:1 on white. Swatches carry a thin Near Black ring.
  Never recolour the mandala.
- No teal, gold, cream, pastels or green (except Relationships).

## Type
Newsreader 400 for every headline, ledes, definitions, questions, quotes and blog prose;
Google Sans Flex for interface text, body copy, labels, nav and buttons. Sentence case
everywhere; uppercase only for the 12px overline.

## Components
- **Primary button**: Deep Navy fill, white 15.75px/500 label, radius 11px, min-height 44px
  (touch target; the reference's 41px is too small), hover Near Black. On Deep Navy it
  inverts: white fill, Deep Navy label.
- **Secondary**: transparent, 1px Near Black outline, radius 4px. **Link**: Deep Navy,
  underlined. Links in running text are always underlined.
- **Cards**: white, 1px `border`, radius 8px, 16px padding, no shadow. Linked cards turn the
  border Deep Navy and underline the title on hover.
- **Inputs**: white, 1px `input-line`, radius 8px, 12px 14px padding, 16px text.
- **Chips/badges**: fully rounded, `tint-navy`, Near Black 13.5px. "Free" uses an Orange
  outline; samples a muted outline.
- **Focus**: 2px Deep Navy outline, 3px offset (white on dark grounds).
- Flat: borders and tonal bands, never shadows, gradients or glass.

## Layout
Container 1240px, gutters 46 / 28 / 20px. Sections 72px apart (46px on phones). Heroes in two
columns (text, then the photo or the mandala), stacking below 860px. Reading column 760px.
On phones the hero actions stack full width.

## Imagery
Existing photographs stay as they are. Empty slots stay as marked slots (`ImageSlot`, Preview
only). Never add stock photography, generated people or decorative imagery; a layout that
needs a visual uses the mandala or text.

## Motion and tone
Calm and unhurried: 200-400ms colour and opacity transitions only; none under
`prefers-reduced-motion`. No urgency styling, countdowns, "limited" or "sold out" treatments.
