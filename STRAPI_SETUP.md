# Strapi CMS Setup Guide for Paros Rent-a-Car

This guide will help you set up Strapi as a headless CMS for managing your website content.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL or SQLite for database

## Step 1: Create Strapi Backend

Navigate to the parent directory and create a new Strapi project:

```bash
cd ..
npx create-strapi-app@latest paros-cms --quickstart
```

This will create a new folder called `paros-cms` next to your `paros-link-navigator` folder.

## Step 2: Start Strapi

```bash
cd paros-cms
npm run develop
```

The Strapi admin panel will open at http://localhost:1337/admin

## Step 3: Create Admin User

On first launch, you'll be prompted to create an admin account:
- Fill in your details (email, password, etc.)
- Click "Let's start"

## Step 4: Create Content Types

### Blog Post Content Type

1. Go to Content-Type Builder (left sidebar)
2. Click "Create new collection type"
3. Name it "Blog Post" (singular: blog-post)
4. Add the following fields:

   **Text Fields:**
   - `title` (Short text, required, unique)
   - `slug` (Short text, required, unique)
   - `excerpt` (Long text, required)
   - `author` (Short text, default: "Aggelos Rentals Team")
   - `category` (Short text, required)
   - `readTime` (Short text, default: "5 min read")
   
   **Rich Text:**
   - `content` (Rich text, required)
   
   **Media:**
   - `featuredImage` (Single media)
   
   **Date:**
   - `publishedAt` (DateTime)
   
   **Boolean:**
   - `featured` (Boolean, default: false)

4. Click "Save" and "Restart Server"

### Category Content Type

1. Create new collection type "Category"
2. Add fields:
   - `name` (Short text, required, unique)
   - `slug` (Short text, required, unique)
   - `description` (Long text)
   - `icon` (Short text)

3. Click "Save"

### Page Content Type (for dynamic pages)

1. Create new collection type "Page"
2. Add fields:
   - `title` (Short text, required)
   - `slug` (Short text, required, unique)
   - `content` (Rich text)
   - `metaDescription` (Text)
   - `metaKeywords` (Text)

3. Click "Save"

## Step 5: Configure API Permissions

1. Go to Settings > Users & Permissions Plugin > Roles
2. Click on "Public"
3. Enable permissions for:
   - **Blog-post**: find, findOne
   - **Category**: find, findOne
   - **Page**: find, findOne
4. Click "Save"

## Step 6: Add Sample Blog Posts

1. Go to Content Manager > Blog Post
2. Click "Create new entry"
3. Fill in the blog post details
4. Click "Save" and then "Publish"
5. Repeat for multiple blog posts

## Step 7: Configure CORS (for local development)

Edit `paros-cms/config/middlewares.js`:

```javascript
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
```

## Step 8: Environment Variables

Create `.env` file in your frontend project (`paros-link-navigator`):

```env
VITE_STRAPI_URL=http://localhost:1337
VITE_STRAPI_API_TOKEN=your-api-token-here
```

## Step 9: Deploy Strapi (Production)

### Option 1: Railway.app (Recommended)
1. Create account at railway.app
2. Click "New Project" > "Deploy Strapi"
3. Connect your GitHub repo
4. Configure environment variables
5. Deploy

### Option 2: Heroku
1. Install Heroku CLI
2. Create new app: `heroku create paros-cms`
3. Add PostgreSQL: `heroku addons:create heroku-postgresql:mini`
4. Deploy: `git push heroku main`

### Option 3: DigitalOcean/AWS/Azure
Follow Strapi's official deployment guides for your preferred platform.

## API Endpoints

Once Strapi is running, you can access:

- Blog Posts: `http://localhost:1337/api/blog-posts`
- Single Blog Post: `http://localhost:1337/api/blog-posts?filters[slug][$eq]=your-slug`
- Categories: `http://localhost:1337/api/categories`
- Pages: `http://localhost:1337/api/pages`

## Strapi Admin Panel

Access the admin panel at: `http://localhost:1337/admin`

Here you can:
- ✅ Create, edit, and delete blog posts
- ✅ Manage users and permissions
- ✅ Upload and manage media
- ✅ Configure content types
- ✅ View analytics

## Troubleshooting

### Port already in use
```bash
# Kill process on port 1337
npx kill-port 1337
```

### Database issues
```bash
# Reset database (development only)
npm run strapi generate
```

### Cannot connect from frontend
- Check CORS configuration
- Verify API permissions are set to public
- Check firewall settings

## Next Steps

1. Populate your blog posts
2. Configure media upload settings
3. Set up email notifications
4. Configure backup strategy
5. Set up CI/CD pipeline

