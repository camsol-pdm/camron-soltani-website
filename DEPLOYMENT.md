# Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Next.js
   - Click "Deploy"
   - Your site will be live at `your-project.vercel.app`

### Option 2: Netlify (Alternative)

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

### Option 3: Static HTML Only (Simplest)

If you just want to host the `preview.html` file:

1. **Use Netlify Drop:**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop your `preview.html` file
   - Rename it to `index.html` if needed
   - Your site is live instantly!

2. **Or use GitHub Pages:**
   - Create a repository on GitHub
   - Upload `preview.html` (rename to `index.html`)
   - Go to Settings → Pages
   - Select source branch
   - Your site will be at `username.github.io/repo-name`

## Image Assets

Make sure all images in `public/images/` are included:
- `Gemini_Generated_Image_ti9ydwti9ydwti9y.png`
- `Gemini_Generated_Image_77ud1q77ud1q77ud.png`
- Any other images referenced in the HTML

## Custom Domain (Optional)

After deployment:
1. Go to your hosting platform's domain settings
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatically provided

## Environment Variables

No environment variables needed for this static site.

## Troubleshooting

- **Images not loading?** Check that image paths in HTML match the `public/images/` folder structure
- **Styling broken?** Ensure Tailwind CDN is loading (already included in HTML)
- **Charts not working?** Check that Chart.js CDN is loading (already included in HTML)

