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