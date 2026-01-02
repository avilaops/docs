# Script para integrar todas as pastas docs do projeto no site central

$rootPath = "C:\Users\Administrador\source\repos\arxis-core"
$docsPath = "$rootPath\docs"
$outputPath = "$docsPath\integrated-modules"

# Criar pasta de saída se não existir
if (-not (Test-Path $outputPath)) {
    New-Item -ItemType Directory -Path $outputPath -Force | Out-Null
}

# Encontrar todas as pastas docs, excluindo a pasta principal
$docsFolders = Get-ChildItem -Path $rootPath -Directory -Recurse -Filter "docs" |
    Where-Object { $_.FullName -ne $docsPath }

Write-Host "Encontradas $($docsFolders.Count) pastas docs para integrar`n" -ForegroundColor Green

$summary = @()

foreach ($folder in $docsFolders) {
    $relativePath = $folder.FullName.Replace($rootPath + "\", "")

    # Extrair categoria e nome do módulo do caminho
    $pathParts = $relativePath -split '\\'
    $category = ""
    $moduleName = ""

    if ($pathParts[0] -eq "categories") {
        $category = $pathParts[1]
        if ($pathParts.Count -gt 3) {
            $moduleName = $pathParts[2]
        }
    } else {
        $moduleName = $pathParts[0]
        $category = "core"
    }

    # Criar pasta de destino
    $destPath = if ($moduleName) {
        "$outputPath\$category\$moduleName"
    } else {
        "$outputPath\$category"
    }

    if (-not (Test-Path $destPath)) {
        New-Item -ItemType Directory -Path $destPath -Force | Out-Null
    }

    # Contar arquivos
    $files = Get-ChildItem -Path $folder.FullName -Recurse -File
    $fileCount = $files.Count

    if ($fileCount -gt 0) {
        # Copiar conteúdo
        Copy-Item -Path "$($folder.FullName)\*" -Destination $destPath -Recurse -Force

        Write-Host "✓ Copiado: $relativePath" -ForegroundColor Cyan
        Write-Host "  → $destPath ($fileCount arquivos)`n" -ForegroundColor Gray

        $summary += [PSCustomObject]@{
            SourcePath = $relativePath
            Category = $category
            Module = $moduleName
            FileCount = $fileCount
            DestPath = $destPath
        }
    } else {
        Write-Host "⊘ Vazio: $relativePath" -ForegroundColor Yellow
    }
}

Write-Host "`n========== RESUMO ==========`n" -ForegroundColor Green
Write-Host "Total de pastas processadas: $($summary.Count)" -ForegroundColor White
Write-Host "Total de arquivos copiados: $($summary | Measure-Object -Property FileCount -Sum | Select-Object -ExpandProperty Sum)" -ForegroundColor White

# Agrupar por categoria
$byCategory = $summary | Group-Object -Property Category | Sort-Object Name

Write-Host "`nPor categoria:" -ForegroundColor Yellow
foreach ($group in $byCategory) {
    $count = $group.Group.Count
    $files = ($group.Group | Measure-Object -Property FileCount -Sum).Sum
    Write-Host "  $($group.Name): $count módulos ($files arquivos)" -ForegroundColor Cyan
}

# Salvar resumo em JSON
$summary | ConvertTo-Json -Depth 10 | Out-File "$docsPath\integration-summary.json" -Encoding UTF8
Write-Host "`nResumo salvo em: integration-summary.json" -ForegroundColor Green
