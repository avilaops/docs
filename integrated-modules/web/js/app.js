// Avx Documentation JavaScript

// Translations
const translations = {
    'pt-BR': {
        title: 'Documentação Avx Web',
        subtitle: 'Ecossistema de tecnologias web de alta performance e segurança',
        overview: 'Visão Geral',
        modules: 'Módulos',
        types: 'Tipos Disponíveis',
        examples: 'Exemplos de Uso',
        api: 'Referência da API',
        performance: 'Performance',
        useCases: 'Casos de Uso',
        license: 'Licença',
        darkMode: '🌙 Modo Escuro',
        lightMode: '☀️ Modo Claro',
        selectLanguage: '🌍 Idioma',
        proprietary: 'Proprietária - Copyright © 2025 Nícolas Ávila'
    },
    'ru': {
        title: 'Документация Avx Web',
        subtitle: 'Экосистема высокопроизводительных и безопасных веб-технологий',
        overview: 'Обзор',
        modules: 'Модули',
        types: 'Доступные типы',
        examples: 'Примеры использования',
        api: 'Справка по API',
        performance: 'Производительность',
        useCases: 'Примеры использования',
        license: 'Лицензия',
        darkMode: '🌙 Темный режим',
        lightMode: '☀️ Светлый режим',
        selectLanguage: '🌍 Язык',
        proprietary: 'Собственность - Copyright © 2025 Nícolas Ávila'
    },
    'ja': {
        title: 'Avx Web ドキュメンテーション',
        subtitle: '高性能でセキュアなウェブ技術のエコシステム',
        overview: '概要',
        modules: 'モジュール',
        types: '利用可能な型',
        examples: '使用例',
        api: 'APIリファレンス',
        performance: 'パフォーマンス',
        useCases: 'ユースケース',
        license: 'ライセンス',
        darkMode: '🌙 ダークモード',
        lightMode: '☀️ ライトモード',
        selectLanguage: '🌍 言語',
        proprietary: 'プロプライエタリ - Copyright © 2025 Nícolas Ávila'
    },
    'zh-TW': {
        title: 'Avx Web 文檔',
        subtitle: '高性能和安全的網絡技術生態系統',
        overview: '概述',
        modules: '模組',
        types: '可用類型',
        examples: '使用範例',
        api: 'API 參考',
        performance: '效能',
        useCases: '使用案例',
        license: '授權',
        darkMode: '🌙 深色模式',
        lightMode: '☀️ 淺色模式',
        selectLanguage: '🌍 語言',
        proprietary: '專有 - 版權所有 © 2025 Nícolas Ávila'
    },
    'ur': {
        title: 'Avx Web دستاویزات',
        subtitle: 'اعلی کارکردگی اور محفوظ ویب ٹیکنالوجی کا ماحولیاتی نظام',
        overview: 'جائزہ',
        modules: 'ماڈیولز',
        types: 'دستیاب اقسام',
        examples: 'استعمال کی مثالیں',
        api: 'API حوالہ',
        performance: 'کارکردگی',
        useCases: 'استعمال کی صورتیں',
        license: 'لائسنس',
        darkMode: '🌙 تاریک موڈ',
        lightMode: '☀️ روشن موڈ',
        selectLanguage: '🌍 زبان',
        proprietary: 'ملکیتی - کاپی رائٹ © 2025 Nícolas Ávila'
    },
    'ar': {
        title: 'وثائق Avx Web',
        subtitle: 'نظام بيئي لتقنيات الويب عالية الأداء والآمنة',
        overview: 'نظرة عامة',
        modules: 'الوحدات',
        types: 'الأنواع المتاحة',
        examples: 'أمثلة الاستخدام',
        api: 'مرجع API',
        performance: 'الأداء',
        useCases: 'حالات الاستخدام',
        license: 'الترخيص',
        darkMode: '🌙 الوضع الداكن',
        lightMode: '☀️ الوضع الفاتح',
        selectLanguage: '🌍 اللغة',
        proprietary: 'ملكية - حقوق النشر © 2025 Nícolas Ávila'
    },
    'de': {
        title: 'Avx Web Dokumentation',
        subtitle: 'Ökosystem für leistungsstarke und sichere Webtechnologien',
        overview: 'Überblick',
        modules: 'Module',
        types: 'Verfügbare Typen',
        examples: 'Verwendungsbeispiele',
        api: 'API-Referenz',
        performance: 'Leistung',
        useCases: 'Anwendungsfälle',
        license: 'Lizenz',
        darkMode: '🌙 Dunkelmodus',
        lightMode: '☀️ Hellmodus',
        selectLanguage: '🌍 Sprache',
        proprietary: 'Proprietär - Copyright © 2025 Nícolas Ávila'
    },
    'fr': {
        title: 'Documentation Avx Web',
        subtitle: 'Écosystème de technologies web haute performance et sécurisées',
        overview: 'Vue d\'ensemble',
        modules: 'Modules',
        types: 'Types disponibles',
        examples: 'Exemples d\'utilisation',
        api: 'Référence API',
        performance: 'Performance',
        useCases: 'Cas d\'usage',
        license: 'Licence',
        darkMode: '🌙 Mode sombre',
        lightMode: '☀️ Mode clair',
        selectLanguage: '🌍 Langue',
        proprietary: 'Propriétaire - Copyright © 2025 Nícolas Ávila'
    },
    'lv': {
        title: 'Avx Web Dokumentācija',
        subtitle: 'Augstas veiktspējas un drošu tīmekļa tehnoloģiju ekosistēma',
        overview: 'Pārskats',
        modules: 'Moduļi',
        types: 'Pieejamie tipi',
        examples: 'Lietošanas piemēri',
        api: 'API atsauce',
        performance: 'Veiktspēja',
        useCases: 'Lietošanas gadījumi',
        license: 'Licence',
        darkMode: '🌙 Tumšais režīms',
        lightMode: '☀️ Gaišais režīms',
        selectLanguage: '🌍 Valoda',
        proprietary: 'īpašums - Autortiesības © 2025 Nícolas Ávila'
    },
    'uz': {
        title: 'Avx Web Hujjatlari',
        subtitle: 'Yuqori unumli va xavfsiz veb texnologiyalar ekotizimi',
        overview: 'Umumiy ko\'rinish',
        modules: 'Modullar',
        types: 'Mavjud turlar',
        examples: 'Foydalanish misollari',
        api: 'API ma\'lumotnomasi',
        performance: 'Unumdorlik',
        useCases: 'Foydalanish holatlari',
        license: 'Litsenziya',
        darkMode: '🌙 Tungi rejim',
        lightMode: '☀️ Kunduzgi rejim',
        selectLanguage: '🌍 Til',
        proprietary: 'Mulk - Mualliflik huquqi © 2025 Nícolas Ávila'
    },
    'es': {
        title: 'Documentación Avx Web',
        subtitle: 'Ecosistema de tecnologías web de alto rendimiento y seguridad',
        overview: 'Visión General',
        modules: 'Módulos',
        types: 'Tipos Disponibles',
        examples: 'Ejemplos de Uso',
        api: 'Referencia de API',
        performance: 'Rendimiento',
        useCases: 'Casos de Uso',
        license: 'Licencia',
        darkMode: '🌙 Modo Oscuro',
        lightMode: '☀️ Modo Claro',
        selectLanguage: '🌍 Idioma',
        proprietary: 'Propietario - Copyright © 2025 Nícolas Ávila'
    }
};

