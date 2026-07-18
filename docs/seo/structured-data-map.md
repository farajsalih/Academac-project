# Structured Data Map
**Phase:** 1 — Content Source of Truth
**Created:** 2026-07-17
**Governing skill:** educore-public-website
**Status:** Current state only. No changes implemented.

---

## Overview

All 8 public-facing HTML files contain a `<script type="application/ld+json">` block.
The following table documents the current state, identifies issues, and defines the target state for each page.

---

## Current State — All Pages

### 1. Homepage (`index.html`)

**Current schema type:** `EducationalOrganization`

**Current JSON-LD:**
```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "EDU CREATIVITY CENTER",
  "url": "https://educerativitycenter.com/",
  "description": "Arabic description text"
}
```

**Issues:**
- `url` uses the conflicting domain `educerativitycenter.com` (see C031 in claims register)
- `description` is in Arabic while the page is in English — language mismatch
- Missing: `telephone`, `address`, `logo`, `sameAs` (social profiles), `openingHoursSpecification`
- Name uses ALL-CAPS form — should match approved display name once confirmed

**Target state (after owner confirmations):**
```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Edu Creativity Center",
  "url": "https://CONFIRMED-DOMAIN/en/",
  "description": "English description of the center (verified facts only)",
  "telephone": "CONFIRMED-PHONE",
  "email": "info@educreativitycenter.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Amman",
    "addressRegion": "Jubaiha",
    "addressCountry": "JO",
    "streetAddress": "CONFIRMED-STREET-ADDRESS"
  },
  "logo": {
    "@type": "ImageObject",
    "url": "https://CONFIRMED-DOMAIN/images/logo.webp"
  },
  "sameAs": [
    "https://web.facebook.com/profile.php?id=CONFIRMED-ID",
    "CONFIRMED-INSTAGRAM-URL"
  ]
}
```

**Blockers:** Domain, phone, address, Instagram URL, and opening hours need owner confirmation.

---

### 2. About Page (`about.html`)

**Current schema type:** `EducationalOrganization`

**Issues:**
- `url` field points to `about.html` — should point to homepage
- Same domain conflict as above
- Missing all same properties as homepage schema
- People on page have unverified names — no `Person` schema added yet (correct — do not add until verified)

**Target state:**
- Same as homepage `EducationalOrganization` block plus:
  - `BreadcrumbList` schema for navigation breadcrumb
  - `Person` schemas only after staff names/photos are confirmed
  
**Blockers:** Domain, phone, address, Instagram, opening hours, real staff.

---

### 3. Courses Overview (`courses.html`)

**Current schema type:** `ItemList`

**Current JSON-LD (partial):**
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "url": "..." },
    { "@type": "ListItem", "position": 2, "url": "..." },
    { "@type": "ListItem", "position": 3, "url": "..." }
  ]
}
```

**Issues:**
- `ListItem` entries contain only `position` and `url` — missing `name` for each item
- URLs use the conflicting domain

**Target state:**
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "English Courses — Edu Creativity Center",
  "description": "English language courses offered at Edu Creativity Center in Amman, Jordan.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Kids English Adventure",
      "url": "https://CONFIRMED-DOMAIN/en/courses/kids-english-adventure/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "The Comprehensive Mastery",
      "url": "https://CONFIRMED-DOMAIN/en/courses/comprehensive-mastery/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "1-on-1 Personalized",
      "url": "https://CONFIRMED-DOMAIN/en/courses/1-on-1-personalized/"
    }
  ]
}
```

**Blockers:** Domain and course name confirmation.

---

### 4. Contact Page (`contact.html`)

**Current schema type:** `EducationalOrganization` + `ContactPoint`

**Current JSON-LD:**
```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "EDU CREATIVITY CENTER",
  "url": "https://educerativitycenter.com/contact.html",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+962-79-868-1269",
    "contactType": "customer service"
  }
}
```

**Issues:**
- `url` should point to homepage, not contact.html
- Phone number conflict (see C027–C028 in claims register)
- Missing: `address`, `openingHoursSpecification`
- Same domain conflict

**Target state:**
- Add `LocalBusiness` type alongside `EducationalOrganization`
- Add `address`, `geo`, `openingHoursSpecification`, `hasMap`
- Confirm telephone value

**Blockers:** Domain, phone, address, opening hours.

