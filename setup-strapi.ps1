# Strapi CMS Setup Script for Paros Rent-a-Car (PowerShell)
# This script automates the Strapi installation process

Write-Host "🚀 Setting up Strapi CMS for Paros Rent-a-Car..." -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js is installed: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js v18 or higher." -ForegroundColor Red
    exit 1
}

Write-Host ""

# Navigate to parent directory
Set-Location ..

# Check if paros-cms directory already exists
if (Test-Path "paros-cms") {
    Write-Host "⚠️  paros-cms directory already exists!" -ForegroundColor Yellow
    $response = Read-Host "Do you want to remove it and start fresh? (y/n)"
    if ($response -match "^[Yy]$") {
        Write-Host "🗑️  Removing existing paros-cms directory..." -ForegroundColor Yellow
        Remove-Item -Path "paros-cms" -Recurse -Force
    } else {
        Write-Host "❌ Setup cancelled." -ForegroundColor Red
        exit 1
    }
}

# Create Strapi project
Write-Host "📦 Creating new Strapi project (this may take a few minutes)..." -ForegroundColor Cyan
npx create-strapi-app@latest paros-cms --quickstart --no-run

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to create Strapi project." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Strapi project created successfully!" -ForegroundColor Green
Write-Host ""

# Navigate to Strapi directory
Set-Location paros-cms

# Create custom middlewares configuration
Write-Host "⚙️  Configuring CORS and security settings..." -ForegroundColor Cyan

$middlewaresContent = @'
module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', 'http://localhost:5173'],
          'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'localhost:1337'],
          'media-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'localhost:1337'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:5173', 'http://localhost:3000', 'https://rentacar-paros.gr'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
'@

New-Item -Path "config" -ItemType Directory -Force | Out-Null
$middlewaresContent | Out-File -FilePath "config\middlewares.js" -Encoding UTF8

Write-Host "✅ CORS and security configured!" -ForegroundColor Green
Write-Host ""

# Update frontend .env file
Set-Location ..\paros-link-navigator

if (-not (Test-Path ".env")) {
    Write-Host "📝 Creating .env file in frontend..." -ForegroundColor Cyan
    $envContent = @'
# Strapi API Configuration
VITE_STRAPI_URL=http://localhost:1337
VITE_STRAPI_API_TOKEN=
'@
    $envContent | Out-File -FilePath ".env" -Encoding UTF8
    Write-Host "✅ .env file created!" -ForegroundColor Green
} else {
    Write-Host "ℹ️  .env file already exists. Please ensure it has:" -ForegroundColor Cyan
    Write-Host "   VITE_STRAPI_URL=http://localhost:1337"
    Write-Host "   VITE_STRAPI_API_TOKEN="
}

Write-Host ""
Write-Host "✨ Setup complete! Next steps:" -ForegroundColor Green
Write-Host ""
Write-Host "1. Start Strapi (in a new terminal):" -ForegroundColor Yellow
Write-Host "   cd ..\paros-cms"
Write-Host "   npm run develop"
Write-Host ""
Write-Host "2. Open http://localhost:1337/admin in your browser" -ForegroundColor Yellow
Write-Host ""
Write-Host "3. Create your admin account" -ForegroundColor Yellow
Write-Host ""
Write-Host "4. Follow STRAPI_SETUP.md to:" -ForegroundColor Yellow
Write-Host "   - Create content types (Blog Post, Category, Page)"
Write-Host "   - Configure API permissions"
Write-Host "   - Add your first blog posts"
Write-Host ""
Write-Host "5. Start your frontend (in another terminal):" -ForegroundColor Yellow
Write-Host "   cd paros-link-navigator"
Write-Host "   npm run dev"
Write-Host ""
Write-Host "🎉 Happy blogging!" -ForegroundColor Cyan

