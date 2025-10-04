# 🚀 How to Start Your Development Servers

## ⚡ Quick Start (Recommended)

### Windows Users

**Double-click this file:**
```
start-dev.bat
```

### All Users (Terminal)

```bash
npm run dev:all
```

That's it! Both servers will start automatically.

---

## ✅ What You'll See

```
[server] Server running on http://localhost:3001
[server] ✅ Resend initialized successfully
[server] ✅ Email API ready

[dev] VITE v6.3.0 ready in 234 ms
[dev] ➜  Local: http://localhost:8080/
[dev] ➜  Network: use --host to expose
```

---

## 🌐 Access Your Website

**Frontend (Website):**  
`http://localhost:8080`

**Backend (API Health Check):**  
`http://localhost:3001/api/health`

---

## 🛑 How to Stop

Press `Ctrl + C` in the terminal

---

## 📋 What's Running?

1. **Backend Server (Port 3001)**
   - Handles contact form submissions
   - Sends emails via Resend
   - API endpoint: `/api/send-email`

2. **Frontend Server (Port 8080)**
   - Your website
   - Hot reload enabled (auto-refresh on changes)
   - React + Vite

---

## 🔍 Troubleshooting

### ❌ Error: "Port 3001 already in use"

**Kill the process:**
```bash
# Windows
netstat -ano | findstr :3001
taskkill /PID <number> /F

# Mac/Linux
lsof -ti:3001 | xargs kill -9
```

Then try again: `npm run dev:all`

### ❌ Error: "Module not found"

**Reinstall dependencies:**
```bash
npm install
```

### ❌ Error: "Failed to load Resend"

**Install missing packages:**
```bash
npm install express cors resend concurrently
```

### ⚠️ Warning: Strapi 404 errors (OK to ignore)

```
localhost:1337/api/blog-posts 404
```

This is normal! The website uses fallback blog data. Strapi is optional.

---

## 📝 Package.json Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Frontend only |
| `npm run server` | Backend only |
| `npm run dev:all` | Both (recommended) ⭐ |
| `npm run dev:test` | Test mode (no real emails) |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |

---

## 🎯 Daily Workflow

1. Open terminal in project folder
2. Run: `npm run dev:all`
3. Wait 10 seconds for servers to start
4. Open: `http://localhost:8080`
5. Start coding! Changes auto-refresh
6. Test contact form to verify email works
7. Press `Ctrl + C` when done

---

## 💡 Tips

- **Keep the terminal open** while working
- **Don't close the terminal** or servers will stop
- **Changes are automatic** - just save and refresh
- **Email API must be running** for contact form to work
- **Check terminal for errors** if something doesn't work

---

## 📧 Email Testing

To test the contact form:

1. Ensure servers are running (`npm run dev:all`)
2. Go to: `http://localhost:8080/contact`
3. Fill out the form
4. Click submit
5. Check terminal for success message
6. Email will be sent to:
   - aggelos@antiparosrentacar.com
   - fotiskoukakis@gmail.com

---

## 🆘 Still Not Working?

Check these files for detailed help:
- **API Errors:** [API_ERRORS_FIX.md](./API_ERRORS_FIX.md) ⭐
- **Email Issues:** [EMAIL_QUICK_FIX.md](./EMAIL_QUICK_FIX.md)
- **Full Setup:** [INSTALL.md](./INSTALL.md)
- **Main Docs:** [README.md](./README.md)

---

**✅ TL;DR: Run `npm run dev:all` and you're ready to go!** 🚀
