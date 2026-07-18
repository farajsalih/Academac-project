# Registration Field Mapping

This document maps the active fields in the `Coffee_Mood` frontend (`login.html`) to the authoritative `EDUCore` backend API schema for lead creation (`/api/leads/create`).

## Active Field Mappings

| Visible Label | HTML ID | HTML Name | Required? | Current Format | Target API Key | Transformation / Action | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| الاسم الكامل | `fullName` | `fullName` | Yes | String | `full_name` | Direct map | Sent |
| رقم الهاتف | `phone` | `phone` | Yes | String (Numeric) | `phone` | `countryCode` + `phone` | Sent |
| رمز البلد | `countryCode` | `countryCode` | Yes | String (+xxx) | N/A | Prepended to `phone` | Omitted as separate field |
| البريد الإلكتروني | `email` | `email` | Yes | String | `email` | Direct map | Sent |
| الجنسية | `nationality` | `nationality` | Yes | String | `nationality` | Uses `nationalityOther` if "أخرى" | Sent |
| بلد الإقامة | `country` | `country` | Yes | String | `country` | Direct map | Sent |
| المحافظة / المدينة | `province` | `province` | Conditional | String | `city` | Direct map | Sent |
| الهدف من الدراسة | N/A (radio) | `goal` | Yes | String | `learning_goal` | Direct map | Sent |
| مستواك الحالي | `level` | `level` | Yes | String | `current_english_level` | Direct map | Sent |
| الأيام المفضلة | `days` | `days` | Yes | String | `preferred_schedule` | Direct map | Sent |
| الوقت المناسب | `time` | `time` | Yes | String | `preferred_time` | Direct map | Sent |
| طريقة الدفع | `paymentMethod`| `paymentMethod`| Yes | String | `payment_method` | Direct map | Sent |
| نظام الدفع | N/A (radio) | `paymentPlan` | Yes | String | `payment_plan` | Direct map | Sent |

## Omitted Fields

| Field Name | Reason |
| :--- | :--- |
| `courseType` | Removed to eliminate delivery-mode selector. Must not be sent. |
| `preferred_program_type` | There is no explicit course selector on the public form. It must not be fabricated. |
| `timestamp` | Legacy Google Sheets field. Not required by API. |

## Course Selection Note

* The generic registration form intentionally does not require a course choice.
* The academy recommends a suitable program after reviewing level and learning goals.
* `preferred_program_type` remains omitted.
* Future course-page registration links may pass optional program-interest context only after a separate API-contract review.
