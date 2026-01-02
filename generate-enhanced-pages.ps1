# Script para gerar páginas HTML melhoradas para cada categoria

$docsPath = "C:\Users\Administrador\source\repos\arxis-core\docs"
$integratedPath = "$docsPath\integrated-modules"
$categoriesPath = "$docsPath\categories"

# Definir metadados detalhados para cada categoria
$categoryData = @{
    'auth' = @{
        Title = 'Authentication & Authorization'
        Icon = '🔑'
        Description = 'Secure authentication protocols, JWT, OAuth, SSO, and identity management solutions'
        Badges = @('Production Ready', 'OAuth2', 'JWT')
        Highlights = @(
            @{ Icon = '🛡️'; Title = 'Enterprise Security'; Desc = 'Battle-tested authentication for production' }
            @{ Icon = '⚡'; Title = 'Fast Validation'; Desc = 'Sub-millisecond token verification' }
            @{ Icon = '🔌'; Title = 'Easy Integration'; Desc = 'Drop-in middleware for major frameworks' }
        )
        QuickStart = @'
use avx_auth::{JwtAuth, OAuth2};

// JWT authentication
let auth = JwtAuth::new(secret)?;
let token = auth.encode(&claims)?;
let verified = auth.verify(&token)?;

// OAuth2 flow
let oauth = OAuth2::new(client_id, client_secret);
let auth_url = oauth.authorize_url(scopes);
let token = oauth.exchange_code(code).await?;
'@
    }

    'distributed' = @{
        Title = 'Distributed Systems'
        Icon = '🔄'
        Description = 'Consensus algorithms, distributed coordination, replication, and fault-tolerant systems'
        Badges = @('Raft', 'Gossip', 'CRDT')
        Highlights = @(
            @{ Icon = '🎯'; Title = 'Consensus'; Desc = 'Raft and Paxos implementations' }
            @{ Icon = '📡'; Title = 'Gossip Protocol'; Desc = 'Epidemic-style information dissemination' }
            @{ Icon = '🔁'; Title = 'Replication'; Desc = 'Multi-master and leader-follower' }
        )
        QuickStart = @'
use avx_raft::{RaftNode, Config};
use avx_gossip::GossipCluster;

// Create Raft consensus cluster
let config = Config::default();
let node = RaftNode::new(node_id, peers, config)?;

// Start gossip protocol
let cluster = GossipCluster::new(bind_addr)?;
cluster.join(seed_nodes).await?;
'@
    }

    'network' = @{
        Title = 'Network & Communication'
        Icon = '🌐'
        Description = 'HTTP/2-3, gRPC, QUIC, WebSocket, TCP/UDP and high-performance network protocols'
        Badges = @('HTTP/3', 'gRPC', 'QUIC')
        Highlights = @(
            @{ Icon = '⚡'; Title = 'Zero-Copy'; Desc = 'Minimal allocations for maximum throughput' }
            @{ Icon = '🔒'; Title = 'TLS 1.3'; Desc = 'Built-in encryption and security' }
            @{ Icon = '📊'; Title = 'Load Balancing'; Desc = 'Round-robin, least-conn, consistent hash' }
        )
        QuickStart = @'
use avx_http::{Server, Request, Response};
use avx_grpc::ServiceBuilder;

// HTTP/3 server
let server = Server::bind("0.0.0.0:443")
    .tls(cert, key)
    .http3()
    .build()?;

// gRPC service
let svc = ServiceBuilder::new()
    .add_service(my_service)
    .serve(addr).await?;
'@
    }

    'database' = @{
        Title = 'Database & Storage'
        Icon = '💾'
        Description = 'High-performance database engines, SQL optimizers, caching, and data persistence'
        Badges = @('SQL', 'NoSQL', 'In-Memory')
        Highlights = @(
            @{ Icon = '⚡'; Title = 'Fast Queries'; Desc = 'Optimized query execution engine' }
            @{ Icon = '💾'; Title = 'Multiple Backends'; Desc = 'SQL, KV, Document, Time-series' }
            @{ Icon = '🔄'; Title = 'Transactions'; Desc = 'ACID compliance with MVCC' }
        )
        QuickStart = @'
use avx_db::{Database, Query};
use avx_cache::Cache;

// Open database
let db = Database::open("data.db")?;

// Execute query
let results = db.query("SELECT * FROM users WHERE age > ?")
    .bind(18)
    .fetch_all().await?;

// Caching layer
let cache = Cache::with_capacity(1000);
'@
    }

    'email' = @{
        Title = 'Email & Messaging'
        Icon = '📧'
        Description = 'SMTP client, email parsing, template rendering, and message queue integration'
        Badges = @('SMTP', 'IMAP', 'Templates')
        Highlights = @(
            @{ Icon = '📮'; Title = 'Reliable Delivery'; Desc = 'Retry logic and queue management' }
            @{ Icon = '🎨'; Title = 'Templates'; Desc = 'HTML/Text templating with variables' }
            @{ Icon = '📎'; Title = 'Attachments'; Desc = 'File and inline attachments support' }
        )
        QuickStart = @'
use avx_email::{Email, SmtpClient};

// Send email
let email = Email::builder()
    .to("user@example.com")
    .subject("Hello")
    .html("<h1>Welcome!</h1>")
    .build()?;

let client = SmtpClient::new("smtp.gmail.com")?;
client.send(email).await?;
'@
    }

    'cloud' = @{
        Title = 'Cloud Infrastructure'
        Icon = '☁️'
        Description = 'Cloud deployment, infrastructure as code, container orchestration, and automation'
        Badges = @('IaC', 'Kubernetes', 'Terraform')
        Highlights = @(
            @{ Icon = '🚀'; Title = 'Auto-Deploy'; Desc = 'CI/CD pipeline integration' }
            @{ Icon = '📦'; Title = 'Containers'; Desc = 'Docker and Kubernetes support' }
            @{ Icon = '🔧'; Title = 'Infrastructure as Code'; Desc = 'Terraform and CloudFormation' }
        )
        QuickStart = @'
use avx_cloud::{Cluster, DeployConfig};

// Deploy to Kubernetes
let config = DeployConfig::new()
    .image("myapp:latest")
    .replicas(3)
    .resources(cpu: 2, memory: "4Gi");

let cluster = Cluster::connect().await?;
cluster.deploy(config).await?;
'@
    }

    'architecture' = @{
        Title = 'Architecture & Design'
        Icon = '🏗️'
        Description = 'System design patterns, microservices, event-driven architecture, and workflow orchestration'
        Badges = @('Microservices', 'Event-Driven', 'CQRS')
        Highlights = @(
            @{ Icon = '🎯'; Title = 'Design Patterns'; Desc = 'Proven architectural patterns' }
            @{ Icon = '📐'; Title = 'Modularity'; Desc = 'Loosely coupled components' }
            @{ Icon = '🔄'; Title = 'Event-Driven'; Desc = 'Event sourcing and CQRS' }
        )
        QuickStart = @'
use avx_architecture::{EventBus, Command};
use avx_workflow::Orchestrator;

// Event-driven architecture
let bus = EventBus::new();
bus.subscribe(|event| { /* handle */ });
bus.publish(UserCreated { id: 123 });

// Workflow orchestration
let workflow = Orchestrator::new()
    .step(validate)
    .step(process)
    .step(notify);
'@
    }

    'observability' = @{
        Title = 'Observability & Monitoring'
        Icon = '📊'
        Description = 'Logging, metrics, distributed tracing, alerting, and performance monitoring'
        Badges = @('Metrics', 'Tracing', 'Alerting')
        Highlights = @(
            @{ Icon = '📈'; Title = 'Real-time Metrics'; Desc = 'Prometheus-compatible metrics' }
            @{ Icon = '🔍'; Title = 'Distributed Tracing'; Desc = 'OpenTelemetry integration' }
            @{ Icon = '🚨'; Title = 'Smart Alerts'; Desc = 'Threshold-based alerting' }
        )
        QuickStart = @'
use avx_metrics::{Counter, Histogram};
use avx_tracing::Span;

// Collect metrics
let requests = Counter::new("http_requests_total");
requests.inc();

// Distributed tracing
let span = Span::new("process_request");
span.set_attribute("user_id", user_id);
'@
    }

    'gpu' = @{
        Title = 'GPU Computing'
        Icon = '🎮'
        Description = 'CUDA, OpenCL, GPU-accelerated computation, parallel processing, and graphics'
        Badges = @('CUDA', 'OpenCL', 'Vulkan')
        Highlights = @(
            @{ Icon = '⚡'; Title = 'Massive Parallelism'; Desc = 'Thousands of concurrent threads' }
            @{ Icon = '🚀'; Title = '10x Faster'; Desc = 'GPU vs CPU for parallel workloads' }
            @{ Icon = '💻'; Title = 'Multi-GPU'; Desc = 'Scale across multiple devices' }
        )
        QuickStart = @'
use avx_gpu::{Device, Kernel};

// Initialize GPU
let device = Device::cuda(0)?;

// Launch kernel
let kernel = Kernel::from_source(code)?;
kernel.launch(grid, block, &[&input, &output])?;
device.sync()?;
'@
    }

    'rendering' = @{
        Title = 'Rendering & Graphics'
        Icon = '🎨'
        Description = 'Graphics rendering, ray tracing, rasterization, shaders, and visualization'
        Badges = @('Ray Tracing', 'Vulkan', 'WebGPU')
        Highlights = @(
            @{ Icon = '✨'; Title = 'Physically-Based'; Desc = 'PBR materials and lighting' }
            @{ Icon = '🎯'; Title = 'Real-time'; Desc = '60+ FPS rendering' }
            @{ Icon = '🌈'; Title = 'Modern APIs'; Desc = 'Vulkan, Metal, DX12' }
        )
        QuickStart = @'
use avx_render::{Renderer, Scene, Material};

// Create renderer
let renderer = Renderer::new()?;

// Build scene
let scene = Scene::new()
    .add_mesh(mesh)
    .add_light(point_light)
    .add_camera(camera);

renderer.render(&scene)?;
'@
    }

    'visualization' = @{
        Title = 'Data Visualization'
        Icon = '📊'
        Description = 'Charts, graphs, plots, data analysis visualization, and interactive dashboards'
        Badges = @('Charts', 'Real-time', 'Interactive')
        Highlights = @(
            @{ Icon = '📈'; Title = 'Rich Charts'; Desc = 'Line, bar, scatter, heatmaps' }
            @{ Icon = '⚡'; Title = 'Real-time'; Desc = 'Streaming data visualization' }
            @{ Icon = '🎨'; Title = 'Customizable'; Desc = 'Full control over styling' }
        )
        QuickStart = @'
use avx_viz::{Chart, Series};

// Create chart
let chart = Chart::new()
    .title("Sales Data")
    .x_axis("Month")
    .y_axis("Revenue");

let series = Series::line(data);
chart.add_series(series);
chart.render("output.png")?;
'@
    }

    'math' = @{
        Title = 'Mathematics & Computing'
        Icon = '🔢'
        Description = 'Linear algebra, numerical computing, big numbers, symbolic math, and optimization'
        Badges = @('Linear Algebra', 'BigNum', 'Optimization')
        Highlights = @(
            @{ Icon = '⚡'; Title = 'SIMD Optimized'; Desc = 'Vectorized operations' }
            @{ Icon = '🎯'; Title = 'Numerical Stability'; Desc = 'Accurate algorithms' }
            @{ Icon = '📐'; Title = 'Rich APIs'; Desc = 'Matrices, vectors, tensors' }
        )
        QuickStart = @'
use avx_math::{Matrix, Vector};
use avx_bignum::BigInt;

// Linear algebra
let a = Matrix::from([[1, 2], [3, 4]]);
let b = Matrix::eye(2);
let c = a * b;

// Arbitrary precision
let big = BigInt::from(123456789);
let result = big.pow(1000);
'@
    }

    'web' = @{
        Title = 'Web Development'
        Icon = '🌐'
        Description = 'Web frameworks, REST APIs, GraphQL, WebAssembly, and browser automation'
        Badges = @('REST', 'GraphQL', 'WebAssembly')
        Highlights = @(
            @{ Icon = '⚡'; Title = 'Fast APIs'; Desc = 'High-throughput web services' }
            @{ Icon = '🔌'; Title = 'Full-Stack'; Desc = 'Frontend and backend tools' }
            @{ Icon = '🤖'; Title = 'Automation'; Desc = 'Browser testing and scraping' }
        )
        QuickStart = @'
use avx_web::{Router, Json};

// REST API
let app = Router::new()
    .get("/users", list_users)
    .post("/users", create_user)
    .put("/users/:id", update_user);

app.listen("0.0.0.0:8080").await?;
'@
    }

    'core-utils' = @{
        Title = 'Core Utilities'
        Icon = '⚙️'
        Description = 'Essential utilities, helpers, data structures, and common functionality'
        Badges = @('Collections', 'Async', 'Utilities')
        Highlights = @(
            @{ Icon = '🔧'; Title = 'Rich Utilities'; Desc = 'Everything you need' }
            @{ Icon = '⚡'; Title = 'Zero-Cost'; Desc = 'No runtime overhead' }
            @{ Icon = '📦'; Title = 'Modular'; Desc = 'Use only what you need' }
        )
        QuickStart = @'
use avx_core::{Result, Error};
use avx_collections::HashMap;

// Error handling
fn process() -> Result<()> {
    Ok(())
}

// Collections
let mut map = HashMap::new();
map.insert("key", "value");
'@
    }

    'cli' = @{
        Title = 'CLI Tools'
        Icon = '💻'
        Description = 'Command-line interfaces, terminal utilities, and developer tools'
        Badges = @('CLI', 'Terminal', 'Tools')
        Highlights = @(
            @{ Icon = '🎨'; Title = 'Beautiful UI'; Desc = 'Colored output and progress bars' }
            @{ Icon = '⚡'; Title = 'Fast'; Desc = 'Optimized for speed' }
            @{ Icon = '🔧'; Title = 'Easy CLI'; Desc = 'Simple argument parsing' }
        )
        QuickStart = @'
use avx_cli::{Cli, Arg};

let cli = Cli::new("myapp")
    .version("1.0.0")
    .arg(Arg::new("input").required())
    .arg(Arg::new("verbose").short('v'));

let matches = cli.parse();
'@
    }
}

