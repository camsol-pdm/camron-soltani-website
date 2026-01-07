# GitHub Repository Setup Guide

## Step-by-Step Instructions

### Step 1: Run the Setup Script

```bash
./setup-github.sh
```

This will:
- Initialize git (if not already done)
- Create .gitignore (if needed)
- Stage all files
- Create initial commit

### Step 2: Create GitHub Repository

1. **Go to GitHub:**
   - Visit https://github.com/new
   - Or click the "+" icon in top right → "New repository"

2. **Repository Settings:**
   - **Repository name:** `camron-soltani-website` (or your choice)
   - **Description:** `Portfolio website for Spotify PM role - Next.js`
   - **Visibility:** Choose Public or Private
   - **⚠️ IMPORTANT:** Do NOT check:
     - ❌ Add a README file
     - ❌ Add .gitignore
     - ❌ Choose a license
   - Click **"Create repository"**

### Step 3: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Make sure you're on main branch
git branch -M main

# Add GitHub as remote (replace with your actual URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push your code
git push -u origin main
```

**Example:**
If your username is `camronsoltani` and repo is `camron-soltani-website`:
```bash
git remote add origin https://github.com/camronsoltani/camron-soltani-website.git
git push -u origin main
```

### Step 4: Verify

1. Go to your GitHub repository page
2. You should see all your files
3. Check that `.gitignore` is working (node_modules should NOT be visible)

## Troubleshooting

### "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

### "fatal: not a git repository"
```bash
git init
git add .
git commit -m "Initial commit"
```

### "Permission denied"
- Make sure you're authenticated with GitHub
- Use HTTPS URL (not SSH) if you haven't set up SSH keys
- Or set up SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

### "refusing to merge unrelated histories"
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

## Next: Deploy to Vercel

Once your code is on GitHub:
1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

See `NEXTJS_DEPLOYMENT.md` for detailed deployment instructions.

