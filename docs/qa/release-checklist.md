# Release Checklist — Edu Creativity Center Public Website
**Phase:** 1 — Content Source of Truth (QA Framework)
**Created:** 2026-07-17
**Governing skill:** educore-public-website
**Usage:** Run this checklist before releasing any page or group of pages to production.

---

## How to Use This Checklist

- Complete every applicable section before marking a release as READY.
- For each item, mark: ✅ PASS | ❌ FAIL | ⏭ NOT APPLICABLE
- A release is NOT ready if any item is marked ❌ FAIL.
- Items marked NEEDS_CONFIRMATION must be resolved or explicitly deferred with owner approval.

---

## Section 1 — Pre-Release Scope Confirmation

- [ ] The release scope is documented and matches the approved phase.
- [ ] No files outside the approved scope were modified.
- [ ] All modified files are listed in the change report.
- [ ] No public website files were modified during Phase 1 (documentation only).

---

## Section 2 — Registration and API Safety

- [ ] Registration form (`login.html`) has been tested in a safe environment.
- [ ] API endpoint classification has been documented (VERIFIED_WORKING / VERIFIED_BROKEN / LOCAL_AND_PRODUCTION_DIFFER / UNABLE_TO_VERIFY).
- [ ] No registration form field names were changed.
- [ ] No API payload keys were changed.
- [ ] No Supabase credentials, service-role keys, or private keys appear in any public file.
- [ ] Duplicate-submission handling still works.
- [ ] Thank-you page loads after successful submission.
- [ ] Error state displays appropriate Arabic error message.
- [ ] No fake registration data was submitted to production during verification.

---

## Section 3 — Content Integrity

- [ ] All content on changed pages references only VERIFIED facts.
- [ ] No NEEDS_CONFIRMATION claim appears on a published page without explicit owner approval.
- [ ] No REJECTED claim appears on any page.
- [ ] No CONFLICTING value has been arbitrarily chosen — conflict must be resolved by owner.
- [ ] No invented people appear as real staff.
- [ ] No invented testimonials appear as real student reviews.
- [ ] No AI-generated photos are labeled as real people.
- [ ] No unverified statistics remain in the changed pages.
- [ ] No placeholder text remains in the changed pages.
- [ ] Partner logos are either real and consented or removed.
- [ ] All testimonials have real attribution with owner-provided evidence.
- [ ] Brand name is spelled correctly: Edu Creativity Center (or confirmed approved variant).

---

## Section 4 — Arabic Content Quality

- [ ] Arabic pages use `lang="ar"` and `dir="rtl"` on `<html>`.
- [ ] Arabic text is in clear Modern Standard Arabic (not dialect).
- [ ] Arabic text was reviewed by a native Arabic speaker or qualified reviewer.
- [ ] Arabic text reads naturally and was not mechanically translated from English.
- [ ] Arabic punctuation is correct (، ؟ .).
- [ ] Tajawal font (or approved Arabic font) is loaded on Arabic pages.
- [ ] RTL layout does not overflow or break any UI element.
- [ ] RTL navigation, buttons, and form labels are correctly aligned.
- [ ] Arabic call-to-action buttons use approved terminology from the glossary.

---

## Section 5 — English Content Quality

- [ ] English pages use `lang="en"` and `dir="ltr"` on `<html>`.
- [ ] English is clear, natural, and free from grammatical errors.
- [ ] English does not sound like a translation from Arabic.
- [ ] All English headings use the approved capitalization style (Title Case for H1/H2, sentence case for H3+).
- [ ] No keyword stuffing.
- [ ] No vague marketing language without evidence.
- [ ] Call-to-action text is specific and descriptive.

---

## Section 6 — SEO Metadata

- [ ] Every page has a unique `<title>` tag.
- [ ] `<title>` is between 50–60 characters for optimal display.
- [ ] `<meta name="description">` matches the page language (English for EN pages, Arabic for AR pages).
- [ ] `<meta name="description">` is between 120–160 characters.
- [ ] `<link rel="canonical">` points to the page's own correct URL using the confirmed domain.
- [ ] `lang` attribute on `<html>` is correct.
- [ ] `dir` attribute on `<html>` is correct (ltr for English, rtl for Arabic).
- [ ] `<!DOCTYPE html>` is present.
- [ ] One `<h1>` per page.
- [ ] `<h1>` text is meaningful and relevant to the page topic.
- [ ] Heading structure is logical (h1 → h2 → h3 — no skips).
- [ ] `hreflang` tags are present and reciprocal between English and Arabic counterparts.
- [ ] `hreflang="x-default"` is set for the root URL.
- [ ] Open Graph `og:title` matches the page's `<title>`.
- [ ] Open Graph `og:description` is in the correct page language.
- [ ] Open Graph `og:url` matches the canonical URL.
- [ ] Open Graph `og:image` is set and points to a real image.
- [ ] `robots.txt` exists and is correctly configured.
- [ ] `sitemap.xml` exists and lists all indexable pages.
- [ ] Structured data (JSON-LD) validates with no errors in Google Rich Results Test.
- [ ] Structured data does not contain information that contradicts the visible page.

