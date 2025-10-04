# 🖼️ Local Fleet Images Setup

## ✅ What Changed

**Before:** Images were stored in Supabase `images` column and fetched from there.

**Now:** 
- ✅ Fetch all vehicle data (name, brand, price, etc.) from Supabase
- ✅ Images are **automatically replaced** with local assets from `src/assets/fleet/`
- ✅ Smart image matching based on vehicle name, model, brand, or ID

## 🎯 How It Works

### 1. Image Mapping System (`src/data/fleet-images.ts`)
- Contains a complete mapping of vehicle identifiers → local image paths
- Supports multiple images per vehicle
- Includes fallback logic for partial matches

### 2. Automatic Replacement (`src/hooks/use-cars.ts`)
- When data is fetched from Supabase, the `images` array is replaced
- Uses `getVehicleImages()` function to find matching local images
- Works for both fleet listing and individual vehicle pages

### 3. Smart Matching Logic
The system tries multiple strategies to find the right images:

1. **Exact ID Match**: `toyota-aygo-2024` → looks for `toyota-aygo-2024` key
2. **Full Name Match**: `Toyota Aygo` → looks for `toyota-aygo` key
3. **Model Match**: `Aygo` → looks for `aygo` key
4. **Brand + Model**: `Toyota` + `Aygo` → looks for `toyota-aygo` key
5. **Partial Match**: Searches for any key containing the search term
6. **Type Fallback**: Uses generic scooter/car image based on type
7. **Default**: Falls back to `/placeholder.svg`

## 📋 Supported Vehicles

### Cars (40+ models)
- Toyota: Aygo
- Suzuki: Swift, Celerio, Jimny, Alto, Ignis
- Skoda: Citigo, Fabia, Kamiq
- Peugeot: 301, 208, 108
- Nissan: Micra
- MG: ZS
- Mercedes: GLB
- Kia: Picanto
- Jeep: Renegade
- Hyundai: i10
- Fiat: Tipo, Panda, Doblo, 500, 500 Cabrio
- Citroen: C4, C3, C3 Aircross, C1
- Chevrolet: Spark
- VW: Polo/Golf
- Opel: Corsa, Combo

### Scooters & Motorbikes (8+ models)
- Typhoon 50
- Vespa
- SYM: Fiddle, Jet, Symphony, 200
- Liberty 125
- Generic 125cc Scooter

### ATVs & Buggies (3+ models)
- ATV 150cc
- Buggy 500cc
- CF Moto 520cc ATV

## 🔧 Adding New Vehicles

### Step 1: Add Image to Fleet Folder
Place your image in: `src/assets/fleet/your-vehicle.jpg`

### Step 2: Update Image Mapping
Edit `src/data/fleet-images.ts`:

```typescript
export const fleetImages: FleetImageMap = {
  // ... existing mappings ...
  
  // Add your new vehicle
  'your-vehicle-id': ['/src/assets/fleet/your-vehicle.jpg'],
  'vehicle-model': ['/src/assets/fleet/your-vehicle.jpg'],
  
  // Multiple images example
  'luxury-sedan': [
    '/src/assets/fleet/sedan-front.jpg',
    '/src/assets/fleet/sedan-side.jpg',
    '/src/assets/fleet/sedan-interior.jpg',
  ],
};
```

