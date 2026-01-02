# Arxis Documentation Build and Deploy Script
# PowerShell version for Windows

param(
    [Parameter(Position=0)]
    [ValidateSet('install', 'start', 'build', 'serve', 'deploy', 'clean', 'test')]
    [string]$Command = 'build'
)

# Colors
function Write-ColorOutput {
    param(
        [string]$Message,
        [string]$Color = 'White'
    )
    Write-Host $Message -ForegroundColor $Color
}

Write-ColorOutput "🏛️  Arxis Documentation Builder" -Color Cyan
Write-ColorOutput "================================" -Color Cyan
Write-Host ""

# Check if we're in the docs directory
if (-not (Test-Path "package.json")) {
    Write-ColorOutput "Error: package.json not found. Please run this script from the docs directory." -Color Red
    exit 1
}

switch ($Command) {
    'install' {
        Write-ColorOutput "📦 Installing dependencies..." -Color Blue
        npm install
        if ($LASTEXITCODE -eq 0) {
            Write-ColorOutput "✅ Dependencies installed" -Color Green
        } else {
            Write-ColorOutput "❌ Installation failed" -Color Red
            exit 1
        }
    }

    'start' {
        Write-ColorOutput "🚀 Starting development server..." -Color Blue
        npm start
    }

    'build' {
        Write-ColorOutput "🔨 Building documentation..." -Color Blue
        npm run build
        if ($LASTEXITCODE -eq 0) {
            Write-ColorOutput "✅ Build complete" -Color Green
            Write-ColorOutput "📦 Output: ./build/" -Color Blue
        } else {
            Write-ColorOutput "❌ Build failed" -Color Red
            exit 1
        }
    }

    'serve' {
        Write-ColorOutput "🌐 Serving production build..." -Color Blue
        npm run serve
    }

    'deploy' {
        Write-ColorOutput "🚀 Deploying to GitHub Pages..." -Color Blue

        # Build first
        Write-ColorOutput "🔨 Building..." -Color Blue
        npm run build

        if ($LASTEXITCODE -ne 0) {
            Write-ColorOutput "❌ Build failed" -Color Red
            exit 1
        }

        # Deploy
        Write-ColorOutput "📤 Deploying..." -Color Blue
        npm run deploy

        if ($LASTEXITCODE -eq 0) {
            Write-ColorOutput "✅ Deployed to GitHub Pages" -Color Green
            Write-ColorOutput "🌐 Site will be available at: https://docs.avila.inc" -Color Blue
        } else {
            Write-ColorOutput "❌ Deployment failed" -Color Red
            exit 1
        }
    }

    'clean' {
        Write-ColorOutput "🧹 Cleaning build artifacts..." -Color Blue
        if (Test-Path "build") {
            Remove-Item -Recurse -Force "build"
        }
        if (Test-Path ".docusaurus") {
            Remove-Item -Recurse -Force ".docusaurus"
        }
        Write-ColorOutput "✅ Clean complete" -Color Green
    }

    'test' {
        Write-ColorOutput "🧪 Running tests..." -Color Blue
        npm run build
        if ($LASTEXITCODE -eq 0) {
            Write-ColorOutput "✅ Build successful" -Color Green
        } else {
            Write-ColorOutput "❌ Build failed" -Color Red
            exit 1
        }
    }

    default {
        Write-ColorOutput "Usage: .\build.ps1 {install|start|build|serve|deploy|clean|test}" -Color Yellow
        Write-Host ""
        Write-Host "Commands:"
        Write-Host "  install  - Install dependencies"
        Write-Host "  start    - Start development server"
        Write-Host "  build    - Build production site"
        Write-Host "  serve    - Serve production build locally"
        Write-Host "  deploy   - Build and deploy to GitHub Pages"
        Write-Host "  clean    - Remove build artifacts"
        Write-Host "  test     - Test build process"
        exit 1
    }
}
