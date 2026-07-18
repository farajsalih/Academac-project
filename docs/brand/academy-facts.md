# Academy Facts — Source of Truth
**Project:** Edu Creativity Center — Public Website
**Phase:** 1 — Content Source of Truth
**Created:** 2026-07-17
**Governing skill:** educore-public-website
**Status:** Awaiting owner confirmation on NEEDS_CONFIRMATION items

> This document is the single source of truth for all public identity values.
> No web page, script, or document may contradict a VERIFIED value here.
> All NEEDS_CONFIRMATION values must be resolved before the value is published on any public page.

---

## 1. Organization Identity

| Field | Current Value | Classification | Evidence | Recommended Action |
|---|---|---|---|---|
| Official English name | Edu Creativity Center | VERIFIED | Confirmed in project brief and login.html sidebar | Use this exact form in all public content |
| Display name (nav/footer) | EDU CREATIVITY CENTER | NEEDS_CONFIRMATION | All-caps used in all page headers and footers. Differs from brief form. | Owner to confirm whether ALL-CAPS is the approved display style |
| Arabic official name | Not yet established | NEEDS_CONFIRMATION | No Arabic name found in any file | Owner to provide the official Arabic name of the center |
| Branch count | Online only | VERIFIED | Owner confirmation | Do not describe the academy as having a physical branch |
| Service type | English-language education | VERIFIED | Confirmed in project brief and all course pages | |
| Founding year | Unknown | NEEDS_CONFIRMATION | Not found in any repository file | Owner to confirm for About page and structured data |
| Legal registration | Unknown | NEEDS_CONFIRMATION | Not found in any file | Needed for footer and LocalBusiness structured data |

---

## 2. Domain Names

| Value | Source Files | Classification | Conflict Detail | Recommended Action |
|---|---|---|---|---|
| `educerativitycenter.com` | ALL HTML canonical tags and OG URLs (8 pages) | VERIFIED | Confirmed by owner | Do not "correct" the spelling |
| `educreativitycenter.com` | Email address `info@educreativitycenter.com` | REJECTED | Conflicts with verified domain | Update email address to match verified domain when confirmed |

> **CONFIRMED:** The official domain is `educerativitycenter.com`. Do not correct the spelling.

---

## 3. Phone Numbers

| Value | Display Format | Appears Where | Classification | Conflict Detail |
|---|---|---|---|---|
| `0782610108` | Local Jordan format | Project brief only | VERIFIED | Official phone number |
| `+962782610108` | International format | login.html success/duplicate pages | VERIFIED | Official international format |
| `962798681269` | International without + | All page footer WhatsApp links, contact.html | REJECTED | Conflicts with verified number |

> **CONFIRMED:** The official phone number is `0782610108` (local) and `+962782610108` (international). Use local format for visible Jordan-facing content, and international format for links and structured data.

---

## 4. Email Address

| Value | Appears Where | Classification | Note |
|---|---|---|---|
| `info@educreativitycenter.com` | contact.html (displayed and linked), all footer email icons | NEEDS_CONFIRMATION | Domain spelling here is "creativity" (correct). No deliverability test performed. |

---

## 5. Physical Address

| Field | Value | Source | Classification |
|---|---|---|---|
| City | Amman | contact.html, map embed | NOT_APPLICABLE_CURRENTLY |
| Neighbourhood | Jubaiha | contact.html, map overlay | NOT_APPLICABLE_CURRENTLY |
| Street address | Not provided | Not in any file | NOT_APPLICABLE_CURRENTLY |
| Map coordinates | 32.0116844, 35.8647565 | contact.html Google Maps embed | NOT_APPLICABLE_CURRENTLY |
| Full formatted address | Unknown | Not in any file | NOT_APPLICABLE_CURRENTLY |

> **CONFIRMED:** The academy operates online only and has not opened a physical location yet. Do not publish a physical branch address or Google Maps location. LocalBusiness structured data should not be used if it requires a physical location.

---

## 6. Opening Hours

| Value | Source | Classification |
|---|---|---|
| "8:00 AM to 10:00 PM" | Owner confirmation | VERIFIED_WITH_LIMITATION |

> **LIMITATION:** The owner has not yet specified exact operating days. Do not create openingHoursSpecification in structured data until the operating days are confirmed. Public content may later say "Online support is available from 8:00 AM to 10:00 PM."

---

## 7. Social Media Accounts

| Platform | URL in Files | Classification | Issue |
|---|---|---|---|
| Facebook | `https://web.facebook.com/profile.php?id=61587546087301&locale=ar_AR` | NEEDS_CONFIRMATION | Consistent across all pages; profile ID must be verified by owner |
| Instagram | `https://www.instagram.com/ecc.teach/` | VERIFIED | Official Instagram account (without tracking parameters) |
| WhatsApp | `https://wa.me/962782610108` | VERIFIED | Official WhatsApp URL |

---

## 8. Courses

| Course Name | File(s) | Price Shown | Classification |
|---|---|---|---|
| Kids English Adventure | `kidsenglishadventure.html`, `courses.html` | $149 | NEEDS_CONFIRMATION |
| The Comprehensive Mastery | `thecomprehensivemastery1.html`, `courses.html` | $299 | NEEDS_CONFIRMATION |
| 1-on-1 Personalized | `1-on-1personalized.html`, `courses.html` | $45 | NEEDS_CONFIRMATION |

> Prices are consistent across the course listing page and individual course pages. Owner must confirm whether these are real current prices.

---

## 9. Course Content Details

