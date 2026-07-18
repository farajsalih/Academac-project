---

name: educore-public-website
description: >
Use this skill whenever working on the official public website of Edu Creativity
Center, including bilingual Arabic-English content, HTML/CSS/JavaScript changes,
website file organization, SEO, AI search discoverability, accessibility,
language switching, course pages, registration pages, structured data,
redirects, sitemap, robots.txt, or website quality assurance. This skill must
also be used before modifying any public website file connected to the EduCore
registration or admissions workflow.
------------------------------------

# EduCore Public Website Skill

## Goal

Safely improve the official public website of Edu Creativity Center while:

* Preserving the academy's real identity.
* Preserving all working functionality.
* Supporting Arabic and English naturally.
* Improving search-engine and AI-search discoverability.
* Protecting the EduCore registration integration.
* Preventing invented, misleading, duplicated, or weak content.
* Keeping all changes limited, reviewable, and reversible.

This skill governs the public academy website only.

It does not authorize unrestricted changes to the internal EduCore application.

---

# 1. Project Context

## Organization

Official organization name:

Edu Creativity Center

The academy currently provides English-language education.

The academy has one physical branch unless updated by an approved source-of-truth document.

## Technical stack

The public website is built using:

* HTML
* CSS
* JavaScript

Do not migrate the website to another framework unless the owner explicitly requests and approves a migration.

Do not migrate to:

* React
* Next.js
* Vue
* Angular
* WordPress
* Another CMS or application framework

merely to improve SEO or bilingual support.

## EduCore relationship

The public website is separate from the internal EduCore Education Management System.

The public website may submit registration or lead information to EduCore or Supabase.

The following must remain protected:

* Registration workflow.
* Admissions workflow.
* Form field names.
* Payload structures.
* API contracts.
* Database schema.
* Row-level security.
* Authentication.
* Permissions.
* Internal routes.
* Private student data.
* Guardian data.
* Financial data.
* Internal operational information.

---

# 2. When to Use This Skill

Use this skill for tasks involving:

* Public website auditing.
* Website restructuring.
* File organization.
* Arabic content.
* English content.
* Translation or localization.
* Course-page creation.
* Academy information pages.
* SEO.
* Local SEO.
* ChatGPT Search discoverability.
* Bing or Copilot discoverability.
* Sitemap generation.
* robots.txt.
* Canonical URLs.
* hreflang.
* Structured data.
* Schema.org.
* Language switching.
* RTL and LTR layouts.
* Accessibility.
* Image optimization.
* Internal linking.
* Redirects.
* Registration-page presentation.
* Public contact information.
* Public course information.
* Website quality assurance.
* Deployment validation.

Use this skill before changing files such as:

* index.html
* about.html
* courses.html
* contact.html
* course-detail HTML files
* login.html
* register pages
* script.js
* public CSS files
* public JavaScript files
* robots.txt
* sitemap.xml
* redirect configuration
* hosting configuration

---

# 3. Source-of-Truth Priority

When sources disagree, use the following priority:

1. Explicit instructions from the owner in the current task.
2. Approved academy-facts.md.
3. Approved claims-evidence-register.csv.
4. Approved terminology-glossary.csv.
5. Approved brand-voice.md.
6. Current production behavior verified through testing.
7. Current repository files.
8. Phase audit reports.
9. Unverified content currently displayed on the website.

A value appearing in the existing website is not automatically verified.

An audit report describes the state found during an audit. It must not override newer verified information.

Never convert an assumption into a public fact.

When information is missing, use:

NEEDS_CONFIRMATION: [specific missing information]

---

# 4. Mandatory Working Method

Work in controlled phases.

For every requested task:

1. Read the user's exact requested scope.
2. Load this skill.
3. Read the relevant reference files.
4. Inspect the current files before modifying them.
5. Identify dependencies and risks.
6. State the exact files that will be changed.
7. Make only the requested changes.
8. Preserve unrelated functionality.
9. Run relevant validation.
10. Report the results.

Do not combine unrelated work.

