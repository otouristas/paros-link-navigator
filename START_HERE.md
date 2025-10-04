# 🚀 START HERE - Super Simple Setup

Follow these steps exactly. Just copy and paste each command!

## Step 1: Open PowerShell

1. Press `Windows + X`
2. Click "Windows PowerShell" or "Terminal"

## Step 2: Navigate to Parent Folder

```powershell
cd ..
```

## Step 3: Create Strapi Project

Copy and paste this (it will take 2-3 minutes):

```powershell
npx create-strapi-app@latest paros-cms --quickstart
```

**What to expect:**
- It will ask you to install `create-strapi-app` - press `y` and Enter
- It will download and install everything
- A browser window will open automatically with the Strapi admin panel

## Step 4: Create Your Admin Account

When the browser opens at `http://localhost:1337/admin`:

1. Fill in the form:
   - **First Name**: Your first name
   - **Last Name**: Your last name
   - **Email**: your-email@example.com
   - **Password**: Choose a strong password
   - **Confirm Password**: Same password

2. Click **"Let's start"**

3. You're now in the Strapi admin dashboard! 🎉

## Step 5: Create Content Types

### A. Create Blog Post Content Type

1. Click **"Content-Type Builder"** in the left sidebar
2. Click **"Create new collection type"**
3. Enter:
   - **Display name**: `Blog Post`
   - Click **"Continue"**

4. Add these fields one by one:

   **Field 1: Title**
   - Click **"Text"**
   - Name: `title`
   - Type: **Short text**
   - Click **"Advanced Settings"** tab
   - Check ✅ **Required field**
   - Check ✅ **Unique field**
   - Click **"Finish"**

   **Field 2: Slug**
   - Click **"Add another field"**
   - Click **"Text"**
   - Name: `slug`
   - Type: **Short text**
   - Advanced Settings: ✅ Required, ✅ Unique
   - Click **"Finish"**

   **Field 3: Excerpt**
   - Click **"Add another field"**
   - Click **"Text"**
   - Name: `excerpt`
   - Type: **Long text**
   - Advanced Settings: ✅ Required
   - Click **"Finish"**

   **Field 4: Content**
   - Click **"Add another field"**
   - Click **"Rich text"**
   - Name: `content`
   - Advanced Settings: ✅ Required
   - Click **"Finish"**

   **Field 5: Author**
   - Click **"Add another field"**
   - Click **"Text"**
   - Name: `author`
   - Type: **Short text**
   - Click **"Advanced Settings"**
   - Default value: `Aggelos Rentals Team`
   - Click **"Finish"**

   **Field 6: Category**
   - Click **"Add another field"**
   - Click **"Text"**
   - Name: `category`
   - Type: **Short text**
   - Advanced Settings: ✅ Required
   - Click **"Finish"**

   **Field 7: Read Time**
   - Click **"Add another field"**
   - Click **"Text"**
   - Name: `readTime`
   - Type: **Short text**
   - Default value: `5 min read`
   - Click **"Finish"**

   **Field 8: Featured**
   - Click **"Add another field"**
   - Click **"Boolean"**
   - Name: `featured`
   - Default value: `false`
   - Click **"Finish"**

   **Field 9: Featured Image**
   - Click **"Add another field"**
   - Click **"Media"**
   - Name: `featuredImage`
   - Type: **Single media**
   - Click **"Finish"**

5. Click **"Save"** (top right)
6. Wait for Strapi to restart (about 30 seconds)

### B. Set API Permissions

1. Click **"Settings"** in left sidebar
2. Click **"Users & Permissions Plugin"** → **"Roles"**
3. Click **"Public"** role
4. Scroll down to **"Blog-post"** section
5. Check these boxes:
   - ✅ `find`
   - ✅ `findOne`
6. Click **"Save"** (top right)

## Step 6: Add Your First Blog Post

1. Click **"Content Manager"** in left sidebar
2. Click **"Blog Post"**
3. Click **"Create new entry"** (blue button)
4. Fill in:
   - **Title**: `Welcome to Our Blog`
   - **Slug**: `welcome-to-our-blog`
   - **Excerpt**: `This is our first blog post about renting cars in Paros!`
   - **Content**: Write something about car rentals in Paros
   - **Category**: `Travel Guide`
   - **Featured**: ✅ Check this box
   - **Featured Image**: Click "Add files" and upload an image
5. Click **"Save"**
6. Click **"Publish"**

## Step 7: Start Your Website

Open a **NEW** PowerShell window (don't close the first one!):

```powershell
cd "C:\Users\kasio\OneDrive\Υπολογιστής\paros-rent-acar\paros-link-navigator"
npm run dev
```

## Step 8: See Your Blog!

Open your browser and go to:
```
http://localhost:5173/blog
```

You should see your blog post! 🎉

---

## 🎯 You're Done!

Now you have:
- ✅ Strapi CMS running at http://localhost:1337/admin
- ✅ Your website running at http://localhost:5173
- ✅ Your first blog post published!

## 📝 Daily Usage

### To start Strapi (to edit content):
```powershell
cd ..\paros-cms
npm run develop
```
Then go to: http://localhost:1337/admin

### To start your website:
```powershell
cd "C:\Users\kasio\OneDrive\Υπολογιστής\paros-rent-acar\paros-link-navigator"
npm run dev
```
Then go to: http://localhost:5173

---

## 🆘 Problems?

### "Command not found" or "npx not recognized"
- Make sure Node.js is installed: https://nodejs.org/
- Restart PowerShell after installing Node.js

### "Port 1337 already in use"
```powershell
npx kill-port 1337
```

### "Port 5173 already in use"
```powershell
npx kill-port 5173
```

### Blog posts not showing
- Make sure Strapi is running
- Make sure you clicked "Publish" (not just "Save")
- Make sure API permissions are set for Public role

---

## 💡 Quick Tips

- Always **Publish** after creating content (not just Save!)
- Keep both PowerShell windows open while working
- Use the Strapi admin to add/edit blog posts
- Your website automatically updates when you add new posts!

**Need more help?** See the other documentation files in your project folder.

