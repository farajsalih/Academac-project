# Visual Identity — Edu Creativity Center
**Phase:** 1 — Content Source of Truth
**Created:** 2026-07-17
**Governing skill:** educore-public-website
**Status:** VERIFIED values sourced from production HTML files

> This document records the approved visual identity tokens as found in the current production repository.
> No visual identity element may be changed without explicit owner approval.

---

## 1. Brand Colors

These values are defined in the Tailwind configuration blocks in every HTML file.
They are consistent across all 8 pages.

| Token | Hex Value | Usage | Classification |
|---|---|---|---|
| Brand Pink (Primary) | `#E11D48` | CTA buttons, active states, highlights, headings accent | VERIFIED |
| Brand Pink Hover | `#BE123C` | Hover state of pink buttons | VERIFIED |
| Brand Blue | `#0782c7` | Secondary accent, icon backgrounds, links | VERIFIED |
| Brand Dark | `#0F172A` | Page background (dark areas), footer background | VERIFIED |
| Brand Text | `#334155` | Body text on light backgrounds | VERIFIED |
| Brand Heading | `#020617` | Headings on light backgrounds | VERIFIED |
| White | `#FFFFFF` | Page background, card backgrounds, nav background | VERIFIED |

### Registration Wizard Additional Colors (login.html only)

| Token | Hex Value | Usage |
|---|---|---|
| Primary (same as Brand Pink) | `#E11D48` | Active step, submit button |
| Primary Hover | `#BE123C` | Button hover |
| Secondary Blue | `#0782c7` | Same as Brand Blue |
| Secondary Orange | `#f3a609` | Accent (defined but usage is minor) |
| Background Light | `#f8fcfd` | Page background (mesh gradient base) |
| Background Dark | `#0F172A` | Dark mode background |
| WhatsApp Green | `#25D366` | WhatsApp CTA button |
| WhatsApp Green Hover | `#128C7E` | WhatsApp CTA hover |

---

## 2. Typography

| Family | Weights Used | Role | Source |
|---|---|---|---|
| Plus Jakarta Sans | 300, 400, 500, 600, 700, 800 | Primary typeface (all public pages) | Google Fonts |
| Inter | 300, 400, 500, 600 | Secondary / body fallback | Google Fonts |
| Tajawal | 400, 500, 700, 800 | Arabic typeface (login.html only) | Google Fonts |

> **Gap identified:** Arabic-language public pages (not yet built) will need Tajawal or another approved Arabic typeface loaded. Currently only `login.html` loads Tajawal.

### Tailwind Font Configuration (all public pages)

```
fontFamily: {
  sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif']
}
```

### Login page only:

```
fontFamily: {
  display: ['Inter', 'Tajawal', 'sans-serif'],
  arabic: ['Tajawal', 'sans-serif']
}
```

---

## 3. Logo

| Property | Value | Classification |
|---|---|---|
| File | `images/logo.webp` | VERIFIED |
| Format | WebP | VERIFIED |
| File size | 14,076 bytes | VERIFIED |
| Dimensions | Not measured — appears square or near-square | NEEDS_CONFIRMATION |
| Alt text used across pages | "EDU CREATIVITY CENTER Logo" | VERIFIED |
| Background | Used with `mix-blend-multiply` on white backgrounds in nav | VERIFIED |
| Favicon format | `images/logo.webp` (public pages) / `logo.svg?v=1` (login.html) | CONFLICTING |

> **Conflict:** `login.html` references `logo.svg?v=1` as its favicon. No `logo.svg` file exists in the project. The other 7 pages use `images/logo.webp` correctly. The `login.html` favicon reference is broken.

### Logo Usage Rules (from current implementation)

- Header nav: `h-10 w-auto rounded-lg object-contain mix-blend-multiply`
- Footer: `h-8 w-auto rounded bg-white p-0.5 object-contain`
- Login sidebar: `w-8 h-8 object-contain` inside a `w-12 h-12 bg-white rounded-xl`
- Do not distort proportions.
- Do not remove the rounding applied in context.
- Do not change the blend mode without testing on white and dark backgrounds.

---

## 4. Layout and Spacing

### Max Content Width

`max-w-7xl mx-auto` — applied to all sections across all pages. Consistent.

### Horizontal Padding Scale

| Breakpoint | Padding |
|---|---|
| Base (mobile) | `px-6` |
| md | `px-12` |
| lg | `px-20` |

### Navigation Height

Fixed top nav: `py-4` padding. `bg-white/80 backdrop-blur-md border-b border-gray-100`

### Vertical Section Spacing

Most sections: `py-24` to `py-32`

---

