---
version: alpha
name: Indigo Ledger
description: "Calm, precise and near-monochrome: cool greys, crisp white bordered cards, level Inter type, and one indigo-violet accent per view."
colors:
  primary: "#524EF0"
  primary-hover: "#3A34DF"
  accent: "#6662FF"
  primary-ink: "#2B26AB"
  edge-ink: "#141433"
  primary-disabled: "#AAA8FF"
  focus-halo: "#DDDCFF"
  primary-wash-hover: "#E8E7FF"
  primary-wash: "#F4F4FF"
  background: "#FFFFFF"
  whisper: "#FCFCFD"
  hover-mist: "#F9FAFB"
  canvas: "#F2F4F7"
  line: "#EAECF0"
  line-control: "#D0D5DD"
  ink-disabled: "#98A2B3"
  ink-subtle: "#667085"
  ink-muted: "#475467"
  ink-body: "#344054"
  ink: "#101828"
  inverse: "#14171D"
  inverse-line: "#282D37"
  on-inverse: "#F4F6FA"
  on-inverse-body: "#C6CDDB"
  success-wash: "#ECFDF3"
  success-ring: "#ABEFC6"
  success-ink: "#067647"
  warning-wash: "#FFFAEB"
  warning-ring: "#FEDF89"
  warning-ink: "#B54708"
  danger-wash: "#FEF3F2"
  danger-ring: "#FECDCA"
  danger-strong: "#D92D20"
  danger-ink: "#B42318"
  info-wash: "#EFF8FF"
  info-ring: "#B2DDFF"
  info-ink: "#175CD3"
typography:
  display:
    fontFamily: "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "36px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.4px"
  page-title:
    fontFamily: "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "30px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.4px"
  heading:
    fontFamily: "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.4px"
  card-title:
    fontFamily: "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.2px"
  lead:
    fontFamily: "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.35
  control:
    fontFamily: "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.05px"
  caption:
    fontFamily: "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.35
  overline:
    fontFamily: "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "0.4px"
rounded:
  none: "0"
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "12px"
  round: "9999px"
spacing:
  space-1: "4px"
  space-2: "8px"
  space-3: "12px"
  space-4: "16px"
  space-5: "20px"
  space-6: "24px"
  space-8: "32px"
  space-10: "40px"
  space-12: "48px"
  space-16: "64px"
  container: "1440px"
  gutter: "32px"
  gutter-mobile: "16px"
  card-padding: "20px"
  button-sm: "28px"
  button-md: "34px"
  button-lg: "40px"
  input: "36px"
---

# Indigo Ledger

Inter (Google Fonts, weights 400-700) is the only face, for headings and body alike; there is
no display font. Turn on `font-feature-settings: "cv11" 1, "ss01" 1, "calt" 1`, and use tabular
lining figures (`"tnum" 1, "lnum" 1`) for prices and stats. JetBrains Mono (Google Fonts) only
for codes, never for prose.

## Look and feel

