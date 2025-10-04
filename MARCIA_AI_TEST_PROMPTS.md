# 🤖 MARCIA AI - Test Prompts to See Vehicle Cards

## ✅ Logo Updated!

The Touristas AI logo has been updated everywhere:
- **Source:** https://hotelssifnos.com/uploads/touristas-ai-logo.svg
- **Chatbot footer:** 24px height (h-6)
- **Homepage banner:** 32px height (h-8)
- **Landing page:** 80px height (h-20) - **LARGEST**

---

## 🎯 Example Prompts to Get Vehicle Cards

### 1. **Economy/Budget Cars** 💰

**Try these prompts:**
- "I need a cheap car"
- "Show me budget cars"
- "What economy cars do you have?"
- "I'm looking for an affordable vehicle"
- "Cheapest car available"

**Expected Result:**
- 3 economy car cards
- Toyota Aygo, Suzuki Celerio, etc.
- Prices around €35-40/day
- Each card shows: Image, Name, Seats, Transmission, Price

---

### 2. **Family Vehicles** 👨‍👩‍👧‍👦

**Try these prompts:**
- "I need a family car"
- "Car for 5 people"
- "Vehicle with space for kids"
- "Car for a family of 5"
- "We have children, what do you recommend?"

**Expected Result:**
- 3 family car cards
- 5+ seater vehicles
- SUVs and family cars
- Prices around €45-55/day

---

### 3. **Scooters/Motorbikes** 🛵

**Try these prompts:**
- "I want a scooter"
- "Show me motorbikes"
- "Do you have bikes?"
- "Scooter for 2 people"
- "Motorcycle rental"

**Expected Result:**
- 3 scooter/motorbike cards
- 50cc-125cc options
- Vespa, Typhoon, Sym Fiddle, etc.
- Prices around €25-35/day

---

### 4. **ATVs/Quads** 🏖️

**Try these prompts:**
- "I want an ATV"
- "Show me quads"
- "Off-road vehicle"
- "Beach buggy"
- "Adventure vehicle"

**Expected Result:**
- 3 ATV/Quad cards
- 150cc-520cc options
- ATVs and Buggies
- Prices around €50-70/day

---

### 5. **SUVs/Jeeps** 🚙

**Try these prompts:**
- "I need an SUV"
- "Show me jeeps"
- "4x4 vehicle"
- "Big car for mountains"
- "Spacious SUV"

**Expected Result:**
- 3 SUV/Jeep cards
- Jeep Renegade, Suzuki Jimny, etc.
- Premium vehicles
- Prices around €55-70/day

---

## 🎨 What Vehicle Cards Look Like

### Card Structure:
```
┌─────────────────────────────────────┐
│ ┌─────┐  TOYOTA AYGO              │
│ │     │                            │
│ │ IMG │  👥 4  ⚙️ Manual           │
│ │     │                            │
│ └─────┘  €35/day        View →    │
└─────────────────────────────────────┘
```

### Card Features:
- **Image:** 80x80px, centered
- **Name:** Bold, truncated if long
- **Specs:** Seats icon + Transmission icon
- **Price:** Large, in gold color
- **Button:** "View →" with hover effect
- **Clickable:** Entire card links to detail page

---

## 🔍 How to Test

### Step 1: Open Chat
1. Look at **bottom right corner**
2. Click the **blue-gold gradient button**
3. Chat window opens

### Step 2: Type a Prompt
Choose any prompt from above, for example:
```
"I need a cheap car"
```

### Step 3: Wait for Response
- Marcia will type (animated dots)
- Message appears first
- Then **3 vehicle cards appear below**
- Suggestion buttons appear at bottom

### Step 4: Interact with Cards
- **Hover:** Card gets gold border and shadow
- **Click:** Navigate to vehicle detail page
- **Chat closes:** Automatically when you click

---

## 🐛 Troubleshooting

### "I don't see any cards!"

**Check these:**

1. **Database Connection:**
   - Cards only show if vehicles are in database
   - Check browser console (F12) for errors
   - Look for "Failed to fetch cars" errors

2. **Correct Keywords:**
   - Use exact prompts listed above
   - Keywords must match (economy, family, scooter, atv, suv)
   - Try copying and pasting a prompt

