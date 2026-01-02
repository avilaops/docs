// Copyright © 2025 Nícolas Ávila - All Rights Reserved
// Avx Documentation Main JavaScript

// Theme Management
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('avx-theme') || 'light';
    this.apply();
  }
  
  toggle() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('avx-theme', this.theme);
    this.apply();
  }
  
  apply() {
    document.body.className = `${this.theme}-theme`;
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.textContent = this.theme === 'light' ? '🌙 Escuro' : '☀️ Claro';
    }
  }
  
  getTheme() {
    return this.theme;
  }
}

// Animation Engine
class AnimationEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.animations = [];
  }
  
  // Clustering animation
  clusteringAnimation() {
    if (!this.container) return;
    
    this.container.innerHTML = '<canvas id="cluster-canvas"></canvas>';
    const canvas = document.getElementById('cluster-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = this.container.offsetWidth;
    canvas.height = 400;
    
    // Generate random points
    const points = [];
    const numClusters = 5;
    const pointsPerCluster = 20;
    
    for (let i = 0; i < numClusters; i++) {
      const centerX = Math.random() * canvas.width;
      const centerY = Math.random() * canvas.height;
      const color = `hsl(${i * 72}, 70%, 60%)`;
      
      for (let j = 0; j < pointsPerCluster; j++) {
        points.push({
          x: centerX + (Math.random() - 0.5) * 100,
          y: centerY + (Math.random() - 0.5) * 100,
          cluster: i,
          color: color,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5
        });
      }
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      points.forEach((p1, i) => {
        points.slice(i + 1).forEach(p2 => {
          if (p1.cluster === p2.cluster) {
            const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            if (dist < 80) {
              ctx.strokeStyle = p1.color + '30';
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        });
      });
      
      // Draw and move points
      points.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        // Draw point
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
  }
  
  // Cloud infrastructure animation
  cloudAnimation() {
    if (!this.container) return;
    
    this.container.innerHTML = `
      <div style="position: relative; width: 100%; height: 400px;">
        <svg width="100%" height="400" id="cloud-svg"></svg>
      </div>
    `;
    
    const svg = document.getElementById('cloud-svg');
    const width = svg.clientWidth;
    const height = 400;
    
    // Create cloud nodes
    const nodes = [
      { id: 'compute', label: 'Compute', x: width / 4, y: height / 3, color: '#FF6B35' },
      { id: 'storage', label: 'Storage', x: width / 2, y: height / 3, color: '#FFD23F' },
      { id: 'network', label: 'Network', x: 3 * width / 4, y: height / 3, color: '#FF6B35' },
      { id: 'api', label: 'API Gateway', x: width / 2, y: 2 * height / 3, color: '#FFD23F' }
    ];
    
    // Draw connections
    const connections = [
      ['compute', 'api'],
      ['storage', 'api'],
      ['network', 'api'],
      ['compute', 'storage'],
      ['storage', 'network']
    ];
    
    connections.forEach(([from, to]) => {
      const fromNode = nodes.find(n => n.id === from);
      const toNode = nodes.find(n => n.id === to);
      
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', fromNode.x);
      line.setAttribute('y1', fromNode.y);
      line.setAttribute('x2', toNode.x);
      line.setAttribute('y2', toNode.y);
      line.setAttribute('stroke', '#ccc');
      line.setAttribute('stroke-width', '2');
      line.style.animation = 'pulse 2s infinite';
      svg.appendChild(line);
    });
    
    // Draw nodes
    nodes.forEach(node => {
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', node.x);
      circle.setAttribute('cy', node.y);
      circle.setAttribute('r', '30');
      circle.setAttribute('fill', node.color);
      circle.style.animation = 'pulse 2s infinite';
      
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', node.x);
      text.setAttribute('y', node.y + 50);
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('fill', 'currentColor');
      text.textContent = node.label;
      
      g.appendChild(circle);
      g.appendChild(text);
      svg.appendChild(g);
    });
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  const themeManager = new ThemeManager();
  const i18n = new I18n();
  
  // Theme toggle button
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      themeManager.toggle();
      updateThemeText();
    });
  }
  
  function updateThemeText() {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      const isDark = themeManager.getTheme() === 'dark';
      const texts = {
        'pt-BR': isDark ? '☀️ Claro' : '🌙 Escuro',
        'ru': isDark ? '☀️ Светлая' : '🌙 Темная',
        'ja': isDark ? '☀️ ライト' : '🌙 ダーク',
        'zh-TW': isDark ? '☀️ 明亮' : '🌙 黑暗',
        'ur': isDark ? '☀️ روشن' : '🌙 تاریک',
        'ar': isDark ? '☀️ فاتح' : '🌙 داكن',
        'de': isDark ? '☀️ Hell' : '🌙 Dunkel',
        'lv': isDark ? '☀️ Gaišs' : '🌙 Tumšs',
        'uz': isDark ? '☀️ Yorug\'' : '🌙 Qorong\'i',
        'es': isDark ? '☀️ Claro' : '🌙 Oscuro'
      };
      btn.textContent = texts[i18n.getCurrentLang()] || texts['pt-BR'];
    }
  }
  
  // Language selector
  const langSelector = document.getElementById('lang-selector');
  if (langSelector) {
    langSelector.value = i18n.getCurrentLang();
    langSelector.addEventListener('change', (e) => {
      i18n.setLanguage(e.target.value);
      updateThemeText();
    });
  }
  
  // Update all i18n elements
  i18n.updatePage();
  updateThemeText();
  
  // Initialize animations if containers exist
  const clusterAnimContainer = document.getElementById('cluster-animation');
  if (clusterAnimContainer) {
    const animEngine = new AnimationEngine('cluster-animation');
    animEngine.clusteringAnimation();
  }
  
  const cloudAnimContainer = document.getElementById('cloud-animation');
  if (cloudAnimContainer) {
    const animEngine = new AnimationEngine('cloud-animation');
    animEngine.cloudAnimation();
  }
});

// Add pulse animation
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }
`;
document.head.appendChild(style);

// Export
window.ThemeManager = ThemeManager;
window.AnimationEngine = AnimationEngine;
