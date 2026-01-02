// Traduções
const translations = {
  'pt-BR': {
    title: 'Documentação AVX Network',
    subtitle: 'Biblioteca de rede de alta performance - 100% nativa',
    modules: 'Módulos',
    overview: 'Visão Geral',
    types: 'Tipos Disponíveis',
    examples: 'Exemplos de Uso',
    api: 'Referências da API',
    performance: 'Performance',
    useCases: 'Casos de Uso',
    license: 'Licença',
    theme: 'Tema',
    language: 'Idioma',
    darkMode: 'Modo Escuro',
    lightMode: 'Modo Claro',
    documentation: 'Documentação Completa',
    copyright: '© 2025 Nícolas Ávila - Todos os Direitos Reservados',
    allRightsReserved: 'Software Proprietário',
    contact: 'Contato',
    learnMore: 'Saiba Mais',
    getStarted: 'Começar',
  },
  'ru': {
    title: 'Документация AVX Network',
    subtitle: 'Высокопроизводительная сетевая библиотека - 100% нативная',
    modules: 'Модули',
    overview: 'Обзор',
    types: 'Доступные типы',
    examples: 'Примеры использования',
    api: 'Справочник API',
    performance: 'Производительность',
    useCases: 'Случаи использования',
    license: 'Лицензия',
    theme: 'Тема',
    language: 'Язык',
    darkMode: 'Темный режим',
    lightMode: 'Светлый режим',
    documentation: 'Полная документация',
    copyright: '© 2025 Николас Авила - Все права защищены',
    allRightsReserved: 'Проприетарное программное обеспечение',
    contact: 'Контакт',
    learnMore: 'Узнать больше',
    getStarted: 'Начать',
  },
  'ja': {
    title: 'AVX Network ドキュメント',
    subtitle: '高性能ネットワークライブラリ - 100%ネイティブ',
    modules: 'モジュール',
    overview: '概要',
    types: '利用可能な型',
    examples: '使用例',
    api: 'APIリファレンス',
    performance: 'パフォーマンス',
    useCases: 'ユースケース',
    license: 'ライセンス',
    theme: 'テーマ',
    language: '言語',
    darkMode: 'ダークモード',
    lightMode: 'ライトモード',
    documentation: '完全なドキュメント',
    copyright: '© 2025 ニコラス・アビラ - 無断転載禁止',
    allRightsReserved: 'プロプライエタリソフトウェア',
    contact: '連絡先',
    learnMore: '詳細',
    getStarted: '開始',
  },
  'zh-TW': {
    title: 'AVX Network 文檔',
    subtitle: '高性能網絡庫 - 100% 原生',
    modules: '模組',
    overview: '概述',
    types: '可用類型',
    examples: '使用範例',
    api: 'API 參考',
    performance: '性能',
    useCases: '使用案例',
    license: '許可證',
    theme: '主題',
    language: '語言',
    darkMode: '深色模式',
    lightMode: '淺色模式',
    documentation: '完整文檔',
    copyright: '© 2025 尼古拉斯·阿維拉 - 版權所有',
    allRightsReserved: '專有軟件',
    contact: '聯繫',
    learnMore: '了解更多',
    getStarted: '開始',
  },
  'ur': {
    title: 'AVX Network دستاویزات',
    subtitle: 'اعلی کارکردگی نیٹ ورک لائبریری - 100% مقامی',
    modules: 'ماڈیولز',
    overview: 'جائزہ',
    types: 'دستیاب اقسام',
    examples: 'استعمال کی مثالیں',
    api: 'API حوالہ جات',
    performance: 'کارکردگی',
    useCases: 'استعمال کے معاملات',
    license: 'لائسنس',
    theme: 'تھیم',
    language: 'زبان',
    darkMode: 'تاریک موڈ',
    lightMode: 'روشن موڈ',
    documentation: 'مکمل دستاویزات',
    copyright: '© 2025 نکولس اویلا - تمام حقوق محفوظ',
    allRightsReserved: 'ملکیتی سافٹ ویئر',
    contact: 'رابطہ',
    learnMore: 'مزید جانیں',
    getStarted: 'شروع کریں',
  },
  'ar': {
    title: 'وثائق AVX Network',
    subtitle: 'مكتبة شبكات عالية الأداء - 100٪ أصلية',
    modules: 'الوحدات',
    overview: 'نظرة عامة',
    types: 'الأنواع المتاحة',
    examples: 'أمثلة الاستخدام',
    api: 'مرجع API',
    performance: 'الأداء',
    useCases: 'حالات الاستخدام',
    license: 'الترخيص',
    theme: 'السمة',
    language: 'اللغة',
    darkMode: 'الوضع الداكن',
    lightMode: 'الوضع الفاتح',
    documentation: 'الوثائق الكاملة',
    copyright: '© 2025 نيكولاس أفيلا - جميع الحقوق محفوظة',
    allRightsReserved: 'برمجيات خاصة',
    contact: 'اتصل',
    learnMore: 'اعرف المزيد',
    getStarted: 'ابدأ',
  },
  'de': {
    title: 'AVX Network Dokumentation',
    subtitle: 'Hochleistungs-Netzwerkbibliothek - 100% nativ',
    modules: 'Module',
    overview: 'Übersicht',
    types: 'Verfügbare Typen',
    examples: 'Verwendungsbeispiele',
    api: 'API-Referenz',
    performance: 'Leistung',
    useCases: 'Anwendungsfälle',
    license: 'Lizenz',
    theme: 'Thema',
    language: 'Sprache',
    darkMode: 'Dunkelmodus',
    lightMode: 'Hellmodus',
    documentation: 'Vollständige Dokumentation',
    copyright: '© 2025 Nícolas Ávila - Alle Rechte vorbehalten',
    allRightsReserved: 'Proprietäre Software',
    contact: 'Kontakt',
    learnMore: 'Mehr erfahren',
    getStarted: 'Loslegen',
  },
  'lv': {
    title: 'AVX Network dokumentācija',
    subtitle: 'Augstas veiktspējas tīkla bibliotēka - 100% vietējā',
    modules: 'Moduļi',
    overview: 'Pārskats',
    types: 'Pieejamie tipi',
    examples: 'Lietošanas piemēri',
    api: 'API atsauce',
    performance: 'Veiktspēja',
    useCases: 'Lietošanas gadījumi',
    license: 'Licence',
    theme: 'Tēma',
    language: 'Valoda',
    darkMode: 'Tumšais režīms',
    lightMode: 'Gaišais režīms',
    documentation: 'Pilna dokumentācija',
    copyright: '© 2025 Nícolas Ávila - Visas tiesības aizsargātas',
    allRightsReserved: 'Īpašuma programmatūra',
    contact: 'Kontakts',
    learnMore: 'Uzzināt vairāk',
    getStarted: 'Sākt',
  },
  'uz': {
    title: 'AVX Network hujjatlari',
    subtitle: 'Yuqori unumdorlikli tarmoq kutubxonasi - 100% mahalliy',
    modules: 'Modullar',
    overview: 'Umumiy koʻrinish',
    types: 'Mavjud turlar',
    examples: 'Foydalanish misollari',
    api: 'API maʼlumotnoma',
    performance: 'Ishlash',
    useCases: 'Foydalanish holatlari',
    license: 'Litsenziya',
    theme: 'Mavzu',
    language: 'Til',
    darkMode: 'Qorong\'i rejim',
    lightMode: 'Yorug\' rejim',
    documentation: 'Toʻliq hujjatlar',
    copyright: '© 2025 Nícolas Ávila - Barcha huquqlar himoyalangan',
    allRightsReserved: 'Mulkiy dasturiy taʼminot',
    contact: 'Aloqa',
    learnMore: 'Koʻproq bilib oling',
    getStarted: 'Boshlash',
  },
  'es': {
    title: 'Documentación AVX Network',
    subtitle: 'Biblioteca de red de alto rendimiento - 100% nativa',
    modules: 'Módulos',
    overview: 'Visión general',
    types: 'Tipos disponibles',
    examples: 'Ejemplos de uso',
    api: 'Referencias de API',
    performance: 'Rendimiento',
    useCases: 'Casos de uso',
    license: 'Licencia',
    theme: 'Tema',
    language: 'Idioma',
    darkMode: 'Modo oscuro',
    lightMode: 'Modo claro',
    documentation: 'Documentación completa',
    copyright: '© 2025 Nícolas Ávila - Todos los derechos reservados',
    allRightsReserved: 'Software propietario',
    contact: 'Contacto',
    learnMore: 'Saber más',
    getStarted: 'Comenzar',
  },
};