Do not perform a complete redesign when the user asked for a limited content, SEO, language, or technical change.

Do not move to another phase unless explicitly instructed.

---

# 5. Read-Only Audit Rule

When the user requests an audit, review, inspection, report, analysis, or verification:

* Do not modify files.
* Do not rename files.
* Do not move files.
* Do not delete files.
* Do not fix issues silently.
* Do not create redirects.
* Do not change API endpoints.
* Do not change public content.

Produce a report containing:

* Current state.
* Evidence.
* Risk.
* Recommended action.
* Files affected.
* Required owner decisions.
* Proposed next phase.

---

# 6. Change-Scope Protection

Before modifying a file, determine:

* Why the file must change.
* Which requested requirement it satisfies.
* Which functionality depends on it.
* Whether the same result can be achieved with a smaller change.
* How the change can be rolled back.

Never modify unrelated modules.

Never rewrite an entire file when a targeted edit is sufficient.

Never apply broad formatting changes that make review difficult.

Never remove working code merely because it appears unused without verifying runtime behavior.

Unlinked patch or utility files must be inspected before deletion.

---

# 7. Registration and API Protection

The registration workflow is business-critical.

Before changing registration-related files:

1. Inspect the HTML form.
2. Inspect the JavaScript submission logic.
3. Inspect current production behavior when access is available.
4. Verify the actual browser Network request.
5. Inspect deployment rewrites, proxies, patches, or environment-based substitutions.
6. Compare local and production versions.

Classify the registration state as:

* VERIFIED_WORKING
* VERIFIED_BROKEN
* LOCAL_AND_PRODUCTION_DIFFER
* UNABLE_TO_VERIFY

Do not change an endpoint based only on a string found in a local file.

Do not change:

* Form field names.
* Input names.
* Validation rules.
* Payload keys.
* API paths.
* Duplicate handling.
* Success handling.
* Error handling.
* Supabase integration.

unless the task explicitly requires it and the dependency impact is documented.

Never expose:

* Service-role keys.
* Private API keys.
* Database credentials.
* Authentication tokens.
* Internal URLs that should remain private.

---

# 8. Academy Identity Rules

Use the academy's official name consistently:

Edu Creativity Center

Do not introduce alternative spellings unless they are part of an approved legal or Arabic name.

The following values must come from approved sources:

* Domain.
* Phone number.
* WhatsApp number.
* Email address.
* Physical address.
* Map location.
* Opening hours.
* Social profiles.
* Branch count.
* Course names.
* Prices.
* Course schedules.
* Instructor names.
* Instructor qualifications.
* Certificates.
* Accreditations.
* Partnerships.
* Student statistics.
* Testimonials.

When multiple values conflict, classify them as CONFLICTING.

Do not choose one arbitrarily.

---

# 9. Claim Classification

Every significant public claim must be classified as:

* VERIFIED
* REJECTED
* NEEDS_CONFIRMATION
* CONFLICTING
* OUTDATED

Claims requiring verification include:

* Student counts.
* Graduate counts.
* Success rates.
* Instructor counts.
* Native-speaker claims.
* Global-support claims.
* Fluency timelines.
* Guaranteed results.
* Accreditations.
* Recognized certificates.
* Partnerships.
* Awards.
* Prices.
* Discounts.
* Course duration.
* Course schedules.
* Testimonials.
* Staff biographies.

Do not publish or retain misleading claims merely because they already exist.

Do not describe content as fake without evidence that it was deliberately invented.

Use NEEDS_CONFIRMATION when evidence is insufficient.

---

# 10. Content Integrity

Never invent:

* Students.
* Parents.
* Instructors.
* Employees.
* Founders.
* Management members.
* Testimonials.
* Reviews.
* Student results.
* Partner companies.
* University relationships.
* Awards.
* Certificates.
* Accreditations.
* Branches.
* Prices.
* Schedules.
* Course features.
* Teaching technology.
* Educational methods.
* Statistics.
* Photos claimed to show real academy people or facilities.

Placeholder content must never be presented as real.

