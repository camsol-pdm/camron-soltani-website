# Netlify Build Debugging Guide

## Current Configuration

### Files to Check

1. **package.json** - Verify all dependencies are listed
2. **netlify.toml** - Netlify build configuration
3. **next.config.js** - Next.js configuration
4. **app/page.tsx** - Main page component

## What to Provide When Asking for Help

### 1. Full Build Logs
Copy the complete error output from Netlify:
- Go to Netlify Dashboard → Your Site → Deploys → Failed Deploy
- Copy at least 20 lines before and after the first error

### 2. package.json
```json
{
  "name": "camron-soltani-website",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "next": "^14.2.5",
    "recharts": "^2.12.7"
  },
  "devDependencies": {
    "@types/node": "^20.14.10",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.4",
    "typescript": "^5.5.3"
  }
}
```

### 3. netlify.toml
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"
  NPM_FLAGS = "--legacy-peer-deps"
```

### 4. next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index.html',
      },
    ];
  },
}

module.exports = nextConfig
```

## Common Build Issues

### Issue 1: Module Not Found
**Error:** `Module not found: Can't resolve '...'`
**Solution:** 
- Verify the package is in `package.json`
- Run `npm install` locally to verify
- Check that the file path is correct (case-sensitive)

### Issue 2: File System Access
**Error:** `Error reading HTML file` or `Could not find public/index.html`
**Solution:**
- Verify `public/index.html` exists in the repository
- Check that the file is committed to git
- Verify the file path in `app/page.tsx`

### Issue 3: TypeScript Errors
**Error:** `Type error: ...`
**Solution:**
- Run `npm run lint` locally
- Fix any TypeScript errors before deploying
- Check `tsconfig.json` configuration

### Issue 4: Node Version Mismatch
**Error:** `The engine "node" is incompatible`
**Solution:**
- Update `NODE_VERSION` in `netlify.toml`
- Or add `"engines"` field to `package.json`

## Local Build Test

To reproduce the build locally:

```bash
# Install dependencies
npm ci

# Run build
npm run build

# If build succeeds, test production server
npm run start
```

## Netlify Build Settings

In Netlify Dashboard, verify:
- **Build command:** `npm run build`
- **Publish directory:** `.next` (or leave empty if using plugin)
- **Node version:** 18 (set in netlify.toml)

## Next Steps

1. Run local build to identify errors
2. Copy the exact error message from Netlify
3. Check that all files are committed to git
4. Verify `public/index.html` exists and is committed
5. Share the build logs for specific help

