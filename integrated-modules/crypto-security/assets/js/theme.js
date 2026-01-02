// Copyright © 2025 Nícolas Ávila - All Rights Reserved
// Theme System for AVX Documentation

// Get saved theme or system preference
function getDefaultTheme() {
    const saved = localStorage.getItem('avx-theme');
    if (saved) return saved;

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }

    return 'light';
}

// Initialize theme
function initTheme() {
    const theme = getDefaultTheme();
    applyTheme(theme);

    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.addEventListener('click', toggleTheme);
    }

    // Listen for system theme changes
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('avx-theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
}

// Apply theme
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('avx-theme', theme);

    // Update meta theme-color for mobile browsers
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
        if (theme === 'dark') {
            metaTheme.setAttribute('content', '#0D0D0F');
        } else {
            metaTheme.setAttribute('content', '#FAFAFA');
        }
    }
}

// Toggle theme
function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);

    // Add animation effect to toggle button
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            toggle.style.transform = '';
        }, 300);
    }
}

// Export for global use
window.theme = {
    init: initTheme,
    toggle: toggleTheme,
    apply: applyTheme,
    get: () => document.documentElement.getAttribute('data-theme')
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
} else {
    initTheme();
}
