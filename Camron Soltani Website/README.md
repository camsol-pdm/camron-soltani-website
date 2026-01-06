# Camron Soltani - Product Manager Website

A personal marketing website showcasing a comprehensive product strategy case study for Spotify's podcast creator ecosystem, focused on helping creators plan, book, target, and measure effective promotional campaigns.

## Overview

This website demonstrates Camron Soltani's approach to product management through a self-initiated case study focused on building innovative, data-driven experiences that simplify podcast creator promotional workflows with AI-powered analytics.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with Spotify-inspired dark design system
- **Charts:** Recharts for interactive analytics visualizations
- **Deployment:** Ready for Vercel or similar platforms

## Design System

- **Primary Background:** #121212 (Spotify dark)
- **Secondary Background:** #212121
- **Primary Accent:** #1DB954 (Spotify green)
- **Text:** #FFFFFF (white)
- **Muted Text:** #B3B3B3
- **Neutral:** #535353

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Pages

- **/** - Home page with hero, opportunity overview, solution pillars, and strategic framework
- **/spotify-strategy** - Full 24-month product strategy with detailed phase-by-phase roadmap (Phase 0-4)
- **/analytics-dashboard** - Fully interactive analytics dashboard prototype with tabs, charts, and AI insights
- **/case-study** - Narrative case study with creator journey example and strategic thinking
- **/about** - About Camron (background, skills, why Spotify)

## Key Features

- **Dark Mode Design:** Spotify-inspired dark theme throughout
- **Interactive Analytics Dashboard:** Fully functional prototype with:
  - Tab-based navigation (Overview, Reach, Engagement, Audience, AI Insights, Monetization)
  - Interactive charts (Line, Bar, Pie, Area charts using Recharts)
  - Real-time KPI cards
  - AI-powered insights and recommendations
- **Responsive Design:** Mobile-first approach, works on all devices
- **Spotify Brand Aesthetic:** Colors, typography, and spacing mirror Spotify's design language

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Navigation & Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles with Spotify colors
│   ├── spotify-strategy/   # Strategy page with phase roadmap
│   ├── analytics-dashboard/# Interactive analytics dashboard
│   ├── case-study/         # Case study page
│   └── about/              # About page
├── components/
│   ├── Navigation.tsx      # Top navigation (mobile-responsive)
│   └── Footer.tsx          # Footer component
└── package.json
```

## Contact

- **Email:** camronsoltani@gmail.com
- **Phone:** (301) 648-8023
- **Location:** Redondo Beach, CA 90277

---

© 2026 Camron Soltani. Not affiliated with Spotify. This is a case study for a PM role.
