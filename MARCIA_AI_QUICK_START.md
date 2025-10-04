# 🤖 Marcia AI - Quick Start Guide

**5-Minute Setup | Copy-Paste Ready**

---

## 📦 Installation

```bash
npm install lucide-react react-router-dom
```

---

## 🔧 Step 1: Context (2 minutes)

Create `src/contexts/MarciaContext.tsx`:

```typescript
import { createContext, useContext, useState, ReactNode } from 'react';

interface MarciaContextType {
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
}

const MarciaContext = createContext<MarciaContextType | undefined>(undefined);

export function MarciaProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MarciaContext.Provider value={{ 
      isOpen, 
      openChat: () => setIsOpen(true), 
      closeChat: () => setIsOpen(false) 
    }}>
      {children}
    </MarciaContext.Provider>
  );
}

export function useMarcia() {
  const context = useContext(MarciaContext);
  if (!context) throw new Error('useMarcia must be used within MarciaProvider');
  return context;
}
```

---

## 🎯 Step 2: Wrap Your App (1 minute)

Update `src/App.tsx`:

```typescript
import { MarciaProvider } from './contexts/MarciaContext';
import { MarciaChat } from './components/MarciaChat';

function App() {
  return (
    <MarciaProvider>
      {/* Your existing app */}
      <Routes>
        {/* Your routes */}
      </Routes>
      
      {/* Add this at the end */}
      <MarciaChat />
    </MarciaProvider>
  );
}
```

---

## 💬 Step 3: Chat Component (Copy Full File)

See full `MarciaChat.tsx` implementation in:
- **Main Guide:** `MARCIA_AI_REPLICATION_GUIDE.md`
- **Source Code:** `src/components/MarciaChat.tsx`

**Key sections to customize:**

### Initial Message
```typescript
const [messages, setMessages] = useState<Message[]>([{
  id: '1',
  content: "👋 Hi! I'm YOUR_BOT_NAME, your personal assistant!",
  sender: 'marcia',
  timestamp: new Date(),
  suggestions: ['Option 1', 'Option 2', 'Option 3'],
}]);
```

### AI Response Logic
```typescript
const getAIResponse = (userMessage: string): Message => {
  const lower = userMessage.toLowerCase();
  
  // Add your patterns here
  if (lower.includes('cheap') || lower.includes('budget')) {
    return {
      id: Date.now().toString(),
      content: "Here are budget options...",
      sender: 'marcia',
      timestamp: new Date(),
      suggestions: ['Show more', 'Compare prices'],
      vehicles: filteredProducts.slice(0, 3), // Your data
    };
  }
  
  // Default fallback
  return {
    id: Date.now().toString(),
    content: "How can I help you today?",
    sender: 'marcia',
    timestamp: new Date(),
    suggestions: ['Option A', 'Option B', 'Option C'],
  };
};
```

---

## 🎨 Step 4: Customize Colors

Update `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        'main': {
          900: '#YOUR_PRIMARY_COLOR',
          800: '#YOUR_SECONDARY_COLOR',
        },
        'gold': {
          600: '#YOUR_ACCENT_COLOR',
        },
      },
    },
  },
};
```

Then find/replace in `MarciaChat.tsx`:
- `from-main-900` → `from-YOUR_COLOR`
- `to-gold-600` → `to-YOUR_COLOR`

---

## 🚀 Step 5: Test It!

```bash
npm run dev
```

Open your site and click the floating button in the bottom right!

---

## 🎯 Common Patterns to Add

### Budget Query
```typescript
if (lower.includes('cheap') || lower.includes('budget')) {
  const budget = products.filter(p => p.price < 50);
  return { content: "💰 Budget options!", vehicles: budget };
}
```

### Category Query
```typescript
if (lower.includes('family') || lower.includes('large')) {
  const family = products.filter(p => p.category === 'family');
  return { content: "👨‍👩‍👧‍👦 Family options!", vehicles: family };
}
```

### Location Query
```typescript
if (lower.includes('delivery') || lower.includes('pickup')) {
  return { 
    content: "📍 We deliver to:\n• Location 1\n• Location 2\n• Location 3",
    suggestions: ['Book now', 'More info'] 
  };
}
```

---

## 📱 Add to Other Pages

```typescript
import { useMarcia } from '@/contexts/MarciaContext';

function YourPage() {
  const { openChat } = useMarcia();
  
  return (
    <button onClick={openChat} className="...">
      Ask AI Assistant
    </button>
  );
}
```

---

## ✅ Checklist

- [ ] Context created
- [ ] App wrapped in Provider
- [ ] MarciaChat component added
- [ ] Colors customized
- [ ] At least 5 patterns added
- [ ] Tested on mobile
- [ ] Tested on desktop
- [ ] Analytics added (optional)

---

## 🆘 Troubleshooting

**Chat won't open?**
```typescript
// Check: Is MarciaProvider wrapping your app?
// Check: Is <MarciaChat /> rendered in App.tsx?
// Check: Console for errors
```

**No products showing?**
```typescript
// Check: Is data loaded?
console.log('Products:', allProducts);

// Check: Are filters working?
console.log('Filtered:', filteredProducts);
```

**Styling looks wrong?**
```typescript
// Check: Tailwind config has your colors
// Check: Dark mode classes added (if using dark mode)
```

---

## 📚 Full Documentation

For complete details, see:
- **`MARCIA_AI_REPLICATION_GUIDE.md`** (Full guide)
- **`src/components/MarciaChat.tsx`** (Source code)
- **`src/pages/MarciaAI.tsx`** (Landing page)

---

## 🎉 You're Done!

Your AI assistant is ready! Now customize the patterns for your specific use case.

**Need help?** Check the full guide or review the source code.