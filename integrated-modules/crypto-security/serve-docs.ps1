# Copyright © 2025 Nícolas Ávila - All Rights Reserved
# Servidor Web para Documentação AVX

param(
    [int]$Port = 8000
)

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "   AVX Crypto Security - Servidor de Docs      " -ForegroundColor Yellow
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Iniciando servidor na porta $Port..." -ForegroundColor Green
Write-Host "Acesse: http://localhost:$Port" -ForegroundColor Yellow
Write-Host ""
Write-Host "Pressione Ctrl+C para parar o servidor" -ForegroundColor Gray
Write-Host ""

$docsPath = $PSScriptRoot

# Verifica se Python está instalado
$pythonCmd = Get-Command python -ErrorAction SilentlyContinue
if (-not $pythonCmd) {
    $pythonCmd = Get-Command python3 -ErrorAction SilentlyContinue
}

if ($pythonCmd) {
    # Usa Python se disponível
    Push-Location $docsPath
    & $pythonCmd.Source -m http.server $Port
    Pop-Location
} else {
    # Fallback para PowerShell Web Server
    Write-Host "Python não encontrado. Usando servidor PowerShell..." -ForegroundColor Yellow
    Write-Host ""
    
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$Port/")
    $listener.Start()
    
    Write-Host "Servidor iniciado!" -ForegroundColor Green
    Write-Host "Aguardando requisições..." -ForegroundColor Gray
    Write-Host ""
    
    try {
        while ($listener.IsListening) {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response
            
            $requestUrl = $request.Url.LocalPath
            Write-Host "$(Get-Date -Format 'HH:mm:ss') - $($request.HttpMethod) $requestUrl" -ForegroundColor Cyan
            
            # Normaliza o caminho
            if ($requestUrl -eq '/') {
                $requestUrl = '/index.html'
            }
            
            $filePath = Join-Path $docsPath $requestUrl.TrimStart('/')
            
            if (Test-Path $filePath -PathType Leaf) {
                # Determina o tipo MIME
                $contentType = switch ([System.IO.Path]::GetExtension($filePath)) {
                    '.html' { 'text/html; charset=utf-8' }
                    '.css'  { 'text/css; charset=utf-8' }
                    '.js'   { 'application/javascript; charset=utf-8' }
                    '.json' { 'application/json; charset=utf-8' }
                    '.svg'  { 'image/svg+xml' }
                    '.png'  { 'image/png' }
                    '.jpg'  { 'image/jpeg' }
                    '.jpeg' { 'image/jpeg' }
                    '.gif'  { 'image/gif' }
                    '.ico'  { 'image/x-icon' }
                    default { 'application/octet-stream' }
                }
                
                $response.ContentType = $contentType
                $response.StatusCode = 200
                
                $buffer = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentLength64 = $buffer.Length
                $response.OutputStream.Write($buffer, 0, $buffer.Length)
            } else {
                Write-Host "  Arquivo não encontrado: $filePath" -ForegroundColor Red
                $response.StatusCode = 404
                $buffer = [System.Text.Encoding]::UTF8.GetBytes("404 - Arquivo não encontrado")
                $response.ContentLength64 = $buffer.Length
                $response.OutputStream.Write($buffer, 0, $buffer.Length)
            }
            
            $response.Close()
        }
    } finally {
        $listener.Stop()
        Write-Host ""
        Write-Host "Servidor parado." -ForegroundColor Yellow
    }
}