# Template HTML
$htmlTemplate = @'
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{TITLE} - Avx Docs</title>
    <meta name="description" content="{DESCRIPTION}">
    <link rel="stylesheet" href="../assets/css/main.css">
    <link rel="stylesheet" href="../assets/css/docs.css">
    <link rel="stylesheet" href="../assets/css/modules.css">
</head>
<body>
    <header>
        <nav class="container">
            <a href="../index.html" class="logo">Avx <span class="gradient-text">Docs</span></a>
            <div class="nav-links">
                <a href="../getting-started.html">Getting Started</a>
                <a href="./index.html">Categories</a>
                <a href="../examples.html">Examples</a>
                <a href="../architecture.html">Architecture</a>
                <a href="https://github.com/avilaops/arxis-core" target="_blank">GitHub</a>
            </div>
        </nav>
    </header>

    <main class="docs-container">
        <aside class="docs-sidebar">
            <h3>{ICON} {TITLE}</h3>
            <div class="sidebar-section">
                <h4>Modules</h4>
                <ul>
{SIDEBAR_LINKS}
                </ul>
            </div>
        </aside>

        <article class="docs-content">
            <div class="page-header">
                <h1>{ICON} {TITLE}</h1>
                <p class="lead">{DESCRIPTION}</p>
                <div class="badges">
{BADGES_HTML}
                </div>
            </div>

            <section class="overview-section">
                <h2>Overview</h2>
                <p>{OVERVIEW_TEXT}</p>

                <div class="feature-highlights">
{HIGHLIGHTS_HTML}
                </div>
            </section>

            <section class="packages-section">
                <h2>Packages</h2>
{MODULES_HTML}
            </section>

            <section class="quick-start-section">
                <h2>Quick Start Example</h2>
                <p>Get started with {TITLE}:</p>
                <pre><code>{QUICKSTART_CODE}</code></pre>
            </section>

            <section class="related-docs">
                <h2>Related Documentation</h2>
                <div class="doc-cards">
                    <a href="../getting-started.html" class="doc-card">
                        <h3>🚀 Getting Started</h3>
                        <p>Quick start guide with examples</p>
                    </a>
                    <a href="../examples.html" class="doc-card">
                        <h3>💡 Examples</h3>
                        <p>Complete code examples and tutorials</p>
                    </a>
                    <a href="./index.html" class="doc-card">
                        <h3>📚 All Categories</h3>
                        <p>Browse all documentation categories</p>
                    </a>
                </div>
            </section>
        </article>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2025 Avila Inc. All rights reserved.</p>
        </div>
    </footer>

    <style>
        .page-header { margin-bottom: 3rem; }
        .badges { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem; }
        .badge { padding: 0.4rem 0.8rem; border-radius: 4px; font-size: 0.85rem; font-weight: 600; }
        .badge-primary { background: rgba(255, 140, 0, 0.2); color: var(--primary); }
        .badge-success { background: rgba(0, 255, 100, 0.2); color: #00ff64; }
        .badge-info { background: rgba(0, 200, 255, 0.2); color: #00c8ff; }
        .overview-section { background: var(--darker); border: 1px solid var(--border); border-radius: 8px; padding: 2rem; margin-bottom: 3rem; }
        .feature-highlights { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-top: 2rem; }
        .highlight-card { text-align: center; padding: 1.5rem; background: var(--dark); border-radius: 8px; border: 1px solid var(--border); }
        .highlight-icon { font-size: 2.5rem; display: block; margin-bottom: 1rem; }
        .highlight-card h3 { font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--primary); }
        .highlight-card p { font-size: 0.9rem; color: var(--text-muted); }
        .packages-section { margin-bottom: 4rem; }
        .module-card { background: var(--darker); border: 1px solid var(--border); border-radius: 8px; padding: 2rem; margin-bottom: 1.5rem; transition: all 0.3s ease; }
        .module-card:hover { border-color: var(--primary); transform: translateY(-2px); box-shadow: 0 4px 12px rgba(255, 140, 0, 0.2); }
        .module-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem; flex-wrap: wrap; }
        .module-header h3 { margin: 0; color: var(--primary); font-size: 1.4rem; }
        .module-links { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem; }
        .module-links a { color: var(--primary); text-decoration: none; padding: 0.5rem 1rem; border: 1px solid var(--primary); border-radius: 4px; font-size: 0.9rem; transition: all 0.3s ease; }
        .module-links a:hover { background: var(--primary); color: var(--darker); }
        .quick-start-section { background: var(--darker); border: 1px solid var(--border); border-radius: 8px; padding: 2rem; margin-bottom: 3rem; }
        .quick-start-section pre { background: var(--dark); border: 1px solid var(--border); border-radius: 4px; padding: 1.5rem; overflow-x: auto; margin-top: 1rem; }
        .quick-start-section code { color: var(--text); font-family: 'Consolas', 'Monaco', monospace; font-size: 0.9rem; line-height: 1.6; }
        .sidebar-section { margin-bottom: 2rem; }
        .sidebar-section h4 { color: var(--primary); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.8rem; }
        .sidebar-section ul { list-style: none; padding: 0; }
        .sidebar-section li { margin-bottom: 0.5rem; }
        .sidebar-section a { color: var(--text-muted); text-decoration: none; transition: color 0.3s; font-size: 0.95rem; }
        .sidebar-section a:hover { color: var(--primary); }
        @media (max-width: 768px) { .feature-highlights { grid-template-columns: 1fr; } }
    </style>
