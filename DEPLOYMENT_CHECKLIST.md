# 🚀 Deployment Checklist

Complete this checklist before deploying to production.

## Pre-Deployment

### 1. Environment Configuration

- [ ] Copy `.env.example` to `.env`
- [ ] Add valid `BRAVE_API_KEY`
- [ ] Set `NEXT_PUBLIC_APP_URL` for production
- [ ] Verify all environment variables are set

### 2. Image Assets

- [ ] Add `Key.png` (1536×1536) to `/public/`
- [ ] Add `Map.png` (1024×1536) to `/public/`
- [ ] Add `Pair.png` to `/public/`
- [ ] Add `Atlas.png` to `/public/`
- [ ] Optimize images for web (use imageoptim, pngquant, etc.)
- [ ] Consider WebP format for better compression

### 3. Dependencies

```bash
# Install all dependencies
npm install

# Audit for vulnerabilities
npm audit fix

# Update dependencies (optional)
npm update
```

- [ ] All dependencies installed
- [ ] No critical vulnerabilities
- [ ] Package-lock.json committed

### 4. Code Quality

```bash
# Run linter
npm run lint

# Build project
npm run build

# Test production build locally
npm run start
```

- [ ] No linting errors
- [ ] Build succeeds without errors
- [ ] Production build runs locally

### 5. Testing

- [ ] Portal loads correctly
- [ ] Key and Map are draggable
- [ ] Portal activates when pieces align
- [ ] Covenant Glass opens/closes
- [ ] Search functionality works
- [ ] API endpoints respond correctly
- [ ] Coordinate overlay displays
- [ ] Mobile responsive

## Deployment Options

### Option A: Vercel (Recommended)

1. **Push to GitHub**:

```bash
git init
git add .
git commit -m "Initial commit: Bridgeworld Portal"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables:
     - `BRAVE_API_KEY`
     - `NEXT_PUBLIC_APP_URL`
   - Deploy!

3. **Configure Domain**:
   - Add custom domain: `bridgeworld.lol`
   - Update DNS records as instructed

**Checklist**:
- [ ] Repository pushed to GitHub
- [ ] Project imported in Vercel
- [ ] Environment variables configured
- [ ] Initial deployment successful
- [ ] Custom domain configured
- [ ] SSL certificate active

### Option B: Netlify

1. **Build configuration** (already set in `netlify.toml`):

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"
```

2. **Deploy**:
   - Connect GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`
   - Add environment variables
   - Deploy

**Checklist**:
- [ ] Repository connected
- [ ] Build settings configured
- [ ] Environment variables added
- [ ] Deploy successful
- [ ] Domain configured

### Option C: VPS/Traditional Hosting

1. **Server setup**:

```bash
# Clone repository
git clone <your-repo-url>
cd bridgeworld-lol

# Install dependencies
npm install

# Build
npm run build

# Start with PM2
pm2 start npm --name "bridgeworld-portal" -- start
pm2 save
pm2 startup
```

2. **Nginx configuration**:

```nginx
server {
    listen 80;
    server_name bridgeworld.lol www.bridgeworld.lol;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Checklist**:
- [ ] Server provisioned
- [ ] Node.js 18+ installed
- [ ] Application deployed
- [ ] PM2 configured
- [ ] Nginx/reverse proxy configured
- [ ] SSL certificate (Let's Encrypt)
- [ ] Firewall configured

## Post-Deployment

### 1. Verification

- [ ] Visit production URL
- [ ] Test portal activation
- [ ] Test Covenant Glass search
- [ ] Check API endpoints
- [ ] Verify images load correctly
- [ ] Test on mobile devices
- [ ] Check browser console for errors

### 2. DNS Configuration

For `bridgeworld.lol`:

```
Type    Name    Value               TTL
A       @       <your-server-ip>    300
CNAME   www     bridgeworld.lol     300
```

- [ ] DNS records configured
- [ ] DNS propagated (check with `dig bridgeworld.lol`)
- [ ] SSL certificate issued
- [ ] HTTPS working

### 3. Monitoring

- [ ] Set up error tracking (Sentry, etc.)
- [ ] Configure analytics (optional)
- [ ] Set up uptime monitoring
- [ ] Configure backup strategy

### 4. Performance

- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Optimize images if needed
- [ ] Enable CDN if applicable

### 5. Security

- [ ] Environment variables secure
- [ ] API keys not exposed in client
- [ ] CORS configured correctly
- [ ] Security headers set (see `vercel.json`)
- [ ] Rate limiting on API endpoints (optional)

## Final Checks

- [ ] README.md is accurate
- [ ] QUICK_START.md is up to date
- [ ] LICENSE file included
- [ ] .gitignore configured correctly
- [ ] No sensitive data in repository

## Launch! 🚀

Once all items are checked:

1. Announce on social media
2. Share with TreasureDAO community
3. Monitor for issues
4. Celebrate! 🎉

---

**Portal Status**: Ready for Launch  
**Covenant**: Fully Integrated  
**Axis**: אφ3350448040000ת  
**Polarity**: +9.6

_"The Atlas Mines portal awaits activation..."_