1. **Near-monochrome.** Everything sits on the cool grey ramp (#FFFFFF, #F9FAFB, #F2F4F7, #EAECF0 ... #101828). Indigo-violet is the only saturated colour, used roughly once per view.
2. **The One Accent Rule.** Exactly one brand-filled button per section. `primary` #524EF0 fills anything with a white label; `accent` #6662FF is for rings, focus edges, icons, an active underline or a small highlight, never under white text.
3. **Two light surfaces.** White sections and cool-grey `canvas` #F2F4F7 bands alternate; white cards with a real 1px #EAECF0 border are the only boxes on a grey band.
4. **Level, quiet type.** Headings are 600 weight, never 700+ for big type; tracking -0.4px. Sentence case everywhere (buttons, headings, nav). Uppercase only for the 11px overline eyebrow.
5. **Flat depth.** A 1px border separates; a 1px contact shadow `0 1px 0 0 rgba(16,24,40,.06)` seats a card. Only floating things (menus, modals) cast a real shadow. Shadows mix from navy ink #101828, never pure black.
6. **Tactile controls.** Filled buttons carry "edge physics": a sheen from 63.53% downward, a 1px inset bottom edge, a 1px contact shadow, and a 0.5px drop on press.
7. **Rings, not borders, on controls.** Buttons and inputs draw inset box-shadow rings so nothing shifts by a pixel between states; cards keep a real border.
8. **Motion is short.** 80-260ms, `cubic-bezier(0.16,1,0.3,1)` for entrances, 120ms `cubic-bezier(0.4,0,0.2,1)` for hovers. Never hover with opacity; step the grey ramp instead.

## Components

**Buttons** - inline-flex, centred, 500 weight, -0.05px tracking, line-height 1, no border.
- Sizes: small 28px / 0 10px / 12px / radius 6px; default 34px / 0 14px / 13px / radius 8px; large 40px / 0 18px / 14px / radius 8px. On a website, header and hero CTAs use large (40px); on touch screens grow to 44-48px.
- Primary: fill #524EF0, text #FFFFFF, background `linear-gradient(180deg, transparent 63.53%, rgba(255,255,255,.16) 100%), #524EF0`, shadow `inset 0 -1px 0 0 rgba(20,20,51,.22), 0 1px 0 0 rgba(20,20,51,.10)`. Hover fill #3A34DF. Press: no sheen, `inset 0 1px 2px 0 rgba(20,20,51,.28)`, `translateY(0.5px)`. Disabled fill #AAA8FF.
- Secondary (the default): fill #FFFFFF, text #101828, shadow `inset 0 0 0 1px rgba(16,24,40,.14), inset 0 -1px 0 0 rgba(20,20,51,.16), 0 1px 0 0 rgba(20,20,51,.06)`; hover fill #F9FAFB, active #F2F4F7.
- Tinted (second brand-weighted action): fill #F4F4FF, text #2B26AB, ring #E8E7FF; hover fill #E8E7FF.
- Tertiary / ghost: transparent, text #344054; hover fill #F9FAFB, text #101828.
- Focus (all): `0 0 0 1px #FFFFFF, 0 0 0 3px #6662FF, 0 0 0 5px #DDDCFF` on `:focus-visible`.

**Cards** - bg #FFFFFF, 1px #EAECF0 border, radius 12px, padding 20px (24px on large marketing cards), shadow `0 1px 0 0 rgba(16,24,40,.06)`. Card title 16px/600. Only a card that is clickable as a whole lifts on hover: `0 2px 4px -2px rgba(16,24,40,.06), 0 4px 8px -2px rgba(16,24,40,.10)`. Pricing: the recommended plan gets a #6662FF 1.5px ring plus a tinted badge; its button is the section's single primary. Prices use tabular figures at 24-36px / 600.

**Inputs** (contact, newsletter) - bg #FFFFFF, height 36px (40px on mobile), padding 0 10px, radius 8px, 14px #101828 text, placeholder #667085, ring `inset 0 0 0 1px #D0D5DD`. Hover ring #98A2B3. Focus `inset 0 0 0 1.5px #6662FF, 0 0 0 3px #DDDCFF`. Invalid: ring #F04438, error text 12px #B42318 with an icon below. Disabled: fill #FCFCFD, text #98A2B3. Labels 13px/500 #344054 above the field, 6-8px gap; helper 12px #667085.

**Badges** - status pills: height 22px, radius 9999px, padding 0 9px, 12px/500, a tone wash with a 1px ring, no leading dot.
- Neutral #344054 on #F2F4F7; brand #2B26AB on #F4F4FF (ring #E8E7FF); success #067647 on #ECFDF3 (ring #ABEFC6); warning #B54708 on #FFFAEB (ring #FEDF89); danger #B42318 on #FEF3F2 (ring #FECDCA); info #175CD3 on #EFF8FF (ring #B2DDFF).
- Tags (topics, blog categories) are rectangles: 22px, radius 6px, padding 0 8px, #F2F4F7, 12px/500 #344054. A pill means status; a rectangle means content.
- Filter chips: 28px pills, white, ring `inset 0 0 0 1px #EAECF0`, 13px/500 #475467; active fill #F4F4FF, ring #DDDCFF, text #3A34DF. No counts in chips.

**Nav (header)** - white bar, 56-64px tall, 1px #EAECF0 bottom hairline, inner max width 1440px, 32px gutters. Logo at the start; links 14px/500 #344054, 36px tall, radius 8px, padding 0 10px, hover fill #F2F4F7. Active link: #3A34DF text at 600 with a 2px #6662FF underline; never a brand-filled pill or left bar. One primary "Join" button at the end, one secondary beside it at most. On phones, a ghost menu button opens a white panel (radius 10px, popover shadow `0 8px 24px 0 rgba(16,24,40,.12), 0 2px 6px 0 rgba(16,24,40,.06)`).

**Footer** - on #F2F4F7 with a 1px #EAECF0 top border (or, for one closing band, the dark ground #14171D with #282D37 hairlines, headings #F4F6FA, body #C6CDDB). Columns of links 14px #475467, hover #101828; group labels as the 11px/600 uppercase overline in #667085, 0.4px tracking. Bottom row 12px caption #667085.

**Eyebrow** - 11px/600 uppercase, 0.4px tracking, #475467 (or #524EF0 once per page).

## Layout & spacing

- One 4px scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64. Lay out with grid/flex `gap`, never margin stacking.
- Container max 1440px; gutters 32px desktop, 16px phone. Reading column (blog posts, about story) about 720px.
- "Density with air": tight inside groups, 16-24px between groups, 48-64px between sections (64px top/bottom for full bands).
- Hero: headline 36px/600 (30px on phones), lead 18px #475467 max ~36rem, then a button row (gap 8-12px). Image beside it on desktop, below on phones.
- Card grids: 3 columns desktop, 2 tablet, 1 phone, gap 24px; equal card heights per row. No horizontal scroll at 360px.

## Photography & imagery

- Real photographs only: real people learning, meeting, working, the real place. No cartoons, illustrations, 3D shapes, patterns, textures or grey placeholders (the source system rejects illustration outright).
- Images sit in a 12px-radius frame with a 1px #EAECF0 border, `object-fit: cover`, fixed aspect ratio (16:9 for blog/program covers, 4:3 or 1:1 for portraits).
- Cool, neutral, evenly lit grading that suits the grey ramp; avoid heavy colour filters or duotones. Never put text over a busy photo; place copy beside or below it.
- No gradient overlays, frosted glass or backdrop blur on images.

## Do / Don't

**Do**
- Do keep exactly one #524EF0 filled button per section; everything else is secondary, tinted or ghost.
- Do use #6662FF for focus rings, active underlines and icons, and #524EF0 wherever white text sits on brand.
- Do give filled buttons the sheen + inset edge + contact shadow, and inputs inset rings.
- Do write sentence-case, verb-first labels ("Join the community", "See programs").

**Don't**
- Don't use gradients as backgrounds, glassmorphism, patterns, textures or illustrations.
- Don't add extra brand colours or use colour as decoration; status colours are for status only.
- Don't give cards coloured left borders, gradient headers or icon medallions.
- Don't use heavy headline weights (700+), Title Case, or uppercase beyond the eyebrow.
- Don't hover with opacity or cast shadows from pure black; don't stack more than two floating layers.
- Don't put white text on #6662FF (too low contrast); use #524EF0.
