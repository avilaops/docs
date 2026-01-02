/**
 * Avx Documentation JavaScript
 * Copyright © 2025 Nícolas Ávila - All Rights Reserved
 * Proprietary Software - Avx Ecosystem
 */

// Translations Database
const translations = {
  'pt-BR': {
    title: 'Documentação Avx Distributed Systems',
    subtitle: 'Sistema Distribuído Empresarial de Alta Performance',
    overview: 'Visão Geral',
    modules: 'Módulos',
    types: 'Tipos Disponíveis',
    examples: 'Exemplos de Uso',
    api: 'Referência da API',
    performance: 'Performance',
    useCases: 'Casos de Uso',
    license: 'Licença',
    darkMode: 'Modo Escuro',
    lightMode: 'Modo Claro',
    language: 'Idioma'
  },
  'ru': {
    title: 'Документация Avx Distributed Systems',
    subtitle: 'Высокопроизводительная корпоративная распределенная система',
    overview: 'Обзор',
    modules: 'Модули',
    types: 'Доступные типы',
    examples: 'Примеры использования',
    api: 'Справка по API',
    performance: 'Производительность',
    useCases: 'Сценарии использования',
    license: 'Лицензия',
    darkMode: 'Темный режим',
    lightMode: 'Светлый режим',
    language: 'Язык'
  },
  'ja': {
    title: 'Avx Distributed Systems ドキュメント',
    subtitle: 'ハイパフォーマンスエンタープライズ分散システム',
    overview: '概要',
    modules: 'モジュール',
    types: '利用可能な型',
    examples: '使用例',
    api: 'APIリファレンス',
    performance: 'パフォーマンス',
    useCases: 'ユースケース',
    license: 'ライセンス',
    darkMode: 'ダークモード',
    lightMode: 'ライトモード',
    language: '言語'
  },
  'zh-TW': {
    title: 'Avx Distributed Systems 文檔',
    subtitle: '高性能企業分佈式系統',
    overview: '概述',
    modules: '模組',
    types: '可用類型',
    examples: '使用範例',
    api: 'API 參考',
    performance: '性能',
    useCases: '使用案例',
    license: '授權',
    darkMode: '暗黑模式',
    lightMode: '亮色模式',
    language: '語言'
  },
  'ur': {
    title: 'Avx Distributed Systems دستاویزات',
    subtitle: 'اعلی کارکردگی انٹرپرائز تقسیم شدہ نظام',
    overview: 'جائزہ',
    modules: 'ماڈیولز',
    types: 'دستیاب اقسام',
    examples: 'استعمال کی مثالیں',
    api: 'API حوالہ',
    performance: 'کارکردگی',
    useCases: 'استعمال کے معاملات',
    license: 'لائسنس',
    darkMode: 'تاریک موڈ',
    lightMode: 'روشنی موڈ',
    language: 'زبان'
  },
  'ar': {
    title: 'وثائق Avx Distributed Systems',
    subtitle: 'نظام موزع عالي الأداء للمؤسسات',
    overview: 'نظرة عامة',
    modules: 'وحدات',
    types: 'الأنواع المتاحة',
    examples: 'أمثلة الاستخدام',
    api: 'مرجع API',
    performance: 'الأداء',
    useCases: 'حالات الاستخدام',
    license: 'الترخيص',
    darkMode: 'الوضع الداكن',
    lightMode: 'الوضع الفاتح',
    language: 'اللغة'
  },
  'de': {
    title: 'Avx Distributed Systems Dokumentation',
    subtitle: 'Hochleistungs-Unternehmensverteiltes System',
    overview: 'Übersicht',
    modules: 'Module',
    types: 'Verfügbare Typen',
    examples: 'Verwendungsbeispiele',
    api: 'API-Referenz',
    performance: 'Leistung',
    useCases: 'Anwendungsfälle',
    license: 'Lizenz',
    darkMode: 'Dunkler Modus',
    lightMode: 'Heller Modus',
    language: 'Sprache'
  },
  'fr': {
    title: 'Documentation Avx Distributed Systems',
    subtitle: 'Système Distribué d\'Entreprise Haute Performance',
    overview: 'Aperçu',
    modules: 'Modules',
    types: 'Types Disponibles',
    examples: 'Exemples d\'Utilisation',
    api: 'Référence API',
    performance: 'Performance',
    useCases: 'Cas d\'Usage',
    license: 'Licence',
    darkMode: 'Mode Sombre',
    lightMode: 'Mode Clair',
    language: 'Langue'
  },
  'lv': {
    title: 'Avx Distributed Systems Dokumentācija',
    subtitle: 'Augstas veiktspējas uzņēmumu izplatīta sistēma',
    overview: 'Pārskats',
    modules: 'Moduļi',
    types: 'Pieejamie tipi',
    examples: 'Lietošanas piemēri',
    api: 'API atsauce',
    performance: 'Veiktspēja',
    useCases: 'Lietošanas gadījumi',
    license: 'Licence',
    darkMode: 'Tumšais režīms',
    lightMode: 'Gaišais režīms',
    language: 'Valoda'
  },
  'uz': {
    title: 'Avx Distributed Systems Hujjatlari',
    subtitle: 'Yuqori samaradorlikdagi korporativ taqsimlangan tizim',
    overview: 'Umumiy koʻrinish',
    modules: 'Modullar',
    types: 'Mavjud turlar',
    examples: 'Foydalanish misollari',
    api: 'API ma\'lumotnoma',
    performance: 'Samaradorlik',
    useCases: 'Foydalanish holatlari',
    license: 'Litsenziya',
    darkMode: 'Qorong\'u rejim',
    lightMode: 'Yorug\' rejim',
    language: 'Til'
  },
  'es': {
    title: 'Documentación Avx Distributed Systems',
    subtitle: 'Sistema Distribuido Empresarial de Alto Rendimiento',
    overview: 'Descripción General',
    modules: 'Módulos',
    types: 'Tipos Disponibles',
    examples: 'Ejemplos de Uso',
    api: 'Referencia de API',
    performance: 'Rendimiento',
    useCases: 'Casos de Uso',
    license: 'Licencia',
    darkMode: 'Modo Oscuro',
    lightMode: 'Modo Claro',
    language: 'Idioma'
  }
};

