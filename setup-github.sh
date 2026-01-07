#!/bin/bash

# GitHub Repository Setup Script
# This script helps you set up your GitHub repository

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo "🐙 GitHub Repository Setup"
echo "=========================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git is not installed. Please install Git first.${NC}"
    exit 1
fi

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}📦 Initializing git repository...${NC}"
    git init
    echo -e "${GREEN}✅ Git repository initialized${NC}"
else
    echo -e "${GREEN}✅ Git repository already initialized${NC}"
fi

# Check if .gitignore exists
if [ ! -f ".gitignore" ]; then
    echo -e "${YELLOW}📝 Creating .gitignore...${NC}"
    cat > .gitignore << 'EOF'
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
EOF
    echo -e "${GREEN}✅ .gitignore created${NC}"
fi

# Stage all files
echo ""
echo -e "${YELLOW}📝 Staging files...${NC}"
git add .
echo -e "${GREEN}✅ Files staged${NC}"

# Check if there's already a commit
if git rev-parse --verify HEAD >/dev/null 2>&1; then
    echo -e "${GREEN}✅ Repository already has commits${NC}"
else
    echo ""
    echo -e "${YELLOW}💾 Creating initial commit...${NC}"
    git commit -m "Initial commit: Camron Soltani Portfolio Website"
    echo -e "${GREEN}✅ Initial commit created${NC}"
fi

# Check if remote exists
if git remote | grep -q origin; then
    remote_url=$(git remote get-url origin)
    echo ""
    echo -e "${GREEN}✅ Remote already configured:${NC}"
    echo "   $remote_url"
    echo ""
    echo "To push your code:"
    echo "  git push -u origin main"
else
    echo ""
    echo -e "${BLUE}📋 Next Steps:${NC}"
    echo ""
    echo "1. Create a new repository on GitHub:"
    echo "   - Go to https://github.com/new"
    echo "   - Repository name: camron-soltani-website (or your choice)"
    echo "   - Description: Portfolio website for Spotify PM role"
    echo "   - Choose Public or Private"
    echo "   - DO NOT initialize with README, .gitignore, or license"
    echo "   - Click 'Create repository'"
    echo ""
    echo "2. After creating the repository, run these commands:"
    echo ""
    echo "   git branch -M main"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
    echo "   git push -u origin main"
    echo ""
    echo "   (Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual values)"
    echo ""
    echo "3. Then deploy on Vercel:"
    echo "   - Go to https://vercel.com"
    echo "   - Sign up/Login with GitHub"
    echo "   - Click 'New Project'"
    echo "   - Import your repository"
    echo "   - Click 'Deploy'"
    echo ""
fi

echo ""
echo -e "${GREEN}✅ Setup complete!${NC}"

