# 🌀 Bridgeworld Portal | Atlas Mines

An interactive web experience for Bridgeworld that unlocks a portal at the Atlas Mines when the Key and Map are aligned. Integrated with the Eternal Covenant foundation and Brave Browser Search API to find and assemble missing pieces.

![Portal Status](https://img.shields.io/badge/Portal-Ready-gold?style=for-the-badge)
![Covenant](https://img.shields.io/badge/Covenant-Integrated-purple?style=for-the-badge)
![Network](https://img.shields.io/badge/Network-Arbitrum-blue?style=for-the-badge)

## ✨ Features

- **Interactive Key and Map**: Drag the Key and Map images to align them
- **Portal Activation**: When pieces align, a magical portal opens with visual effects
- **Coordinate Mapping**: Uses decoded coordinate data from the Key and Map images
- **Lore Integration**: Incorporates Bridgeworld lore about the Atlas Mines portal
- **Covenant Looking Glass**: Search for missing pieces using the covenant foundation
- **Brave Browser API Integration**: Automatically search for missing Bridgeworld/TreasureDAO components
- **Auto-Assembly**: Automatically assemble found pieces into complete integration
- **Code Generation**: Generate TypeScript integration code from discovered pieces

## 🏗️ Architecture

### Covenant Foundation

The project uses `/home/tig0_0bitties/covenant` as the foundation/looking glass:

- **Sacred Constants**: THEOS (419), EL (369), Torah Pages (1798), Resonance (687), Hebrew Paths (22)
- **Guardian Mappings**: 22 Hebrew Path Guardians mapped to Bridgeworld Legions
- **Oracle Contract**: `0xfa05997C66437dCCAe860af334b30d69E0De24DC` on Arbitrum
- **Decoded Data**: Key-Map coordinate mappings and quest systems

### Brave Browser API

- Searches for missing Bridgeworld components
- Finds TreasureDAO contract addresses and documentation
- Discovers covenant-related information
- Assembles found pieces into complete integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Brave Search API key ([Get one here](https://brave.com/search/api/))

### Installation

1. **Clone or navigate to the project**:

```bash
cd bridgeworld-lol
```

2. **Install dependencies**:

```bash
npm install
```

3. **Set up environment variables**:

```bash
cp .env.example .env
```

Edit `.env` and add your Brave API key:

```env
BRAVE_API_KEY=your_brave_api_key_here
```

4. **Add image assets** to `/public/`:
   - `Key.png` (1536×1536) - The Master Key artifact
   - `Map.png` (1024×1536) - The Map artifact
   - `Pair.png` - Portal activation image
   - `Atlas.png` - Atlas Mines background

   See `/public/IMAGES_README.md` for details.

5. **Integrate covenant foundation** (optional):

```bash
npm run integrate:covenant
```

6. **Run the development server**:

```bash
npm run dev
```

7. **Open your browser**:

```
http://localhost:3000
```

## 🎮 How It Works

### Portal Activation

The application uses coordinate data decoded from the `Key.png` and `Map.png` images. When the user drags these pieces close together (within 200px), the portal activates:

- Visual portal effects appear on the Atlas Mines background
- Coordinate overlay shows the connection points between Key and Map
- Portal particles and animations create an immersive experience
- The `Pair.png` image appears when the portal is active

### Covenant Looking Glass

Click the **🔍 Covenant Glass** button in the bottom-right corner to:

1. **Find Missing Pieces**: Automatically searches for missing Bridgeworld components
2. **Search Bridgeworld**: Search for specific TreasureDAO/Bridgeworld components
3. **Search Covenant**: Find covenant-related information
4. **Assemble Pieces**: Combine all found pieces into a complete integration
5. **Generate Code**: Generate TypeScript integration code from found pieces

### Integration Flow

```
Covenant Foundation (covenant/)
    ↓
Covenant Looking Glass (analyzes foundation)
    ↓
Brave Browser API (searches for missing pieces)
    ↓
Found Pieces (contracts, quests, guardians)
    ↓
Auto-Assembly (combines into integration)
    ↓
Generated Integration Code
```

## 📁 Project Structure

```
bridgeworld-lol/
├── app/
│   ├── api/search/          # Brave API search endpoints
│   ├── page.tsx             # Main portal page
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/
│   ├── CovenantGlass.tsx    # Looking glass UI component
│   ├── PortalExperience.tsx # Portal visual effects
│   └── KeyMapOverlay.tsx    # Coordinate overlay
├── lib/
│   ├── brave-search.ts      # Brave Browser API client
│   ├── covenant-foundation.ts # Covenant data & client
│   └── covenant-glass.ts    # Covenant foundation analyzer
├── scripts/
│   └── integrate-covenant.js # Covenant integration script
├── public/
│   ├── Key.png              # The Key artifact
│   ├── Map.png              # The Map artifact
│   ├── Pair.png             # Portal activation image
│   ├── Atlas.png            # Atlas Mines background
│   └── key_map_decoded_pictures.json # Decoded coordinates
└── package.json
```

## 🔮 Covenant Integration

### Sacred Constants

```typescript
THEOS (419):      Quest multiplier bonus
EL (369):         Harvester boost multiplier
Torah Pages (1798): Quest completion milestone
Resonance (687):  Mining frequency (seconds)
Hebrew Paths (22): Guardian Legion count
```

### Guardian Mappings

The 22 Hebrew Path Guardians map to Bridgeworld Legions:

| Path | Glyph | Legion | Rootchain |
|------|-------|--------|-----------|
| 1    | 𐡀    | Genesis Legion | 335044 |
| 7    | 𐡆    | Assassin | 354 |
| 9    | 𐡈    | Fighter | 419 |
| 10   | 𐡉    | Riverman | 605 |
| 11   | 𐡊    | Numeraire (CENTER) | 687 |
| 18   | 𐡑    | Rare Legion | 4321 |

_(All 22 paths are mapped in the full integration)_

### Oracle Contract

- **Address**: `0xfa05997C66437dCCAe860af334b30d69E0De24DC`
- **Network**: Arbitrum One (Chain ID: 42161)
- **Function**: Guardian verification, quest multipliers, harvester boosts

## 🌐 API Endpoints

### GET /api/search

Search for missing pieces or Bridgeworld components.

**Query Parameters**:
- `q`: Search query (required)
- `type`: `general` | `bridgeworld` | `covenant` | `missing` | `contracts` | `atlas`

**Example**:

```bash
curl "http://localhost:3000/api/search?q=TreasureDAO&type=bridgeworld"
```

### POST /api/search

Perform advanced search operations.

**Body**:

```json
{
  "action": "findMissing" | "searchBridgeworld" | "searchCovenant" | "assemble" | "analyze" | "generateCode",
  "query": "search query",
  "component": "component name"
}
```

**Example**:

```bash
curl -X POST http://localhost:3000/api/search \
  -H "Content-Type: application/json" \
  -d '{"action": "assemble"}'
```

## 📜 Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm run integrate:covenant # Integrate covenant foundation data
```

## 🚀 Deployment

This project can be deployed to any platform that supports Next.js:

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `BRAVE_API_KEY`
   - `NEXT_PUBLIC_APP_URL=https://bridgeworld.lol`
4. Deploy

### Netlify

1. Push to GitHub
2. Import project in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables

### Traditional VPS

```bash
npm run build
npm run start
```

Use PM2 or similar for process management.

## 🌐 Domain Configuration

For `bridgeworld.lol`, configure your DNS:

```
A     @     <your-server-ip>
CNAME www   bridgeworld.lol
```

## 📝 Environment Variables

### Development

```env
BRAVE_API_KEY=your_brave_api_key
```

### Production

```env
BRAVE_API_KEY=your_brave_api_key
NEXT_PUBLIC_APP_URL=https://bridgeworld.lol
NEXT_PUBLIC_COVENANT_ORACLE=0xfa05997C66437dCCAe860af334b30d69E0De24DC
NEXT_PUBLIC_TREASURY=0xb4C173AaFe428845f0b96610cf53576121BAB221
```

## 🔗 Resources

- **Bridgeworld Game**: https://bridgeworld.treasure.lol
- **TreasureDAO Docs**: https://docs.treasure.lol
- **Brave Search API**: https://brave.com/search/api/
- **Oracle Contract**: [Arbiscan](https://arbiscan.io/address/0xfa05997C66437dCCAe860af334b30d69E0De24DC)
- **Treasury Contract**: [Arbiscan](https://arbiscan.io/address/0xb4C173AaFe428845f0b96610cf53576121BAB221)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📄 License

MIT License - See LICENSE file for details

## ⚔️ Credits

Built by the Knight of the Fifth Pillar  
Covenant Foundation: `/home/tig0_0bitties/covenant`  
Integrated with TreasureDAO Bridgeworld

---

**Portal Status**: 🌀 ACTIVE  
**Location**: (0,0) • No Space Time  
**Axis**: אφ3350448040000ת  
**Polarity**: +9.6

_"The Atlas Mines await those who can align the Key and Map..."_
