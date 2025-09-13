# PowerShell script to update and sync website to GitHub
# Save this as: C:\GitHub\iamkarmakazi115.github.io\update-website.ps1

param(
    [string]$CommitMessage = "Update website"
)

# Colors for output
$Host.UI.RawUI.ForegroundColor = "White"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  GitHub Pages Website Update Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Navigate to repository
Set-Location -Path "C:\GitHub\iamkarmakazi115.github.io"
Write-Host "📂 Working in: $(Get-Location)" -ForegroundColor Yellow
Write-Host ""

# Check git status
Write-Host "📊 Checking repository status..." -ForegroundColor Yellow
git status --short

# Ask for confirmation
Write-Host ""
$confirm = Read-Host "Do you want to commit and push these changes? (Y/N)"

if ($confirm -eq 'Y' -or $confirm -eq 'y') {
    # Add all changes
    Write-Host ""
    Write-Host "➕ Adding all changes..." -ForegroundColor Green
    git add .
    
    # Commit with message
    Write-Host "💾 Committing changes..." -ForegroundColor Green
    git commit -m $CommitMessage
    
    # Push to GitHub
    Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Green
    git push origin main
    
    Write-Host ""
    Write-Host "✅ Website updated successfully!" -ForegroundColor Green
    Write-Host "🌐 Your site will be live at: https://jonathan-castro.com in a few minutes" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "❌ Update cancelled" -ForegroundColor Red
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")