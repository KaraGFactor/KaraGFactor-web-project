function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("product-card");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    // Hide items that don't match the filter
    x[i].style.display = "none";
    // Show items that do match
    if (x[i].className.indexOf(c) > -1) {
        x[i].style.display = "block";
    }
  }
}

// Ensure "Show all" is active by default
filterSelection("all");

// Simple Form Validation & Response
const subscribeForm = document.getElementById('subscribe-form');
if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const message = document.getElementById('form-message');
        message.textContent = "Thank you for subscribing! Check your email for a welcome guide.";
        message.style.color = "var(--deep-forest)";
        subscribeForm.reset();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic Validation Check
            const email = document.getElementById('email').value;
            if (email.includes('@')) {
                // Success State
                feedback.textContent = "Thank you! Our San Antonio team will reach out shortly.";
                feedback.style.backgroundColor = "#e8f5e9";
                feedback.style.color = "var(--deep-forest)";
                feedback.classList.remove('hidden');
                
                // Reset form
                contactForm.reset();
            } else {
                // Error State
                feedback.textContent = "Please enter a valid email address.";
                feedback.style.backgroundColor = "#ffebee";
                feedback.style.color = "#c62828";
                feedback.classList.remove('hidden');
            }
        });
    }
});

function filterSelection(category) {
    const cards = document.getElementsByClassName("product-card");
    const buttons = document.getElementsByClassName("filter-btn");

    // Update active button state
    for (let btn of buttons) {
        btn.classList.remove("active");
        if (btn.textContent.toLowerCase().includes(category) || (category === 'all' && btn.textContent.includes('Show All'))) {
            btn.classList.add("active");
        }
    }

    // Filter cards
    for (let card of cards) {
        if (category === "all") {
            card.style.display = "block";
        } else if (card.classList.contains(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}

