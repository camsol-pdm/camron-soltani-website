import Link from 'next/link';

export default function CaseStudy() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <div className="mb-6">
            {/* AI Illustration Placeholder */}
            <div className="bg-gradient-to-br from-spotify-dark via-spotify-dark-secondary to-spotify-dark rounded-lg p-6 border border-spotify-neutral">
              <div className="aspect-video bg-spotify-dark-secondary rounded-lg flex items-center justify-center border border-spotify-neutral">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 bg-spotify-green/20 rounded-lg flex items-center justify-center">
                    <svg className="w-10 h-10 text-spotify-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <p className="text-xs text-spotify-text-muted italic">[AI Illustration: PM connecting nodes representing creators, listeners, and tools, Spotify colors]</p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-spotify-text mb-4">Case Study: Building Spotify's Creator Promotional Engine</h1>
          <p className="text-xl text-spotify-text-muted mb-6">
            A strategic exploration of how to simplify podcast creator promotional workflows through integrated discovery, analytics, and campaign tools.
          </p>
          <div className="prose prose-lg max-w-none">
            <p className="text-spotify-text-muted leading-relaxed mb-4">
              This case study is a strategic exploration for a Spotify PM role in podcast promotions or creator tools. I approached it like a real PM problem: deeply understand creator needs, research competitive landscape, design a coherent strategy, prototype the core UX, and model measurable outcomes.
            </p>
            <p className="text-spotify-text-muted leading-relaxed">
              Rather than proposing isolated features, I've built a phase-based, cohesive strategy that aligns creator success with Spotify's business metrics—focusing on the core mission: help creators plan, book, target, and measure effective promotional campaigns.
            </p>
          </div>
        </section>

        {/* My Approach */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-6">Who I Am & How I Think About Product</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-spotify-text-muted leading-relaxed mb-4">
              I'm a PM with 8+ years at Fyxt, a B2B SaaS company serving commercial real estate. Throughout my career, I've led strategic product initiatives from discovery to launch—launching features that achieved up to 86% user adoption, conducting market research and customer discovery to validate assumptions, orchestrating cross-functional execution, and optimizing product via metrics-driven iteration.
            </p>
            <p className="text-spotify-text-muted leading-relaxed mb-4">
              I also have hands-on experience integrating AI and LLMs into product workflows—certified in AI Agents for Product Leaders—which informed how I designed the analytics and automation components of this strategy.
            </p>
            <p className="text-spotify-text-muted leading-relaxed">
              My core PM philosophy: Start with user empathy, ground decisions in data, design for clarity, and measure relentlessly. This case study reflects that approach.
            </p>
          </div>
        </section>

        {/* Problem Definition */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-6">The Opportunity: Building the Creator Promotional Engine</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-spotify-text mb-3">Prime Directive</h3>
              <p className="text-lg text-spotify-green font-semibold mb-4">
                Build innovative, data-driven experiences that make it easy for creators to plan, book, target, and measure effective promotional campaigns.
              </p>
              <p className="text-spotify-text-muted leading-relaxed mb-2">
                Today, podcast creators have incredible content but face limitations in how they promote and measure impact: analytics are somewhat basic and ready for invigoration, promotional tools lack depth in audience and content targeting, and there is limited integrated guidance on audience expansion strategy.
              </p>
              <p className="text-spotify-text-muted leading-relaxed">
                This isn't a crisis—it's a strategic opportunity. Spotify has 678M logged-in users, strong creator relationships, and first-party data that competitors can't match. What's needed? Invigorated promotional tools with advanced targeting, enhanced analytics that provide true intelligence, and AI guidance on optimization and expansion.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-spotify-text mb-3">Competitive Landscape</h3>
              <p className="text-spotify-text-muted leading-relaxed">
                YouTube has native promotional capabilities, sophisticated analytics, and short-form discovery tightly integrated. Spotify has promotional tools for music (Marquee, Showcase) that are proven and mature. But podcasts? Analytics are basic and ready for invigoration. Promotional tools need advanced audience and content targeting. This gap is a strategic opportunity.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-spotify-text mb-3">What Creators Really Need</h3>
              <p className="text-spotify-text-muted leading-relaxed mb-2">
                After researching podcast creator pain points, 3 things emerged:
              </p>
              <ul className="list-disc list-inside space-y-2 text-spotify-text-muted">
                <li><strong className="text-spotify-text">Clarity:</strong> Understanding their audience, what drives engagement, where to invest time/money.</li>
                <li><strong className="text-spotify-text">Simplicity:</strong> AI and automation that reduces complexity, not adds to it.</li>
                <li><strong className="text-spotify-text">Confidence:</strong> Clear ROI on promotional spend and transparent monetization paths.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Research & Insights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-6">Research & Key Strategic Insights</h2>
          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-spotify-text-muted leading-relaxed">
              I spent time researching: Spotify's ecosystem and public statements, YouTube Studio's analytics and creator tools, podcast platform alternatives (Acast, Podbean, Apple Podcasts), and industry trends.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-spotify-green pl-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-2">Key Insight #1: Different Phases, Different Needs</h3>
              <p className="text-spotify-text-muted leading-relaxed">
                Creators at 0–100 downloads need different tools than creators at 10K+ downloads. A one-size-fits-all approach fails because pain points differ dramatically. Strategic implication: Design phase-based experience (Phase 1–4) with tailored tools, education, and monetization paths for each stage.
              </p>
            </div>

            <div className="border-l-4 border-spotify-green pl-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-2">Key Insight #2: Data Interpretation is the Bottleneck</h3>
              <p className="text-spotify-text-muted leading-relaxed">
                YouTube's strength isn't just showing metrics; it's explaining <em>what metrics mean</em> and <em>why</em> they matter. Most podcast creators don't have data backgrounds. Retention curve means nothing; 'your intro is too long' means everything. Strategic implication: AI doesn't just generate recommendations; it translates data into narrative insights that creators understand and trust.
              </p>
            </div>

            <div className="border-l-4 border-spotify-green pl-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-2">Key Insight #3: Short-Form Discovery is Non-Negotiable</h3>
              <p className="text-spotify-text-muted leading-relaxed">
                YouTube Shorts drives discovery across the platform. Spotify's Hype Points reel (short-form podcast clips) could become a primary discovery surface if designed well. Strategic implication: Short-form clips aren't a standalone feature; they're foundational to discovery and promotion strategy.
              </p>
            </div>

            <div className="border-l-4 border-spotify-green pl-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-2">Key Insight #4: Incentives Must Align</h3>
              <p className="text-spotify-text-muted leading-relaxed">
                Creators succeed when their metrics (listeners, retention, engagement) align with platform metrics (listening hours, ad revenue, subscriber growth). Misalignment creates friction. Strategic implication: Design tools that inherently align creator and platform incentives; transparency in monetization is essential.
              </p>
            </div>

            <div className="border-l-4 border-spotify-green pl-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-2">Key Insight #5: AI as Enabler, Not Replacement</h3>
              <p className="text-spotify-text-muted leading-relaxed">
                AI's role is to multiply creator productivity: generate clips, interpret analytics, suggest optimizations, automate campaigns. AI shouldn't replace creator judgment; it should enhance it. Strategic implication: AI is woven throughout the experience (clips, analytics, recommendations, automation), but creators always have agency and control.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-6">Solution Design: Three Integrated Pillars</h2>
          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-spotify-text-muted leading-relaxed">
              These pillars aren't separate tools; they're integrated. A creator uses analytics to identify their best episode, gets an AI recommendation to run an Episode Boost campaign, launches the campaign via the integrated module, and measures results in real-time. Frictionless.
            </p>
            <p className="text-spotify-text-muted leading-relaxed mt-4">
              Success reduces churn as a secondary outcome: when creators have better tools, clearer intelligence, and confidence in promotional ROI, they're more likely to persist and grow. The primary goal is enabling effective promotional campaigns; retention improvement follows naturally.
            </p>
          </div>
          <div className="bg-spotify-dark-secondary p-6 rounded-lg">
            <ul className="space-y-3 text-spotify-text-muted">
              <li className="flex items-start">
                <span className="text-spotify-green mr-2">•</span>
                <span><strong className="text-spotify-text">Discovery & Promotion:</strong> Creators gain multiple levers (Shorts/Hype Points, Episode Boost campaigns with advanced targeting, cross-promo marketplace) to expand reach.</span>
              </li>
              <li className="flex items-start">
                <span className="text-spotify-green mr-2">•</span>
                <span><strong className="text-spotify-text">Intelligence-Driven Analytics:</strong> Enhanced analytics provide true intelligence on listener behavior, not just metrics. AI translates data into actionable insights.</span>
              </li>
              <li className="flex items-start">
                <span className="text-spotify-green mr-2">•</span>
                <span><strong className="text-spotify-text">Campaign Planning & Creator Support:</strong> Integrated campaign module with AI recommendations. Spotify-subsidized credits for Phase 1–2 creators reduce financial barriers and extend creator runway.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Creator Journey */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-6">From First Episode to Sustainable Business: Sarah's Journey</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-spotify-green pl-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-3">Phase 1: Sarah publishes her first 3 true-crime episodes (0–100 downloads)</h3>
              <p className="text-spotify-text-muted leading-relaxed mb-2">
                Episodes get minimal traction (47, 52, 38 listeners respectively). Spotify's AI clip tool extracts 3 moments per episode and auto-generates clips. Clips appear in Hype Points; she gains 12 new listeners from clips (feedback loop). Analytics show her intro is 3:00 (niche average 1:15) and she loses 20% of new listeners in minutes 3–5. AI recommends shortening intro; she tests on episode 4 → retention jumps 52% to 67%. Sarah feels validated. She commits to continuing.
              </p>
            </div>

            <div className="border-l-4 border-spotify-green pl-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-3">Phase 2: Sarah reaches 180 downloads (progresses to Phase 2)</h3>
              <p className="text-spotify-text-muted leading-relaxed mb-2">
                Friends and family tapped; growth stalled. Spotify suggests an Episode Boost trial ($50 credit) for her best episode ('Serial Killer Psychology Basics'). She runs it; 340 new listeners in 7 days. Partner Program progress tracker shows: '180 listeners / 4,000 needed. At current growth, eligible in 9 months.' She sees a path. She invests in 2 more Episode Boost campaigns (self-funded) → 680 more listeners. She's now at 860 listeners, 6 months from eligibility.
              </p>
            </div>

            <div className="border-l-4 border-spotify-green pl-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-3">Phase 3: Sarah reaches 2,100 downloads (moves into Phase 3)</h3>
              <p className="text-spotify-text-muted leading-relaxed mb-2">
                Analytics show 45% of her listeners also follow [Crime Junkie], [Dateline Podcast], [Our Fake History]. AI suggests guest collaborations; she partners with [Related Crime Podcast] for a 2-part crossover. Result: 1,200 new listeners, plus sponsorship interest from [Audio Ad Platform]. She's now making $650/month from sponsorships and projects $1.2K/month within 6 months. Sarah is building a real business.
              </p>
            </div>

            <div className="border-l-4 border-spotify-green pl-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-3">Phase 4: Sarah reaches 12,000 downloads (established creator)</h3>
              <p className="text-spotify-text-muted leading-relaxed mb-2">
                She's developed 2 spin-off shows ('True Crime Deep Dives', 'Criminal Psychology Profiles'). Network analytics show 68% listener overlap between shows (valuable for sponsorships, bundle deals). She negotiates multi-show sponsorships worth $3K–$5K/month. She's earning $4.5K/month from Spotify (ads + sponsorships + partnerships). What started as a hobby 18 months ago is now a sustainable career.
              </p>
            </div>
          </div>
          <div className="mt-6 bg-spotify-dark-secondary border-l-4 border-spotify-green p-4 rounded">
            <p className="text-spotify-text-muted">
              Sarah's journey shows the power of the right tools at the right time. Phase 1 validated the idea. Phase 2 proved ROI on promotion. Phase 3 unlocked scaling. Phase 4 enabled a sustainable business. This is what Spotify creator tools should enable.
            </p>
          </div>
        </section>

        {/* Why This Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-6">Strategic Advantages & Competitive Moats</h2>
          <div className="space-y-4">
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-green mb-2">First-Party Data Moat</h3>
              <p className="text-spotify-text-muted text-sm">678M logged-in users provide unmatched audience insights.</p>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-green mb-2">Creator Loyalty</h3>
              <p className="text-spotify-text-muted text-sm">Early moat building (early adoption, trust) before YouTube or Apple invest heavily in podcast creator tools.</p>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-green mb-2">Network Effects</h3>
              <p className="text-spotify-text-muted text-sm">Hype Points reel + cross-promo marketplace create flywheel (more creators → more content → more discovery → more listeners → more creators).</p>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-green mb-2">Incentive Alignment</h3>
              <p className="text-spotify-text-muted text-sm">Creator and platform success metrics aligned (listening hours, retention, engagement improve when creators succeed).</p>
            </div>
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-green mb-2">End-to-End Experience</h3>
              <p className="text-spotify-text-muted text-sm">Discovery → analytics → promotion → measurement integrated (competitors fragmented).</p>
            </div>
          </div>
        </section>

        {/* Implementation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-6">How I'd Approach This Inside Spotify</h2>
          <div className="space-y-3 mb-6">
            <div className="flex items-start">
              <span className="text-spotify-green mr-3 font-bold">Weeks 1–4:</span>
              <p className="text-spotify-text-muted">Validate pain points with 20 creators (Phase 1, 2, 3 mix). Refine problem understanding.</p>
            </div>
            <div className="flex items-start">
              <span className="text-spotify-green mr-3 font-bold">Weeks 5–8:</span>
              <p className="text-spotify-text-muted">Build analytics dashboard MVP (Reach, Retention, Audience Intelligence tabs). Test with 50 beta creators.</p>
            </div>
            <div className="flex items-start">
              <span className="text-spotify-green mr-3 font-bold">Weeks 9–12:</span>
              <p className="text-spotify-text-muted">Pilot Episode Boost campaigns with Phase 2 cohort. Measure ROAS and adoption.</p>
            </div>
            <div className="flex items-start">
              <span className="text-spotify-green mr-3 font-bold">Weeks 13–16:</span>
              <p className="text-spotify-text-muted">Iterate based on feedback. Launch AI insights engine (patterns, diagnostics, recommendations).</p>
            </div>
            <div className="flex items-start">
              <span className="text-spotify-green mr-3 font-bold">Month 5+:</span>
              <p className="text-spotify-text-muted">Scale to Phase 1 (AI clips + Hype Points), measure retention and listening hour uplift.</p>
            </div>
          </div>
          <p className="text-spotify-text-muted leading-relaxed">
            <strong className="text-spotify-text">Emphasize:</strong> Constant measurement, user feedback incorporation, and willingness to pivot if assumptions prove wrong.
          </p>
        </section>

        {/* Reflection */}
        <section className="mb-16 bg-spotify-dark-secondary p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-spotify-text mb-6">What This Case Study Shows About My PM Approach</h2>
          <ul className="space-y-3 text-spotify-text-muted">
            <li className="flex items-start">
              <span className="text-spotify-green mr-2 font-bold">•</span>
              <span><strong className="text-spotify-text">User Empathy:</strong> Grounded solution in real creator needs, not platform convenience.</span>
            </li>
            <li className="flex items-start">
              <span className="text-spotify-green mr-2 font-bold">•</span>
              <span><strong className="text-spotify-text">Structured Thinking:</strong> Organized complex problem into phases, pillars, and measurable outcomes.</span>
            </li>
            <li className="flex items-start">
              <span className="text-spotify-green mr-2 font-bold">•</span>
              <span><strong className="text-spotify-text">Data-Driven:</strong> Used research (competitor analysis, creator interviews, industry trends) to inform strategy.</span>
            </li>
            <li className="flex items-start">
              <span className="text-spotify-green mr-2 font-bold">•</span>
              <span><strong className="text-spotify-text">Realistic Roadmap:</strong> Balanced ambition (10x monetized creators) with pragmatism (phase-based, MVP focus).</span>
            </li>
            <li className="flex items-start">
              <span className="text-spotify-green mr-2 font-bold">•</span>
              <span><strong className="text-spotify-text">AI Integration:</strong> Leveraged modern AI to simplify complexity and multiply creator productivity.</span>
            </li>
            <li className="flex items-start">
              <span className="text-spotify-green mr-2 font-bold">•</span>
              <span><strong className="text-spotify-text">Cross-Functional Mindset:</strong> Considered implications for engineering, design, data, monetization, marketing.</span>
            </li>
            <li className="flex items-start">
              <span className="text-spotify-green mr-2 font-bold">•</span>
              <span><strong className="text-spotify-text">Business Acumen:</strong> Modeled ROI, competitive advantage, and long-term value creation.</span>
            </li>
          </ul>
        </section>

        {/* CTAs */}
        <section className="flex flex-col sm:flex-row gap-4">
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
            Explore Analytics Dashboard
          </Link>
        </section>
      </div>
    </div>
  );
}
