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
  Cell,
} from 'recharts';

// Complete mock data with all 15 episodes and demographic affinity preferences
const mockEpisodes = [
  {
    episodeId: 'ep-01',
    title: 'Welcome to the Dark Side: True Crime Intro',
    publishedDate: new Date('2025-10-02'),
    duration: 35,
    overallCompletionRate: 69,
    affinityProfile: { narrativeDriven: 7, psychologicalDepth: 6, realWorldContext: 6, humor: 4, accessibility: 8, structuredFormat: 7, conversationalTone: 8 },
    completionByDemographic: [
      { demographic: 'Women (25-34)', totalListeners: 420, completionRate: 83, subscribersConverted: 42, dropOffPoints: [{ timestamp: 10, exitRate: 10 }, { timestamp: 23, exitRate: 12 }, { timestamp: 33, exitRate: 5 }] },
      { demographic: 'Women (18-24)', totalListeners: 350, completionRate: 79, subscribersConverted: 24, dropOffPoints: [{ timestamp: 13, exitRate: 13 }, { timestamp: 26, exitRate: 11 }] },
      { demographic: 'Men (25-34)', totalListeners: 250, completionRate: 70, subscribersConverted: 13, dropOffPoints: [{ timestamp: 15, exitRate: 16 }, { timestamp: 27, exitRate: 14 }] },
      { demographic: 'Men (18-24)', totalListeners: 215, completionRate: 66, subscribersConverted: 11, dropOffPoints: [{ timestamp: 11, exitRate: 19 }, { timestamp: 23, exitRate: 17 }] },
      { demographic: 'Women (35-44)', totalListeners: 155, completionRate: 62, subscribersConverted: 6, dropOffPoints: [{ timestamp: 17, exitRate: 23 }, { timestamp: 29, exitRate: 19 }] },
      { demographic: 'Men (35-44)', totalListeners: 132, completionRate: 65, subscribersConverted: 5, dropOffPoints: [{ timestamp: 13, exitRate: 21 }, { timestamp: 25, exitRate: 17 }] },
      { demographic: 'Age 45+', totalListeners: 118, completionRate: 55, subscribersConverted: 2, dropOffPoints: [{ timestamp: 19, exitRate: 30 }, { timestamp: 31, exitRate: 24 }] },
    ],
    demographicAffinityPreferences: {
      'Women (25-34)': { narrativeDriven: 9, psychologicalDepth: 9, realWorldContext: 8, humor: 4, accessibility: 6, structuredFormat: 5, conversationalTone: 8 },
      'Women (18-24)': { narrativeDriven: 9, psychologicalDepth: 8, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 5, conversationalTone: 8 },
      'Men (25-34)': { narrativeDriven: 7, psychologicalDepth: 7, realWorldContext: 7, humor: 7, accessibility: 6, structuredFormat: 7, conversationalTone: 6 },
      'Men (18-24)': { narrativeDriven: 7, psychologicalDepth: 6, realWorldContext: 6, humor: 8, accessibility: 7, structuredFormat: 6, conversationalTone: 6 },
      'Women (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 5, accessibility: 8, structuredFormat: 8, conversationalTone: 6 },
      'Men (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 8, conversationalTone: 6 },
      'Age 45+': { narrativeDriven: 5, psychologicalDepth: 5, realWorldContext: 7, humor: 5, accessibility: 9, structuredFormat: 9, conversationalTone: 5 },
    },
  },
  {
    episodeId: 'ep-02',
    title: 'Patterns in Chaos: How Criminals Get Caught',
    publishedDate: new Date('2025-10-09'),
    duration: 40,
    overallCompletionRate: 72,
    affinityProfile: { narrativeDriven: 7, psychologicalDepth: 7, realWorldContext: 8, humor: 2, accessibility: 6, structuredFormat: 6, conversationalTone: 7 },
    completionByDemographic: [
      { demographic: 'Women (25-34)', totalListeners: 340, completionRate: 86, subscribersConverted: 35, dropOffPoints: [{ timestamp: 13, exitRate: 9 }, { timestamp: 26, exitRate: 11 }, { timestamp: 38, exitRate: 4 }] },
      { demographic: 'Women (18-24)', totalListeners: 272, completionRate: 81, subscribersConverted: 19, dropOffPoints: [{ timestamp: 16, exitRate: 12 }, { timestamp: 29, exitRate: 10 }] },
      { demographic: 'Men (25-34)', totalListeners: 200, completionRate: 71, subscribersConverted: 11, dropOffPoints: [{ timestamp: 18, exitRate: 15 }, { timestamp: 30, exitRate: 13 }] },
      { demographic: 'Men (18-24)', totalListeners: 170, completionRate: 67, subscribersConverted: 9, dropOffPoints: [{ timestamp: 14, exitRate: 18 }, { timestamp: 26, exitRate: 16 }] },
      { demographic: 'Women (35-44)', totalListeners: 125, completionRate: 64, subscribersConverted: 5, dropOffPoints: [{ timestamp: 20, exitRate: 21 }, { timestamp: 32, exitRate: 17 }] },
      { demographic: 'Men (35-44)', totalListeners: 105, completionRate: 67, subscribersConverted: 4, dropOffPoints: [{ timestamp: 16, exitRate: 19 }, { timestamp: 28, exitRate: 15 }] },
      { demographic: 'Age 45+', totalListeners: 95, completionRate: 57, subscribersConverted: 2, dropOffPoints: [{ timestamp: 22, exitRate: 28 }, { timestamp: 34, exitRate: 22 }] },
    ],
    demographicAffinityPreferences: {
      'Women (25-34)': { narrativeDriven: 9, psychologicalDepth: 9, realWorldContext: 8, humor: 4, accessibility: 6, structuredFormat: 5, conversationalTone: 8 },
      'Women (18-24)': { narrativeDriven: 9, psychologicalDepth: 8, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 5, conversationalTone: 8 },
      'Men (25-34)': { narrativeDriven: 7, psychologicalDepth: 7, realWorldContext: 7, humor: 7, accessibility: 6, structuredFormat: 7, conversationalTone: 6 },
      'Men (18-24)': { narrativeDriven: 7, psychologicalDepth: 6, realWorldContext: 6, humor: 8, accessibility: 7, structuredFormat: 6, conversationalTone: 6 },
      'Women (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 5, accessibility: 8, structuredFormat: 8, conversationalTone: 6 },
      'Men (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 8, conversationalTone: 6 },
      'Age 45+': { narrativeDriven: 5, psychologicalDepth: 5, realWorldContext: 7, humor: 5, accessibility: 9, structuredFormat: 9, conversationalTone: 5 },
    },
  },
  {
    episodeId: 'ep-03',
    title: 'Crime Scene Analysis: Reading the Evidence',
    publishedDate: new Date('2025-10-16'),
    duration: 46,
    overallCompletionRate: 68,
    affinityProfile: { narrativeDriven: 6, psychologicalDepth: 7, realWorldContext: 8, humor: 1, accessibility: 4, structuredFormat: 5, conversationalTone: 6 },
    completionByDemographic: [
      { demographic: 'Women (25-34)', totalListeners: 295, completionRate: 80, subscribersConverted: 28, dropOffPoints: [{ timestamp: 18, exitRate: 12 }, { timestamp: 32, exitRate: 14 }, { timestamp: 44, exitRate: 7 }] },
      { demographic: 'Women (18-24)', totalListeners: 238, completionRate: 75, subscribersConverted: 15, dropOffPoints: [{ timestamp: 22, exitRate: 15 }, { timestamp: 36, exitRate: 13 }] },
      { demographic: 'Men (25-34)', totalListeners: 172, completionRate: 64, subscribersConverted: 8, dropOffPoints: [{ timestamp: 24, exitRate: 18 }, { timestamp: 38, exitRate: 16 }] },
      { demographic: 'Men (18-24)', totalListeners: 148, completionRate: 60, subscribersConverted: 6, dropOffPoints: [{ timestamp: 20, exitRate: 22 }, { timestamp: 34, exitRate: 20 }] },
      { demographic: 'Women (35-44)', totalListeners: 108, completionRate: 56, subscribersConverted: 2, dropOffPoints: [{ timestamp: 26, exitRate: 26 }, { timestamp: 40, exitRate: 22 }] },
      { demographic: 'Men (35-44)', totalListeners: 92, completionRate: 59, subscribersConverted: 2, dropOffPoints: [{ timestamp: 22, exitRate: 24 }, { timestamp: 36, exitRate: 20 }] },
      { demographic: 'Age 45+', totalListeners: 82, completionRate: 48, subscribersConverted: 0, dropOffPoints: [{ timestamp: 28, exitRate: 36 }, { timestamp: 42, exitRate: 30 }] },
    ],
    demographicAffinityPreferences: {
      'Women (25-34)': { narrativeDriven: 9, psychologicalDepth: 9, realWorldContext: 8, humor: 4, accessibility: 6, structuredFormat: 5, conversationalTone: 8 },
      'Women (18-24)': { narrativeDriven: 9, psychologicalDepth: 8, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 5, conversationalTone: 8 },
      'Men (25-34)': { narrativeDriven: 7, psychologicalDepth: 7, realWorldContext: 7, humor: 7, accessibility: 6, structuredFormat: 7, conversationalTone: 6 },
      'Men (18-24)': { narrativeDriven: 7, psychologicalDepth: 6, realWorldContext: 6, humor: 8, accessibility: 7, structuredFormat: 6, conversationalTone: 6 },
      'Women (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 5, accessibility: 8, structuredFormat: 8, conversationalTone: 6 },
      'Men (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 8, conversationalTone: 6 },
      'Age 45+': { narrativeDriven: 5, psychologicalDepth: 5, realWorldContext: 7, humor: 5, accessibility: 9, structuredFormat: 9, conversationalTone: 5 },
    },
  },
  {
    episodeId: 'ep-04',
    title: 'Motive, Means, Opportunity: The Murder Triangle',
    publishedDate: new Date('2025-10-23'),
    duration: 43,
    overallCompletionRate: 71,
    affinityProfile: { narrativeDriven: 7, psychologicalDepth: 8, realWorldContext: 7, humor: 1, accessibility: 6, structuredFormat: 6, conversationalTone: 7 },
    completionByDemographic: [
      { demographic: 'Women (25-34)', totalListeners: 310, completionRate: 85, subscribersConverted: 32, dropOffPoints: [{ timestamp: 15, exitRate: 10 }, { timestamp: 29, exitRate: 12 }, { timestamp: 41, exitRate: 5 }] },
      { demographic: 'Women (18-24)', totalListeners: 248, completionRate: 79, subscribersConverted: 17, dropOffPoints: [{ timestamp: 18, exitRate: 13 }, { timestamp: 32, exitRate: 11 }] },
      { demographic: 'Men (25-34)', totalListeners: 182, completionRate: 69, subscribersConverted: 10, dropOffPoints: [{ timestamp: 20, exitRate: 16 }, { timestamp: 34, exitRate: 14 }] },
      { demographic: 'Men (18-24)', totalListeners: 155, completionRate: 65, subscribersConverted: 8, dropOffPoints: [{ timestamp: 16, exitRate: 19 }, { timestamp: 30, exitRate: 17 }] },
      { demographic: 'Women (35-44)', totalListeners: 115, completionRate: 62, subscribersConverted: 4, dropOffPoints: [{ timestamp: 23, exitRate: 22 }, { timestamp: 37, exitRate: 18 }] },
      { demographic: 'Men (35-44)', totalListeners: 98, completionRate: 65, subscribersConverted: 3, dropOffPoints: [{ timestamp: 19, exitRate: 20 }, { timestamp: 33, exitRate: 16 }] },
      { demographic: 'Age 45+', totalListeners: 88, completionRate: 54, subscribersConverted: 1, dropOffPoints: [{ timestamp: 25, exitRate: 32 }, { timestamp: 39, exitRate: 26 }] },
    ],
    demographicAffinityPreferences: {
      'Women (25-34)': { narrativeDriven: 9, psychologicalDepth: 9, realWorldContext: 8, humor: 4, accessibility: 6, structuredFormat: 5, conversationalTone: 8 },
      'Women (18-24)': { narrativeDriven: 9, psychologicalDepth: 8, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 5, conversationalTone: 8 },
      'Men (25-34)': { narrativeDriven: 7, psychologicalDepth: 7, realWorldContext: 7, humor: 7, accessibility: 6, structuredFormat: 7, conversationalTone: 6 },
      'Men (18-24)': { narrativeDriven: 7, psychologicalDepth: 6, realWorldContext: 6, humor: 8, accessibility: 7, structuredFormat: 6, conversationalTone: 6 },
      'Women (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 5, accessibility: 8, structuredFormat: 8, conversationalTone: 6 },
      'Men (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 8, conversationalTone: 6 },
      'Age 45+': { narrativeDriven: 5, psychologicalDepth: 5, realWorldContext: 7, humor: 5, accessibility: 9, structuredFormat: 9, conversationalTone: 5 },
    },
  },
  {
    episodeId: 'ep-05',
    title: 'The Investigation Begins: First 48 Hours',
    publishedDate: new Date('2025-10-30'),
    duration: 38,
    overallCompletionRate: 74,
    affinityProfile: { narrativeDriven: 8, psychologicalDepth: 6, realWorldContext: 8, humor: 2, accessibility: 7, structuredFormat: 7, conversationalTone: 8 },
    completionByDemographic: [
      { demographic: 'Women (25-34)', totalListeners: 330, completionRate: 89, subscribersConverted: 36, dropOffPoints: [{ timestamp: 12, exitRate: 7 }, { timestamp: 26, exitRate: 9 }, { timestamp: 36, exitRate: 3 }] },
      { demographic: 'Women (18-24)', totalListeners: 265, completionRate: 84, subscribersConverted: 19, dropOffPoints: [{ timestamp: 15, exitRate: 10 }, { timestamp: 28, exitRate: 9 }] },
      { demographic: 'Men (25-34)', totalListeners: 195, completionRate: 73, subscribersConverted: 11, dropOffPoints: [{ timestamp: 17, exitRate: 14 }, { timestamp: 29, exitRate: 12 }] },
      { demographic: 'Men (18-24)', totalListeners: 165, completionRate: 69, subscribersConverted: 9, dropOffPoints: [{ timestamp: 13, exitRate: 17 }, { timestamp: 25, exitRate: 15 }] },
      { demographic: 'Women (35-44)', totalListeners: 122, completionRate: 67, subscribersConverted: 5, dropOffPoints: [{ timestamp: 19, exitRate: 19 }, { timestamp: 31, exitRate: 15 }] },
      { demographic: 'Men (35-44)', totalListeners: 103, completionRate: 70, subscribersConverted: 4, dropOffPoints: [{ timestamp: 15, exitRate: 16 }, { timestamp: 27, exitRate: 14 }] },
      { demographic: 'Age 45+', totalListeners: 92, completionRate: 60, subscribersConverted: 2, dropOffPoints: [{ timestamp: 21, exitRate: 24 }, { timestamp: 33, exitRate: 18 }] },
    ],
    demographicAffinityPreferences: {
      'Women (25-34)': { narrativeDriven: 9, psychologicalDepth: 9, realWorldContext: 8, humor: 4, accessibility: 6, structuredFormat: 5, conversationalTone: 8 },
      'Women (18-24)': { narrativeDriven: 9, psychologicalDepth: 8, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 5, conversationalTone: 8 },
      'Men (25-34)': { narrativeDriven: 7, psychologicalDepth: 7, realWorldContext: 7, humor: 7, accessibility: 6, structuredFormat: 7, conversationalTone: 6 },
      'Men (18-24)': { narrativeDriven: 7, psychologicalDepth: 6, realWorldContext: 6, humor: 8, accessibility: 7, structuredFormat: 6, conversationalTone: 6 },
      'Women (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 5, accessibility: 8, structuredFormat: 8, conversationalTone: 6 },
      'Men (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 8, conversationalTone: 6 },
      'Age 45+': { narrativeDriven: 5, psychologicalDepth: 5, realWorldContext: 7, humor: 5, accessibility: 9, structuredFormat: 9, conversationalTone: 5 },
    },
  },
  {
    episodeId: 'ep-06',
    title: 'Victim Profile: Who Gets Targeted?',
    publishedDate: new Date('2025-11-06'),
    duration: 41,
    overallCompletionRate: 73,
    affinityProfile: { narrativeDriven: 7, psychologicalDepth: 8, realWorldContext: 8, humor: 2, accessibility: 6, structuredFormat: 5, conversationalTone: 7 },
    completionByDemographic: [
      { demographic: 'Women (25-34)', totalListeners: 345, completionRate: 87, subscribersConverted: 37, dropOffPoints: [{ timestamp: 14, exitRate: 9 }, { timestamp: 28, exitRate: 11 }, { timestamp: 39, exitRate: 4 }] },
      { demographic: 'Women (18-24)', totalListeners: 275, completionRate: 81, subscribersConverted: 20, dropOffPoints: [{ timestamp: 17, exitRate: 12 }, { timestamp: 30, exitRate: 10 }] },
      { demographic: 'Men (25-34)', totalListeners: 202, completionRate: 72, subscribersConverted: 12, dropOffPoints: [{ timestamp: 19, exitRate: 15 }, { timestamp: 31, exitRate: 13 }] },
      { demographic: 'Men (18-24)', totalListeners: 172, completionRate: 68, subscribersConverted: 9, dropOffPoints: [{ timestamp: 15, exitRate: 18 }, { timestamp: 27, exitRate: 16 }] },
      { demographic: 'Women (35-44)', totalListeners: 128, completionRate: 65, subscribersConverted: 5, dropOffPoints: [{ timestamp: 21, exitRate: 20 }, { timestamp: 33, exitRate: 16 }] },
      { demographic: 'Men (35-44)', totalListeners: 108, completionRate: 68, subscribersConverted: 4, dropOffPoints: [{ timestamp: 17, exitRate: 18 }, { timestamp: 29, exitRate: 15 }] },
      { demographic: 'Age 45+', totalListeners: 95, completionRate: 58, subscribersConverted: 2, dropOffPoints: [{ timestamp: 23, exitRate: 26 }, { timestamp: 35, exitRate: 20 }] },
    ],
    demographicAffinityPreferences: {
      'Women (25-34)': { narrativeDriven: 9, psychologicalDepth: 9, realWorldContext: 8, humor: 4, accessibility: 6, structuredFormat: 5, conversationalTone: 8 },
      'Women (18-24)': { narrativeDriven: 9, psychologicalDepth: 8, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 5, conversationalTone: 8 },
      'Men (25-34)': { narrativeDriven: 7, psychologicalDepth: 7, realWorldContext: 7, humor: 7, accessibility: 6, structuredFormat: 7, conversationalTone: 6 },
      'Men (18-24)': { narrativeDriven: 7, psychologicalDepth: 6, realWorldContext: 6, humor: 8, accessibility: 7, structuredFormat: 6, conversationalTone: 6 },
      'Women (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 5, accessibility: 8, structuredFormat: 8, conversationalTone: 6 },
      'Men (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 8, conversationalTone: 6 },
      'Age 45+': { narrativeDriven: 5, psychologicalDepth: 5, realWorldContext: 7, humor: 5, accessibility: 9, structuredFormat: 9, conversationalTone: 5 },
    },
  },
  {
    episodeId: 'ep-07',
    title: 'The Confession: Truth or Manipulation?',
    publishedDate: new Date('2025-11-13'),
    duration: 36,
    overallCompletionRate: 77,
    affinityProfile: { narrativeDriven: 8, psychologicalDepth: 9, realWorldContext: 6, humor: 2, accessibility: 7, structuredFormat: 6, conversationalTone: 8 },
    completionByDemographic: [
      { demographic: 'Women (25-34)', totalListeners: 385, completionRate: 92, subscribersConverted: 43, dropOffPoints: [{ timestamp: 11, exitRate: 6 }, { timestamp: 24, exitRate: 8 }, { timestamp: 34, exitRate: 2 }] },
      { demographic: 'Women (18-24)', totalListeners: 310, completionRate: 88, subscribersConverted: 26, dropOffPoints: [{ timestamp: 14, exitRate: 9 }, { timestamp: 26, exitRate: 8 }] },
      { demographic: 'Men (25-34)', totalListeners: 228, completionRate: 75, subscribersConverted: 13, dropOffPoints: [{ timestamp: 16, exitRate: 14 }, { timestamp: 28, exitRate: 12 }] },
      { demographic: 'Men (18-24)', totalListeners: 195, completionRate: 71, subscribersConverted: 11, dropOffPoints: [{ timestamp: 12, exitRate: 17 }, { timestamp: 24, exitRate: 15 }] },
      { demographic: 'Women (35-44)', totalListeners: 145, completionRate: 70, subscribersConverted: 8, dropOffPoints: [{ timestamp: 16, exitRate: 17 }, { timestamp: 28, exitRate: 14 }] },
      { demographic: 'Men (35-44)', totalListeners: 120, completionRate: 73, subscribersConverted: 7, dropOffPoints: [{ timestamp: 12, exitRate: 15 }, { timestamp: 24, exitRate: 13 }] },
      { demographic: 'Age 45+', totalListeners: 108, completionRate: 64, subscribersConverted: 4, dropOffPoints: [{ timestamp: 18, exitRate: 20 }, { timestamp: 30, exitRate: 16 }] },
    ],
    demographicAffinityPreferences: {
      'Women (25-34)': { narrativeDriven: 9, psychologicalDepth: 9, realWorldContext: 8, humor: 4, accessibility: 6, structuredFormat: 5, conversationalTone: 8 },
      'Women (18-24)': { narrativeDriven: 9, psychologicalDepth: 8, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 5, conversationalTone: 8 },
      'Men (25-34)': { narrativeDriven: 7, psychologicalDepth: 7, realWorldContext: 7, humor: 7, accessibility: 6, structuredFormat: 7, conversationalTone: 6 },
      'Men (18-24)': { narrativeDriven: 7, psychologicalDepth: 6, realWorldContext: 6, humor: 8, accessibility: 7, structuredFormat: 6, conversationalTone: 6 },
      'Women (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 5, accessibility: 8, structuredFormat: 8, conversationalTone: 6 },
      'Men (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 8, conversationalTone: 6 },
      'Age 45+': { narrativeDriven: 5, psychologicalDepth: 5, realWorldContext: 7, humor: 5, accessibility: 9, structuredFormat: 9, conversationalTone: 5 },
    },
  },
  {
    episodeId: 'ep-08',
    title: 'Mapping the Killer: Geographic Profiling 101',
    publishedDate: new Date('2025-11-20'),
    duration: 45,
    overallCompletionRate: 70,
    affinityProfile: { narrativeDriven: 6, psychologicalDepth: 8, realWorldContext: 7, humor: 2, accessibility: 5, structuredFormat: 6, conversationalTone: 7 },
    completionByDemographic: [
      { demographic: 'Women (25-34)', totalListeners: 320, completionRate: 84, subscribersConverted: 35, dropOffPoints: [{ timestamp: 16, exitRate: 10 }, { timestamp: 30, exitRate: 12 }, { timestamp: 43, exitRate: 5 }] },
      { demographic: 'Women (18-24)', totalListeners: 260, completionRate: 78, subscribersConverted: 18, dropOffPoints: [{ timestamp: 20, exitRate: 12 }, { timestamp: 34, exitRate: 11 }] },
      { demographic: 'Men (25-34)', totalListeners: 188, completionRate: 68, subscribersConverted: 10, dropOffPoints: [{ timestamp: 18, exitRate: 16 }, { timestamp: 32, exitRate: 14 }] },
      { demographic: 'Men (18-24)', totalListeners: 162, completionRate: 64, subscribersConverted: 7, dropOffPoints: [{ timestamp: 14, exitRate: 20 }, { timestamp: 28, exitRate: 18 }] },
      { demographic: 'Women (35-44)', totalListeners: 118, completionRate: 59, subscribersConverted: 3, dropOffPoints: [{ timestamp: 24, exitRate: 24 }, { timestamp: 36, exitRate: 20 }] },
      { demographic: 'Men (35-44)', totalListeners: 102, completionRate: 62, subscribersConverted: 3, dropOffPoints: [{ timestamp: 20, exitRate: 22 }, { timestamp: 34, exitRate: 18 }] },
      { demographic: 'Age 45+', totalListeners: 88, completionRate: 51, subscribersConverted: 1, dropOffPoints: [{ timestamp: 22, exitRate: 34 }, { timestamp: 36, exitRate: 28 }] },
    ],
    demographicAffinityPreferences: {
      'Women (25-34)': { narrativeDriven: 9, psychologicalDepth: 9, realWorldContext: 8, humor: 4, accessibility: 6, structuredFormat: 5, conversationalTone: 8 },
      'Women (18-24)': { narrativeDriven: 9, psychologicalDepth: 8, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 5, conversationalTone: 8 },
      'Men (25-34)': { narrativeDriven: 7, psychologicalDepth: 7, realWorldContext: 7, humor: 7, accessibility: 6, structuredFormat: 7, conversationalTone: 6 },
      'Men (18-24)': { narrativeDriven: 7, psychologicalDepth: 6, realWorldContext: 6, humor: 8, accessibility: 7, structuredFormat: 6, conversationalTone: 6 },
      'Women (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 5, accessibility: 8, structuredFormat: 8, conversationalTone: 6 },
      'Men (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 8, conversationalTone: 6 },
      'Age 45+': { narrativeDriven: 5, psychologicalDepth: 5, realWorldContext: 7, humor: 5, accessibility: 9, structuredFormat: 9, conversationalTone: 5 },
    },
  },
  {
    episodeId: 'ep-09',
    title: 'The Verdict: What Jurors Really Think',
    publishedDate: new Date('2025-11-27'),
    duration: 39,
    overallCompletionRate: 76,
    affinityProfile: { narrativeDriven: 7, psychologicalDepth: 8, realWorldContext: 7, humor: 3, accessibility: 7, structuredFormat: 7, conversationalTone: 8 },
    completionByDemographic: [
      { demographic: 'Women (25-34)', totalListeners: 370, completionRate: 88, subscribersConverted: 39, dropOffPoints: [{ timestamp: 12, exitRate: 8 }, { timestamp: 26, exitRate: 10 }, { timestamp: 37, exitRate: 3 }] },
      { demographic: 'Women (18-24)', totalListeners: 295, completionRate: 83, subscribersConverted: 21, dropOffPoints: [{ timestamp: 15, exitRate: 11 }, { timestamp: 28, exitRate: 10 }] },
      { demographic: 'Men (25-34)', totalListeners: 218, completionRate: 74, subscribersConverted: 13, dropOffPoints: [{ timestamp: 16, exitRate: 13 }, { timestamp: 28, exitRate: 12 }] },
      { demographic: 'Men (18-24)', totalListeners: 188, completionRate: 70, subscribersConverted: 10, dropOffPoints: [{ timestamp: 12, exitRate: 16 }, { timestamp: 24, exitRate: 14 }] },
      { demographic: 'Women (35-44)', totalListeners: 138, completionRate: 69, subscribersConverted: 7, dropOffPoints: [{ timestamp: 18, exitRate: 16 }, { timestamp: 30, exitRate: 13 }] },
      { demographic: 'Men (35-44)', totalListeners: 115, completionRate: 72, subscribersConverted: 6, dropOffPoints: [{ timestamp: 14, exitRate: 14 }, { timestamp: 26, exitRate: 12 }] },
      { demographic: 'Age 45+', totalListeners: 102, completionRate: 63, subscribersConverted: 3, dropOffPoints: [{ timestamp: 20, exitRate: 22 }, { timestamp: 32, exitRate: 18 }] },
    ],
    demographicAffinityPreferences: {
      'Women (25-34)': { narrativeDriven: 9, psychologicalDepth: 9, realWorldContext: 8, humor: 4, accessibility: 6, structuredFormat: 5, conversationalTone: 8 },
      'Women (18-24)': { narrativeDriven: 9, psychologicalDepth: 8, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 5, conversationalTone: 8 },
      'Men (25-34)': { narrativeDriven: 7, psychologicalDepth: 7, realWorldContext: 7, humor: 7, accessibility: 6, structuredFormat: 7, conversationalTone: 6 },
      'Men (18-24)': { narrativeDriven: 7, psychologicalDepth: 6, realWorldContext: 6, humor: 8, accessibility: 7, structuredFormat: 6, conversationalTone: 6 },
      'Women (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 5, accessibility: 8, structuredFormat: 8, conversationalTone: 6 },
      'Men (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 8, conversationalTone: 6 },
      'Age 45+': { narrativeDriven: 5, psychologicalDepth: 5, realWorldContext: 7, humor: 5, accessibility: 9, structuredFormat: 9, conversationalTone: 5 },
    },
  },
  {
    episodeId: 'ep-10',
    title: 'Behavioral Clues: Reading the Crime Scene',
    publishedDate: new Date('2025-12-04'),
    duration: 51,
    overallCompletionRate: 65,
    affinityProfile: { narrativeDriven: 6, psychologicalDepth: 7, realWorldContext: 8, humor: 1, accessibility: 4, structuredFormat: 5, conversationalTone: 6 },
    completionByDemographic: [
      { demographic: 'Women (25-34)', totalListeners: 310, completionRate: 82, subscribersConverted: 31, dropOffPoints: [{ timestamp: 20, exitRate: 12 }, { timestamp: 35, exitRate: 14 }, { timestamp: 48, exitRate: 8 }] },
      { demographic: 'Women (18-24)', totalListeners: 245, completionRate: 76, subscribersConverted: 16, dropOffPoints: [{ timestamp: 25, exitRate: 15 }, { timestamp: 38, exitRate: 14 }] },
      { demographic: 'Men (25-34)', totalListeners: 178, completionRate: 65, subscribersConverted: 8, dropOffPoints: [{ timestamp: 22, exitRate: 18 }, { timestamp: 36, exitRate: 16 }, { timestamp: 48, exitRate: 12 }] },
      { demographic: 'Men (18-24)', totalListeners: 152, completionRate: 61, subscribersConverted: 6, dropOffPoints: [{ timestamp: 18, exitRate: 22 }, { timestamp: 32, exitRate: 20 }, { timestamp: 46, exitRate: 16 }] },
      { demographic: 'Women (35-44)', totalListeners: 105, completionRate: 54, subscribersConverted: 2, dropOffPoints: [{ timestamp: 28, exitRate: 28 }, { timestamp: 42, exitRate: 24 }] },
      { demographic: 'Men (35-44)', totalListeners: 92, completionRate: 58, subscribersConverted: 2, dropOffPoints: [{ timestamp: 24, exitRate: 26 }, { timestamp: 38, exitRate: 22 }] },
      { demographic: 'Age 45+', totalListeners: 82, completionRate: 48, subscribersConverted: 1, dropOffPoints: [{ timestamp: 26, exitRate: 36 }, { timestamp: 40, exitRate: 30 }] },
    ],
    demographicAffinityPreferences: {
      'Women (25-34)': { narrativeDriven: 9, psychologicalDepth: 9, realWorldContext: 8, humor: 4, accessibility: 6, structuredFormat: 5, conversationalTone: 8 },
      'Women (18-24)': { narrativeDriven: 9, psychologicalDepth: 8, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 5, conversationalTone: 8 },
      'Men (25-34)': { narrativeDriven: 7, psychologicalDepth: 7, realWorldContext: 7, humor: 7, accessibility: 6, structuredFormat: 7, conversationalTone: 6 },
      'Men (18-24)': { narrativeDriven: 7, psychologicalDepth: 6, realWorldContext: 6, humor: 8, accessibility: 7, structuredFormat: 6, conversationalTone: 6 },
      'Women (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 5, accessibility: 8, structuredFormat: 8, conversationalTone: 6 },
      'Men (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 8, conversationalTone: 6 },
      'Age 45+': { narrativeDriven: 5, psychologicalDepth: 5, realWorldContext: 7, humor: 5, accessibility: 9, structuredFormat: 9, conversationalTone: 5 },
    },
  },
  {
    episodeId: 'ep-11',
    title: 'The Innocent Man: DNA Evidence Changes Everything',
    publishedDate: new Date('2025-12-11'),
    duration: 44,
    overallCompletionRate: 78,
    affinityProfile: { narrativeDriven: 8, psychologicalDepth: 7, realWorldContext: 9, humor: 2, accessibility: 6, structuredFormat: 6, conversationalTone: 8 },
    completionByDemographic: [
      { demographic: 'Women (25-34)', totalListeners: 355, completionRate: 91, subscribersConverted: 41, dropOffPoints: [{ timestamp: 14, exitRate: 7 }, { timestamp: 28, exitRate: 9 }, { timestamp: 42, exitRate: 2 }] },
      { demographic: 'Women (18-24)', totalListeners: 290, completionRate: 87, subscribersConverted: 25, dropOffPoints: [{ timestamp: 18, exitRate: 10 }, { timestamp: 32, exitRate: 9 }] },
      { demographic: 'Men (25-34)', totalListeners: 205, completionRate: 76, subscribersConverted: 12, dropOffPoints: [{ timestamp: 20, exitRate: 14 }, { timestamp: 32, exitRate: 12 }] },
      { demographic: 'Men (18-24)', totalListeners: 178, completionRate: 72, subscribersConverted: 10, dropOffPoints: [{ timestamp: 16, exitRate: 17 }, { timestamp: 28, exitRate: 15 }] },
      { demographic: 'Women (35-44)', totalListeners: 135, completionRate: 71, subscribersConverted: 7, dropOffPoints: [{ timestamp: 22, exitRate: 16 }, { timestamp: 34, exitRate: 12 }] },
      { demographic: 'Men (35-44)', totalListeners: 112, completionRate: 74, subscribersConverted: 6, dropOffPoints: [{ timestamp: 18, exitRate: 14 }, { timestamp: 30, exitRate: 12 }] },
      { demographic: 'Age 45+', totalListeners: 98, completionRate: 65, subscribersConverted: 3, dropOffPoints: [{ timestamp: 24, exitRate: 20 }, { timestamp: 36, exitRate: 16 }] },
    ],
    demographicAffinityPreferences: {
      'Women (25-34)': { narrativeDriven: 9, psychologicalDepth: 9, realWorldContext: 8, humor: 4, accessibility: 6, structuredFormat: 5, conversationalTone: 8 },
      'Women (18-24)': { narrativeDriven: 9, psychologicalDepth: 8, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 5, conversationalTone: 8 },
      'Men (25-34)': { narrativeDriven: 7, psychologicalDepth: 7, realWorldContext: 7, humor: 7, accessibility: 6, structuredFormat: 7, conversationalTone: 6 },
      'Men (18-24)': { narrativeDriven: 7, psychologicalDepth: 6, realWorldContext: 6, humor: 8, accessibility: 7, structuredFormat: 6, conversationalTone: 6 },
      'Women (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 5, accessibility: 8, structuredFormat: 8, conversationalTone: 6 },
      'Men (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 8, conversationalTone: 6 },
      'Age 45+': { narrativeDriven: 5, psychologicalDepth: 5, realWorldContext: 7, humor: 5, accessibility: 9, structuredFormat: 9, conversationalTone: 5 },
    },
  },
  {
    episodeId: 'ep-12',
    title: 'True Crime Deep Dive: Serial Killer Psychology',
    publishedDate: new Date('2025-12-18'),
    duration: 47,
    overallCompletionRate: 81,
    affinityProfile: { narrativeDriven: 8, psychologicalDepth: 9, realWorldContext: 8, humor: 3, accessibility: 5, structuredFormat: 4, conversationalTone: 7 },
    completionByDemographic: [
      { demographic: 'Women (25-34)', totalListeners: 340, completionRate: 94, subscribersConverted: 38, dropOffPoints: [{ timestamp: 15, exitRate: 8 }, { timestamp: 25, exitRate: 12 }, { timestamp: 40, exitRate: 5 }] },
      { demographic: 'Women (18-24)', totalListeners: 280, completionRate: 89, subscribersConverted: 23, dropOffPoints: [{ timestamp: 20, exitRate: 10 }, { timestamp: 30, exitRate: 8 }] },
      { demographic: 'Men (25-34)', totalListeners: 210, completionRate: 77, subscribersConverted: 12, dropOffPoints: [{ timestamp: 22, exitRate: 15 }, { timestamp: 35, exitRate: 12 }] },
      { demographic: 'Men (18-24)', totalListeners: 195, completionRate: 79, subscribersConverted: 11, dropOffPoints: [{ timestamp: 18, exitRate: 18 }, { timestamp: 28, exitRate: 14 }] },
      { demographic: 'Women (35-44)', totalListeners: 140, completionRate: 63, subscribersConverted: 6, dropOffPoints: [{ timestamp: 25, exitRate: 22 }, { timestamp: 38, exitRate: 18 }] },
      { demographic: 'Men (35-44)', totalListeners: 125, completionRate: 68, subscribersConverted: 7, dropOffPoints: [{ timestamp: 20, exitRate: 20 }, { timestamp: 32, exitRate: 16 }] },
      { demographic: 'Age 45+', totalListeners: 110, completionRate: 56, subscribersConverted: 3, dropOffPoints: [{ timestamp: 23, exitRate: 28 }, { timestamp: 35, exitRate: 22 }] },
    ],
    demographicAffinityPreferences: {
      'Women (25-34)': { narrativeDriven: 9, psychologicalDepth: 9, realWorldContext: 8, humor: 4, accessibility: 6, structuredFormat: 5, conversationalTone: 8 },
      'Women (18-24)': { narrativeDriven: 9, psychologicalDepth: 8, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 5, conversationalTone: 8 },
      'Men (25-34)': { narrativeDriven: 7, psychologicalDepth: 7, realWorldContext: 7, humor: 7, accessibility: 6, structuredFormat: 7, conversationalTone: 6 },
      'Men (18-24)': { narrativeDriven: 7, psychologicalDepth: 6, realWorldContext: 6, humor: 8, accessibility: 7, structuredFormat: 6, conversationalTone: 6 },
      'Women (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 5, accessibility: 8, structuredFormat: 8, conversationalTone: 6 },
      'Men (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 8, conversationalTone: 6 },
      'Age 45+': { narrativeDriven: 5, psychologicalDepth: 5, realWorldContext: 7, humor: 5, accessibility: 9, structuredFormat: 9, conversationalTone: 5 },
    },
  },
  {
    episodeId: 'ep-13',
    title: 'Justice Delayed: Cold Case Breakthroughs',
    publishedDate: new Date('2025-12-25'),
    duration: 38,
    overallCompletionRate: 75,
    affinityProfile: { narrativeDriven: 8, psychologicalDepth: 6, realWorldContext: 9, humor: 2, accessibility: 7, structuredFormat: 7, conversationalTone: 8 },
    completionByDemographic: [
      { demographic: 'Women (25-34)', totalListeners: 365, completionRate: 89, subscribersConverted: 40, dropOffPoints: [{ timestamp: 12, exitRate: 7 }, { timestamp: 28, exitRate: 10 }, { timestamp: 36, exitRate: 3 }] },
      { demographic: 'Women (18-24)', totalListeners: 285, completionRate: 84, subscribersConverted: 22, dropOffPoints: [{ timestamp: 14, exitRate: 11 }, { timestamp: 30, exitRate: 9 }] },
      { demographic: 'Men (25-34)', totalListeners: 198, completionRate: 75, subscribersConverted: 11, dropOffPoints: [{ timestamp: 16, exitRate: 13 }, { timestamp: 28, exitRate: 11 }] },
      { demographic: 'Men (18-24)', totalListeners: 162, completionRate: 71, subscribersConverted: 9, dropOffPoints: [{ timestamp: 12, exitRate: 16 }, { timestamp: 24, exitRate: 14 }] },
      { demographic: 'Women (35-44)', totalListeners: 128, completionRate: 68, subscribersConverted: 6, dropOffPoints: [{ timestamp: 18, exitRate: 18 }, { timestamp: 30, exitRate: 14 }] },
      { demographic: 'Men (35-44)', totalListeners: 105, completionRate: 72, subscribersConverted: 5, dropOffPoints: [{ timestamp: 14, exitRate: 16 }, { timestamp: 26, exitRate: 14 }] },
      { demographic: 'Age 45+', totalListeners: 92, completionRate: 62, subscribersConverted: 2, dropOffPoints: [{ timestamp: 20, exitRate: 22 }, { timestamp: 32, exitRate: 18 }] },
    ],
    demographicAffinityPreferences: {
      'Women (25-34)': { narrativeDriven: 9, psychologicalDepth: 9, realWorldContext: 8, humor: 4, accessibility: 6, structuredFormat: 5, conversationalTone: 8 },
      'Women (18-24)': { narrativeDriven: 9, psychologicalDepth: 8, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 5, conversationalTone: 8 },
      'Men (25-34)': { narrativeDriven: 7, psychologicalDepth: 7, realWorldContext: 7, humor: 7, accessibility: 6, structuredFormat: 7, conversationalTone: 6 },
      'Men (18-24)': { narrativeDriven: 7, psychologicalDepth: 6, realWorldContext: 6, humor: 8, accessibility: 7, structuredFormat: 6, conversationalTone: 6 },
      'Women (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 5, accessibility: 8, structuredFormat: 8, conversationalTone: 6 },
      'Men (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 8, conversationalTone: 6 },
      'Age 45+': { narrativeDriven: 5, psychologicalDepth: 5, realWorldContext: 7, humor: 5, accessibility: 9, structuredFormat: 9, conversationalTone: 5 },
    },
  },
  {
    episodeId: 'ep-14',
    title: 'The Unraveling: Inside a Serial Predator\'s Mind',
    publishedDate: new Date('2026-01-01'),
    duration: 54,
    overallCompletionRate: 69,
    affinityProfile: { narrativeDriven: 9, psychologicalDepth: 8, realWorldContext: 9, humor: 1, accessibility: 4, structuredFormat: 3, conversationalTone: 6 },
    completionByDemographic: [
      { demographic: 'Women (25-34)', totalListeners: 420, completionRate: 91, subscribersConverted: 52, dropOffPoints: [{ timestamp: 20, exitRate: 5 }, { timestamp: 35, exitRate: 8 }, { timestamp: 50, exitRate: 3 }] },
      { demographic: 'Women (18-24)', totalListeners: 310, completionRate: 85, subscribersConverted: 28, dropOffPoints: [{ timestamp: 25, exitRate: 9 }, { timestamp: 40, exitRate: 10 }] },
      { demographic: 'Men (25-34)', totalListeners: 225, completionRate: 72, subscribersConverted: 14, dropOffPoints: [{ timestamp: 22, exitRate: 16 }, { timestamp: 38, exitRate: 14 }] },
      { demographic: 'Men (18-24)', totalListeners: 188, completionRate: 68, subscribersConverted: 10, dropOffPoints: [{ timestamp: 18, exitRate: 20 }, { timestamp: 32, exitRate: 18 }] },
      { demographic: 'Women (35-44)', totalListeners: 142, completionRate: 58, subscribersConverted: 5, dropOffPoints: [{ timestamp: 28, exitRate: 26 }, { timestamp: 44, exitRate: 20 }] },
      { demographic: 'Men (35-44)', totalListeners: 118, completionRate: 61, subscribersConverted: 4, dropOffPoints: [{ timestamp: 24, exitRate: 24 }, { timestamp: 40, exitRate: 20 }] },
      { demographic: 'Age 45+', totalListeners: 95, completionRate: 48, subscribersConverted: 1, dropOffPoints: [{ timestamp: 26, exitRate: 38 }, { timestamp: 42, exitRate: 32 }] },
    ],
    demographicAffinityPreferences: {
      'Women (25-34)': { narrativeDriven: 9, psychologicalDepth: 9, realWorldContext: 8, humor: 4, accessibility: 6, structuredFormat: 5, conversationalTone: 8 },
      'Women (18-24)': { narrativeDriven: 9, psychologicalDepth: 8, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 5, conversationalTone: 8 },
      'Men (25-34)': { narrativeDriven: 7, psychologicalDepth: 7, realWorldContext: 7, humor: 7, accessibility: 6, structuredFormat: 7, conversationalTone: 6 },
      'Men (18-24)': { narrativeDriven: 7, psychologicalDepth: 6, realWorldContext: 6, humor: 8, accessibility: 7, structuredFormat: 6, conversationalTone: 6 },
      'Women (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 5, accessibility: 8, structuredFormat: 8, conversationalTone: 6 },
      'Men (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 8, conversationalTone: 6 },
      'Age 45+': { narrativeDriven: 5, psychologicalDepth: 5, realWorldContext: 7, humor: 5, accessibility: 9, structuredFormat: 9, conversationalTone: 5 },
    },
  },
  {
    episodeId: 'ep-15',
    title: 'The Psychology of Manipulation: Control Tactics Explained',
    publishedDate: new Date('2026-01-08'),
    duration: 42,
    overallCompletionRate: 72,
    affinityProfile: { narrativeDriven: 7, psychologicalDepth: 9, realWorldContext: 7, humor: 2, accessibility: 6, structuredFormat: 6, conversationalTone: 8 },
    completionByDemographic: [
      { demographic: 'Women (25-34)', totalListeners: 285, completionRate: 88, subscribersConverted: 34, dropOffPoints: [{ timestamp: 12, exitRate: 6 }, { timestamp: 25, exitRate: 8 }, { timestamp: 40, exitRate: 2 }] },
      { demographic: 'Women (18-24)', totalListeners: 240, completionRate: 82, subscribersConverted: 18, dropOffPoints: [{ timestamp: 15, exitRate: 10 }, { timestamp: 28, exitRate: 9 }] },
      { demographic: 'Men (25-34)', totalListeners: 165, completionRate: 71, subscribersConverted: 8, dropOffPoints: [{ timestamp: 18, exitRate: 15 }, { timestamp: 30, exitRate: 12 }] },
      { demographic: 'Men (18-24)', totalListeners: 142, completionRate: 68, subscribersConverted: 7, dropOffPoints: [{ timestamp: 14, exitRate: 18 }, { timestamp: 26, exitRate: 15 }] },
      { demographic: 'Women (35-44)', totalListeners: 98, completionRate: 61, subscribersConverted: 4, dropOffPoints: [{ timestamp: 20, exitRate: 22 }, { timestamp: 32, exitRate: 16 }] },
      { demographic: 'Men (35-44)', totalListeners: 87, completionRate: 64, subscribersConverted: 3, dropOffPoints: [{ timestamp: 16, exitRate: 20 }, { timestamp: 28, exitRate: 18 }] },
      { demographic: 'Age 45+', totalListeners: 78, completionRate: 52, subscribersConverted: 1, dropOffPoints: [{ timestamp: 22, exitRate: 32 }, { timestamp: 34, exitRate: 26 }] },
    ],
    demographicAffinityPreferences: {
      'Women (25-34)': { narrativeDriven: 9, psychologicalDepth: 9, realWorldContext: 8, humor: 4, accessibility: 6, structuredFormat: 5, conversationalTone: 8 },
      'Women (18-24)': { narrativeDriven: 9, psychologicalDepth: 8, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 5, conversationalTone: 8 },
      'Men (25-34)': { narrativeDriven: 7, psychologicalDepth: 7, realWorldContext: 7, humor: 7, accessibility: 6, structuredFormat: 7, conversationalTone: 6 },
      'Men (18-24)': { narrativeDriven: 7, psychologicalDepth: 6, realWorldContext: 6, humor: 8, accessibility: 7, structuredFormat: 6, conversationalTone: 6 },
      'Women (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 5, accessibility: 8, structuredFormat: 8, conversationalTone: 6 },
      'Men (35-44)': { narrativeDriven: 6, psychologicalDepth: 6, realWorldContext: 7, humor: 6, accessibility: 7, structuredFormat: 8, conversationalTone: 6 },
      'Age 45+': { narrativeDriven: 5, psychologicalDepth: 5, realWorldContext: 7, humor: 5, accessibility: 9, structuredFormat: 9, conversationalTone: 5 },
    },
  },
];

