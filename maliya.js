// --- Mobile Dropdown Menu Toggler ---
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

if (mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenu.classList.toggle('open');
    });
    
    // Auto collapse navbar on tracking link clicks across responsive viewports
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// --- Universal Smooth Scroll Implementation ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const elementId = this.getAttribute('href');
        const executionTarget = document.querySelector(elementId);
        
        if (executionTarget) {
            executionTarget.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// --- Simple Contact Lifecycle Confirmation Handler ---
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for getting in touch, message logic simulation executed correctly.');
        contactForm.reset();
    });
}
