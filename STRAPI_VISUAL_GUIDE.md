# 🎨 Strapi CMS - Visual Guide

A visual, step-by-step guide to using your new CMS dashboard.

---

## 🚀 Getting Started

### Step 1: Start Your Servers

```
┌─────────────────────────────────────────────┐
│  Terminal 1: Strapi Backend                │
│                                             │
│  $ cd ../paros-cms                          │
│  $ npm run develop                          │
│                                             │
│  ✅ Admin panel: http://localhost:1337/admin│
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│  Terminal 2: React Frontend                 │
│                                             │
│  $ cd paros-link-navigator                  │
│  $ npm run dev                              │
│                                             │
│  ✅ Website: http://localhost:5173          │
└─────────────────────────────────────────────┘
```

---

## 📝 Creating Your First Blog Post

### Visual Flow

```
┌──────────────────────────────────────────────────────────────┐
│  1. Open Admin Panel                                         │
│  → http://localhost:1337/admin                               │
│  → Log in with your credentials                              │
└──────────────────────────────────────────────────────────────┘
                            ↓
┌──────────────────────────────────────────────────────────────┐
│  2. Navigate to Content Manager                              │
│  → Click "Content Manager" in left sidebar                   │
│  → Click "Blog Post"                                          │
└──────────────────────────────────────────────────────────────┘
                            ↓
┌──────────────────────────────────────────────────────────────┐
│  3. Create New Entry                                         │
│  → Click blue "Create new entry" button                      │
└──────────────────────────────────────────────────────────────┘
                            ↓
┌──────────────────────────────────────────────────────────────┐
│  4. Fill in the Form                                         │
│                                                              │
│  📝 Title: "Best Beaches in Paros"                           │
│  🔗 Slug: "best-beaches-paros"                               │
│  📄 Excerpt: "Discover the most beautiful beaches..."        │
│  📚 Content: [Use rich text editor]                          │
│  👤 Author: "Aggelos Rentals Team"                           │
│  🏷️  Category: "Travel Guide"                                │
│  ⏱️  Read Time: "5 min read"                                 │
│  ⭐ Featured: ✅ [Check this]                                │
│  🖼️  Featured Image: [Upload image]                          │
└──────────────────────────────────────────────────────────────┘
                            ↓
┌──────────────────────────────────────────────────────────────┐
│  5. Publish                                                  │
│  → Click "Save" button (top right)                           │
│  → Click "Publish" button                                    │
│  → Success! ✅                                               │
└──────────────────────────────────────────────────────────────┘
                            ↓
┌──────────────────────────────────────────────────────────────┐
│  6. View on Website                                          │
│  → Go to http://localhost:5173/blog                          │
│  → Your post appears! 🎉                                     │
└──────────────────────────────────────────────────────────────┘
```

---

## 🎛️ Admin Dashboard Layout

```
┌───────────────────────────────────────────────────────────────┐
│  STRAPI ADMIN PANEL                               [User Menu] │
├──────────────┬────────────────────────────────────────────────┤
│              │                                                │
│  SIDEBAR     │         MAIN CONTENT AREA                      │
│              │                                                │
│  📊 Dashboard│    ┌──────────────────────────────────────┐   │
│  📝 Content  │    │  Your content appears here           │   │
│     Manager  │    │                                       │   │
│  🏗️  Content │    │  - Create/Edit/Delete                │   │
│     Type     │    │  - Upload images                      │   │
│     Builder  │    │  - Manage categories                  │   │
│  📦 Media    │    │                                       │   │
│     Library  │    └──────────────────────────────────────┘   │
│  ⚙️  Settings│                                                │
│              │                                                │
└──────────────┴────────────────────────────────────────────────┘
```

---

## 📂 Content Structure

```
Your CMS
│
├── 📝 Blog Posts
│   ├── "Complete Guide to Paros"
│   ├── "Best Beaches in Paros"
│   ├── "Antiparos Ferry Guide"
│   └── [Create more...]
│
├── 🏷️ Categories
│   ├── Travel Guide
│   ├── Vehicle Guide
│   ├── Safety Tips
│   └── [Create more...]
│
├── 📄 Pages (optional)
│   ├── About Us
│   ├── Terms & Conditions
│   └── [Create more...]
│
└── 🖼️ Media Library
    ├── blog-images/
    ├── featured-images/
    └── [Upload more...]
```

---

## 🔄 Content Workflow

```
DRAFT → SAVE → REVIEW → PUBLISH → LIVE

┌────────┐    ┌────────┐    ┌────────┐    ┌────────┐    ┌────────┐
│ Draft  │ → │ Saved  │ → │ Review │ → │Publish │ → │  Live  │
│        │    │        │    │        │    │        │    │        │
│ ✏️      │    │ 💾      │    │ 👀      │    │ 🚀      │    │ 🌐      │
└────────┘    └────────┘    └────────┘    └────────┘    └────────┘

📝 Draft:   Create new content
💾 Saved:   Save as draft (not visible on website)
👀 Review:  Preview and check
🚀 Publish: Make live on website
🌐 Live:    Visible to all visitors
```

---

## 🖼️ Adding Images

```
┌───────────────────────────────────────────────────────────┐
│  Method 1: During Blog Post Creation                     │
│                                                           │
│  1. Click "Add files" in Featured Image field            │
│  2. Choose image from computer                           │
│  3. Wait for upload to complete ✅                        │
│  4. Image is now attached to post                        │
└───────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────┐
│  Method 2: Media Library First                           │
│                                                           │
│  1. Go to Media Library in sidebar                       │
│  2. Click "Add new assets"                               │
│  3. Upload multiple images at once                       │
│  4. Organize into folders                                │
│  5. Use images in any blog post later                    │
└───────────────────────────────────────────────────────────┘

💡 Pro Tip: Optimize images before uploading!
   - Use WebP or JPEG format
   - Compress to < 500KB
   - Recommended size: 1200x630px
```

