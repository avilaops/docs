// Arxis Core Documentation - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
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

    // Fade in animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all feature cards
    document.querySelectorAll('.feature-card, .feature-block').forEach(el => {
        observer.observe(el);
    });

    // Mobile menu toggle (if needed)
    const createMobileMenu = () => {
        const header = document.querySelector('.header .container');
        const nav = document.querySelector('.nav-menu');
        
        if (window.innerWidth <= 768 && nav) {
            const menuBtn = document.createElement('button');
            menuBtn.className = 'mobile-menu-btn';
            menuBtn.innerHTML = '☰';
            menuBtn.style.cssText = 'background:none;border:none;color:var(--text);font-size:1.5rem;cursor:pointer;display:block;';
            
            menuBtn.addEventListener('click', () => {
                nav.classList.toggle('active');
            });
            
            if (!document.querySelector('.mobile-menu-btn')) {
                header.appendChild(menuBtn);
            }
        }
    };

    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);
});