</body>
</html>
'@

Write-Host "Gerando páginas melhoradas...\n" -ForegroundColor Green

foreach ($cat in $categoryData.Keys) {
    $data = $categoryData[$cat]
    $categoryPath = Join-Path $integratedPath $cat

    if (-not (Test-Path $categoryPath)) {
        Write-Host "  ⊘ Skipping $cat (no integrated modules)" -ForegroundColor Yellow
        continue
    }

    Write-Host "Processando: $cat" -ForegroundColor Cyan

    # Gerar badges
    $badgesHtml = ""
    foreach ($badge in $data.Badges) {
        $badgesHtml += "                    <span class=`"badge badge-primary`">$badge</span>`n"
    }

    # Gerar highlights
    $highlightsHtml = ""
    foreach ($highlight in $data.Highlights) {
        $highlightsHtml += @"
                    <div class="highlight-card">
                        <span class="highlight-icon">$($highlight.Icon)</span>
                        <h3>$($highlight.Title)</h3>
                        <p>$($highlight.Desc)</p>
                    </div>

"@
    }

    # Buscar módulos
    $modules = Get-ChildItem -Path $categoryPath -Directory -ErrorAction SilentlyContinue
    $sidebarLinks = ""
    $modulesHtml = ""

    foreach ($module in $modules) {
        $moduleName = $module.Name
        $sidebarLinks += "                    <li><a href=`"#$moduleName`">$moduleName</a></li>`n"

        $modulesHtml += @"
                <div class="module-card" id="$moduleName">
                    <div class="module-header">
                        <h3>$moduleName</h3>
                    </div>
                    <p>Advanced $moduleName implementation with high performance and reliability.</p>
                    <div class="module-links">
                        <a href="../integrated-modules/$cat/$moduleName/index.html">Documentation</a>
                        <a href="https://github.com/avilaops/arxis-core/tree/main/categories/$cat/$moduleName" target="_blank">Source Code</a>
                    </div>
                </div>

"@
    }

    # Gerar HTML
    $html = $htmlTemplate.Replace('{TITLE}', $data.Title)
    $html = $html.Replace('{ICON}', $data.Icon)
    $html = $html.Replace('{DESCRIPTION}', $data.Description)
    $html = $html.Replace('{BADGES_HTML}', $badgesHtml)
    $html = $html.Replace('{OVERVIEW_TEXT}', $data.Description)
    $html = $html.Replace('{HIGHLIGHTS_HTML}', $highlightsHtml)
    $html = $html.Replace('{SIDEBAR_LINKS}', $sidebarLinks)
    $html = $html.Replace('{MODULES_HTML}', $modulesHtml)
    $html = $html.Replace('{QUICKSTART_CODE}', $data.QuickStart)

    # Salvar
    $outputFile = "$categoriesPath\$cat.html"
    $html | Out-File -FilePath $outputFile -Encoding UTF8

    Write-Host "  ✓ Criado: $cat.html" -ForegroundColor Green
}

Write-Host "`n========== CONCLUÍDO ==========`n" -ForegroundColor Green
Write-Host "Páginas melhoradas geradas com sucesso!" -ForegroundColor White
