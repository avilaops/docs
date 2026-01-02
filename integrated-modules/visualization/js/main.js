// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
  }
}

// Language Management
const translations = {
  'pt-BR': {
    title: 'Avx Visualization - Documentação',
    hero: {
      title: 'Avx Visualization',
      subtitle: 'Soluções de visualização de dados e processamento de imagens de alta performance',
      getStarted: 'Começar',
      viewDocs: 'Ver Documentação'
    },
    modules: {
      title: 'Módulos Disponíveis',
      arrow: {
        title: 'Avx-Arrow',
        description: 'Formato colunar nativo otimizado para computação científica'
      },
      image: {
        title: 'Avx-Image',
        description: 'Biblioteca avançada de visão computacional e IA generativa'
      }
    },
    features: {
      title: 'Recursos Principais',
      performance: {
        title: 'Performance Extrema',
        description: 'Otimizado com SIMD e zero-copy para máxima velocidade'
      },
      types: {
        title: 'Tipos Científicos',
        description: 'Suporte nativo para quaternions, tensors, complex e spinors'
      },
      compression: {
        title: 'Compressão Inteligente',
        description: 'LZ4, Zstd, Delta, RLE e Dictionary encoding'
      },
      ai: {
        title: 'IA Generativa',
        description: 'Stable Diffusion, ControlNet e NeRF integrados'
      }
    },
    footer: {
      copyright: 'Copyright © 2025 Nícolas Ávila - Todos os Direitos Reservados',
      documentation: 'Documentação',
      support: 'Suporte',
      legal: 'Legal'
    }
  },
  'ru': {
    title: 'Avx Visualization - Документация',
    hero: {
      title: 'Avx Visualization',
      subtitle: 'Высокопроизводительные решения для визуализации данных и обработки изображений',
      getStarted: 'Начать',
      viewDocs: 'Документация'
    },
    modules: {
      title: 'Доступные модули',
      arrow: {
        title: 'Avx-Arrow',
        description: 'Нативный колоночный формат для научных вычислений'
      },
      image: {
        title: 'Avx-Image',
        description: 'Продвинутая библиотека компьютерного зрения и генеративного ИИ'
      }
    },
    features: {
      title: 'Основные функции',
      performance: {
        title: 'Экстремальная производительность',
        description: 'Оптимизировано с SIMD и zero-copy для максимальной скорости'
      },
      types: {
        title: 'Научные типы',
        description: 'Нативная поддержка quaternions, tensors, complex и spinors'
      },
      compression: {
        title: 'Умное сжатие',
        description: 'LZ4, Zstd, Delta, RLE и Dictionary encoding'
      },
      ai: {
        title: 'Генеративный ИИ',
        description: 'Интегрированные Stable Diffusion, ControlNet и NeRF'
      }
    },
    footer: {
      copyright: 'Copyright © 2025 Нікалас Авіла - Все права защищены',
      documentation: 'Документация',
      support: 'Поддержка',
      legal: 'Юридический'
    }
  },
  'ja': {
    title: 'Avx Visualization - ドキュメント',
    hero: {
      title: 'Avx Visualization',
      subtitle: '高性能データ可視化と画像処理ソリューション',
      getStarted: '始める',
      viewDocs: 'ドキュメント'
    },
    modules: {
      title: '利用可能なモジュール',
      arrow: {
        title: 'Avx-Arrow',
        description: '科学計算に最適化されたネイティブ列形式'
      },
      image: {
        title: 'Avx-Image',
        description: '高度なコンピュータービジョンと生成AIライブラリ'
      }
    },
    features: {
      title: '主な機能',
      performance: {
        title: '極限のパフォーマンス',
        description: 'SIMDとzero-copyで最高速度を実現'
      },
      types: {
        title: '科学的型',
        description: 'quaternions、tensors、complex、spinorsのネイティブサポート'
      },
      compression: {
        title: 'インテリジェント圧縮',
        description: 'LZ4、Zstd、Delta、RLE、Dictionary encoding'
      },
      ai: {
        title: '生成AI',
        description: 'Stable Diffusion、ControlNet、NeRFを統合'
      }
    },
    footer: {
      copyright: 'Copyright © 2025 ニコラス・アビラ - 全著作権所有',
      documentation: 'ドキュメント',
      support: 'サポート',
      legal: '法的'
    }
  },
  'zh-TW': {
    title: 'Avx Visualization - 文檔',
    hero: {
      title: 'Avx Visualization',
      subtitle: '高性能數據可視化和圖像處理解決方案',
      getStarted: '開始',
      viewDocs: '查看文檔'
    },
    modules: {
      title: '可用模組',
      arrow: {
        title: 'Avx-Arrow',
        description: '為科學計算優化的原生列格式'
      },
      image: {
        title: 'Avx-Image',
        description: '先進的計算機視覺和生成式AI庫'
      }
    },
    features: {
      title: '主要功能',
      performance: {
        title: '極致性能',
        description: '使用SIMD和zero-copy優化以獲得最高速度'
      },
      types: {
        title: '科學類型',
        description: '原生支持quaternions、tensors、complex和spinors'
      },
      compression: {
        title: '智能壓縮',
        description: 'LZ4、Zstd、Delta、RLE和Dictionary encoding'
      },
      ai: {
        title: '生成式AI',
        description: '集成Stable Diffusion、ControlNet和NeRF'
      }
    },
    footer: {
      copyright: 'Copyright © 2025 尼古拉斯·阿維拉 - 保留所有權利',
      documentation: '文檔',
      support: '支援',
      legal: '法律'
    }
  },
  'ur': {
    title: 'Avx Visualization - دستاویزات',
    hero: {
      title: 'Avx Visualization',
      subtitle: 'اعلی کارکردگی ڈیٹا تصویری اور تصویر پروسیسنگ حل',
      getStarted: 'شروع کریں',
      viewDocs: 'دستاویزات دیکھیں'
    },
    modules: {
      title: 'دستیاب ماڈیولز',
      arrow: {
        title: 'Avx-Arrow',
        description: 'سائنسی کمپیوٹنگ کے لیے بہتر مقامی کالمی فارمیٹ'
      },
      image: {
        title: 'Avx-Image',
        description: 'جدید کمپیوٹر ویژن اور جنریٹو AI لائبریری'
      }
    },
    features: {
      title: 'اہم خصوصیات',
      performance: {
        title: 'انتہائی کارکردگی',
        description: 'زیادہ سے زیادہ رفتار کے لیے SIMD اور zero-copy کے ساتھ بہتر'
      },
      types: {
        title: 'سائنسی اقسام',
        description: 'quaternions، tensors، complex اور spinors کی مقامی حمایت'
      },
      compression: {
        title: 'ذہین کمپریشن',
        description: 'LZ4، Zstd، Delta، RLE اور Dictionary encoding'
      },
      ai: {
        title: 'جنریٹو AI',
        description: 'مربوط Stable Diffusion، ControlNet اور NeRF'
      }
    },
    footer: {
      copyright: 'Copyright © 2025 نکولس اویلا - تمام حقوق محفوظ',
      documentation: 'دستاویزات',
      support: 'معاونت',
      legal: 'قانونی'
    }
  },
  'ar': {
    title: 'Avx Visualization - التوثيق',
    hero: {
      title: 'Avx Visualization',
      subtitle: 'حلول عالية الأداء لتصور البيانات ومعالجة الصور',
      getStarted: 'ابدأ',
      viewDocs: 'عرض التوثيق'
    },
    modules: {
      title: 'الوحدات المتاحة',
      arrow: {
        title: 'Avx-Arrow',
        description: 'تنسيق عمودي أصلي محسّن للحوسبة العلمية'
      },
      image: {
        title: 'Avx-Image',
        description: 'مكتبة متقدمة لرؤية الكمبيوتر والذكاء الاصطناعي التوليدي'
      }
    },
    features: {
      title: 'الميزات الرئيسية',
      performance: {
        title: 'أداء فائق',
        description: 'محسّن باستخدام SIMD و zero-copy لأقصى سرعة'
      },
      types: {
        title: 'أنواع علمية',
        description: 'دعم أصلي لـ quaternions و tensors و complex و spinors'
      },
      compression: {
        title: 'ضغط ذكي',
        description: 'LZ4 و Zstd و Delta و RLE و Dictionary encoding'
      },
      ai: {
        title: 'الذكاء الاصطناعي التوليدي',
        description: 'مدمج Stable Diffusion و ControlNet و NeRF'
      }
    },
    footer: {
      copyright: 'حقوق النشر © 2025 نيكولاس أفيلا - جميع الحقوق محفوظة',
      documentation: 'التوثيق',
      support: 'الدعم',
      legal: 'قانوني'
    }
  },
  'de': {
    title: 'Avx Visualization - Dokumentation',
    hero: {
      title: 'Avx Visualization',
      subtitle: 'Hochleistungs-Datenvisualisierung und Bildverarbeitungslösungen',
      getStarted: 'Loslegen',
      viewDocs: 'Dokumentation anzeigen'
    },
    modules: {
      title: 'Verfügbare Module',
      arrow: {
        title: 'Avx-Arrow',
        description: 'Natives spaltenorientiertes Format für wissenschaftliches Rechnen'
      },
      image: {
        title: 'Avx-Image',
        description: 'Fortgeschrittene Computer Vision und generative KI-Bibliothek'
      }
    },
    features: {
      title: 'Hauptmerkmale',
      performance: {
        title: 'Extreme Leistung',
        description: 'Mit SIMD und zero-copy für maximale Geschwindigkeit optimiert'
      },
      types: {
        title: 'Wissenschaftliche Typen',
        description: 'Native Unterstützung für quaternions, tensors, complex und spinors'
      },
      compression: {
        title: 'Intelligente Kompression',
        description: 'LZ4, Zstd, Delta, RLE und Dictionary encoding'
      },
      ai: {
        title: 'Generative KI',
        description: 'Integriert Stable Diffusion, ControlNet und NeRF'
      }
    },
    footer: {
      copyright: 'Copyright © 2025 Nícolas Ávila - Alle Rechte vorbehalten',
      documentation: 'Dokumentation',
      support: 'Unterstützung',
      legal: 'Rechtliches'
    }
  },
  'es': {
    title: 'Avx Visualization - Documentación',
    hero: {
      title: 'Avx Visualization',
      subtitle: 'Soluciones de visualización de datos y procesamiento de imágenes de alto rendimiento',
      getStarted: 'Comenzar',
      viewDocs: 'Ver Documentación'
    },
    modules: {
      title: 'Módulos Disponibles',
      arrow: {
        title: 'Avx-Arrow',
        description: 'Formato columnar nativo optimizado para computación científica'
      },
      image: {
        title: 'Avx-Image',
        description: 'Biblioteca avanzada de visión por computadora e IA generativa'
      }
    },
    features: {
      title: 'Características Principales',
      performance: {
        title: 'Rendimiento Extremo',
        description: 'Optimizado con SIMD y zero-copy para máxima velocidad'
      },
      types: {
        title: 'Tipos Científicos',
        description: 'Soporte nativo para quaternions, tensors, complex y spinors'
      },
      compression: {
        title: 'Compresión Inteligente',
        description: 'LZ4, Zstd, Delta, RLE y Dictionary encoding'
      },
      ai: {
        title: 'IA Generativa',
        description: 'Integra Stable Diffusion, ControlNet y NeRF'
      }
    },
    footer: {
      copyright: 'Copyright © 2025 Nícolas Ávila - Todos los Derechos Reservados',
      documentation: 'Documentación',
      support: 'Soporte',
      legal: 'Legal'
    }
  }
};