| Field | Value on Site | Classification |
|---|---|---|
| CEFR levels covered | Not specified on any page | NEEDS_CONFIRMATION |
| Course duration | Not specified on any page | NEEDS_CONFIRMATION |
| Class format (in-person vs online) | Implied in-person, online also implied | NEEDS_CONFIRMATION |
| Available schedule days/times | Not listed publicly | NEEDS_CONFIRMATION |
| Placement test process | Referenced but not described | NEEDS_CONFIRMATION |
| Class size (group courses) | Not specified | NEEDS_CONFIRMATION |

---

## 10. Instructors and Staff

| Name | Source | Classification | Evidence Note |
|---|---|---|---|
| Dr. Sarah Jensen | about.html | REJECTED | Owner decision: remove completely |
| Marcus Chen | about.html | REJECTED | Owner decision: remove completely |
| Elena Rodriguez | about.html | REJECTED | Owner decision: remove completely |
| David Wilson | about.html | REJECTED | Owner decision: remove completely |
| "50+ Native Tutors" | index.html stats | NEEDS_CONFIRMATION | Replace with non-numeric verified claim |

> **CONFIRMED:** Remove the entire fictional team section permanently. All current fictional team names, roles, biographies, and AI-generated portraits are REJECTED. Approved future action is REMOVE_COMPLETELY. Real staff may be added later only after names, roles, photos, and publication permission are approved.

---

## 11. Testimonials

| Quote (truncated) | Attributed To | Classification | Evidence Note |
|---|---|---|---|
| "English Masters Academy completely changed my career path..." | Maria Gonzales, Marketing Director, Madrid | NEEDS_CONFIRMATION | Mentions "English Masters Academy" — a different business name. Madrid location inconsistent with local center. |
| "The structure is incredible. Unlike apps that feel like games..." | Hiroshi Tanaka, Software Engineer, Tokyo | NEEDS_CONFIRMATION | Tokyo location inconsistent. No photo. |

> The first testimonial names a different academy ("English Masters Academy"). This strongly suggests it was copied from a website template without being updated. Owner must confirm whether either testimonial is real.

---

## 12. Statistics

| Statistic | Source | Classification | Recommended Action |
|---|---|---|---|
| "12k+ Graduates" | index.html | NEEDS_CONFIRMATION | REPLACE_WITH_VERIFIED_NON_NUMERIC_CONTENT |
| "50+ Native Tutors" | index.html | NEEDS_CONFIRMATION | REPLACE_WITH_VERIFIED_NON_NUMERIC_CONTENT |
| "98% Success Rate" | index.html | NEEDS_CONFIRMATION | REPLACE_WITH_VERIFIED_NON_NUMERIC_CONTENT |
| "24/7 Global Support" | index.html | NEEDS_CONFIRMATION | REPLACE_WITH_VERIFIED_NON_NUMERIC_CONTENT |
| "6 Months To C1 Fluency" | index.html journey | NEEDS_CONFIRMATION | Rewrite to describe typical progress |

> **CONFIRMED:** The project integrity policy does not permit publishing unsupported numbers. Keep classified as NEEDS_CONFIRMATION. Replace with verified non-numeric content (e.g., "Online English learning", "Flexible communication hours").

---

## 13. Certificates and Accreditations

| Claim | Source | Classification | Required Action |
|---|---|---|---|
| "Verified Certificates Included" | index.html | NOT_CURRENTLY_AVAILABLE | Hide or remove claims |
| "Certified Excellence" badge | about.html | NOT_CURRENTLY_AVAILABLE | Hide or remove claims |
| "Verify your skills with global standards" | index.html | NOT_CURRENTLY_AVAILABLE | Hide or remove claims |

> **CONFIRMED:** Certificates and accreditations are still under development. Hide or remove claims. Do not publicly advertise future certificates or accreditations unless the owner later approves precise wording.

---

## 14. Partnerships

| Claim | Source | Classification | Evidence |
|---|---|---|---|
| 4 partner logo images with "Trusted by learners from global companies" | courses.html | NEEDS_CONFIRMATION | Images served from Google AI service. No company names visible. Cannot verify any partnership. |

---

## 15. Teaching Methods and Technology

| Claim | Source | Classification |
|---|---|---|
| "AI pronunciation tools" | index.html | NEEDS_CONFIRMATION |
| "Proprietary immersion method" | index.html | NEEDS_CONFIRMATION |
| "Dynamic lessons that adapt to your pace" | index.html | NEEDS_CONFIRMATION |

---

## 16. Registration Workflow

| Item | Value | Classification |
|---|---|---|
| Registration page URL | `login.html` | VERIFIED (file exists and functions) |
| API endpoint (local file) | `http://localhost:3000/api/leads/create` | LOCAL_AND_PRODUCTION_DIFFER |
| Registration form language | Arabic RTL | VERIFIED |
| "Academic advisor contact within 24 hours" | login.html thank-you text | NEEDS_CONFIRMATION |

---

## Owner Decisions Required Before Phase 2

1. Correct canonical domain
2. Official phone number(s) and purpose of each
3. Whether staff on About page are real; if so, provide real names and photos
4. Whether testimonials are real; if so, provide verified student names, consent, and real quotes
5. Accurate statistics with supporting data
6. Real course prices
7. Certificate type and issuing/recognizing body
8. Opening hours
9. Full street address
10. Instagram account URL
11. Correct Facebook profile URL verification
12. Whether online learning is offered
13. Whether AI tools are actually used in lessons
14. Official Arabic name of the center
15. Founding year (for About page)
