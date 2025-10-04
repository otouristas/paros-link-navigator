# 🚀 Quick Installation Guide

Get Paros Rent A Car running on your local machine in 5 minutes!

## Prerequisites

✅ Node.js 18+ ([Download](https://nodejs.org/))  
✅ Git  
✅ A code editor (VS Code recommended)

## Installation Steps

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/paros-rent-acar.git
cd paros-rent-acar
```

### 2️⃣ Install Dependencies

```bash
npm install
```

This installs all required packages. Takes ~2 minutes.

### 3️⃣ Environment Setup

Create a `.env` file in the root directory:

```env
# Supabase (Required for fleet)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Resend (Required for contact form)
RESEND_API_KEY=your_resend_api_key
```

**Get your keys:**
- Supabase: [app.supabase.com](https://app.supabase.com/) → New Project → Settings → API
- Resend: [resend.com](https://resend.com/) → API Keys → Create

### 4️⃣ Start Development Server

**Windows:**
```bash
start-dev.bat
```

**Mac/Linux:**
```bash
npm run dev:all
```

This starts:
- ✅ Frontend on `http://localhost:8080`
- ✅ Backend API on `http://localhost:3001`

### 5️⃣ Open in Browser

Visit: **http://localhost:8080**

🎉 **You're done!** The website is now running locally.

---

## What's Next?

### Set Up Database (Optional but Recommended)

The fleet page needs a Supabase database. Here's the quick setup:

1. **Create Supabase project** at [app.supabase.com](https://app.supabase.com/)

2. **Create the `cars` table:**

```sql
create table cars (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  category text not null,
  transmission text,
  fuel_type text,
  seats integer,
  doors integer,
  air_conditioning boolean default true,
  price_per_day numeric,
  description text,
  features text[],
  image_url text,
  agency text,
  available boolean default true,
  created_at timestamp default now()
);

create index idx_cars_agency on cars(agency);
```

3. **Add vehicles** via Supabase dashboard

4. **Set agency** to `'aggelos-rentals'` for all vehicles

### Configure Email (Optional)

To test the contact form:

1. **Sign up** at [resend.com](https://resend.com/)
2. **Create API key**
3. **Add to `.env`:**
   ```env
   RESEND_API_KEY=re_your_key_here
   ```

**Note:** Without Resend, contact form shows an error. Everything else works fine!

---

## Troubleshooting

### Port Already in Use

```bash
# Kill processes on ports 8080 and 3001
# Windows:
netstat -ano | findstr :8080
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:8080 | xargs kill -9
lsof -ti:3001 | xargs kill -9
```

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Email Not Working

1. Check `RESEND_API_KEY` in `.env`
2. Verify API key is valid at [resend.com](https://resend.com/)
3. Check `server.js` is running (port 3001)

### Supabase Connection Error

1. Verify keys in `.env` are correct
2. Check Supabase project is not paused
3. Ensure table exists with correct schema

---

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Frontend only |
| `npm run server` | Backend only |
| `npm run dev:all` | Both together ⭐ |
| `npm run build` | Production build |
| `npm run preview` | Preview build |
| `npm run lint` | Check code quality |

---

## Folder Structure

```
paros-rent-acar/
├── src/                # Source code
│   ├── components/    # React components
│   ├── pages/         # Route pages
│   ├── hooks/         # Custom hooks
│   └── lib/           # Utilities
├── public/            # Static assets
├── api/               # Serverless functions
├── server.js          # Local dev server
└── package.json       # Dependencies
```

---

## Need More Help?

📖 **Full Documentation:** [README.md](./README.md)  
📧 **Email Setup:** [EMAIL_QUICK_FIX.md](./EMAIL_QUICK_FIX.md)  
🗄️ **Database Guide:** [README.md#database-setup](./README.md#-database-setup-supabase)  
🤝 **Contributing:** [CONTRIBUTING.md](./CONTRIBUTING.md)  
🐛 **Report Issues:** [GitHub Issues](https://github.com/yourusername/paros-rent-acar/issues)

---

## Quick Links

- 🌐 [Live Website](https://rentacar-paros.gr)
- 📱 [Contact](https://rentacar-paros.gr/contact)
- 🤖 [Marcia AI](https://rentacar-paros.gr/marcia-ai)
- 📧 [Email Us](mailto:aggelos@antiparosrentacar.com)

---

**Happy Coding! 🚗💨**
