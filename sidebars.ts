import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/examples',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      link: {
        type: 'generated-index',
        title: 'Architecture Overview',
        description: 'Learn about the Arxis Core architecture and design principles.',
        slug: '/category/architecture',
      },
      items: [
        'architecture/overview',
        'architecture/layers',
        'architecture/dependencies',
        'architecture/workspaces',
      ],
    },
    {
      type: 'category',
      label: '🔐 Crypto & Security',
      link: {
        type: 'generated-index',
        title: 'Cryptography & Security',
        description: 'Cryptographic primitives and security tools.',
        slug: '/category/crypto-security',
      },
      items: [
        'packages/crypto/avx-crypto',
        'packages/crypto/avx-aead',
        'packages/crypto/avx-hash',
        'packages/crypto/avx-signature',
        'packages/crypto/avx-zkp',
        'packages/crypto/avx-post-quantum',
      ],
    },
    {
      type: 'category',
      label: '🌐 Network & Communication',
      link: {
        type: 'generated-index',
        title: 'Network & Communication',
        description: 'Network protocols and communication tools.',
        slug: '/category/network',
      },
      items: [
        'packages/network/avx-http',
        'packages/network/avx-grpc',
        'packages/network/avx-quic',
        'packages/network/avx-websocket',
        'packages/network/avx-tcp',
      ],
    },
    {
      type: 'category',
      label: '🔄 Distributed Systems',
      link: {
        type: 'generated-index',
        title: 'Distributed Systems',
        description: 'Distributed computing and consensus protocols.',
        slug: '/category/distributed',
      },
      items: [
        'packages/distributed/avx-raft',
        'packages/distributed/avx-gossip',
        'packages/distributed/avx-election',
        'packages/distributed/avx-replication',
      ],
    },
    {
      type: 'category',
      label: '💾 Database',
      link: {
        type: 'generated-index',
        title: 'Database Systems',
        description: 'Database engines and storage solutions.',
        slug: '/category/database',
      },
      items: [
        'packages/database/avxdb',
        'packages/database/avxdb-core',
        'packages/database/avx-sql',
        'packages/database/avx-query',
      ],
    },
    {
      type: 'category',
      label: '🤖 AI & Machine Learning',
      link: {
        type: 'generated-index',
        title: 'AI & Machine Learning',
        description: 'Neural networks, deep learning, and AI tools.',
        slug: '/category/ai-ml',
      },
      items: [
        'packages/ai/avx-synth',
        'packages/ai/avx-nn',
        'packages/ai/avx-llm',
        'packages/ai/avx-vision',
      ],
    },
    {
      type: 'category',
      label: '🎨 Math & Scientific Computing',
      link: {
        type: 'generated-index',
        title: 'Mathematical Computing',
        description: 'Advanced mathematical computations and algorithms.',
        slug: '/category/math',
      },
      items: [
        'packages/math/avx-tensor',
        'packages/math/avx-linalg',
        'packages/math/avx-calc',
        'packages/math/avx-stats',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/core',
        'api/network',
        'api/crypto',
      ],
    },
  ],
};

export default sidebars;
