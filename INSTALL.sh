#!/bin/bash

###############################################################################
# 🌀 BRIDGEWORLD PORTAL - INSTALLATION SCRIPT
# 
# Automated setup for the Atlas Mines Portal
###############################################################################

set -e

echo "🌀 BRIDGEWORLD PORTAL INSTALLATION"
echo "===================================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
GOLD='\033[38;5;220m'
NC='\033[0m' # No Color

# Check Node.js
echo -e "${YELLOW}Checking Node.js installation...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js not found. Please install Node.js 18+ first.${NC}"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo -e "${RED}❌ Node.js version must be 18 or higher (current: $NODE_VERSION)${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Node.js $(node -v) detected${NC}"
echo ""

# Check npm
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm not found${NC}"
    exit 1
fi

echo -e "${GREEN}✅ npm $(npm -v) detected${NC}"
echo ""

# Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Dependencies installed${NC}"
else
    echo -e "${RED}❌ Failed to install dependencies${NC}"
    exit 1
fi
echo ""

# Setup .env
if [ ! -f .env ]; then
    echo -e "${YELLOW}⚙️  Setting up environment file...${NC}"
    cp .env.example .env
    echo -e "${GREEN}✅ .env file created${NC}"
    echo -e "${YELLOW}⚠️  Please edit .env and add your BRAVE_API_KEY${NC}"
else
    echo -e "${GREEN}✅ .env file already exists${NC}"
fi
echo ""

# Check for images
echo -e "${YELLOW}🖼️  Checking for image assets...${NC}"
MISSING_IMAGES=0

for img in Key.png Map.png Pair.png Atlas.png; do
    if [ -f "public/$img" ]; then
        echo -e "${GREEN}✅ Found: public/$img${NC}"
    else
        echo -e "${RED}❌ Missing: public/$img${NC}"
        MISSING_IMAGES=1
    fi
done

if [ $MISSING_IMAGES -eq 1 ]; then
    echo ""
    echo -e "${YELLOW}⚠️  Some images are missing. See public/IMAGES_README.md for requirements.${NC}"
fi
echo ""

# Run integration script
echo -e "${YELLOW}🔮 Running covenant integration...${NC}"
node scripts/integrate-covenant.js
echo ""

# Build check
echo -e "${YELLOW}🏗️  Testing build...${NC}"
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build successful${NC}"
else
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
fi
echo ""

# Success message
echo -e "${GOLD}╔═══════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GOLD}║                                                               ║${NC}"
echo -e "${GOLD}║          🌀 BRIDGEWORLD PORTAL READY! 🌀                      ║${NC}"
echo -e "${GOLD}║                                                               ║${NC}"
echo -e "${GOLD}╚═══════════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${GREEN}Installation complete!${NC}"
echo ""
echo "Next steps:"
echo ""
echo "1. Edit .env and add your BRAVE_API_KEY"
echo "   Get API key: https://brave.com/search/api/"
echo ""
echo "2. Add images to /public/ directory:"
echo "   - Key.png (1536x1536)"
echo "   - Map.png (1024x1536)"
echo "   - Pair.png"
echo "   - Atlas.png"
echo ""
echo "3. Start development server:"
echo -e "   ${YELLOW}npm run dev${NC}"
echo ""
echo "4. Open browser:"
echo -e "   ${YELLOW}http://localhost:3000${NC}"
echo ""
echo -e "${GOLD}⚔️ Knight of the Fifth Pillar${NC}"
echo -e "${GOLD}🔮 Covenant Axis: אφ3350448040000ת${NC}"
echo -e "${GOLD}📍 Portal Location: (0,0) • No Space Time${NC}"
echo ""
