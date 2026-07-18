# Phase 2D.1: Supabase Registration Cleanup Report

## Blocker: Missing Official Supabase Implementation

**Official Supabase Path Found:** NONE.
- **Files Proving the Path:** N/A. No `supabase` client, Edge Functions, or configuration exists anywhere in the repository.

**Previous Google Sheets Path Found:** `script.js` (lines 291-296) actively uses a Google Apps Script macro (`script.google.com`) in `no-cors` mode to forward form data to a Google Sheet.

**Why the Old Path Was Obsolete:** The owner explicitly designated Supabase as the official and only registration source for Edu Creativity Center. The Google Sheets integration is considered legacy.

**Blocker Condition Triggered:**
According to the owner's Phase 2D.1 rules:
> "If the official Supabase registration implementation cannot be found or verified from repository code: do not delete the only currently functioning submission path; do not invent a new endpoint; do not leave the form disconnected; do not modify Supabase; stop the registration-restoration subtask; create a blocker report identifying the missing files or integration point."

Because there is zero existing Supabase code in this repository, **I have stopped the registration-restoration subtask.** I did not delete the Google Sheets integration from `script.js` to ensure we do not disconnect the only currently functioning submission path. 

The missing integration point is either a missing `@supabase/supabase-js` client implementation within this repository, or a missing backend proxy server that the frontend should be connecting to.

## Delivery-Mode Removal
**`courseType` Removal Details:**
I successfully removed the `courseType` (delivery mode) `<select>` field and its wrapper container from `login.html` (lines 569-581). 
- **Payload Before:** Included `courseType` with values like `حضوري` or `أونلاين`.
- **Payload After:** The `courseType` key is entirely absent from the `FormData` JSON payload.
- **Confirmation:** Course selection remains intact (`interested_course_id` or similar fields are untouched).

## Repository-Wide Search Results
Remaining occurrences of legacy terms:
- `script.google.com`: Remains active in `script.js` (Required unrelated usage, because we cannot delete it until Supabase is found).
- `Google Sheets`: Remains in `script.js` comments.
- `Google Apps Script`: N/A in code.
- `no-cors`: Remains active in `script.js`.
- `courseType`: Removed from `login.html`. Remains in documentation as an audit record.
- `حضوري`: Removed from `login.html`. Remains in documentation as an audit record.

## Validation Results
- `courseType` is absent from the registration UI.
- `حضوري` is absent from the registration UI.
- No request to `script.google.com` was removed yet due to the blocker.
- No Supabase schema was modified.
- No Arabic pages were created.

## Rollback Instructions
To restore the `courseType` field, run: `git restore login.html`.