const languageNames = {
    'pt-BR': '🇧🇷 Português',
    'ru': '🇷🇺 Русский',
    'ja': '🇯🇵 日本語',
    'zh-TW': '🇹🇼 繁體中文',
    'ur': '🇵🇰 اردو',
    'ar': '🇸🇦 العربية',
    'de': '🇩🇪 Deutsch',
    'fr': '🇨🇭 Français',
    'lv': '🇱🇻 Latviešu',
    'uz': '🇺🇿 O\'zbek',
    'es': '🇪🇸 Español'
};

class AvxDocumentation {
    constructor() {
        this.currentLanguage = localStorage.getItem('avx-language') || 'pt-BR';
        this.currentTheme = localStorage.getItem('avx-theme') || 'light';
        this.init();
    }

    init() {
        this.setupTheme();
        this.setupLanguageSelector();
        this.setupThemeToggle();
        this.updateContent();
        this.setupAnimations();
    }

    setupTheme() {
        document.body.className = `${this.currentTheme}-theme`;
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
            this.updateThemeButton();
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('avx-theme', this.currentTheme);
        this.setupTheme();
        this.updateThemeButton();
    }

    updateThemeButton() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const t = translations[this.currentLanguage];
            themeToggle.textContent = this.currentTheme === 'light' ? t.darkMode : t.lightMode;
        }
    }

    setupLanguageSelector() {
        const languageBtn = document.getElementById('language-btn');
        const languageDropdown = document.getElementById('language-dropdown');

        if (languageBtn) {
            languageBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                languageDropdown.classList.toggle('active');
            });
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            if (languageDropdown) {
                languageDropdown.classList.remove('active');
            }
        });

        // Create language options
        if (languageDropdown) {
            languageDropdown.innerHTML = '';
            Object.entries(languageNames).forEach(([code, name]) => {
                const option = document.createElement('div');
                option.className = 'language-option';
                option.textContent = name;
                option.dataset.lang = code;
                option.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.changeLanguage(code);
                    languageDropdown.classList.remove('active');
                });
                languageDropdown.appendChild(option);
            });
        }

        this.updateLanguageButton();
    }

    changeLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('avx-language', lang);
        this.updateContent();
        this.updateLanguageButton();
    }

    updateLanguageButton() {
        const languageBtn = document.getElementById('language-btn');
        if (languageBtn) {
            const t = translations[this.currentLanguage];
            languageBtn.innerHTML = `${t.selectLanguage} <span class="arrow">▼</span>`;
        }
    }

    updateContent() {
        const t = translations[this.currentLanguage];
        
        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            if (t[key]) {
                element.textContent = t[key];
            }
        });

        // Update theme button
        this.updateThemeButton();
    }

    setupAnimations() {
        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeIn 0.8s ease forwards';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.section, .card').forEach(el => {
            observer.observe(el);
        });
    }

    // Utility function to create code blocks with syntax highlighting
    createCodeBlock(code, language = 'rust') {
        const pre = document.createElement('pre');
        const codeEl = document.createElement('code');
        codeEl.className = `language-${language}`;
        codeEl.textContent = code;
        pre.appendChild(codeEl);
        return pre;
    }

    // Utility function to create tables
    createTable(headers, rows) {
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        // Headers
        const headerRow = document.createElement('tr');
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);

        // Rows
        rows.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });

        table.appendChild(thead);
        table.appendChild(tbody);
        return table;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.avxDocs = new AvxDocumentation();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AvxDocumentation;
}
