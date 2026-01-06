# Next.js Deployment Guide

## Prerequisites

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Verify your images are in place:**
   - Check that images exist in `public/images/`:
     - `Gemini_Generated_Image_ti9ydwti9ydwti9y.png`
     - `Gemini_Generated_Image_77ud1q77ud1q77ud.png`
     - Any other images referenced in your pages

## Local Testing

Before deploying, test locally:

```bash
# Run development server
npm run dev

# Test production build
npm run build
npm run start
```

Visit `http://localhost:3000` to verify everything works.

## Deploy to Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the best integration.

### Step 1: Push to GitHub

1. **Initialize git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Ready for deployment"
   ```

2. **Create a GitHub repository:**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it (e.g., "camron-soltani-website")
   - Don't initialize with README (you already have one)
   - Click "Create repository"

3. **Push your code:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login (use GitHub for easiest integration)

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure (usually auto-detected):**
   - Framework Preset: Next.js
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site will be live at `your-project.vercel.app`

5. **Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS instructions

## Deploy to Netlify (Alternative)

1. **Push to GitHub** (same as above)

2. **Go to Netlify:**
   - Visit [netlify.com](https://netlify.com)
   - Sign up/Login with GitHub

3. **Import Project:**
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository

4. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Environment variables: None needed

5. **Deploy:**
   - Click "Deploy site"
   - Your site will be live at `random-name.netlify.app`

## Environment Variables

No environment variables needed for this project.

## Troubleshooting

### Build Errors

1. **Missing dependencies:**
   ```bash
   npm install
   ```

2. **TypeScript errors:**
   ```bash
   npm run lint
   ```

3. **Image not found:**
   - Check image paths in components use `/images/` (not `public/images/`)
   - Verify images exist in `public/images/` folder

### Common Issues

- **404 on routes:** Check that all pages exist in `app/` directory
- **Styling broken:** Ensure `globals.css` is imported in `layout.tsx`
- **Charts not working:** Verify Chart.js is loaded (if using client components)

## Post-Deployment

1. **Test all pages:**
   - Home page
   - Strategy page
   - Analytics Dashboard
   - Case Study
   - About page

2. **Check images load correctly**

3. **Verify responsive design on mobile**

4. **Test interactive features** (charts, tabs, etc.)

## Continuous Deployment

Both Vercel and Netlify automatically deploy when you push to GitHub:
- Push to `main` branch → Production deployment
- Push to other branches → Preview deployment

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Netlify Docs: https://docs.netlify.com

