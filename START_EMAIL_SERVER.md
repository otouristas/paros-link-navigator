# 🚀 Quick Start: Email Server Setup

## ✅ What's Been Fixed

The 404 error has been resolved! We've created a local development server for handling email submissions.

## 📦 Step 1: Install Dependencies

Run this command to install the required packages:

```bash
npm install
```

This will install:
- `express` - Backend server
- `cors` - Cross-origin requests
- `resend` - Email service
- `concurrently` - Run multiple commands

## 🎯 Step 2: Start Both Servers

### Option A: Run Everything Together (Recommended)
```bash
npm run dev:all
```

This starts:
- ✅ Backend API server on `http://localhost:3001`
- ✅ Frontend Vite dev server on `http://localhost:8080`

### Option B: Run Separately (Two Terminals)

**Terminal 1 - Backend:**
```bash
npm run server
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

## ✨ What You'll See

When the backend starts, you should see:
```
🚀 Email API server running on http://localhost:3001
📧 Endpoint: http://localhost:3001/api/send-email
💚 Health check: http://localhost:3001/api/health
```

## 🧪 Test the Setup

1. **Open your browser:** `http://localhost:8080`
2. **Go to Contact page:** Click "Contact Us"
3. **Fill out the form** with test data
4. **Submit** and watch for success message!

## 🔍 Troubleshooting

### "Port 3001 is already in use"
Stop any other processes using that port, or change the PORT in `server.js`:
```javascript
const PORT = 3002; // Change this
```

### Still Getting 404?
1. Make sure both servers are running
2. Check that you see the backend startup message
3. Try `http://localhost:3001/api/health` in your browser

### Emails Not Sending?
1. Check the backend terminal for error messages
2. Verify the Resend API key is correct
3. Check that you're connected to the internet

## 📧 Email Recipients

All form submissions will be sent to:
- ✅ aggelos@antiparosrentacar.com
- ✅ fotiskoukakis@gmail.com

## 🎨 Success Features

After submission, users will see:
- ✅ Green success message
- ✅ "Thank You!" heading
- ✅ "Try Marcia AI" button
- ✅ Automatic form reset

## 🚀 For Production (Vercel/Netlify)

The `/api/send-email.ts` file is already configured for serverless deployment.

**For Vercel:**
- Just push to your repo connected to Vercel
- The `/api` folder will automatically work

**For Netlify:**
- Move `api/send-email.ts` to `netlify/functions/`
- Deploy normally

## 📝 File Structure

```
project/
├── server.js           ← Local development backend
├── api/
│   └── send-email.ts  ← Production serverless function
├── src/
│   └── pages/
│       └── Contact.tsx ← Contact form
└── vite.config.ts     ← Proxy configuration
```

## ⚡ Quick Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev:all` | Start everything together |
| `npm run server` | Start backend only |
| `npm run dev` | Start frontend only |

---

**Ready to test?** Run `npm install` then `npm run dev:all` and visit the contact page! 📧✨
