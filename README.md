# Arxis Documentation Site

Documentation site for Arxis Core built with [Docusaurus](https://docusaurus.io/).

## 🌐 Live Site

Visit the live documentation at: **https://docs.avila.inc**

## 🚀 Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory that can be served using any static hosting service.

### Deployment

```bash
npm run deploy
```

Deploys the site to GitHub Pages.

## 📁 Structure

```
docs/
├── blog/                  # Blog posts
├── docs/                  # Documentation pages
│   ├── intro.md          # Introduction
│   ├── getting-started/  # Getting started guides
│   ├── architecture/     # Architecture documentation
│   └── packages/         # Package-specific docs
├── src/
│   ├── components/       # React components
│   ├── css/             # Custom CSS
│   └── pages/           # Custom pages
├── static/              # Static assets
│   └── img/            # Images
├── docusaurus.config.ts # Site configuration
├── sidebars.ts          # Sidebar structure
└── package.json         # Dependencies
```

## 📝 Writing Documentation

### Adding a New Page

1. Create a markdown file in the appropriate directory under `docs/`
2. Add frontmatter:

```markdown
---
sidebar_position: 1
---

# Page Title

Content here...
```

3. The page will automatically appear in the sidebar

### Adding a Blog Post

1. Create a markdown file in `blog/` with date prefix: `YYYY-MM-DD-title.md`
2. Add frontmatter:

```markdown
---
slug: url-slug
title: Post Title
authors: [nicolas]
tags: [tag1, tag2]
---

Content here...
```

## 🎨 Customization

- **Theme**: Edit `src/css/custom.css`
- **Logo**: Replace files in `static/img/`
- **Config**: Modify `docusaurus.config.ts`
- **Sidebar**: Update `sidebars.ts`

## 📦 Categories

Documentation is organized into these main categories:

- **Getting Started**: Installation and quick start
- **Architecture**: System design and structure
- **Packages**: Individual package documentation
  - Crypto & Security
  - Network & Communication
  - Distributed Systems
  - Database
  - AI & Machine Learning
  - Math & Scientific Computing
  - And more...

## 🔍 Search

The site uses Algolia DocSearch for full-text search. Configure in `docusaurus.config.ts`.

## 📄 License

Copyright © 2025 Nícolas Ávila. All rights reserved.

The documentation is proprietary. See the main [LICENSE](../LICENSE-PROPRIETARY.md) for details.

## 🤝 Contributing

Contributions to documentation are welcome! See [CONTRIBUTING.md](../CONTRIBUTING.md).

## 📧 Contact

- **Website**: https://avilaops.com
- **Email**: nicolas@avila.inc
- **GitHub**: https://github.com/avilaops/arxis-core