// Helper function to get bar color based on completion rate
const getBarColor = (rate: number) => {
  if (rate >= 70) return '#1DB954'; // Green
  if (rate >= 50) return '#FFD700'; // Yellow
  return '#EF4444'; // Red
};

// Helper function to determine performance indicator
const getPerformanceIndicator = (rate: number, avgRate: number) => {
  if (rate >= avgRate + 5) return { icon: '⭐', label: 'High Performer', color: 'text-spotify-green' };
  if (rate >= avgRate - 5) return { icon: '◐', label: 'Average', color: 'text-yellow-500' };
  return { icon: '⚠️', label: 'Low Performer', color: 'text-red-500' };
};

// Helper function to get affinity match indicator
const getAffinityMatch = (episode: number, preference: number) => {
  const diff = Math.abs(episode - preference);
  if (diff <= 1) return '✓';
  if (diff <= 2) return '◐';
  return '✗';
};

// Helper function to generate insights based on affinity profile
const generateInsights = (episode: any, demographic: string, demographicData: any) => {
  const preferences = episode.demographicAffinityPreferences[demographic];
  const affinity = episode.affinityProfile;
  const avgRate = episode.completionByDemographic.reduce((sum: number, d: any) => sum + d.completionRate, 0) / episode.completionByDemographic.length;
  const isHighPerformer = demographicData.completionRate >= avgRate + 5;
  
  const insights: string[] = [];
  const mismatches: string[] = [];
  
  // Check each affinity dimension
  const dimensions = [
    { key: 'narrativeDriven', label: 'Narrative-Driven' },
    { key: 'psychologicalDepth', label: 'Psychological Depth' },
    { key: 'realWorldContext', label: 'Real-World Context' },
    { key: 'accessibility', label: 'Accessibility' },
    { key: 'structuredFormat', label: 'Structured Format' },
    { key: 'humor', label: 'Humor' },
    { key: 'conversationalTone', label: 'Conversational Tone' },
  ];
  
  dimensions.forEach(dim => {
    const epValue = affinity[dim.key as keyof typeof affinity];
    const prefValue = preferences[dim.key as keyof typeof preferences];
    const diff = epValue - prefValue;
    
    if (Math.abs(diff) <= 1) {
      if (isHighPerformer) {
        insights.push(`${dim.label} (${epValue}/10) perfectly matches your preference (${prefValue}/10)`);
      }
    } else if (diff < -2) {
      mismatches.push(`${dim.label}: Episode ${epValue}/10 but you prefer ${prefValue}/10 — major mismatch`);
    } else if (diff > 2) {
      if (!isHighPerformer) {
        mismatches.push(`${dim.label}: Episode ${epValue}/10 exceeds your preference (${prefValue}/10) — potential disconnect`);
      }
    }
  });
  
  // Add subscriber conversion insight
  const conversionRate = (demographicData.subscribersConverted / (demographicData.totalListeners * demographicData.completionRate / 100)) * 100;
  if (conversionRate > 10) {
    insights.push(`Subscriber conversion: ${conversionRate.toFixed(1)}% of completers (${conversionRate > 5 ? '2x' : '1.5x'} platform average)`);
  }
  
  return { insights, mismatches };
};

