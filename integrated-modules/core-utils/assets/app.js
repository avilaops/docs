// Copyright © 2025 Nícolas Ávila - All Rights Reserved
// Avila Inc. - Documentation System

// Translations
const translations = {
    'pt-BR': {
        title: 'Avila Core Utils - Documentação',
        subtitle: 'Biblioteca de Utilidades de Alto Desempenho',
        modules: 'Módulos',
        overview: 'Visão Geral',
        types: 'Tipos Disponíveis',
        examples: 'Exemplos de Uso',
        api: 'Referência da API',
        performance: 'Performance',
        useCases: 'Casos de Uso',
        license: 'Licença',
        themeToggle: '🌓 Tema',
        language: 'Idioma'
    },
    'ru': {
        title: 'Avila Core Utils - Документация',
        subtitle: 'Высокопроизводительная библиотека утилит',
        modules: 'Модули',
        overview: 'Обзор',
        types: 'Доступные типы',
        examples: 'Примеры использования',
        api: 'Справочник API',
        performance: 'Производительность',
        useCases: 'Случаи использования',
        license: 'Лицензия',
        themeToggle: '🌓 Тема',
        language: 'Язык'
    },
    'ja': {
        title: 'Avila Core Utils - ドキュメント',
        subtitle: '高性能ユーティリティライブラリ',
        modules: 'モジュール',
        overview: '概要',
        types: '利用可能な型',
        examples: '使用例',
        api: 'API リファレンス',
        performance: 'パフォーマンス',
        useCases: 'ユースケース',
        license: 'ライセンス',
        themeToggle: '🌓 テーマ',
        language: '言語'
    },
    'zh-TW': {
        title: 'Avila Core Utils - 文檔',
        subtitle: '高性能實用程序庫',
        modules: '模組',
        overview: '概述',
        types: '可用類型',
        examples: '使用範例',
        api: 'API 參考',
        performance: '性能',
        useCases: '使用案例',
        license: '許可證',
        themeToggle: '🌓 主題',
        language: '語言'
    },
    'ur': {
        title: 'Avila Core Utils - دستاویزات',
        subtitle: 'اعلی کارکردگی کی یوٹیلٹی لائبریری',
        modules: 'ماڈیولز',
        overview: 'جائزہ',
        types: 'دستیاب اقسام',
        examples: 'استعمال کی مثالیں',
        api: 'API حوالہ',
        performance: 'کارکردگی',
        useCases: 'استعمال کے معاملات',
        license: 'لائسنس',
        themeToggle: '🌓 تھیم',
        language: 'زبان'
    },
    'ar': {
        title: 'Avila Core Utils - التوثيق',
        subtitle: 'مكتبة الأدوات عالية الأداء',
        modules: 'الوحدات',
        overview: 'نظرة عامة',
        types: 'الأنواع المتاحة',
        examples: 'أمثلة الاستخدام',
        api: 'مرجع API',
        performance: 'الأداء',
        useCases: 'حالات الاستخدام',
        license: 'الترخيص',
        themeToggle: '🌓 السمة',
        language: 'اللغة'
    },
    'de': {
        title: 'Avila Core Utils - Dokumentation',
        subtitle: 'Hochleistungs-Utility-Bibliothek',
        modules: 'Module',
        overview: 'Überblick',
        types: 'Verfügbare Typen',
        examples: 'Verwendungsbeispiele',
        api: 'API-Referenz',
        performance: 'Leistung',
        useCases: 'Anwendungsfälle',
        license: 'Lizenz',
        themeToggle: '🌓 Design',
        language: 'Sprache'
    },
    'es': {
        title: 'Avila Core Utils - Documentación',
        subtitle: 'Biblioteca de Utilidades de Alto Rendimiento',
        modules: 'Módulos',
        overview: 'Descripción General',
        types: 'Tipos Disponibles',
        examples: 'Ejemplos de Uso',
        api: 'Referencia de API',
        performance: 'Rendimiento',
        useCases: 'Casos de Uso',
        license: 'Licencia',
        themeToggle: '🌓 Tema',
        language: 'Idioma'
    },
    'lv': {
        title: 'Avila Core Utils - Dokumentācija',
        subtitle: 'Augstas veiktspējas utilītu bibliotēka',
        modules: 'Moduļi',
        overview: 'Pārskats',
        types: 'Pieejamie tipi',
        examples: 'Lietošanas piemēri',
        api: 'API atsauce',
        performance: 'Veiktspēja',
        useCases: 'Lietošanas gadījumi',
        license: 'Licence',
        themeToggle: '🌓 Tēma',
        language: 'Valoda'
    },
    'uz': {
        title: 'Avila Core Utils - Hujjatlar',
        subtitle: 'Yuqori unumdorlik yordamchi kutubxonasi',
        modules: 'Modullar',
        overview: 'Umumiy korinish',
        types: 'Mavjud turlar',
        examples: 'Foydalanish misollari',
        api: 'API ma\'lumotnomasi',
        performance: 'Unumdorlik',
        useCases: 'Foydalanish holatlari',
        license: 'Litsenziya',
        themeToggle: '🌓 Mavzu',
        language: 'Til'
    }
};

