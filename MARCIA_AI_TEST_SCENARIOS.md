# 🧪 Marcia AI - Test Scenarios

## Quick Test Guide for Next-Level Features

---

## 🎯 Scenario 1: Complete Booking Flow

**Copy and paste these messages one by one:**

```
1. "I want to book a car"
   → Marcia asks for your name

2. "John Smith"
   → Marcia asks for email

3. "john.smith@email.com"
   → Marcia asks for phone

4. "+30 694 123 4567"
   → Marcia asks for dates

5. "15/06/2024 to 22/06/2024"
   → Marcia shows confirmation with all details

6. "complete booking"
   → Success! Booking submitted
```

**Expected Result:**
✅ All information collected step-by-step
✅ Confirmation message with summary
✅ Booking submission confirmation

---

## 🚀 Scenario 2: Smart Data Extraction (All at Once)

**Copy and paste this:**

```
"I'm Maria Rodriguez, my email is maria@gmail.com and phone is +30 123 456 7890, I need it from 20/06/2024 to 27/06/2024"
```

**Expected Result:**
✅ Name: Maria Rodriguez
✅ Email: maria@gmail.com
✅ Phone: +30 123 456 7890
✅ Pickup: 20/06/2024
✅ Return: 27/06/2024

Marcia should recognize ALL fields and ask for confirmation!

---

## 🔍 Scenario 3: Partial Information

**Try these messages:**

```
1. "book"
2. "I'm Alex"
3. "alex@test.com"
4. "complete booking"
   → Should say "missing phone and dates"
```

**Expected Result:**
❌ Booking incomplete
✅ Clear message about what's missing

---

## 📊 Scenario 4: Data Extraction Patterns

### Test Email Extraction:
```
"Contact me at sarah.jones@company.co.uk"
```
✅ Should extract: sarah.jones@company.co.uk

### Test Phone Extraction:
```
"My number is (123) 456-7890"
```
✅ Should extract: (123) 456-7890

```
"Call me at +30 694 495 0094"
```
✅ Should extract: +30 694 495 0094

### Test Date Extraction:
```
"From 01/07/2024 to 08/07/2024"
```
✅ Pickup: 01/07/2024
✅ Return: 08/07/2024

### Test Passenger Extraction:
```
"We are 5 people traveling together"
```
✅ Passengers: 5

```
"Family of 4 adults"
```
✅ Passengers: 4

---

## 🌟 Scenario 5: Natural Conversation

**Try this complete conversation:**

```
1. "Hi, looking to rent a car"
2. "I want to book actually"
3. "My name is Chris"
4. "chris.martin@email.com is my email"
5. "You can reach me at +30 123 456 789"
6. "Need it next week from Monday to Friday"
   (Note: This will need specific dates, so follow up with:)
7. "15/06/2024 to 19/06/2024"
8. "Yes, complete booking"
```

**Expected Result:**
✅ Natural flow
✅ Data collected progressively
✅ Successful booking

---

## 🎭 Scenario 6: Modify Booking

**Try this:**

```
1. "book"
2. "John"
3. "john@test.com"
4. "+30 123456789"
5. "15/06 to 20/06"
   → Confirmation shown
6. "modify details"
   → Should reset and ask to start over
```

**Expected Result:**
✅ Context cleared
✅ Ready for new booking

---

## 📅 Scenario 7: Check Availability

```
1. "Check availability"
   → Asks for dates

2. "From 01/07/2024 to 08/07/2024"
   → Shows availability message
```

**Expected Result:**
✅ Recognizes dates
✅ Shows availability confirmation

---

## 💡 Advanced Test: All Patterns

### Budget Detection:
```
"I have €500 budget"
```
✅ Budget: 500

```
"Looking for cheap options"
```
✅ Budget: economy

### Location Detection:
```
"Pick up from airport"
```
✅ Location: airport

```
"Delivery to port please"
```
✅ Location: port

