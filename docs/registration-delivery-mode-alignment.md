# Registration Delivery Mode Alignment

## 1. Owner Decision
The owner has confirmed that Edu Creativity Center is an online-only academy. In-person ("حضوري") registration must not be offered on the public website.

## 2. Technical Alignment
- **Supabase through EDUCore is the only official registration path.** The backend accurately processes leads without requiring a delivery mode.
- **Google Sheets integration has been removed.** The legacy Google Apps Script has been entirely eliminated from `Coffee_Mood`.
- **Local frontend development uses the local EDUCore API** (`http://localhost:3000/api/leads/create`). 
- **Production API configuration must be supplied before official deployment.** The `Coffee_Mood/config.js` mechanism allows setting `apiBaseUrl` when deployed.
- **The public form does not ask for delivery mode.** The `courseType` field (which offered online vs. in-person) was removed from the frontend. The `EDUCore` schema accepts leads safely without a fabricated `preferred_program_type`.
