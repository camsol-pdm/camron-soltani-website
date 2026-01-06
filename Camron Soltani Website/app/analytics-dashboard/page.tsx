'use client';

import { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  ComposedChart,
  FunnelChart,
  Funnel,
  LabelList,
} from 'recharts';

const COLORS = ['#1DB954', '#B3B3B3', '#535353', '#212121', '#FFFFFF', '#8B5CF6'];

// Mock data for Overview
const listenerTrendData = [
  { date: 'Nov 4', listeners: 10200 },
  { date: 'Nov 11', listeners: 10800 },
  { date: 'Nov 18', listeners: 11200 },
  { date: 'Nov 25', listeners: 11800 },
  { date: 'Dec 2', listeners: 12200 },
  { date: 'Dec 9', listeners: 12400 },
];

const topEpisodesData = [
  { episode: 'Viral Moment ep124', listens: 2340, duration: '4:45', completion: 72 },
  { episode: 'Interview ep123', listens: 1890, duration: '4:20', completion: 68 },
  { episode: 'Trending Topic ep122', listens: 1650, duration: '3:50', completion: 65 },
  { episode: 'Series Finale ep121', listens: 1420, duration: '4:10', completion: 62 },
  { episode: 'Deep Dive ep120', listens: 1280, duration: '3:30', completion: 58 },
];

// SECTION 1: REACH & DISCOVERY DATA
const impressionsCTRFunnelData = [
  { name: 'Impressions', value: 238000, fill: '#1DB954' },
  { name: 'Clicks', value: 12400, fill: '#8B5CF6' },
  { name: 'Plays', value: 8920, fill: '#B3B3B3' },
];

const trafficSourceData = [
  { name: 'Spotify Home (Browse)', value: 35, listeners: 4340, type: 'Discovery' },
  { name: 'Spotify Search', value: 28, listeners: 3472, type: 'Intent' },
  { name: 'Library (Subscribers)', value: 18, listeners: 2232, type: 'Intent' },
  { name: 'External', value: 12, listeners: 1488, type: 'External' },
  { name: 'Algorithmic Suggested', value: 7, listeners: 868, type: 'Discovery' },
];

const newVsReturningData = [
  { date: 'Nov 4', new: 4200, returning: 6000, velocity: 0.70 },
  { date: 'Nov 11', new: 4500, returning: 6300, velocity: 0.71 },
  { date: 'Nov 18', new: 4800, returning: 6400, velocity: 0.75 },
  { date: 'Nov 25', new: 5100, returning: 6700, velocity: 0.76 },
  { date: 'Dec 2', new: 5200, returning: 7000, velocity: 0.74 },
  { date: 'Dec 9', new: 5400, returning: 7000, velocity: 0.77 },
];

const seoKeywordsData = [
  { keyword: 'true crime', searches: 12400, listeners: 892, rank: 3, traffic: 7.2 },
  { keyword: 'podcast', searches: 8900, listeners: 445, rank: 5, traffic: 5.0 },
  { keyword: 'mystery', searches: 5600, listeners: 280, rank: 8, traffic: 5.0 },
  { keyword: 'investigation', searches: 3400, listeners: 170, rank: 12, traffic: 5.0 },
  { keyword: 'unsolved', searches: 2800, listeners: 140, rank: 15, traffic: 5.0 },
];

// SECTION 2: ENGAGEMENT & RETENTION DATA
const retentionCurveData = [
  { time: '0:00', retention: 100, timestamp: 0 },
  { time: '0:15', retention: 98, timestamp: 15 },
  { time: '0:30', retention: 95, timestamp: 30 },
  { time: '1:00', retention: 91, timestamp: 60 },
  { time: '2:00', retention: 85, timestamp: 120 },
  { time: '4:00', retention: 78, timestamp: 240 },
  { time: '6:00', retention: 72, timestamp: 360 },
  { time: '8:00', retention: 68, timestamp: 480 },
  { time: '10:00', retention: 65, timestamp: 600 },
  { time: '15:00', retention: 58, timestamp: 900 },
  { time: '20:00', retention: 52, timestamp: 1200 },
  { time: '28:00', retention: 45, timestamp: 1680 },
];

const streamsVsStartsData = [
  { episode: 'Ep 124', starts: 2340, streams: 1890, ratio: 80.8 },
  { episode: 'Ep 123', starts: 1890, streams: 1650, ratio: 87.3 },
  { episode: 'Ep 122', starts: 1650, streams: 1420, ratio: 86.1 },
  { episode: 'Ep 121', starts: 1420, streams: 1180, ratio: 83.1 },
  { episode: 'Ep 120', starts: 1280, streams: 1050, ratio: 82.0 },
];

const engagementVelocityData = [
  { episode: 'Ep 124', current: 12.5, baseline: 8.2 },
  { episode: 'Ep 123', current: 9.8, baseline: 8.2 },
  { episode: 'Ep 122', current: 7.5, baseline: 8.2 },
  { episode: 'Ep 121', current: 6.2, baseline: 8.2 },
  { episode: 'Ep 120', current: 5.8, baseline: 8.2 },
];

