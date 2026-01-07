import Link from 'next/link';

export default function SpotifyStrategy() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-spotify-text mb-6">Spotify Podcast Creator Promotional Strategy</h1>
        <div className="bg-spotify-dark-secondary border-l-4 border-spotify-green p-6 mb-8 rounded-r-lg">
          <p className="text-spotify-text-muted leading-relaxed">
            This strategy is the result of deep research into Spotify's creator ecosystem, YouTube Studio's analytics best practices, and direct insights from podcast creator pain points. It's written as if I were brought in as a strategic PM to design Spotify's next-generation creator promotional platform.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-4">North Star</h2>
          <p className="text-xl text-spotify-text-muted mb-6">
            Build an innovative, data-driven creator promotional engine that simplifies campaign planning, targeting, and measurement—enabling creators to reach new audiences, build sustainable careers, and drive measurable growth on Spotify.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-6">Strategic Pillars</h2>
          <div className="space-y-6">
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-green mb-3">1. Promotional Tools & Discovery Integration</h3>
              <p className="text-spotify-text-muted">
                Phase-based promotional tools (Shorts/Hype Points clips, Episode Boost campaigns, cross-promo marketplace). Native short-form discovery (Hype Points reel) as primary discovery surface alongside algorithmic feeds. AI-assisted campaign planning (what to promote, who to target, when to run, how much to spend).
              </p>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-green mb-3">2. AI-Enhanced Analytics & Insights</h3>
              <p className="text-spotify-text-muted">
                Podcast-native analytics dashboard with retention curves, traffic analysis, audience intelligence. AI pattern recognition, retention diagnostics, and audience expansion recommendations. Automated campaign suggestions with predicted ROI. Help Wizard for beginners; advanced dashboards for power users.
              </p>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-green mb-3">3. Seamless Campaign Execution & Measurement</h3>
              <p className="text-spotify-text-muted">
                Integrated campaign module (planning → execution → measurement → optimization). Real-time campaign dashboards and cost-per-listener metrics. A/B testing framework for creative and targeting optimization. Win-back and stale-content automation.
              </p>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-green mb-3">4. Creator-Platform Alignment</h3>
              <p className="text-spotify-text-muted">
                Transparent monetization paths (Partner Program, sponsorships, multi-stream revenue). Clear ROI on promotional spend. Creator success metrics align with Spotify's business metrics (listening hours, retention, engagement).
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-6">Phase-by-Phase Roadmap</h2>
          <div className="space-y-8">
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-spotify-green mb-3">Phase 0: Analytics Foundation (Months 1-3)</h3>
              <p className="text-spotify-text-muted mb-4">Build the data infrastructure and analytics dashboard MVP—everything downstream depends on this.</p>
              <ul className="list-disc list-inside space-y-2 text-spotify-text-muted">
                <li>Real-time performance tracking (impressions, listeners, LTR, traffic sources)</li>
                <li>Audience segmentation & behavioral analysis</li>
                <li>Traffic source breakdown</li>
                <li>Cross-podcast listener overlap analysis</li>
              </ul>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-spotify-green mb-3">Phase 1: Creator Enablement & Discovery (Months 4-9)</h3>
              <p className="text-spotify-text-muted mb-4">Target: 0-100 downloads | Key Challenge: Finding traction, overcoming editing burden, gaining validation.</p>
              <ul className="list-disc list-inside space-y-2 text-spotify-text-muted">
                <li>AI Clip Generation & Auto-Posting (Shorts)</li>
                <li>Hype Points Native Reel (short-form discovery)</li>
                <li>Content Benchmarking & Comparison</li>
                <li>Retention Curve Analysis with Beginner Guidance</li>
                <li>Onboarding Playbooks</li>
              </ul>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-spotify-green mb-3">Phase 2: Growth & Monetization (Months 10-15)</h3>
              <p className="text-spotify-text-muted mb-4">Target: 100-1K downloads | Key Challenge: Breaking past personal network, finding early monetization path.</p>
              <ul className="list-disc list-inside space-y-2 text-spotify-text-muted">
                <li>Episode Boost Campaigns (self-serve paid promotion)</li>
                <li>Spotify-Subsidized Promotional Credits</li>
                <li>Cross-Promotion Marketplace</li>
                <li>Stale Content Resurrection & Win-Back Campaigns</li>
                <li>Partner Program Progress Transparency</li>
              </ul>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-spotify-green mb-3">Phase 3: Scaling & Optimization (Months 16-21)</h3>
              <p className="text-spotify-text-muted mb-4">Target: 1K-10K downloads | Key Challenge: Niche saturation, audience expansion, advanced optimization.</p>
              <ul className="list-disc list-inside space-y-2 text-spotify-text-muted">
                <li>1-Degree Audience Expansion (AI-Powered Discovery)</li>
                <li>Predictive Campaign & Content Recommendations</li>
                <li>Advanced Retention & Engagement Analysis</li>
                <li>Automated Optimization Loops & A/B Testing</li>
                <li>Revenue Mix Optimization & Sponsorship Insights</li>
              </ul>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-spotify-green mb-3">Phase 4: Enterprise Scaling (Months 22-24)</h3>
              <p className="text-spotify-text-muted mb-4">Target: 10K+ downloads | Key Challenge: Operational scaling, multi-show portfolios, strategic positioning.</p>
              <ul className="list-disc list-inside space-y-2 text-spotify-text-muted">
                <li>Portfolio & Multi-Show Analytics</li>
                <li>Advanced Audience Intelligence & Predictive Modeling</li>
                <li>Sponsorship Marketplace & Dynamic Revenue Optimization</li>
                <li>International Expansion & Localization Toolkit</li>
                <li>Production Quality & Technical Optimization Analysis</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="mt-12 text-center">
          <Link
            href="/analytics-dashboard"
            className="inline-block bg-spotify-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            Explore Interactive Analytics Dashboard →
          </Link>
        </div>
      </div>
    </div>
  );
}

