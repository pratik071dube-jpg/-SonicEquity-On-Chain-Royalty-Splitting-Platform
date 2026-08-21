'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  TrendingUp,
  ArrowUpRight,
  ArrowLeft,
  Calendar,
  Sparkles,
  PieChart,
  BarChart3,
  CheckCircle2,
  Disc,
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { PrimaryButton, GhostButton } from '@/components/ui/Buttons';
import { StatusChip } from '@/components/ui/StatusChip';
import { useWallet } from '@/hooks/useWallet';

export default function PortfolioAnalyticsPage() {
  const { isConnected } = useWallet();
  const [timeRange, setTimeRange] = useState<'1M' | '6M' | '1Y' | 'ALL'>('1Y');

  const monthlyBars = [
    { month: 'Jun', val: 1.2, height: '40%' },
    { month: 'Jul', val: 2.1, height: '60%' },
    { month: 'Aug', val: 4.2, height: '100%', isPeak: true },
    { month: 'Sep', val: 3.5, height: '80%' },
    { month: 'Oct', val: 1.8, height: '50%' },
    { month: 'Nov', val: 2.8, height: '70%' },
  ];

  return (
    <div style={{ maxWidth: 1240, margin: '0 auto', padding: '32px 20px 60px' }}>
      {/* Back button header */}
      <div style={{ marginBottom: 20 }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--on-surface-variant)', fontSize: 14 }}>
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <span className="data-mono" style={{ fontSize: 12, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            PORTFOLIO ANALYTICS HUB
          </span>
          <h1 style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--on-surface)', marginTop: 4 }}>
            Portfolio <span className="gradient-text">Analytics & Growth</span>
          </h1>
          <p style={{ fontSize: 13, color: 'var(--on-surface-variant)', marginTop: 2 }}>
            Real-time track yield analytics, historical peak earnings, and performance metrics.
          </p>
        </div>

        <Link href="/revenue" style={{ textDecoration: 'none' }}>
          <PrimaryButton size="sm" icon={<PieChart size={16} />}>
            Revenue Sources Breakdown
          </PrimaryButton>
        </Link>
      </div>

      {/* Hero Section: Total Royalties Earned YTD */}
      <GlassCard variant="level3" glow style={{ padding: 32, marginBottom: 32, position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <span className="data-mono" style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--on-surface-variant)' }}>
              Total Royalties Earned (YTD)
            </span>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 8, flexWrap: 'wrap' }}>
              <span className="data-mono" style={{ fontSize: 44, fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>
                124,580.00 <span style={{ fontSize: 24, color: 'var(--secondary)' }}>XLM</span>
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#44e2cd', fontSize: 14, fontFamily: 'Geist, monospace' }}>
                <TrendingUp size={16} />
                <span>+24.5% YTD vs previous year</span>
              </div>
            </div>

            <p className="data-mono" style={{ fontSize: 14, color: 'var(--on-surface-variant)', marginTop: 6 }}>
              ≈ $14,326.70 USD • Verified On-Chain via Stellar Soroban
            </p>
          </div>

          {/* Time range switcher */}
          <div style={{ display: 'flex', gap: 4, background: 'rgba(11,19,38,0.8)', padding: 4, borderRadius: 10, border: '1px solid rgba(255,255,255,0.08)' }}>
            {(['1M', '6M', '1Y', 'ALL'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className="data-mono"
                style={{
                  padding: '6px 14px',
                  borderRadius: 6,
                  fontSize: 12,
                  fontWeight: 700,
                  border: 'none',
                  background: timeRange === range ? 'var(--primary-container)' : 'transparent',
                  color: timeRange === range ? '#060e20' : 'var(--on-surface-variant)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Peak Earnings SVG Waveform Overlay */}
        <div style={{ position: 'relative', height: 220, width: '100%', marginTop: 24 }}>
          <div
            style={{
              position: 'absolute',
              top: 10,
              right: 40,
              background: 'rgba(19, 27, 46, 0.9)',
              border: '1px solid rgba(208, 188, 255, 0.4)',
              borderRadius: 12,
              padding: '10px 16px',
              boxShadow: '0 0 20px rgba(208, 188, 255, 0.3)',
              zIndex: 10,
              textAlign: 'right',
            }}
          >
            <span className="data-mono" style={{ fontSize: 11, color: 'var(--primary)', textTransform: 'uppercase' }}>PEAK EARNINGS</span>
            <p className="data-mono" style={{ fontSize: 16, fontWeight: 700, color: '#ffffff' }}>14,200 XLM</p>
            <span className="data-mono" style={{ fontSize: 10, color: 'var(--on-surface-variant)' }}>Aug 2026</span>
          </div>

          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 50" style={{ width: '100%', height: '100%' }}>
            <defs>
              <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#4cd7f6" />
                <stop offset="100%" stopColor="#d0bcff" />
              </linearGradient>
              <linearGradient id="fillGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#d0bcff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0b1326" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,50 L0,40 C10,35 20,45 30,30 C40,15 50,25 60,10 C70,-5 80,20 90,5 L100,0 L100,50 Z" fill="url(#fillGrad)" />
            <path d="M0,40 C10,35 20,45 30,30 C40,15 50,25 60,10 C70,-5 80,20 90,5 L100,0" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="60" cy="10" r="2" fill="#d0bcff" />
          </svg>
        </div>
      </GlassCard>

      {/* Monthly Revenue Comparison Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
        {/* Current Month Box */}
        <GlassCard variant="level2" style={{ padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span className="data-mono" style={{ fontSize: 12, color: 'var(--on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            CURRENT MONTH EARNINGS
          </span>
          <div className="data-mono" style={{ fontSize: 36, fontWeight: 700, color: '#ffffff', marginTop: 8 }}>
            4,250.00 <span style={{ fontSize: 18, color: 'var(--on-surface-variant)' }}>XLM</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
            <span className="data-mono" style={{ background: 'rgba(68, 226, 205, 0.15)', color: '#44e2cd', padding: '4px 10px', borderRadius: 6, fontSize: 12, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <ArrowUpRight size={14} /> +12.4%
            </span>
            <span style={{ fontSize: 12, color: 'var(--on-surface-variant)' }}>vs previous month</span>
          </div>
        </GlassCard>

        {/* 6 Months Bar Chart Comparison */}
        <GlassCard variant="level2" style={{ padding: 24 }}>
          <span className="data-mono" style={{ fontSize: 12, color: 'var(--on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            LAST 6 MONTHS PERFORMANCE
          </span>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12, height: 140, marginTop: 20 }}>
            {monthlyBars.map((b) => (
              <div key={b.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, height: '100%', justifyContent: 'flex-end' }}>
                <div
                  style={{
                    width: '100%',
                    height: b.height,
                    background: b.isPeak ? 'linear-gradient(180deg, #d0bcff 0%, #a078ff 100%)' : 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '4px 4px 0 0',
                    boxShadow: b.isPeak ? '0 0 12px rgba(208, 188, 255, 0.5)' : 'none',
                    transition: 'all 0.3s ease',
                  }}
                />
                <span className="data-mono" style={{ fontSize: 11, color: b.isPeak ? 'var(--primary)' : 'var(--on-surface-variant)', fontWeight: b.isPeak ? 700 : 400 }}>
                  {b.month}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