let currentLang = 'pt-BR';

function initLanguage() {
  const savedLang = localStorage.getItem('language') || 'pt-BR';
  currentLang = savedLang;
  updateLanguage(savedLang);
}

function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  updateLanguage(lang);
}

function updateLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.title = t.title;

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const value = getNestedTranslation(t, key);
    if (value) {
      element.textContent = value;
    }
  });

  // Update language selector
  const langSelect = document.querySelector('.lang-select');
  if (langSelect) {
    langSelect.value = lang;
  }
}

function getNestedTranslation(obj, path) {
  return path.split('.').reduce((current, prop) => current?.[prop], obj);
}

// Code Copy Functionality
function copyCode(button) {
  const codeBlock = button.closest('.code-block');
  const code = codeBlock.querySelector('code').textContent;

  navigator.clipboard.writeText(code).then(() => {
    const originalText = button.textContent;
    button.textContent = '✓ Copiado!';
    setTimeout(() => {
      button.textContent = originalText;
    }, 2000);
  });
}

// Smooth Scroll
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();

  // Add event listeners
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  const langSelect = document.querySelector('.lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => changeLanguage(e.target.value));
  }

  // Add copy buttons to all code blocks
  document.querySelectorAll('.code-block').forEach(block => {
    if (!block.querySelector('.copy-button')) {
      const button = document.createElement('button');
      button.className = 'copy-button';
      button.textContent = '📋 Copiar';
      button.onclick = () => copyCode(button);

      const header = block.querySelector('.code-header');
      if (header) {
        header.appendChild(button);
      }
    }
  });

  // Fade in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  document.querySelectorAll('section, .card').forEach(el => {
    observer.observe(el);
  });
});

// Export for use in HTML
window.toggleTheme = toggleTheme;
window.changeLanguage = changeLanguage;
window.copyCode = copyCode;
window.smoothScroll = smoothScroll;
