# Deployment Guide

Complete guide for deploying the Blockchain Whizzy portfolio to production environments.

## Pre-Deployment Checklist

Before deploying, verify the following:

### Code Quality
- [ ] Run `npm run lint` - Zero TypeScript errors
- [ ] Run `npm run build` - Build completes successfully
- [ ] Run `npm run preview` - Preview works correctly
- [ ] All links function properly
- [ ] Resume download/view works
- [ ] Contact form validation works
- [ ] Mobile navigation opens/closes properly
- [ ] All animations run smoothly

### Environment Variables
- [ ] `.env` is NOT committed to git
- [ ] `.env.example` exists with all required variables documented
- [ ] All required API keys obtained:
  - `GEMINI_API_KEY` (optional - for demo video generation)
- [ ] No hardcoded secrets in code

### Content Verification
- [ ] Personal information is current and accurate
- [ ] All project URLs are valid or intentionally set to "#"
- [ ] Social media links are correct
- [ ] Resume PDF link is working
- [ ] Certifications display correctly
- [ ] Experience and skills are current

### Performance & SEO
- [ ] Page title is "David Anthony"
- [ ] Meta viewport tag present
- [ ] Images are optimized or CDN-hosted
- [ ] Bundle size is reasonable (~750KB gzip)
- [ ] No console errors in dev tools
- [ ] Lighthouse scores checked (if using performance tools)

---

## Vercel Deployment (Recommended)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "feat: portfolio refurbishment and optimization"

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Select "Import"
5. Configure:
   - **Framework:** Other (Vite will be detected automatically)
   - **Root Directory:** ./
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `dist` (auto-detected)
   - **Install Command:** `npm install` (auto-detected)

### Step 3: Environment Variables

1. In Vercel dashboard, go to Settings → Environment Variables
2. Add variables:
   - `GEMINI_API_KEY`: Your Google AI API key (optional)
   - Any other variables from `.env.example`

3. Leave sensitive variables blank if not needed - the app will still work

### Step 4: Deploy

1. Click "Deploy"
2. Vercel will automatically build and deploy
3. After deployment, visit your site URL to verify

---

## Custom Domain Setup

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update `CNAME` record at your domain registrar

---

## Alternative: Manual Deployment to Other Hosts

### Build Locally

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Deploy Built Files

1. Upload contents of `dist/` to your host
2. Configure your host to serve `dist/index.html` for all routes (SPA configuration)
3. Set environment variables at your hosting provider
4. Clear cache after deployment

### Netlify (Alternative)

1. Connect your GitHub repo to [netlify.com](https://netlify.com)
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Add environment variables in Site Settings → Build & Deploy
4. Deploy

### Traditional Hosting (Apache, Nginx)

**Nginx Configuration Example:**
```nginx
server {
  listen 80;
  server_name yourdomain.com;
  
  location / {
    root /var/www/html/dist;
    try_files $uri /index.html;
  }
}
```

**Apache Configuration Example (in .htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Post-Deployment Verification

### Essential Checks
- [ ] Site loads without errors
- [ ] All pages/sections accessible
- [ ] Navigation works
- [ ] Resume link works
- [ ] Contact form validates (if email backend set up)
- [ ] Mobile responsive (test on phone)
- [ ] Dark theme displays correctly
- [ ] All images load

### Browser Compatibility
Test in:
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile browsers

### Performance
```bash
# Test with production build locally first
npm run preview

# Check:
# - Initial load time
# - Interaction responsiveness
# - Animation smoothness
# - No layout shifts
```

---

## Troubleshooting Deployment Issues

### Site Shows Blank Page
- Check browser console for errors
- Verify `dist/index.html` exists
- Ensure root path configuration is correct
- Clear browser cache

### Styles Not Loading
- Verify CSS files in `dist/assets/`
- Check Tailwind CSS build completed
- Clear CDN cache if applicable
- Verify `<meta charset>` is first tag

### API Keys Not Working
- Verify environment variables set in hosting platform (NOT `.env`)
- Restart deployment after setting variables
- Check variable names match exactly
- Verify API key is valid and has necessary permissions

### Build Fails on Deploy
```bash
# Debug locally first
npm run clean
npm install
npm run build

# If succeeds locally, issue is with host environment
# Check Node.js version compatibility
node --version  # Should be v16+
```

### Resume Download Not Working
- Verify Google Drive link is accessible
- Check browser console for CORS errors
- If using local file, verify path is correct
- Consider using target="_blank" instead of download attribute

---

## Continuous Deployment

### Automatic Deployments (Recommended)

With Vercel: Every push to main branch automatically deploys

With other platforms: Set up webhooks or GitHub Actions

### Manual Updates

```bash
git add .
git commit -m "update: portfolio content changes"
git push origin main

# Deployment happens automatically based on your platform
```

---

## Rollback Procedure

### Vercel
1. Go to Deployments tab
2. Find previous successful deployment
3. Click "Promote to Production"

### Manual
1. Keep backup of previous `dist/` folder
2. Upload backup files to restore

---

## Monitoring

### Check Deployment Status
- Vercel: Dashboard → Deployments
- Custom: Host provider's control panel
- Analytics: Integrate Google Analytics for traffic monitoring

### Error Tracking (Optional)
- Integrate Sentry or similar error tracking
- Monitor browser console errors in production
- Set up uptime monitoring

---

## Security Best Practices

- [ ] Never commit `.env` to git
- [ ] Don't expose API keys in frontend code
- [ ] Use HTTPS everywhere
- [ ] Keep dependencies updated: `npm audit`
- [ ] Review code before deploying
- [ ] Use environment-specific configurations
- [ ] Set proper CORS headers if needed
- [ ] Validate all user input

---

## Performance Optimization Tips

1. **Images**: Use CDN URLs (Unsplash, Uploadcare)
2. **Lazy Loading**: Already enabled for modal images
3. **Code Splitting**: Consider if adding more features
4. **Minification**: Automatic in production build
5. **Caching**: Configure cache headers on host
6. **Bundle Size**: Monitor with `npm run build` output

---

## Support

- **Issues**: Check troubleshooting section
- **Vercel Help**: https://vercel.com/support
- **Questions**: kelajane6@gmail.com

## Version History

- v1.0.5 - Production refurbishment and optimization
- v1.0.4 - Initial portfolio launch
