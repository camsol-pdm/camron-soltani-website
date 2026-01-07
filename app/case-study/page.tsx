import Link from 'next/link';

export default function CaseStudy() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-spotify-text mb-6">Case Study: Building Spotify's Creator Promotional Engine</h1>
        <p className="text-xl text-spotify-text-muted mb-8">
          A strategic exploration of how to simplify podcast creator promotional workflows through integrated discovery, analytics, and campaign tools.
        </p>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-4">The Opportunity</h2>
          <div className="space-y-4 text-spotify-text-muted leading-relaxed">
            <p>
              This case study is a strategic exploration for a Spotify PM role in podcast promotions or creator tools. I approached it like a real PM problem: deeply understand creator needs, research competitive landscape, design a coherent strategy, prototype the core UX, and model measurable outcomes.
            </p>
            <p>
              Rather than proposing isolated features, I've built a phase-based, cohesive strategy that aligns creator success with Spotify's business metrics—focusing on the core mission: help creators plan, book, target, and measure effective promotional campaigns.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-4">My Approach & Background</h2>
          <div className="space-y-4 text-spotify-text-muted leading-relaxed">
            <p>
              I'm a PM with 8+ years at Fyxt, a B2B SaaS company serving commercial real estate. Throughout my career, I've led strategic product initiatives from discovery to launch—launching features that achieved up to 86% user adoption, conducting market research and customer discovery to validate assumptions, orchestrating cross-functional execution, and optimizing product via metrics-driven iteration.
            </p>
            <p>
              I also have hands-on experience integrating AI and LLMs into product workflows—certified in AI Agents for Product Leaders—which informed how I designed the analytics and automation components of this strategy.
            </p>
            <p>
              My core PM philosophy: Start with user empathy, ground decisions in data, design for clarity, and measure relentlessly. This case study reflects that approach.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-4">Problem Definition: Creator Promotional Complexity</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-spotify-text mb-2">The Scale of the Opportunity</h3>
              <p className="text-spotify-text-muted">
                Today, podcast creators face fragmented workflows: analytics scattered across Spotify, third-party tools, and spreadsheets. Promotional options are unclear, and measurement is opaque. This complexity creates friction, decision paralysis, and ultimately, underinvestment in growth tactics that could pay off.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-spotify-text mb-2">Competitive Landscape</h3>
              <p className="text-spotify-text-muted">
                YouTube has native tools (Shorts, Analytics, Creator Fund) tightly integrated. Spotify has promotional tools for music (Marquee, Showcase) that are proven and mature. But podcasts? Still fragmented. Promotional tools, analytics, and creator support aren't cohesive. This gap is strategic vulnerability; it's also a massive opportunity.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-spotify-text mb-2">What Creators Really Need</h3>
              <p className="text-spotify-text-muted">
                After researching podcast creator pain points, 3 things emerged: Clarity (understanding their audience, what drives engagement, where to invest time/money), Simplicity (AI and automation that reduces complexity), and Confidence (clear ROI on promotional spend and transparent monetization paths).
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-4">Solution Design: The Three Pillars</h2>
          <div className="space-y-4 text-spotify-text-muted leading-relaxed">
            <p>
              <strong className="text-spotify-text">Discovery & Promotion:</strong> Creators gain multiple levers (Hype Points clips, Episode Boost campaigns, cross-promo marketplace) to expand reach.
            </p>
            <p>
              <strong className="text-spotify-text">AI-Powered Analytics:</strong> Creators understand their data and trust their optimization decisions.
            </p>
            <p>
              <strong className="text-spotify-text">Campaign Planning & Measurement:</strong> Creators invest promotional spend strategically and measure ROI clearly.
            </p>
            <p>
              These pillars aren't separate tools; they're integrated. A creator uses analytics to identify their best episode, gets an AI recommendation to run an Episode Boost campaign, launches the campaign via the integrated module, and measures results in real-time. Frictionless.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-4">Why This Approach Wins</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-green mb-2">First-Party Data Moat</h3>
              <p className="text-spotify-text-muted">678M logged-in users provide unmatched audience insights.</p>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-green mb-2">Creator Loyalty</h3>
              <p className="text-spotify-text-muted">Early moat building before competitors invest heavily.</p>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-green mb-2">Network Effects</h3>
              <p className="text-spotify-text-muted">Hype Points reel + cross-promo marketplace create flywheel.</p>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-green mb-2">Incentive Alignment</h3>
              <p className="text-spotify-text-muted">Creator and platform success metrics aligned.</p>
            </div>
          </div>
        </section>

        <div className="mt-12 text-center space-x-4">
          <Link
            href="/spotify-strategy"
            className="inline-block bg-spotify-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            View Full Strategy →
          </Link>
          <Link
            href="/analytics-dashboard"
            className="inline-block border-2 border-spotify-green text-spotify-green px-8 py-3 rounded-lg font-semibold hover:bg-spotify-green hover:text-white transition-colors"
          >
            Explore Dashboard →
          </Link>
        </div>
      </div>
    </div>
  );
}

