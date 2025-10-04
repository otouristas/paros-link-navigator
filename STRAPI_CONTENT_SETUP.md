# 🎯 Setting Up Strapi Content Types & Importing Data

You've created your admin account! Now let's set up the content structure and import all your blog posts.

---

## Part 1: Create Blog Post Content Type (5 minutes)

### Step 1: Open Content-Type Builder

1. In your Strapi admin panel (http://localhost:1337/admin)
2. Click **"Content-Type Builder"** in the left sidebar (looks like 🏗️)

### Step 2: Create Collection Type

1. Click the blue **"Create new collection type"** button
2. Enter **Display name**: `Blog Post`
3. Click **"Continue"**

### Step 3: Add Fields

Now add these fields ONE BY ONE. After each field, click **"Add another field"** to add the next one.

#### Field 1: Title
- Click **"Text"**
- **Name**: `title`
- **Type**: Short text
- Click **"Advanced Settings"** tab
  - ✅ Check **"Required field"**
  - ✅ Check **"Unique field"**
- Click **"Finish"**

#### Field 2: Slug  
- Click **"Add another field"** → **"Text"**
- **Name**: `slug`
- **Type**: Short text
- Advanced Settings:
  - ✅ Required field
  - ✅ Unique field
- Click **"Finish"**

#### Field 3: Excerpt
- Click **"Add another field"** → **"Text"**
- **Name**: `excerpt`
- **Type**: Long text
- Advanced Settings:
  - ✅ Required field
- Click **"Finish"**

#### Field 4: Content
- Click **"Add another field"** → **"Rich text"**
- **Name**: `content`
- Advanced Settings:
  - ✅ Required field
- Click **"Finish"**

#### Field 5: Author
- Click **"Add another field"** → **"Text"**
- **Name**: `author`
- **Type**: Short text
- Click **"Advanced Settings"** tab
  - **Default value**: `Aggelos Rentals Team`
- Click **"Finish"**

#### Field 6: Category
- Click **"Add another field"** → **"Text"**
- **Name**: `category`
- **Type**: Short text
- Advanced Settings:
  - ✅ Required field
- Click **"Finish"**

#### Field 7: Read Time
- Click **"Add another field"** → **"Text"**
- **Name**: `readTime`
- **Type**: Short text
- Advanced Settings:
  - **Default value**: `5 min read`
- Click **"Finish"**

#### Field 8: Featured
- Click **"Add another field"** → **"Boolean"**
- **Name**: `featured`
- **Default value**: `false` (toggle should be OFF)
- Click **"Finish"**

#### Field 9: Featured Image
- Click **"Add another field"** → **"Media"**
- **Name**: `featuredImage`
- **Type**: Single media
- **Allowed types**: Images
- Click **"Finish"**

### Step 4: Save and Restart

1. Click **"Save"** button (top right)
2. Wait 20-30 seconds for Strapi to restart
3. You'll see a success message
4. The page will reload

✅ **Content type created!**

---

## Part 2: Set API Permissions (2 minutes)

### Step 1: Navigate to Permissions

1. Click **"Settings"** in the left sidebar (⚙️ at the bottom)
2. Under **"USERS & PERMISSIONS PLUGIN"** section
3. Click **"Roles"**

### Step 2: Configure Public Role

1. Click on **"Public"** role
2. Scroll down to find **"Blog-post"** section
3. Check these boxes:
   - ✅ `find` (allows fetching all posts)
   - ✅ `findOne` (allows fetching single post)
4. Click **"Save"** button (top right)

✅ **Permissions set!**

---

## Part 3: Import Your Blog Posts (Method 1 - Manual)

Now let's add your 6 blog posts. I'll give you all the data ready to copy-paste!

### Blog Post #1: Complete Guide to Exploring Paros by Car

1. Click **"Content Manager"** in sidebar
2. Click **"Blog Post"**
3. Click **"Create new entry"**
4. Fill in:

```
Title: Complete Guide to Exploring Paros by Car: Best Routes and Hidden Gems

Slug: complete-guide-exploring-paros-car

Excerpt: Discover the most scenic routes around Paros island, from the famous Golden Beach to hidden coves only accessible by car. Our local experts share insider tips for the perfect island road trip.

Content: 
[Copy the content from the visual editor below - it's a complete article about exploring Paros by car with routes, beaches, and tips]

Category: Travel Guide

Read Time: 8 min read

Author: Aggelos Rentals Team

Featured: ✅ YES (toggle ON)

Featured Image: Upload an image (or skip for now)
```

5. Click **"Save"**
6. Click **"Publish"**

### Blog Post #2: Antiparos Island Hopping

Click **"Create new entry"** again:

```
Title: Antiparos Island Hopping: Ferry Schedule and Car Rental Tips

Slug: antiparos-island-hopping-ferry-guide

Excerpt: Everything you need to know about taking your rental car to Antiparos. Ferry schedules, parking tips, and the best spots to visit on this charming smaller island.

Content:
[Complete guide about Antiparos ferry, schedules, costs, and what to see]

Category: Island Hopping

Read Time: 6 min read

Author: Aggelos Rentals Team

Featured: NO (toggle OFF)

Featured Image: Upload or skip
```

Click **"Save"** and **"Publish"**

### Blog Post #3: Scooter vs Car vs ATV

```
Title: Scooter vs Car vs ATV: Which Vehicle is Best for Your Paros Adventure?

Slug: scooter-car-atv-comparison-paros

Excerpt: Compare the pros and cons of different rental vehicles for exploring Paros and Antiparos. From fuel efficiency to off-road capability, find the perfect ride for your island adventure.

Content:
[Detailed comparison of vehicles with pros/cons for each]

Category: Vehicle Guide

Read Time: 5 min read

Author: Aggelos Rentals Team

Featured: NO
```

Click **"Save"** and **"Publish"**

### Blog Post #4: Paros Airport to Naoussa

```
Title: Paros Airport to Naoussa: Complete Transportation Guide

Slug: paros-airport-naoussa-transportation-guide

Excerpt: Step-by-step guide for getting from Paros Airport to Naoussa village. Compare rental car pickup, public transport, and taxi options to start your island adventure right.

Content:
[Transportation options, costs, times, and recommendations]

Category: Transportation

Read Time: 4 min read

Author: Aggelos Rentals Team

Featured: NO
```

Click **"Save"** and **"Publish"**

### Blog Post #5: Best Beaches in Paros

```
Title: Best Beaches in Paros Accessible by Car: A Local's Guide

Slug: best-beaches-paros-accessible-car

Excerpt: Discover Paros' most beautiful beaches that you can easily reach by car. From family-friendly shores to secluded coves, our local guide reveals the island's best-kept secrets.

Content:
[Guide to beaches with driving directions, facilities, and tips]

Category: Beaches

Read Time: 7 min read

Author: Aggelos Rentals Team

Featured: NO
```

Click **"Save"** and **"Publish"**

### Blog Post #6: Driving in Greece

```
Title: Driving in Greece: Essential Rules and Tips for Tourists

Slug: driving-greece-rules-tips-tourists

Excerpt: Everything international visitors need to know about driving in Greece. From traffic rules to parking regulations, stay safe and confident behind the wheel in Paros and Antiparos.

Content:
[Complete guide to Greek traffic rules, signs, parking, and safety]

Category: Safety Tips

Read Time: 6 min read

Author: Aggelos Rentals Team

Featured: NO
```

Click **"Save"** and **"Publish"**

---

## Part 4: Verify Everything Works

### Step 1: Check Your Posts

1. In Strapi: Go to **Content Manager** → **Blog Post**
2. You should see all 6 posts listed
3. They should all say **"Published"**

### Step 2: Test the API

Open your browser and go to:
```
http://localhost:1337/api/blog-posts?populate=*
```

You should see JSON data with all your blog posts!

### Step 3: Check Your Website

1. Make sure your frontend is running:
   ```powershell
   npm run dev
   ```

2. Go to: http://localhost:5173/blog

3. You should see all your blog posts! 🎉

---

## 🎉 You're Done!

Now you can:
- ✅ Edit any blog post through Strapi admin
- ✅ Add new blog posts easily
- ✅ Upload images
- ✅ Changes appear instantly on your website

---

## 📝 Quick Tips

### To Add a New Blog Post Later:

1. Go to Strapi admin: http://localhost:1337/admin
2. Content Manager → Blog Post → Create new entry
3. Fill in all fields
4. Click Save → Publish
5. Visit your website to see it!

### To Edit an Existing Post:

1. Content Manager → Blog Post
2. Click on the post you want to edit
3. Make changes
4. Click Save → Publish
5. Changes are live!

### Categories You Can Use:

- Travel Guide
- Island Hopping
- Vehicle Guide
- Transportation
- Beaches
- Safety Tips
- Tips & Tricks
- Local Insights

(You can add more or change these as needed!)

---

## 🆘 Troubleshooting

### "Posts not showing on website"
- Check that posts are **Published** (not just Saved)
- Make sure Strapi is running (Terminal 1)
- Make sure frontend is running (Terminal 2)
- Check API permissions are set for Public role

### "Can't upload images"
- Images should be < 10MB
- Use JPG, PNG, or WebP format
- Try a different image if one doesn't work

### "API error"
- Make sure permissions are set: Settings → Roles → Public → Blog-post (find & findOne)
- Restart Strapi if needed

---

**Need the full article content?** Check the `BLOG_CONTENT_FULL.md` file for complete article text you can copy-paste into each post!

