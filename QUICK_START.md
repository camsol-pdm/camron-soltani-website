# Quick Start - Deploy Your Next.js Site

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Test Locally (Optional but Recommended)

```bash
npm run dev
```

Visit http://localhost:3000 to verify everything works.

## Step 3: Prepare for Deployment

### Option A: Deploy to Vercel (Recommended - 5 minutes)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   # Create repo on GitHub, then:
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"
   - Done! Your site is live.

### Option B: Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify:**
   - Go to https://netlify.com
   - Sign up with GitHub
   - Click "Add new site" → "Import project"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy"

## That's It!

Your site will be live in minutes. Both platforms offer:
- ✅ Free hosting
- ✅ Automatic SSL certificates
- ✅ Custom domain support
- ✅ Automatic deployments on git push

## Need Help?

See `NEXTJS_DEPLOYMENT.md` for detailed instructions.

