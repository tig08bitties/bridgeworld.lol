#!/bin/bash

###############################################################################
# 🌀 BRIDGEWORLD PORTAL - DEPLOYMENT SCRIPT
###############################################################################

echo "🌀 BRIDGEWORLD PORTAL DEPLOYMENT"
echo "================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Run this from the project root."
    exit 1
fi

echo "Select deployment platform:"
echo ""
echo "1) Vercel (Recommended)"
echo "2) Netlify"
echo "3) Manual Build (for VPS)"
echo "4) GitHub Pages"
echo ""
read -p "Enter choice (1-4): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Deploying to Vercel..."
        echo ""
        
        # Check if vercel is installed
        if ! command -v vercel &> /dev/null; then
            echo "Installing Vercel CLI..."
            npm i -g vercel
        fi
        
        echo "Login to Vercel (will open browser):"
        vercel login
        
        echo ""
        echo "Deploying preview..."
        vercel
        
        echo ""
        read -p "Deploy to production? (y/n): " prod
        if [ "$prod" = "y" ]; then
            vercel --prod
            echo ""
            echo "✅ Deployed to production!"
        fi
        ;;
        
    2)
        echo ""
        echo "🚀 Deploying to Netlify..."
        echo ""
        
        # Check if netlify is installed
        if ! command -v netlify &> /dev/null; then
            echo "Installing Netlify CLI..."
            npm i -g netlify-cli
        fi
        
        echo "Login to Netlify:"
        netlify login
        
        echo ""
        echo "Building project..."
        npm run build
        
        echo ""
        echo "Deploying..."
        netlify deploy --prod
        ;;
        
    3)
        echo ""
        echo "🏗️  Building for manual deployment..."
        echo ""
        npm run build
        echo ""
        echo "✅ Build complete!"
        echo ""
        echo "To deploy to VPS:"
        echo "1. Copy the entire project to your server"
        echo "2. Run: npm install"
        echo "3. Run: npm run start"
        echo "4. Set up nginx/apache as reverse proxy"
        ;;
        
    4)
        echo ""
        echo "📄 Building static export for GitHub Pages..."
        echo ""
        
        # Add export script to package.json if needed
        npm run build
        
        echo ""
        echo "✅ Build complete!"
        echo ""
        echo "To deploy to GitHub Pages:"
        echo "1. Push to GitHub"
        echo "2. Go to Settings → Pages"
        echo "3. Select branch and /out or /.next folder"
        ;;
        
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "═══════════════════════════════════════"
echo "Don't forget to set environment variables in your platform:"
echo "  BRAVE_API_KEY=your_key_here"
echo "═══════════════════════════════════════"
echo ""
echo "🌀 Portal deployment complete!"

