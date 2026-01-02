# Script para gerar páginas HTML para cada categoria

$docsPath = "C:\Users\Administrador\source\repos\arxis-core\docs"
$integratedPath = "$docsPath\integrated-modules"
$categoriesPath = "$docsPath\categories"

# Template HTML base
$htmlTemplate = @'
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{TITLE} - Avx Docs</title>
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
                <a href="../packages/index.html">Packages</a>
                <a href="../examples.html">Examples</a>
                <a href="../architecture.html">Architecture</a>
                <a href="https://github.com/avilaops/arxis-core" target="_blank">GitHub</a>
            </div>
        </nav>
    </header>

    <main class="docs-container">
        <aside class="docs-sidebar">
            <h3>{CATEGORY_NAME}</h3>
            <ul>
{SIDEBAR_LINKS}
            </ul>
        </aside>

        <article class="docs-content">
            <h1>{TITLE}</h1>
            <p class="lead">{DESCRIPTION}</p>

            <div class="module-grid">
{MODULES_CONTENT}
            </div>

            <section class="related-docs">
                <h2>Related Documentation</h2>
                <div class="doc-cards">
                    <a href="../getting-started.html" class="doc-card">
                        <h3>Getting Started</h3>
                        <p>Quick start guide for new users</p>
                    </a>
                    <a href="../examples.html" class="doc-card">
                        <h3>Examples</h3>
                        <p>Code examples and tutorials</p>
                    </a>
                    <a href="../packages/index.html" class="doc-card">
                        <h3>All Packages</h3>
                        <p>Complete package index</p>
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
</body>
</html>
'@

# Descrições das categorias
$categoryDescriptions = @{
    'architecture' = 'System architecture patterns and design principles for building scalable applications'
    'auth' = 'Authentication and authorization solutions for secure access control'
    'cli' = 'Command-line interface tools and utilities for developer productivity'
    'cloud' = 'Cloud infrastructure and deployment tools for distributed systems'
    'core' = 'Core utilities and fundamental building blocks of the Arxis framework'
    'core-utils' = 'Essential utility functions and helpers for common tasks'
    'crypto-security' = 'Cryptographic primitives and security tools for data protection'
    'database' = 'Database drivers, ORMs, and data persistence solutions'
    'distributed' = 'Distributed systems, consensus protocols, and coordination tools'
    'email' = 'Email sending, parsing, and SMTP client implementations'
    'gpu' = 'GPU computing, CUDA, and parallel processing frameworks'
    'math' = 'Mathematical libraries, linear algebra, and numerical computing'
    'network' = 'Network protocols, HTTP clients/servers, and communication tools'
    'observability' = 'Logging, metrics, tracing, and monitoring solutions'
    'rendering' = 'Graphics rendering, visualization, and UI frameworks'
    'visualization' = 'Data visualization, charting, and graphing libraries'
    'web' = 'Web frameworks, APIs, and browser automation tools'
}

# Criar pasta categories se não existir
if (-not (Test-Path $categoriesPath)) {
    New-Item -ItemType Directory -Path $categoriesPath -Force | Out-Null
}

# Processar cada categoria
$categories = Get-ChildItem -Path $integratedPath -Directory

foreach ($category in $categories) {
    $categoryName = $category.Name
    $categoryTitle = (Get-Culture).TextInfo.ToTitleCase($categoryName.Replace('-', ' '))
    $description = $categoryDescriptions[$categoryName]

    if (-not $description) {
        $description = "Documentation for $categoryTitle modules and packages"
    }

    Write-Host "Gerando página para: $categoryName" -ForegroundColor Cyan

    # Buscar módulos na categoria
    $modules = Get-ChildItem -Path $category.FullName -Directory -ErrorAction SilentlyContinue

    # Gerar links da sidebar
    $sidebarLinks = ""
    $modulesContent = ""

    if ($modules.Count -gt 0) {
        foreach ($module in $modules) {
            $moduleName = $module.Name
            $moduleTitle = $moduleName
            $sidebarLinks += "                <li><a href=`"#$moduleName`">$moduleTitle</a></li>`n"

            # Buscar README do módulo
            $readmePath = Join-Path $module.FullName "README.md"
            $moduleDesc = "Documentation for $moduleTitle"

            if (Test-Path $readmePath) {
                $readmeContent = Get-Content $readmePath -Raw -ErrorAction SilentlyContinue
                if ($readmeContent -match '(?m)^#+\s+(.+)$') {
                    $moduleDesc = $Matches[1]
                }
            }

            $modulesContent += @"
                <div class="module-card" id="$moduleName">
                    <h3>$moduleTitle</h3>
                    <p>$moduleDesc</p>
                    <div class="module-links">
                        <a href="https://github.com/avilaops/arxis-core/tree/main/$moduleName" target="_blank">Source Code</a>
                    </div>
                </div>

"@
        }
    } else {
        # Se não há módulos, verificar se há documentação direta
        $readmePath = Join-Path $category.FullName "README.md"
        if (Test-Path $readmePath) {
            $modulesContent = @"
                <div class="module-card">
                    <h3>Documentation</h3>
                    <p>Complete documentation for $categoryTitle</p>
                    <div class="module-links">
                        <a href="../integrated-modules/$categoryName/README.md" target="_blank">View Documentation</a>
                    </div>
                </div>

"@
        }
    }

    # Gerar HTML
    $html = $htmlTemplate.Replace('{TITLE}', $categoryTitle)
    $html = $html.Replace('{CATEGORY_NAME}', $categoryTitle)
    $html = $html.Replace('{DESCRIPTION}', $description)
    $html = $html.Replace('{SIDEBAR_LINKS}', $sidebarLinks)
    $html = $html.Replace('{MODULES_CONTENT}', $modulesContent)

    # Salvar arquivo
    $outputFile = "$categoriesPath\$categoryName.html"
    $html | Out-File -FilePath $outputFile -Encoding UTF8

    Write-Host "  ✓ Criado: categories/$categoryName.html" -ForegroundColor Green
}

Write-Host "`n========== CONCLUÍDO ==========`n" -ForegroundColor Green
Write-Host "Páginas geradas: $($categories.Count)" -ForegroundColor White
Write-Host "Localização: $categoriesPath" -ForegroundColor Cyan