AI-generated people must not be described as real staff, instructors, or students.

Stock or generated images must be labeled and used only where they do not imply a false real-world identity.

---

# 11. Brand Voice

The academy's voice must be:

* Professional.
* Warm.
* Clear.
* Practical.
* Encouraging.
* Honest.
* Student-focused.
* Easy to understand.

The voice must not be:

* Arrogant.
* Overly academic.
* Robotic.
* Complicated.
* Aggressively promotional.
* Full of empty marketing language.
* Based on unsupported superiority claims.

Avoid phrases such as:

* world-class
* revolutionary
* unmatched
* number one
* guaranteed fluency
* guaranteed success
* best academy
* global leader

unless supported by verified, approved evidence.

Explain concrete value instead of using vague claims.

Weak:

"We provide innovative educational solutions that empower learners."

Better:

"We help students improve their English through clear lessons, practical activities, and training suited to their level."

---

# 12. Arabic Writing Rules

Arabic pages must use:

* Clear Modern Standard Arabic.
* Natural sentence structure.
* Short and medium-length sentences.
* Familiar educational terms.
* Correct Arabic punctuation.
* Direct explanations.
* A respectful and encouraging tone.
* RTL layout.

Avoid:

* Difficult vocabulary.
* Bureaucratic language.
* Literal translation from English.
* Long chained sentences.
* Excessive passive voice.
* Unnecessary English words.
* Keyword repetition.
* Artificial marketing expressions.
* Dialect in official page content unless explicitly requested.

Each Arabic page must read as if it was written originally in Arabic.

Do not produce Arabic by mechanically translating the English page.

---

# 13. English Writing Rules

English pages must use:

* Natural international English.
* Accessible vocabulary.
* Clear verbs.
* Short and medium-length sentences.
* Consistent educational terminology.
* LTR layout.
* A professional but friendly tone.

Avoid:

* Jargon.
* Complex academic wording.
* Literal translation from Arabic.
* Inflated marketing claims.
* Unnatural sentence structures.
* Keyword stuffing.
* Repetitive academy-name usage.

Each English page must read as if it was written originally in English.

---

# 14. Bilingual Content Model

Arabic and English pages must:

* Present the same verified facts.
* Serve the same user intent.
* Contain natural writing in each language.
* Use separate URLs.
* Use correct lang and dir attributes.
* Use self-referencing canonicals.
* Use reciprocal hreflang.
* Link to their exact counterpart.

Preferred structure:

/
/ar/
/en/

/ar/about/
/en/about/

/ar/courses/
/en/courses/

/ar/courses/[course-slug]/
/en/courses/[course-slug]/

/ar/contact/
/en/contact/

/register/

The language switcher must move the user to the equivalent page.

Example:

/ar/courses/kids-english-adventure/

must switch to:

/en/courses/kids-english-adventure/

It must not always return users to the homepage.

---

# 15. Language Detection

Browser-language detection may be used only at the root URL:

/

Rules:

* Arabic browser preference may lead to /ar/.
* Other supported preferences may lead to /en/.
* A saved manual language choice overrides automatic detection.
* Explicit /ar/ and /en/ URLs must never be automatically overridden.
* The language switcher must remain visible.
* Both languages must remain accessible through crawlable HTML links.
* Do not depend only on JavaScript for search-engine discovery.

---

# 16. URL and Redirect Safety

Do not change an existing URL before preparing:

* Its new destination.
* Exact 301 redirect.
* Updated internal links.
* Updated canonical.
* Updated hreflang.
* Updated sitemap entry.
* Updated structured data URL.
* Updated Open Graph URL.
* Rollback plan.

Never delete an indexed URL without a valid replacement or an explicitly approved removal strategy.

Avoid redirect chains.

Do not implement a proposed URL map until the owner approves it.

---

# 17. SEO Rules

Every indexable page must have:

* Valid HTML document structure.
* Correct lang attribute.
* Correct dir attribute.
* Unique title.
* Relevant meta description.
* Self-referencing canonical.
* One clear H1.
* Logical heading structure.
* Crawlable internal links.
* Useful visible content.
* Appropriate image alt text.
* Correct Open Graph values.
* Valid structured data when relevant.

