# Arabic RTL Implementation Notes
This document provides recommendations for the future front-end implementation of the Arabic version of the website. 
**No HTML or CSS modifications are applied at this phase.**

## 1. Document Level Attributes
- The `<html>` tag must include `lang="ar"` and `dir="rtl"` to ensure the browser engines, screen readers, and CSS frameworks naturally flip the layout and read the text correctly.

## 2. Text Alignment
- Most body text and headings should naturally align to the right (`text-align: right;` or Tailwind's default behavior under `dir="rtl"`). 
- Avoid forcing `text-align: right` globally if `dir="rtl"` correctly handles it, ensuring logical document flow.

## 3. RTL Navigation
- The main navigation bar should be mirrored. The logo is typically positioned on the right, and the navigation links flow to the left.
- Dropdown menus and flyouts should originate and align to the right side of their parent element.

## 4. Button and Icon Direction
- Icons that indicate directional movement (e.g., arrows) must be mirrored. A "Next" arrow should point left (`←`), and a "Previous" arrow should point right (`→`).
- Material Icons often require `.rotate-180` for directional icons when in RTL context, or the use of CSS logical properties (`margin-inline-start`, `padding-inline-end`).

## 5. Form-Field Alignment
- Form labels should align to the right.
- Input text should start from the right.
- Icons inside inputs (like the email icon) should move to the right side of the input field, with appropriate padding adjustments (`pl-10` becomes `pr-10` or use `ps-10` and `pe-4` logical properties).

## 6. Telephone and Email LTR Treatment
- Inputs that require English/Latin characters and numbers (Email, International Phone Numbers) must be forced to LTR (`dir="ltr"`) even within an RTL form.
- The country code selector and phone input container must be structured carefully to prevent the `+` sign or numbers from flipping awkwardly. 

## 7. Mixed Arabic/English Program Names
- When an English program name appears below or beside the Arabic title (e.g., `General English Program`), ensure it is wrapped in an element with `dir="ltr"` or relies on the browser's Unicode Bidirectional Algorithm natively.
- Using `<bdi>` or `<span dir="ltr">` is recommended for English strings embedded within Arabic paragraphs to prevent punctuation from jumping to the wrong side.

## 8. Punctuation
- Ensure Arabic punctuation marks are used (e.g., `،` instead of `,` and `؟` instead of `?`).
- Due to the Bidirectional Algorithm, trailing English punctuation at the end of an Arabic sentence might render incorrectly unless wrapped or handled via logical direction.

## 9. Numerals
- Determine whether the design will use Arabic numerals (1, 2, 3) or Eastern Arabic numerals (١, ٢, ٣).
- If standard Arabic numerals (1, 2, 3) are used, ensure they do not flip positions within text strings (e.g., "10:00 صباحًا" should not render as "00:10 صباحًا").

## 10. Mobile Layout
- Mobile off-canvas menus (hamburgers) should slide in from the right edge of the screen rather than the left.
- Swipe gestures (e.g., in carousels) should ideally be reversed, where swiping left advances to the "next" (leftward) item.

## 11. Arabic Font Readability
- Arabic typefaces require larger line heights (`line-height` or `leading`) and often slightly larger base font sizes compared to Latin fonts to maintain legibility.
- Ensure the chosen web font supports the weights necessary (Regular, Medium, Bold) to create proper visual hierarchy without relying on synthetic browser bolding.
- (Note: Font file selection and distribution are not part of this phase).
