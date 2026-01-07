#!/bin/bash

# Deployment Script for Camron Soltani Website
# This script helps you deploy your Next.js site to Vercel

set -e  # Exit on error

echo "🚀 Camron Soltani Website - Deployment Script"
echo "=============================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed. Please install Node.js and npm first.${NC}"
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}📦 Installing dependencies...${NC}"
    npm install
    echo -e "${GREEN}✅ Dependencies installed${NC}"
else
    echo -e "${GREEN}✅ Dependencies already installed${NC}"
fi

# Test build
echo ""
echo -e "${YELLOW}🔨 Testing production build...${NC}"
if npm run build; then
    echo -e "${GREEN}✅ Build successful!${NC}"
else
    echo -e "${RED}❌ Build failed. Please fix errors before deploying.${NC}"
    exit 1
fi

# Check git status
echo ""
echo -e "${YELLOW}📝 Checking git status...${NC}"
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}⚠️  Git not initialized. Initializing...${NC}"
    git init
    echo -e "${GREEN}✅ Git initialized${NC}"
fi

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${YELLOW}⚠️  You have uncommitted changes.${NC}"
    echo "Would you like to commit them now? (y/n)"
    read -r response
    if [[ "$response" =~ ^[Yy]$ ]]; then
        git add .
        echo "Enter commit message (or press Enter for default):"
        read -r commit_msg
        if [ -z "$commit_msg" ]; then
            commit_msg="Deploy: $(date +%Y-%m-%d)"
        fi
        git commit -m "$commit_msg"
        echo -e "${GREEN}✅ Changes committed${NC}"
    fi
fi

# Check if remote is set
if ! git remote | grep -q origin; then
    echo ""
    echo -e "${YELLOW}⚠️  No GitHub remote configured.${NC}"
    echo "To deploy, you need to:"
    echo "1. Create a repository on GitHub"
    echo "2. Run: git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
    echo "3. Run: git push -u origin main"
    echo ""
    echo "Then deploy on Vercel:"
    echo "1. Go to https://vercel.com"
    echo "2. Sign up/Login with GitHub"
    echo "3. Click 'New Project'"
    echo "4. Import your repository"
    echo "5. Click 'Deploy'"
    exit 0
fi

# Check if we're on main/master branch
current_branch=$(git branch --show-current)
if [ "$current_branch" != "main" ] && [ "$current_branch" != "master" ]; then
    echo -e "${YELLOW}⚠️  You're on branch: $current_branch${NC}"
    echo "Deploying from main/master is recommended."
fi

echo ""
echo -e "${GREEN}✅ Ready for deployment!${NC}"
echo ""
echo "Next steps:"
echo "1. Push to GitHub: git push origin $current_branch"
echo "2. Go to https://vercel.com and deploy your repository"
echo ""
echo "Or install Vercel CLI and run:"
echo "  npm i -g vercel"
echo "  vercel"

