# Design Brief

## Direction

Global Prestige — a refined corporate consultancy aesthetic for Best EXIM Services, evoking Deloitte, EY, PwC, and McKinsey with a light-theme-first system, deep charcoal separators, and a restrained gold accent.

## Tone

Confident, understated, and authoritative — premium corporate minimalism where whitespace, thin borders, and typographic clarity signal trust and expertise.

## Differentiation

A muted gold accent (never loud) paired with deep charcoal-navy surfaces and large modern display type creates a distinctive "quiet luxury" that reads as established global advisory rather than generic SaaS.

## Color Palette

| Token      | OKLCH        | Role                          |
| ---------- | ------------ | ----------------------------- |
| background | 0.985 0.004 240 | soft neutral light (#F8FAFC) |
| foreground | 0.22 0.02 260 | charcoal text                 |
| card       | 1 0 0        | white surfaces                |
| primary    | 0.24 0.025 260 | deep charcoal-navy (#0F172A) |
| accent     | 0.62 0.12 80 | gold (#C89B3C) — sparing      |
| muted      | 0.955 0.006 240 | soft section background       |
| border     | 0.9 0.008 240 | thin hairline borders         |

## Typography

- Display: Plus Jakarta Sans — headings, hero, section titles
- Body: DM Sans — paragraphs, UI labels, body copy
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-5xl font-bold tracking-tight`, label `text-sm font-semibold tracking-widest uppercase`, body `text-lg leading-relaxed`

## Elevation & Depth

Soft, layered shadows (`shadow-subtle`, `shadow-elevated`, `shadow-soft`) on cards and elevated surfaces; hairline borders and glass blur only on select cards; depth via alternating light and dark charcoal zones rather than gradients.

## Structural Zones

| Zone    | Background            | Border   | Notes                          |
| ------- | --------------------- | -------- | ------------------------------ |
| Header  | transparent → glass   | border-b | white blur after scroll        |
| Content | white / #F8FAFC       | —        | alternate every section        |
| Dark sep| #0F172A charcoal      | —        | stats, CTA, process, industries|
| Footer  | #0F172A charcoal      | border-t | dark multi-column              |

## Spacing & Rhythm

Generous section padding `py-24 md:py-32`, max content width 1320px, consistent 12-column grid, `gap-6/8` between cards, comfortable `leading-relaxed` for long paragraphs.

## Component Patterns

- Buttons: `rounded-xl` pill-ish, dark primary with gold hover ring; gold accent reserved for primary CTAs
- Cards: `rounded-2xl` (18-24px), white `bg-card`, hairline border, `shadow-elevated` on hover
- Badges: `rounded-full` soft muted with gold text, uppercase tracking-widest
- Glass: `glass` / `glass-dark` blur panels on select cards and nav

## Motion

- Entrance: `fade-up` 0.7s cubic-bezier(0.22,1,0.36,1) on scroll, staggered
- Hover: gentle elevation + thin gold ring, 0.3s `transition-smooth`
- Decorative: `float` 7s for 3D objects, `pulse-soft` for particles, `shimmer` for gold accents — all subtle, no bounce

## Constraints

- Light-theme-first; dark charcoal only for separator sections
- Gold accent used sparingly — highlights, key numbers, CTA emphasis only
- Subtle elegant animations only — no bouncing, fast movement, or rotating text
- Premium 3D abstract visuals only, no cartoon illustrations
- Static HTML/CSS/JS, no backend; desktop-first, fully responsive

## Signature Detail

A restrained gold hairline accent — gold key-number counters, gold CTA emphasis, and gold geometric accents on dark charcoal separators — that reads as established global advisory rather than generic corporate.