---

### 5. Registration Wizard (`login.html`)

**Current schema type:** `WebPage`

**Current JSON-LD:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Login",
  "description": "Arabic description"
}
```

**Issues:**
- Page should have `noindex` — it should not be indexed at all
- Schema type `WebPage` is not wrong but is also not useful for a noindex page
- `name` says "Login" — page is actually a registration wizard

**Target state:**
- Add `<meta name="robots" content="noindex, nofollow">` to remove from index
- Structured data is not needed once the page is noindexed, but may be simplified to a minimal `WebPage` or removed entirely

**Blockers:** None — this is a safe Phase 2 action.

---

### 6. Kids English Adventure (`kidsenglishadventure.html`)

**Current schema type:** `Course`

**Current JSON-LD:**
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Kids English Adventure",
  "description": "Arabic description",
  "provider": {
    "@type": "EducationalOrganization",
    "name": "EDU CREATIVITY CENTER",
    "sameAs": "https://educerativitycenter.com/"
  }
}
```

**Issues:**
- `description` in Arabic on English page
- Missing: `offers` (price), `educationalLevel`, `inLanguage`, `hasCourseInstance` (schedule), `coursePrerequisites`, `teaches`
- Domain conflict in `sameAs`

**Target state:**
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Kids English Adventure",
  "description": "English description (verified facts only)",
  "inLanguage": "en",
  "educationalLevel": "CONFIRMED-CEFR-LEVEL",
  "teaches": ["Speaking", "Listening", "Reading", "Writing"],
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "CONFIRMED-onsite-or-online",
    "courseSchedule": "CONFIRMED-SCHEDULE"
  },
  "offers": {
    "@type": "Offer",
    "price": "149",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://CONFIRMED-DOMAIN/register/"
  },
  "provider": {
    "@type": "EducationalOrganization",
    "name": "Edu Creativity Center",
    "sameAs": "https://CONFIRMED-DOMAIN/en/"
  }
}
```

**Blockers:** Domain, CEFR level, course mode, schedule, price confirmation.

---

### 7. Comprehensive Mastery (`thecomprehensivemastery1.html`)

Same structure as Kids page above.

**Issues:** Same missing fields. Plus: confusing '1' in filename affects the URL.

**Target state:** Same as Kids schema pattern, with confirmed course-specific data.

**Blockers:** Same as Kids page plus domain.

---

### 8. 1-on-1 Personalized (`1-on-1personalized.html`)

Same structure as Kids page above.

**Issues:** Same missing fields. Price is per session ($45) — must be reflected accurately.

**Target state:** Same as Kids schema pattern, with `"price": "45"` and `"description"` noting per-session pricing.

**Blockers:** Same as Kids page.

---

## Planned Pages — Structured Data Targets

| Page | Schema Type | Key Properties |
|---|---|---|
| Homepage (EN) | EducationalOrganization + LocalBusiness | name, url, telephone, address, logo, openingHoursSpecification, sameAs |
| Homepage (AR) | EducationalOrganization + LocalBusiness | Same in Arabic, lang="ar" |
| About (EN) | EducationalOrganization + Person (if confirmed) | Organization facts + real staff |
| Courses (EN) | ItemList | All 3 courses with names and confirmed URLs |
| Course detail (EN) | Course | name, description, educationalLevel, hasCourseInstance, offers, provider |
| Contact (EN) | LocalBusiness | address, telephone, geo, openingHoursSpecification, hasMap |
| FAQ (planned) | FAQPage | question + acceptedAnswer pairs |
| Placement Test (planned) | Event or WebPage | Description of process |

---

## Validation Requirements (Phase 2+)

Before any structured data is deployed:
1. Validate using Google's Rich Results Test
2. Confirm no schema property contradicts visible page content
3. Confirm no fake `AggregateRating`, `Review`, or `Person` is added
4. Confirm prices in `Offer` match displayed prices exactly
5. Confirm schema URL matches the page's canonical URL

---

## Critical Rules (from skill)

- Do not add `AggregateRating` or `Review` schema without real, verifiable reviews
- Do not add `Person` schema until staff are confirmed by the owner
- Do not add `Offer` schema with prices that have not been confirmed by the owner
- `description` in structured data must match the page language
- Structured data `url` must match the page's canonical URL exactly
