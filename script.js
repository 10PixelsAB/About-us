// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Reveal animations on scroll
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe reveal elements
document.querySelectorAll('.reveal-text, .reveal-card').forEach(element => {
    observer.observe(element);
});

// Animate floating pixels
const pixels = document.querySelectorAll('.pixel');
pixels.forEach(pixel => {
    // Random initial position
    pixel.style.transform = `translate(${Math.random() * 100}px, ${Math.random() * 100}px)`;
});

// Parallax effect for hero section
const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
    hero.style.backgroundPosition = `50% ${scrolled * 0.5}px`;
}); 