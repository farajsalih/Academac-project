# Edu Creativity Center - Public Website

This repository contains the finalized bilingual static frontend for the Edu Creativity Center website.

## 1. Project Purpose
A lightweight, high-performance static website to showcase the academy's English programs and securely capture leads into the central Supabase system via the `EDUCore` backend API. The site is fully localized in English (`/en/`) and Arabic (`/ar/`).

## 2. Final Directory Structure
```text
Coffee_Mood/
├── index.html                  (Language Gateway)
├── about.html, courses.html... (Legacy compatibility redirects)
├── sitemap.xml, robots.txt     (SEO)
├── README.md
├── ar/                         (Arabic Pages)
├── en/                         (English Pages)
├── js/
│   ├── config.js               (API Configuration)
│   └── registration.js         (Secure API Submission Logic)
└── assets/
    └── images/                 (Optimized WebP/SVG Assets)
```

## 3. Local Frontend Start Instructions
Run any static HTTP server from the root of this repository. For example:
```bash
npx serve .
# or
python -m http.server 8080
```
Then visit `http://localhost:8080`.

## 4. Local EDUCore API Requirement
The registration form **requires** the `EDUCore` backend to be running simultaneously to accept leads. Ensure the `EDUCore` Next.js API is running locally (typically at `http://localhost:3000`).

## 5. API Configuration Location
API configuration is located exclusively at `/js/config.js`.

```javascript
window.APP_CONFIG = {
    // For local testing: 'http://localhost:3000'
    apiBaseUrl: 'http://localhost:3000' 
};
```

## 6. Registration Testing Instructions
1. Start the `EDUCore` backend locally.
2. Start this `Coffee_Mood` static frontend locally.
3. Open `http://localhost:8080/en/register.html` or `/ar/register.html`.
4. Submit the form with test data.
5. Verify the lead appears in the local Supabase `leads` table.

## 7. Production Deployment Requirement
Before launching this website to the public domain, you **must** configure the deployed production EDUCore API URL in `/js/config.js`.

```javascript
window.APP_CONFIG = {
    apiBaseUrl: 'https://api.your-production-educore-domain.com'
};
```

> **WARNING:** Do **NOT** expose Supabase keys (`SUPABASE_URL`, `SUPABASE_ANON_KEY`, or `SERVICE_ROLE_KEY`) anywhere in this frontend repository. All database interactions must occur strictly through the `EDUCore` API endpoints.
