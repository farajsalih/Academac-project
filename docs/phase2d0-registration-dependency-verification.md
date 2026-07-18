# Phase 2D.0: Registration Dependency Verification

## 1. Current Architecture Proven from Code
The current active registration form (`login.html`) collects user input and relies on `script.js` to process the submission. 

**Backend Inconsistency Resolved**:
Earlier reports referenced a local API endpoint (`http://localhost:3000/api/leads/create`). However, direct inspection of the active files reveals that this endpoint is **not** used.
- **File Name**: `script.js`
- **Line Numbers**: 291-296
- **Code Excerpt**:
```javascript
// Send to Google Sheets (Example URL)
fetch('https://script.google.com/macros/s/AKfycbxGMNrY77f8FzaPBF4hwNuWG-IHF-bTtvduoPyo1GLAC12DN6P5XLODtQay31WI4Zd9Ow/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
```
- **Actual Fetch URL**: `https://script.google.com/macros/s/AKfycbxGMNrY77f8FzaPBF4hwNuWG-IHF-bTtvduoPyo1GLAC12DN6P5XLODtQay31WI4Zd9Ow/exec`
- **Request Method**: `POST`
- **Request Mode**: `no-cors`
- **Payload Construction**: Iteration over `new FormData(form)` to build a standard JavaScript object, which is then stringified.
- **Is Google Apps Script actually referenced?** Yes, it is the active fetch endpoint.
- **Is `/api/leads/create` still referenced?** It is entirely absent from `script.js`. It only exists within an unused patch file (`patch-script.js`) and historical markdown documentation. 
- **Do local and current files differ?** Yes. The earlier findings incorrectly analyzed `patch-script.js` instead of the active fetch logic inside `script.js`.

## 2. Exact `courseType` Dependency Chain
- **HTML Element**: `<select>`
- **ID**: `courseType`
- **Name**: `courseType`
- **Current Value Options**: `""` (اختر النوع), `"أونلاين"` (أونلاين), `"برايفت (خصوصي)"` (برايفت), `"حضوري"` (حضوري). *(Note: "أونلاين" has a missing leading quote in the HTML `value=أونلاين"`).*
- **Required**: Yes, the `required` attribute is present on the HTML element.
- **JavaScript References**: There are **no explicit JavaScript references** to `courseType` by name or ID.
- **Uses FormData?**: Yes, `script.js` uses `new FormData(form)`.
- **Explicitly reads `.value`?**: No. It relies entirely on standard `FormData` iteration.
- **Checks field during validation?**: Validation is handled generically by checking if elements with a `required` attribute are empty.
- **Null-reference error risk**: Removing the element will **not** cause a null-reference error because no code specifically targets `document.getElementById('courseType')`.
- **Manual mapping**: No manual mapping exists. 
- **Outgoing payload key**: `courseType` (derived automatically from the `name` attribute).

## 3. Backend and Data Dependencies
- **API Validation Schema**: None. The endpoint is a `no-cors` Google Apps Script macro which inherently lacks strict pre-flight schema validation.
- **Google Apps Script Field Mapping**: The script dynamically receives JSON. Missing keys typically result in blank spreadsheet cells.
- **Supabase / EduCore / Database constraints**: None apply to this immediate submission vector since it routes to a Google Sheet.
- **Nullable / Absent Behavior**: An absent value simply omits the `courseType` key from the JSON payload string. Standard spreadsheet appending handles missing keys gracefully by leaving the mapped column blank.

## 4. Safe Path Classification
**PATH_A_CONFIRMED**

The field can safely be removed entirely. Because `script.js` dynamically loops over whatever inputs are present in the DOM via `FormData`, completely removing the `<select name="courseType">` block will seamlessly remove it from validation loops and the outgoing JSON payload without causing any frontend exceptions.

## 5. Recommended Smallest Safe Implementation
1. **Target**: `login.html`
2. **Action**: Delete lines 569-581 (the `<!-- Course Type -->` block containing the `<select id="courseType">`).
3. **No changes required** to `script.js`.

## 6. Validation Plan
- Verify `courseType` no longer appears in `login.html`.
- Run a local form submission test to verify that `validateCurrentStep()` still successfully allows the user to advance through the wizard steps.
- Verify the outgoing network payload contains all other fields but cleanly omits `courseType`.
