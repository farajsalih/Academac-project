# Phase 2D.2: Authoritative Registration Source Report

## 1. Investigation Scope and Findings

### Locations Searched
- The entire current repository (`Coffee_Mood`)
- Local Git branches
- Git commit history
- Parent workspace folder (`c:\Users\alawhra\OneDrive\سطح المكتب`)
- Sibling projects
- Environment templates and API folders

### Git Branches Inspected
- Checked local and remote tracking branches using `git branch -a`. Only `main` and `remotes/origin/main` were found.

### Git-History Findings
- Searched Git commit history via `git log -p -S` for terms like `supabase` and `localhost:3000`. No historical Supabase integration code (such as a previous `createClient` or Edge Function) exists in the history of the `Coffee_Mood` repository.

### Sibling Folders Inspected
- The parent directory contains a sibling project named **`EDUCore`** (`c:\Users\alawhra\OneDrive\سطح المكتب\EDUCore`).
- Inside `EDUCore`, a full Supabase integration was discovered, including `@supabase/ssr` server actions and the API endpoint.

### Deployment Configuration Findings
- Checked the `Coffee_Mood` directory for Vercel (`vercel.json`), Netlify (`netlify.toml`), or GitHub Actions (`.github/workflows`). None were found.
- The `Coffee_Mood` remote is `https://github.com/farajsalih/Academac-project.git`. 
- The `EDUCore` remote is `https://github.com/faraj-tr/firstProject.git`.

### Architecture Classification
Based on the evidence, the architecture is classified as:
**`FOUND_IN_SIBLING_PROJECT`**

### Direct Code Evidence
The authoritative Supabase endpoint for registration exists in the sibling repository `EDUCore`.
- **Exact File Path:** `c:\Users\alawhra\OneDrive\سطح المكتب\EDUCore\src\app\api\leads\create\route.ts`
- **Endpoint:** `leads/create` (accessible via `/api/leads/create`)
- **Request Method:** `POST`
- **Request Headers Required:** Checks `origin` for allowed CORS (e.g., `https://educerativitycenter.com`), payload must be `application/json`.
- **Payload Keys Expected:** `full_name`, `phone`, `email`, `nationality`, `country`, `city`, `learning_goal`, `current_english_level`, `preferred_schedule`, `preferred_time`, `preferred_program_type`, `payment_method`, `payment_plan`.
- **Validation Layer:** Zod schema (`leadSchema`) with payload size limit (20KB), and a honeypot field (`website_url`).
- **Duplicate Handling:** Rejects with 409 `DUPLICATE_PHONE` if the normalized phone was submitted in the last 30 days.
- **Supabase Target Table:** `website_leads` and `api_rate_limits`.
- **Delivery Mode Dependency:** The endpoint schema explicitly defines `preferred_program_type: z.string().optional().or(z.literal(''))`. It is fully optional, validating that removing `courseType` from the frontend was 100% safe.
- **Relationship to EduCore Admissions:** Inserts directly into `website_leads` with `lead_status = 'NEW'`, connecting the public website to the admissions pipeline.
- **Security Model:** Uses the `SUPABASE_SERVICE_ROLE_KEY` purely on the server side to bypass RLS for insertion. No secrets are exposed to the browser.

### Missing Components
The current folder (`Coffee_Mood`) lacks the backend API implementation. The active form currently posts to Google Apps Script. 

### Production Source Analysis
The `Coffee_Mood` directory appears to be the static frontend repository serving the public website. The `EDUCore` directory contains the actual Next.js backend/API layer responsible for Supabase logic.

## 2. Required Next Action
The public frontend (`script.js` in `Coffee_Mood`) must be updated to route its `fetch` request to the backend API (`/api/leads/create`) hosted by the `EDUCore` deployment, instead of the legacy Google Apps Script endpoint. This will bridge the two repositories. 

## 3. Execution Constraints Confirmation
- **No registration code was modified.** The legacy Google Sheets code remains untouched in `script.js`.
- No new API was created.
- No Supabase schemas or configs were altered.

## 4. Final English Content Corrections (Git Diff Summary)
The final English content documentation was updated to remove exaggerated marketing phrasing and ensure strict compliance with the verified online model.
- **`docs/content/final-approved-english-course-content.md`**
- **`docs/content/english-course-page-drafts.md`**
- **`docs/content/course-content-master.md`**

**Summary of string replacements:**
- Softened "everyday personal and professional situations" to "everyday situations".
- Replaced parent-presence FAQs with "A parent or guardian may assist with technical setup when needed."
- Softened Intensive program descriptions, removing "accelerated", "rigorous", and "demanding".
- Adjusted Private 1-to-1 descriptions, removing "tailored strictly", "entirely at your own pace", and "completely customized".
- Replaced blanket review-material access wording with "during learning activities".