---

## 👥 User Roles & Permissions

```
┌──────────────────────────────────────────────────────────┐
│  Role Hierarchy                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  👑 Super Admin                                          │
│     └─ Full access to everything                        │
│        ├─ Create/Edit/Delete content                    │
│        ├─ Manage users                                  │
│        ├─ Configure settings                            │
│        └─ Access all features                           │
│                                                          │
│  📝 Editor                                               │
│     └─ Manage content                                   │
│        ├─ Create/Edit/Delete posts                      │
│        ├─ Upload media                                  │
│        └─ Publish content                               │
│                                                          │
│  ✍️  Author                                              │
│     └─ Create content                                   │
│        ├─ Create/Edit own posts                         │
│        ├─ Upload media                                  │
│        └─ Submit for review                             │
│                                                          │
│  👁️  Viewer (Public)                                     │
│     └─ Read-only access                                 │
│        └─ View published content via API                │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 🎯 Quick Actions Cheatsheet

```
╔═══════════════════════════════════════════════════════════╗
║  COMMON TASKS                                             ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║  ✅ Create Blog Post                                      ║
║     Content Manager → Blog Post → Create new entry       ║
║                                                           ║
║  ✏️  Edit Existing Post                                   ║
║     Content Manager → Blog Post → Click post → Edit      ║
║                                                           ║
║  🗑️  Delete Post                                          ║
║     Content Manager → Blog Post → Click post → Delete    ║
║                                                           ║
║  🖼️  Upload Image                                         ║
║     Media Library → Add new assets → Choose file         ║
║                                                           ║
║  👤 Add User                                              ║
║     Settings → Users → Add new user                      ║
║                                                           ║
║  🏷️  Create Category                                      ║
║     Content Manager → Category → Create new entry        ║
║                                                           ║
║  ⚙️  Configure Permissions                                ║
║     Settings → Roles → Select role → Enable permissions  ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

---

## 🚨 Troubleshooting Visual Guide

```
┌─────────────────────────────────────────────────────────────┐
│  Problem: Blog posts not showing on website                 │
├─────────────────────────────────────────────────────────────┤
│  ❓ Is Strapi running?                                      │
│     → Check Terminal 1, should show "Server started"        │
│                                                             │
│  ❓ Are posts published?                                    │
│     → Check Content Manager, look for "Published" status    │
│                                                             │
│  ❓ Are API permissions set?                                │
│     → Settings → Roles → Public → Enable find & findOne    │
│                                                             │
│  ❓ Is .env configured?                                     │
│     → Check VITE_STRAPI_URL=http://localhost:1337          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  Problem: Can't access admin panel                          │
├─────────────────────────────────────────────────────────────┤
│  ❓ Is Strapi running on port 1337?                         │
│     → Run: curl http://localhost:1337/admin                │
│                                                             │
│  ❓ Correct URL?                                            │
│     → Should be: http://localhost:1337/admin               │
│                                                             │
│  ❓ Port already in use?                                    │
│     → Run: npx kill-port 1337                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 📊 Status Indicators

```
┌──────────────────────────────────────────────┐
│  Content Status                              │
├──────────────────────────────────────────────┤
│  🟢 Published   = Live on website            │
│  🟡 Draft       = Saved but not published    │
│  🔴 Modified    = Published but has changes  │
│  ⚪ Unpublished = Was published, now hidden  │
└──────────────────────────────────────────────┘
```

---

## 💡 Pro Tips

```
╔════════════════════════════════════════════════════════════╗
║  🌟 BEST PRACTICES                                         ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║  ✅ Always save before publishing                          ║
║  ✅ Use descriptive slugs (lowercase, hyphens)             ║
║  ✅ Write compelling excerpts (150-200 chars)              ║
║  ✅ Optimize images before uploading                       ║
║  ✅ Preview changes before publishing                      ║
║  ✅ Use categories consistently                            ║
║  ✅ Set accurate read times                                ║
║  ✅ Add alt text to images (SEO)                           ║
║  ✅ Schedule posts with publish dates                      ║
║  ✅ Regular backups of content                             ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

---

## 🎓 Learning Path

```
Day 1: Basic Operations
  ├─ Create first blog post
  ├─ Upload images
  ├─ Publish content
  └─ View on website ✅

Day 2: Advanced Features
  ├─ Create categories
  ├─ Organize media library
  ├─ Use rich text editor
  └─ Schedule posts ✅

Day 3: Team Management
  ├─ Add team members
  ├─ Set permissions
  ├─ Review workflow
  └─ Collaboration ✅

Day 4: Optimization
  ├─ SEO settings
  ├─ Image optimization
  ├─ Performance tuning
  └─ Analytics ✅
```

---

## 🔗 Quick Reference Links

```
┌──────────────────────────────────────────────────────────┐
│  📌 IMPORTANT URLS                                       │
├──────────────────────────────────────────────────────────┤
│  Admin Panel:    http://localhost:1337/admin             │
│  API:            http://localhost:1337/api               │
│  API Docs:       http://localhost:1337/documentation     │
│  Website:        http://localhost:5173                   │
│  Blog Page:      http://localhost:5173/blog              │
└──────────────────────────────────────────────────────────┘
```

---

**🎉 You're ready to manage your content like a pro!**

For more details, see:
- [Quick Start Guide](./STRAPI_QUICK_START.md)
- [Command Reference](./STRAPI_COMMANDS.md)
- [Full Documentation](./README_STRAPI.md)

