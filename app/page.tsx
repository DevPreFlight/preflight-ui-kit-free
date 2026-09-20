'use client';

import React, { useState } from 'react';
import {
  Button,
  IconButton,
  LoadingButton,
  TextInput,
  PasswordInput,
  Textarea,
  SelectDropdown,
  ToggleSwitch,
  Checkbox,
  RadioGroup,
  Tooltip,
  Avatar,
  Chip,
  QuickStatsBar,
  StatusBadge,
} from '@devpreflight/ui-kit';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<'primitives' | 'dashboard'>('primitives');
  const [switchState, setSwitchState] = useState(true);
  const [checkboxState, setCheckboxState] = useState(true);
  const [radioValue, setRadioValue] = useState('standard');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyCode = (key: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      {/* Top Banner */}
      <div className="bg-[#2563eb] text-white px-4 py-2 text-xs sm:text-sm font-semibold text-center flex items-center justify-center gap-2">
        <span>🚀 Preflight UI Community Edition (MIT) is 100% Free & Open Source!</span>
        <a
          href="https://devpreflight.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white/80 transition-colors ml-1 font-bold"
        >
          Explore Pro Version (60+ Components) →
        </a>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#2563eb] flex items-center justify-center text-white font-bold text-base shadow-sm">
              ✈
            </div>
            <div>
              <span className="font-extrabold text-[#0f172a] text-lg tracking-tight">Preflight UI</span>
              <span className="ml-2 px-2 py-0.5 rounded-full bg-[#eff6ff] text-[#2563eb] text-xs font-bold border border-[#bfdbfe]">
                Community MIT
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/DevPreFlight/preflight-ui-kit-free"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-bold text-[#334155] bg-[#f1f5f9] hover:bg-[#e2e8f0] border border-[#cbd5e1] rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              Star on GitHub
            </a>
            <a
              href="https://devpreflight.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-lg shadow-sm transition-colors"
            >
              Get Pro (60+ Components)
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 text-center border-b border-[#e2e8f0] bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
            <span>15 Essential MIT Components Included</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-4">
            The Modern Flat White & Blue <br className="hidden sm:inline" />
            <span className="text-[#2563eb]">Component Kit for React 19 & Next.js</span>
          </h1>

          <p className="text-base sm:text-lg text-[#64748b] max-w-2xl mx-auto mb-8 leading-relaxed">
            Zero bloat, accessible (WCAG AAA), strictly typed, and built with modern Tailwind CSS.
            Copy-paste essential primitives and dashboard widgets directly into your project.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#playground"
              className="px-5 py-2.5 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-sm shadow-sm transition-colors"
            >
              Explore Components Below ↓
            </a>
            <a
              href="https://github.com/DevPreFlight/preflight-ui-kit-free"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#0f172a] font-bold text-sm border border-[#cbd5e1] transition-colors"
            >
              Clone GitHub Repo
            </a>
            <a
              href="https://vercel.com/new/clone?repository-url=https://github.com/DevPreFlight/preflight-ui-kit-free"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-black hover:bg-[#1e293b] text-white font-bold text-sm transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 76 65">
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
              </svg>
              Deploy to Vercel
            </a>
          </div>
        </div>
      </section>

      {/* Main Interactive Showcase */}
      <main id="playground" className="max-w-7xl mx-auto px-4 sm:px-8 py-10 flex-1 w-full">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-[#cbd5e1] pb-3 mb-8 overflow-x-auto">
          {[
            { id: 'primitives', label: '1. UI Primitives (13 Modules)' },
            { id: 'dashboard', label: '2. Dashboard & Telemetry (2 Modules)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={
                'px-4 py-2 rounded-lg text-sm font-bold transition-colors shrink-0 ' +
                (activeTab === tab.id
                  ? 'bg-[#2563eb] text-white shadow-xs'
                  : 'text-[#64748b] hover:text-[#0f172a] hover:bg-white')
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Primitives */}
        {activeTab === 'primitives' && (
          <div className="space-y-8">
            {/* Buttons */}
            <div className="bg-white rounded-xl border border-[#cbd5e1] p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4 border-b border-[#f1f5f9] pb-3">
                <div>
                  <h3 className="text-base font-bold text-[#0f172a]">Buttons & Interactive States</h3>
                  <p className="text-xs text-[#64748b]">Primary, Secondary, Outline, Danger, Subtle, and Loading states.</p>
                </div>
                <button
                  onClick={() => copyCode('btn', '<Button variant="primary">Save Changes</Button>')}
                  className="text-xs font-semibold text-[#2563eb] hover:underline"
                >
                  {copiedKey === 'btn' ? '✓ Copied' : 'Copy JSX'}
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="subtle">Subtle</Button>
                <LoadingButton loading={false} variant="primary">Loading Button</LoadingButton>
              </div>
            </div>

            {/* Inputs & Form Controls */}
            <div className="bg-white rounded-xl border border-[#cbd5e1] p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4 border-b border-[#f1f5f9] pb-3">
                <div>
                  <h3 className="text-base font-bold text-[#0f172a]">Form Inputs & Selects</h3>
                  <p className="text-xs text-[#64748b]">Text input, Password with reveal toggle, Select dropdown, and Textarea.</p>
                </div>
                <button
                  onClick={() => copyCode('inputs', '<TextInput label="Work Email" placeholder="you@company.com" />')}
                  className="text-xs font-semibold text-[#2563eb] hover:underline"
                >
                  {copiedKey === 'inputs' ? '✓ Copied' : 'Copy JSX'}
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextInput label="Work Email" placeholder="alex@devpreflight.com" helperText="We'll never share your email." />
                <PasswordInput label="Master Password" placeholder="••••••••••••" />
                <SelectDropdown
                  label="Role Category"
                  options={[
                    { value: 'eng', label: 'Software Engineer' },
                    { value: 'des', label: 'Product Designer' },
                    { value: 'pm', label: 'Product Manager' },
                  ]}
                />
                <Textarea label="Project Notes" placeholder="Write any additional requirements..." rows={3} />
              </div>
            </div>

            {/* Toggles, Checkboxes, Chips & Badges */}
            <div className="bg-white rounded-xl border border-[#cbd5e1] p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4 border-b border-[#f1f5f9] pb-3">
                <div>
                  <h3 className="text-base font-bold text-[#0f172a]">Toggles, Radios, Chips & Badges</h3>
                  <p className="text-xs text-[#64748b]">Accessible selection controls and micro-indicators.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <ToggleSwitch
                    checked={switchState}
                    onChange={setSwitchState}
                    label="Instant Email Notifications"
                    description="Receive alerts whenever a deployment succeeds."
                  />
                  <Checkbox
                    checked={checkboxState}
                    onChange={setCheckboxState}
                    label="Agree to Developer Terms of Service"
                  />
                  <div className="flex items-center gap-2 pt-2">
                    <StatusBadge status="active" />
                    <StatusBadge status="pending" />
                    <StatusBadge status="trial" />
                    <Chip label="React 19" variant="primary" />
                    <Chip label="Next.js 15" variant="accent" />
                  </div>
                </div>
                <div>
                  <RadioGroup
                    name="plan-tier"
                    value={radioValue}
                    onChange={setRadioValue}
                    options={[
                      { value: 'free', label: 'Community MIT Edition (Free)' },
                      { value: 'standard', label: 'Preflight Pro ($49 Single Project)' },
                      { value: 'agency', label: 'Preflight Agency ($99 Unlimited)' },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Dashboard & Stats */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl border border-[#cbd5e1] p-6 shadow-xs">
              <h3 className="text-base font-bold text-[#0f172a] mb-2">QuickStatsBar</h3>
              <p className="text-xs text-[#64748b] mb-4">Multi-metric status ribbon for SaaS dashboards and telemetry.</p>
              <QuickStatsBar
                stats={[
                  { label: 'Monthly Recurring Revenue', value: '$28,450', delta: '+14.2%', deltaType: 'positive' },
                  { label: 'Active Subscribers', value: '1,420', delta: '+8.1%', deltaType: 'positive' },
                  { label: 'Avg. Churn Rate', value: '1.2%', delta: '-0.4%', deltaType: 'positive' },
                  { label: 'API Uptime (30d)', value: '99.99%', delta: 'Optimal', deltaType: 'neutral' },
                ]}
              />
            </div>
          </div>
        )}

        {/* Upgrade to Pro Callout */}
        <div className="mt-14 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white p-8 sm:p-10 border border-[#334155] shadow-lg">
          <div className="max-w-3xl">
            <span className="px-3 py-1 rounded-full bg-[#2563eb]/20 text-[#60a5fa] border border-[#2563eb]/40 text-xs font-bold uppercase tracking-wider">
              Unlock the Full Commercial Kit
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-2 tracking-tight">
              Need Billing Modules, Paywall Gates, and AI Agent Skills?
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] mb-6 leading-relaxed">
              Upgrade to <strong className="text-white">Preflight UI Pro</strong> to get all 60+ commercial components,
              automated cursorrules, Claude CLI configurations, advanced data tables, pricing matrices, and lifetime commercial updates.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs text-[#cbd5e1]">
              <div className="flex items-center gap-2">
                <span className="text-[#38bdf8]">✓</span> 60+ Production-Ready Modules
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#38bdf8]">✓</span> AI Agent SKILL.md & .cursorrules
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#38bdf8]">✓</span> Pricing Matrices & Paywall Gates
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#38bdf8]">✓</span> Advanced Data Tables (Filter/Sort/CSV)
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://devpreflight.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-sm shadow-md transition-colors"
              >
                Get Preflight Pro (Use code GITHUB20 for 20% off) →
              </a>
              <span className="text-xs text-[#94a3b8]">One-time payment • Lifetime access</span>
            </div>
          </div>
        </div>
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-[#e2e8f0] bg-white py-8 px-4 sm:px-8 text-center text-xs text-[#64748b]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 DevPreFlight. Released under the MIT License.</p>
          <div className="flex items-center gap-6">
            <a href="https://devpreflight.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0f172a] transition-colors">
              Commercial Pro Edition
            </a>
            <a href="https://github.com/DevPreFlight/preflight-ui-kit-free" target="_blank" rel="noopener noreferrer" className="hover:text-[#0f172a] transition-colors">
              GitHub Repository
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
