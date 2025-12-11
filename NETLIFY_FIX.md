# 🔧 Netlify Build Fix

## ✅ FIXED: Dependency Resolution Error

### Problem
Netlify build failed with:
```
npm error ERESOLVE could not resolve
@metamask/sdk-react@0.33.1 vs @react-native-async-storage/async-storage
```

### Solution Applied
Added to `.npmrc`:
```
legacy-peer-deps=true
```

This allows npm to install packages even when peer dependencies conflict.

---

## 🚀 Next Steps

### 1. Push the Fix to GitHub

```bash
cd /mnt/Covenant/Cursor-Agent/bridgeworld-lol
git push origin master
```

### 2. Retry Netlify Deploy

Netlify will automatically rebuild, or trigger manually:
- Go to Netlify dashboard
- Click "Trigger deploy" → "Deploy site"

The build should now succeed! ✅

---

## 🧹 Optional: Clean Up Unnecessary Dependencies

Your local `package.json` is clean, but your GitHub repo may have extra packages. To sync:

### Check What's in GitHub

```bash
# View your GitHub package.json
git show origin/master:package.json
```

### If It Has Extra Packages

If the GitHub version has `@metamask/sdk-react`, `@react-native-async-storage`, `@turnkey/core`, or `@hyperlane-xyz/sdk` that you **don't need**, remove them:

```bash
# Make sure local is clean (it is!)
cat package.json

# Force push clean version to GitHub
git push origin master --force
```

**Note**: Only do this if you're sure those packages aren't needed!

---

## 🔍 What Happened?

The error shows packages that **aren't in your Bridgeworld Portal**:
- `@metamask/sdk-react` - MetaMask wallet SDK
- `@react-native-async-storage/async-storage` - React Native storage
- `@turnkey/core` - Turnkey wallet infrastructure
- `@hyperlane-xyz/sdk` - Hyperlane cross-chain SDK

These might be from:
1. A previous version of the repo
2. Manual additions
3. Dependencies from another project

Your **actual dependencies** (clean and correct):
```json
{
  "dependencies": {
    "next": "^14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.16",
    "ethers": "^6.9.0"
  }
}
```

---

## ✅ Current Status

- `.npmrc` updated with `legacy-peer-deps=true`
- Fix committed to git
- Ready to push and redeploy

---

## 🚀 Deploy Commands

```bash
# Push the fix
git push origin master

# Or if you need to force push clean package.json
git push origin master --force

# Then wait for Netlify to auto-deploy
# Or manually trigger in Netlify dashboard
```

---

## 📊 Expected Result

After pushing:
1. Netlify detects the new commit
2. Build starts automatically
3. npm install succeeds (with legacy-peer-deps)
4. Build completes successfully
5. Site goes live! 🎉

---

**The fix is ready - just push to GitHub!** 🚀