// SECTION 3: AUDIENCE INTELLIGENCE DATA
const whatElseTheyWatchData = [
  { show: 'Crime Junkie', overlap: 45, totalListeners: 120000, untapped: 66000, category: 'True Crime' },
  { show: 'Dateline', overlap: 38, totalListeners: 95000, untapped: 58900, category: 'True Crime' },
  { show: 'My Favorite Murder', overlap: 32, totalListeners: 180000, untapped: 122400, category: 'True Crime' },
  { show: 'Serial', overlap: 28, totalListeners: 150000, untapped: 108000, category: 'True Crime' },
  { show: 'Tech Talk Daily', overlap: 15, totalListeners: 85000, untapped: 72250, category: 'Tech' },
];

const listeningHoursHeatmap = [
  { hour: '6 AM', Mon: 120, Tue: 145, Wed: 130, Thu: 150, Fri: 140, Sat: 80, Sun: 90 },
  { hour: '9 AM', Mon: 450, Tue: 480, Wed: 460, Thu: 490, Fri: 470, Sat: 200, Sun: 220 },
  { hour: '12 PM', Mon: 380, Tue: 400, Wed: 390, Thu: 410, Fri: 395, Sat: 250, Sun: 270 },
  { hour: '3 PM', Mon: 520, Tue: 550, Wed: 540, Thu: 560, Fri: 545, Sat: 320, Sun: 340 },
  { hour: '6 PM', Mon: 680, Tue: 720, Wed: 700, Thu: 740, Fri: 710, Sat: 450, Sun: 480 },
  { hour: '9 PM', Mon: 420, Tue: 450, Wed: 430, Thu: 470, Fri: 440, Sat: 380, Sun: 400 },
];

const loyaltyCohortsData = [
  { cohort: 'Nov 2024', m1: 100, m2: 68, m3: 52, m6: 38, m12: 28 },
  { cohort: 'Oct 2024', m1: 100, m2: 72, m3: 58, m6: 42, m12: 32 },
  { cohort: 'Sep 2024', m1: 100, m2: 75, m3: 62, m6: 48, m12: 35 },
  { cohort: 'Aug 2024', m1: 100, m2: 78, m3: 65, m6: 52, m12: 40 },
];

// SECTION 4: AI INSIGHTS DATA
const patternRecognitionData = [
  { pattern: "Episodes with 'Guest Name' in title", performance: '+30%', metric: 'CTR', episodes: ['Ep 123', 'Ep 118', 'Ep 115'] },
  { pattern: "Tuesday 8 AM publish time", performance: '+40%', metric: 'First-week listeners', episodes: ['Ep 124', 'Ep 121', 'Ep 118'] },
  { pattern: "Interview format", performance: '+35%', metric: 'LTR', episodes: ['Ep 123', 'Ep 120', 'Ep 117'] },
];

const contentGapData = [
  { topic: 'AI Tools', volume: 'High', competition: 'Low', opportunity: 'High', searches: 12400 },
  { topic: 'Cold Cases', volume: 'Medium', competition: 'Medium', opportunity: 'Medium', searches: 5600 },
  { topic: 'Remote Work', volume: 'High', competition: 'High', opportunity: 'Low', searches: 8900 },
];

// SECTION 5: MONETIZATION DATA
const rpmTrendData = [
  { month: 'Sep', rpm: 2.4, benchmark: 2.8 },
  { month: 'Oct', rpm: 2.6, benchmark: 2.8 },
  { month: 'Nov', rpm: 2.8, benchmark: 2.8 },
  { month: 'Dec', rpm: 3.1, benchmark: 2.8 },
];

const adInsertionZones = [
  { timestamp: '2:00', retention: 95, hasAd: false, zone: 'green' },
  { timestamp: '5:00', retention: 88, hasAd: false, zone: 'green' },
  { timestamp: '8:00', retention: 82, hasAd: true, zone: 'green' },
  { timestamp: '12:00', retention: 75, hasAd: false, zone: 'green' },
  { timestamp: '15:00', retention: 65, hasAd: false, zone: 'yellow' },
  { timestamp: '20:00', retention: 55, hasAd: false, zone: 'red' },
];

const subscriberFunnelDetailed = [
  { stage: 'Listeners', value: 12400, conversion: 100 },
  { stage: 'Profile Visit', value: 8920, conversion: 71.9 },
  { stage: 'Interested', value: 4450, conversion: 35.9 },
  { stage: 'Subscribed', value: 890, conversion: 7.2 },
];

const revenueData = [
  { category: 'Ads Earned', value: 2400 },
  { category: 'Subscriptions', value: 890 },
  { category: 'Unfilled Ad Slots', value: -1200 },
  { category: 'Skipped Mid-rolls', value: -800 },
];

