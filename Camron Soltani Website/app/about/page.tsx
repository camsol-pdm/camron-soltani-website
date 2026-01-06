export default function About() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-spotify-text mb-4">About Camron</h1>
              <p className="text-xl text-spotify-text-muted mb-6">Product Manager | Creator Tools Enthusiast | Founder Mentality</p>
              <div className="prose prose-lg max-w-none">
                <p className="text-spotify-text-muted leading-relaxed">
                  I'm a Senior Product Manager with 8+ years at Fyxt, a commercial real estate software company, where I've driven strategic product initiatives from conception to scale. I combine founder's instinct, disciplined execution, and deep passion for solving complex problems that matter to real people.
                </p>
                <p className="text-spotify-text-muted leading-relaxed mt-4">
                  This belief—that great products solve real problems for real users—shapes everything I do.
                </p>
              </div>
            </div>
            <div className="md:col-span-1">
              {/* Subtle Avatar Placeholder */}
              <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-3 bg-spotify-green/20 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-spotify-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-xs text-spotify-text-muted italic">[AI Illustration: Stylized avatar/silhouette in Spotify color palette, abstract not realistic]</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Background */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-6">My Product Journey</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-spotify-text mb-4">Fyxt: 8+ Years of Strategic Product Innovation (2017–Present)</h3>
            <p className="text-spotify-text-muted leading-relaxed mb-4">
              I joined Fyxt as a QA Analyst (March 2018) when the company was early stage. Over the next 8 years, I evolved into Co-Founder & Product Manager (January 2020–present), wearing multiple hats and driving strategic initiatives end-to-end.
            </p>
            <ul className="list-disc list-inside space-y-2 text-spotify-text-muted mb-4">
              <li>Launched 15+ features achieving up to 86% user adoption in the first year.</li>
              <li>Led cross-functional product execution (engineering, design, QA) through full lifecycle: discovery, roadmap, execution, go-to-market, iteration.</li>
              <li>Conducted 100+ customer discovery interviews to uncover unmet needs and validate product hypotheses.</li>
              <li>Built metrics-driven culture: continuous KPI monitoring, A/B testing, user feedback incorporation.</li>
              <li>Orchestrated go-to-market execution, aligning sales, marketing, and customer success teams.</li>
              <li>Authored PRDs, user stories, and requirements that clarified ambiguity and enabled efficient team collaboration.</li>
            </ul>
            <p className="text-spotify-text-muted leading-relaxed">
              Fyxt taught me that product success isn't magic—it's disciplined user empathy, clear prioritization, and relentless execution.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-spotify-text mb-4">Pre-Fyxt: Building Diverse Experience (2017)</h3>
            <p className="text-spotify-text-muted leading-relaxed mb-2">
              Before Fyxt, I worked as a Marketing Consultant at Doctors To You, a healthcare startup, where I conducted market research, managed social media campaigns, and shaped go-to-market strategy for a growing telemedicine platform.
            </p>
            <p className="text-spotify-text-muted leading-relaxed">
              This experience taught me that marketing and product are inseparable; understanding audience needs shapes everything from positioning to feature design.
            </p>
          </div>
        </section>

        {/* Core Competencies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-6">What I Bring to a PM Role</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-text mb-3">Data-Driven Decision Making</h3>
              <p className="text-spotify-text-muted text-sm leading-relaxed">
                I don't believe in hunches. Every major decision is backed by metrics, user research, and competitive analysis. At Fyxt, I built KPI frameworks and A/B testing culture that became operational norms. At Spotify, I'd bring the same rigor: measure everything, iterate relentlessly, let data guide decisions.
              </p>
            </div>

            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-text mb-3">Cross-Functional Leadership</h3>
              <p className="text-spotify-text-muted text-sm leading-relaxed">
                I've collaborated deeply with engineering, design, QA, sales, marketing, and leadership teams. I excel at translating business goals into technical requirements and user needs into product specs. I facilitate tough conversations, build consensus, and empower teams to take ownership.
              </p>
            </div>

            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-text mb-3">Product Roadmap & Prioritization</h3>
              <p className="text-spotify-text-muted text-sm leading-relaxed">
                I've designed and executed roadmaps balancing short-term revenue with long-term strategic bets. I use frameworks (RICE: Reach, Impact, Confidence, Effort) to prioritize ruthlessly without losing sight of vision. I'm comfortable with uncertainty and ambiguity—inevitable in early-stage products—and learn to make decisions with incomplete information.
              </p>
            </div>

            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-text mb-3">User Advocacy & Empathy</h3>
              <p className="text-spotify-text-muted text-sm leading-relaxed">
                I've conducted 100+ customer interviews; I believe in spending time in users' shoes. I dig deeper than surface-level problems; I want to understand context, constraints, and hidden needs. At Spotify, I'd fight for creator needs and ensure every product decision serves both creators and the business.
              </p>
            </div>

            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-text mb-3">AI & Generative AI Proficiency</h3>
              <p className="text-spotify-text-muted text-sm leading-relaxed">
                I've integrated AI and LLMs into Fyxt workflows (content generation, internal tools, customer communication). I'm certified in AI Agents for Product Leaders—I understand both the potential and limitations of AI. I see AI as a multiplier of human productivity (clip generation, analytics interpretation, campaign automation), not a replacement.
              </p>
            </div>

            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-lg font-semibold text-spotify-text mb-3">Go-to-Market Strategy</h3>
              <p className="text-spotify-text-muted text-sm leading-relaxed">
                I've led product launches from concept to scale. I work closely with marketing and sales to define positioning, pricing, and launch messaging. I measure post-launch success rigorously and iterate based on real-world feedback.
              </p>
            </div>
          </div>
        </section>

        {/* Why Spotify */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-6">Why This Role Excites Me</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-spotify-text-muted leading-relaxed mb-4">
              I've been drawn to the creator economy for the past 3–4 years. I listen to 15+ podcasts per week, and I've noticed a clear pattern: the most innovative, best-quality creators are often the most frustrated with discovery, monetization, and analytics tools available to them.
            </p>
            <p className="text-spotify-text-muted leading-relaxed mb-4">
              Spotify is uniquely positioned. It has 678M logged-in users, a proven ads business, and genuine relationships with creators through Spotify for Creators. But the tools for podcast discovery, promotion, and creator growth still lag behind music—and significantly lag YouTube.
            </p>
            <p className="text-spotify-text-muted leading-relaxed mb-4">
              That gap is where I want to focus my energy. If I can help Spotify build a creator-first podcast growth engine that simplifies promotional planning, measurement, and optimization, it's not just about retention and revenue; it's about democratizing podcast creation and helping the next generation of storytellers build sustainable careers in audio.
            </p>
            <p className="text-spotify-text-muted leading-relaxed">
              At the intersection of product strategy, creator empathy, data-driven optimization, and AI integration—this is where I want to spend the next few years.
            </p>
          </div>
        </section>

        {/* Interests */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-spotify-text mb-6">Outside of Work</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-spotify-green pl-6">
              <h3 className="text-lg font-semibold text-spotify-text mb-2">Rockhounding & Geology</h3>
              <p className="text-spotify-text-muted leading-relaxed">
                I'm an avid rockhound with a collection of opals, agates, and rare specimens. I spend weekends exploring tide pools and rock formations in Palos Verdes, near my home in Redondo Beach, CA. There's something meditative about analyzing mineral structures, patterns, and geological formations—not unlike diagnosing product problems. Understanding <em>why</em> something behaves a certain way requires curiosity, patience, and attention to detail. The parallels to product thinking aren't lost on me.
              </p>
            </div>

            <div className="border-l-4 border-spotify-green pl-6">
              <h3 className="text-lg font-semibold text-spotify-text mb-2">Cooking & Food</h3>
              <p className="text-spotify-text-muted leading-relaxed">
                I love experimenting with recipes and specialty ingredients. Cooking is iterative—testing hypotheses, measuring results, and refining based on feedback. It's also a great way to unwind and be creative outside of work.
              </p>
            </div>

            <div className="border-l-4 border-spotify-green pl-6">
              <h3 className="text-lg font-semibold text-spotify-text mb-2">Star Trek</h3>
              <p className="text-spotify-text-muted leading-relaxed">
                I'm a lifelong Star Trek enthusiast. It's not just sci-fi; it's a thought experiment about how technology serves humanity. The show's core value—using innovation to solve problems and improve lives—aligns with how I think about product.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-spotify-dark-secondary p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-spotify-text mb-6">Let's Connect</h2>
          <div className="space-y-3 text-spotify-text-muted mb-6">
            <p>
              <strong className="text-spotify-text">Email:</strong> <a href="mailto:camronsoltani@gmail.com" className="text-spotify-green hover:underline">camronsoltani@gmail.com</a>
            </p>
            <p>
              <strong className="text-spotify-text">Phone:</strong> <a href="tel:+13016488023" className="text-spotify-green hover:underline">(301) 648-8023</a>
            </p>
            <p>
              <strong className="text-spotify-text">Location:</strong> Redondo Beach, CA 90277
            </p>
            <p>
              <strong className="text-spotify-text">Languages:</strong> English (Native/Bilingual), Persian (Professional)
            </p>
          </div>
          <p className="text-spotify-text-muted leading-relaxed">
            If you're exploring how to build next-generation creator tools at Spotify or beyond, I'd love to chat. I'm energized by hard problems, collaborative teams, and the belief that great products can improve people's lives.
          </p>
        </section>
      </div>
    </div>
  );
}