// Sistema de temas
class ThemeManager {
  constructor() {
    this.currentTheme = localStorage.getItem('theme') || 'light';
    this.applyTheme();
  }

  toggle() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme();
    localStorage.setItem('theme', this.currentTheme);
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    const button = document.getElementById('theme-toggle');
    if (button) {
      button.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
    }
  }
}

// Sistema de internacionalização
class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('lang') || 'pt-BR';
    this.translations = translations;
  }

  setLanguage(lang) {
    if (this.translations[lang]) {
      this.currentLang = lang;
      localStorage.setItem('lang', lang);
      this.updatePageContent();
    }
  }

  translate(key) {
    return this.translations[this.currentLang][key] || key;
  }

  updatePageContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.translate(key);

      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    });
  }
}

// Animações e efeitos
class AnimationManager {
  constructor() {
    this.observeElements();
  }

  observeElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.module-card, .section').forEach(el => {
      observer.observe(el);
    });
  }

  animatePerformanceChart(chartId, targetValue) {
    const fill = document.querySelector(`#${chartId} .chart-fill`);
    if (fill) {
      setTimeout(() => {
        fill.style.width = `${targetValue}%`;
      }, 300);
    }
  }

  animateAllCharts() {
    const charts = document.querySelectorAll('.chart-fill');
    charts.forEach((chart, index) => {
      const targetValue = chart.getAttribute('data-value');
      setTimeout(() => {
        chart.style.width = `${targetValue}%`;
      }, index * 200);
    });
  }
}