### Combined Test:
```
"I'm Tom, tom@email.com, +30 987654321, 5 people, €600 budget, airport pickup, from 10/07 to 17/07"
```

**Expected Extraction:**
✅ Name: Tom
✅ Email: tom@email.com
✅ Phone: +30 987654321
✅ Passengers: 5
✅ Budget: 600
✅ Location: airport
✅ Pickup: 10/07
✅ Return: 17/07

---

## 🔧 Developer Testing

### Check Console Logs

Open browser console (F12) and look for:

```
Available cars: [number]
User context: {
  name: "...",
  email: "...",
  phone: "...",
  pickupDate: "...",
  returnDate: "...",
  conversationStage: "..."
}
```

### Test Button Fix

1. Type a message
2. Click the send button (▶)
3. ✅ Should send the message

---

## ⚡ Quick Commands

**Try these for quick testing:**

```
"show cheap cars" → Shows economy vehicles
"I need a scooter" → Shows scooters
"Family car for 5 people" → Shows family vehicles
"book now" → Starts booking flow
"contact details" → Shows contact info
"what are your reviews" → Shows testimonials
"cancel my booking" → Not implemented yet (shows modify)
```

---

## 📊 Expected Behavior Summary

### ✅ What Should Work:

1. **Data Extraction:**
   - Email addresses (any format)
   - Phone numbers (international)
   - Dates (DD/MM/YYYY format)
   - Names (after "I'm", "My name is", "Call me")
   - Passengers (numbers + "people/person/passenger")
   - Budget (€ amounts or "cheap/budget")
   - Locations (airport, port)

2. **Booking Flow:**
   - Progressive questions (name → email → phone → dates)
   - Confirmation screen with all details
   - Submission success message
   - Modify/reset functionality

3. **Smart Features:**
   - Extracts multiple fields from one message
   - Remembers context across conversation
   - Validates required fields before booking
   - Provides helpful error messages

### ❌ Not Yet Implemented:

1. Backend Integration (API calls)
2. Real payment processing
3. Email confirmations
4. Booking modifications after submission
5. Vehicle selection during booking
6. Price calculations
7. Database storage
8. Admin dashboard

---

## 🐛 Known Limitations

1. **Date Parsing:**
   - Best with DD/MM/YYYY format
   - Natural language dates ("next week") not fully supported
   - May need specific dates

2. **Name Extraction:**
   - Works best with patterns like "I'm [Name]" or "My name is [Name]"
   - Full names captured if provided
   - First name only if that's all given

3. **Phone Numbers:**
   - Supports most international formats
   - May not catch unusual formats

4. **Context Persistence:**
   - Resets when chat is closed
   - No session storage yet
   - Lost on page refresh

---

## 🎯 Success Criteria

### Minimum Viable Booking:

✅ Collect: Name
✅ Collect: Email
✅ Collect: Phone
✅ Collect: Pickup Date
✅ Collect: Return Date
✅ Show confirmation
✅ "Submit" booking (console log)

### Enhanced Booking:

✅ All minimum features
✅ Extract multiple fields at once
✅ Remember context
✅ Show available vehicles
✅ Modify before submission
✅ Clear error messages

---

## 📝 Report Issues

If something doesn't work as expected:

1. **Check console logs** (F12 → Console)
2. **Note the exact message** you typed
3. **Check the user context** in console
4. **Look for JavaScript errors**

---

## 🚀 Next Steps

After testing these scenarios:

1. ✅ Verify all data extraction works
2. ✅ Confirm booking flow is complete
3. → Integrate backend API
4. → Add payment processing
5. → Deploy to production

---

## 💡 Pro Tips

1. **Use specific dates** for best results
2. **Include "I'm [name]"** for name extraction
3. **Use suggestion chips** for quick testing
4. **Check console** for debugging
5. **Try edge cases** to find bugs

---

**Happy Testing! 🎉**

Found an issue? Check `MARCIA_AI_NEXT_LEVEL.md` for implementation details.
