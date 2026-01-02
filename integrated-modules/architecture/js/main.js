// Gerenciamento de Tema
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Carregar tema salvo
const savedTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeButton(savedTheme);

themeToggle?.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeButton(newTheme);
});

function updateThemeButton(theme) {
  if (themeToggle) {
    themeToggle.textContent = theme === 'light' ? '🌙 Dark' : '☀️ Light';
  }
}

// Gerenciamento de Idioma
const translations = {
  'pt-BR': {
    welcome: 'Bem-vindo ao Ecossistema AVX',
    description: 'Soluções de software de alta performance para aplicações críticas',
    modules: 'Módulos',
    overview: 'Visão Geral',
    types: 'Tipos Disponíveis',
    examples: 'Exemplos',
    apiRef: 'Referência da API',
    performance: 'Performance',
    useCases: 'Casos de Uso',
    license: 'Licença',
    documentation: 'Documentação',
    learnMore: 'Saiba Mais'
  },
  'en': {
    welcome: 'Welcome to AVX Ecosystem',
    description: 'High-performance software solutions for critical applications',
    modules: 'Modules',
    overview: 'Overview',
    types: 'Available Types',
    examples: 'Examples',
    apiRef: 'API Reference',
    performance: 'Performance',
    useCases: 'Use Cases',
    license: 'License',
    documentation: 'Documentation',
    learnMore: 'Learn More'
  },
  'ru': {
    welcome: 'Добро пожаловать в экосистему AVX',
    description: 'Высокопроизводительные программные решения для критических приложений',
    modules: 'Модули',
    overview: 'Обзор',
    types: 'Доступные типы',
    examples: 'Примеры',
    apiRef: 'Справочник API',
    performance: 'Производительность',
    useCases: 'Случаи использования',
    license: 'Лицензия',
    documentation: 'Документация',
    learnMore: 'Узнать больше'
  },
  'ja': {
    welcome: 'AVXエコシステムへようこそ',
    description: '重要なアプリケーション向けの高性能ソフトウェアソリューション',
    modules: 'モジュール',
    overview: '概要',
    types: '利用可能な型',
    examples: '例',
    apiRef: 'APIリファレンス',
    performance: 'パフォーマンス',
    useCases: 'ユースケース',
    license: 'ライセンス',
    documentation: 'ドキュメント',
    learnMore: '詳細を見る'
  },
  'zh-TW': {
    welcome: '歡迎來到AVX生態系統',
    description: '關鍵應用的高性能軟體解決方案',
    modules: '模組',
    overview: '概述',
    types: '可用類型',
    examples: '範例',
    apiRef: 'API參考',
    performance: '性能',
    useCases: '使用案例',
    license: '授權',
    documentation: '文檔',
    learnMore: '了解更多'
  },
  'ur': {
    welcome: 'AVX ایکوسسٹم میں خوش آمدید',
    description: 'اہم ایپلیکیشنز کے لیے ہائی پرفارمنس سافٹ ویئر حل',
    modules: 'ماڈیولز',
    overview: 'جائزہ',
    types: 'دستیاب اقسام',
    examples: 'مثالیں',
    apiRef: 'API حوالہ',
    performance: 'کارکردگی',
    useCases: 'استعمال کی مثالیں',
    license: 'لائسنس',
    documentation: 'دستاویزات',
    learnMore: 'مزید جانیں'
  },
  'ar': {
    welcome: 'مرحبًا بك في نظام AVX البيئي',
    description: 'حلول برمجية عالية الأداء للتطبيقات الحرجة',
    modules: 'الوحدات',
    overview: 'نظرة عامة',
    types: 'الأنواع المتاحة',
    examples: 'أمثلة',
    apiRef: 'مرجع API',
    performance: 'الأداء',
    useCases: 'حالات الاستخدام',
    license: 'الترخيص',
    documentation: 'التوثيق',
    learnMore: 'اعرف المزيد'
  },
  'de': {
    welcome: 'Willkommen im AVX-Ökosystem',
    description: 'Hochleistungs-Softwarelösungen für kritische Anwendungen',
    modules: 'Module',
    overview: 'Übersicht',
    types: 'Verfügbare Typen',
    examples: 'Beispiele',
    apiRef: 'API-Referenz',
    performance: 'Leistung',
    useCases: 'Anwendungsfälle',
    license: 'Lizenz',
    documentation: 'Dokumentation',
    learnMore: 'Mehr erfahren'
  },
  'fr': {
    welcome: 'Bienvenue dans l\'écosystème AVX',
    description: 'Solutions logicielles haute performance pour applications critiques',
    modules: 'Modules',
    overview: 'Vue d\'ensemble',
    types: 'Types disponibles',
    examples: 'Exemples',
    apiRef: 'Référence API',
    performance: 'Performance',
    useCases: 'Cas d\'usage',
    license: 'Licence',
    documentation: 'Documentation',
    learnMore: 'En savoir plus'
  },
  'lv': {
    welcome: 'Laipni lūdzam AVX ekosistēmā',
    description: 'Augstas veiktspējas programmatūras risinājumi kritiskām lietojumprogrammām',
    modules: 'Moduļi',
    overview: 'Pārskats',
    types: 'Pieejamie tipi',
    examples: 'Piemēri',
    apiRef: 'API atsauce',
    performance: 'Veiktspēja',
    useCases: 'Lietošanas gadījumi',
    license: 'Licence',
    documentation: 'Dokumentācija',
    learnMore: 'Uzzināt vairāk'
  },
  'uz': {
    welcome: 'AVX ekotizimiga xush kelibsiz',
    description: 'Muhim ilovalar uchun yuqori samarali dasturiy ta\'minot yechimlari',
    modules: 'Modullar',
    overview: 'Umumiy ko\'rinish',
    types: 'Mavjud turlar',
    examples: 'Misollar',
    apiRef: 'API ma\'lumotnomasi',
    performance: 'Ishlash',
    useCases: 'Foydalanish holatlari',
    license: 'Litsenziya',
    documentation: 'Hujjatlar',
    learnMore: 'Ko\'proq bilish'
  },
  'es': {
    welcome: 'Bienvenido al ecosistema AVX',
    description: 'Soluciones de software de alto rendimiento para aplicaciones críticas',
    modules: 'Módulos',
    overview: 'Visión general',
    types: 'Tipos disponibles',
    examples: 'Ejemplos',
    apiRef: 'Referencia de API',
    performance: 'Rendimiento',
    useCases: 'Casos de uso',
    license: 'Licencia',
    documentation: 'Documentación',
    learnMore: 'Saber más'
  }
};

