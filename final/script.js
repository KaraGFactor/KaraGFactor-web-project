

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const primaryNav = document.querySelector('nav[aria-label="Primary navigation"]');
    const contactForm = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
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
        if (event.key === 'Escape') {
            closeMobileNav();
        }
    });

    if (contactForm && feedback) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = document.getElementById('email');
            const emailValue = emailInput ? emailInput.value.trim() : '';
            const isValidEmail = emailInput ? emailInput.checkValidity() : false;

            if (isValidEmail) {
                showFeedback(feedback, 'Thank you! Our San Antonio team will reach out shortly.', 'success');
                contactForm.reset();
            } else {
                showFeedback(feedback, 'Please enter a valid email address.', 'error');
            }
        });
    }

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

function showFeedback(container, message, type) {
    container.textContent = message;
    container.classList.remove('hidden', 'success', 'error');
    container.classList.add(type);
    container.style.backgroundColor = type === 'success' ? '#e8f5e9' : '#ffebee';
    container.style.color = type === 'success' ? 'var(--deep-forest)' : '#c62828';
}

function filterSelection(category) {
    const cards = document.querySelectorAll('.product-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });

    cards.forEach((card) => {
        const showCard = category === 'all' || card.classList.contains(category);
        card.style.display = showCard ? 'block' : 'none';
    });
}