export default function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [excludeExternal, setExcludeExternal] = useState(false);
  const [selectedEpisode, setSelectedEpisode] = useState('Ep 124');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'reach', label: 'Reach & Discovery' },
    { id: 'engagement', label: 'Engagement & Retention' },
    { id: 'audience', label: 'Audience Intelligence' },
    { id: 'insights', label: 'AI Insights & Actions' },
    { id: 'monetization', label: 'Monetization' },
  ];

  // Filter traffic sources based on toggle
  const filteredTrafficSourceData = excludeExternal 
    ? trafficSourceData.filter(source => source.type !== 'External')
    : trafficSourceData;

  // Calculate CTR from funnel data
  const ctr = ((impressionsCTRFunnelData[1].value / impressionsCTRFunnelData[0].value) * 100).toFixed(2);
  const playRate = ((impressionsCTRFunnelData[2].value / impressionsCTRFunnelData[1].value) * 100).toFixed(2);

  return (
    <div className="min-h-screen bg-spotify-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-spotify-text mb-4">Analytics Dashboard</h1>
        <p className="text-xl text-spotify-text-muted mb-8">
          Interactive prototype of Spotify's podcast creator analytics dashboard
        </p>

        {/* Tab Navigation */}
        <div className="border-b border-spotify-neutral mb-8">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'text-spotify-green border-b-2 border-spotify-green'
                    : 'text-spotify-text-muted hover:text-spotify-text'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
                <p className="text-sm text-spotify-text-muted mb-1">Total Listeners (28-day)</p>
                <p className="text-3xl font-bold text-spotify-text">12,400</p>
                <p className="text-xs text-spotify-green mt-1">△ +2.1% vs avg</p>
                <span className="text-green-500">✅</span>
              </div>
              <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
                <p className="text-sm text-spotify-text-muted mb-1">Watch Time (hours)</p>
                <p className="text-3xl font-bold text-spotify-text">3,420</p>
                <p className="text-xs text-spotify-green mt-1">△ +8% vs avg</p>
                <span className="text-green-500">✅</span>
              </div>
              <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
                <p className="text-sm text-spotify-text-muted mb-1">CTR</p>
                <p className="text-3xl font-bold text-spotify-text">5.2%</p>
                <p className="text-xs text-spotify-text-muted mt-1">△ -0.3% vs avg</p>
                <span className="text-yellow-500">ℹ️</span>
              </div>
              <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
                <p className="text-sm text-spotify-text-muted mb-1">Avg Listen Duration</p>
                <p className="text-3xl font-bold text-spotify-text">4m 22s</p>
                <p className="text-xs text-spotify-green mt-1">△ +18s vs avg</p>
                <span className="text-green-500">✅</span>
              </div>
              <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
                <p className="text-sm text-spotify-text-muted mb-1">Subscribers</p>
                <p className="text-3xl font-bold text-spotify-text">890</p>
                <p className="text-xs text-spotify-green mt-1">△ +12% vs avg</p>
                <span className="text-green-500">✅</span>
              </div>
            </div>

            {/* Trend Chart */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-4">Listener Trend (28 days)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={listenerTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#535353" />
                  <XAxis dataKey="date" stroke="#B3B3B3" />
                  <YAxis stroke="#B3B3B3" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#212121', border: '1px solid #535353', borderRadius: '8px' }}
                    labelStyle={{ color: '#FFFFFF' }}
                  />
                  <Line type="monotone" dataKey="listeners" stroke="#1DB954" strokeWidth={2} dot={{ fill: '#1DB954' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Top Episodes */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-4">Top Episodes (30d)</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-spotify-neutral">
                      <th className="text-left py-2 text-spotify-text-muted">Episode</th>
                      <th className="text-right py-2 text-spotify-text-muted">Listens</th>
                      <th className="text-right py-2 text-spotify-text-muted">Avg Duration</th>
                      <th className="text-right py-2 text-spotify-text-muted">Completion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topEpisodesData.map((ep, idx) => (
                      <tr key={idx} className="border-b border-spotify-neutral">
                        <td className="py-2 text-spotify-text">{ep.episode}</td>
                        <td className="text-right py-2 text-spotify-text">{ep.listens.toLocaleString()}</td>
                        <td className="text-right py-2 text-spotify-text">{ep.duration}</td>
                        <td className="text-right py-2 text-spotify-green">{ep.completion}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 1: Reach & Discovery Tab */}
        {activeTab === 'reach' && (
          <div className="space-y-8">
            {/* Metric 1: Impressions vs. CTR Funnel */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-4">Impressions vs. CTR (Click-Through Rate)</h3>
              <div className="mb-4">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-spotify-dark border border-spotify-neutral rounded-lg p-4">
                    <p className="text-sm text-spotify-text-muted mb-1">Impressions</p>
                    <p className="text-2xl font-bold text-spotify-text">238,000</p>
                    <p className="text-xs text-spotify-text-muted mt-1">Artwork rendered on screen</p>
                  </div>
                  <div className="bg-spotify-dark border border-spotify-neutral rounded-lg p-4">
                    <p className="text-sm text-spotify-text-muted mb-1">Clicks</p>
                    <p className="text-2xl font-bold text-spotify-text">12,400</p>
                    <p className="text-xs text-spotify-green mt-1">CTR: {ctr}%</p>
                  </div>
                  <div className="bg-spotify-dark border border-spotify-neutral rounded-lg p-4">
                    <p className="text-sm text-spotify-text-muted mb-1">Plays</p>
                    <p className="text-2xl font-bold text-spotify-text">8,920</p>
                    <p className="text-xs text-spotify-green mt-1">Play Rate: {playRate}%</p>
                  </div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={impressionsCTRFunnelData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#535353" />
                  <XAxis type="number" stroke="#B3B3B3" />
                  <YAxis dataKey="name" type="category" stroke="#B3B3B3" width={120} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#212121', border: '1px solid #535353', borderRadius: '8px' }}
                    formatter={(value: number, name: string, props: any) => {
                      const prevValue = name === 'Clicks' ? impressionsCTRFunnelData[0].value : impressionsCTRFunnelData[1].value;
                      const conversion = ((value / prevValue) * 100).toFixed(1);
                      return [`${value.toLocaleString()} (${conversion}% conversion)`, name];
                    }}
                  />
                  <Bar dataKey="value" fill="#1DB954" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Metric 2: Traffic Source Attribution */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-spotify-text">Traffic Source Attribution</h3>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={excludeExternal}
                    onChange={(e) => setExcludeExternal(e.target.checked)}
                    className="mr-2 w-4 h-4 text-spotify-green"
                  />
                  <span className="text-sm text-spotify-text-muted">Exclude External</span>
                </label>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={filteredTrafficSourceData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name.split(' ')[0]} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {filteredTrafficSourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: '#212121', border: '1px solid #535353', borderRadius: '8px' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-3">
                  {filteredTrafficSourceData.map((source, idx) => (
                    <div key={idx} className="bg-spotify-dark border border-spotify-neutral rounded p-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-spotify-text font-semibold">{source.name}</span>
                        <span className="text-spotify-green">{source.value}%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-spotify-text-muted">{source.listeners.toLocaleString()} listeners</span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          source.type === 'Intent' ? 'bg-blue-500/20 text-blue-400' :
                          source.type === 'Discovery' ? 'bg-spotify-green/20 text-spotify-green' :
                          'bg-spotify-text-muted/20 text-spotify-text-muted'
                        }`}>
                          {source.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Metric 3: New vs. Returning Listeners */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-4">New vs. Returning Listeners</h3>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={newVsReturningData}>
                  <defs>
                    <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1DB954" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#1DB954" stopOpacity={0.2} />
                    </linearGradient>
                    <linearGradient id="colorReturning" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#B3B3B3" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#B3B3B3" stopOpacity={0.2} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#535353" />
                  <XAxis dataKey="date" stroke="#B3B3B3" />
                  <YAxis stroke="#B3B3B3" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#212121', border: '1px solid #535353', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Bar dataKey="new" stackId="1" fill="url(#colorNew)" name="New" />
                  <Bar dataKey="returning" stackId="1" fill="url(#colorReturning)" name="Returning" />
                  <Line type="monotone" dataKey="velocity" stroke="#FFFFFF" strokeWidth={2} name="Velocity Trend" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Metric 4: SEO Keyword Ranking */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-4">SEO Keyword Ranking</h3>
              <div className="mb-4 p-4 bg-spotify-dark rounded-lg border border-spotify-neutral">
                <p className="text-sm text-spotify-text-muted mb-2">Word Cloud Visualization</p>
                <div className="flex flex-wrap gap-2">
                  {seoKeywordsData.map((kw, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm font-semibold"
                      style={{
                        backgroundColor: `rgba(29, 185, 84, ${0.2 + (kw.traffic / 10) * 0.3})`,
                        color: '#1DB954',
                        fontSize: `${12 + kw.traffic / 200}px`,
                      }}
                    >
                      {kw.keyword}
                    </span>
                  ))}
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-spotify-neutral">
                      <th className="text-left py-2 text-spotify-text-muted">Keyword</th>
                      <th className="text-right py-2 text-spotify-text-muted">Search Volume</th>
                      <th className="text-right py-2 text-spotify-text-muted">Your Rank</th>
                      <th className="text-right py-2 text-spotify-text-muted">Traffic Generated</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seoKeywordsData.map((kw, idx) => (
                      <tr key={idx} className="border-b border-spotify-neutral">
                        <td className="py-2 text-spotify-text font-semibold">{kw.keyword}</td>
                        <td className="text-right py-2 text-spotify-text">{kw.searches.toLocaleString()}</td>
                        <td className="text-right py-2">
                          <span className={`font-semibold ${
                            kw.rank <= 5 ? 'text-spotify-green' :
                            kw.rank <= 10 ? 'text-yellow-500' :
                            'text-spotify-text-muted'
                          }`}>
                            #{kw.rank}
                          </span>
                        </td>
                        <td className="text-right py-2 text-spotify-green">{kw.listeners} listeners</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 2: Engagement & Retention Tab */}
        {activeTab === 'engagement' && (
          <div className="space-y-8">
            {/* Metric 1: Average Percentage Viewed (APV) */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-4">Average Percentage Viewed (APV)</h3>
              <div className="text-center mb-4">
                <p className="text-6xl font-bold text-spotify-green mb-2">67%</p>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-green-500 text-2xl">▲</span>
                  <p className="text-spotify-text-muted">+5% vs. previous 10 episodes</p>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 max-w-md mx-auto">
                  <div className="bg-spotify-dark border border-spotify-green rounded-lg p-3">
                    <p className="text-xs text-spotify-text-muted mb-1">Benchmark</p>
                    <p className="text-lg font-semibold text-spotify-text">&gt;70% = High</p>
                  </div>
                  <div className="bg-spotify-dark border border-yellow-500 rounded-lg p-3">
                    <p className="text-xs text-spotify-text-muted mb-1">Your Status</p>
                    <p className="text-lg font-semibold text-spotify-text">67% = Good</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Metric 2: True Retention Curve */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-spotify-text">True Retention Curve (Scrubbable)</h3>
                <select
                  value={selectedEpisode}
                  onChange={(e) => setSelectedEpisode(e.target.value)}
                  className="bg-spotify-dark border border-spotify-neutral rounded px-4 py-2 text-spotify-text text-sm"
                >
                  <option value="Ep 124">Ep 124</option>
                  <option value="Ep 123">Ep 123</option>
                  <option value="Ep 122">Ep 122</option>
                </select>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={retentionCurveData}>
                  <defs>
                    <linearGradient id="colorRetention" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1DB954" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#1DB954" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#535353" />
                  <XAxis dataKey="time" stroke="#B3B3B3" />
                  <YAxis stroke="#B3B3B3" domain={[0, 100]} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#212121', border: '1px solid #535353', borderRadius: '8px' }}
                    labelStyle={{ color: '#FFFFFF' }}
                    formatter={(value: number) => [`${value}% retention`, 'Retention']}
                  />
                  <Area
                    type="monotone"
                    dataKey="retention"
                    stroke="#1DB954"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorRetention)"
                    name="Retention %"
                  />
                </AreaChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                <div className="bg-spotify-dark border-l-4 border-red-500 p-3 rounded">
                  <p className="text-sm text-spotify-text-muted">
                    <strong className="text-spotify-text">🔴 DIP at 0:00-1:00:</strong> Intro drop-off (100% → 91%). Best performers average 98% at 1:00. Test shorter intro → expected +7% retention.
                  </p>
                </div>
                <div className="bg-spotify-dark border-l-4 border-spotify-green p-3 rounded">
                  <p className="text-sm text-spotify-text-muted">
                    <strong className="text-spotify-text">✅ SPIKE at 8:00:</strong> Strong moment (68% retention). Consider using this segment for Shorts preview.
                  </p>
                </div>
              </div>
            </div>

            {/* Metric 3: Streams vs. Starts Ratio */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-4">Streams vs. Starts Ratio</h3>
              <p className="text-sm text-spotify-text-muted mb-4">
                Starts: Play duration &gt; 0s | Streams: Play duration &gt; 60s (Quality Plays)
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={streamsVsStartsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#535353" />
                  <XAxis dataKey="episode" stroke="#B3B3B3" />
                  <YAxis stroke="#B3B3B3" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#212121', border: '1px solid #535353', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Bar dataKey="starts" fill="#535353" name="Starts" />
                  <Bar dataKey="streams" fill="#1DB954" name="Streams (&gt;60s)" />
                  <Line type="monotone" dataKey="ratio" stroke="#FFFFFF" strokeWidth={2} name="Ratio %" yAxisId="right" />
                  <YAxis yAxisId="right" orientation="right" stroke="#B3B3B3" domain={[0, 100]} />
                </ComposedChart>
              </ResponsiveContainer>
              <div className="mt-4 text-center">
                <p className="text-sm text-spotify-text-muted">
                  Average Ratio: <span className="text-spotify-green font-semibold">83.9%</span> (Quality Play Rate)
                </p>
              </div>
            </div>

            {/* Metric 4: Engagement Velocity */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-4">Engagement Velocity</h3>
              <p className="text-sm text-spotify-text-muted mb-4">
                Sum of (Saves + Shares + Follows) per 1,000 starts in first 24 hours
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={engagementVelocityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#535353" />
                  <XAxis dataKey="episode" stroke="#B3B3B3" />
                  <YAxis stroke="#B3B3B3" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#212121', border: '1px solid #535353', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Bar dataKey="current" fill="#1DB954" name="Current Episode" />
                  <Line type="monotone" dataKey="baseline" stroke="#B3B3B3" strokeWidth={2} strokeDasharray="5 5" name="Historical Baseline" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* SECTION 3: Audience Intelligence Tab */}
        {activeTab === 'audience' && (
          <div className="space-y-8">
            {/* Metric 1: What Else They Watch/Listen To */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-4">What Else Your Audience Watches/Listens To</h3>
              <div className="mb-4 p-4 bg-spotify-dark rounded-lg border border-spotify-neutral">
                <p className="text-sm text-spotify-text-muted mb-2">Your audience also likes:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-spotify-green/20 text-spotify-green rounded-full text-sm font-semibold">True Crime</span>
                  <span className="px-3 py-1 bg-spotify-green/20 text-spotify-green rounded-full text-sm font-semibold">Tech</span>
                  <span className="px-3 py-1 bg-spotify-green/20 text-spotify-green rounded-full text-sm font-semibold">Investigation</span>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {whatElseTheyWatchData.map((show, idx) => (
                  <div key={idx} className="bg-spotify-dark border border-spotify-neutral rounded-lg p-4">
                    <div className="w-16 h-16 bg-spotify-green/20 rounded-lg mb-3 flex items-center justify-center">
                      <svg className="w-8 h-8 text-spotify-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-spotify-text mb-2">{show.show}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-spotify-text-muted">Overlap</span>
                        <span className="text-spotify-text font-semibold">{show.overlap}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-spotify-text-muted">Total Listeners</span>
                        <span className="text-spotify-text">{show.totalListeners.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-spotify-text-muted">Untapped</span>
                        <span className="text-spotify-green font-semibold">{show.untapped.toLocaleString()}</span>
                      </div>
                      <button className="w-full mt-3 text-sm text-spotify-green font-semibold hover:underline text-center">
                        Explore Collaboration →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metric 2: Active Listening Hours Heatmap */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-4">Active Listening Hours (Time-of-Day Heatmap)</h3>
              <div className="grid grid-cols-8 gap-2 mb-4">
                <div className="text-center text-sm text-spotify-text-muted font-semibold">Hour</div>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <div key={day} className="text-center text-sm text-spotify-text-muted font-semibold">{day}</div>
                ))}
              </div>
              <div className="space-y-2">
                {listeningHoursHeatmap.map((row, idx) => {
                  const maxValue = Math.max(...Object.values(row).filter(v => typeof v === 'number') as number[]);
                  return (
                    <div key={idx} className="grid grid-cols-8 gap-2">
                      <div className="text-sm text-spotify-text-muted self-center">{row.hour}</div>
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => {
                        const value = row[day as keyof typeof row] as number;
                        const intensity = value / maxValue;
                        return (
                          <div
                            key={day}
                            className="h-10 rounded border border-spotify-neutral flex items-center justify-center text-xs text-spotify-text font-semibold"
                            style={{ backgroundColor: `rgba(29, 185, 84, ${intensity * 0.6})` }}
                          >
                            {value}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 p-4 bg-spotify-dark border border-spotify-green rounded-lg">
                <p className="text-sm text-spotify-text-muted">
                  <strong className="text-spotify-text">💡 Highest potential impact:</strong> Publish on Tuesdays at 6 PM (720 listeners peak). Secondary: Weekday afternoons 3-6 PM.
                </p>
              </div>
            </div>

            {/* Metric 3: Loyalty Index (Cohort Analysis) */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-4">Loyalty Index (Cohort Analysis)</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-spotify-neutral">
                      <th className="text-left py-2 text-spotify-text-muted">Cohort</th>
                      <th className="text-right py-2 text-spotify-text-muted">Month 1</th>
                      <th className="text-right py-2 text-spotify-text-muted">Month 2</th>
                      <th className="text-right py-2 text-spotify-text-muted">Month 3</th>
                      <th className="text-right py-2 text-spotify-text-muted">Month 6</th>
                      <th className="text-right py-2 text-spotify-text-muted">Month 12</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loyaltyCohortsData.map((cohort, idx) => (
                      <tr key={idx} className="border-b border-spotify-neutral">
                        <td className="py-2 text-spotify-text font-semibold">{cohort.cohort}</td>
                        <td className="text-right py-2 text-spotify-text">{cohort.m1}%</td>
                        <td className="text-right py-2 text-spotify-green">{cohort.m2}%</td>
                        <td className="text-right py-2 text-spotify-green">{cohort.m3}%</td>
                        <td className="text-right py-2 text-spotify-green">{cohort.m6}%</td>
                        <td className="text-right py-2 text-spotify-green">{cohort.m12}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 4: AI Insights & Actions Tab */}
        {activeTab === 'insights' && (
          <div className="space-y-8">
            {/* Feature 1: Pattern Recognition Engine */}
            <div className="bg-spotify-dark-secondary border border-spotify-green rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-4">Pattern Recognition Engine</h3>
              <div className="space-y-4">
                {patternRecognitionData.map((pattern, idx) => (
                  <div key={idx} className="bg-spotify-dark border border-spotify-neutral rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-spotify-text mb-1">{pattern.pattern}</h4>
                        <p className="text-sm text-spotify-text-muted">
                          Performs <span className="text-spotify-green font-semibold">{pattern.performance}</span> better on <strong>{pattern.metric}</strong>
                        </p>
                      </div>
                      <button className="text-sm text-spotify-green font-semibold hover:underline whitespace-nowrap ml-4">
                        Verify Data →
                      </button>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {pattern.episodes.map((ep, epIdx) => (
                        <span key={epIdx} className="text-xs px-2 py-1 bg-spotify-green/20 text-spotify-green rounded">
                          {ep}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature 2: Predictive Growth Simulator */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-4">Predictive Growth Simulator</h3>
              <div className="bg-spotify-dark border border-spotify-neutral rounded-lg p-6">
                <div className="mb-4">
                  <p className="text-spotify-text-muted mb-2">Current Growth Rate: <span className="text-spotify-green font-semibold">+12 subscribers/day</span></p>
                  <div className="w-full bg-spotify-dark-secondary rounded-full h-4 mb-2">
                    <div className="bg-spotify-green h-4 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                  <p className="text-sm text-spotify-text-muted">On track to hit <span className="text-spotify-green font-semibold">10K Followers by Nov 12th</span></p>
                </div>
                <div className="mt-6">
                  <label className="block text-sm text-spotify-text-muted mb-2">
                    Simulate Scenario: If I increase posting frequency by
                    <input
                      type="range"
                      min="1"
                      max="3"
                      step="0.5"
                      defaultValue="2"
                      className="mx-2 w-32"
                    />
                    <span className="text-spotify-text font-semibold">2x</span>
                  </label>
                  <div className="mt-4 p-4 bg-spotify-dark-secondary rounded-lg">
                    <p className="text-sm text-spotify-text-muted mb-2">Projected Impact:</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-xs text-spotify-text-muted">New Timeline</p>
                        <p className="text-xl font-bold text-spotify-green">Nov 5th</p>
                        <p className="text-xs text-spotify-text-muted">7 days earlier</p>
                      </div>
                      <div>
                        <p className="text-xs text-spotify-text-muted">Subscribers/Day</p>
                        <p className="text-xl font-bold text-spotify-green">24</p>
                        <p className="text-xs text-spotify-text-muted">+100% increase</p>
                      </div>
                      <div>
                        <p className="text-xs text-spotify-text-muted">Total at 10K</p>
                        <p className="text-xl font-bold text-spotify-green">416 days</p>
                        <p className="text-xs text-spotify-text-muted">vs. 423 days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: Content Gap Analysis */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-4">Content Gap Analysis</h3>
              <p className="text-sm text-spotify-text-muted mb-4">Compare your topics vs. Rising Search Trends in your category</p>
              <div className="space-y-3">
                {contentGapData.map((topic, idx) => (
                  <div key={idx} className="bg-spotify-dark border border-spotify-neutral rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-spotify-text mb-1">
                          Trending Topic: <span className="text-spotify-green">"{topic.topic}"</span>
                        </h4>
                        <p className="text-sm text-spotify-text-muted">
                          Volume: <span className="text-spotify-text">{topic.volume}</span> | Competition: <span className="text-spotify-text">{topic.competition}</span> | Opportunity: <span className="text-spotify-green font-semibold">{topic.opportunity}</span>
                        </p>
                        <p className="text-sm text-spotify-text-muted mt-1">
                          {topic.searches.toLocaleString()} searches/month. <span className="text-yellow-500">You haven't covered this.</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature 4: Automated Optimization Checklists */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-4">Automated Optimization Checklists</h3>
              <div className="space-y-3">
                {topEpisodesData.slice(0, 3).map((ep, idx) => (
                  <div key={idx} className="bg-spotify-dark border border-spotify-neutral rounded-lg p-4">
                    <h4 className="font-semibold text-spotify-text mb-3">{ep.episode}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <span className="text-red-500 mr-2">✗</span>
                        <span className="text-sm text-spotify-text-muted">Title truncated on mobile? Yes</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-spotify-green mr-2">✓</span>
                        <span className="text-sm text-spotify-text-muted">Description missing links? No</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-spotify-green mr-2">✓</span>
                        <span className="text-sm text-spotify-text-muted">Artwork meets size requirements? Yes</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-red-500 mr-2">✗</span>
                        <span className="text-sm text-spotify-text-muted">Keywords optimized? No (missing 2 high-volume terms)</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SECTION 5: Monetization Tab */}
        {activeTab === 'monetization' && (
          <div className="space-y-8">
            {/* Metric 1: RPM Tracking */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-4">RPM (Revenue Per Mille)</h3>
              <p className="text-sm text-spotify-text-muted mb-4">Total Revenue (Ads + Subs) / (Total Plays / 1,000)</p>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={rpmTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#535353" />
                  <XAxis dataKey="month" stroke="#B3B3B3" />
                  <YAxis stroke="#B3B3B3" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#212121', border: '1px solid #535353', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Bar dataKey="rpm" fill="#1DB954" name="Your RPM" />
                  <Line type="monotone" dataKey="benchmark" stroke="#B3B3B3" strokeWidth={2} strokeDasharray="5 5" name="Genre Benchmark" />
                </ComposedChart>
              </ResponsiveContainer>
              <div className="mt-4 text-center">
                <p className="text-2xl font-bold text-spotify-green">$3.10 RPM</p>
                <p className="text-sm text-spotify-text-muted">vs. Genre Benchmark: $2.80</p>
                <span className="text-green-500">✅ +11% above benchmark</span>
              </div>
            </div>

            {/* Metric 2: Ad Insertion Opportunity */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-4">Ad Insertion Opportunity Map</h3>
              <p className="text-sm text-spotify-text-muted mb-4">Timestamps with High Retention (&gt;80%) that lack an Ad Marker</p>
              <div className="space-y-2">
                {adInsertionZones.map((zone, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-20 text-sm text-spotify-text font-semibold">{zone.timestamp}</div>
                    <div className="flex-1 relative h-8 bg-spotify-dark rounded border border-spotify-neutral">
                      <div
                        className={`h-full rounded ${
                          zone.zone === 'green' ? 'bg-spotify-green' :
                          zone.zone === 'yellow' ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${zone.retention}%` }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center text-xs text-spotify-text font-semibold">
                        {zone.retention}% retention
                      </div>
                    </div>
                    <div className="w-24 text-right">
                      {zone.hasAd ? (
                        <span className="text-xs text-spotify-green">✓ Ad placed</span>
                      ) : (
                        <span className="text-xs text-yellow-500">⚠ Opportunity</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-spotify-dark border border-spotify-green rounded-lg">
                <p className="text-sm text-spotify-text-muted">
                  <strong className="text-spotify-text">Recommendation:</strong> Add ad markers at 2:00, 5:00, and 12:00 (all &gt;80% retention, no current ads). Estimated revenue: +$180-240/month.
                </p>
              </div>
            </div>

            {/* Metric 3: Subscriber Conversion Funnel */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-4">Subscriber Conversion Funnel</h3>
              <p className="text-sm text-spotify-text-muted mb-4">Path from Listener → Profile Visit → Follow/Subscribe</p>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={subscriberFunnelDetailed} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#535353" />
                  <XAxis type="number" stroke="#B3B3B3" />
                  <YAxis dataKey="stage" type="category" stroke="#B3B3B3" width={140} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#212121', border: '1px solid #535353', borderRadius: '8px' }}
                    formatter={(value: number, name: string, props: any) => {
                      const conversion = props.payload.conversion;
                      return [`${value.toLocaleString()} (${conversion}%)`, name];
                    }}
                  />
                  <Bar dataKey="value" fill="#1DB954" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-4 gap-4 text-sm">
                {subscriberFunnelDetailed.map((stage, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-spotify-text-muted mb-1">{stage.stage}</p>
                    <p className="text-lg font-bold text-spotify-text">{stage.value.toLocaleString()}</p>
                    <p className="text-xs text-spotify-text-muted">{stage.conversion}%</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Metric 4: Estimated Revenue Lost */}
            <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6">
              <h3 className="text-xl font-semibold text-spotify-text mb-4">Estimated Revenue Lost</h3>
              <p className="text-sm text-spotify-text-muted mb-4">(Unfilled Ad Slots * Market CPM) + (Skipped Mid-rolls)</p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#535353" />
                  <XAxis type="number" stroke="#B3B3B3" />
                  <YAxis dataKey="category" type="category" stroke="#B3B3B3" width={180} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#212121', border: '1px solid #535353', borderRadius: '8px' }}
                    formatter={(value: number) => [`$${Math.abs(value).toLocaleString()}`, 'Revenue']}
                  />
                  <Bar dataKey="value" fill={(entry: any) => entry.value > 0 ? '#1DB954' : '#EF4444'} />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 p-4 bg-spotify-dark border border-yellow-500 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-spotify-text-muted mb-1">Current Revenue (Earned)</p>
                    <p className="text-2xl font-bold text-spotify-text">$3,290/month</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-spotify-text-muted mb-1">Potential Revenue (Lost)</p>
                    <p className="text-2xl font-bold text-red-500">-$2,000/month</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-spotify-neutral">
                  <p className="text-sm text-spotify-text-muted">
                    <strong className="text-spotify-text">Total Opportunity:</strong> $5,290/month if all ad slots filled and mid-rolls optimized.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
