# 📧 Resend Email Integration Setup Guide

## ✅ What's Been Set Up

1. **API Endpoint** (`/api/send-email.ts`)
   - Beautiful HTML email template with logo
   - Sends to: `aggelos@antiparosrentacar.com` & `fotiskoukakis@gmail.com`
   - Subject: "New Request from Paros Rent a Car"
   - Reply-to: Customer's email
   - Includes Marcia AI button in template

2. **Contact Form** (`src/pages/Contact.tsx`)
   - Full state management with React hooks
   - Loading states with spinner
   - Success message with "Thank You" and Marcia AI button
   - Error handling with fallback phone number
   - Form validation

3. **Package.json**
   - Resend dependency added (`^4.0.1`)

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
1. **Deploy your app to Vercel:**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **The `/api` folder will automatically work as serverless functions**

3. **Add Environment Variable in Vercel:**
   - Go to Project Settings → Environment Variables
   - Add: `RESEND_API_KEY` = `re_BDdb2zCK_D4MhverEdwKdq5kqVC7QVe8y`
   - (Though it's hardcoded in the file currently)

4. **Update the API file to use environment variable** (optional but recommended):
   ```typescript
   const resend = new Resend(process.env.RESEND_API_KEY || 're_BDdb2zCK_D4MhverEdwKdq5kqVC7QVe8y');
   ```

### Option 2: Netlify
1. **Create a `netlify/functions` directory:**
   ```bash
   mkdir -p netlify/functions
   ```

2. **Move `api/send-email.ts` to `netlify/functions/send-email.ts`**

3. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```

4. **Add Environment Variable:**
   - Go to Site Settings → Environment variables
   - Add: `RESEND_API_KEY`

### Option 3: Custom Backend (Node.js/Express)
If you have your own backend, create an Express endpoint:

```javascript
const express = require('express');
const { Resend } = require('resend');
const app = express();

const resend = new Resend('re_BDdb2zCK_D4MhverEdwKdq5kqVC7QVe8y');

app.use(express.json());
app.use(cors());

app.post('/api/send-email', async (req, res) => {
  // ... copy logic from api/send-email.ts
});

app.listen(3001);
```

## 📝 Testing Locally

### Quick Start (Already Configured!)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start both servers:**
   ```bash
   npm run dev:all
   ```
   
   **Or on Windows, double-click:** `start-dev.bat`

3. **Visit:** `http://localhost:8080/contact`

### What Runs:
- ✅ Backend API: `http://localhost:3001` (Express server)
- ✅ Frontend: `http://localhost:8080` (Vite)
- ✅ Proxy configured automatically in `vite.config.ts`

### Files Created:
- `server.js` - Local Express server for development
- `api/send-email.ts` - Serverless function for production
- `vite.config.ts` - Proxy configuration (already set up!)
- `start-dev.bat` - Windows quick start script

## 🔧 Configuration

### Update Sender Email (Important!)
**Current:** Uses `onboarding@resend.dev` (Resend's test domain)
**Recommended:** Add your own domain to Resend

1. Go to https://resend.com/domains
2. Add your domain (rentacar-paros.gr)
3. Update DNS records
4. Change in `api/send-email.ts`:
   ```typescript
   from: 'Paros Rent A Car <noreply@rentacar-paros.gr>',
   ```

### Customize Email Template
The HTML template includes:
- Your logo (from `/logo.png`)
- Premium blue & gold colors matching your brand
- Marcia AI call-to-action button
- Customer details beautifully formatted
- Responsive design

## 📧 Email Recipients
- **Primary:** aggelos@antiparosrentacar.com
- **Secondary:** fotiskoukakis@gmail.com

Both will receive all contact form submissions.

## ✨ Features Included
- ✅ Beautiful branded email template
- ✅ Marcia AI integration in success message
- ✅ Loading states & error handling
- ✅ Reply-to customer email
- ✅ Mobile-responsive form
- ✅ Form validation
- ✅ Disabled states during submission
- ✅ Clear success/error messages

## 🐛 Troubleshooting

### Email Not Sending?
1. Check API key is correct
2. Verify `/api/send-email` endpoint is accessible
3. Check browser console for errors
4. Test with: `curl -X POST http://localhost:5173/api/send-email -H "Content-Type: application/json" -d '{"name":"Test","email":"test@test.com","phone":"123","message":"Test"}'`

### CORS Errors?
The API includes CORS headers. If issues persist, add to your hosting platform's configuration.

## 🎨 Customization

### Change Template Colors
Edit `api/send-email.ts` - search for:
- `#1e40af` (Main blue)
- `#fbbf24` (Gold)
- `#0f172a` (Dark blue)

### Modify Success Message
Edit `src/pages/Contact.tsx` - look for `submitStatus === 'success'` section

## 📱 Next Steps

1. **Run `npm install`** to install Resend package
2. **Deploy to Vercel/Netlify** for serverless functions
3. **Add your custom domain** to Resend
4. **Test the form** thoroughly
5. **Monitor emails** in Resend dashboard

## 🔐 Security Note
The API key is currently hardcoded. For production, use environment variables:
- Store in `.env` file (git-ignored)
- Add to hosting platform's environment variables
- Never commit API keys to git

---

**Need Help?** Contact the development team or check Resend docs: https://resend.com/docs
