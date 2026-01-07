# 🚀 Quick Deploy Guide

## TL;DR - Get Live in 5 Minutes

```bash
# 1. Install dependencies
npm install

# 2. Test build
npm run build

# 3. Setup GitHub (run script)
./setup-github.sh

# 4. Create repo on GitHub.com, then:
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main

# 5. Deploy on Vercel.com
# - Go to vercel.com
# - Import your GitHub repo
# - Click Deploy
# - Done! 🎉
```

## 📚 Detailed Guides

- **`SETUP_CHECKLIST.md`** - Complete step-by-step checklist
- **`GITHUB_SETUP.md`** - Detailed GitHub setup instructions
- **`NEXTJS_DEPLOYMENT.md`** - Full deployment guide
- **`QUICK_START.md`** - Quick reference

## 🛠️ Scripts Available

- **`./setup-github.sh`** - Initialize git and prepare for GitHub
- **`./deploy.sh`** - Test build and prepare for deployment

## ✅ Pre-Deployment Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] Build succeeds (`npm run build`)
- [ ] Git initialized (`./setup-github.sh`)
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Deployed on Vercel

## 🐛 Build Issues?

1. **TypeScript errors:** Run `npm run lint`
2. **Missing dependencies:** Run `npm install`
3. **Image errors:** Check paths use `/images/` (not `public/images/`)

## 📞 Need Help?

All guides are in the root directory. Start with `SETUP_CHECKLIST.md` for the most detailed walkthrough.