// Module data
const modules = {
    'avx-atom': {
        icon: '⚛️',
        version: 'v0.1.0',
        description: {
            'pt-BR': 'Estruturas de dados atômicas e operações de baixo nível',
            'ru': 'Атомарные структуры данных и операции низкого уровня',
            'ja': 'アトミックデータ構造と低レベル操作',
            'zh-TW': '原子數據結構和低級操作',
            'ur': 'ایٹمک ڈیٹا ڈھانچے اور نچلی سطح کی کارروائیاں',
            'ar': 'هياكل البيانات الذرية والعمليات منخفضة المستوى',
            'de': 'Atomare Datenstrukturen und Low-Level-Operationen',
            'es': 'Estructuras de datos atómicas y operaciones de bajo nivel',
            'lv': 'Atomiski datu struktūras un zemā līmeņa operācijas',
            'uz': 'Atom ma\'lumotlar tuzilmalari va past darajali operatsiyalar'
        },
        features: ['Lock-free structures', 'SIMD optimization', 'Zero-cost abstractions']
    },
    'avx-runtime': {
        icon: '🚀',
        version: 'v0.1.1',
        description: {
            'pt-BR': 'Runtime assíncrono de alto desempenho com work-stealing',
            'ru': 'Высокопроизводительная асинхронная среда выполнения с work-stealing',
            'ja': 'work-stealingを備えた高性能非同期ランタイム',
            'zh-TW': '具有 work-stealing 的高性能異步運行時',
            'ur': 'work-stealing کے ساتھ اعلی کارکردگی غیر مطابقت رن ٹائم',
            'ar': 'بيئة تشغيل غير متزامنة عالية الأداء مع work-stealing',
            'de': 'Hochleistungs-Async-Laufzeit mit Work-Stealing',
            'es': 'Runtime asíncrono de alto rendimiento con work-stealing',
            'lv': 'Augstas veiktspējas asinhrona izpildes vide ar work-stealing',
            'uz': 'work-stealing bilan yuqori unumdorli asinxron ishga tushirish muhiti'
        },
        features: ['Work-stealing scheduler', 'Native epoll/kqueue/IOCP', 'Zero dependencies']
    },
    'avx-events': {
        icon: '📡',
        version: 'v0.1.0',
        description: {
            'pt-BR': 'Sistema de eventos pub/sub para aplicações distribuídas',
            'ru': 'Система событий pub/sub для распределенных приложений',
            'ja': '分散アプリケーション用のpub/subイベントシステム',
            'zh-TW': '分佈式應用程序的pub/sub事件系統',
            'ur': 'تقسیم شدہ ایپلیکیشنز کے لیے pub/sub ایونٹ سسٹم',
            'ar': 'نظام الأحداث pub/sub للتطبيقات الموزعة',
            'de': 'Pub/Sub-Event-System für verteilte Anwendungen',
            'es': 'Sistema de eventos pub/sub para aplicaciones distribuidas',
            'lv': 'Pub/sub notikumu sistēma sadalītām lietojumprogrammām',
            'uz': 'Tarqatilgan ilovalar uchun pub/sub hodisalar tizimi'
        },
        features: ['Event sourcing', 'CQRS support', 'Industry 4.0 integration']
    },
    'avx-queue': {
        icon: '📬',
        version: 'v0.1.0',
        description: {
            'pt-BR': 'Sistema de filas com retry e dead letter queue',
            'ru': 'Система очередей с повторными попытками и мертвыми письмами',
            'ja': 'リトライとデッドレターキューを備えたキューシステム',
            'zh-TW': '具有重試和死信隊列的隊列系統',
            'ur': 'دوبارہ کوشش اور مردہ خط قطار کے ساتھ قطار کا نظام',
            'ar': 'نظام قوائم الانتظار مع إعادة المحاولة وقائمة انتظار الرسائل الميتة',
            'de': 'Warteschlangensystem mit Wiederholung und Dead-Letter-Warteschlange',
            'es': 'Sistema de colas con reintentos y cola de mensajes muertos',
            'lv': 'Rindu sistēma ar atkārtotu mēģinājumu un mirušo vēstuļu rindu',
            'uz': 'Qayta urinish va o\'lik xat navbati bilan navbatlar tizimi'
        },
        features: ['FIFO ordering', 'Priority queues', 'Pub/sub patterns']
    },
    'avx-future': {
        icon: '🔮',
        version: 'v0.1.0',
        description: {
            'pt-BR': 'Implementação de futures e async primitives',
            'ru': 'Реализация futures и асинхронных примитивов',
            'ja': 'futuresと非同期プリミティブの実装',
            'zh-TW': 'futures 和異步原語的實現',
            'ur': 'futures اور async primitives کی تشکیل',
            'ar': 'تطبيق futures والبدائيات غير المتزامنة',
            'de': 'Implementierung von Futures und Async-Primitiven',
            'es': 'Implementación de futures y primitivas asíncronas',
            'lv': 'Futures un asinhronā primitīvu ieviešana',
            'uz': 'Futures va asinxron primitivlar amalga oshirish'
        },
        features: ['Custom futures', 'Async/await support', 'Minimal overhead']
    },
    'avx-config': {
        icon: '⚙️',
        version: 'v0.1.0',
        description: {
            'pt-BR': 'Sistema de configuração hierárquica e dinâmica',
            'ru': 'Иерархическая и динамическая система конфигурации',
            'ja': '階層的で動的な構成システム',
            'zh-TW': '分層和動態配置系統',
            'ur': 'درجہ بندی اور متحرک ترتیب کا نظام',
            'ar': 'نظام تكوين هرمي وديناميكي',
            'de': 'Hierarchisches und dynamisches Konfigurationssystem',
            'es': 'Sistema de configuración jerárquica y dinámica',
            'lv': 'Hierarhiska un dinamiska konfigurācijas sistēma',
            'uz': 'Ierarxik va dinamik konfiguratsiya tizimi'
        },
        features: ['Environment variables', 'File-based config', 'Hot reloading']
    },
    'avx-regex': {
        icon: '🔍',
        version: 'v0.1.0',
        description: {
            'pt-BR': 'Motor de expressões regulares de alto desempenho',
            'ru': 'Высокопроизводительный движок регулярных выражений',
            'ja': '高性能正規表現エンジン',
            'zh-TW': '高性能正則表達式引擎',
            'ur': 'اعلی کارکردگی باقاعدہ اظہار انجن',
            'ar': 'محرك تعبيرات عادية عالية الأداء',
            'de': 'Hochleistungs-Regex-Engine',
            'es': 'Motor de expresiones regulares de alto rendimiento',
            'lv': 'Augstas veiktspējas regulāro izteiksmju dzinējs',
            'uz': 'Yuqori unumdorli muntazam ifoda dvigateli'
        },
        features: ['Unicode support', 'Compile-time optimization', 'Zero-copy matching']
    },
    'avx-validate': {
        icon: '✅',
        version: 'v0.1.0',
        description: {
            'pt-BR': 'Framework de validação de dados e tipos',
            'ru': 'Фреймворк валидации данных и типов',
            'ja': 'データと型の検証フレームワーク',
            'zh-TW': '數據和類型驗證框架',
            'ur': 'ڈیٹا اور اقسام کی توثیق کا فریم ورک',
            'ar': 'إطار عمل للتحقق من البيانات والأنواع',
            'de': 'Framework zur Daten- und Typvalidierung',
            'es': 'Framework de validación de datos y tipos',
            'lv': 'Datu un tipu validācijas ietvars',
            'uz': 'Ma\'lumotlar va turlarni tekshirish ramkasi'
        },
        features: ['Custom validators', 'Derive macros', 'Composable rules']
    }
};

