// Sistema de Internacionalização (i18n)

const translations = {
    'pt-BR': {
        'nav.overview': 'Visão Geral',
        'nav.types': 'Tipos',
        'nav.examples': 'Exemplos',
        'nav.api': 'API',
        'nav.performance': 'Performance',
        'nav.usecases': 'Casos de Uso',
        'nav.license': 'Licença',

        'hero.title': 'Motor de Renderização Quântica',
        'hero.subtitle': 'Renderização fotorrealística baseada em Eletrodinâmica Quântica (QED) usando formulação de integrais de caminho',

        'overview.title': 'Visão Geral do Módulo',
        'overview.description': 'Avx Quantum Render é um motor de renderização revolucionário que simula o comportamento da luz usando princípios fundamentais da mecânica quântica. Ao invés de usar aproximações clássicas, nosso motor calcula diretamente as amplitudes quânticas através da formulação de integrais de caminho de Feynman.',
        'overview.principles': 'Princípios Fundamentais',
        'overview.principle1.title': 'Integrais de Caminho',
        'overview.principle1.desc': 'Cada fóton considera todos os caminhos possíveis simultaneamente, com fase quântica exp(iS/ℏ)',
        'overview.principle2.title': 'Renderização Espectral',
        'overview.principle2.desc': 'Simulação completa do espectro eletromagnético com dispersão e interferência wavelength-dependente',
        'overview.principle3.title': 'QED Completo',
        'overview.principle3.desc': 'Implementa diagramas de Feynman, polarização, e efeitos quânticos como tunelamento fotônico',
        'overview.principle4.title': 'Performance Extrema',
        'overview.principle4.desc': 'Otimizado com SIMD, GPU compute shaders, e paralelização massiva para resultados em tempo real',
        'overview.features': 'Características Principais',

        'types.title': 'Todos os Tipos Disponíveis',
        'types.core': 'Tipos Centrais',
        'types.quantum': 'Física Quântica',
        'types.materials': 'Materiais e Superfícies',
        'types.acceleration': 'Aceleração e Performance',
        'types.gpu': 'GPU e Backends',
        'types.postprocessing': 'Pós-processamento',

        'examples.title': 'Exemplos de Uso',
        'examples.basic.title': '1. Renderização Básica',
        'examples.spectral.title': '2. Renderização Espectral (RGB)',
        'examples.materials.title': '3. Materiais Avançados',
        'examples.gpu.title': '4. Renderização GPU',
        'examples.postprocess.title': '5. Pós-processamento',

        'api.title': 'Referência da API',
        'api.more': 'Para documentação completa da API, visite',

        'performance.title': 'Performance',
        'performance.cpu': 'CPU (Intel i9-13900K)',
        'performance.gpu': 'GPU (RTX 4090)',
        'performance.optimizations': 'Otimizações Implementadas',
        'performance.comparison': 'Comparação de Throughput',

        'usecases.title': 'Casos de Uso',
        'usecases.cinema.title': 'Cinema e VFX',
        'usecases.cinema.desc': 'Renderização fotorrealística para produção cinematográfica com iluminação global fisicamente precisa e efeitos especiais quânticos.',
        'usecases.arch.title': 'Arquitetura e Design',
        'usecases.arch.desc': 'Visualização arquitetônica com simulação precisa de iluminação natural e materiais reais.',
        'usecases.science.title': 'Pesquisa Científica',
        'usecases.science.desc': 'Simulação de fenômenos ópticos quânticos para pesquisa em física e óptica aplicada.',
        'usecases.gaming.title': 'Jogos AAA',
        'usecases.gaming.desc': 'Ray tracing em tempo real para jogos de próxima geração com gráficos fotorrealísticos.',
        'usecases.automotive.title': 'Design Automotivo',
        'usecases.automotive.desc': 'Visualização de veículos com reflexões complexas e materiais metálicos avançados.',
        'usecases.jewelry.title': 'Joalheria e Luxo',
        'usecases.jewelry.desc': 'Renderização de gemas, metais preciosos e materiais translúcidos com dispersão cromática.',
        'usecases.demo': 'Demonstração Interativa',

        'license.title': 'Licença',
        'license.proprietary': 'Licença Proprietária',
        'license.copyright': 'Copyright © 2025 Nícolas Ávila - Todos os Direitos Reservados',
        'license.desc': 'Este software é propriedade exclusiva da Avx. Uso comercial requer licença. Para informações sobre licenciamento, entre em contato:',
        'license.options': 'Opções de Licenciamento',
        'license.option1': 'Individual: Para desenvolvedores independentes',
        'license.option2': 'Empresarial: Até 10 desenvolvedores',
        'license.option3': 'Enterprise: Licença ilimitada',
        'license.option4': 'Custom: Termos personalizados',

        'footer.product': 'Produto',
        'footer.docs': 'Documentação',
        'footer.pricing': 'Preços',
        'footer.examples': 'Exemplos',
        'footer.company': 'Empresa',
        'footer.about': 'Sobre',
        'footer.contact': 'Contato',
        'footer.careers': 'Carreiras',
        'footer.legal': 'Legal',
        'footer.license': 'Licença',
        'footer.privacy': 'Privacidade',
        'footer.terms': 'Termos',
        'footer.connect': 'Conecte-se'
    },

    'en': {
        'nav.overview': 'Overview',
        'nav.types': 'Types',
        'nav.examples': 'Examples',
        'nav.api': 'API',
        'nav.performance': 'Performance',
        'nav.usecases': 'Use Cases',
        'nav.license': 'License',

        'hero.title': 'Quantum Rendering Engine',
        'hero.subtitle': 'Photorealistic rendering based on Quantum Electrodynamics (QED) using path integral formulation',

        'overview.title': 'Module Overview',
        'overview.description': 'Avx Quantum Render is a revolutionary rendering engine that simulates light behavior using fundamental principles of quantum mechanics. Instead of using classical approximations, our engine directly calculates quantum amplitudes through Feynman\'s path integral formulation.',
        'overview.principles': 'Fundamental Principles',
        'overview.principle1.title': 'Path Integrals',
        'overview.principle1.desc': 'Each photon considers all possible paths simultaneously, with quantum phase exp(iS/ℏ)',
        'overview.principle2.title': 'Spectral Rendering',
        'overview.principle2.desc': 'Complete electromagnetic spectrum simulation with wavelength-dependent dispersion and interference',
        'overview.principle3.title': 'Complete QED',
        'overview.principle3.desc': 'Implements Feynman diagrams, polarization, and quantum effects like photon tunneling',
        'overview.principle4.title': 'Extreme Performance',
        'overview.principle4.desc': 'Optimized with SIMD, GPU compute shaders, and massive parallelization for real-time results',
        'overview.features': 'Key Features',

        'types.title': 'Available Types',
        'types.core': 'Core Types',
        'types.quantum': 'Quantum Physics',
        'types.materials': 'Materials and Surfaces',
        'types.acceleration': 'Acceleration and Performance',
        'types.gpu': 'GPU and Backends',
        'types.postprocessing': 'Post-processing',

        'examples.title': 'Usage Examples',
        'examples.basic.title': '1. Basic Rendering',
        'examples.spectral.title': '2. Spectral Rendering (RGB)',
        'examples.materials.title': '3. Advanced Materials',
        'examples.gpu.title': '4. GPU Rendering',
        'examples.postprocess.title': '5. Post-processing',

        'api.title': 'API Reference',
        'api.more': 'For complete API documentation, visit',

        'performance.title': 'Performance',
        'performance.cpu': 'CPU (Intel i9-13900K)',
        'performance.gpu': 'GPU (RTX 4090)',
        'performance.optimizations': 'Implemented Optimizations',
        'performance.comparison': 'Throughput Comparison',

        'usecases.title': 'Use Cases',
        'usecases.cinema.title': 'Cinema and VFX',
        'usecases.cinema.desc': 'Photorealistic rendering for film production with physically accurate global illumination and quantum special effects.',
        'usecases.arch.title': 'Architecture and Design',
        'usecases.arch.desc': 'Architectural visualization with precise natural lighting simulation and real materials.',
        'usecases.science.title': 'Scientific Research',
        'usecases.science.desc': 'Simulation of quantum optical phenomena for physics and applied optics research.',
        'usecases.gaming.title': 'AAA Gaming',
        'usecases.gaming.desc': 'Real-time ray tracing for next-generation games with photorealistic graphics.',
        'usecases.automotive.title': 'Automotive Design',
        'usecases.automotive.desc': 'Vehicle visualization with complex reflections and advanced metallic materials.',
        'usecases.jewelry.title': 'Jewelry and Luxury',
        'usecases.jewelry.desc': 'Rendering of gems, precious metals, and translucent materials with chromatic dispersion.',
        'usecases.demo': 'Interactive Demo',

        'license.title': 'License',
        'license.proprietary': 'Proprietary License',
        'license.copyright': 'Copyright © 2025 Nícolas Ávila - All Rights Reserved',
        'license.desc': 'This software is exclusive property of Avx. Commercial use requires license. For licensing information, contact:',
        'license.options': 'Licensing Options',
        'license.option1': 'Individual: For independent developers',
        'license.option2': 'Business: Up to 10 developers',
        'license.option3': 'Enterprise: Unlimited license',
        'license.option4': 'Custom: Personalized terms',

        'footer.product': 'Product',
        'footer.docs': 'Documentation',
        'footer.pricing': 'Pricing',
        'footer.examples': 'Examples',
        'footer.company': 'Company',
        'footer.about': 'About',
        'footer.contact': 'Contact',
        'footer.careers': 'Careers',
        'footer.legal': 'Legal',
        'footer.license': 'License',
        'footer.privacy': 'Privacy',
        'footer.terms': 'Terms',
        'footer.connect': 'Connect'
    },

    'ru': {
        'nav.overview': 'Обзор',
        'nav.types': 'Типы',
        'nav.examples': 'Примеры',
        'nav.api': 'API',
        'nav.performance': 'Производительность',
        'nav.usecases': 'Случаи использования',
        'nav.license': 'Лицензия',

        'hero.title': 'Квантовый движок рендеринга',
        'hero.subtitle': 'Фотореалистичный рендеринг на основе квантовой электродинамики (КЭД) с использованием формулировки интегралов по траекториям',

        'overview.title': 'Обзор модуля',
        'overview.description': 'Avx Quantum Render - это революционный движок рендеринга, который моделирует поведение света, используя фундаментальные принципы квантовой механики. Вместо использования классических приближений наш движок напрямую вычисляет квантовые амплитуды через формулировку интегралов по траекториям Фейнмана.',

        'types.title': 'Доступные типы',
        'examples.title': 'Примеры использования',
        'api.title': 'Справочник API',
        'performance.title': 'Производительность',
        'usecases.title': 'Случаи использования',
        'license.title': 'Лицензия'
    },

    'ja': {
        'nav.overview': '概要',
        'nav.types': '型',
        'nav.examples': '例',
        'nav.api': 'API',
        'nav.performance': 'パフォーマンス',
        'nav.usecases': '使用例',
        'nav.license': 'ライセンス',

        'hero.title': '量子レンダリングエンジン',
        'hero.subtitle': '経路積分定式化を使用した量子電磁力学（QED）に基づくフォトリアリスティックレンダリング',

        'overview.title': 'モジュール概要',
        'overview.description': 'Avx Quantum Renderは、量子力学の基本原理を使用して光の挙動をシミュレートする革命的なレンダリングエンジンです。古典的な近似を使用する代わりに、ファインマンの経路積分定式化を通じて量子振幅を直接計算します。',

        'types.title': '利用可能な型',
        'examples.title': '使用例',
        'api.title': 'APIリファレンス',
        'performance.title': 'パフォーマンス',
        'usecases.title': '使用例',
        'license.title': 'ライセンス'
    },

    'zh-TW': {
        'nav.overview': '概述',
        'nav.types': '類型',
        'nav.examples': '範例',
        'nav.api': 'API',
        'nav.performance': '效能',
        'nav.usecases': '使用案例',
        'nav.license': '授權',

        'hero.title': '量子渲染引擎',
        'hero.subtitle': '基於量子電動力學（QED）使用路徑積分表述的照片級真實渲染',

        'overview.title': '模組概述',
        'overview.description': 'Avx Quantum Render 是一個革命性的渲染引擎，使用量子力學的基本原理模擬光的行為。我們的引擎不使用經典近似，而是通過費曼路徑積分表述直接計算量子振幅。',

        'types.title': '可用類型',
        'examples.title': '使用範例',
        'api.title': 'API參考',
        'performance.title': '效能',
        'usecases.title': '使用案例',
        'license.title': '授權'
    },

    'ar': {
        'nav.overview': 'نظرة عامة',
        'nav.types': 'الأنواع',
        'nav.examples': 'أمثلة',
        'nav.api': 'API',
        'nav.performance': 'الأداء',
        'nav.usecases': 'حالات الاستخدام',
        'nav.license': 'الترخيص',

        'hero.title': 'محرك التصيير الكمومي',
        'hero.subtitle': 'تصيير واقعي للصور بناءً على الديناميكا الكهربائية الكمومية باستخدام صياغة التكامل المساري',

        'overview.title': 'نظرة عامة على الوحدة',
        'types.title': 'الأنواع المتاحة',
        'examples.title': 'أمثلة الاستخدام',
        'api.title': 'مرجع API',
        'performance.title': 'الأداء',
        'usecases.title': 'حالات الاستخدام',
        'license.title': 'الترخيص'
    },

    'de': {
        'nav.overview': 'Übersicht',
        'nav.types': 'Typen',
        'nav.examples': 'Beispiele',
        'nav.api': 'API',
        'nav.performance': 'Leistung',
        'nav.usecases': 'Anwendungsfälle',
        'nav.license': 'Lizenz',

        'hero.title': 'Quanten-Rendering-Engine',
        'hero.subtitle': 'Fotorealistische Darstellung basierend auf Quantenelektrodynamik (QED) unter Verwendung der Pfadintegralformulierung',

        'overview.title': 'Modulübersicht',
        'types.title': 'Verfügbare Typen',
        'examples.title': 'Verwendungsbeispiele',
        'api.title': 'API-Referenz',
        'performance.title': 'Leistung',
        'usecases.title': 'Anwendungsfälle',
        'license.title': 'Lizenz'
    },

    'es': {
        'nav.overview': 'Descripción general',
        'nav.types': 'Tipos',
        'nav.examples': 'Ejemplos',
        'nav.api': 'API',
        'nav.performance': 'Rendimiento',
        'nav.usecases': 'Casos de uso',
        'nav.license': 'Licencia',

        'hero.title': 'Motor de renderizado cuántico',
        'hero.subtitle': 'Renderizado fotorrealista basado en electrodinámica cuántica (QED) utilizando la formulación de integrales de trayectoria',

        'overview.title': 'Descripción general del módulo',
        'types.title': 'Tipos disponibles',
        'examples.title': 'Ejemplos de uso',
        'api.title': 'Referencia de API',
        'performance.title': 'Rendimiento',
        'usecases.title': 'Casos de uso',
        'license.title': 'Licencia'
    },

    'ur': {
        'nav.overview': 'جائزہ',
        'nav.types': 'اقسام',
        'nav.examples': 'مثالیں',
        'nav.api': 'API',
        'nav.performance': 'کارکردگی',
        'nav.usecases': 'استعمال کے معاملات',
        'nav.license': 'لائسنس',

        'hero.title': 'کوانٹم رینڈرنگ انجن',
        'hero.subtitle': 'کوانٹم الیکٹروڈائنامکس پر مبنی فوٹو ریئلسٹک رینڈرنگ',

        'overview.title': 'ماڈیول کا جائزہ',
        'types.title': 'دستیاب اقسام',
        'examples.title': 'استعمال کی مثالیں',
        'api.title': 'API حوالہ',
        'performance.title': 'کارکردگی',
        'usecases.title': 'استعمال کے معاملات',
        'license.title': 'لائسنس'
    },

    'fr': {
        'nav.overview': 'Aperçu',
        'nav.types': 'Types',
        'nav.examples': 'Exemples',
        'nav.api': 'API',
        'nav.performance': 'Performance',
        'nav.usecases': 'Cas d\'utilisation',
        'nav.license': 'Licence',

        'hero.title': 'Moteur de rendu quantique',
        'hero.subtitle': 'Rendu photoréaliste basé sur l\'électrodynamique quantique (QED) utilisant la formulation intégrale de chemin',

        'overview.title': 'Aperçu du module',
        'types.title': 'Types disponibles',
        'examples.title': 'Exemples d\'utilisation',
        'api.title': 'Référence API',
        'performance.title': 'Performance',
        'usecases.title': 'Cas d\'utilisation',
        'license.title': 'Licence'
    },

    'lv': {
        'nav.overview': 'Pārskats',
        'nav.types': 'Tipi',
        'nav.examples': 'Piemēri',
        'nav.api': 'API',
        'nav.performance': 'Veiktspēja',
        'nav.usecases': 'Lietošanas gadījumi',
        'nav.license': 'Licence',

        'hero.title': 'Kvantu renderēšanas dzinējs',
        'hero.subtitle': 'Fotoreālistiska renderēšana, pamatojoties uz kvantu elektrodinamiku',

        'overview.title': 'Moduļa pārskats',
        'types.title': 'Pieejamie tipi',
        'examples.title': 'Lietošanas piemēri',
        'api.title': 'API atsauce',
        'performance.title': 'Veiktspēja',
        'usecases.title': 'Lietošanas gadījumi',
        'license.title': 'Licence'
    },

    'uz': {
        'nav.overview': 'Umumiy koʻrinish',
        'nav.types': 'Turlar',
        'nav.examples': 'Misollar',
        'nav.api': 'API',
        'nav.performance': 'Ishlash',
        'nav.usecases': 'Foydalanish holatlari',
        'nav.license': 'Litsenziya',

        'hero.title': 'Kvant rendering dvigateli',
        'hero.subtitle': 'Kvant elektrodinamikasiga asoslangan fotorealistik rendering',

        'overview.title': 'Modul haqida',
        'types.title': 'Mavjud turlar',
        'examples.title': 'Foydalanish misollari',
        'api.title': 'API ma\'lumotnomasi',
        'performance.title': 'Ishlash',
        'usecases.title': 'Foydalanish holatlari',
        'license.title': 'Litsenziya'
    }
};

// Função para traduzir a página
function translatePage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translations[lang]?.[key] || translations['en'][key] || key;

        element.textContent = translation;
    });

    // Salvar preferência
    localStorage.setItem('preferred-language', lang);

    // Atualizar atributo de idioma do HTML
    document.documentElement.lang = lang;
}

// Inicializar sistema de idioma
function initI18n() {
    const savedLang = localStorage.getItem('preferred-language') || 'pt-BR';
    const selector = document.getElementById('language-selector');

    if (selector) {
        selector.value = savedLang;
        translatePage(savedLang);

        selector.addEventListener('change', (e) => {
            translatePage(e.target.value);
        });
    }
}

// Inicializar quando DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}
