# Phase 2D.3: Local Registration Integration Report

## 1. Overview
The legacy Google Sheets registration workflow has been completely removed from the frontend. The `Coffee_Mood` registration form now points exclusively to the `EDUCore` Supabase API, utilizing a safe configuration mechanism designed for local and production use.

## 2. Technical Alignments and API Inspection
The authoritative `EDUCore/src/app/api/leads/create/route.ts` was inspected without modification. Key observations:
- **Payload Restrictions**: Enforces max 20KB.
- **Accepted Origins**: Includes `http://127.0.0.1:5500`, `http://localhost:5500`, and `http://localhost:3000`, ensuring safe local frontend development natively.
- **Validation**: Strict Zod validation on `full_name`, `phone` (min 6), and optional mapping for fields like `city`, `learning_goal`, `preferred_program_type`, etc.
- **Rate-Limiting & Deduplication**: Block duplicate phone numbers within 30 days and limits IP submissions.

## 3. Field Mapping
A complete field mapping has been documented in `docs/registration-field-mapping.md`. 
**Crucial Finding**: The `login.html` form **does not have a course selection field**. Consequently, `preferred_program_type` is correctly omitted from the payload, preserving the removal of `courseType` and avoiding any fabricated data.

## 4. Frontend Configuration & Scripts Updated
- **`config.js` created**: Established a clear configuration object `window.EDUCORE_CONFIG` mapping `apiBaseUrl`.
- **`login.html` updated**: Included `config.js` before `script.js`.
- **`script.js` updated**: 
    - Removed `script.google.com` `fetch` entirely.
    - Resolves API endpoint dynamically. If local development (`localhost` or `127.0.0.1`), falls back safely to `http://localhost:3000`. If deployed, requires `window.EDUCORE_CONFIG.apiBaseUrl` or alerts the user safely with the official WhatsApp link.
    - Payload transformation logic constructs exactly what `EDUCore` demands.
    - Status codes (400, 403, 409, 429) are gracefully handled and translated to user-friendly messages, avoiding the exposure of server errors.

## 5. Safeties Maintained
- No production leads created (integration mapped to local endpoints or missing config blocks).
- No Supabase client dependencies added to `Coffee_Mood`.
- No Supabase secret exposed.
- No database schema or business logic in `EDUCore` changed.

## 6. English Content Synchronization
A final sweep across `docs/content/course-content-master.md` and `docs/content/english-course-page-drafts.md` confirmed total synchronization with `final-approved-english-course-content.md`. Phrases like "adult learners," "absolute basics," "student account," and "noticeable improvement" were replaced with their approved, neutral equivalents. 

## 7. Remaining Deployment Requirement
Before the `Coffee_Mood` frontend is officially deployed, the owner must supply the official `EDUCore` API base URL to populate `config.js`.

## 8. Rollback Instructions
To rollback these changes:
1. Revert `script.js` to restore the Google Apps Script `fetch` call.
2. Remove `<script src="config.js"></script>` from `login.html`.
3. Delete `config.js`.
