# 🏗️ Marcia AI - Technical Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                          Browser / User                          │
└──────────────────────────────┬──────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                        React Application                         │
│                                                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │              MarciaProvider (Context)                      │ │
│  │  • isOpen: boolean                                         │ │
│  │  • openChat()                                              │ │
│  │  • closeChat()                                             │ │
│  └────────────────────────────────────────────────────────────┘ │
│                               │                                   │
│                               ▼                                   │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │                    App Component                           │ │
│  │                                                            │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │ │
│  │  │   Routes     │  │   Header     │  │   Footer     │   │ │
│  │  └──────────────┘  └──────────────┘  └──────────────┘   │ │
│  │                                                            │ │
│  │  ┌──────────────────────────────────────────────────┐   │ │
│  │  │         MarciaChat (Global Component)            │   │ │
│  │  │                                                   │   │ │
│  │  │  • Floating toggle button                        │   │ │
│  │  │  • Chat window (conditionally rendered)          │   │ │
│  │  │  • Message handling                               │   │ │
│  │  │  • AI response logic                              │   │ │
│  │  └──────────────────────────────────────────────────┘   │ │
│  └────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                         Data Layer                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   Supabase   │  │  Local Data  │  │  API Calls   │         │
│  │   Database   │  │    (JSON)    │  │  (Optional)  │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
└─────────────────────────────────────────────────────────────────┘
```

---

## Component Hierarchy

```
App.tsx
├── MarciaProvider
│   ├── Router
│   │   ├── / (Homepage)
│   │   │   └── Marcia AI Banner
│   │   ├── /marcia-ai (Landing Page)
│   │   ├── /fleet (Product Listing)
│   │   ├── /fleet/:id (Product Detail)
│   │   │   └── "Ask Marcia AI" Button
│   │   └── Other Routes
│   │
│   └── MarciaChat (Global, always rendered)
│       ├── Toggle Button (floating)
│       └── Chat Window (conditional)
│           ├── Header
│           ├── Messages Container
│           │   ├── AI Messages
│           │   │   ├── Avatar
│           │   │   ├── Text Content
│           │   │   ├── Product Cards (optional)
│           │   │   └── Suggestion Chips (optional)
│           │   └── User Messages
│           │       ├── Avatar
│           │       └── Text Content
│           ├── Typing Indicator
│           └── Input Area
│               ├── Text Input
│               └── Send Button
```

---

## Data Flow Diagram

### 1. User Opens Chat

```
User clicks toggle button
         │
         ▼
useMarcia.openChat() called
         │
         ▼
isOpen state = true
         │
         ▼
Chat window renders
         │
         ▼
Initial greeting message displayed
```

### 2. User Sends Message

```
User types message
         │
         ▼
Presses Enter or clicks Send
         │
         ▼
handleSend() function called
         │
         ├─────────────────────┐
         │                     │
         ▼                     ▼
Add user message      Show typing indicator
to messages array              │
         │                     │
         └──────┬──────────────┘
                │
                ▼
        Wait 1-2 seconds
                │
                ▼
    getAIResponse(userMessage)
                │
                ├─────────────────────┐
                │                     │
                ▼                     ▼
    Pattern matching      Filter products/data
    (keyword detection)   based on query
                │                     │
                └──────┬──────────────┘
                       │
                       ▼
            Generate response object
            {
              content: string,
              suggestions: string[],
              vehicles: Product[]
            }
                       │
                       ▼
            Add AI response to messages
                       │
                       ▼
            Hide typing indicator
                       │
                       ▼
            Auto-scroll to bottom
```

### 3. Pattern Matching Logic

```
User message: "I need a cheap car"
         │
         ▼
Convert to lowercase: "i need a cheap car"
         │
         ▼
Check patterns (in order):
         │
         ├─ Contains "cheap"? ✓
         │  Contains "budget"? ✓
         │  Contains "economy"? ✗
         │
         ▼
Pattern matched: BUDGET QUERY
         │
         ▼
Filter products:
  category = 'economy' OR
  price < threshold
         │
         ▼
Sort by price (ascending)
         │
         ▼
Take first 3 results
         │
         ▼
Return response with:
  • Budget-friendly message
  • 3 economy cars
  • Suggestion chips
```

---

## State Management

### Context State

```typescript
interface MarciaContextType {
  isOpen: boolean;        // Chat window visibility
  openChat: () => void;   // Function to open
  closeChat: () => void;  // Function to close
}
```

### Component State

```typescript
interface MarciaChat {
  messages: Message[];       // Conversation history
  input: string;            // Current input value
  isTyping: boolean;        // AI typing indicator
}

interface Message {
  id: string;              // Unique identifier
  content: string;         // Message text
  sender: 'user' | 'marcia'; // Who sent it
  timestamp: Date;         // When sent
  suggestions?: string[];  // Optional quick actions
  vehicles?: Vehicle[];    // Optional product cards
}
```

---

## Pattern Matching Algorithm

### Priority Order

```
1. Exact Phrase Match
   └─ "family car with 7 seats"
   
2. Multiple Keyword Match
   └─ "cheap" + "economy" + "budget"
   
3. Single Keyword Match
   └─ "family" OR "budget" OR "scooter"
   
4. Partial Match
   └─ "fam" (matches "family")
   
5. Fallback
   └─ Default response with suggestions
```

### Pattern Template

```typescript
// Pattern check
if (keywords.some(k => message.includes(k))) {
  
  // Data filtering
  const filtered = data.filter(item => 
    item.category === targetCategory &&
    item.available === true
  );
  
  // Response generation
  return {
    content: "Personalized message",
    suggestions: ["Action 1", "Action 2"],
    vehicles: filtered.slice(0, 3)
  };
}
```

---

## Integration Points

### 1. With Data Source

```
useCars() Hook
     │
     ▼
