# Arabic Registration Copy Audit & Final Decisions
**File Audited:** `login.html` (Read-only mode)

This document classifies the existing Arabic wording in the registration wizard and outlines the finalized owner decisions for content updates during implementation.

## 1. Keep (Approved for Implementation)
- Core field labels and general headings: "الخطوة الأولى", "المعلومات الشخصية", "الاسم الكامل", "رقم الهاتف", "البريد الإلكتروني", etc.
- Goal Options: "دراسة أكاديمية", "تطوير وظيفي", "محادثة عامة", "هجرة وسفر"
- Navigation: "الخطوة التالية", "السابق", "إرسال الطلب", "العودة للرئيسية"
- Support: "تواصل معنا عبر واتساب", "هل تحتاج إلى مساعدة؟"
- Technical API Values: Values inside `<option value="...">` must remain unchanged to ensure backend compatibility.

## 2. Rewrite During Implementation (Brand Alignment)

### Identity instruction
- **Current:** "يرجى إدخال بياناتك كما تظهر في الهوية الرسمية."
- **Approved Replacement:** "يرجى إدخال بيانات صحيحة حتى يتمكن فريق الأكاديمية من التواصل معك."

### Schedule and payment instruction
- **Current:** "اختر ما يناسب جدولك وطريقة الدفع المفضلة."
- **Approved Replacement:** "اختر تفضيلاتك الأولية، وسيتم توضيح المواعيد والرسوم بعد مراجعة الطلب."

### Success message
- **Current:** "تم استلام طلبك بنجاح! سيقوم أحد مستشارينا الأكاديميين بالتواصل معك خلال 24 ساعة لتأكيد التفاصيل."
- **Approved Replacement:** 
  - Heading: "تم استلام طلب التسجيل بنجاح."
  - Text: "سيتواصل معك فريق الأكاديمية لمراجعة المستوى والأهداف وتوضيح البرنامج المقترح والرسوم الحالية والمواعيد المتاحة."

### Placement test wording
- **Current:** "اختبار تحديد مستوى"
- **Approved Replacement:** "مراجعة المستوى الحالي"

### Assistance wording
- **Current:** "دعم فني"
- **Approved Replacement:** "مساعدة في التسجيل"

### Security wording
- **Current:** "بيانات آمنة 100%"
- **Decision:** Remove completely. Do not replace with another absolute security claim.

## 3. Remove During Implementation
- **3D Character Messages:** Remove "أنت جميل ✨", "يومك رائع 🌸", "استمر أنت مبدع 💙", "وجودك يفرق 🤍".

## 4. Business Decisions Resolved

### Payment discount
- **Decision:** Remove the visible claim "خصم 5%". 
- **Approved Label:** Use only "دفعة واحدة". 
- **Technical Note:** Keep the API value unchanged only if it is already "دفعة واحدة". Do not modify backend finance logic.

### Flexible schedule labels
- **Decision:** Do not present flexibility as a promise from the academy.
- **Approved Labels:** 
  - "لدي مرونة في اختيار الأيام"
  - "لدي مرونة في اختيار الوقت"
- **Technical Note:** Existing technical API values may remain unchanged.
