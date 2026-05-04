document.addEventListener('DOMContentLoaded', () => {
    const gemForm = document.getElementById('gemForm');
    const display = document.getElementById('greetingDisplay');

    gemForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the page from refreshing

        const name = document.getElementById('userName').value;
        const interest = document.getElementById('interest').value;
        let recommendation = "";

        // Logic for personalized message
        if (interest === "history") {
            recommendation = "you should definitely check out the Hot Wells Ruins at dusk!";
        } else if (interest === "drinks") {
            recommendation = "Bar 1919 is calling your name. Ask for a custom old fashioned.";
        } else {
            recommendation = "the Japanese Tea Garden is the perfect morning escape.";
        }

        display.innerHTML = `<h4>Welcome, ${name}!</h4><p>Based on your interest, ${recommendation}</p>`;
        display.style.display = "block";
        
        gemForm.reset(); // Clears the form
    });
});