/* ====================================
   WIZARD FORM LOGIC - FIXED
   ==================================== */
document.addEventListener('DOMContentLoaded', () => {

    // --- State ---
    let currentStep = 1;
    const totalSteps = 4; // Updated to match HTML: 4 steps + Thank You

    // --- DOM Elements ---
    const form = document.getElementById('eduForm');
    const stepContents = document.querySelectorAll('.step-content');
    const stepIndicators = document.querySelectorAll('.step-indicator');
    const navButtons = document.getElementById('navButtons');
    const btnNext = document.querySelector('.btn-next');
    const btnPrev = document.querySelector('.btn-prev');
    const btnSubmit = document.querySelector('.btn-submit');

    const loadingOverlay = document.getElementById('loadingOverlay');
    const confettiContainer = document.getElementById('confettiContainer');

    // --- Dynamic Elements (Conditional Logic) ---
    // Section 2
    const nationalitySelect = document.getElementById('nationality');
    const countrySelect = document.getElementById('country');
    const provinceGroup = document.getElementById('provinceGroup');
    const provinceSelect = document.getElementById('province');

    // --- Provinces Data ---
    const provincesData = {
        'الأردن': ['عمان', 'إربد', 'الزرقاء', 'المفرق', 'عجلون', 'جرش', 'مادبا', 'البلقاء', 'الكرك', 'الطفيلة', 'معان', 'العقبة'],
        'السعودية': ['الرياض', 'مكة المكرمة', 'المدينة المنورة', 'القصيم', 'الشرقية', 'عسير', 'تبوك', 'حائل', 'الحدود الشمالية', 'جازان', 'نجران', 'الباحة', 'الجوف'],
        'الإمارات': ['أبو ظبي', 'دبي', 'الشارقة', 'عجمان', 'أم القيوين', 'رأس الخيمة', 'الفجيرة'],
        'مصر': ['القاهرة', 'الجيزة', 'الإسكندرية', 'الدقهلية', 'البحر الأحمر', 'البحيرة', 'الفيوم'],
    };

    // --- Initialization ---
    function init() {
        if (!form) return; // Guard clause
        updateUI();
        setupEventListeners();
    }

    // --- Navigation Functions ---

    function updateUI() {
        // 1. Show/Hide Step Content
        stepContents.forEach(step => {
            if (step.id === `step-${currentStep}`) {
                step.classList.remove('hidden');
                step.classList.add('active');
            } else if (step.id === 'thankyouPage' && currentStep > totalSteps) {
                step.classList.remove('hidden');
            } else {
                step.classList.add('hidden');
                step.classList.remove('active');
            }
        });

        // 2. Hide Navigation on Thank You Page
        if (currentStep > totalSteps) {
            navButtons.style.display = 'none';
            return;
        }

        // 3. Update Sidebar Indicators
        stepIndicators.forEach(indicator => {
            const stepNum = parseInt(indicator.dataset.step);
            const circle = indicator.querySelector('.indicator-circle');
            const textDiv = indicator.querySelector('.flex.flex-col');
            const icon = indicator.querySelector('.material-icons');

            // Reset classes (keeping base structure)
            circle.className = 'indicator-circle w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300';
            textDiv.style.opacity = '0.6';

            if (stepNum === currentStep) {
                // Active
                circle.classList.add('bg-white', 'text-primary', 'border-4', 'border-primary', 'step-active-glow');
                icon.textContent = getStepIcon(stepNum);
                textDiv.style.opacity = '1';
                indicator.classList.add('scale-105');
            } else if (stepNum < currentStep) {
                // Completed
                circle.classList.add('bg-primary', 'text-white', 'border-2', 'border-white/20');
                icon.textContent = 'check';
                textDiv.style.opacity = '0.8';
                indicator.classList.remove('scale-105');
            } else {
                // Future
                circle.classList.add('bg-primary/40', 'text-white/60', 'border-2', 'border-white/20', 'backdrop-blur-sm');
                icon.textContent = getStepIcon(stepNum);
                indicator.classList.remove('scale-105');
            }
        });

        // 4. Update Buttons
        if (currentStep === 1) {
            btnPrev.classList.add('hidden');
        } else {
            btnPrev.classList.remove('hidden');
        }

        if (currentStep === totalSteps) {
            btnNext.classList.add('hidden');
            btnSubmit.classList.remove('hidden');
        } else {
            btnNext.classList.remove('hidden');
            btnSubmit.classList.add('hidden');
        }
    }

    function getStepIcon(num) {
        switch (num) {
            case 1: return 'person';
            case 2: return 'public';
            case 3: return 'flag';
            case 4: return 'check_circle';
            default: return 'circle';
        }
    }

    function validateCurrentStep() {
        const currentStepEl = document.getElementById(`step-${currentStep}`);
        if (!currentStepEl) return true;

        const inputs = Array.from(currentStepEl.querySelectorAll('input, select, textarea')).filter(input => {
            // Check visibility by ensuring closest parent isn't hidden
            return !input.closest('.hidden');
        });

        let isValid = true;
        let firstInvalid = null;

        inputs.forEach(input => {
            let inputValid = true;

            // Check required
            if (input.hasAttribute('required') && !input.value.trim()) {
                inputValid = false;
                // Special check for radio/checkbox groups
                if ((input.type === 'radio' || input.type === 'checkbox')) {
                    const groupName = input.name;
                    const groupChecked = currentStepEl.querySelector(`input[name="${groupName}"]:checked`);
                    if (groupChecked) inputValid = true;
                }
            }

            // Check email
            else if (input.type === 'email' && input.value && !input.value.includes('@')) {
                inputValid = false;
            }
            // Check minlength
            else if (input.minLength > 0 && input.value.length < input.minLength) {
                inputValid = false;
            }

            if (!inputValid) {
                isValid = false;
                highlightError(input);
                if (!firstInvalid) firstInvalid = input;
            } else {
                clearError(input);
            }
        });

        if (firstInvalid) {
            if (firstInvalid.type === 'radio' || firstInvalid.type === 'checkbox') {
                firstInvalid.closest('div').scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                firstInvalid.focus();
            }
        }

        return isValid;
    }

    function highlightError(el) {
        if (el.type === 'radio' || el.type === 'checkbox') {
            // Find a suitable container to highlight
            const container = el.closest('.grid') || el.parentElement.parentElement;
            if (container) {
                container.classList.add('shake');
                container.style.border = '1px dashed #E11D48';
                container.style.padding = '10px';
                container.style.borderRadius = '8px';
                setTimeout(() => container.classList.remove('shake'), 500);
            }
        } else {
            el.classList.add('border-primary', 'ring-1', 'ring-primary', 'shake');
            el.classList.remove('border-zinc-200');
            setTimeout(() => el.classList.remove('shake'), 500);
        }
    }

    function clearError(el) {
        if (el.type === 'radio' || el.type === 'checkbox') {
            const container = el.closest('.grid') || el.parentElement.parentElement;
            if (container) {
                container.style.border = 'none';
                container.style.padding = '0';
            }
        } else {
            el.classList.remove('border-primary', 'ring-1', 'ring-primary');
            el.classList.add('border-zinc-200');
        }
    }

    // --- Interactive Logic ---
    function setupEventListeners() {

        // 1. Country -> Provinces
        if (countrySelect && provinceSelect) {
            countrySelect.addEventListener('change', (e) => {
                const val = e.target.value;
                const provinces = provincesData[val] || [];

                // Reset Province
                provinceSelect.innerHTML = '<option value="">اختر المنطقة</option>';

                if (provinces.length > 0) {
                    provinceGroup.classList.remove('hidden');
                    provinceSelect.setAttribute('required', 'true');
                    provinces.forEach(p => {
                        const opt = document.createElement('option');
                        opt.value = p;
                        opt.textContent = p;
                        provinceSelect.appendChild(opt);
                    });
                } else {
                    provinceGroup.classList.add('hidden');
                    provinceSelect.removeAttribute('required');
                }
            });
        }

        // --- Navigation Buttons ---
        if (btnNext) {
            btnNext.addEventListener('click', () => {
                if (validateCurrentStep()) {
                    currentStep++;
                    updateUI();
                    window.scrollTo(0, 0);
                }
            });
        }

        if (btnPrev) {
            btnPrev.addEventListener('click', () => {
                if (currentStep > 1) {
                    currentStep--;
                    updateUI();
                    window.scrollTo(0, 0);
                }
            });
        }

        if (form) {
            form.addEventListener('submit', handleFormSubmit);
        }
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        if (validateCurrentStep()) {
            if (loadingOverlay) loadingOverlay.style.display = 'flex';

            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                if (data[key]) {
                    if (!Array.isArray(data[key])) {
                        data[key] = [data[key]];
                    }
                    data[key].push(value);
                } else {
                    data[key] = value;
                }
            });

            // Handle phone with country code
            if (data['countryCode'] && data['phone']) {
                const code = data['countryCode'].replace('+', '');
                data['phone'] = code + data['phone'];
                // don't delete countryCode if you want to keep it separate or just keep phone
            }

            data['timestamp'] = new Date().toISOString();

            // Send to Google Sheets (Example URL)
            fetch('https://script.google.com/macros/s/AKfycbxGMNrY77f8FzaPBF4hwNuWG-IHF-bTtvduoPyo1GLAC12DN6P5XLODtQay31WI4Zd9Ow/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(() => {
                    setTimeout(() => {
                        if (loadingOverlay) loadingOverlay.style.display = 'none';
                        currentStep++;
                        updateUI();
                        startConfetti();
                        playSuccessSound();
                    }, 1500);
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    if (loadingOverlay) loadingOverlay.style.display = 'none';
                    alert('حدث خطأ. يرجى المحاولة لاحقاً.');
                });
        }
    }

    // Initialize
    init();

});


// --- Utils ---
function startConfetti() {
    const container = document.getElementById('confettiContainer');
    if (!container) return;
    const colors = ['#E11D48', '#0782c7', '#f3a609', '#10B981'];

    for (let i = 0; i < 150; i++) {
        const div = document.createElement('div');
        div.classList.add('confetti');
        div.style.left = Math.random() * 100 + '%';
        div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        div.style.animationDuration = (Math.random() * 3 + 2) + 's';
        div.style.animationDelay = (Math.random() * 2) + 's';
        container.appendChild(div);
    }
}

function playSuccessSound() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        const startTime = ctx.currentTime + (i * 0.1);
        const duration = 1.5;
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.05, startTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + duration);
    });
}
