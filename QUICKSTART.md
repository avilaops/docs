# 📚 docs.avila.inc - Arxis Core Documentation

Complete documentation site for the Arxis Core ecosystem built with Docusaurus.

## 🌐 Live Site

**https://docs.avila.inc**

## 🎯 What's Included

### ✅ Complete Documentation Structure

- **Introduction & Getting Started**
  - Installation guide
  - Quick start tutorial
  - Code examples

- **Architecture Documentation**
  - System overview
  - Layer structure
  - Dependency hierarchy
  - Workspace organization

- **Package Documentation** (18 Categories)
  - 🔐 Crypto & Security (15 packages)
  - 🌐 Network & Communication (13 packages)
  - 🔄 Distributed Systems (13 packages)
  - 💾 Database (9 packages)
  - 🤖 AI & Machine Learning (9 packages)
  - 🎨 Math & Scientific Computing (16 packages)
  - 🎮 GPU & Graphics (14 packages)
  - And more...

- **Blog System**
  - Tutorials
  - Release notes
  - Technical articles

### ✅ Modern Features

- 🎨 **Beautiful UI** - Clean, professional Docusaurus theme
- 🔍 **Full-text Search** - Algolia DocSearch integration
- 🌍 **Internationalization** - English and Portuguese support
- 📱 **Responsive Design** - Works on all devices
- ⚡ **Fast Loading** - Optimized static site generation
- 🌙 **Dark Mode** - Built-in theme switching

### ✅ Developer Experience

- 🔥 **Hot Reload** - Instant preview during development
- 📝 **Markdown Support** - Easy content authoring
- 🎯 **TypeScript** - Type-safe configuration
- 🚀 **One-Command Deploy** - Simple GitHub Pages deployment

## 🚀 Quick Start

### Install Dependencies

```powershell
cd docs
npm install
```

### Start Development Server

```powershell
# Using npm
npm start

# Using the build script
.\build.ps1 start
```

Visit http://localhost:3000

### Build for Production

```powershell
# Using npm
npm run build

# Using the build script
.\build.ps1 build
```

### Deploy to GitHub Pages

```powershell
# Using npm
npm run deploy

# Using the build script
.\build.ps1 deploy
```

## 📁 Project Structure

```
docs/
│
├── 📄 Configuration Files
│   ├── package.json           # Dependencies
│   ├── docusaurus.config.ts   # Site configuration
│   ├── sidebars.ts            # Sidebar structure
│   └── tsconfig.json          # TypeScript config
│
├── 📝 Content
│   ├── docs/                  # Documentation pages
│   │   ├── intro.md          # Main introduction
│   │   ├── getting-started/  # Tutorials
│   │   ├── architecture/     # Architecture docs
│   │   └── packages/         # Package documentation
│   │       ├── crypto/       # Crypto packages
│   │       ├── network/      # Network packages
│   │       └── ...
│   │
│   └── blog/                 # Blog posts
│       └── 2025-01-02-*.md  # Date-prefixed posts
│
├── 🎨 Theme & Components
│   └── src/
│       ├── components/       # React components
│       ├── css/             # Styles
│       └── pages/           # Custom pages
│
├── 📦 Static Assets
│   └── static/
│       ├── img/             # Images
│       └── CNAME            # Custom domain
│
└── 🛠️ Scripts
    ├── build.ps1            # PowerShell build script
    ├── build.sh             # Bash build script
    ├── DEPLOY.md            # Deployment guide
    └── README.md            # This file
```

## 📖 Writing Documentation

### Add a New Documentation Page

1. Create a markdown file in `docs/` (e.g., `docs/my-topic.md`)

2. Add frontmatter:
```markdown
---
sidebar_position: 1
title: My Topic
---

# My Topic

Content here...
```

3. The page automatically appears in the sidebar!

### Add a Blog Post

1. Create `blog/YYYY-MM-DD-title.md`

2. Add frontmatter:
```markdown
---
slug: my-post
title: My Post Title
authors: [nicolas]
tags: [tutorial, rust]
---

Post content...
```

### Add Images

1. Place images in `static/img/`
2. Reference in markdown: `![Alt text](/img/my-image.png)`

## 🎨 Customization

### Change Colors

Edit `src/css/custom.css`:

```css
:root {
  --ifm-color-primary: #2e8555;
  /* ... more colors */
}
```

### Modify Navigation

Edit `docusaurus.config.ts`:

```typescript
navbar: {
  items: [
    {
      label: 'My Section',
      to: '/docs/my-section',
    },
  ],
}
```

### Update Sidebar

Edit `sidebars.ts`:

```typescript
{
  type: 'category',
  label: 'My Category',
  items: ['page1', 'page2'],
}
```

## 🚀 Deployment

### Method 1: GitHub Pages (Recommended)

```powershell
.\build.ps1 deploy
```

The site will be available at:
- https://docs.avila.inc (custom domain)
- https://avilaops.github.io/arxis-core

### Method 2: Manual Deployment

```powershell
# Build
npm run build

# Output is in build/ directory
# Upload to any static hosting service
```

### Method 3: Continuous Deployment

GitHub Actions workflow automatically deploys on push to main branch.

## 📊 Built With

- **[Docusaurus](https://docusaurus.io/)** - Static site generator
- **[React](https://react.dev/)** - UI framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[MDX](https://mdxjs.com/)** - Markdown with JSX
- **[Algolia](https://www.algolia.com/)** - Search functionality

## 🎯 Next Steps

1. **Install dependencies**: `npm install`
2. **Start development**: `npm start`
3. **Add more documentation** in `docs/`
4. **Customize theme** in `src/`
5. **Deploy**: `npm run deploy`

## 📚 Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Markdown Guide](https://www.markdownguide.org/)
- [MDX Documentation](https://mdxjs.com/docs/)
- [React Documentation](https://react.dev/)

## 🤝 Contributing

We welcome documentation contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Write clear, concise documentation
4. Test locally with `npm start`
5. Submit a pull request

## 📄 License

Copyright © 2025 Nícolas Ávila. All rights reserved.

See [LICENSE-PROPRIETARY.md](../LICENSE-PROPRIETARY.md) for details.

## 📧 Support

- **Website**: https://avilaops.com
- **Email**: nicolas@avila.inc
- **GitHub**: https://github.com/avilaops/arxis-core

---

**Made with ❤️ by the Arxis Team**
