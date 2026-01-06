import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-spotify-text mb-6 leading-tight">
              Help Creators Plan, Book, Target, and Measure Effective Promotional Campaigns
            </h1>
            <p className="text-xl text-spotify-text-muted mb-6">
              A strategic approach to simplifying podcast creator promotional workflows with AI-powered analytics and data-driven insights.
            </p>
            <div className="space-y-4 mb-8">
              <p className="text-spotify-text-muted leading-relaxed">
                Podcast creators have the content. What they need is intelligence—intelligence on who and where their audience is, what drives engagement, where to invest promotional spend, and how to optimize for growth. Right now, that intelligence lives in basic analytics and promotional tools that lack the depth needed to make confident decisions.
              </p>
              <p className="text-spotify-text-muted leading-relaxed">
                I've designed a comprehensive product strategy and AI-enhanced analytics dashboard that gives creators the tools, data insights, and confidence to plan and execute effective promotional campaigns—driving measurable audience expansion and competitive positioning in their niche.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/spotify-strategy"
                className="bg-spotify-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-center"
              >
                View Full Strategy
              </Link>
              <Link
                href="/analytics-dashboard"
                className="border-2 border-spotify-green text-spotify-green px-8 py-3 rounded-lg font-semibold hover:bg-spotify-green hover:text-white transition-colors text-center"
              >
                Explore Interactive Analytics Dashboard
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            {/* Hero Visual - Creator at desk with analytics dashboard */}
            <div className="relative mb-6">
              <div className="bg-gradient-to-br from-spotify-dark via-spotify-dark-secondary to-spotify-dark rounded-lg p-2 border border-spotify-neutral shadow-lg overflow-hidden">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="/images/hero-creator-dashboard.jpg"
                    alt="Podcast creator at desk reviewing analytics dashboard with holographic UI elements showing charts, Shorts tiles, and audience segments"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
            {/* Concept Card */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-spotify-text mb-4">Podcast Creator Promotional Engine</h2>
              <ul className="space-y-3 text-spotify-text-muted">
                <li className="flex items-start">
                  <span className="text-spotify-green mr-2">•</span>
                  <span>AI-assisted campaign planning, targeting, and optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-spotify-green mr-2">•</span>
                  <span>Interactive analytics dashboard that turns data into actionable insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-spotify-green mr-2">•</span>
                  <span>Phase-based creator experience tailored to growth stage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-spotify-green mr-2">•</span>
                  <span>Seamless integration of discovery, promotion, and measurement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <section className="bg-spotify-dark-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-spotify-text mb-8">The Opportunity: Spotify's Creator Promotional Edge</h2>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-6 text-spotify-text-muted leading-relaxed">
              <p>
                Today, podcast creators have incredible content but face limitations in how they promote and measure impact: analytics are somewhat basic, promotional tools lack depth in audience and content targeting, and there is limited integrated guidance on audience expansion strategy. Meanwhile, YouTube has native promotional capabilities, sophisticated analytics, and short-form discovery tightly integrated into the platform.
              </p>
              <p>
                This isn't a problem. It's a strategic opportunity. Spotify has 678M logged-in users, strong creator relationships through Spotify for Creators, and first-party data that competitors can't match. What's missing? Invigorated promotional tools with advanced audience and market targeting, enhanced analytics that provide true intelligence on listener behavior, and AI guidance on content optimization and audience expansion.
              </p>
            </div>
            <div className="md:col-span-1">
              {/* Audience Expansion Flows Diagram */}
              <div className="bg-spotify-dark border border-spotify-neutral rounded-lg p-2 overflow-hidden shadow-lg">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/audience-expansion-flows.jpg"
                    alt="Audience Expansion Flows diagram showing podcast audience connected to Gen Z, Millennials, and Gen X & Boomers segments with expansion arrows"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-semibold text-spotify-text mb-4 mt-8">What Creators Need</h3>
          <ul className="space-y-3 text-spotify-text-muted mb-6">
            <li className="flex items-start">
              <span className="text-spotify-green mr-2">•</span>
              <span>Intelligence on who and where their audience is (not just metrics)</span>
            </li>
            <li className="flex items-start">
              <span className="text-spotify-green mr-2">•</span>
              <span>Actionable guidance on content optimization and audience expansion (not data overload)</span>
            </li>
            <li className="flex items-start">
              <span className="text-spotify-green mr-2">•</span>
              <span>Confidence in promotional spend ROI through advanced audience targeting (not guesswork)</span>
            </li>
            <li className="flex items-start">
              <span className="text-spotify-green mr-2">•</span>
              <span>AI assistance in campaign ideation, content optimization, and growth strategy (not manual labor)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* The Solution Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-spotify-text mb-12 text-center">The Solution: Creator Promotional Engine</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-spotify-text mb-4">Discovery & Promotional Tools</h3>
              <h4 className="text-lg font-semibold text-spotify-green mb-3">Multi-Stage Discovery and Promotion Levers</h4>
              <div className="space-y-3 text-spotify-text-muted text-sm leading-relaxed">
                <p><strong className="text-spotify-text">Phase 1 (0–100 downloads):</strong> AI-powered clip generation turns long-form episodes into short-form "Shorts" auto-optimized for discovery. Shorts appear natively in a new "Hype Points" discovery reel—Spotify's answer to YouTube Shorts—driving organic discoverability and algorithmic lift.</p>
                <p><strong className="text-spotify-text">Phase 2 (100–1K downloads):</strong> "Episode Boost" campaigns—self-serve paid promotion within Spotify with advanced audience targeting (demographics, interests, listening patterns, geography) and content targeting (genre, topic affinity). Spotify-subsidized promotional credits for creators at lower to lower-mid scales help boost creator endurance and reduce the near 30% dropoff rate of new creators, lowering financial risk for early promotional investment.</p>
                <p><strong className="text-spotify-text">Phase 3 (1K–10K downloads):</strong> Cross-promotion marketplace connects creators with complementary shows for mutual audience expansion. AI identifies which podcasts have overlapping audiences and suggests partnership opportunities with projected listener growth.</p>
                <p><strong className="text-spotify-text">Phase 4 (10K+ downloads):</strong> Advanced targeting and portfolio tools for multi-show creators. Predictive campaign modeling shows revenue under different promotional strategies.</p>
                <p className="font-semibold text-spotify-text mt-4">Expected impact: Creators gain controllable, measurable discovery levers instead of relying solely on algorithms. Short-form integration (Hype Points with Shorts) becomes a primary discovery surface, similar to how Shorts drive discovery on YouTube.</p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-spotify-text mb-4">AI-Powered Analytics & Insights</h3>
              <h4 className="text-lg font-semibold text-spotify-green mb-3">Analytics That Guide Action</h4>
              <div className="space-y-3 text-spotify-text-muted text-sm leading-relaxed">
                <p>A podcast-native analytics dashboard (inspired by YouTube Studio's best practices) that provides true intelligence on listener behavior and content performance.</p>
                <p><strong className="text-spotify-text">Core analytics:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li><strong className="text-spotify-text">Reach & Discovery:</strong> Impressions, CTR, traffic sources (Browse, Search, External), new vs. returning listener analysis, SEO keyword ranking.</li>
                  <li><strong className="text-spotify-text">Engagement & Retention:</strong> Average Percentage Viewed (APV), second-by-second retention curves, Streams vs. Starts ratio, engagement velocity.</li>
                  <li><strong className="text-spotify-text">Audience Intelligence:</strong> What else your audience watches/listens to, active listening hours (time-of-day heatmap), loyalty index and cohorts.</li>
                  <li><strong className="text-spotify-text">Monetization:</strong> RPM tracking, ad insertion opportunities, subscriber conversion funnel, estimated revenue lost.</li>
                </ul>
                <p><strong className="text-spotify-text">AI insights layer:</strong> Pattern recognition, retention diagnostics, audience expansion guidance, content optimization suggestions tied directly to metrics. Help Wizard guides new creators through analytics without requiring data expertise.</p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-spotify-text mb-4">Campaign Planning, Measurement & Creator Support</h3>
              <h4 className="text-lg font-semibold text-spotify-green mb-3">Plan, Target, Measure, Optimize</h4>
              <div className="space-y-3 text-spotify-text-muted text-sm leading-relaxed">
                <p><strong className="text-spotify-text">Integrated campaign module:</strong> Which episode to promote (AI-recommended), who to target (audience cohorts by demographics, interests, patterns, geography), what to spend (modeled ROI), when to run (optimal timing based on listening behavior).</p>
                <p><strong className="text-spotify-text">Built-in measurement:</strong> Real-time campaign dashboards: spend, listeners acquired, cost-per-listener, LTV. A/B testing for creative and targeting. Win-back/stale-content campaigns (e.g., re-promoting underperformers).</p>
                <p><strong className="text-spotify-text">Spotify-subsidized credits for Phase 1–2 creators:</strong> Lower-to-mid-scale creators receive credits to reduce financial barriers. Designed to extend creator runway and reduce early-stage churn.</p>
                <p><strong className="text-spotify-text">ROI transparency:</strong> Clear views of spend vs. listeners vs. revenue. "At current growth, you'll reach Partner Program eligibility in X months—here's how to accelerate."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competitive Advantage */}
      <section className="bg-spotify-dark-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-spotify-text mb-8">Why This Works: Spotify's Structural Advantage</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-spotify-dark border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-green mb-3">First-party data at scale</h3>
              <p className="text-spotify-text-muted">678M logged-in users provide unmatched audience intelligence.</p>
            </div>
            <div className="bg-spotify-dark border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-green mb-3">Native integration</h3>
              <p className="text-spotify-text-muted">Creators plan, promote, and measure without leaving Spotify.</p>
            </div>
            <div className="bg-spotify-dark border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-green mb-3">AI as simplifier</h3>
              <p className="text-spotify-text-muted">Automation reduces cognitive load and routine optimization work.</p>
            </div>
            <div className="bg-spotify-dark border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-green mb-3">Creator-platform alignment</h3>
              <p className="text-spotify-text-muted">Creator growth maps directly to Spotify's business metrics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Framework */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-spotify-text mb-8">Meet Creators Where They Are</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-bold text-spotify-text mb-3">Phase 1: Discovery & Validation</h3>
              <p className="text-spotify-text-muted text-sm">AI Shorts, Hype Points, content benchmarking, simple analytics</p>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-bold text-spotify-text mb-3">Phase 2: Early Growth & Promotion</h3>
              <p className="text-spotify-text-muted text-sm">Episode Boost with subsidized credits, cross-promo marketplace, Partner Program transparency</p>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-bold text-spotify-text mb-3">Phase 3: Niche Scaling & Optimization</h3>
              <p className="text-spotify-text-muted text-sm">Advanced analytics, 1-degree expansion, predictive optimization</p>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-bold text-spotify-text mb-3">Phase 4: Enterprise Scaling</h3>
              <p className="text-spotify-text-muted text-sm">Portfolio management, sponsorship optimization, advanced targeting</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/spotify-strategy"
              className="inline-block text-spotify-green font-semibold hover:underline"
            >
              Explore the detailed 24-month roadmap →
            </Link>
          </div>
        </div>
      </section>

      {/* Why This Case Study Matters */}
      <section className="bg-spotify-dark-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-spotify-text mb-6">Why I Built This Case Study</h2>
              <div className="space-y-4 text-spotify-text-muted leading-relaxed">
                <p>
                  I'm a PM with 8+ years at Fyxt, where I've built products that creators and users love—driving adoption up to 86% on major features. I combine a founder's instinct with disciplined execution and a deep passion for simplifying complex problems.
                </p>
                <p>
                  This case study demonstrates how to take an ambiguous, high-impact opportunity ('help creators expand their reach and execute better promotional campaigns') and translate it into a concrete, phased product strategy with clear roadmap, prototype UX, and measurable business outcomes.
                </p>
                <p>
                  If you're at Spotify exploring how to build the creator promotional engine, this is the approach I'd bring to the role.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-block text-spotify-green font-semibold hover:underline"
                >
                  Learn more about my approach →
                </Link>
              </div>
            </div>
            <div className="md:col-span-1">
              {/* AI illustration placeholder */}
              <div className="bg-spotify-dark border border-spotify-neutral rounded-lg p-6 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-spotify-green/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-spotify-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <p className="text-xs text-spotify-text-muted italic">[AI Illustration: PM connecting nodes representing creators, listeners, and tools, Spotify color palette]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