// Language names
const languageNames = {
  'pt-BR': '🇧🇷 Português (Brasil)',
  'ru': '🇷🇺 Русский',
  'ja': '🇯🇵 日本語',
  'zh-TW': '🇹🇼 繁體中文',
  'ur': '🇵🇰 اردو',
  'ar': '🇸🇦 العربية',
  'de': '🇩🇪 Deutsch',
  'fr': '🇨🇭 Français',
  'lv': '🇱🇻 Latviešu',
  'uz': '🇺🇿 Oʻzbekcha',
  'es': '🇪🇸 Español'
};

// Current language
let currentLang = localStorage.getItem('avx-lang') || 'pt-BR';

// Theme management
function initTheme() {
  const savedTheme = localStorage.getItem('avx-theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    updateThemeButton();
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  const isDark = document.body.classList.contains('dark-theme');
  localStorage.setItem('avx-theme', isDark ? 'dark' : 'light');
  updateThemeButton();
}

function updateThemeButton() {
  const btn = document.querySelector('.theme-toggle');
  if (!btn) return;

  const isDark = document.body.classList.contains('dark-theme');
  const t = translations[currentLang];
  btn.innerHTML = isDark ? `🌙 ${t.darkMode}` : `☀️ ${t.lightMode}`;
}

// Language management
function initLanguage() {
  currentLang = localStorage.getItem('avx-lang') || 'pt-BR';
  updateLanguageButton();
  translatePage();
  createLanguageDropdown();
}

function createLanguageDropdown() {
  const dropdown = document.querySelector('.language-dropdown');
  if (!dropdown) return;

  dropdown.innerHTML = '';

  Object.keys(languageNames).forEach(lang => {
    const btn = document.createElement('button');
    btn.textContent = languageNames[lang];
    btn.onclick = () => changeLanguage(lang);
    if (lang === currentLang) {
      btn.style.fontWeight = 'bold';
      btn.style.background = 'var(--gradient-primary)';
      btn.style.color = 'white';
    }
    dropdown.appendChild(btn);
  });
}

function toggleLanguageDropdown() {
  const dropdown = document.querySelector('.language-dropdown');
  if (dropdown) {
    dropdown.classList.toggle('active');
  }
}

function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('avx-lang', lang);
  updateLanguageButton();
  translatePage();
  toggleLanguageDropdown();
}

function updateLanguageButton() {
  const btn = document.querySelector('.language-btn');
  if (!btn) return;

  const t = translations[currentLang];
  btn.innerHTML = `🌍 ${t.language}`;
}

function translatePage() {
  const t = translations[currentLang];

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  updateThemeButton();
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  const languageSelector = document.querySelector('.language-selector');
  const dropdown = document.querySelector('.language-dropdown');

  if (languageSelector && dropdown && !languageSelector.contains(e.target)) {
    dropdown.classList.remove('active');
  }
});

// Animation on scroll
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'slideIn 0.6s ease forwards';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.module-card, .section').forEach(el => {
    observer.observe(el);
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initScrollAnimations();
});

// Export for use in HTML
window.toggleTheme = toggleTheme;
window.toggleLanguageDropdown = toggleLanguageDropdown;
window.changeLanguage = changeLanguage;