Do not:

* Stuff keywords.
* Create thin location pages.
* Create fake course pages.
* Generate many repetitive articles.
* Hide keyword text.
* duplicate the same content across pages.
* use different language content under the same canonical URL.
* canonicalize Arabic pages to English pages or vice versa.

---

# 18. AI Search Discoverability

Improve AI-search discoverability through:

* Clear entity information.
* Consistent academy identity.
* Helpful public content.
* Well-structured HTML.
* Descriptive headings.
* Direct answers to common questions.
* Accurate course pages.
* Real instructor information.
* Real contact information.
* Original educational guides.
* Valid structured data.
* Crawlable links.
* Reliable citations and evidence where appropriate.

Do not use unsupported "AI SEO" tricks.

Do not create content solely to manipulate AI-generated results.

Allow public search crawlers only according to the owner's approved robots policy.

Treat search crawling and model-training crawling as separate policy decisions.

---

# 19. Structured Data Rules

Use JSON-LD only when it accurately matches visible content.

Potential schema types include:

* EducationalOrganization
* Organization
* LocalBusiness
* Course
* Person
* BreadcrumbList
* Article
* WebPage

Do not add:

* Fake AggregateRating.
* Fake Review.
* Fake Person.
* Unsupported Offer.
* Unsupported accreditation.
* Hidden information.
* Information that contradicts the visible page.

Validate structured data before release.

---

# 20. Public and Private Indexing

Public informational pages may be indexable.

Private or operational pages must not be indexed.

Possible noindex pages include:

* Registration completion pages.
* Private forms not intended for search.
* Internal search results.
* Authentication pages.
* Dashboard pages.
* Admin pages.
* EduCore internal pages.

Do not treat robots.txt as an access-control mechanism.

Private pages require actual authentication and authorization.

When a page uses a noindex meta tag, do not block crawler access to that page in a way that prevents the crawler from seeing the noindex instruction, unless an approved alternative strategy exists.

---

# 21. HTML, CSS, and JavaScript Rules

## HTML

Use semantic elements where appropriate:

* header
* nav
* main
* article
* section
* aside
* footer

Use real anchor links for navigation.

Do not use clickable div elements where an anchor or button is appropriate.

Keep important page content available in HTML where practical.

## CSS

Support RTL and LTR through logical properties:

* margin-inline-start
* margin-inline-end
* padding-inline
* inset-inline
* text-align: start
* text-align: end

Avoid unnecessary duplication of separate Arabic and English stylesheets.

Preserve approved brand colors, logo proportions, spacing character, and visual identity.

## JavaScript

Use JavaScript for:

* Interaction.
* Form behavior.
* Language preference.
* Progressive enhancement.
* Non-critical animations.

Do not depend on JavaScript alone for:

* Primary page content.
* Language-page discovery.
* Critical navigation.
* SEO metadata.
* Essential links.

Use defer for non-critical external scripts when safe.

---

# 22. Accessibility Rules

Validate:

* Keyboard navigation.
* Visible focus states.
* Form labels.
* Error announcements.
* Button names.
* Link names.
* Color contrast.
* Heading order.
* Landmark structure.
* Mobile navigation.
* RTL layout.
* Text resizing.
* Image alt text.
* ARIA labels.

ARIA labels must describe the actual action.

Avoid vague names such as:

* click here
* icon
* button
* more
* open

when a more descriptive label is possible.

---

# 23. Content Page Requirements

Before writing a page, prepare a page brief containing:

* Page name.
* Arabic URL.
* English URL.
* Primary audience.
* Main user question.
* Search intent.
* Primary topic.
* Supporting topics.
* Verified academy facts.
* Required sections.
* Call to action.
* Internal links.
* Structured data type.
* Missing information.

A course page should answer, when verified:

