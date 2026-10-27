# 安装 dsh-plugins 里的三个插件到 DSH（自动改写路径 + 注册）
param(
    [string]$Profile = "desktop"
)

$ErrorActionPreference = "Stop"
$repo = $PSScriptRoot
$packages = @(
    @{ name = "dsh-azure-maid"; dir = "dsh-azure-maid" },
    @{ name = "dsh-agent-ai-video"; dir = "dsh-agent-ai-video" },
    @{ name = "dsh-agent-pilates"; dir = "dsh-agent-pilates" }
)
$enc = New-Object System.Text.UTF8Encoding($false)

if (-not (Get-Command dsh -ErrorAction SilentlyContinue)) {
    throw "找不到 dsh 命令，请确认 DeepSeek Harness 已安装并在 PATH 中"
}

foreach ($pkg in $packages) {
    $patch = Join-Path $repo "$($pkg.dir)\cordis.patch.yml"
    if (Test-Path $patch) {
        Copy-Item $patch "$patch.bak" -Force
        $text = Get-Content $patch -Raw -Encoding UTF8
        $text = [regex]::Replace($text, '[A-Za-z]:\\[^\r\n]*?\\agents\\pilates\\', ((Join-Path $repo 'agents\pilates').TrimEnd('\') + '\'))
        $text = [regex]::Replace($text, '[A-Za-z]:\\[^\r\n]*?\\agents\\ai-video\\', ((Join-Path $repo 'agents\ai-video').TrimEnd('\') + '\'))
        [IO.File]::WriteAllText($patch, $text, $enc)
        Write-Host "[path] $($pkg.name) 路径已改写"
    }
    & dsh plugin --profile $Profile add "file:$(Join-Path $repo $pkg.dir)"
    if ($LASTEXITCODE -ne 0) { throw "$($pkg.name) 安装失败" }
    Write-Host "[add]  $($pkg.name)"
}

$profileJson = Join-Path $env:USERPROFILE ".dsh\profiles\$Profile\package.json"
if (Test-Path $profileJson) {
    $data = Get-Content $profileJson -Raw -Encoding UTF8 | ConvertFrom-Json
    $changed = $false
    foreach ($pkg in $packages) {
        if ($data.dsh.profile.bundles -notcontains $pkg.name) {
            $data.dsh.profile.bundles = @($data.dsh.profile.bundles) + $pkg.name
            $changed = $true
        }
    }
    if ($changed) {
        [IO.File]::WriteAllText($profileJson, ($data | ConvertTo-Json -Depth 10), $enc)
        Write-Host "[bundles] 已更新"
    } else {
        Write-Host "[bundles] 已包含全部三个包"
    }
}

Write-Host ""
Write-Host "完成。重启 DeepSeek Harness 生效。" -ForegroundColor Green
