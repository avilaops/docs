// Multilingual Support
const translations = {
    'pt-BR': {
        tagline: 'Ecossistema Rust de Alta Performance',
        modules: 'Módulos',
        useCases: 'Casos de Uso',
        cache: 'Cache Distribuído',
        cacheDesc: 'Sistema de cache com LRU, LFU, FIFO e TTL',
        codec: 'Codificação',
        codecDesc: 'Hex, Base64, Base58, Base32, Base85',
        compress: 'Compressão',
        compressDesc: 'LZ4 ultra-rápido com SIMD',
        db: 'Banco de Dados',
        dbDesc: 'NoSQL distribuído para Brasil',
        pool: 'Pooling',
        poolDesc: 'Gerenciamento de recursos',
        serde: 'Serialização',
        serdeDesc: 'Framework completo de serialização',
        serialize: 'Serialização Binária',
        serializeDesc: 'Zero-copy binário',
        storage: 'Object Storage',
        storageDesc: 'S3-compatible, 50% mais barato',
        learnMore: 'Saiba Mais',
        useCasesTitle: 'Casos de Uso',
        ecommerce: 'E-Commerce',
        gaming: 'Gaming',
        iot: 'IoT',
        ai: 'IA/ML',
        logs: 'Logs',
        apis: 'APIs',
        copyright: 'Copyright © 2025 Nícolas Ávila. Todos os direitos reservados.',
        darkMode: '🌙 Escuro',
        lightMode: '☀️ Claro'
    },
    'ru': {
        tagline: 'Высокопроизводительная экосистема Rust',
        modules: 'Модули',
        useCases: 'Сценарии использования',
        cache: 'Распределенный кэш',
        cacheDesc: 'Система кэширования с LRU, LFU, FIFO и TTL',
        codec: 'Кодирование',
        codecDesc: 'Hex, Base64, Base58, Base32, Base85',
        compress: 'Сжатие',
        compressDesc: 'Сверхбыстрое LZ4 с SIMD',
        db: 'База данных',
        dbDesc: 'Распределенная NoSQL для Бразилии',
        pool: 'Пулинг',
        poolDesc: 'Управление ресурсами',
        serde: 'Сериализация',
        serdeDesc: 'Полный фреймворк сериализации',
        serialize: 'Бинарная сериализация',
        serializeDesc: 'Бинарная без копирования',
        storage: 'Хранилище объектов',
        storageDesc: 'Совместимо с S3, на 50% дешевле',
        learnMore: 'Узнать больше',
        useCasesTitle: 'Сценарии использования',
        ecommerce: 'Электронная коммерция',
        gaming: 'Игры',
        iot: 'IoT',
        ai: 'ИИ/МО',
        logs: 'Логи',
        apis: 'API',
        copyright: 'Copyright © 2025 Nícolas Ávila. Все права защищены.',
        darkMode: '🌙 Темный',
        lightMode: '☀️ Светлый'
    },
    'ja': {
        tagline: '高性能Rustエコシステム',
        modules: 'モジュール',
        useCases: 'ユースケース',
        cache: '分散キャッシュ',
        cacheDesc: 'LRU、LFU、FIFO、TTLを使用したキャッシュシステム',
        codec: 'エンコーディング',
        codecDesc: 'Hex、Base64、Base58、Base32、Base85',
        compress: '圧縮',
        compressDesc: 'SIMD搭載の超高速LZ4',
        db: 'データベース',
        dbDesc: 'ブラジル向け分散NoSQL',
        pool: 'プーリング',
        poolDesc: 'リソース管理',
        serde: 'シリアライゼーション',
        serdeDesc: '完全なシリアライゼーションフレームワーク',
        serialize: 'バイナリシリアライゼーション',
        serializeDesc: 'ゼロコピーバイナリ',
        storage: 'オブジェクトストレージ',
        storageDesc: 'S3互換、50%安価',
        learnMore: '詳細を見る',
        useCasesTitle: 'ユースケース',
        ecommerce: 'Eコマース',
        gaming: 'ゲーミング',
        iot: 'IoT',
        ai: 'AI/ML',
        logs: 'ログ',
        apis: 'API',
        copyright: 'Copyright © 2025 Nícolas Ávila. 無断転載禁止。',
        darkMode: '🌙 ダーク',
        lightMode: '☀️ ライト'
    },
    'zh-TW': {
        tagline: '高效能 Rust 生態系統',
        modules: '模組',
        useCases: '使用案例',
        cache: '分散式快取',
        cacheDesc: '具有 LRU、LFU、FIFO 和 TTL 的快取系統',
        codec: '編碼',
        codecDesc: 'Hex、Base64、Base58、Base32、Base85',
        compress: '壓縮',
        compressDesc: '具有 SIMD 的超快 LZ4',
        db: '資料庫',
        dbDesc: '巴西分散式 NoSQL',
        pool: '資源池',
        poolDesc: '資源管理',
        serde: '序列化',
        serdeDesc: '完整的序列化框架',
        serialize: '二進位序列化',
        serializeDesc: '零複製二進位',
        storage: '物件儲存',
        storageDesc: 'S3 相容，便宜 50%',
        learnMore: '了解更多',
        useCasesTitle: '使用案例',
        ecommerce: '電子商務',
        gaming: '遊戲',
        iot: '物聯網',
        ai: 'AI/ML',
        logs: '日誌',
        apis: 'API',
        copyright: 'Copyright © 2025 Nícolas Ávila. 版權所有。',
        darkMode: '🌙 深色',
        lightMode: '☀️ 淺色'
    },
    'ur': {
        tagline: 'ہائی پرفارمنس Rust ایکو سسٹم',
        modules: 'ماڈیولز',
        useCases: 'استعمال کے کیسز',
        cache: 'تقسیم شدہ کیش',
        cacheDesc: 'LRU، LFU، FIFO اور TTL کے ساتھ کیش سسٹم',
        codec: 'انکوڈنگ',
        codecDesc: 'Hex، Base64، Base58، Base32، Base85',
        compress: 'کمپریشن',
        compressDesc: 'SIMD کے ساتھ انتہائی تیز LZ4',
        db: 'ڈیٹا بیس',
        dbDesc: 'برازیل کے لیے تقسیم شدہ NoSQL',
        pool: 'پولنگ',
        poolDesc: 'وسائل کا انتظام',
        serde: 'سیریلائزیشن',
        serdeDesc: 'مکمل سیریلائزیشن فریم ورک',
        serialize: 'بائنری سیریلائزیشن',
        serializeDesc: 'زیرو کاپی بائنری',
        storage: 'آبجیکٹ سٹوریج',
        storageDesc: 'S3 مطابق، 50% سستا',
        learnMore: 'مزید جانیں',
        useCasesTitle: 'استعمال کے کیسز',
        ecommerce: 'ای کامرس',
        gaming: 'گیمنگ',
        iot: 'IoT',
        ai: 'AI/ML',
        logs: 'لاگز',
        apis: 'APIs',
        copyright: 'Copyright © 2025 Nícolas Ávila. تمام حقوق محفوظ ہیں۔',
        darkMode: '🌙 تاریک',
        lightMode: '☀️ روشن'
    },
    'ar': {
        tagline: 'نظام Rust عالي الأداء',
        modules: 'الوحدات',
        useCases: 'حالات الاستخدام',
        cache: 'ذاكرة تخزين مؤقت موزعة',
        cacheDesc: 'نظام تخزين مؤقت مع LRU و LFU و FIFO و TTL',
        codec: 'الترميز',
        codecDesc: 'Hex و Base64 و Base58 و Base32 و Base85',
        compress: 'الضغط',
        compressDesc: 'LZ4 فائق السرعة مع SIMD',
        db: 'قاعدة البيانات',
        dbDesc: 'NoSQL موزعة للبرازيل',
        pool: 'التجميع',
        poolDesc: 'إدارة الموارد',
        serde: 'التسلسل',
        serdeDesc: 'إطار تسلسل كامل',
        serialize: 'التسلسل الثنائي',
        serializeDesc: 'ثنائي بدون نسخ',
        storage: 'تخزين الكائنات',
        storageDesc: 'متوافق مع S3، أرخص بنسبة 50٪',
        learnMore: 'اعرف المزيد',
        useCasesTitle: 'حالات الاستخدام',
        ecommerce: 'التجارة الإلكترونية',
        gaming: 'الألعاب',
        iot: 'إنترنت الأشياء',
        ai: 'الذكاء الاصطناعي/تعلم الآلة',
        logs: 'السجلات',
        apis: 'واجهات برمجة التطبيقات',
        copyright: 'حقوق النشر © 2025 Nícolas Ávila. جميع الحقوق محفوظة.',
        darkMode: '🌙 داكن',
        lightMode: '☀️ فاتح'
    },
    'de': {
        tagline: 'Hochleistungs-Rust-Ökosystem',
        modules: 'Module',
        useCases: 'Anwendungsfälle',
        cache: 'Verteilter Cache',
        cacheDesc: 'Cache-System mit LRU, LFU, FIFO und TTL',
        codec: 'Codierung',
        codecDesc: 'Hex, Base64, Base58, Base32, Base85',
        compress: 'Komprimierung',
        compressDesc: 'Ultra-schnelles LZ4 mit SIMD',
        db: 'Datenbank',
        dbDesc: 'Verteiltes NoSQL für Brasilien',
        pool: 'Pooling',
        poolDesc: 'Ressourcenverwaltung',
        serde: 'Serialisierung',
        serdeDesc: 'Vollständiges Serialisierungs-Framework',
        serialize: 'Binäre Serialisierung',
        serializeDesc: 'Binär ohne Kopieren',
        storage: 'Objektspeicher',
        storageDesc: 'S3-kompatibel, 50% günstiger',
        learnMore: 'Mehr erfahren',
        useCasesTitle: 'Anwendungsfälle',
        ecommerce: 'E-Commerce',
        gaming: 'Gaming',
        iot: 'IoT',
        ai: 'KI/ML',
        logs: 'Protokolle',
        apis: 'APIs',
        copyright: 'Copyright © 2025 Nícolas Ávila. Alle Rechte vorbehalten.',
        darkMode: '🌙 Dunkel',
        lightMode: '☀️ Hell'
    },
    'fr-CH': {
        tagline: 'Écosystème Rust haute performance',
        modules: 'Modules',
        useCases: 'Cas d\'utilisation',
        cache: 'Cache distribué',
        cacheDesc: 'Système de cache avec LRU, LFU, FIFO et TTL',
        codec: 'Encodage',
        codecDesc: 'Hex, Base64, Base58, Base32, Base85',
        compress: 'Compression',
        compressDesc: 'LZ4 ultra-rapide avec SIMD',
        db: 'Base de données',
        dbDesc: 'NoSQL distribué pour le Brésil',
        pool: 'Pooling',
        poolDesc: 'Gestion des ressources',
        serde: 'Sérialisation',
        serdeDesc: 'Framework de sérialisation complet',
        serialize: 'Sérialisation binaire',
        serializeDesc: 'Binaire sans copie',
        storage: 'Stockage d\'objets',
        storageDesc: 'Compatible S3, 50% moins cher',
        learnMore: 'En savoir plus',
        useCasesTitle: 'Cas d\'utilisation',
        ecommerce: 'Commerce électronique',
        gaming: 'Jeux',
        iot: 'IdO',
        ai: 'IA/ML',
        logs: 'Journaux',
        apis: 'API',
        copyright: 'Copyright © 2025 Nícolas Ávila. Tous droits réservés.',
        darkMode: '🌙 Sombre',
        lightMode: '☀️ Clair'
    },
    'lv': {
        tagline: 'Augstas veiktspējas Rust ekosistēma',
        modules: 'Moduļi',
        useCases: 'Lietošanas gadījumi',
        cache: 'Izkliedēta kešatmiņa',
        cacheDesc: 'Kešatmiņas sistēma ar LRU, LFU, FIFO un TTL',
        codec: 'Kodēšana',
        codecDesc: 'Hex, Base64, Base58, Base32, Base85',
        compress: 'Saspiešana',
        compressDesc: 'Ultra ātrs LZ4 ar SIMD',
        db: 'Datubāze',
        dbDesc: 'Izkliedēta NoSQL Brazīlijai',
        pool: 'Pūls',
        poolDesc: 'Resursu pārvaldība',
        serde: 'Serializācija',
        serdeDesc: 'Pilnīga serializācijas ietvars',
        serialize: 'Binārā serializācija',
        serializeDesc: 'Binārā bez kopēšanas',
        storage: 'Objektu krātuve',
        storageDesc: 'S3 saderīgs, 50% lētāks',
        learnMore: 'Uzzināt vairāk',
        useCasesTitle: 'Lietošanas gadījumi',
        ecommerce: 'E-komercija',
        gaming: 'Spēles',
        iot: 'IoT',
        ai: 'MI/ML',
        logs: 'Žurnāli',
        apis: 'API',
        copyright: 'Autortiesības © 2025 Nícolas Ávila. Visas tiesības aizsargātas.',
        darkMode: '🌙 Tumšs',
        lightMode: '☀️ Gaišs'
    },
    'uz': {
        tagline: 'Yuqori unumli Rust ekotizimi',
        modules: 'Modullar',
        useCases: 'Foydalanish holatlari',
        cache: 'Taqsimlangan kesh',
        cacheDesc: 'LRU, LFU, FIFO va TTL bilan kesh tizimi',
        codec: 'Kodlash',
        codecDesc: 'Hex, Base64, Base58, Base32, Base85',
        compress: 'Siqish',
        compressDesc: 'SIMD bilan ultra tez LZ4',
        db: 'Ma\'lumotlar bazasi',
        dbDesc: 'Braziliya uchun taqsimlangan NoSQL',
        pool: 'Pooling',
        poolDesc: 'Resurslarni boshqarish',
        serde: 'Serializatsiya',
        serdeDesc: 'To\'liq serializatsiya freymvorki',
        serialize: 'Ikkilik serializatsiya',
        serializeDesc: 'Nusxa olmasdan ikkilik',
        storage: 'Ob\'ekt saqlash',
        storageDesc: 'S3 mos, 50% arzonroq',
        learnMore: 'Ko\'proq bilish',
        useCasesTitle: 'Foydalanish holatlari',
        ecommerce: 'Elektron tijorat',
        gaming: 'O\'yinlar',
        iot: 'IoT',
        ai: 'AI/ML',
        logs: 'Jurnallar',
        apis: 'APIlar',
        copyright: 'Mualliflik huquqi © 2025 Nícolas Ávila. Barcha huquqlar himoyalangan.',
        darkMode: '🌙 Qorong\'i',
        lightMode: '☀️ Yorug\''
    },
    'es': {
        tagline: 'Ecosistema Rust de Alto Rendimiento',
        modules: 'Módulos',
        useCases: 'Casos de Uso',
        cache: 'Caché Distribuido',
        cacheDesc: 'Sistema de caché con LRU, LFU, FIFO y TTL',
        codec: 'Codificación',
        codecDesc: 'Hex, Base64, Base58, Base32, Base85',
        compress: 'Compresión',
        compressDesc: 'LZ4 ultra-rápido con SIMD',
        db: 'Base de Datos',
        dbDesc: 'NoSQL distribuido para Brasil',
        pool: 'Pooling',
        poolDesc: 'Gestión de recursos',
        serde: 'Serialización',
        serdeDesc: 'Framework completo de serialización',
        serialize: 'Serialización Binaria',
        serializeDesc: 'Binaria sin copia',
        storage: 'Almacenamiento de Objetos',
        storageDesc: 'Compatible con S3, 50% más barato',
        learnMore: 'Aprende Más',
        useCasesTitle: 'Casos de Uso',
        ecommerce: 'Comercio Electrónico',
        gaming: 'Juegos',
        iot: 'IoT',
        ai: 'IA/ML',
        logs: 'Registros',
        apis: 'APIs',
        copyright: 'Copyright © 2025 Nícolas Ávila. Todos los derechos reservados.',
        darkMode: '🌙 Oscuro',
        lightMode: '☀️ Claro'
    }
};

let currentLang = 'pt-BR';
let currentTheme = 'light';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Load saved preferences
    currentLang = localStorage.getItem('lang') || 'pt-BR';
    currentTheme = localStorage.getItem('theme') || 'light';

    // Apply theme
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Set language selector
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.value = currentLang;
    }

    // Update theme button
    updateThemeButton();

    // Translate page
    translatePage();

    // Event listeners
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    if (langSelect) {
        langSelect.addEventListener('change', function(e) {
            currentLang = e.target.value;
            localStorage.setItem('lang', currentLang);
            translatePage();
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }

    updateThemeButton();
}

function updateThemeButton() {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        const t = translations[currentLang];
        btn.textContent = currentTheme === 'dark' ? t.lightMode : t.darkMode;
    }
}

function translatePage() {
    const t = translations[currentLang];

    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.textContent = t[key];
        }
    });

    updateThemeButton();
}

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.module-card, .use-case').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});