* What is the course?
* Who is it for?
* What will the student learn?
* What level is required?
* How is the student assessed?
* How is the course taught?
* What is the course duration?
* What schedules are available?
* Who teaches it?
* What happens after registration?
* How can the student register or ask for help?

Do not fabricate missing answers.

---

# 24. Internal Linking Rules

Create useful links between:

* Course overview and individual courses.
* Courses and placement testing.
* Courses and registration.
* Instructor pages and relevant courses.
* FAQ answers and detailed pages.
* Educational guides and related services.
* Contact pages and registration pages.

Use descriptive link text.

Avoid repetitive exact-match anchor text.

---

# 25. Performance Rules

Check:

* Image file sizes.
* Image dimensions.
* WebP or AVIF suitability.
* Lazy loading.
* Duplicate scripts.
* Unused libraries.
* Blocking JavaScript.
* External dependency risk.
* Font loading.
* Mobile performance.
* Layout shifts.
* Heavy animations.
* Three.js impact.

Do not remove visual effects automatically.

First measure their impact and propose a limited solution.

---

# 26. Required Validation

After implementation, run the checks relevant to the task.

## Functional

* Navigation works.
* Forms work.
* Registration works.
* API request reaches the expected destination.
* Success states work.
* Error states work.
* Duplicate handling works.
* Language switching works.
* Mobile navigation works.

## Content

* Facts match approved sources.
* Arabic is natural.
* English is natural.
* Terms match the glossary.
* No unsupported claims remain in the changed scope.
* No placeholder content appears as real.

## SEO

* Titles are unique.
* Descriptions match the page language.
* Canonicals are correct.
* hreflang is reciprocal.
* Sitemap uses canonical URLs.
* robots rules are intentional.
* Structured data validates.
* Internal links work.
* Redirects have no chains.

## Security

* No secrets are exposed.
* Private routes remain private.
* Internal data is not included in public files.
* API permissions are unchanged.
* EduCore security rules are preserved.

## Accessibility

* Keyboard use works.
* Form labels work.
* Focus styles are visible.
* RTL does not overflow.
* Buttons and links have clear names.
* Images have appropriate alt text.

---

# 27. Required Change Report

After every implementation task, report:

* Task scope.
* Files inspected.
* Files created.
* Files modified.
* Files moved.
* Files deleted.
* URLs added.
* URLs changed.
* Redirects added.
* Content added.
* Content removed.
* Claims requiring confirmation.
* Validation performed.
* Test results.
* Known limitations.
* Rollback instructions.

If no files were changed, state that clearly.

---

# 28. Prohibited Actions

Never:

* Modify the database schema for a public website content task.
* Change EduCore business logic without explicit instruction.
* Change financial or enrollment rules.
* Expose internal modules.
* Expose private student or guardian data.
* Expose credentials.
* Delete files outside the project.
* Run destructive system commands.
* Perform broad cleanup outside the requested scope.
* Replace the existing stack without approval.
* Publish unverified claims.
* Publish fake staff or testimonials.
* Create fake backlinks or reviews.
* Guarantee search rankings.
* Skip validation.
* silently change deployment configuration.
* continue into another phase without authorization.

---

# 29. Stop Conditions

Stop and report instead of guessing when:

* The canonical domain is unclear.
* Contact information conflicts.
* The production API behavior cannot be verified.
* A requested claim has no evidence.
* A URL migration lacks hosting support.
* A redirect cannot be implemented safely.
* A change could break registration.
* A requested public page would expose private information.
* The current task exceeds its approved phase.

Do not use a stop condition to avoid completing safe work within the approved scope.

---

# 30. Definition of Done

A task is complete only when:

* The requested scope is implemented.
* Unrelated functionality is unchanged.
* Facts are verified or clearly marked.
* Arabic and English quality is appropriate.
* Registration behavior is preserved.
* Security is preserved.
* SEO metadata is correct for the changed pages.
* Accessibility checks are completed.
* Validation results are reported.
* Rollback instructions are provided.

The specific phase or action to execute will always be supplied separately by the owner.

Do not infer permission to execute later phases from this skill.