## 5. UI Components (Current Implementation)

### Navigation Bar

- Fixed, `z-50`
- White with 80% opacity + backdrop blur
- Left: Logo + name
- Center/right: Nav links (hidden on mobile — `hidden md:flex`)
- Far right: "Join Now" pink CTA button
- **Gap:** No mobile hamburger menu exists. Mobile users see only the logo and CTA button.

### CTA Buttons

| Style | Classes |
|---|---|
| Primary (pink) | `bg-brand-pink text-white rounded-full shadow-lg hover:bg-brand-pinkHover hover:scale-[1.02]` |
| Nav links (default) | `text-sm font-bold text-brand-text bg-white px-6 py-2.5 rounded-full shadow-sm border` |
| Nav link (active page) | Same but with `border-brand-pink/30 text-brand-pink` |

### Cards

- `rounded-3xl` border radius (most cards)
- `shadow-lg border border-gray-100`
- Hover: `group-hover` scale or shadow transitions

### Footer

- Background: `#020617` (brand-dark) with animated bubble effect
- Text: white on dark
- Structure: logo + tagline / Quick Links / Legal / Socials
- All pages share identical footer HTML (copy-pasted — a maintenance risk)

---

## 6. Background and Decorative Elements

| Element | Where Used | Notes |
|---|---|---|
| `background.html` Three.js animation | All public pages via iframe | Fixed, pointer-events: none, z-index 0 |
| Three.js 3D character | `login.html` | Loaded via module script; requires `base.glb` model file |
| Radial gradient mesh | `login.html` body | Used as page background in both light and dark mode |
| Animated bubble footer | All pages | Injected via inline JS, SVG gooey filter |
| Grid background | `index.html` only | CSS background-image grid lines in hero |

---

## 7. Social Icon Style

The footer uses a custom 4-card social icon layout:
- 4 cards: Instagram, Facebook, WhatsApp, Email/Gmail
- Asymmetric border-radius per card (each corner uniquely rounded)
- `width: 90px; height: 90px` per card
- On hover: background turns to brand color, icon turns white

This style is consistent across all pages (identical HTML copy-pasted).

---

## 8. Animation and Motion

| Animation | Where | Notes |
|---|---|---|
| `.reveal` scroll-in | All pages | `opacity: 0 → 1`, `translateY(30px → 0)`, `IntersectionObserver` |
| Typewriter effect | `index.html` hero | JS-rendered; SEO risk for H1 text |
| Testimonial auto-slide | `index.html` | Every 6 seconds |
| Timeline scroll interaction | `index.html` | Step-by-step scroll-driven animation |
| Float animation | Course detail pages | Hero decorative elements |
| Confetti + success sound | `login.html` | On successful registration |
| Shake error | `login.html` | On form validation failure |
| Speech bubble | `login.html` | 3D character interaction every 10 seconds |
| Bubble footer | All pages | CSS keyframe animation |

---

## 9. Image Assets

| File | Location | Size | Used For | Classification |
|---|---|---|---|---|
| `logo.webp` | `images/` | 14 KB | Logo, favicon, footer | VERIFIED |
| `PicHome.webp` | `images/` | 434 KB | Index.html hero image | VERIFIED (file exists); Alt text "PicHome" is REJECTED (too generic) |
| Leadership photos | `lh3.googleusercontent.com/aida-public/` | External | About page — 4 leaders | NEEDS_CONFIRMATION (AI-generated photos) |
| Partner logos | `lh3.googleusercontent.com/aida-public/` | External | Courses page | NEEDS_CONFIRMATION (AI-generated) |
| Classroom photo | External Google URL | External | About page "Our Story" | NEEDS_CONFIRMATION |
| `base.glb` | Root (expected) | Unknown | 3D character in login.html | NEEDS_CONFIRMATION — file not confirmed present |

---

## 10. RTL Considerations

The public website is currently English-only with LTR layout.

`login.html` correctly implements `dir="rtl" lang="ar"` for its Arabic content.

When Arabic public pages are built:
- The `dir="rtl"` attribute must be set on `<html>`.
- The `lang="ar"` attribute must be set on `<html>`.
- Tailwind RTL utility classes or CSS logical properties should be used.
- The background iframe, nav, footer, and animations must all be tested in RTL mode.
- Arabic typography (Tajawal) must be loaded on Arabic pages.

---

## 11. What Must Not Change Without Owner Approval

- Brand color hex values
- Logo file or proportions
- Typography families (Plus Jakarta Sans, Inter, Tajawal)
- The background animation (background.html)
- Footer layout and bubble animation style
- Tailwind CDN usage (CDN vs local install change requires full regression testing)