TanStack Query
     │
     ▼
Supabase Database
     │
     ▼
Cars Table (filtered by agency)
     │
     ▼
MarciaChat component (allCars variable)
     │
     ▼
getAIResponse() filters based on query
     │
     ▼
Returns 0-3 matching vehicles
```

### 2. With Routing

```
User clicks product card in chat
     │
     ▼
onClick → closeChat()
     │
     ▼
React Router navigate
     │
     ▼
/fleet/:id page
     │
     ▼
Product detail displayed
```

### 3. With Analytics

```
User sends message
     │
     ├─ Track event: "chat_message_sent"
     │
User clicks suggestion
     │
     ├─ Track event: "suggestion_clicked"
     │
User clicks product card
     │
     └─ Track event: "product_view_from_chat"
```

---

## Performance Optimizations

### 1. Rendering Optimization

```
Messages rendered with:
  • React.memo for message components
  • Key prop = message.id (unique)
  • Virtual scrolling (future enhancement)
```

### 2. Data Optimization

```
Product filtering:
  • .filter() → Only matching items
  • .slice(0, 3) → Max 3 results
  • Lazy loading images
```

### 3. State Optimization

```
Context only stores:
  • isOpen (boolean) ← Minimal state
  
Component manages:
  • messages (local state)
  • input (local state)
```

---

## Security Considerations

### Client-Side Only

```
✓ No sensitive data exposed
✓ No user data stored
✓ No authentication required
✓ Read-only data access
✓ XSS prevention (React escaping)
```

### Data Validation

```typescript
// Input validation
if (!textToSend || 
    typeof textToSend !== 'string' || 
    !textToSend.trim()) {
  return; // Prevent empty messages
}

// Data sanitization (React handles this)
<p>{message.content}</p> // Auto-escaped
```

---

## Scalability

### Current Limitations

```
• Client-side pattern matching (limited complexity)
• No conversation memory across sessions
• No multi-turn context understanding
• Fixed response templates
```

### Future Enhancements

```
1. Backend AI Integration
   • OpenAI GPT-4
   • Claude API
   • Custom fine-tuned model

2. Conversation Memory
   • User preferences stored
   • Previous queries remembered
   • Personalized recommendations

3. Advanced NLP
   • Intent classification
   • Entity extraction
   • Sentiment analysis

4. Multi-modal Support
   • Voice input
   • Image upload
   • Video explanations
```

---

## Deployment Architecture

### Development

```
Local Machine
├── Vite Dev Server (Port 8080)
│   └── Hot Module Replacement
├── Backend API (Port 3001) [Optional]
└── Supabase (Cloud)
```

### Production

```
CDN / Static Host
├── Compiled React App
│   └── MarciaChat included in bundle
├── Supabase (Cloud)
└── Analytics (Google Analytics)
```

---

## File Structure

```
src/
├── components/
│   └── MarciaChat.tsx          # Main chat component (500 lines)
│
├── contexts/
│   └── MarciaContext.tsx       # Global state (35 lines)
│
├── pages/
│   ├── Index.tsx              # Homepage with banner
│   ├── MarciaAI.tsx           # Landing page (360 lines)
│   └── FleetDetail.tsx        # Product page with AI button
│
├── hooks/
│   └── use-cars.ts            # Data fetching hook
│
└── types/
    └── database.ts            # TypeScript interfaces
```

---

## Testing Strategy

### Unit Tests

```typescript
describe('getAIResponse', () => {
  it('returns budget cars for "cheap" query', () => {
    const response = getAIResponse('cheap car');
    expect(response.vehicles).toHaveLength(3);
    expect(response.vehicles[0].category).toBe('economy');
  });
});
```

### Integration Tests

```typescript
describe('MarciaChat', () => {
  it('opens when openChat is called', () => {
    render(<MarciaChat />);
    const button = screen.getByText('Ask Marcia AI');
    fireEvent.click(button);
    expect(screen.getByText('Marcia AI')).toBeInTheDocument();
  });
});
```

### E2E Tests

```typescript
describe('Chat Flow', () => {
  it('completes full conversation', async () => {
    // 1. Open chat
    // 2. Send message
    // 3. Receive response
    // 4. Click product card
    // 5. Navigate to detail page
  });
});
```

---

## Monitoring & Analytics

### Key Metrics

```
1. Engagement
   • Chat open rate
   • Messages per session
   • Average session duration

2. Effectiveness
   • Queries answered successfully
   • Product cards clicked
   • Conversions from chat

3. Performance
   • Response time
   • Pattern match accuracy
   • Error rate
```

---

## API Documentation (If Using Backend)

### Endpoint: POST /api/chat

**Request:**
```json
{
  "message": "I need a cheap car",
  "userId": "anonymous", // Optional
  "sessionId": "abc123"  // Optional
}
```

**Response:**
```json
{
  "content": "Here are budget-friendly options...",
  "suggestions": ["Show more", "Compare prices"],
  "vehicles": [
    {
      "id": "1",
      "name": "Economy Car",
      "price": 35
    }
  ]
}
```

---

## Conclusion

This architecture provides:
- ✅ **Simplicity** - Easy to understand and maintain
- ✅ **Scalability** - Can grow with backend integration
- ✅ **Performance** - Minimal overhead, fast responses
- ✅ **Flexibility** - Easy to customize for any industry

**Next Steps:**
1. Review the full implementation guide
2. Set up the basic structure
3. Customize for your use case
4. Deploy and monitor

---

**For implementation details, see:**
- `MARCIA_AI_REPLICATION_GUIDE.md` - Complete guide
- `MARCIA_AI_QUICK_START.md` - Quick setup