export function EpisodeCompletionDashboard() {
  const [mounted, setMounted] = useState(false);
  const [viewState, setViewState] = useState<'overview' | 'demographic'>('overview');
  const [selectedEpisode, setSelectedEpisode] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prepare chart data for overview
  const completionTrendData = mockEpisodes.map((ep, idx) => ({
    episode: `Ep ${String(idx + 1).padStart(2, '0')}`,
    completionRate: ep.overallCompletionRate,
    title: ep.title,
    episodeIndex: idx,
    episodeData: ep,
  }));

  // Handle bar click - Recharts passes (data, index, event)
  const handleBarClick = (data: any, index?: number) => {
    console.log('Bar clicked:', data, index);
    // If data is the payload object directly
    if (data && data.episodeData) {
      setSelectedEpisode(data.episodeData);
      setViewState('demographic');
      return;
    }
    // If data has activePayload (from BarChart onClick)
    if (data && data.activePayload && data.activePayload[0]) {
      const episodeData = data.activePayload[0].payload?.episodeData;
      if (episodeData) {
        setSelectedEpisode(episodeData);
        setViewState('demographic');
        return;
      }
    }
    // Fallback: use index if available
    if (index !== undefined && completionTrendData[index]) {
      const episodeData = completionTrendData[index].episodeData;
      setSelectedEpisode(episodeData);
      setViewState('demographic');
    }
  };

  // Prepare demographic data for selected episode
  const demographicData = selectedEpisode
    ? [...selectedEpisode.completionByDemographic].sort((a, b) => b.completionRate - a.completionRate)
    : [];

  const avgCompletionRate = selectedEpisode
    ? selectedEpisode.completionByDemographic.reduce((sum: number, d: any) => sum + d.completionRate, 0) / selectedEpisode.completionByDemographic.length
    : 0;

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

  // Demographic breakdown view
  if (viewState === 'demographic' && selectedEpisode) {
    return (
      <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-spotify-text mb-1">
              {selectedEpisode.title}
            </h3>
            <p className="text-sm text-spotify-text-muted">
              Overall Completion: {selectedEpisode.overallCompletionRate}% • Duration: {selectedEpisode.duration} min
            </p>
          </div>
          <button
            onClick={() => {
              setViewState('overview');
              setSelectedEpisode(null);
            }}
            className="px-4 py-2 bg-spotify-dark border border-spotify-neutral rounded-lg text-spotify-text hover:bg-spotify-neutral hover:border-spotify-green transition-colors"
          >
            ← Back to Overview
          </button>
        </div>

        {/* Demographic Breakdown Chart */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-spotify-text mb-3">Completion by Demographic</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={demographicData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#535353" />
              <XAxis type="number" domain={[0, 100]} stroke="#B3B3B3" tick={{ fill: '#B3B3B3' }} />
              <YAxis
                type="category"
                dataKey="demographic"
                stroke="#B3B3B3"
                tick={{ fill: '#B3B3B3' }}
                width={90}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#212121',
                  border: '1px solid #535353',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                }}
                labelStyle={{ color: '#FFFFFF' }}
                formatter={(value: number) => [`${value}%`, 'Completion Rate']}
              />
              <Bar dataKey="completionRate" radius={[0, 8, 8, 0]}>
                {demographicData.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={getBarColor(entry.completionRate)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Insight Cards for Each Demographic */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-spotify-text mb-3">Demographic Insights</h4>
          {demographicData.map((demo: any, index: number) => {
            const performance = getPerformanceIndicator(demo.completionRate, avgCompletionRate);
            const { insights, mismatches } = generateInsights(selectedEpisode, demo.demographic, demo);
            const preferences = selectedEpisode.demographicAffinityPreferences[demo.demographic];
            const affinity = selectedEpisode.affinityProfile;
            
            // Find peak drop-off point
            const peakDropOff = demo.dropOffPoints.reduce((max: any, point: any) => 
              point.exitRate > (max?.exitRate || 0) ? point : max, null
            );
            
            // Find peak engagement (lowest drop-off near end)
            const lateDropOffs = demo.dropOffPoints.filter((p: any) => p.timestamp > selectedEpisode.duration * 0.7);
            const peakEngagement = lateDropOffs.length > 0 
              ? lateDropOffs.reduce((min: any, point: any) => 
                  point.exitRate < (min?.exitRate || 100) ? point : min, null)
              : null;

            return (
              <div
                key={index}
                className="bg-spotify-dark border border-spotify-neutral rounded-lg p-5"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h5 className="text-lg font-semibold text-spotify-text">
                      {demo.demographic} • {demo.completionRate}%
                    </h5>
                    <p className="text-sm text-spotify-text-muted mt-1">
                      {demo.totalListeners.toLocaleString()} listeners • {demo.subscribersConverted} subscribers
                    </p>
                  </div>
                  <div className={`text-right ${performance.color}`}>
                    <div className="text-2xl">{performance.icon}</div>
                    <div className="text-xs font-semibold">{performance.label}</div>
                  </div>
                </div>

                {/* Affinity Profile Section */}
                <div className="mb-4 p-3 bg-spotify-dark-secondary rounded-lg">
                  <h6 className="text-sm font-semibold text-spotify-text mb-2">Affinity Profile Match</h6>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {Object.entries(affinity).map(([key, value]: [string, any]) => {
                      const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()).trim();
                      const prefValue = preferences[key as keyof typeof preferences];
                      const match = getAffinityMatch(value, prefValue);
                      const matchColor = match === '✓' ? 'text-spotify-green' : match === '◐' ? 'text-yellow-500' : 'text-red-500';
                      
                      return (
                        <div key={key} className="flex items-center justify-between">
                          <span className={`${matchColor} font-semibold`}>{match}</span>
                          <span className="text-spotify-text-muted">
                            {label}: Episode {value}/10 | You prefer: {prefValue}/10
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Why They Resonated/Underperformed */}
                <div className="mb-4">
                  <h6 className="text-sm font-semibold text-spotify-text mb-2">
                    {performance.icon === '⭐' ? 'Why They Resonated' : performance.icon === '⚠️' ? 'Why They Underperformed' : 'Performance Analysis'}
                  </h6>
                  <ul className="space-y-1 text-sm text-spotify-text-muted">
                    {performance.icon === '⭐' && insights.slice(0, 4).map((insight: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-spotify-green mr-2">•</span>
                        <span>{insight}</span>
                      </li>
                    ))}
                    {performance.icon === '⚠️' && mismatches.slice(0, 3).map((mismatch: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>{mismatch}</span>
                      </li>
                    ))}
                    {performance.icon === '◐' && (
                      <>
                        {insights.slice(0, 2).map((insight: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-yellow-500 mr-2">•</span>
                            <span>{insight}</span>
                          </li>
                        ))}
                        {mismatches.slice(0, 1).map((mismatch: string, idx: number) => (
                          <li key={`m-${idx}`} className="flex items-start">
                            <span className="text-yellow-500 mr-2">•</span>
                            <span>{mismatch}</span>
                          </li>
                        ))}
                      </>
                    )}
                    {performance.icon === '⭐' && demo.completionRate > 85 && (
                      <li className="flex items-start">
                        <span className="text-spotify-green mr-2">•</span>
                        <span>
                          Subscriber conversion: {((demo.subscribersConverted / (demo.totalListeners * demo.completionRate / 100)) * 100).toFixed(1)}% of completers ({((demo.subscribersConverted / (demo.totalListeners * demo.completionRate / 100)) * 100) > 10 ? '2x' : '1.5x'} platform average)
                        </span>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Drop-off Analysis */}
                {peakDropOff && (
                  <div className="mb-4 text-sm">
                    <h6 className="font-semibold text-spotify-text mb-1">Drop-off Analysis</h6>
                    <p className="text-spotify-text-muted">
                      Most exits occurred at {peakDropOff.timestamp}-{peakDropOff.timestamp + 2} minute mark ({peakDropOff.exitRate}% exit rate).
                      {peakEngagement && peakEngagement.exitRate < 5 && (
                        <> Peak engagement at {peakEngagement.timestamp}-{peakEngagement.timestamp + 2} minute mark (resolution/conclusion).</>
                      )}
                    </p>
                  </div>
                )}

                {/* Recommendation */}
                <div className="mt-4 p-3 bg-spotify-dark-secondary border border-spotify-green/30 rounded-lg">
                  <h6 className="text-sm font-semibold text-spotify-text mb-1">Recommendation</h6>
                  <p className="text-xs text-spotify-text-muted">
                    {performance.icon === '⭐' 
                      ? `Replicate this formula: ${insights[0]?.split(':')[0] || 'high narrative-driven and psychological depth'} for this demographic. This group has highest subscriber conversion rate.`
                      : performance.icon === '⚠️'
                      ? `Focus content creation on higher-performing segments OR create structured variant with clearer chapter breaks for this demographic.`
                      : `Consider optimizing ${mismatches[0]?.split(':')[0] || 'content structure'} to better align with this demographic's preferences.`
                    }
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Overview view
  return (
    <div className="bg-spotify-dark-secondary border border-spotify-neutral rounded-lg p-6 mb-8">
      <h3 className="text-xl font-semibold text-spotify-text mb-4">Episode Completion Rate Analysis</h3>
      
      {/* Interactive Bar Chart - Click to view demographics */}
      <div className="mb-4">
        <p className="text-sm text-spotify-text-muted mb-2">Click any bar to view demographic breakdown</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={completionTrendData}
            style={{ cursor: 'pointer' }}
          >
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
              formatter={(value: number, name: string, props: any) => [
                `${value}%`,
                'Completion Rate',
                `\n${props.payload.title}`,
              ]}
            />
            <Bar 
              dataKey="completionRate" 
              name="Completion %"
              radius={[8, 8, 0, 0]}
              onClick={(data: any, index: number) => {
                const entry = completionTrendData[index];
                if (entry && entry.episodeData) {
                  setSelectedEpisode(entry.episodeData);
                  setViewState('demographic');
                }
              }}
            >
              {completionTrendData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={getBarColor(entry.completionRate)}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Insight */}
      <p className="text-xs text-spotify-text-muted mt-4 italic">
        💡 Insight: Episodes with completion rates above 70% (Ep 05, Ep 07, Ep 11, Ep 12) generate 2.3x more engagement and 35% higher retention. The trending topic format (Ep 10, Ep 14) shows strong initial listens but lower completion due to longer duration. Consider optimizing episode length and pacing for episodes below 65% completion to improve overall engagement.
      </p>
    </div>
  );
}
