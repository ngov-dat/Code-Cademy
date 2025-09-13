// Updated script.js: Enhanced scroll animations to include new sections (experience points and testimonials). Added simple fade-in on scroll for all cards and points. Retained existing functionality.

document.addEventListener('DOMContentLoaded', function() {
    // Existing code for mobile nav, form, search, etc. remains...

    // Enhanced Scroll Animations
    addScrollAnimations();
});

function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Unobserve after animation to prevent repeat
            }
        });
    }, observerOptions);

    // Target all animatable elements, including new ones
    const animateElements = document.querySelectorAll('.course-card, .experience-point, .testimonial-card, .stat-item');
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Existing helper functions remain...

