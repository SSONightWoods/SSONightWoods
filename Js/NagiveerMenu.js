// main.js - Wacht tot de DOM geladen is
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Toggle een 'active' klasse op de navigatiebalk op mobiel
            navLinks.classList.toggle('active');
        });
    }
});