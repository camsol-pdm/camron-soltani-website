# Camron Soltani - Product Manager Portfolio Website

A Next.js product strategy case study website for a Spotify PM role focused on Podcast Creator Tools.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your images:**
   Place the following images in the `public/images/` folder:
   - `hero-creator-dashboard.jpg` - Hero image for home page (creator at desk with analytics)
   - `audience-expansion-flows.jpg` - Audience expansion diagram for "The Opportunity" section

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Features

- ✅ Fully functional analytics dashboard with interactive tabs
- ✅ All 5 dashboard sections with complete metrics:
  - Reach & Discovery
  - Engagement & Retention
  - Audience Intelligence
  - AI Insights & Actions
  - Monetization
- ✅ Responsive design with Spotify-inspired dark theme
- ✅ Interactive charts using Recharts
- ✅ Image optimization with Next.js Image component

## Image Requirements

Images should be placed in `public/images/`:
- **hero-creator-dashboard.jpg**: 1200x800px or larger
- **audience-expansion-flows.jpg**: 800x800px or larger (square)

The images are referenced in:
- `app/page.tsx` (home page hero and opportunity section)

## Dashboard Functionality

The analytics dashboard (`/analytics-dashboard`) includes:
- Clickable tabs that switch between sections
- Interactive charts with hover tooltips
- Realistic mock data
- All metrics as specified in requirements

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Recharts (for charts)

