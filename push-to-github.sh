#!/bin/bash

# Push to GitHub Script
# This script helps you push your code to GitHub

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo "🚀 Push to GitHub"
echo "=================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo -e "${RED}❌ Git not initialized. Run ./setup-github.sh first${NC}"
    exit 1
fi

# Check if remote exists
if git remote | grep -q origin; then
    remote_url=$(git remote get-url origin)
    echo -e "${GREEN}✅ Remote already configured:${NC}"
    echo "   $remote_url"
    echo ""
    echo "Pushing to GitHub..."
    git push -u origin main
    echo ""
    echo -e "${GREEN}✅ Code pushed to GitHub!${NC}"
    exit 0
fi

# No remote configured
echo -e "${YELLOW}⚠️  No GitHub remote configured.${NC}"
echo ""
echo "To push to GitHub, you need to:"
echo ""
echo "1. Create a repository on GitHub:"
echo "   - Go to https://github.com/new"
echo "   - Repository name: camron-soltani-website (or your choice)"
echo "   - Choose Public or Private"
echo "   - DO NOT initialize with README, .gitignore, or license"
echo "   - Click 'Create repository'"
echo ""
echo "2. After creating, run this command (replace with your details):"
echo ""
echo -e "${BLUE}   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git${NC}"
echo -e "${BLUE}   git push -u origin main${NC}"
echo ""
echo "Or run this script again after adding the remote."
echo ""
echo "Would you like to add the remote now? (y/n)"
read -r response

if [[ "$response" =~ ^[Yy]$ ]]; then
    echo ""
    echo "Enter your GitHub username:"
    read -r username
    echo "Enter your repository name:"
    read -r repo_name
    
    remote_url="https://github.com/$username/$repo_name.git"
    echo ""
    echo "Adding remote: $remote_url"
    git remote add origin "$remote_url"
    
    echo ""
    echo "Pushing to GitHub..."
    git push -u origin main
    
    echo ""
    echo -e "${GREEN}✅ Code pushed to GitHub!${NC}"
    echo ""
    echo "Your repository is now live at:"
    echo "https://github.com/$username/$repo_name"
else
    echo "No remote added. Run this script again when ready."
fi