// Navegação suave
function smoothScroll(targetId) {
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Copiar código para clipboard
function copyCode(button) {
  const codeBlock = button.previousElementSibling;
  const code = codeBlock.textContent;

  navigator.clipboard.writeText(code).then(() => {
    button.textContent = '✓ Copiado!';
    setTimeout(() => {
      button.textContent = '📋 Copiar';
    }, 2000);
  });
}

// Busca de módulos
function searchModules(query) {
  const cards = document.querySelectorAll('.module-card');
  const lowerQuery = query.toLowerCase();

  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();

    if (title.includes(lowerQuery) || description.includes(lowerQuery)) {
      card.style.display = 'block';
      card.classList.add('fade-in');
    } else {
      card.style.display = 'none';
    }
  });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar gerenciadores
  const themeManager = new ThemeManager();
  const i18nManager = new I18nManager();
  const animationManager = new AnimationManager();

  // Atualizar conteúdo inicial
  i18nManager.updatePageContent();

  // Event listeners
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => themeManager.toggle());
  }

  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.value = i18nManager.currentLang;
    langSelect.addEventListener('change', (e) => {
      i18nManager.setLanguage(e.target.value);
    });
  }

  // Animar gráficos de performance
  setTimeout(() => {
    animationManager.animateAllCharts();
  }, 500);

  // Adicionar botões de copiar aos blocos de código
  document.querySelectorAll('pre').forEach(pre => {
    const button = document.createElement('button');
    button.className = 'copy-btn';
    button.textContent = '📋 Copiar';
    button.onclick = () => copyCode(button);
    pre.parentElement.style.position = 'relative';
    pre.parentElement.appendChild(button);
  });
});

// Exportar para uso global
window.AVX = {
  ThemeManager,
  I18nManager,
  AnimationManager,
  smoothScroll,
  copyCode,
  searchModules
};
