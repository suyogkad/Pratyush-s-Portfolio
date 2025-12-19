// Initialize Animate on Scroll
AOS.init({
    duration: 1000,
    once: true,
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 12, 0.95)';
        nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    } else {
        nav.style.background = 'transparent';
        nav.style.borderBottom = 'none';
    }
});

// Smooth Scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});