# 🚀 Quick Start: Strapi CMS Integration

This guide gets you up and running with Strapi CMS in 5 minutes!

## Option 1: Automated Setup (Recommended)

### For Windows (PowerShell):
```powershell
.\setup-strapi.ps1
```

### For macOS/Linux:
```bash
chmod +x setup-strapi.sh
./setup-strapi.sh
```

## Option 2: Manual Setup

### Step 1: Install Strapi
```bash
cd ..
npx create-strapi-app@latest paros-cms --quickstart
```

### Step 2: Start Strapi
```bash
cd paros-cms
npm run develop
```

### Step 3: Create Admin Account
1. Open http://localhost:1337/admin
2. Fill in your admin details
3. Click "Let's start"

### Step 4: Create Content Types

#### Blog Post Content Type
1. Go to **Content-Type Builder** in the sidebar
2. Click **Create new collection type**
3. Name it **"Blog Post"** (singular: `blog-post`)
4. Add these fields:

| Field Name | Type | Options |
|------------|------|---------|
| title | Text (Short) | Required, Unique |
| slug | Text (Short) | Required, Unique |
| excerpt | Text (Long) | Required |
| content | Rich Text | Required |
| author | Text (Short) | Default: "Aggelos Rentals Team" |
| category | Text (Short) | Required |
| readTime | Text (Short) | Default: "5 min read" |
| featured | Boolean | Default: false |
| featuredImage | Media (Single) | - |

5. Click **Save** (Strapi will restart)

#### Category Content Type
1. Create new collection type **"Category"**
2. Add fields:

| Field Name | Type | Options |
|------------|------|---------|
| name | Text (Short) | Required, Unique |
| slug | Text (Short) | Required, Unique |
| description | Text (Long) | - |
| icon | Text (Short) | - |

3. Click **Save**

### Step 5: Configure API Permissions
1. Go to **Settings** > **Users & Permissions Plugin** > **Roles**
2. Click on **"Public"** role
3. Enable these permissions:
   - ✅ **Blog-post**: `find`, `findOne`
   - ✅ **Category**: `find`, `findOne`
4. Click **Save**

### Step 6: Add Your First Blog Post
1. Go to **Content Manager** > **Blog Post**
2. Click **Create new entry**
3. Fill in:
   - **Title**: "Your First Blog Post"
   - **Slug**: "your-first-blog-post"
   - **Excerpt**: A brief summary
   - **Content**: Full blog post content (use the rich text editor)
   - **Category**: "Travel Guide"
   - **Featured**: Check this box
   - Upload a **Featured Image**
4. Click **Save**
5. Click **Publish**

### Step 7: Configure Frontend
Create `.env` file in your frontend project:

```env
VITE_STRAPI_URL=http://localhost:1337
VITE_STRAPI_API_TOKEN=
```

### Step 8: Test the Integration
1. Start your frontend:
   ```bash
   npm run dev
   ```

2. Visit http://localhost:5173/blog

3. You should see your blog post from Strapi!

## 🎉 That's it!

Your Strapi CMS is now connected to your website. You can now:

- ✅ Create, edit, and delete blog posts through the admin panel
- ✅ Upload and manage images
- ✅ Organize posts by categories
- ✅ Manage user permissions
- ✅ Preview changes before publishing

## 📚 What's Next?

- See `STRAPI_SETUP.md` for detailed configuration
- Add more blog posts
- Customize content types
- Set up email notifications
- Deploy to production

## 🆘 Troubleshooting

### Frontend shows fallback data
- Check if Strapi is running on port 1337
- Verify API permissions are set to public
- Check browser console for errors

### Can't connect to Strapi
- Make sure Strapi is running: `npm run develop`
- Check CORS configuration in `config/middlewares.js`
- Verify `.env` file has correct `VITE_STRAPI_URL`

### Blog posts not appearing
- Make sure posts are **Published** (not just saved as draft)
- Verify API permissions for public role
- Check Content Type name matches API service

## 💡 Pro Tips

1. **Always publish after editing** - Saved posts won't appear on the website until published
2. **Use descriptive slugs** - They become part of your URL
3. **Optimize images** - Upload web-optimized images for better performance
4. **Write good excerpts** - They appear in search results and post listings
5. **Use categories** - Makes content easier to organize and filter

## 🔗 Useful Links

- Strapi Documentation: https://docs.strapi.io
- Strapi Admin Panel: http://localhost:1337/admin
- API Documentation: http://localhost:1337/documentation
- Your Blog: http://localhost:5173/blog

---

Need help? Check the full setup guide in `STRAPI_SETUP.md`

