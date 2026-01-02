import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Arxis Core Documentation',
  tagline: 'The Mathematical Citadel - Advanced Computing Infrastructure in Rust',
  favicon: 'img/favicon.ico',

  url: 'https://docs.avila.inc',
  baseUrl: '/',

  organizationName: 'avilaops',
  projectName: 'arxis-core',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-BR'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      'pt-BR': {
        label: 'Português (Brasil)',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/avilaops/arxis-core/tree/main/docs/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/avilaops/arxis-core/tree/main/docs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/arxis-social-card.jpg',
    navbar: {
      title: 'Arxis Core',
      logo: {
        alt: 'Arxis Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/category/architecture',
          label: 'Architecture',
          position: 'left',
        },
        {
          to: '/docs/category/packages',
          label: 'Packages',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/avilaops/arxis-core',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
            {
              label: 'Architecture',
              to: '/docs/architecture/overview',
            },
            {
              label: 'API Reference',
              to: '/docs/api',
            },
          ],
        },
        {
          title: 'Categories',
          items: [
            {
              label: 'Crypto & Security',
              to: '/docs/category/crypto-security',
            },
            {
              label: 'Network & Communication',
              to: '/docs/category/network',
            },
            {
              label: 'Distributed Systems',
              to: '/docs/category/distributed',
            },
            {
              label: 'AI & Machine Learning',
              to: '/docs/category/ai-ml',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/avilaops/arxis-core',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/avilaops',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Website',
              href: 'https://avilaops.com',
            },
            {
              label: 'Commercial License',
              href: 'mailto:nicolas@avila.inc',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nícolas Ávila. All rights reserved. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['rust', 'toml', 'bash'],
    },
    algolia: {
      appId: 'YOUR_APP_ID',
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'arxis-docs',
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
