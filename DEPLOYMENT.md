# 🚀 Deployment Guide

## GitHub Repository

Your portfolio has been successfully pushed to:
**https://github.com/ANISH-JOHN777/Kharaportfolio.git**

## Quick Deployment Options

### 1. **Vercel** (Recommended - Easiest)

Vercel is perfect for Vite/React projects and offers free hosting.

**Steps:**
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import `ANISH-JOHN777/Kharaportfolio`
5. Vercel will auto-detect Vite settings
6. Click "Deploy"
7. Done! Your site will be live in ~2 minutes

**Custom Domain:**
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS instructions

---

### 2. **Netlify**

Another excellent option with drag-and-drop deployment.

**Steps:**
1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

---

### 3. **GitHub Pages**

Free hosting directly from GitHub.

**Steps:**
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://ANISH-JOHN777.github.io/Kharaportfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default {
     base: '/Kharaportfolio/',
     // ... rest of config
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch
   - Save

---

### 4. **Cloudflare Pages**

Fast global CDN with free tier.

**Steps:**
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub account
3. Select the repository
4. Build settings:
   - Build command: `npm run build`
   - Build output: `dist`
5. Deploy

---

## Build Commands

### Local Development
```bash
npm run dev
```
Runs on `http://localhost:5173`

### Production Build
```bash
npm run build
```
Creates optimized files in `dist/` folder

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally

---

## Environment Variables

If you need environment variables (API keys, etc.):

1. Create `.env` file:
   ```
   VITE_API_KEY=your_key_here
   ```

2. Access in code:
   ```javascript
   const apiKey = import.meta.env.VITE_API_KEY
   ```

3. Add to deployment platform:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Environment Variables
   - **GitHub Pages**: Use GitHub Secrets

---

## Custom Domain Setup

### For Vercel/Netlify:
1. Add domain in platform settings
2. Update DNS records:
   ```
   Type: A
   Name: @
   Value: [Platform IP]
   
   Type: CNAME
   Name: www
   Value: [Platform domain]
   ```

### For GitHub Pages:
1. Add `CNAME` file to `public/` folder with your domain
2. Update DNS:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: CNAME
   Name: www
   Value: ANISH-JOHN777.github.io
   ```

---

## Performance Optimization

Already implemented:
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Optimized animations
- ✅ Tree shaking
- ✅ Minification

Additional tips:
- Enable Gzip/Brotli compression (auto on Vercel/Netlify)
- Use CDN (included with all platforms)
- Enable caching headers

---

## Monitoring

### Analytics Options:
- **Google Analytics** - Add to `index.html`
- **Vercel Analytics** - Built-in (free)
- **Plausible** - Privacy-friendly alternative

### Performance Monitoring:
- **Lighthouse** - Built into Chrome DevTools
- **WebPageTest** - Detailed performance analysis
- **GTmetrix** - Speed testing

---

## Updating the Site

After making changes:

```bash
# 1. Commit changes
git add .
git commit -m "Update: description of changes"

# 2. Push to GitHub
git push origin main

# 3. Auto-deploys on Vercel/Netlify
# Or run: npm run deploy (for GitHub Pages)
```

---

## Troubleshooting

### Build fails:
- Check Node version (need v16+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check build logs for errors

### Blank page after deployment:
- Check `base` in `vite.config.js`
- Verify build output directory is `dist`
- Check browser console for errors

### Animations not working:
- Ensure Framer Motion is installed
- Check for JavaScript errors in console

---

## Recommended: Vercel Deployment

**Why Vercel?**
- ✅ Zero configuration
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Auto-deploys on git push
- ✅ Free custom domain
- ✅ Built-in analytics
- ✅ Perfect for React/Vite

**Deploy now:** [vercel.com/new](https://vercel.com/new)

---

## Support

- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Framer Motion**: https://www.framer.com/motion
- **Tailwind CSS**: https://tailwindcss.com

---

**Your portfolio is ready to go live! 🎉**

Choose your preferred platform and deploy in minutes!
