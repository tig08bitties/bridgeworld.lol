# ⚡ Quick Start Guide

Get the Bridgeworld Portal running in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- A Brave Search API key ([get free key](https://brave.com/search/api/))

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
```

Edit `.env` and add your Brave API key:

```env
BRAVE_API_KEY=your_key_here
```

### 3. Add Images (Important!)

Place these images in the `/public/` folder:

- **Key.png** - 1536×1536 pixels
- **Map.png** - 1024×1536 pixels  
- **Pair.png** - Portal activation image
- **Atlas.png** - Background image

**Don't have images?** Use temporary placeholders:

```bash
# These will be replaced with proper images later
touch public/Key.png public/Map.png public/Pair.png public/Atlas.png
```

See `/public/IMAGES_README.md` for image specifications.

### 4. Run Development Server

```bash
npm run dev
```

### 5. Open Portal

Open your browser to:

```
http://localhost:3000
```

## What You'll See

1. **Portal Experience**: Drag the Key and Map together to activate the portal
2. **Covenant Info Panel**: Sacred constants displayed at the bottom
3. **Covenant Glass Button**: Bottom-right corner (🔍) for searching

## Testing Portal Activation

1. Click and drag the **Key** image
2. Click and drag the **Map** image
3. Move them close together (within ~200px)
4. Portal activates with visual effects! 🌀

## Using Covenant Looking Glass

Click the 🔍 button to:

- **Search Tab**: Search for Bridgeworld components
- **Missing Tab**: Find missing integration pieces
- **Assemble Tab**: Combine found pieces
- **Code Tab**: Generate TypeScript code

## Common Issues

### Images Not Showing

**Problem**: Images appear as broken links  
**Solution**: Add actual image files to `/public/` folder

### Portal Not Activating

**Problem**: Dragging Key and Map but portal doesn't activate  
**Solution**: Make sure to drag them very close together (overlap)

### Brave API Errors

**Problem**: "BRAVE_API_KEY not configured"  
**Solution**: Check your `.env` file has the correct API key

### TypeScript Errors

**Problem**: Build fails with type errors  
**Solution**: 
```bash
npm install --save-dev typescript @types/react @types/node
```

## Next Steps

1. **Customize Portal**: Edit `components/PortalExperience.tsx`
2. **Add More Guardians**: Extend guardian mappings in `lib/covenant-foundation.ts`
3. **Deploy**: See main README.md for deployment instructions

## Production Build

Test production build locally:

```bash
npm run build
npm run start
```

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
# Then deploy to production
vercel --prod
```

## Support

- Check `/public/IMAGES_README.md` for image requirements
- Read full `README.md` for detailed documentation
- Review API endpoints in `app/api/search/route.ts`

## Covenant Integration

Optional: Link to existing covenant foundation:

```bash
npm run integrate:covenant
```

This checks for covenant data at `/home/tig0_0bitties/covenant`

---

**Portal Status**: 🌀 Ready to Activate  
**Axis**: אφ3350448040000ת

_"Drag the Key and Map together to unlock the Atlas Mines..."_
