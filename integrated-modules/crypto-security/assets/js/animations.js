// Copyright © 2025 Nícolas Ávila - All Rights Reserved
// Animation System for AVX Documentation

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Optionally unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with scroll-reveal class
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));
}

// Parallax effect for hero section
function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 500);
    });
}

// Smooth scroll to anchors
function initSmoothScroll() {
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
}

// Stagger animation for grid items
function initStaggerAnimation() {
    const cards = document.querySelectorAll('.module-card');
    cards.forEach((card, index) => {
        card.style.setProperty('--delay', `${index * 0.1}s`);
    });
}

// Performance metrics animation
function animateProgressBars() {
    const bars = document.querySelectorAll('.progress-bar');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const progress = bar.getAttribute('data-progress') || '100';
                bar.style.setProperty('--progress', `${progress}%`);
                bar.classList.add('animated');
                observer.unobserve(bar);
            }
        });
    });

    bars.forEach(bar => observer.observe(bar));
}

// Typing animation for code blocks
function initTypingAnimation() {
    const typewriters = document.querySelectorAll('.typewriter');

    typewriters.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.display = 'inline-block';

        let charIndex = 0;
        const speed = 50; // milliseconds per character

        function type() {
            if (charIndex < text.length) {
                element.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(type, speed);
            } else {
                element.classList.add('typing-complete');
            }
        }

        // Start typing when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setTimeout(type, 500);
                observer.disconnect();
            }
        });

        observer.observe(element);
    });
}

// Ripple effect for buttons
function initRippleEffect() {
    const buttons = document.querySelectorAll('.ripple-effect');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Animate numbers (count up effect)
function animateNumbers() {
    const numbers = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.textContent.replace(/\D/g, ''));
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16); // 60fps
                let current = 0;

                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        element.textContent = element.textContent.replace(/\d+/, target);
                        clearInterval(timer);
                    } else {
                        element.textContent = element.textContent.replace(/\d+/, Math.floor(current));
                    }
                }, 16);

                observer.unobserve(element);
            }
        });
    });

    numbers.forEach(num => observer.observe(num));
}

// Mouse parallax effect for cards
function initMouseParallax() {
    const cards = document.querySelectorAll('.module-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

// Initialize all animations
function initAnimations() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        console.log('Reduced motion preferred - skipping complex animations');
        return;
    }

    initScrollAnimations();
    initSmoothScroll();
    initStaggerAnimation();
    animateProgressBars();
    initTypingAnimation();
    initRippleEffect();
    animateNumbers();
    initMouseParallax();

    // Parallax can be heavy, so it's optional
    // initParallax();
}

// Export for global use
window.animations = {
    init: initAnimations,
    initScrollAnimations,
    initParallax,
    initSmoothScroll,
    animateProgressBars,
    animateNumbers
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
} else {
    initAnimations();
}
