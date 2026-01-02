// Animações e Visualizações Interativas

// ===== Animação de Quantum Canvas (Hero) =====
function initQuantumCanvas() {
    const canvas = document.getElementById('quantum-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    class Photon {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = (Math.random() - 0.5) * 2;
            this.phase = Math.random() * Math.PI * 2;
            this.amplitude = Math.random() * 0.5 + 0.5;
            this.hue = Math.random() * 60 + 30; // Laranja-Amarelo
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.phase += 0.05;

            // Wrap around
            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }

        draw() {
            const alpha = (Math.sin(this.phase) + 1) / 2 * this.amplitude;
            const size = 3 + Math.sin(this.phase) * 2;

            // Glow effect
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, size * 3);
            gradient.addColorStop(0, `hsla(${this.hue}, 100%, 60%, ${alpha})`);
            gradient.addColorStop(1, `hsla(${this.hue}, 100%, 60%, 0)`);

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, size * 3, 0, Math.PI * 2);
            ctx.fill();

            // Core
            ctx.fillStyle = `hsla(${this.hue}, 100%, 80%, ${alpha})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Criar fótons
    const photons = Array.from({ length: 50 }, () => new Photon());

    // Adicionar paths entre fótons próximos
    function drawPaths() {
        for (let i = 0; i < photons.length; i++) {
            for (let j = i + 1; j < photons.length; j++) {
                const p1 = photons[i];
                const p2 = photons[j];
                const dx = p2.x - p1.x;
                const dy = p2.y - p1.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 100) {
                    const alpha = (1 - dist / 100) * 0.3;
                    ctx.strokeStyle = `rgba(255, 165, 0, ${alpha})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        // Tema-aware background
        const isDark = document.body.classList.contains('dark-theme');
        ctx.fillStyle = isDark ? 'rgba(10, 10, 15, 0.1)' : 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(0, 0, width, height);

        drawPaths();

        photons.forEach(photon => {
            photon.update();
            photon.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// ===== Gráfico de Performance =====
function initPerformanceChart() {
    const canvas = document.getElementById('perf-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    const data = [
        { label: 'CPU Path Tracing', value: 2.5, color: '#FF8C00' },
        { label: 'CPU + SIMD', value: 8.5, color: '#FFA500' },
        { label: 'GPU Compute', value: 150, color: '#FFD700' },
        { label: 'GPU + BVH', value: 280, color: '#FFC300' }
    ];

    const maxValue = Math.max(...data.map(d => d.value));
    const barHeight = 60;
    const barSpacing = 20;
    const leftMargin = 180;
    const chartWidth = width - leftMargin - 50;

    function draw() {
        const isDark = document.body.classList.contains('dark-theme');

        // Background
        ctx.fillStyle = isDark ? '#12121A' : '#FFF8F0';
        ctx.fillRect(0, 0, width, height);

        // Título
        ctx.font = 'bold 18px sans-serif';
        ctx.fillStyle = isDark ? '#E8E8F0' : '#1A1A1A';
        ctx.textAlign = 'center';
        ctx.fillText('Throughput (Million rays/sec)', width / 2, 30);

        // Desenhar barras
        data.forEach((item, i) => {
            const y = 60 + i * (barHeight + barSpacing);
            const barWidth = (item.value / maxValue) * chartWidth;

            // Label
            ctx.font = '14px sans-serif';
            ctx.fillStyle = isDark ? '#A8A8B8' : '#4A4A4A';
            ctx.textAlign = 'right';
            ctx.fillText(item.label, leftMargin - 10, y + barHeight / 2 + 5);

            // Barra
            ctx.fillStyle = item.color;
            ctx.fillRect(leftMargin, y, barWidth, barHeight);

            // Valor
            ctx.font = 'bold 16px sans-serif';
            ctx.fillStyle = isDark ? '#E8E8F0' : '#FFFFFF';
            ctx.textAlign = 'left';
            ctx.fillText(`${item.value}M`, leftMargin + barWidth + 10, y + barHeight / 2 + 5);
        });
    }

    draw();

    // Redesenhar ao mudar tema
    const observer = new MutationObserver(() => draw());
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
}

// ===== Canvas de Demonstração de Casos de Uso =====
function initUseCaseCanvas() {
    const canvas = document.getElementById('usecase-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let currentScene = 'cornell';

    const scenes = {
        cornell: {
            name: 'Cornell Box',
            draw: () => {
                const isDark = document.body.classList.contains('dark-theme');
                ctx.fillStyle = isDark ? '#0A0A0F' : '#FFFFFF';
                ctx.fillRect(0, 0, 800, 450);

                // Paredes
                ctx.fillStyle = '#888888';
                ctx.fillRect(100, 100, 600, 300);

                // Parede esquerda (vermelha)
                ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
                ctx.fillRect(100, 100, 50, 300);

                // Parede direita (verde)
                ctx.fillStyle = 'rgba(0, 255, 0, 0.3)';
                ctx.fillRect(650, 100, 50, 300);

                // Luz
                ctx.fillStyle = '#FFFF00';
                ctx.fillRect(350, 100, 100, 20);

                // Cubo
                ctx.fillStyle = '#CCCCCC';
                ctx.fillRect(250, 250, 100, 100);

                // Label
                ctx.font = 'bold 24px sans-serif';
                ctx.fillStyle = '#FF8C00';
                ctx.textAlign = 'center';
                ctx.fillText('Cornell Box - Global Illumination', 400, 420);
            }
        },
        glass: {
            name: 'Glass Sphere',
            draw: () => {
                const isDark = document.body.classList.contains('dark-theme');
                ctx.fillStyle = isDark ? '#0A0A0F' : '#FFFFFF';
                ctx.fillRect(0, 0, 800, 450);

                // Esfera de vidro
                const centerX = 400;
                const centerY = 225;
                const radius = 100;

                // Shadow
                ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
                ctx.beginPath();
                ctx.ellipse(centerX, 380, 120, 20, 0, 0, Math.PI * 2);
                ctx.fill();

                // Glass sphere
                const gradient = ctx.createRadialGradient(
                    centerX - 30, centerY - 30, 10,
                    centerX, centerY, radius
                );
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
                gradient.addColorStop(0.5, 'rgba(100, 200, 255, 0.3)');
                gradient.addColorStop(1, 'rgba(0, 100, 200, 0.5)');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
                ctx.fill();

                // Specular highlight
                ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                ctx.beginPath();
                ctx.arc(centerX - 30, centerY - 30, 25, 0, Math.PI * 2);
                ctx.fill();

                // Caustics
                for (let i = 0; i < 10; i++) {
                    const x = centerX + (Math.random() - 0.5) * 200;
                    const y = 350 + Math.random() * 30;
                    ctx.fillStyle = `rgba(255, 200, 100, ${Math.random() * 0.3})`;
                    ctx.beginPath();
                    ctx.arc(x, y, Math.random() * 20 + 5, 0, Math.PI * 2);
                    ctx.fill();
                }

                ctx.font = 'bold 24px sans-serif';
                ctx.fillStyle = '#FF8C00';
                ctx.textAlign = 'center';
                ctx.fillText('Dielectric Material - Refraction & Caustics', 400, 420);
            }
        },
        metal: {
            name: 'Metal Surface',
            draw: () => {
                const isDark = document.body.classList.contains('dark-theme');
                ctx.fillStyle = isDark ? '#0A0A0F' : '#FFFFFF';
                ctx.fillRect(0, 0, 800, 450);

                // Metal surface
                const gradient = ctx.createLinearGradient(0, 150, 0, 350);
                gradient.addColorStop(0, '#CCCCCC');
                gradient.addColorStop(0.5, '#888888');
                gradient.addColorStop(1, '#444444');

                ctx.fillStyle = gradient;
                ctx.fillRect(150, 150, 500, 200);

                // Reflections
                for (let i = 0; i < 20; i++) {
                    const x = 150 + Math.random() * 500;
                    const y = 150 + Math.random() * 200;
                    const size = Math.random() * 30 + 10;
                    ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.3})`;
                    ctx.beginPath();
                    ctx.arc(x, y, size, 0, Math.PI * 2);
                    ctx.fill();
                }

                ctx.font = 'bold 24px sans-serif';
                ctx.fillStyle = '#FF8C00';
                ctx.textAlign = 'center';
                ctx.fillText('Metallic Material - Specular Reflections', 400, 420);
            }
        },
        caustics: {
            name: 'Caustics',
            draw: () => {
                const isDark = document.body.classList.contains('dark-theme');
                ctx.fillStyle = isDark ? '#0A0A0F' : '#FFFFFF';
                ctx.fillRect(0, 0, 800, 450);

                // Water surface
                ctx.fillStyle = 'rgba(0, 150, 255, 0.3)';
                ctx.fillRect(100, 100, 600, 250);

                // Caustics patterns
                for (let i = 0; i < 30; i++) {
                    const x = 100 + Math.random() * 600;
                    const y = 100 + Math.random() * 250;
                    const size = Math.random() * 40 + 10;
                    const alpha = Math.random() * 0.5 + 0.2;

                    const grad = ctx.createRadialGradient(x, y, 0, x, y, size);
                    grad.addColorStop(0, `rgba(255, 255, 200, ${alpha})`);
                    grad.addColorStop(1, `rgba(100, 200, 255, 0)`);

                    ctx.fillStyle = grad;
                    ctx.beginPath();
                    ctx.arc(x, y, size, 0, Math.PI * 2);
                    ctx.fill();
                }

                ctx.font = 'bold 24px sans-serif';
                ctx.fillStyle = '#FF8C00';
                ctx.textAlign = 'center';
                ctx.fillText('Caustics - Light Focusing Through Water', 400, 420);
            }
        }
    };

    function drawScene(sceneName) {
        currentScene = sceneName;
        scenes[sceneName].draw();
    }

    // Botões de controle
    document.querySelectorAll('.demo-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const scene = btn.getAttribute('data-scene');
            drawScene(scene);

            // Highlight botão ativo
            document.querySelectorAll('.demo-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Desenhar cena inicial
    drawScene('cornell');

    // Animar caustics
    let frame = 0;
    setInterval(() => {
        if (currentScene === 'caustics') {
            frame++;
            scenes.caustics.draw();
        }
    }, 100);
}

// Inicializar todas as animações
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initQuantumCanvas();
        initPerformanceChart();
        initUseCaseCanvas();
    });
} else {
    initQuantumCanvas();
    initPerformanceChart();
    initUseCaseCanvas();
}
