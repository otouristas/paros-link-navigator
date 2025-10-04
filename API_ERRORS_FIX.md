# 🔧 API Errors - Quick Fix

You're seeing these errors because the backend server isn't running.

## ❌ Current Errors

```
api/send-email:1 Failed to load resource: the server responded with a status of 404 ()
localhost:1337/api/blog-posts Failed to load resource: the server responded with a status of 404
```

---

## ✅ Solution: Start the Backend Server

You have **3 options**:

### Option 1: Start Everything Together (Recommended) ⭐

**Windows - Double-click:**
```
start-dev.bat
```

**Or run in terminal:**
```bash
npm run dev:all
```

This starts:
- ✅ Frontend on `http://localhost:8080`
- ✅ Backend API on `http://localhost:3001`
- ✅ Contact form will work
- ✅ Email sending will work

---

### Option 2: Start Servers Separately

**Terminal 1 - Backend:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

---

### Option 3: Test Without Real Emails

```bash
npm run dev:test
```

This runs a test server that doesn't actually send emails (useful for development).

---

## 🧪 Verify It's Working

After starting the servers, check:

1. **Backend API Running:**
   - Open: `http://localhost:3001/api/health`
   - Should see: `{"status":"ok"}`

2. **Frontend Running:**
   - Open: `http://localhost:8080`
   - Website loads normally

3. **Contact Form:**
   - Fill out the contact form
   - Click submit
   - Should see success message

---

## 📝 About the Errors

### 1. Strapi Blog Errors (OK to Ignore)
```
localhost:1337/api/blog-posts 404
```

**What it means:** Strapi CMS isn't running  
**Is this a problem?** No! The website uses fallback data  
**Do you need to fix it?** Only if you want to manage blog posts via Strapi

**To start Strapi (optional):**
```bash
cd paros-cms
npm run develop
```

### 2. Email API Error (MUST FIX)
```
api/send-email 404
```

**What it means:** Backend server isn't running  
**Is this a problem?** Yes! Contact form won't work  
**Fix:** Use Option 1 above (`npm run dev:all`)

---

## 🚀 Recommended Development Workflow

**Every time you start working:**

1. Open your project folder in terminal
2. Run: `npm run dev:all` (or double-click `start-dev.bat`)
3. Wait for both servers to start (takes ~10 seconds)
4. Open `http://localhost:8080` in your browser

**You'll see:**
```
[server] Server running on http://localhost:3001
[server] ✅ Email API ready
[dev] VITE ready in 234 ms
[dev] ➜  Local: http://localhost:8080/
```

---

## 🔍 Troubleshooting

### Port 3001 Already in Use

```bash
# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# Mac/Linux  
lsof -ti:3001 | xargs kill -9
```

### Port 8080 Already in Use

```bash
# Windows
netstat -ano | findstr :8080
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:8080 | xargs kill -9
```

### Server Not Starting

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try again
npm run dev:all
```

### Email Still Not Working

1. Check `.env` file has `RESEND_API_KEY`
2. Verify `server.js` exists in project root
3. Check terminal for error messages
4. See [EMAIL_QUICK_FIX.md](./EMAIL_QUICK_FIX.md)

---

## 📋 Quick Checklist

Before deploying or testing:

- [ ] `npm run dev:all` is running
- [ ] No red errors in terminal
- [ ] `http://localhost:8080` loads
- [ ] `http://localhost:3001/api/health` returns OK
- [ ] Contact form submits successfully
- [ ] Blog images display correctly
- [ ] All pages load without 404 errors

---

## 📞 Still Having Issues?

Check these guides:
- **Email Issues:** [EMAIL_QUICK_FIX.md](./EMAIL_QUICK_FIX.md)
- **Email Setup:** [START_EMAIL_SERVER.md](./START_EMAIL_SERVER.md)
- **Resend Integration:** [RESEND_EMAIL_SETUP.md](./RESEND_EMAIL_SETUP.md)
- **Installation:** [INSTALL.md](./INSTALL.md)

---

**✅ Quick Fix: Just run `npm run dev:all` and you're good to go!**
