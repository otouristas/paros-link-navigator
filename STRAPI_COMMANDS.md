# 🎮 Strapi CMS - Command Reference

Quick reference for common Strapi commands and operations.

## 🚀 Setup Commands

### Automated Setup
```bash
# Windows PowerShell
.\setup-strapi.ps1

# macOS/Linux
chmod +x setup-strapi.sh
./setup-strapi.sh
```

### Manual Setup
```bash
# Create Strapi project
cd ..
npx create-strapi-app@latest paros-cms --quickstart

# Navigate to project
cd paros-cms

# Start development server
npm run develop
```

## 🏃 Running Commands

### Start Strapi (Development)
```bash
cd ../paros-cms
npm run develop
```
Access at: http://localhost:1337/admin

### Start Strapi (Production Mode)
```bash
cd ../paros-cms
npm run build
npm run start
```

### Start Frontend
```bash
cd paros-link-navigator
npm run dev
```
Access at: http://localhost:5173

### Run Both (Recommended Workflow)

**Terminal 1:**
```bash
cd ../paros-cms && npm run develop
```

**Terminal 2:**
```bash
cd paros-link-navigator && npm run dev
```

## 🛠️ Development Commands

### Install Dependencies
```bash
# Strapi
cd ../paros-cms
npm install

# Frontend
cd paros-link-navigator
npm install
```

### Build for Production
```bash
# Strapi
cd ../paros-cms
npm run build

# Frontend
cd paros-link-navigator
npm run build
```

### Clear Cache
```bash
cd ../paros-cms
rm -rf .cache build
npm run build
```

## 🗄️ Database Commands

### Reset Database (Development Only!)
```bash
cd ../paros-cms
npm run strapi generate
```
⚠️ **Warning**: This deletes all data!

### Backup Database (SQLite)
```bash
cd ../paros-cms
cp .tmp/data.db .tmp/data.db.backup
```

### Export Data
```bash
cd ../paros-cms
npm run strapi export -- --file backup.tar.gz
```

### Import Data
```bash
cd ../paros-cms
npm run strapi import -- --file backup.tar.gz
```

## 👤 User Management Commands

### Create Admin User (CLI)
```bash
cd ../paros-cms
npm run strapi admin:create-user -- --email=admin@example.com --password=YourPassword123 --firstname=Admin --lastname=User
```

### Reset Admin Password
```bash
cd ../paros-cms
npm run strapi admin:reset-user-password -- --email=admin@example.com --password=NewPassword123
```

## 🔌 Plugin Commands

### Install Plugin
```bash
cd ../paros-cms
npm install @strapi/plugin-name
npm run build
```

### Generate API
```bash
cd ../paros-cms
npm run strapi generate
```

## 🐛 Troubleshooting Commands

### Kill Port 1337 (if already in use)
```bash
# Windows PowerShell
Get-Process -Id (Get-NetTCPConnection -LocalPort 1337).OwningProcess | Stop-Process

# macOS/Linux
lsof -ti:1337 | xargs kill -9

# Using npx (cross-platform)
npx kill-port 1337
```

### Kill Port 5173 (Vite dev server)
```bash
# Windows PowerShell
Get-Process -Id (Get-NetTCPConnection -LocalPort 5173).OwningProcess | Stop-Process

# macOS/Linux
lsof -ti:5173 | xargs kill -9

# Using npx (cross-platform)
npx kill-port 5173
```

### Check Running Processes
```bash
# Windows PowerShell
Get-NetTCPConnection -LocalPort 1337,5173

# macOS/Linux
lsof -i :1337,5173
```

### View Logs
```bash
cd ../paros-cms
npm run develop -- --watch-admin
```

### Rebuild Admin Panel
```bash
cd ../paros-cms
npm run build -- --clean
```

## 📦 Content Management Commands

### List Content Types
```bash
cd ../paros-cms
npm run strapi content-types:list
```

### Generate Content Type
```bash
cd ../paros-cms
npm run strapi generate:content-type
```

## 🌐 Deployment Commands

### Deploy to Heroku
```bash
cd ../paros-cms
heroku login
heroku create your-app-name
heroku addons:create heroku-postgresql:mini
git add .
git commit -m "Deploy to Heroku"
git push heroku main
```

### Deploy to Railway (CLI)
```bash
cd ../paros-cms
railway login
railway init
railway add
railway up
```

## 🔍 Useful npm Scripts

### Package.json Scripts

**Strapi:**
```bash
npm run develop      # Start dev server with auto-reload
npm run start        # Start production server
npm run build        # Build admin panel
npm run strapi       # Access Strapi CLI
```

**Frontend:**
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🔑 Environment Variables

### View Current Environment
```bash
# Frontend
cat .env

# Strapi
cd ../paros-cms
cat .env
```

### Set Environment Variable

**Windows PowerShell:**
```powershell
$env:VITE_STRAPI_URL="http://localhost:1337"
```

**macOS/Linux:**
```bash
export VITE_STRAPI_URL="http://localhost:1337"
```

## 📊 Monitoring Commands

### Check API Health
```bash
curl http://localhost:1337/api/blog-posts
```

### View Strapi Version
```bash
cd ../paros-cms
npm run strapi version
```

### Check Database Connection
```bash
cd ../paros-cms
npm run strapi console
```

## 🧪 Testing Commands

### Test API Endpoints
```bash
# Get all blog posts
curl http://localhost:1337/api/blog-posts?populate=*

# Get single blog post by slug
curl "http://localhost:1337/api/blog-posts?filters[slug][\$eq]=your-slug&populate=*"

# Get categories
curl http://localhost:1337/api/categories
```

### Test Frontend Connection
```bash
# In browser console (http://localhost:5173)
fetch('http://localhost:1337/api/blog-posts?populate=*')
  .then(r => r.json())
  .then(console.log)
```

## 🔐 Security Commands

### Generate New Secret Key
```bash
cd ../paros-cms
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### Update Admin JWT Secret
Edit `paros-cms/.env`:
```env
ADMIN_JWT_SECRET=your-new-secret-here
```

## 📝 Quick Tips

### One-liner to Start Everything
```bash
cd ../paros-cms && npm run develop & cd ../paros-link-navigator && npm run dev
```

### Check if Strapi is Running
```bash
curl http://localhost:1337/admin
# Should return HTML or redirect to login
```

### Check if Frontend is Running
```bash
curl http://localhost:5173
# Should return HTML
```

## 🆘 Emergency Commands

### Complete Reset (Nuclear Option)
```bash
# ⚠️ WARNING: Deletes ALL data!
cd ../paros-cms
rm -rf .cache build .tmp node_modules
npm install
npm run build
npm run develop
```

### Restore from Backup
```bash
cd ../paros-cms
npm run strapi import -- --file backup.tar.gz --force
```

## 📚 Help Commands

### Strapi CLI Help
```bash
cd ../paros-cms
npm run strapi help
```

### List All Available Commands
```bash
cd ../paros-cms
npm run strapi -- --help
```

---

## 🔗 Quick Links

- **Admin Panel**: http://localhost:1337/admin
- **API**: http://localhost:1337/api
- **API Docs**: http://localhost:1337/documentation
- **Frontend**: http://localhost:5173
- **Blog Page**: http://localhost:5173/blog

---

**💡 Tip**: Bookmark this file for quick reference!

