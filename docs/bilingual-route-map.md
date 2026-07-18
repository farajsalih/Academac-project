# Bilingual Route Map

This document maps all the active, final public routes for the Edu Creativity Center website, along with their legacy compatibility redirects.

## Gateway

| Route | Type | Description |
|---|---|---|
| `/` | `index.html` | Root language gateway with manual selection. Uses `x-default` canonical tag. |

## Core Pages

| English (`/en/`) | Arabic (`/ar/`) | Description |
|---|---|---|
| `/en/index.html` | `/ar/index.html` | Homepage |
| `/en/about.html` | `/ar/about.html` | About Us |
| `/en/courses.html` | `/ar/courses.html` | Course Catalog |
| `/en/contact.html` | `/ar/contact.html` | Contact Information |
| `/en/register.html` | `/ar/register.html` | Registration Wizard |

## Program Pages

| English (`/en/`) | Arabic (`/ar/`) | Description |
|---|---|---|
| `/en/general-english.html` | `/ar/general-english.html` | General English Program |
| `/en/english-foundations.html` | `/ar/english-foundations.html` | English Foundations |
| `/en/english-conversation.html` | `/ar/english-conversation.html` | English Conversation Program |
| `/en/intensive-english.html` | `/ar/intensive-english.html` | Intensive English Program |
| `/en/english-for-kids.html` | `/ar/english-for-kids.html` | English for Kids |
| `/en/private-english-lessons.html` | `/ar/private-english-lessons.html` | Private 1-to-1 English Lessons |

## Legacy Redirects (Root)

The following root files were replaced with `<meta http-equiv="refresh">` HTML redirects to preserve existing links and bookmarks without polluting the sitemap.

| Legacy File | Redirect Target |
|---|---|
| `about.html` | `/en/about.html` |
| `courses.html` | `/en/courses.html` |
| `contact.html` | `/en/contact.html` |
| `login.html` | `/ar/register.html` |
| `thecomprehensivemastery1.html` | `/en/general-english.html` |
| `kidsenglishadventure.html` | `/en/english-for-kids.html` |
| `1-on-1personalized.html` | `/en/private-english-lessons.html` |

## Technical Scripts

| File | Purpose |
|---|---|
| `/js/config.js` | Single source of truth for the Supabase `apiBaseUrl`. |
| `/js/registration.js` | Shared registration wizard logic. Localized via `document.documentElement.lang`. |

## SEO Assets

| File | Purpose |
|---|---|
| `/sitemap.xml` | XML sitemap containing 23 URLs (1 gateway + 11 EN + 11 AR). |
| `/robots.txt` | Defines crawling rules and points to `sitemap.xml`. |
