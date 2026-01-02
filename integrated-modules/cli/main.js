// Avx Documentation JavaScript

// Theme Toggle
function toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', newTheme);

    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.textContent = newTheme === 'light' ? '🌙' : '☀️';
    }

    localStorage.setItem('theme', newTheme);
}

// Initialize Theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.textContent = savedTheme === 'light' ? '🌙' : '☀️';
    }
}

// Smooth Scroll
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

// Highlight Active Section
function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.sidebar-nav a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.background = '';
            link.style.borderLeftColor = 'transparent';
            if (link.getAttribute('href') === '#' + current) {
                link.style.background = 'var(--hover-bg)';
                link.style.borderLeftColor = 'var(--primary-orange)';
            }
        });
    });
}

// Copy Code to Clipboard
function initCodeCopy() {
    document.querySelectorAll('.code-block').forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-btn';
        button.textContent = '📋';
        button.title = 'Copiar código';
        button.style.cssText = `
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: var(--primary-orange);
            border: none;
            color: white;
            padding: 0.3rem 0.6rem;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
        `;

        block.style.position = 'relative';
        block.appendChild(button);

        button.addEventListener('click', () => {
            const code = block.querySelector('code').textContent;
            navigator.clipboard.writeText(code).then(() => {
                button.textContent = '✓';
                setTimeout(() => {
                    button.textContent = '📋';
                }, 2000);
            });
        });
    });
}

// Language Selector
function changeLanguage(lang) {
    // This would load translations from a translations.json file
    // For now, it just stores the preference
    localStorage.setItem('language', lang);
    console.log('Language changed to:', lang);
    // In a real implementation, you would reload the page content
    // or dynamically update text content based on translations
}

// Search Functionality (if implemented)
function initSearch() {
    const searchInput = document.getElementById('search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const sections = document.querySelectorAll('.content section');

        sections.forEach(section => {
            const text = section.textContent.toLowerCase();
            if (text.includes(query) || query === '') {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const navToggle = document.createElement('button');
    navToggle.className = 'mobile-menu-toggle';
    navToggle.textContent = '☰';
    navToggle.style.cssText = `
        display: none;
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        font-size: 1.5rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
        border-radius: 5px;
    `;

    const header = document.querySelector('.nav-header');
    if (header) {
        header.appendChild(navToggle);
    }

    // Show on mobile
    if (window.innerWidth <= 768) {
        navToggle.style.display = 'block';
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
            navToggle.style.display = 'block';
        } else {
            navToggle.style.display = 'none';
        }
    });

    navToggle.addEventListener('click', () => {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
        }
    });
}

// Initialize Everything on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSmoothScroll();
    highlightActiveSection();
    initCodeCopy();
    initSearch();
    initMobileMenu();

    console.log('Avx Docs initialized ✨');
});

// Export functions for inline use
window.toggleTheme = toggleTheme;
window.changeLanguage = changeLanguage;
