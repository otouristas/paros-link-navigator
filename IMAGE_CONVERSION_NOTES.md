# Image Conversion Notes

## Required Image Conversion

The following PNG image needs to be converted to WebP format for better performance:

### File to Convert
- **Source**: `public/assets/blog/antiparos-paros-with-ferry-1024x683.png` (1,046.5 KiB)
- **Target**: `public/assets/blog/antiparos-paros-with-ferry-1024x683.webp`
- **Expected savings**: ~998 KiB (95% reduction)

## Conversion Methods

### Option 1: Online Tools
1. Visit https://cloudconvert.com/png-to-webp or https://squoosh.app/
2. Upload `antiparos-paros-with-ferry-1024x683.png`
3. Set quality to 80-85 for optimal balance
4. Download and save as `antiparos-paros-with-ferry-1024x683.webp`
5. Replace the file in `public/assets/blog/`

### Option 2: Command Line (ImageMagick)
```bash
magick convert public/assets/blog/antiparos-paros-with-ferry-1024x683.png -quality 85 public/assets/blog/antiparos-paros-with-ferry-1024x683.webp
```

### Option 3: Command Line (cwebp)
```bash
cwebp -q 85 public/assets/blog/antiparos-paros-with-ferry-1024x683.png -o public/assets/blog/antiparos-paros-with-ferry-1024x683.webp
```

### Option 4: Node.js Script
```javascript
const sharp = require('sharp');
sharp('public/assets/blog/antiparos-paros-with-ferry-1024x683.png')
  .webp({ quality: 85 })
  .toFile('public/assets/blog/antiparos-paros-with-ferry-1024x683.webp');
```

## Logo Conversion

Also consider converting `public/logo.png` to WebP:
- **Source**: `public/logo.png` (7.0 KiB)
- **Target**: `public/logo.webp`
- **Expected savings**: ~4.4 KiB

After conversion, update `src/components/Header.tsx` to use the WebP version.

## Verification

After conversion:
1. Check file size reduction
2. Verify image quality
3. Test in browser
4. Run PageSpeed Insights again to confirm improvements

## Current Status

✅ All code references have been updated to use `.webp` extension
⏳ Image file conversion pending (manual step required)

