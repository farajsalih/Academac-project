# Owner Decision Pack
**Project:** Edu Creativity Center — Public Website
**Phase:** 3A.1 — Consolidated Owner Decisions

This document tracks the final business decisions for the public website. Most decisions have been officially resolved through the Phase 2 and 3 iterations. Only genuinely pending items remain at the end.

---

## 1. Resolved and Confirmed Decisions

### Official Identity
- **Canonical Domain:** `educerativitycenter.com` (Confirmed: Keep typo to maintain indexing).
- **Official Brand Name:** Edu Creativity Center (English). The Arabic equivalent is purely descriptive: `أكاديمية متخصصة في تعليم اللغة الإنجليزية أونلاين.`
- **Brand Typo:** The registration success typo "EDU Critivity Center" is approved for correction to "Edu Creativity Center".

### Contact Information
- **Primary Phone:** `0782610108`
- **WhatsApp:** `962782610108`
- **Instagram:** `https://www.instagram.com/ecc.teach/`
- **Support Hours:** Saturday through Thursday, 8:00 AM to 10:00 PM. Friday excluded. Do not claim 24/7 support.

### Physical Location
- **Model:** Online-only academy.
- **Branch/Map:** No physical branch. Remove Google Maps embed and in-person addresses.

### Staff and Trust Elements
- **Staff:** Remove fictional staff names and AI staff identities entirely.
- **Accreditation & Certificates:** No public certificates offered. Remove all accreditation badges, certificate claims, and logos of fake partners.
- **Statistics:** Remove unverifiable statistics (e.g., 12k+ graduates, 98% success rate).
- **Testimonials:** Remove fake testimonials. Can be added later if real evidence is provided.

### Programs and Teaching
- **Curriculum:** The center offers exactly six approved English programs (General, Foundations, Conversation, Intensive, Kids, Private 1-to-1).
- **Methodology:** Use neutral, accurate teaching-method wording. Do not claim proprietary immersion or guaranteed rapid fluency.
- **Pricing:** No public prices displayed.
- **Duration/Schedules:** No fixed durations or exact schedules published. 

### Registration Architecture
- **Source of Truth:** Supabase accessed through the EDUCore API is the only official registration path.
- **Legacy Systems:** Google Sheets integration is obsolete and has been removed.
- **Form Fields:** No delivery-mode selector (removed "حضوري" and "courseType"). The generic registration form intentionally does not require an upfront course selection.

---

## 2. Unresolved / Pending Decisions

These items remain pending but **do not block** the current content or structural implementation. They should simply be omitted from the public website until confirmed.

### DECISION-004 — Official Email Address
- **Status:** PENDING
- **Current value found:** `info@educreativitycenter.com`
- **Action:** Waiting for owner confirmation of the active public email inbox.

### DECISION-006 — Official Facebook Account
- **Status:** PENDING
- **Current value found:** Profile ID `61587546087301`
- **Action:** Waiting for owner confirmation of the active Facebook URL to include in site footer/schema.

### DECISION-019 — Real Testimonials
- **Status:** PENDING
- **Action:** Removed from public site. Awaiting written permission from real students if the owner wishes to reintroduce a testimonials section.

### DECISION-027 — Production EDUCore API URL
- **Status:** PENDING
- **Action:** Local integration is verified using `http://localhost:3000/api/leads/create`. Awaiting the final production endpoint URL before the public launch deployment.
