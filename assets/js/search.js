// Search functionality for Arxis Core Docs
class DocsSearch {
    constructor() {
        this.searchIndex = [];
        this.searchInput = null;
        this.searchResults = null;
        this.init();
    }

    init() {
        this.createSearchUI();
        this.buildSearchIndex();
        this.attachEventListeners();
    }

    createSearchUI() {
        // Create search container
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.innerHTML = `
            <div class="search-box">
                <input type="text" 
                       id="docs-search" 
                       class="search-input" 
                       placeholder="Search documentation... (Ctrl+K)"
                       autocomplete="off">
                <span class="search-icon">🔍</span>
            </div>
            <div id="search-results" class="search-results hidden"></div>
        `;

        // Insert after header
        const header = document.querySelector('header');
        if (header && header.nextSibling) {
            header.parentNode.insertBefore(searchContainer, header.nextSibling);
        }

        this.searchInput = document.getElementById('docs-search');
        this.searchResults = document.getElementById('search-results');
    }

    buildSearchIndex() {
        // Index structure for searching
        this.searchIndex = [
            // Getting Started
            { title: 'Getting Started', category: 'Guide', url: './getting-started.html', keywords: 'install setup tutorial begin start quick' },
            { title: 'Installation Guide', category: 'Guide', url: './installation.html', keywords: 'install setup rust cargo compile build' },
            { title: 'Architecture Overview', category: 'Guide', url: './architecture.html', keywords: 'architecture design layers workspace structure' },
            { title: 'Examples', category: 'Guide', url: './examples.html', keywords: 'examples code samples tutorial practical' },
            
            // Categories
            { title: 'Cryptography & Security', category: 'Category', url: './categories/crypto-security.html', keywords: 'crypto security encryption hash signature zkp quantum aead' },
            { title: 'Authentication & Authorization', category: 'Category', url: './categories/auth.html', keywords: 'auth jwt oauth sso session login authentication authorization' },
            { title: 'Distributed Systems', category: 'Category', url: './categories/distributed.html', keywords: 'distributed raft gossip consensus election replication' },
            { title: 'Network & Communication', category: 'Category', url: './categories/network.html', keywords: 'network http grpc quic websocket tcp udp protocol' },
            { title: 'Database & Storage', category: 'Category', url: './categories/database.html', keywords: 'database sql nosql cache storage index query' },
            { title: 'Email & Messaging', category: 'Category', url: './categories/email.html', keywords: 'email smtp imap templates messaging queue' },
            { title: 'Cloud & Infrastructure', category: 'Category', url: './categories/cloud.html', keywords: 'cloud kubernetes docker terraform ansible devops' },
            { title: 'System Architecture', category: 'Category', url: './categories/architecture.html', keywords: 'architecture microservices event-driven cqrs saga patterns' },
            { title: 'Observability & Monitoring', category: 'Category', url: './categories/observability.html', keywords: 'monitoring metrics tracing logs observability prometheus' },
            { title: 'GPU Computing', category: 'Category', url: './categories/gpu.html', keywords: 'gpu cuda opencl rocm compute parallel simd' },
            { title: 'Graphics & Rendering', category: 'Category', url: './categories/rendering.html', keywords: 'graphics rendering vulkan opengl webgpu raytracing' },
            { title: 'Visualization', category: 'Category', url: './categories/visualization.html', keywords: 'visualization charts graphs plotting dashboard canvas' },
            { title: 'Mathematics', category: 'Category', url: './categories/math.html', keywords: 'math tensor linear algebra statistics probability calculus' },
            { title: 'Web Development', category: 'Category', url: './categories/web.html', keywords: 'web rest api graphql websocket wasm ssr spa' },
            { title: 'Core Utilities', category: 'Category', url: './categories/core-utils.html', keywords: 'core utils collections async sync primitives buffer' },
            { title: 'CLI & Tools', category: 'Category', url: './categories/cli.html', keywords: 'cli terminal command tools utilities shell' },
            
            // Packages
            { title: 'All Packages', category: 'Packages', url: './packages/index.html', keywords: 'packages crates modules libraries' },
            { title: 'Crypto Packages', category: 'Packages', url: './packages/crypto.html', keywords: 'crypto packages aes rsa ecc hash signature' },
            
            // Legal
            { title: 'License', category: 'Legal', url: './license.html', keywords: 'license proprietary terms commercial copyright' },
        ];
    }

    attachEventListeners() {
        // Search input event
        this.searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });

        // Keyboard shortcut Ctrl+K
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.searchInput.focus();
            }
            
            // ESC to close results
            if (e.key === 'Escape') {
                this.hideResults();
                this.searchInput.blur();
            }
        });

        // Click outside to close
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                this.hideResults();
            }
        });

        // Focus shows results if there's a query
        this.searchInput.addEventListener('focus', () => {
            if (this.searchInput.value.trim()) {
                this.handleSearch(this.searchInput.value);
            }
        });
    }

    handleSearch(query) {
        if (query.trim().length < 2) {
            this.hideResults();
            return;
        }

        const results = this.search(query);
        this.displayResults(results);
    }

    search(query) {
        const terms = query.toLowerCase().split(' ').filter(t => t.length > 0);
        
        return this.searchIndex
            .map(item => {
                let score = 0;
                const titleLower = item.title.toLowerCase();
                const keywordsLower = item.keywords.toLowerCase();
                
                terms.forEach(term => {
                    // Exact title match (highest score)
                    if (titleLower === term) score += 100;
                    // Title starts with term
                    else if (titleLower.startsWith(term)) score += 50;
                    // Title contains term
                    else if (titleLower.includes(term)) score += 20;
                    // Keywords contain term
                    else if (keywordsLower.includes(term)) score += 10;
                });
                
                return { ...item, score };
            })
            .filter(item => item.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 8); // Top 8 results
    }

    displayResults(results) {
        if (results.length === 0) {
            this.searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
            this.showResults();
            return;
        }

        const html = results.map(result => `
            <a href="${result.url}" class="search-result-item">
                <div class="search-result-title">${this.highlightMatch(result.title, this.searchInput.value)}</div>
                <div class="search-result-category">${result.category}</div>
            </a>
        `).join('');

        this.searchResults.innerHTML = html;
        this.showResults();
    }

    highlightMatch(text, query) {
        const terms = query.split(' ').filter(t => t.length > 0);
        let highlighted = text;
        
        terms.forEach(term => {
            const regex = new RegExp(`(${term})`, 'gi');
            highlighted = highlighted.replace(regex, '<mark>$1</mark>');
        });
        
        return highlighted;
    }

    showResults() {
        this.searchResults.classList.remove('hidden');
    }

    hideResults() {
        this.searchResults.classList.add('hidden');
    }
}

// Initialize search when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new DocsSearch());
} else {
    new DocsSearch();
}