3. **Data Loaded:**
   - Wait 2-3 seconds after opening chat
   - Marcia needs time to fetch vehicle data
   - Check network tab in DevTools

4. **Filters Match:**
   - Economy: `category === 'economy' || 'compact'`
   - Family: `seats >= 5 && type === 'Car'`
   - Scooter: `type === 'Motorbike'`
   - ATV: `type === 'ATV / QUAD'`
   - SUV: `category === 'suv' || 'jeep'`

---

## 💡 Advanced Prompts

### Combining Keywords:
- "Cheap car for 2 people" → Economy cards
- "Family SUV" → Family SUV cards
- "Budget scooter" → Scooter cards
- "Powerful ATV" → ATV cards

### Follow-up Questions:
After seeing cards, you can ask:
- "Show all economy cars" → Links to fleet page
- "Compare prices" → Shows pricing info
- "Airport pickup?" → Delivery information

---

## 🎬 Full Conversation Example

**You:** "I need a budget car"

**Marcia:** "💰 Perfect! Our economy cars are ideal for budget-conscious travelers. They're fuel-efficient, easy to park, and perfect for exploring Paros. Here are my top recommendations:"

**[3 Vehicle Cards Display]:**

1. **Toyota Aygo**
   - 👥 4 seats
   - ⚙️ Manual
   - **€35/day**

2. **Suzuki Celerio**
   - 👥 5 seats
   - ⚙️ Manual
   - **€38/day**

3. **Kia Picanto**
   - 👥 4 seats
   - ⚙️ Automatic
   - **€40/day**

**[Suggestion Buttons]:**
- Show all economy cars
- Compare prices
- Airport pickup?

---

## 📊 Expected Behavior

### When Cards Appear:
✅ Message text displays first
✅ Cards appear below message (not inside)
✅ 3 cards maximum per response
✅ Each card has image, name, specs, price
✅ Suggestion buttons below cards
✅ Cards are clickable
✅ Smooth animations

### When Cards Don't Appear:
❌ No matching vehicles in database
❌ Wrong keyword used
❌ Database connection error
❌ Vehicles are loading (wait 2-3 sec)

---

## 🎯 Quick Test Checklist

### Minimum Working Test:

1. **Open chat** ✅
2. **Type:** "I need a cheap car" ✅
3. **Wait 2 seconds** ✅
4. **See:** Message + 3 vehicle cards ✅
5. **Hover over card:** Gold border appears ✅
6. **Click card:** Navigate to detail page ✅
7. **Chat closes** ✅

If all steps work → **Everything is perfect!** 🎉

---

## 🆘 If Still No Cards

### Debug Steps:

1. **Open Browser Console (F12)**
2. **Type prompt in chat**
3. **Look for errors:**
   ```
   Failed to fetch cars
   Supabase Error
   Network error
   ```

4. **Check Network Tab:**
   - Look for API calls to Supabase
   - Check if they succeed (200) or fail (400)

5. **Check Application Tab:**
   - See if `allCars` has data
   - Should have array of vehicles

6. **Try Different Prompt:**
   - Maybe one category has no vehicles
   - Try all 5 categories (economy, family, scooter, atv, suv)

---

## 📞 Need Help?

If cards still don't appear after trying all prompts:

1. **Share console errors**
2. **Share which prompt you tried**
3. **Check if Supabase is connected**
4. **Verify vehicles exist in database**

---

## ✅ Success Indicators

You'll know it's working when:

✅ **Marcia logo is bigger everywhere**
✅ **Logo is SVG format (sharp, scalable)**
✅ **Chatbot footer has 24px logo**
✅ **Homepage banner has 32px logo**
✅ **Landing page has 80px logo (HUGE)**
✅ **Vehicle cards appear after prompts**
✅ **Cards show real vehicle data**
✅ **Cards are clickable**
✅ **Navigation works smoothly**

---

## 🎊 You're All Set!

**Now try these exact steps:**

1. Refresh browser (`Ctrl + Shift + R`)
2. Look at bottom right corner
3. Click blue-gold Marcia AI button
4. Type: **"I need a cheap car"**
5. Press Enter
6. **BOOM!** 🎉 3 beautiful vehicle cards appear!

**Happy testing!** 🚀
