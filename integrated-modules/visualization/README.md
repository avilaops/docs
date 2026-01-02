# 🚀 Servindo a Documentação Localmente

Este guia mostra como servir a documentação HTML localmente.

## Opção 1: Python SimpleHTTPServer

```bash
# Python 3
cd docs
python -m http.server 8000

# Acessar: http://localhost:8000
```

## Opção 2: Node.js http-server

```bash
# Instalar
npm install -g http-server

# Servir
cd docs
http-server -p 8000

# Acessar: http://localhost:8000
```

## Opção 3: VS Code Live Server

1. Instale a extensão "Live Server" no VS Code
2. Abra o arquivo `docs/index.html`
3. Clique com botão direito → "Open with Live Server"

## Estrutura da Documentação

```
docs/
├── index.html              # Página principal
├── avx-arrow/
│   └── index.html         # Documentação Avx-Arrow
├── avx-image/
│   └── index.html         # Documentação Avx-Image
├── css/
│   └── styles.css         # Estilos com temas light/dark
└── js/
    └── main.js            # JavaScript (temas, idiomas, animações)
```

## Recursos Implementados

✅ Sistema de temas (Light/Dark)
✅ Suporte a 8 idiomas (PT-BR, Russo, Japonês, Chinês, Urdu, Árabe, Alemão, Espanhol)
✅ Animações e transições suaves
✅ Copiar código com um clique
✅ Navegação responsiva
✅ Performance otimizada

## Personalizando Temas

Edite `docs/css/styles.css` para ajustar as cores:

```css
:root {
  --light-primary: #FF8C00;    /* Laranja */
  --light-secondary: #FFD700;  /* Amarelo */
  --dark-bg: #0D1117;          /* Cinza espacial */
}
```

## Deploy para Produção

### GitHub Pages

```bash
# Fazer push da pasta docs
git add docs/
git commit -m "Add documentation"
git push

# Ativar GitHub Pages em Settings → Pages → Source: docs/
```

### Netlify

```bash
# netlify.toml na raiz
[build]
  publish = "docs"

# Deploy
netlify deploy --prod
```

## Atualizando Traduções

Edite `docs/js/main.js` e adicione/modifique o objeto `translations`:

```javascript
const translations = {
  'pt-BR': {
    hero: {
      title: 'Seu Título',
      subtitle: 'Seu Subtítulo'
    }
  }
};
```
