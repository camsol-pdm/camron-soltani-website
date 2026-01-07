# 🚀 Push to GitHub - Quick Instructions

## ✅ What's Already Done

- ✅ Git repository initialized
- ✅ All files staged and committed
- ✅ Branch set to `main`
- ✅ Ready to push!

## 📋 Next Steps

### Option 1: Use the Push Script (Easiest)

```bash
./push-to-github.sh
```

The script will:
1. Ask if you want to add a remote
2. Prompt for your GitHub username and repo name
3. Add the remote and push automatically

### Option 2: Manual Push

**Step 1: Create GitHub Repository**

1. Go to https://github.com/new
2. Repository name: `camron-soltani-website` (or your choice)
3. Description: `Portfolio website for Spotify PM role`
4. Choose **Public** or **Private**
5. **⚠️ IMPORTANT:** Do NOT check:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
6. Click **"Create repository"**

**Step 2: Push Your Code**

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

**Replace:**
- `YOUR_USERNAME` with your GitHub username
- `YOUR_REPO_NAME` with your repository name

**Example:**
If your username is `camronsoltani` and repo is `camron-soltani-website`:
```bash
git remote add origin https://github.com/camronsoltani/camron-soltani-website.git
git push -u origin main
```

### Option 3: Use GitHub CLI (If Installed)

If you have GitHub CLI (`gh`) installed:

```bash
gh repo create camron-soltani-website --public --source=. --remote=origin --push
```

This will:
- Create the repository on GitHub
- Add it as remote
- Push your code
- All in one command!

## ✅ Verify

After pushing, visit:
```
https://github.com/YOUR_USERNAME/YOUR_REPO_NAME
```

You should see all your files!

## 🚀 Next: Deploy to Vercel

Once your code is on GitHub:

1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"
6. Your site will be live in 2-3 minutes! 🎉

## 🐛 Troubleshooting

**"remote origin already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

**"Permission denied"**
- Make sure you're logged into GitHub
- Use HTTPS URL (not SSH) if you haven't set up SSH keys
- Or authenticate: `gh auth login`

**"repository not found"**
- Make sure the repository exists on GitHub
- Check the URL is correct
- Verify you have access to the repository

