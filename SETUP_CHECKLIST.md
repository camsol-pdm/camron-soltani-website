# Setup Checklist - Deploy Your Next.js Site

## ✅ Pre-Deployment Checklist

### 1. Install Dependencies
```bash
npm install
```

### 2. Test Build Locally
```bash
npm run build
```
If this fails, fix errors before proceeding.

### 3. Test Development Server (Optional)
```bash
npm run dev
```
Visit http://localhost:3000 to verify everything works.

### 4. Initialize Git Repository

Run the setup script:
```bash
./setup-github.sh
```

Or manually:
```bash
git init
git add .
git commit -m "Initial commit: Camron Soltani Portfolio Website"
```

### 5. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `camron-soltani-website` (or your choice)
3. Description: `Portfolio website for Spotify PM role`
4. Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### 6. Connect to GitHub

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace:
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPO_NAME` with your repository name

### 7. Deploy to Vercel

1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js
6. Click "Deploy"
7. Wait 2-3 minutes
8. Your site is live! 🎉

## 🔍 Common Issues & Fixes

### Build Errors

**Issue:** TypeScript errors
**Fix:** Run `npm run lint` to see errors, then fix them

**Issue:** Missing dependencies
**Fix:** Run `npm install`

**Issue:** Image not found
**Fix:** Check that images are in `public/images/` and paths use `/images/` (not `public/images/`)

### Git Issues

**Issue:** "fatal: not a git repository"
**Fix:** Run `git init`

**Issue:** "remote origin already exists"
**Fix:** Remove with `git remote remove origin`, then add again

### Deployment Issues

**Issue:** Build fails on Vercel
**Fix:** Check build logs, ensure all dependencies are in package.json

**Issue:** Images don't load
**Fix:** Verify image paths start with `/images/` (absolute from public folder)

## 📋 Quick Commands Reference

```bash
# Install dependencies
npm install

# Test build
npm run build

# Run dev server
npm run dev

# Initialize git
git init

# Stage all files
git add .

# Commit
git commit -m "Your message"

# Add remote
git remote add origin https://github.com/USERNAME/REPO.git

# Push to GitHub
git push -u origin main

# Deploy script
./deploy.sh

# GitHub setup script
./setup-github.sh
```

## 🚀 After Deployment

1. ✅ Test all pages work
2. ✅ Check images load correctly
3. ✅ Test on mobile devices
4. ✅ Verify analytics dashboard works
5. ✅ Check all links work
6. ✅ Test responsive design

## 📝 Next Steps

- [ ] Set up custom domain (optional)
- [ ] Configure environment variables (if needed)
- [ ] Set up analytics (optional)
- [ ] Test all interactive features
- [ ] Share your live site! 🎉

