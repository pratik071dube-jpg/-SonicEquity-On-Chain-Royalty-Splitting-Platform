'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Download, Radio, Tv, Mic, Disc, PieChart, Sparkles } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { PrimaryButton, GhostButton } from '@/components/ui/Buttons';
import { StatusChip } from '@/components/ui/StatusChip';

export default function RevenueBreakdownPage() {
  const channelBreakdown = [
    {
      channel: 'Streaming Services',
      platforms: 'Spotify, Apple Music, Tidal',
      amountXlm: '80,977 XLM',
      sharePct: 65,
      color: '#a078ff',
      icon: Radio,
    },
    {
      channel: 'Sync Licensing',
      platforms: 'Film, TV Series, Commercials',
      amountXlm: '24,916 XLM',
      sharePct: 20,
      color: '#4cd7f6',
      icon: Tv,
    },
    {
      channel: 'Live Performance Rights',
      platforms: 'Concert Venues & Live Streams',
      amountXlm: '12,458 XLM',
      sharePct: 10,
      color: '#ffb0cd',
      icon: Mic,
    },
    {
      channel: 'Mechanical & Physical Sales',
      platforms: 'Bandcamp Vinyl, CDs, Merch',
      amountXlm: '6,229 XLM',
      sharePct: 5,
      color: '#cbc3d7',
      icon: Disc,
    },
  ];

  const downloadCsv = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      ['Channel,Platforms,Amount_XLM,Share_Percentage']
        .concat(channelBreakdown.map((c) => `"${c.channel}","${c.platforms}",${c.amountXlm},${c.sharePct}%`))
        .join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `sonicequity_revenue_breakdown_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ maxWidth: 1240, margin: '0 auto', padding: '32px 20px 60px' }}>
      {/* Back button header */}
      <div style={{ marginBottom: 20 }}>
        <Link href="/analytics" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--on-surface-variant)', fontSize: 14 }}>
          <ArrowLeft size={16} /> Back to Portfolio Analytics
        </Link>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <span className="data-mono" style={{ fontSize: 12, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            ON-CHAIN REVENUE ATTRIBUTION
          </span>
          <h1 style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--on-surface)', marginTop: 4 }}>
            Revenue Sources <span className="gradient-text">Breakdown</span>
          </h1>
          <p style={{ fontSize: 13, color: 'var(--on-surface-variant)', marginTop: 2 }}>
            Distribution channels and real-time revenue stream attribution.
          </p>
        </div>

        <GhostButton size="sm" onClick={downloadCsv} icon={<Download size={16} />}>
          Export Revenue CSV
        </GhostButton>
      </div>

      {/* Main Grid: SVG Donut Chart + Channel List */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
        {/* SVG Donut Chart Container */}
        <GlassCard variant="level3" glow style={{ padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <span className="data-mono" style={{ fontSize: 12, color: 'var(--on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
            REVENUE DISTRIBUTION BY CHANNEL
          </span>

          <div style={{ position: 'relative', width: 280, height: 280, margin: '20px 0' }}>
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
              <defs>
                <linearGradient id="grad-streaming" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#a078ff" />
                  <stop offset="100%" stopColor="#6d3bd7" />
                </linearGradient>
                <linearGradient id="grad-sync" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#4cd7f6" />
                  <stop offset="100%" stopColor="#03b5d3" />
                </linearGradient>
                <linearGradient id="grad-live" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffb0cd" />
                  <stop offset="100%" stopColor="#f751a1" />
                </linearGradient>
                <linearGradient id="grad-sales" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#cbc3d7" />
                  <stop offset="100%" stopColor="#958ea0" />
                </linearGradient>
              </defs>

              <circle cx="50" cy="50" fill="transparent" r="40" stroke="rgba(255,255,255,0.05)" strokeWidth="18" />

              {/* Streaming (65%) */}
              <circle cx="50" cy="50" fill="transparent" r="40" stroke="url(#grad-streaming)" strokeDasharray="163.35 251.32" strokeDashoffset="0" strokeWidth="18" />
              {/* Sync (20%) */}
              <circle cx="50" cy="50" fill="transparent" r="40" stroke="url(#grad-sync)" strokeDasharray="50.26 251.32" strokeDashoffset="-163.35" strokeWidth="18" />
              {/* Live (10%) */}
              <circle cx="50" cy="50" fill="transparent" r="40" stroke="url(#grad-live)" strokeDasharray="25.13 251.32" strokeDashoffset="-213.61" strokeWidth="18" />
              {/* Sales (5%) */}
              <circle cx="50" cy="50" fill="transparent" r="40" stroke="url(#grad-sales)" strokeDasharray="12.56 251.32" strokeDashoffset="-238.74" strokeWidth="18" />
            </svg>

            {/* Center Total Readout */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span className="data-mono" style={{ fontSize: 11, color: 'var(--on-surface-variant)', textTransform: 'uppercase' }}>TOTAL EARNINGS</span>
              <span className="data-mono" style={{ fontSize: 28, fontWeight: 800, color: '#ffffff' }}>124,580</span>
              <span className="data-mono" style={{ fontSize: 13, color: 'var(--primary)', fontWeight: 600 }}>XLM</span>
            </div>
          </div>
        </GlassCard>

        {/* Breakdown Channel List */}
        <GlassCard variant="level2" style={{ padding: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, paddingBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--on-surface)' }}>Platform Breakdown</h2>
            <StatusChip status="AUTOMATED" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {channelBreakdown.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.channel}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 16,
                    borderRadius: 12,
                    background: 'rgba(11, 19, 38, 0.6)',
                    borderLeft: `4px solid ${item.color}`,
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: `${item.color}22`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconComp size={20} color={item.color} />
                    </div>

                    <div>
                      <h3 style={{ fontSize: 15, fontWeight: 600, color: 'var(--on-surface)' }}>{item.channel}</h3>
                      <p style={{ fontSize: 12, color: 'var(--on-surface-variant)' }}>{item.platforms}</p>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <p className="data-mono" style={{ fontSize: 15, fontWeight: 700, color: '#ffffff' }}>
                      {item.amountXlm}
                    </p>
                    <span className="data-mono" style={{ fontSize: 12, color: item.color, fontWeight: 700 }}>
                      {item.sharePct}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
