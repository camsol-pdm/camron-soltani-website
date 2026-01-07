# 📝 How to Push to GitHub - Step by Step

## Step 1: Open Terminal

1. Press `Cmd + Space` (or open Spotlight)
2. Type "Terminal"
3. Press Enter

## Step 2: Navigate to Your Project

Copy and paste this command:

```bash
cd "/Users/camronsoltani/Camron Soltani Website"
```

Press Enter.

## Step 3: Push to GitHub

Copy and paste this command:

```bash
git push -u origin main
```

Press Enter.

## Step 4: Enter Your Credentials

You'll see prompts like this:

```
Username for 'https://github.com': 
```

**Enter:** `camsol-pdm`  
Press Enter.

Then you'll see:

```
Password for 'https://camsol-pdm@github.com': 
```

**Important:** When it asks for "Password", paste your **Personal Access Token** (not your GitHub password).

**Note:** When you paste the token, you won't see any characters appear (this is normal for security). Just paste it and press Enter.

## Step 5: Success!

You should see output like:

```
Enumerating objects: 28, done.
Counting objects: 100% (28/28), done.
Writing objects: 100% (28/28), done.
To https://github.com/camsol-pdm/camron-soltani-website.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

## ✅ Done!

Your code is now on GitHub! Visit:
**https://github.com/camsol-pdm/camron-soltani-website**

## 🐛 Troubleshooting

**"Username for 'https://github.com':" doesn't appear**
- Make sure you're in the right directory
- Run: `pwd` to check your current location
- Should show: `/Users/camronsoltani/Camron Soltani Website`

**"Permission denied" or "Authentication failed"**
- Make sure you're using the Personal Access Token (not password)
- Check the token has `repo` scope
- Try generating a new token

**"Repository not found"**
- Make sure the repository exists on GitHub
- Go to: https://github.com/camsol-pdm/camron-soltani-website
- If it doesn't exist, create it first at: https://github.com/new