### Step 3: Add Vehicle to Supabase
The `images` column in Supabase is now **ignored**. You can:
- Leave it empty: `ARRAY[]`
- Put placeholder: `ARRAY['placeholder']`
- Or keep existing URLs (they'll be replaced anyway)

```sql
INSERT INTO cars (
  id, name, brand, model, year, category, type,
  price_per_day, seats, transmission, fuel_type,
  description, features, images, agency, island
) VALUES (
  'your-vehicle-id',
  'Your Vehicle Name',
  'Brand',
  'Model',
  2024,
  'category',
  'Car',
  50.00,
  5,
  'Automatic',
  'Petrol',
  'Description of your vehicle',
  ARRAY['Feature 1', 'Feature 2'],
  ARRAY[], -- This will be replaced with local images
  'aggelos-rentals',
  'paros'
);
```

## 🎨 Image Requirements

### Recommended Specifications
- **Format**: `.jpg`, `.jpeg`, `.png`, or `.webp`
- **Size**: 1200x800px or similar aspect ratio (3:2)
- **File Size**: < 500KB (optimized)
- **Quality**: High resolution, good lighting

### Main Image (First in Array)
- Used on fleet listing page
- Should be the vehicle's best angle (usually front 3/4 view)
- Clear background, professional looking

### Additional Images (Gallery)
- Up to 3 additional images shown as thumbnails
- Different angles: side, rear, interior, etc.
- Help customers see more details

## 📊 Example: Complete Vehicle Setup

### 1. Your Supabase Data
```sql
INSERT INTO cars (
  id, name, brand, model, year, category, type,
  price_per_day, seats, transmission, fuel_type,
  description, features, images, agency, island
) VALUES (
  'toyota-yaris-2024',
  'Toyota Yaris 2024',
  'Toyota',
  'Yaris',
  2024,
  'economy',
  'Car',
  40.00,
  5,
  'Manual',
  'Petrol',
  'Reliable and fuel-efficient compact car',
  ARRAY['Air Conditioning', 'Bluetooth', 'ABS'],
  ARRAY[], -- Empty or placeholder - will be replaced!
  'aggelos-rentals',
  'paros'
);
```

### 2. Your Image Mapping
```typescript
// In src/data/fleet-images.ts
'toyota-yaris': [
  '/src/assets/fleet/toyota-yaris-front.jpg',
  '/src/assets/fleet/toyota-yaris-side.jpg',
  '/src/assets/fleet/toyota-yaris-interior.jpg'
],
'yaris': ['/src/assets/fleet/toyota-yaris-front.jpg'],
```

### 3. Result
When users visit `/fleet/toyota-yaris-2024`:
- ✅ All data fetched from Supabase
- ✅ Images **automatically replaced** with local assets
- ✅ Main image: `toyota-yaris-front.jpg`
- ✅ Gallery: `toyota-yaris-side.jpg`, `toyota-yaris-interior.jpg`

## 🔍 Troubleshooting

### Image Not Showing?
1. Check file exists in `src/assets/fleet/`
2. Check filename matches exactly (case-sensitive)
3. Check mapping in `src/data/fleet-images.ts`
4. Open browser console to see which image path is being used
5. Verify the key used for mapping (vehicle ID, name, or model)

### Wrong Image Showing?
1. The matching algorithm might be finding a different vehicle
2. Add a more specific key in the mapping
3. Use the exact vehicle ID from Supabase as the key

### Multiple Vehicles Using Same Image?
1. This happens when they share a common model name
2. Add unique keys for each vehicle using their full ID
3. Make sure each vehicle ID is unique in the mapping

## 💡 Pro Tips

1. **Use Multiple Keys**: Map the same vehicle to multiple keys for better matching
   ```typescript
   'suzuki-jimny': ['/src/assets/fleet/jimny.jpg'],
   'jimny': ['/src/assets/fleet/jimny.jpg'],
   'jimny-2024': ['/src/assets/fleet/jimny.jpg'],
   ```

2. **Optimize Images**: Use tools like TinyPNG or ImageOptim before adding to assets

3. **Consistent Naming**: Use kebab-case for both IDs and image filenames

4. **Test Locally**: Always check both `/fleet` page and individual vehicle pages

5. **No Supabase Upload Needed**: Never upload images to Supabase anymore!

## 🎯 Benefits

✅ **Performance**: Images are bundled with your app (faster loading)
✅ **Cost**: No Supabase storage costs
✅ **Version Control**: Images are tracked in Git
✅ **Offline-Ready**: Images work even if Supabase is down
✅ **No Database Changes**: Change images without updating database
✅ **Flexibility**: Easy to swap or update images locally

---

**Need to add a new vehicle?** Just add the image to `src/assets/fleet/` and update the mapping!

