# 📝 Strapi CMS Integration for Paros Rent-a-Car

This project now includes a full Strapi CMS integration, allowing you to manage all website content through a user-friendly admin dashboard.

## 🎯 What You Can Do

With the Strapi dashboard, you can now:

✅ **Manage Blog Posts**
- Create, edit, and delete blog posts
- Add rich text content with images
- Set featured posts
- Organize by categories
- Schedule publications

✅ **User Management**
- Add and manage admin users
- Set role-based permissions
- Control access levels

✅ **Content Management**
- Upload and organize media files
- Manage categories and tags
- Create custom pages
- SEO optimization fields

✅ **API Management**
- RESTful API automatically generated
- GraphQL support (optional)
- Fine-grained permission control

## 📁 Project Structure

```
paros-rent-acar/
├── paros-link-navigator/          # Frontend (React + Vite)
│   ├── src/
│   │   ├── services/
│   │   │   └── strapi-api.ts     # API service layer
│   │   ├── hooks/
│   │   │   └── use-blog-posts.ts # React Query hooks
│   │   ├── types/
│   │   │   └── strapi.ts         # TypeScript types
│   │   └── lib/
│   │       └── strapi-config.ts  # Configuration
│   └── .env                       # Environment variables
│
└── paros-cms/                     # Backend (Strapi CMS)
    ├── src/
    │   ├── api/                   # API endpoints
    │   └── admin/                 # Admin panel customization
    ├── config/
    │   └── middlewares.js         # CORS & security
    └── public/
        └── uploads/               # Media files
```

## 🚀 Getting Started

### Quick Setup (5 minutes)

**For Windows:**
```powershell
.\setup-strapi.ps1
```

**For macOS/Linux:**
```bash
chmod +x setup-strapi.sh
./setup-strapi.sh
```

Then follow the on-screen instructions!

### Manual Setup

See `STRAPI_QUICK_START.md` for step-by-step instructions.

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the frontend directory:

```env
# Development
VITE_STRAPI_URL=http://localhost:1337
VITE_STRAPI_API_TOKEN=

# Production (after deployment)
# VITE_STRAPI_URL=https://your-strapi-instance.com
# VITE_STRAPI_API_TOKEN=your-production-token
```

### Content Types

The following content types are configured:

1. **Blog Post**
   - Title, Slug, Excerpt, Content
   - Author, Category, Read Time
   - Featured Image
   - Featured Flag
   - Published Date

2. **Category**
   - Name, Slug, Description
   - Icon

3. **Page** (optional)
   - Title, Slug, Content
   - Meta Description, Keywords

## 💻 Development Workflow

### Starting the Development Environment

**Terminal 1 - Strapi Backend:**
```bash
cd ../paros-cms
npm run develop
```
Access admin panel at: http://localhost:1337/admin

**Terminal 2 - React Frontend:**
```bash
cd paros-link-navigator
npm run dev
```
Access website at: http://localhost:5173

### Adding a New Blog Post

1. Open http://localhost:1337/admin
2. Go to **Content Manager** > **Blog Post**
3. Click **Create new entry**
4. Fill in all required fields:
   - Title (will appear as the post heading)
   - Slug (URL-friendly version, e.g., "my-blog-post")
   - Excerpt (summary for listings)
   - Content (full article with rich text)
   - Category (e.g., "Travel Guide", "Tips")
   - Featured (check for homepage display)
   - Upload Featured Image
5. Click **Save**
6. Click **Publish**
7. Visit your blog page to see it live!

### Editing Existing Content

1. Go to **Content Manager** > **Blog Post**
2. Click on the post you want to edit
3. Make your changes
4. Click **Save** and **Publish**
5. Changes appear immediately on the website

## 🎨 Features

### Frontend Integration

- **Automatic Fallback**: Shows hardcoded posts if Strapi is unavailable
- **Loading States**: Beautiful skeleton loaders while fetching
- **Error Handling**: Graceful error messages
- **React Query**: Efficient data fetching and caching
- **TypeScript**: Full type safety

### Backend Features

- **Admin Dashboard**: User-friendly content management
- **Media Library**: Upload and organize images
- **Role-Based Access**: Control who can edit what
- **Draft/Publish**: Preview before going live
- **RESTful API**: Automatically generated endpoints

## 🔒 Security

### API Permissions

By default, the public can:
- ✅ View published blog posts (GET)
- ✅ View categories (GET)
- ❌ Create/Edit/Delete content (requires authentication)

### Admin Access

Only authenticated users can access:
- Admin dashboard
- Content creation/editing
- User management
- System settings

## 🚢 Deployment

### Deploying Strapi Backend

**Option 1: Railway.app (Recommended)**
1. Push your code to GitHub
2. Connect Railway to your repo
3. Add PostgreSQL database
4. Set environment variables
5. Deploy!

**Option 2: Heroku**
```bash
cd ../paros-cms
heroku create your-cms-name
heroku addons:create heroku-postgresql:mini
git push heroku main
```

**Option 3: DigitalOcean, AWS, Azure**
- See Strapi's official deployment guides

### Deploying Frontend

Update `.env` with production Strapi URL:
```env
VITE_STRAPI_URL=https://your-cms.railway.app
```

Then build and deploy as usual:
```bash
npm run build
```

## 📊 API Endpoints

Once Strapi is running, these endpoints are available:

- **Get all blog posts**: `GET /api/blog-posts?populate=*`
- **Get single post**: `GET /api/blog-posts?filters[slug][$eq]=post-slug&populate=*`
- **Get categories**: `GET /api/categories`
- **API Documentation**: http://localhost:1337/documentation

## 🛠️ Customization

### Adding New Fields to Blog Posts

1. Go to **Content-Type Builder**
2. Click **Blog Post**
3. Click **Add another field**
4. Choose field type and configure
5. Click **Save** (Strapi will restart)
6. Update TypeScript types in `src/types/strapi.ts`
7. Update transformation in `src/services/strapi-api.ts`

### Creating New Content Types

1. Go to **Content-Type Builder**
2. Click **Create new collection type**
3. Define fields
4. Configure API permissions
5. Create API service methods
6. Create React hooks
7. Use in components

## 🐛 Troubleshooting

### "Cannot connect to Strapi"
- Check if Strapi is running on port 1337
- Verify CORS configuration in `config/middlewares.js`
- Check firewall settings

### "Blog posts not showing"
- Ensure posts are **Published**, not just saved
- Verify API permissions for public role
- Check browser console for errors

### "Images not loading"
- Verify image upload in Strapi
- Check media library permissions
- Ensure image URLs are correct

### Port already in use
```bash
# Kill process on port 1337
npx kill-port 1337

# Or change port in paros-cms/config/server.js
```

## 📚 Documentation

- **Quick Start**: See `STRAPI_QUICK_START.md`
- **Detailed Setup**: See `STRAPI_SETUP.md`
- **Strapi Docs**: https://docs.strapi.io
- **React Query**: https://tanstack.com/query/latest

## 🆘 Support

Need help? Check these resources:
- Strapi Documentation: https://docs.strapi.io
- Strapi Community: https://forum.strapi.io
- React Query Docs: https://tanstack.com/query/latest

## ✨ Next Steps

1. ✅ Complete Strapi setup
2. ✅ Add your blog content
3. ⬜ Customize content types for your needs
4. ⬜ Add more admin users
5. ⬜ Set up email notifications
6. ⬜ Configure SEO plugins
7. ⬜ Set up automated backups
8. ⬜ Deploy to production
9. ⬜ Set up CI/CD pipeline

---

**Happy content managing! 🎉**

