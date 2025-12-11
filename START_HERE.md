# 🌀 START HERE - Bridgeworld Portal

Welcome to the **Bridgeworld Atlas Mines Portal**! This document will get you started in minutes.

## 🎯 What Is This?

An interactive web experience where you drag and align the **Key** and **Map** to activate a magical portal to the Bridgeworld Atlas Mines. Fully integrated with the Eternal Covenant foundation and Brave Search API.

## ⚡ Quick Start (5 Minutes)

### Option 1: Automated Installation

```bash
./INSTALL.sh
```

This script will:
- Check Node.js (requires 18+)
- Install all dependencies
- Create .env file
- Run covenant integration
- Test the build

### Option 2: Manual Installation

```bash
# 1. Install dependencies
npm install

# 2. Setup environment
cp .env.example .env
# Edit .env and add: BRAVE_API_KEY=your_key_here

# 3. Start development server
npm run dev

# 4. Open browser
# http://localhost:3000
```

## 📋 Pre-Flight Checklist

Before running, ensure you have:

- [ ] **Node.js 18+** installed
- [ ] **Brave API Key** ([get free key](https://brave.com/search/api/))
- [ ] **Images** in `/public/` folder:
  - Key.png (1536×1536)
  - Map.png (1024×1536)
  - Pair.png
  - Atlas.png

**Don't have images?** See `/public/IMAGES_README.md` for where to find them.

## 🎮 How to Use

### 1. Activate the Portal

1. **Drag the Key** (golden artifact on left)
2. **Drag the Map** (scroll artifact on right)
3. **Move them close together** (within 200 pixels)
4. **Portal activates!** 🌀 Visual effects appear

### 2. Use Covenant Looking Glass

Click the **🔍** button (bottom-right) to:

- **Search**: Find Bridgeworld components
- **Missing**: Auto-discover missing pieces
- **Assemble**: Combine into integration
- **Code**: Generate TypeScript code

### 3. View Coordinates

After portal activates:
- Coordinate overlay appears
- Shows Key-Map decoded points
- Guardian path mappings displayed

## 📁 Important Files

| File | Purpose |
|------|---------|
| `README.md` | Complete documentation |
| `QUICK_START.md` | Detailed setup guide |
| `DEPLOYMENT_CHECKLIST.md` | Pre-deploy verification |
| `PROJECT_COMPLETE.md` | Project summary |
| `public/IMAGES_README.md` | Image requirements |

## 🔧 Common Commands

```bash
# Development
npm run dev                    # Start dev server

# Production
npm run build                  # Build for production
npm run start                  # Start production server

# Tools
npm run lint                   # Run linter
npm run integrate:covenant     # Run covenant integration

# Deployment
vercel                         # Deploy to Vercel
netlify deploy                 # Deploy to Netlify
```

## 🚨 Troubleshooting

### Portal doesn't activate
- **Solution**: Drag Key and Map very close together (they should almost overlap)

### Images not loading
- **Solution**: Add actual image files to `/public/` folder
- See `/public/IMAGES_README.md` for requirements

### "BRAVE_API_KEY not configured"
- **Solution**: Create `.env` file and add your API key
- Get key: https://brave.com/search/api/

### Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

## 🌐 API Endpoints

The portal includes REST API endpoints:

### GET /api/search
Search for components:
```bash
curl "http://localhost:3000/api/search?q=TreasureDAO&type=bridgeworld"
```

### POST /api/search
Advanced operations:
```bash
curl -X POST http://localhost:3000/api/search \
  -H "Content-Type: application/json" \
  -d '{"action": "findMissing"}'
```

Actions: `findMissing`, `assemble`, `analyze`, `generateCode`

## 🔮 Covenant Integration

The portal integrates with `/home/tig0_0bitties/covenant`:

### Sacred Constants
```
THEOS: 419        - Quest multiplier
EL: 369           - Harvester boost
RESONANCE: 687    - Mining frequency
HEBREW_PATHS: 22  - Guardian count
```

### Guardian Mappings
22 Hebrew Paths mapped to Bridgeworld Legions:
- Path 1 → Genesis Legion
- Path 7 → Assassin
- Path 9 → Fighter
- Path 10 → Riverman
- Path 11 → Numeraire (CENTER)
- Path 18 → Rare Legion
- _(and 16 more)_

### Smart Contracts
- **Oracle**: `0xfa05997C66437dCCAe860af334b30d69E0De24DC` (Arbitrum)
- **Treasury**: `0xb4C173AaFe428845f0b96610cf53576121BAB221` (Arbitrum)

## 📦 Project Structure

```
bridgeworld-lol/
├── app/              # Next.js app (pages, API, styles)
├── components/       # React components
├── lib/              # Core libraries (covenant, brave, glass)
├── public/           # Static assets (images, JSON)
├── scripts/          # Utility scripts
└── [configs]         # Config files (next, tailwind, etc.)
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add BRAVE_API_KEY in dashboard
# Deploy to production
vercel --prod
```

### Deploy to Netlify
1. Connect GitHub repo
2. Build: `npm run build`
3. Publish: `.next`
4. Add environment variables

See `DEPLOYMENT_CHECKLIST.md` for complete guide.

## 📚 Learn More

- **Full Documentation**: `README.md`
- **Quick Setup**: `QUICK_START.md`
- **Deployment Guide**: `DEPLOYMENT_CHECKLIST.md`
- **Project Details**: `PROJECT_COMPLETE.md`

## 🆘 Need Help?

1. Check `README.md` for detailed documentation
2. Review `QUICK_START.md` for setup steps
3. See `public/IMAGES_README.md` for image info
4. Read `DEPLOYMENT_CHECKLIST.md` before deploying

## 🎉 You're Ready!

Your portal is set up and ready to activate. 

**Commands to remember**:
```bash
npm run dev          # Start developing
npm run build        # Build for production
./INSTALL.sh         # Re-run installation
```

**Open**: http://localhost:3000

---

## 🌀 Portal Information

**Location**: (0,0) • No Space Time  
**Destination**: The Atlas Mines  
**Activation**: Align Key + Map (< 200px)  
**Covenant Axis**: אφ3350448040000ת  
**Polarity**: +9.6  

**Status**: 🟢 READY

---

⚔️ **Knight of the Fifth Pillar**  
🔮 **Covenant Foundation Integrated**  
🌀 **Portal Awaits Activation**

_"When the Key and Map align, the portal shall open..."_
