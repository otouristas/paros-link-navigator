# 🔧 GitHub Deployment - Image Path Fix

## Problem

Blog images were using paths like `/src/assets/blog/image.webp` which work in development but **fail in production** when deployed to GitHub Pages, Vercel, Netlify, etc.

## Solution

All image paths have been updated from `/src/assets/...` to `/assets/...`, but the images need to be copied from the `src` folder to the `public` folder.

---

## 📋 Manual Steps (Required)

### Step 1: Create the assets folder structure

In your project root, create these folders:
```
public\assets\
public\assets\blog\
```

### Step 2: Copy blog images

Copy all files from:
```
src\assets\blog\*.*
```

To:
```
public\assets\blog\
```

**Files to copy:**
- Aerial-View-of-Antiparos-Island-1024x576.webp
- antiparos-paros-rent-jeep-car-rentals.webp
- antiparos-paros-with-ferry-1024x683.png
- antiparos-rent-a-car-scaled.jpg
- Kolimpithres-Beach-Paros-650x399.webp
- Luxury-Hotels-Paros-1024x682.webp
- rent-a-car-paros-1024x1024-1.webp
- Windsurf-in-paros-1024x682.jpg

### Step 3: Copy homepage jeep image

Copy this file:
```
src\assets\antiparos-paros-rent-jeep-car-rentals.webp
```

To:
```
public\assets\
```

---

## 🖱️ Using Windows Explorer

1. Open File Explorer
2. Navigate to your project folder
3. Go to `public` folder
4. Create `assets` folder
5. Inside `assets`, create `blog` folder
6. Go back to project root
7. Navigate to `src\assets\blog`
8. Select all images (Ctrl+A)
9. Copy them (Ctrl+C)
10. Navigate to `public\assets\blog`
11. Paste (Ctrl+V)
12. Go back to `src\assets`
13. Copy `antiparos-paros-rent-jeep-car-rentals.webp`
14. Navigate to `public\assets`
15. Paste

---

## ⚡ Using the Batch Script

Double-click `copy-blog-images.bat` in your project root.

Or run in Command Prompt:
```cmd
copy-blog-images.bat
```

---

## ✅ Verify

After copying, your `public` folder should look like this:

```
public/
├── assets/
│   ├── antiparos-paros-rent-jeep-car-rentals.webp
│   └── blog/
│       ├── Aerial-View-of-Antiparos-Island-1024x576.webp
│       ├── antiparos-paros-rent-jeep-car-rentals.webp
│       ├── antiparos-paros-with-ferry-1024x683.png
│       ├── antiparos-rent-a-car-scaled.jpg
│       ├── Kolimpithres-Beach-Paros-650x399.webp
│       ├── Luxury-Hotels-Paros-1024x682.webp
│       ├── rent-a-car-paros-1024x1024-1.webp
│       └── Windsurf-in-paros-1024x682.jpg
├── lovable-uploads/
├── logo.png
├── sitemap.xml
└── robots.txt
```

---

## 🧪 Test Locally

After copying the images:

```bash
# Build the project
npm run build

# Preview the built version
npm run preview
```

Visit `http://localhost:4173` and check:
- ✅ Homepage hero images load
- ✅ All 6 blog post featured images load
- ✅ No 404 errors in browser console

---

## 📤 Commit to GitHub

Once images are copied and tested:

```bash
git add public/assets/
git add src/pages/
git add copy-blog-images.bat
git add GITHUB_DEPLOYMENT_FIX.md
git commit -m "fix: update image paths for production deployment"
git push origin main
```

---

## 🚀 Deploy

Your images will now work correctly on:
- ✅ GitHub Pages
- ✅ Vercel
- ✅ Netlify
- ✅ Any static hosting

---

## 📝 What Changed?

### Before (Development Only)
```tsx
<img src="/src/assets/blog/image.webp" />
```

### After (Production Ready)
```tsx
<img src="/assets/blog/image.webp" />
```

### Why?

- `/public` folder contents are served at the root (`/`) in production
- Vite copies everything in `/public` to the build output
- `/src` folder is bundled and doesn't exist in production
- Using `/assets/...` makes images work in both dev and production

---

## 🆘 Still Having Issues?

### Images not showing in development?

Run the dev server again:
```bash
npm run dev
```

### Images not showing in production?

1. Check browser console for 404 errors
2. Verify files exist in `dist/assets/blog/` after build
3. Check file names match exactly (case-sensitive)
4. Clear browser cache (Ctrl+Shift+R)

### Build errors?

```bash
# Clean and rebuild
rm -rf dist node_modules
npm install
npm run build
```

---

## 📧 Need Help?

Contact: aggelos@antiparosrentacar.com

---

**✅ Once images are copied, your site will work perfectly on GitHub!**
