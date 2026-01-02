# Documentação Avx Quantum Render

Esta pasta contém a documentação HTML interativa multilíngue do Avx Quantum Render.

## 📂 Estrutura

```
docs/
├── styles.css          Estilos globais (light/dark theme)
├── theme.js            Sistema de tema (toggle light/dark)
├── i18n.js             Sistema de internacionalização
├── animations.js       Animações e efeitos visuais
└── modules/
    ├── renderer.html   Documentação do módulo Renderer
    ├── scene.html      Documentação do módulo Scene
    └── materials.html  Documentação do módulo Materials
```

## 🌐 Como Usar

### Abrir Documentação Principal
1. Abra `../index.html` no navegador
2. Ou acesse: https://docs.avila.inc/rendering/avx-quantum-render

### Navegação
- **Página Principal:** [../index.html](../index.html)
- **Módulos Individuais:** [modules/](modules/)
  - [Renderer](modules/renderer.html)
  - [Scene](modules/scene.html)
  - [Materials](modules/materials.html)

## 🎨 Temas

A documentação suporta dois temas:

### Light Theme
- Laranja (#FF8C00)
- Amarelo (#FFD700)
- Branco (#FFFFFF)

### Dark Theme
- Laranja (#FF8C00)
- Amarelo (#FFD700)
- Cinza Espacial (#1a1a2e, #16213e)

Toggle entre temas clicando no ícone ☀️/🌙 no header.

## 🌍 Idiomas Suportados

A documentação está disponível em 12 idiomas:

- 🇧🇷 Português (Brasil)
- 🇺🇸 English (USA)
- 🇷🇺 Русский (Rússia)
- 🇯🇵 日本語 (Japão)
- 🇹🇼 繁體中文 (Taiwan)
- 🇵🇰 اردو (Paquistão)
- 🇸🇦 العربية (Árabe)
- 🇩🇪 Deutsch (Alemanha)
- 🇨🇭 Français (Suíça)
- 🇱🇻 Latviešu (Letônia)
- 🇺🇿 Oʻzbekcha (Uzbequistão)
- 🇪🇸 Español (Espanha)

Selecione o idioma no dropdown no header.

## 🎬 Animações

As páginas incluem animações interativas:
- Smooth scrolling
- Fade-in ao carregar seções
- Hover effects em cards
- Code syntax highlighting
- Diagramas animados

## 🛠️ Tecnologias

### HTML5
- Estrutura semântica
- Acessibilidade (ARIA labels)
- Meta tags completas

### CSS3
- CSS Variables (custom properties)
- Flexbox e Grid layouts
- Animações e transições
- Responsive design

### JavaScript (Vanilla)
- Sistema de temas
- Internacionalização
- Smooth scrolling
- LocalStorage para preferências

## 📝 Convenções

### Cores

**Light Theme:**
```css
--primary-color: #FF8C00;      /* Laranja */
--secondary-color: #FFD700;     /* Amarelo */
--bg-color: #FFFFFF;            /* Branco */
--text-color: #1a1a1a;
```

**Dark Theme:**
```css
--primary-color: #FF8C00;       /* Laranja */
--secondary-color: #FFD700;      /* Amarelo */
--bg-color: #1a1a2e;            /* Cinza espacial escuro */
--surface-bg: #16213e;           /* Cinza espacial médio */
--text-color: #e0e0e0;
```

### Tipografia
- **Fonte:** System fonts stack (SF Pro, Segoe UI, Roboto)
- **Títulos:** 700 weight
- **Corpo:** 400 weight
- **Código:** Monospace stack (Consolas, Monaco, Courier New)

### Espaçamento
- Base: 1rem (16px)
- Seções: 4rem padding
- Cards: 2rem padding
- Elementos: 1rem margin

## 🔧 Personalização

### Adicionar Novo Idioma

1. Edite `i18n.js`:
```javascript
translations['pt-BR'] = {
    'key': 'Tradução',
    // ...
};
```

2. Adicione opção no HTML:
```html
<option value="pt-BR">🇧🇷 Português</option>
```

### Adicionar Novo Módulo

1. Crie `modules/novo-modulo.html`
2. Copie estrutura de módulo existente
3. Atualize conteúdo
4. Adicione link na navegação principal

### Modificar Cores

Edite variáveis CSS em `styles.css`:
```css
:root {
    --primary-color: #FF8C00;
    /* Modifique aqui */
}
```

## 📱 Responsividade

A documentação é totalmente responsiva:
- **Desktop:** > 1200px - Layout completo
- **Tablet:** 768px - 1200px - Simplificado
- **Mobile:** < 768px - Vertical stack

## ♿ Acessibilidade

- Contraste WCAG AAA
- ARIA labels
- Keyboard navigation
- Screen reader friendly
- Alt text em imagens

## 📄 Licença

Copyright © 2025-2026 Nícolas Ávila - Todos os Direitos Reservados

Parte do Avx Ecosystem - Software Proprietário

---

**Desenvolvido com ❤️ pela Avx**
