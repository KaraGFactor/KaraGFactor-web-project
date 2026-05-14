document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const primaryNav = document.querySelector('nav[aria-label="Primary navigation"]');
    const contactForm = document.getElementById('contact-form');
    const subscribeForm = document.getElementById('subscribe-form');
    const filterContainer = document.getElementById('filter-container');
    const navLinks = document.querySelectorAll('.nav-menu a');

    const closeMobileNav = () => {
        if (navToggle && primaryNav && navToggle.getAttribute('aria-expanded') === 'true') {
            navToggle.setAttribute('aria-expanded', 'false');
            primaryNav.classList.remove('nav-open');
        }
    };

    if (navToggle && primaryNav) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!isExpanded));
            primaryNav.classList.toggle('nav-open');
        });
    }

    if (navLinks.length) {
        navLinks.forEach((link) => {
            link.addEventListener('click', closeMobileNav);
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMobileNav();
    });

    // ── Contact form → Formspree ──
    if (contactForm) {
        const successMsg = document.getElementById('form-success');
        const errorMsg   = document.getElementById('form-error');
        const btnText    = document.getElementById('btn-text');
        const btnSpinner = document.getElementById('btn-spinner');
        const submitBtn  = document.getElementById('submit-btn');

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Show loading state
            submitBtn.disabled       = true;
            btnText.style.display    = 'none';
            btnSpinner.style.display = 'inline';

            fetch('https://formspree.io/f/xojrowgw', {
                method:  'POST',
                body:    new FormData(contactForm),
                headers: { 'Accept': 'application/json' }
            })
            .then(function (res) {
                if (res.ok) {
                    contactForm.reset();
                    contactForm.style.display    = 'none';
                    successMsg.style.display     = 'block';
                    successMsg.focus();
                } else {
                    errorMsg.style.display = 'block';
                    errorMsg.focus();
                }
            })
            .catch(function () {
                errorMsg.style.display = 'block';
                errorMsg.focus();
            })
            .finally(function () {
                submitBtn.disabled       = false;
                btnText.style.display    = 'inline';
                btnSpinner.style.display = 'none';
            });
        });
    }

    // ── Subscribe form ──
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const message = document.getElementById('form-message');
            if (message) {
                message.textContent = 'Thank you for subscribing! Check your email for a welcome guide.';
                message.style.color = 'var(--deep-forest)';
                subscribeForm.reset();
            }
        });
    }

    // ── Product filter ──
    if (filterContainer) {
        filterContainer.addEventListener('click', (event) => {
            const button = event.target.closest('.filter-btn');
            if (button && button.dataset.category) {
                filterSelection(button.dataset.category);
            }
        });
    }

    filterSelection('all');
});

function filterSelection(category) {
    const cards   = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });

    cards.forEach((card) => {
        card.style.display = (category === 'all' || card.classList.contains(category)) ? 'block' : 'none';
    });
}