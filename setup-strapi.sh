#!/bin/bash

# Strapi CMS Setup Script for Paros Rent-a-Car
# This script automates the Strapi installation process

echo "🚀 Setting up Strapi CMS for Paros Rent-a-Car..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18 or higher."
    exit 1
fi

echo "✅ Node.js is installed: $(node --version)"
echo ""

# Navigate to parent directory
cd ..

# Check if paros-cms directory already exists
if [ -d "paros-cms" ]; then
    echo "⚠️  paros-cms directory already exists!"
    read -p "Do you want to remove it and start fresh? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "🗑️  Removing existing paros-cms directory..."
        rm -rf paros-cms
    else
        echo "❌ Setup cancelled."
        exit 1
    fi
fi

# Create Strapi project
echo "📦 Creating new Strapi project (this may take a few minutes)..."
npx create-strapi-app@latest paros-cms --quickstart --no-run

if [ $? -ne 0 ]; then
    echo "❌ Failed to create Strapi project."
    exit 1
fi

echo "✅ Strapi project created successfully!"
echo ""

# Navigate to Strapi directory
cd paros-cms

# Create custom middlewares configuration
echo "⚙️  Configuring CORS and security settings..."

cat > config/middlewares.js << 'EOF'
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
EOF

echo "✅ CORS and security configured!"
echo ""

# Update frontend .env file
cd ../paros-link-navigator

if [ ! -f .env ]; then
    echo "📝 Creating .env file in frontend..."
    cat > .env << 'EOF'
# Strapi API Configuration
VITE_STRAPI_URL=http://localhost:1337
VITE_STRAPI_API_TOKEN=
EOF
    echo "✅ .env file created!"
else
    echo "ℹ️  .env file already exists. Please ensure it has:"
    echo "   VITE_STRAPI_URL=http://localhost:1337"
    echo "   VITE_STRAPI_API_TOKEN="
fi

echo ""
echo "✨ Setup complete! Next steps:"
echo ""
echo "1. Start Strapi (in a new terminal):"
echo "   cd ../paros-cms"
echo "   npm run develop"
echo ""
echo "2. Open http://localhost:1337/admin in your browser"
echo ""
echo "3. Create your admin account"
echo ""
echo "4. Follow STRAPI_SETUP.md to:"
echo "   - Create content types (Blog Post, Category, Page)"
echo "   - Configure API permissions"
echo "   - Add your first blog posts"
echo ""
echo "5. Start your frontend (in another terminal):"
echo "   cd paros-link-navigator"
echo "   npm run dev"
echo ""
echo "🎉 Happy blogging!"