// Carregar idioma salvo
let currentLang = localStorage.getItem('language') || 'pt-BR';
const langSelector = document.getElementById('lang-selector');

if (langSelector) {
  langSelector.value = currentLang;
  langSelector.addEventListener('change', (e) => {
    currentLang = e.target.value;
    localStorage.setItem('language', currentLang);
    updateLanguage();
  });
}

function updateLanguage() {
  const trans = translations[currentLang] || translations['pt-BR'];

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (trans[key]) {
      element.textContent = trans[key];
    }
  });
}

// Inicializar idioma
document.addEventListener('DOMContentLoaded', updateLanguage);

// Smooth Scroll
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

// Intersection Observer para animações
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.module-card, .content-section').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Copy code button
document.querySelectorAll('pre').forEach(pre => {
  const button = document.createElement('button');
  button.textContent = '📋';
  button.className = 'copy-btn';
  button.style.cssText = `
    position: absolute;
    top: 10px;
    right: 10px;
    background: var(--primary-color);
    border: none;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
  `;

  pre.style.position = 'relative';
  pre.appendChild(button);

  button.addEventListener('click', async () => {
    const code = pre.querySelector('code').textContent;
    await navigator.clipboard.writeText(code);
    button.textContent = '✅';
    setTimeout(() => button.textContent = '📋', 2000);
  });
});

// Search functionality
let searchIndex = [];

function initSearch() {
  // Build search index from page content
  document.querySelectorAll('h2, h3, p, code').forEach(el => {
    searchIndex.push({
      text: el.textContent,
      element: el
    });
  });
}

document.addEventListener('DOMContentLoaded', initSearch);

// Analytics (placeholder - sem tracking externo)
console.log('AVX Documentation loaded - Version 1.0.0');
console.log('Theme:', savedTheme);
console.log('Language:', currentLang);
