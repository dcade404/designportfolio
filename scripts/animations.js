// Initialize smooth scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Portfolio cards animation
gsap.utils.toArray('.portfolio-box').forEach(card => {
    gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            end: 'top center',
            scrub: 1
        }
    });
});

// Hero section animation
gsap.from('.hero h1', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.hero p', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.3,
    ease: 'power3.out'
});

// Scroll progress bar
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollProgress.style.width = `${scrollPercent}%`;
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