// State
let currentTheme = localStorage.getItem('theme') || 'light';
let currentLang = localStorage.getItem('lang') || 'pt-BR';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    setupEventListeners();
    loadModules();
});

function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

function initLanguage() {
    updateLanguage();
}

function setupEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Language selector
    const langSelector = document.getElementById('lang-selector');
    if (langSelector) {
        langSelector.addEventListener('change', (e) => {
            currentLang = e.target.value;
            localStorage.setItem('lang', currentLang);
            updateLanguage();
            loadModules();
        });
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
}

function updateLanguage() {
    const t = translations[currentLang];

    // Update static texts
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Update language selector
    const langSelector = document.getElementById('lang-selector');
    if (langSelector) {
        langSelector.value = currentLang;
    }
}

function loadModules() {
    const container = document.getElementById('modules-container');
    if (!container) return;

    container.innerHTML = '';

    Object.entries(modules).forEach(([name, data], index) => {
        const card = createModuleCard(name, data);
        card.style.animationDelay = `${index * 0.1}s`;
        container.appendChild(card);
    });
}

function createModuleCard(name, data) {
    const card = document.createElement('div');
    card.className = 'module-card fade-in';

    const desc = data.description[currentLang] || data.description['pt-BR'];

    card.innerHTML = `
        <div class="module-icon">${data.icon}</div>
        <h3>${name}</h3>
        <span class="module-version">${data.version}</span>
        <p>${desc}</p>
        <ul class="module-features">
            ${data.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
    `;

    card.addEventListener('click', () => {
        window.location.href = `modules/${name}.html`;
    });

    return card;
}

// Performance chart animation
function animatePerformanceCharts() {
    const bars = document.querySelectorAll('.perf-bar-fill');
    bars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 100);
    });
}

// Expose functions globally
window.avilaCore = {
    toggleTheme,
    updateLanguage,
    loadModules,
    animatePerformanceCharts
};