---

## Section 7 — Internal Links

- [ ] All internal `<a href>` links are functional and lead to real pages.
- [ ] No `href="#"` dead links exist on released pages.
- [ ] Language switcher links point to the exact counterpart page (not always the homepage).
- [ ] Breadcrumb links are functional and accurate.
- [ ] Footer Quick Links all lead to real pages or are removed.
- [ ] Footer Legal links all lead to real pages or are removed.
- [ ] Social media icons link to real center accounts (not generic platform homepages).

---

## Section 8 — External Links

- [ ] WhatsApp link(s) use the confirmed phone number.
- [ ] Facebook link points to the confirmed center profile.
- [ ] Instagram link points to the confirmed center account.
- [ ] Google Maps embed shows the confirmed center location.
- [ ] External links have `target="_blank"` with `rel="noopener noreferrer"` where appropriate.

---

## Section 9 — Accessibility

- [ ] All images have meaningful `alt` text (not empty, not "image", not the filename).
- [ ] All form inputs have `<label>` elements.
- [ ] Form validation errors are announced appropriately.
- [ ] All interactive buttons have descriptive accessible names.
- [ ] No interactive elements rely on color alone to convey state.
- [ ] Color contrast meets WCAG 2.1 AA minimum (4.5:1 for normal text, 3:1 for large text).
- [ ] Page is navigable by keyboard (Tab, Enter, Space, Escape).
- [ ] Focus indicators are visible.
- [ ] Page heading structure is logical.
- [ ] Landmark elements are used: `<header>`, `<nav>`, `<main>`, `<footer>`.
- [ ] RTL layout does not cause focus order confusion.
- [ ] Text resizes up to 200% without loss of functionality.

---

## Section 10 — Technical

- [ ] `<!DOCTYPE html>` is present on every page.
- [ ] No duplicate `<script>` tags (e.g., Lucide loaded twice).
- [ ] No broken `<link>` references (e.g., logo.svg missing).
- [ ] No console JavaScript errors on page load.
- [ ] Background animation (`background.html` iframe) does not block interaction.
- [ ] Mobile navigation is functional (hamburger menu or equivalent).
- [ ] Page is responsive and usable at 320px, 768px, 1024px, 1440px.
- [ ] Images use `loading="lazy"` where appropriate.
- [ ] No Google Fonts loaded on pages that do not use them.
- [ ] `background.html` has `noindex` meta tag.
- [ ] `login.html` (or `/register/`) has `noindex` meta tag.
- [ ] `robots.txt` disallows `background.html`.
- [ ] `sitemap.xml` does not include noindex pages.

---

## Section 11 — Security

- [ ] No service-role keys appear in any public file.
- [ ] No Supabase credentials appear in any public file.
- [ ] No internal API routes are exposed.
- [ ] No private student data is referenced in public files.
- [ ] EduCore internal routes and database structure remain private.
- [ ] Form submissions do not log sensitive data to the browser console.

---

## Section 12 — Change Report Completeness

- [ ] All files inspected are listed.
- [ ] All files modified are listed.
- [ ] All files created are listed.
- [ ] All URLs added or changed are listed.
- [ ] All redirects are documented.
- [ ] All claims classified are listed.
- [ ] Validation results are recorded.
- [ ] Rollback instructions are provided.
- [ ] Known limitations are documented.

---

## Quick Checklist for Urgent Content Fixes (Phase 2 Pre-Check)

The following must be resolved before any Phase 2 content is published:

- [ ] Owner has confirmed the correct canonical domain
- [ ] Owner has confirmed the official phone number(s)
- [ ] Leadership team confirmed real or removed
- [ ] Fake testimonials removed or replaced
- [ ] Unverified statistics removed or confirmed
- [ ] Instagram link updated to real account
- [ ] "English Masters Academy" text corrected in testimonial slide 1
- [ ] Brand name typo "EDU Critivity Center" fixed in login.html thank-you message
- [ ] Duplicate Lucide script tag removed from contact.html
- [ ] Broken logo.svg favicon reference fixed in login.html
- [ ] Dead footer links removed or pointed to real pages

---

## Sign-Off

| Role | Name | Date | Status |
|---|---|---|---|
| Owner / Content Approver | | | |
| Developer | | | |
| QA Reviewer | | | |
