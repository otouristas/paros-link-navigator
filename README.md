# 🚗 Paros Rent A Car | Premium Car Rental Website

<div align="center">

![Paros Rent A Car](public/logo.png)

**Your Gateway to Exploring Paros & Antiparos Islands**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3-646cff.svg)](https://vitejs.dev/)

[Live Demo](https://rentacar-paros.gr) · [Report Bug](https://github.com/yourusername/paros-rent-acar/issues) · [Request Feature](https://github.com/yourusername/paros-rent-acar/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Development](#-development)
- [Email Setup](#-email-setup-resend)
- [Database Setup](#-database-setup-supabase)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**Paros Rent A Car** is a modern, full-featured car rental platform designed for Aggelos Rentals, serving the beautiful Greek islands of Paros and Antiparos. Built with cutting-edge technologies and AI-powered features, it provides an exceptional user experience for tourists looking to rent cars, scooters, ATVs, and more.

### Why This Project Stands Out

- 🤖 **Marcia AI** - Revolutionary AI-powered rental assistant
- 🚀 **Real-time Fleet Management** - Live vehicle availability via Supabase
- 📧 **Beautiful Email Templates** - Professional contact form with Resend
- 🎨 **Premium Design** - Modern UI with blue & gold branding
- 📱 **Fully Responsive** - Perfect on all devices
- ♿ **Accessible** - WCAG compliant
- 🌙 **Dark Mode** - Complete dark theme support
- 🌐 **SEO Optimized** - Perfect for search engines
- 📝 **Content Management** - Integrated Strapi CMS for blog

---

## ✨ Features

### 🤖 Marcia AI - Car Rental AI Assistant
Revolutionary AI-powered chatbot that helps customers find the perfect vehicle:
- 💬 Natural language understanding
- 🚗 Smart vehicle recommendations
- 📊 Real-time fleet availability
- 🎯 Context-aware responses
- 🌐 Trained with local expertise
- 🔗 Powered by **[Touristas AI](https://touristas.ai)**

### 🚙 Dynamic Fleet Management
Complete vehicle catalog with real-time data:
- 📱 Responsive grid layout with sidebar filters
- 🔍 Advanced filtering (category, transmission, seats, fuel)
- 💾 Supabase integration for live data
- 🖼️ Local image optimization
- 📄 Detailed vehicle pages with specs
- 🎨 Category-specific layouts (cars vs bikes)
- 💰 Real-time pricing
- 🔗 Direct booking integration

### 📝 Travel Blog
SEO-optimized blog with 6 comprehensive articles:
- ✍️ Complete Guide to Exploring Paros by Car
- 🏖️ Best Beaches Accessible by Car
- ⛴️ Antiparos Island Hopping & Ferry Guide
- 🏍️ Scooter vs Car vs ATV Comparison
- ✈️ Paros Airport to Naoussa Transportation
- 🚦 Driving in Greece: Rules & Tips

**Features:**
- 📸 Local featured images
- 🔗 Internal linking strategy
- 🎯 SEO optimization
- 📱 Mobile-friendly design
- 🎨 Beautiful typography
- 🤖 Marcia AI integration in articles

### 📧 Contact Form with Email
Professional contact system with beautiful emails:
- 📨 Resend API integration
- 🎨 Branded HTML email templates
- ✅ Success/error states with animations
- 🔄 Loading indicators
- 🤖 Marcia AI suggestion in success message
- 📬 Dual recipient support
- 📱 Mobile-optimized form

### 🏠 Homepage Features
- 🎯 Two-column hero with booking form
- 🖼️ Image gallery with local photos
- 🚗 Service overview cards
- 📍 Popular destination highlights
- ⭐ Customer testimonials
- 🏆 Trust badges & certifications
- 💬 WhatsApp integration
- 🌟 Marcia AI promotional banner

### 🎨 Design & UX
- 🎨 Premium blue (#1e40af) & gold (#fbbf24) color scheme
- 🌙 Complete dark mode implementation
- 📱 Mobile-first responsive design
- ⚡ Smooth animations & transitions
- 🎭 Beautiful gradients & shadows
- 🖼️ Optimized image loading
- 🔤 Perfect typography hierarchy
- ♿ WCAG 2.1 AA compliance

### 🔧 Additional Features
- 📍 Multiple pickup locations (Airport, Port, Parikia, Naoussa)
- 🚗 Vehicle categories (Economy, Scooters, ATVs, Family Cars)
- 📅 Advanced booking form with external integration
- 🗺️ Interactive location information
- 📞 Multiple contact methods (Phone, Email, WhatsApp)
- 🏢 About Us page with company history
- 📜 Terms & Conditions
- 🗺️ Complete sitemap.xml
- 🤖 robots.txt for SEO
- 📊 Google Analytics integration (G-1H34VC33RQ)

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3 | UI Framework |
| **TypeScript** | 5.5 | Type Safety |
| **Vite** | 6.3 | Build Tool |
| **Tailwind CSS** | 3.4 | Styling |
| **shadcn/ui** | Latest | UI Components |
| **React Router** | 6.26 | Routing |
| **TanStack Query** | 5.56 | Data Fetching |
| **Lucide React** | Latest | Icons |

### Backend & Services
| Service | Purpose |
|---------|---------|
| **Supabase** | Database & Fleet Management |
| **Resend** | Email Delivery |
| **Express** | Development API Server |
| **Strapi CMS** | Blog Content Management |

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TS linting
- **Lovable Tagger** - Component tracking
- **Concurrently** - Multi-process runner
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:
- **Node.js** 18+ installed ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- **Git** for version control
- A **Resend** account ([Sign up](https://resend.com/))
- A **Supabase** account ([Sign up](https://supabase.com/))

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/paros-rent-acar.git
cd paros-rent-acar
```

### 2. Install Dependencies

```bash
npm install
```

This installs all required packages:
- Frontend dependencies
- Backend API dependencies (Express, CORS, Resend)
- Development tools

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Resend API (for email)
RESEND_API_KEY=re_BDdb2zCK_D4MhverEdwKdq5kqVC7QVe8y

# Optional: Strapi CMS
VITE_STRAPI_URL=http://localhost:1337
```

---

## ⚙️ Configuration

### Supabase Setup

1. **Create a Supabase Project**
   - Go to [Supabase Dashboard](https://app.supabase.com/)
   - Click "New Project"
   - Note your URL and anon key

2. **Create the `cars` Table**

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

-- Filter by agency
create index idx_cars_agency on cars(agency);
```

3. **Add Your Vehicles**
   - Use the Supabase dashboard to add vehicles
   - Set `agency = 'aggelos-rentals'` for all your vehicles

4. **Update Configuration**
   ```typescript
   // src/lib/supabase.ts already configured
   // Just add your keys to .env
   ```

### Email Setup (Resend)

1. **Get API Key**
   - Sign up at [Resend](https://resend.com/)
   - Create an API key
   - Add to `.env` file

2. **Verify Your Domain** (Optional but recommended)
   - Add your domain in Resend dashboard
   - Update DNS records
   - Change `from` email in `server.js`:
   ```javascript
   from: 'Paros Rent A Car <noreply@rentacar-paros.gr>',
   ```

3. **Test Email Setup**
   ```bash
   npm run test-server
   ```
   Visit: `http://localhost:3001/api/health`

📖 **Detailed Guide:** See [EMAIL_QUICK_FIX.md](./EMAIL_QUICK_FIX.md)

### Strapi CMS Setup (Optional)

For blog content management:

```bash
cd paros-cms
npm install
npm run develop
```

📖 **Detailed Guides:**
- [START_HERE.md](./START_HERE.md) - Quick start
- [STRAPI_SETUP.md](./STRAPI_SETUP.md) - Complete setup
- [STRAPI_CONTENT_SETUP.md](./STRAPI_CONTENT_SETUP.md) - Content types

---

## 🔧 Development

### Start Development Servers

**Option 1: All Together** (Recommended)
```bash
npm run dev:all
```

This starts:
- ✅ Backend API server on `http://localhost:3001`
- ✅ Frontend on `http://localhost:8080`

**Option 2: Separate Terminals**

Terminal 1 - Backend:
```bash
npm run server
```

Terminal 2 - Frontend:
```bash
npm run dev
```

**Option 3: Test Mode** (No real emails)
```bash
npm run dev:test
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start frontend only |
| `npm run server` | Start backend API |
| `npm run test-server` | Test server (no emails sent) |
| `npm run dev:all` | Start everything together |
| `npm run dev:test` | Frontend + test server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

### Windows Quick Start

Double-click: **`start-dev.bat`**

This automatically:
1. Installs dependencies
2. Starts both servers
3. Opens your browser

---

## 📧 Email Setup (Resend)

The contact form uses Resend for beautiful HTML emails.

### Local Development

The project includes two servers:
- **`server.js`** - Full email functionality with Resend
- **`test-server.js`** - Test mode without sending emails

### Email Recipients

All form submissions send to:
- ✅ aggelos@antiparosrentacar.com
- ✅ fotiskoukakis@gmail.com

### Email Template Features
- 🎨 Branded design with logo
- 💙 Premium blue & gold colors
- 📱 Mobile responsive
- 🤖 Marcia AI promotional section
- 📋 Formatted customer details
- ✉️ Reply-to customer email
- 🔗 Footer with contact links

### Customization

Edit the HTML template in:
- **Development:** `server.js` (lines 45-150)
- **Production:** `api/send-email.ts` (lines 35-140)

### Troubleshooting

See comprehensive guides:
- [EMAIL_QUICK_FIX.md](./EMAIL_QUICK_FIX.md) - Quick fixes
- [START_EMAIL_SERVER.md](./START_EMAIL_SERVER.md) - Detailed setup
- [RESEND_EMAIL_SETUP.md](./RESEND_EMAIL_SETUP.md) - Full documentation

---

## 🗄️ Database Setup (Supabase)

### Fleet Management

The dynamic fleet system uses Supabase for real-time data.

**Table Schema:**
```typescript
interface Car {
  id: string;
  name: string;
  category: string;
  transmission: 'automatic' | 'manual';
  fuel_type: string;
  seats: number;
  doors: number;
  air_conditioning: boolean;
  price_per_day: number;
  description: string;
  features: string[];
  image_url: string;
  agency: string;
  available: boolean;
}
```

### Image Management

Fleet images are stored locally in `/src/assets/fleet/` and mapped in:
```typescript
// src/data/fleet-images.ts
export const fleetImages: Record<string, string> = {
  'vehicle-id-1': '/lovable-uploads/car-image.jpg',
  // ...
};
```

### Filtering System

The fleet page includes advanced filters:
- 🚗 Category (Cars, Scooters, ATVs, SUVs)
- ⚙️ Transmission (Automatic, Manual)
- 👥 Seats (2, 4, 5, 7+)
- ⛽ Fuel Type (Petrol, Diesel, Hybrid)

### Real-time Updates

Using TanStack Query for efficient data fetching:
```typescript
// src/hooks/use-cars.ts
export function useCars() {
  return useQuery({
    queryKey: ['cars'],
    queryFn: fetchCars,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
```

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Configure Environment**
   - Add environment variables in Vercel dashboard
   - The `/api` folder automatically becomes serverless functions

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Netlify

1. **Create `netlify.toml`**
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
   
   [[redirects]]
     from = "/api/*"
     to = "/.netlify/functions/:splat"
     status = 200
   ```

2. **Move API Function**
   ```bash
   mkdir -p netlify/functions
   cp api/send-email.ts netlify/functions/
   ```

3. **Deploy**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Custom Server

For VPS or dedicated hosting:

```bash
# Build frontend
npm run build

# Serve with Node.js
npm install -g serve
serve -s dist -l 3000

# Keep API running
pm2 start server.js
```

---

## 📁 Project Structure

```
paros-rent-acar/
├── public/                  # Static assets
│   ├── logo.png            # Brand logo
│   ├── sitemap.xml         # SEO sitemap
│   └── robots.txt          # Search engine rules
│
├── src/
│   ├── assets/             # Images & media
│   │   ├── blog/          # Blog featured images
│   │   └── fleet/         # Vehicle images
│   │
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Footer.tsx     # Site footer
│   │   ├── SEO.tsx        # SEO meta tags
│   │   ├── MarciaChat.tsx # AI chatbot
│   │   ├── BookingForm.tsx # Rental booking form
│   │   ├── BlogCTA.tsx    # Blog call-to-action
│   │   └── WhatsAppButton.tsx
│   │
│   ├── contexts/           # React contexts
│   │   └── MarciaContext.tsx # Marcia AI state
│   │
│   ├── hooks/              # Custom React hooks
│   │   ├── use-cars.ts    # Fleet data fetching
│   │   ├── use-mobile.tsx # Mobile detection
│   │   └── use-toast.ts   # Toast notifications
│   │
│   ├── lib/                # Utilities
│   │   ├── supabase.ts    # Supabase client
│   │   └── utils.ts       # Helper functions
│   │
│   ├── pages/              # Route components
│   │   ├── blog/          # Blog articles
│   │   ├── Index.tsx      # Homepage
│   │   ├── Fleet.tsx      # Fleet listing
│   │   ├── FleetDetail.tsx # Vehicle details
│   │   ├── Contact.tsx    # Contact form
│   │   ├── MarciaAI.tsx   # Marcia AI landing
│   │   └── ...            # Other pages
│   │
│   ├── services/           # API services
│   │   └── strapi-api.ts  # Strapi integration
│   │
│   ├── types/              # TypeScript types
│   │   ├── database.ts    # Supabase types
│   │   └── strapi.ts      # Strapi types
│   │
│   ├── data/               # Static data
│   │   ├── fleet-images.ts # Image mappings
│   │   └── fallback-blog-posts.ts
│   │
│   └── App.tsx             # Main app component
│
├── api/                    # Serverless functions
│   └── send-email.ts      # Email API (production)
│
├── paros-cms/              # Strapi CMS
│   ├── config/            # Strapi configuration
│   ├── src/               # Content types
│   └── public/            # Uploads
│
├── server.js               # Local dev server
├── test-server.js          # Test server
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies

📚 Documentation Files:
├── README.md               # This file
├── EMAIL_QUICK_FIX.md     # Email troubleshooting
├── START_EMAIL_SERVER.md  # Email setup guide
├── RESEND_EMAIL_SETUP.md  # Resend documentation
├── START_HERE.md          # Quick start guide
├── STRAPI_SETUP.md        # Strapi installation
└── ...                    # More guides
```

---

## 🤝 Contributing

We welcome contributions! Here's how:

### 1. Fork the Repository

Click the "Fork" button at the top right of this page.

### 2. Create a Branch

```bash
git checkout -b feature/amazing-feature
```

### 3. Make Changes

Follow our coding standards:
- ✅ Use TypeScript
- ✅ Follow existing code style
- ✅ Add comments for complex logic
- ✅ Test thoroughly
- ✅ Update documentation

### 4. Commit Changes

```bash
git commit -m "Add amazing feature"
```

### 5. Push to Branch

```bash
git push origin feature/amazing-feature
```

### 6. Open Pull Request

Go to your fork on GitHub and click "New Pull Request"

### Code Style

- **TypeScript**: Strict mode enabled
- **React**: Functional components with hooks
- **Styling**: Tailwind CSS utility classes
- **Naming**: camelCase for variables, PascalCase for components
- **Files**: kebab-case for file names

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Aggelos Rentals

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 📞 Support & Contact

Need help? We're here for you!

- 📧 **Email:** aggelos@antiparosrentacar.com
- 📱 **Phone:** +30 694 495 0094
- 💬 **WhatsApp:** [Chat with us](https://wa.me/306944950094)
- 🌐 **Website:** [rentacar-paros.gr](https://rentacar-paros.gr)
- 🤖 **AI Assistant:** Try [Marcia AI](https://rentacar-paros.gr/marcia-ai)

### For Developers

- 🐛 **Bug Reports:** [Open an issue](https://github.com/yourusername/paros-rent-acar/issues)
- 💡 **Feature Requests:** [Open an issue](https://github.com/yourusername/paros-rent-acar/issues)
- 📖 **Documentation:** Check our guides in the repo

---

## 🙏 Acknowledgments

Special thanks to:

- **[Touristas AI](https://touristas.ai)** - Powering Marcia AI with travel expertise
- **[Lovable](https://lovable.dev)** - Development platform
- **[Supabase](https://supabase.com)** - Backend infrastructure
- **[Resend](https://resend.com)** - Email delivery service
- **[shadcn/ui](https://ui.shadcn.com)** - Beautiful UI components
- **[Tailwind CSS](https://tailwindcss.com)** - Styling framework
- **[Lucide](https://lucide.dev)** - Icon library

---

## 🌟 Star This Repository!

If you found this project helpful, please give it a ⭐️!

It helps others discover this project and motivates us to keep improving it.

---

<div align="center">

**Made with ❤️ for Aggelos Rentals**

**Explore Paros & Antiparos in Style! 🚗**

[Visit Website](https://rentacar-paros.gr) · [Contact Us](https://rentacar-paros.gr/contact) · [Try Marcia AI](https://rentacar-paros.gr/marcia-ai)

</div>