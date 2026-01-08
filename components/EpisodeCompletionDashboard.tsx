'use client';

import { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Mock data for episode completion rates
const episodeCompletionData = [
  { episode: 'Ep 124', title: 'Viral Moment', completion: 72, listens: 2340 },
  { episode: 'Ep 123', title: 'Interview', completion: 68, listens: 1890 },
  { episode: 'Ep 122', title: 'Trending Topic', completion: 65, listens: 1650 },
  { episode: 'Ep 121', title: 'Series Finale', completion: 62, listens: 1420 },
  { episode: 'Ep 120', title: 'Deep Dive', completion: 58, listens: 1280 },
  { episode: 'Ep 119', title: 'Quick Tips', completion: 71, listens: 2100 },
  { episode: 'Ep 118', title: 'Guest Story', completion: 69, listens: 1950 },
  { episode: 'Ep 117', title: 'Case Study', completion: 64, listens: 1750 },
];

export function EpisodeCompletionDashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-spotify-text mb-4">Episode Completion Rate Analysis</h3>
        <div className="w-full h-[400px] flex items-center justify-center text-spotify-text-muted">
          Loading chart...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6 mb-8">
      <h3 className="text-xl font-semibold text-spotify-text mb-4">Episode Completion Rate Analysis</h3>
      
      {/* Completion Rate Trend Chart */}
      <div className="mb-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={episodeCompletionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#535353" />
            <XAxis 
              dataKey="episode" 
              stroke="#B3B3B3"
              tick={{ fill: '#B3B3B3' }}
            />
            <YAxis 
              stroke="#B3B3B3"
              tick={{ fill: '#B3B3B3' }}
              domain={[0, 100]}
              label={{ value: 'Completion %', angle: -90, position: 'insideLeft', fill: '#B3B3B3' }}
            />
            <Tooltip
              contentStyle={{ 
                backgroundColor: '#212121', 
                border: '1px solid #535353', 
                borderRadius: '8px',
                color: '#FFFFFF'
              }}
              labelStyle={{ color: '#FFFFFF' }}
              formatter={(value: number) => [`${value}%`, 'Completion Rate']}
            />
            <Line 
              type="monotone" 
              dataKey="completion" 
              stroke="#1DB954" 
              strokeWidth={2} 
              dot={{ fill: '#1DB954', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Completion vs Listens Comparison */}
      <div className="mb-4">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={episodeCompletionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#535353" />
            <XAxis 
              dataKey="episode" 
              stroke="#B3B3B3"
              tick={{ fill: '#B3B3B3' }}
            />
            <YAxis 
              yAxisId="left"
              stroke="#B3B3B3"
              tick={{ fill: '#B3B3B3' }}
              label={{ value: 'Completion %', angle: -90, position: 'insideLeft', fill: '#B3B3B3' }}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              stroke="#8B5CF6"
              tick={{ fill: '#8B5CF6' }}
              label={{ value: 'Listens', angle: 90, position: 'insideRight', fill: '#8B5CF6' }}
            />
            <Tooltip
              contentStyle={{ 
                backgroundColor: '#212121', 
                border: '1px solid #535353', 
                borderRadius: '8px',
                color: '#FFFFFF'
              }}
              labelStyle={{ color: '#FFFFFF' }}
            />
            <Legend 
              wrapperStyle={{ color: '#B3B3B3' }}
            />
            <Bar 
              yAxisId="left"
              dataKey="completion" 
              fill="#1DB954" 
              name="Completion %"
            />
            <Bar 
              yAxisId="right"
              dataKey="listens" 
              fill="#8B5CF6" 
              name="Total Listens"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Insight */}
      <p className="text-xs text-spotify-text-muted mt-4 italic">
        💡 Insight: Episodes with completion rates above 70% (Ep 124, Ep 119) generate 2.3x more engagement and 35% higher retention. The trending topic format (Ep 122) shows strong initial listens but lower completion. Consider optimizing episode length and pacing for episodes below 65% completion to improve overall engagement.
      </p>
    </div>
  );
}

