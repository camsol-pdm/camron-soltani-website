import Link from 'next/link';

export default function SpotifyStrategy() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Strategic Context */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-spotify-text mb-6">Spotify Podcast Creator Promotional Strategy</h1>
          <div className="bg-spotify-dark-secondary border-l-4 border-spotify-green p-6 mb-8 rounded-r-lg">
            <p className="text-spotify-text-muted leading-relaxed">
              This strategy is the result of deep research into Spotify's creator ecosystem, YouTube Studio's analytics best practices, and direct insights from podcast creator pain points. It's written as if I were brought in as a strategic PM to design Spotify's next-generation creator promotional platform.
            </p>
          </div>
        </section>

        {/* North Star */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-6">North Star</h2>
          <p className="text-2xl text-spotify-green font-semibold mb-4">
            Build an innovative, data-driven creator promotional engine that simplifies campaign planning, targeting, and measurement—enabling creators to reach new audiences, build sustainable careers, and drive measurable growth on Spotify.
          </p>
        </section>

        {/* Strategic Pillars */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-6">Strategic Pillars</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-3">1. Promotional Tools & Discovery Integration</h3>
              <p className="text-spotify-text-muted text-sm">Phase-based promotional tools (Shorts/Hype Points, Episode Boost campaigns, cross-promo marketplace). Native short-form discovery (Hype Points reel with Shorts) as primary discovery surface alongside algorithmic feeds. AI-assisted campaign planning with advanced audience and content targeting.</p>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-3">2. Intelligence-Driven Analytics & Insights</h3>
              <p className="text-spotify-text-muted text-sm">Enhanced analytics dashboard that provides true intelligence on listener behavior and content performance. AI pattern recognition, retention diagnostics, and audience expansion recommendations. Automated campaign suggestions with predicted ROI. Analytics are basic and ready for invigoration.</p>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-3">3. Seamless Campaign Execution & Measurement</h3>
              <p className="text-spotify-text-muted text-sm">Integrated campaign module (planning → execution → measurement → optimization). Real-time campaign dashboards and cost-per-listener metrics. A/B testing framework for creative and targeting optimization. Spotify-subsidized credits for Phase 1–2 creators to reduce financial barriers and early-stage churn.</p>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-3">4. Creator Support & Platform Alignment</h3>
              <p className="text-spotify-text-muted text-sm">Transparent monetization paths (Partner Program, sponsorships, multi-stream revenue). Clear ROI on promotional spend. Creator success metrics align with Spotify's business metrics. Subsidized promotional credits extend creator runway and reduce the near 30% dropoff rate of new creators.</p>
            </div>
          </div>
        </section>

        {/* Phase 0 */}
        <section className="mb-16">
          <div className="border-l-4 border-spotify-green pl-6 mb-8">
            <h2 className="text-3xl font-bold text-spotify-text mb-2">PHASE 0: ANALYTICS FOUNDATION (Months 1–3)</h2>
            <p className="text-xl text-spotify-text-muted mb-4">Build the data infrastructure and analytics dashboard MVP—everything downstream depends on this.</p>
          </div>

          <h3 className="text-2xl font-semibold text-spotify-text mb-4">Key Features</h3>
          <div className="space-y-4 mb-6">
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h4 className="text-lg font-semibold text-spotify-text mb-3">1. Real-Time Performance Tracking</h4>
              <ul className="list-disc list-inside space-y-2 text-spotify-text-muted text-sm">
                <li>Track per-episode: impressions, listeners, listen-through rate (LTR) by timestamp, skip rate, traffic source, engagement actions (saves, shares, follows)</li>
                <li>Real-time listener count (last 1 hour, 24 hours)</li>
                <li>Episode performance trending (vs. creator average, vs. niche average)</li>
              </ul>
            </div>

            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h4 className="text-lg font-semibold text-spotify-text mb-3">2. Audience Segmentation & Behavioral Analysis</h4>
              <ul className="list-disc list-inside space-y-2 text-spotify-text-muted text-sm">
                <li>Listener cohorts: new (first episode), casual (1–4 listens/month), regular (5+ listens/month), loyal (subscribing/following)</li>
                <li>Listening context: device type (mobile, desktop, speaker), time-of-day patterns, day-of-week preferences</li>
                <li>Listener retention cohorts: group listeners by acquisition month, track their long-term retention and lifetime value</li>
              </ul>
            </div>

            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h4 className="text-lg font-semibold text-spotify-text mb-3">3. Traffic Source Breakdown</h4>
              <ul className="list-disc list-inside space-y-2 text-spotify-text-muted text-sm">
                <li>Hype Points reel (future native short-form discovery)</li>
                <li>Search (podcast name, keywords, topics)</li>
                <li>Browse (category pages, playlists)</li>
                <li>Suggested / algorithmic</li>
                <li>Notifications (bell icon, email, push)</li>
                <li>External (links, podcasters' socials)</li>
              </ul>
            </div>

            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h4 className="text-lg font-semibold text-spotify-text mb-3">4. Cross-Podcast Listener Overlap Analysis</h4>
              <p className="text-spotify-text-muted text-sm mb-2">Identify which other podcasts your listeners follow. Calculate overlap %: "45% of your listeners also follow [Podcast A]" and "32% follow [Podcast B]." Flag untapped adjacent audiences: "65% of [Podcast A]'s 120K listeners don't yet follow you → 78K potential new listeners."</p>
            </div>
          </div>

          <div className="bg-spotify-dark border border-spotify-green rounded-lg p-6">
            <h4 className="text-lg font-semibold text-spotify-text mb-3">Success Metrics (Phase 0)</h4>
            <ul className="list-disc list-inside space-y-2 text-spotify-text-muted text-sm">
              <li>Dashboard adoption: 70%+ of beta creators using weekly</li>
              <li>Data accuracy: 99%+ match with Spotify's internal reporting</li>
              <li>Page load &lt; 2 seconds</li>
              <li>Mobile dashboard usable on 50%+ of traffic</li>
            </ul>
          </div>
        </section>

        {/* Phase 1 */}
        <section className="mb-16">
          <div className="border-l-4 border-spotify-green pl-6 mb-8">
            <h2 className="text-3xl font-bold text-spotify-text mb-2">PHASE 1: CREATOR ENABLEMENT & DISCOVERY (Months 4–9)</h2>
            <p className="text-xl text-spotify-text-muted mb-2"><strong className="text-spotify-text">Target Creator Stage:</strong> 0–100 downloads</p>
            <p className="text-xl text-spotify-text-muted"><strong className="text-spotify-text">Key Challenge:</strong> Finding traction, overcoming editing burden, gaining validation</p>
          </div>

          <h3 className="text-2xl font-semibold text-spotify-text mb-4">Product Features</h3>
          <div className="space-y-4 mb-6">
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h4 className="text-lg font-semibold text-spotify-text mb-3">1. AI Shorts Generation & Auto-Posting</h4>
              <p className="text-spotify-text-muted text-sm mb-2">AI detects key moments in raw episodes: big reveals, surprising stats, guest insights, strong opinions, emotional peaks. Auto-generates 60-second, 90-second, and 2-minute Shorts (video clips) with auto-captions, waveform visualization, and creator-approved watermark/branding. One-click posting to Spotify's Hype Points reel (native short-form discovery) + creator's own socials.</p>
            </div>

            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h4 className="text-lg font-semibold text-spotify-text mb-3">2. Hype Points Native Reel</h4>
              <p className="text-spotify-text-muted text-sm mb-2">A new Spotify discovery feed (homepage carousel, dedicated section, or tab) featuring short-form episode highlights. Mimics YouTube Shorts / TikTok vertical scroll: swipe up to listen to full episode, save to playlist, follow creator. Algorithm serves personalized clips based on listening history.</p>
            </div>

            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h4 className="text-lg font-semibold text-spotify-text mb-3">3. Content Benchmarking & Comparison</h4>
              <p className="text-spotify-text-muted text-sm mb-2">AI compares creator's episodes (structure, length, topics, format) against similar creators in their niche. Surface insights: "Solo episodes average 12 min in your niche; yours average 18 min. Similar creators' solos avg 58% LTR; yours avg 64% (good!)."</p>
            </div>

            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h4 className="text-lg font-semibold text-spotify-text mb-3">4. Retention Curve Analysis with Beginner Guidance</h4>
              <p className="text-spotify-text-muted text-sm mb-2">Simple, visual retention curve showing where listeners drop off (no jargon). Auto-generated insights: "Your hook works great (91% reach 30s). Your intro is standard length (2:00). You keep 78% of listeners at 10 minutes. Strong content!"</p>
            </div>
          </div>

          <div className="bg-spotify-dark border border-spotify-green rounded-lg p-6 mb-6">
            <h4 className="text-lg font-semibold text-spotify-text mb-3">Example AI Insight (Phase 1)</h4>
            <p className="text-spotify-text-muted text-sm italic">
              "Your episode 'First Steps to Remote Work' (18 min) underperformed (8.2K listeners, 62% LTR). Similar episodes in your niche: 'How to Start Remote' (13 min, 68% avg LTR, 12.1K listeners), 'Day 1 Remote Setup' (15 min, 71% avg LTR, 14.3K listeners). Pattern detected: Interviews outperform solo commentary by 35% in your niche. Recommendation: Test an interview format on your next remote work episode. Expected impact: +12–15% LTR, +400–600 new listeners if promoted (Phase 2). Run on Tuesday 8 AM (your niche's peak day)."
            </p>
          </div>

          <div className="bg-spotify-dark border border-spotify-green rounded-lg p-6">
            <h4 className="text-lg font-semibold text-spotify-text mb-3">Success Metrics (Phase 1)</h4>
            <ul className="list-disc list-inside space-y-2 text-spotify-text-muted text-sm">
              <li>AI Shorts adoption: 60%+ of Phase 1 creators generating 3+ Shorts per episode</li>
              <li>Hype Points reel MAU: 8M+ by month 9</li>
              <li>Creators reaching 100 downloads: 45% (vs. 30% current baseline)</li>
              <li>Creator retention improvement: 30% dropoff rate reduced to 20% through subsidized credits and better tools</li>
              <li>Help Wizard completion: 70%+ of new creators completing onboarding</li>
              <li>Average LTR improvement: +8–10% within first 60 days</li>
            </ul>
          </div>
        </section>

        {/* Phase 2 */}
        <section className="mb-16">
          <div className="border-l-4 border-spotify-green pl-6 mb-8">
            <h2 className="text-3xl font-bold text-spotify-text mb-2">PHASE 2: GROWTH & MONETIZATION (Months 10–15)</h2>
            <p className="text-xl text-spotify-text-muted mb-2"><strong className="text-spotify-text">Target Creator Stage:</strong> 100–1K downloads</p>
            <p className="text-xl text-spotify-text-muted"><strong className="text-spotify-text">Key Challenge:</strong> Breaking past personal network, finding early monetization path, justifying promotional spend</p>
          </div>

          <h3 className="text-2xl font-semibold text-spotify-text mb-4">Product Features</h3>
          <div className="space-y-4 mb-6">
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h4 className="text-lg font-semibold text-spotify-text mb-3">1. Episode Boost Campaigns (Spotify's "Marquee for Podcasts")</h4>
              <p className="text-spotify-text-muted text-sm mb-2">Self-serve promotional tool: Select an episode to promote. AI recommends optimal audience (e.g., listeners interested in [Topic], age 25–40, from [Countries]). Set budget ($20–$500/campaign, flexible duration). Choose placement: Hype Points (priority section), category pages, homepage carousel, or broader algorithmic boost. Real-time dashboard: spend, listeners acquired, cost-per-listener, projected lifetime listener value.</p>
              <p className="text-spotify-text-muted text-sm mt-2"><strong className="text-spotify-text">Pricing:</strong> Baseline cost: $0.10–$0.25 per listener acquired. ROI guarantee: "If we don't hit 300 listeners from $50 spend, we refund the difference."</p>
            </div>

            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h4 className="text-lg font-semibold text-spotify-text mb-3">2. Spotify-Subsidized Promotional Credits (Creator Support)</h4>
              <p className="text-spotify-text-muted text-sm mb-2">For Phase 1–2 creators (lower to lower-mid scales): Initial $50–$100 in Episode Boost credits (free). Designed to extend creator runway and reduce the near 30% dropoff rate of new creators. Lowers financial risk for early promotional investment, builds confidence, and validates Episode Boost viability. Funded by Spotify to boost creator endurance and accelerate growth.</p>
            </div>

            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h4 className="text-lg font-semibold text-spotify-text mb-3">3. Cross-Promotion Marketplace</h4>
              <p className="text-spotify-text-muted text-sm mb-2">AI-matched collaboration platform: AI identifies podcasts with 30–70% listener overlap (sweet spot for mutual benefit). Suggests partnership types: mid-roll promo swap, co-hosted special episode, guest appearance, series collaboration. Templates for promo copy, scheduling, and tracking. Dashboard tracks swapped listeners and long-term conversion to followers.</p>
            </div>

            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h4 className="text-lg font-semibold text-spotify-text mb-3">4. Partner Program Progress Transparency</h4>
              <p className="text-spotify-text-muted text-sm">Real-time tracker showing: Hours toward eligibility threshold (500 hours for Spotify Partner Program). Projected time to eligibility based on current growth. Clear breakdown: "[X hours / 500 hours needed. At current pace, eligible in Y days.]" Revenue projections: "At 5 shows/month + 500 listens/show + 30% of show revenue, projected monthly: $150–$250."</p>
            </div>
          </div>

          <div className="bg-spotify-dark border border-spotify-green rounded-lg p-6">
            <h4 className="text-lg font-semibold text-spotify-text mb-3">Success Metrics (Phase 2)</h4>
            <ul className="list-disc list-inside space-y-2 text-spotify-text-muted text-sm">
              <li>Episode Boost adoption: 40%+ of Phase 2 creators running 1+ campaign</li>
              <li>Cross-promo marketplace utilization: 30%+ of eligible creators attempting 1+ swap</li>
              <li>Creator monetization rate: 80%+ of Phase 2 creators reach Partner Program eligibility within 6 months (vs. current 40%)</li>
              <li>ROAS on Episode Boosts: 3:1 or better (3 listeners acquired for every $1 spent)</li>
              <li>Average listener growth per Phase 2 creator: +120% (from 100 downloads to 220+ within 6 months)</li>
              <li>Churn reduction: Phase 2 creators who use Episode Boost show 25% lower churn</li>
            </ul>
          </div>
        </section>

        {/* Phase 3 */}
        <section className="mb-16">
          <div className="border-l-4 border-spotify-green pl-6 mb-8">
            <h2 className="text-3xl font-bold text-spotify-text mb-2">PHASE 3: SCALING & OPTIMIZATION (Months 16–21)</h2>
            <p className="text-xl text-spotify-text-muted mb-2"><strong className="text-spotify-text">Target Creator Stage:</strong> 1K–10K downloads</p>
            <p className="text-xl text-spotify-text-muted"><strong className="text-spotify-text">Key Challenge:</strong> Niche saturation, audience expansion, advanced optimization, diversified revenue</p>
          </div>

          <h3 className="text-2xl font-semibold text-spotify-text mb-4">Product Features</h3>
          <div className="space-y-4 mb-6">
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h4 className="text-lg font-semibold text-spotify-text mb-3">1. 1-Degree Audience Expansion (AI-Powered Discovery)</h4>
              <p className="text-spotify-text-muted text-sm mb-2">AI maps full listener ecosystem: "45% of your listeners also follow [Podcast A]." "32% also follow [Podcast B]." Identify adjacencies: "45% of [Podcast A]'s 120K audience don't follow you → 54K potential new listeners." AI proposes concrete actions: Guest appearance on [Podcast A] (estimated 800–1.2K new listeners), sponsored segment on [Podcast B], content collaboration on shared topic/guest.</p>
            </div>

            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h4 className="text-lg font-semibold text-spotify-text mb-3">2. Predictive Campaign & Content Recommendations</h4>
              <p className="text-spotify-text-muted text-sm">AI models based on historical patterns: "Tuesday 8 AM = +40% first-week listeners vs. your average." "Interview format + [Niche Topic] + [Guest Profile] = avg 28% higher LTR." Predictive playbooks: "30-day optimization plan: Publish Tuesdays 8 AM, include guest interviews 60% of the time, cover [Topic Y] once per month. Expected impact: +35% monthly listeners."</p>
            </div>

            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h4 className="text-lg font-semibold text-spotify-text mb-3">3. Advanced Retention & Engagement Analysis</h4>
              <p className="text-spotify-text-muted text-sm mb-2">Segment-level retention curves: New listeners, casual listeners, loyal listeners. AI diagnostics: "New listeners drop 22% at minute 6 (your intro). Loyal listeners drop 8% (they know what's coming). Casual listeners drop 15% (uneven pacing)." Action: Reduce intro to 1:00 (expected +15% new listener retention).</p>
            </div>

            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h4 className="text-lg font-semibold text-spotify-text mb-3">4. Automated Optimization Loops & A/B Testing</h4>
              <p className="text-spotify-text-muted text-sm">AI proposes experiments: Intro length test, format test, publish time test. Dashboard auto-runs tests, tracks results, and recommends winners. "Test results: Tuesday 8 AM significantly outperforms 10 AM (+38% first-day listeners, p-value 0.03). Recommend locking Tuesday 8 AM as standard going forward."</p>
            </div>

            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h4 className="text-lg font-semibold text-spotify-text mb-3">5. Revenue Mix Optimization & Sponsorship Insights</h4>
              <p className="text-spotify-text-muted text-sm">AI models different revenue streams and their trade-offs: "Current: 0 ad breaks, no sponsorship. Revenue: $0." "Scenario A: 2 mid-roll ad spots (30s each) = estimated $400–$600/month but may reduce listener retention by 8–12%." "Scenario B: 1 integrated sponsorship (mention + 30s ad) = estimated $800–$1.2K/month, minimal retention impact if well-integrated."</p>
            </div>
          </div>

          <div className="bg-spotify-dark border border-spotify-green rounded-lg p-6">
            <h4 className="text-lg font-semibold text-spotify-text mb-3">Success Metrics (Phase 3)</h4>
            <ul className="list-disc list-inside space-y-2 text-spotify-text-muted text-sm">
              <li>1-degree expansion adoption: 50%+ of Phase 3 creators attempt guest collaborations</li>
              <li>A/B testing participation: 40%+ of Phase 3 creators running ≥1 experiment per month</li>
              <li>Average LTR improvement from optimization: +8–12%</li>
              <li>Audience growth rate: +40–60% per quarter (from Phase 3 start to end)</li>
              <li>Revenue diversification: 60%+ of Phase 3 creators earning from sponsorships or ads (vs. 10% at Phase start)</li>
              <li>Churn reduction: Phase 3 creators show 40% lower churn vs. baseline (2% vs. 3.3%)</li>
            </ul>
          </div>
        </section>

        {/* Phase 4 */}
        <section className="mb-16">
          <div className="border-l-4 border-spotify-green pl-6 mb-8">
            <h2 className="text-3xl font-bold text-spotify-text mb-2">PHASE 4: ENTERPRISE SCALING & ADVANCED CAPABILITIES (Months 22–24)</h2>
            <p className="text-xl text-spotify-text-muted mb-2"><strong className="text-spotify-text">Target Creator Stage:</strong> 10K+ downloads</p>
            <p className="text-xl text-spotify-text-muted"><strong className="text-spotify-text">Key Challenge:</strong> Operational scaling, multi-show portfolios, strategic positioning, advanced audience targeting</p>
          </div>

          <h3 className="text-2xl font-semibold text-spotify-text mb-4">Product Features</h3>
          <div className="space-y-4 mb-6">
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h4 className="text-lg font-semibold text-spotify-text mb-3">1. Portfolio & Multi-Show Analytics</h4>
              <p className="text-spotify-text-muted text-sm">Unified dashboard for creators with multiple podcasts: Network-level analytics (combined listeners, cross-show listener overlap). Per-show analytics (isolated performance, targeted optimization). Cross-promotion optimization: AI recommends which shows to cross-promote to which audiences.</p>
            </div>

            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h4 className="text-lg font-semibold text-spotify-text mb-3">2. Advanced Audience Intelligence & Predictive Modeling</h4>
              <p className="text-spotify-text-muted text-sm">Real-time demographic + psychographic segmentation: "62% of your listeners are 25–34, urban, white-collar, tech-interested, high-income." Predictive modeling: Churn risk (AI flags listeners showing early churn signals), LTV prediction (AI forecasts listener lifetime value), Revenue potential (AI identifies listeners most likely to convert to paid membership or sponsors).</p>
            </div>

            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h4 className="text-lg font-semibold text-spotify-text mb-3">3. Sponsorship Marketplace & Dynamic Revenue Optimization</h4>
              <p className="text-spotify-text-muted text-sm">AI-matched sponsorship marketplace: Spotify curates sponsorship opportunities matching your audience composition. Creator reviews, negotiates, or auto-accepts from pre-approved sponsors. Dynamic pricing: AI suggests sponsorship rates based on download count, listener demographics, sponsor category demand, seasonality.</p>
            </div>

            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h4 className="text-lg font-semibold text-spotify-text mb-3">4. International Expansion & Localization Toolkit</h4>
              <p className="text-spotify-text-muted text-sm">Identify growth opportunities by geography: "You have 15% of listeners in UK; high-growth potential. Recommended actions: Add UK-focused content series, identify UK sponsors, publish timezone-optimized for UK audience." AI flags languages with high listener volume but untranslated content (subtitle/dub opportunity).</p>
            </div>
          </div>

          <div className="bg-spotify-dark border border-spotify-green rounded-lg p-6">
            <h4 className="text-lg font-semibold text-spotify-text mb-3">Success Metrics (Phase 4)</h4>
            <ul className="list-disc list-inside space-y-2 text-spotify-text-muted text-sm">
              <li>Multi-show creator adoption: 80%+ of Phase 4 creators managing 2+ shows via unified dashboard</li>
              <li>Sponsorship revenue: Average Phase 4 creator earning $3K–$8K/month from sponsorships/ads</li>
              <li>International audience: 25–40% of Phase 4 creators with 20%+ listeners outside primary geography</li>
              <li>Churn reduction: Phase 4 creators show &lt;1% monthly churn (vs. 3.3% platform average)</li>
              <li>Portfolio optimization: Creators who follow AI portfolio recommendations see 40% higher revenue</li>
            </ul>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-6">Why This Strategy Wins</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-green mb-3">First-Party Data Advantage</h3>
              <p className="text-spotify-text-muted text-sm">Spotify's 678M logged-in users provide unmatched audience intelligence. "What else your audience watches" is a structural moat competitors (YouTube, Acast) can't easily replicate. Enables hyper-targeted campaigns and audience expansion recommendations impossible elsewhere.</p>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-green mb-3">Native Integration & Frictionless Experience</h3>
              <p className="text-spotify-text-muted text-sm">Tools live inside Spotify; creators don't context-switch. Single unified analytics dashboard (vs. fragmented external tools). Campaign creation, execution, and measurement all in one place.</p>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-green mb-3">AI as Simplifier & Optimizer</h3>
              <p className="text-spotify-text-muted text-sm">AI interprets data, not just displays it ("Your intro is too long" vs. raw CTR numbers). AI automates routine optimization (A/B testing, timing, audience matching). Help Wizard lowers barrier for non-technical creators.</p>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-green mb-3">Creator-Platform Incentive Alignment</h3>
              <p className="text-spotify-text-muted text-sm">Creator success (listening hours, retention, engagement) drives Spotify's metrics. Transparent monetization paths (Partner Program, sponsorships) build trust. Ad-free core tools (Hype Points, analytics) remove barriers to adoption.</p>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-6">24-Month Success Metrics & Business Case</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-4">Creator Metrics</h3>
              <ul className="space-y-2 text-spotify-text-muted text-sm">
                <li>• Monetized creators: 100 → 1,000 (10x growth)</li>
                <li>• Creator churn: 33% → 20% (40% reduction)</li>
                <li>• Average creator listen-hours: +120% year-over-year</li>
                <li>• Creator NPS: Target 60+ by end of 24 months</li>
              </ul>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-4">Platform Metrics</h3>
              <ul className="space-y-2 text-spotify-text-muted text-sm">
                <li>• Podcast listening hours: +40% YoY</li>
                <li>• Hype Points engagement: 150M monthly swipes, 8% CTR</li>
                <li>• Episode Boost campaigns: 50K campaigns/month by month 24; $100M+ total annual spend</li>
                <li>• Ad revenue from creator initiatives: $20M+ (Year 2)</li>
              </ul>
            </div>
          </div>
          <div className="bg-spotify-dark border border-spotify-green rounded-lg p-6">
            <h3 className="text-xl font-semibold text-spotify-text mb-3">Business Case</h3>
            <p className="text-spotify-text-muted text-sm mb-2">Phase 1–2 focus: Build tools and community (break-even to modest positive ROI). Phase 3–4 focus: Monetization and scale (high-margin revenue, sponsorship marketplace revenue).</p>
            <p className="text-spotify-text-muted text-sm"><strong className="text-spotify-text">Year 2 ARR potential:</strong> $40M–$80M (from Episode Boost platform fees, sponsorship marketplace, data licensing).</p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-spotify-green text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Explore the Interactive Analytics Dashboard</h2>
          <p className="mb-6 text-green-50">See the fully functional prototype with interactive charts, AI insights, and campaign planning tools.</p>
          <Link
            href="/analytics-dashboard"
            className="inline-block bg-white text-spotify-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            View Analytics Dashboard
          </Link>
        </section>
      </div>
    </div>
  );
}
