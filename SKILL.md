---
name: preflight-ui-kit-free
description: Comprehensive guide for AI coding agents and developers to build, compose, and customize modern web applications using the DevPreFlight Flat UI Component Kit Free Community Edition (React 19, Next.js 15, TypeScript, and Tailwind CSS).
---

# 🚀 DevPreFlight Flat UI Kit (Free Community Edition) — AI Agent Skill Guide

The **DevPreFlight Flat UI Component Kit (Community Edition)** is an open-source (MIT License), zero-bloat component library engineered for **React 19**, **Next.js 15 App Router**, **TypeScript**, and **Tailwind CSS**. It provides 15 production-ready, WCAG AAA compliant UI primitives and dashboard widgets following a **Modern Flat White & Blue** visual aesthetic.

This document serves as the single source of truth for AI agents (Antigravity, Cursor, Claude Code, Windsurf, Copilot) when generating pages, forms, and layouts using the Free Community Edition.

---

## 🎨 Design System & Visual Tokens

Always adhere to the DevPreFlight design tokens when crafting or customizing interfaces:

### Color Palette
- **Primary Blue**: `#2563eb` (`hover: #1d4ed8`, `active: #1e40af`)
- **Primary Tint / Background**: `#eff6ff` (border: `#bfdbfe`, text: `#1d4ed8`)
- **Accent Sky Blue**: `#0284c7` (light: `#f0f9ff`, border: `#bae6fd`)
- **Neutral Dark (Text / Headers)**: `#0f172a` (slate-900), Secondary text: `#475569` (slate-600), Muted: `#94a3b8` (slate-400)
- **Neutral Backgrounds**: Pure Canvas: `#ffffff`, Surface Card: `#f8fafc`, Subtle Section: `#f1f5f9`
- **Borders**: Light divider: `#e2e8f0` (slate-200), Medium card border: `#cbd5e1` (slate-300)
- **Status Colors**:
  - Success / Active: `#16a34a` (tint: `#f0fdf4`, border: `#bbf7d0`)
  - Warning / Pending: `#ea580c` / `#f59e0b` (tint: `#fff7ed`, border: `#fed7aa`)
  - Error / Failed: `#dc2626` (tint: `#fef2f2`, border: `#fecaca`)
  - Info / Trial: `#2563eb` (tint: `#eff6ff`, border: `#bfdbfe`)

### Typography & Border Radii
- **Headings & Body Font**: `'Plus Jakarta Sans'`, `'Inter'`, sans-serif
- **Monospace / Code**: `'JetBrains Mono'`, monospace
- **Border Radii**:
  - Small / Badges / Chips: `6px` (`rounded-[6px]`)
  - Controls / Inputs / Buttons: `8px` (`rounded-[8px]`) or `10px` (`rounded-[10px]`)
  - Cards & Containers: `12px` (`rounded-[12px]`) or `14px` (`rounded-[14px]`)
  - Full: `9999px` (`rounded-full`)
- **Shadows**: Clean, crisp, subtle flat shadow: `box-shadow: 0 1px 2px 0 rgba(15, 23, 42, 0.05);` (`shadow-xs` / `shadow-sm`)

---

## 📦 Directory Structure & Component Imports

In the Community Edition, components reside in `packages/react/src/`:

```
packages/react/src/
├── primitives/     # 13 Core UI Primitives (Buttons, Inputs, Toggles, Radios, Badges, etc.)
├── dashboard/      # 2 Free Dashboard Modules (QuickStatsBar, StatusBadge)
├── tokens/         # Type-safe design tokens (colors, radius, shadows, typography, transitions)
└── types/          # Shared TypeScript type definitions
```

### Import Conventions:

```tsx
// Option A: Design tokens import
import { tokens, colors, radius, shadows, typography, transitions } from '@/packages/react';

// Option B: Direct category import
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
  AvatarGroup,
  Chip,
} from '@/packages/react/src/primitives';

import { QuickStatsBar, StatusBadge } from '@/packages/react/src/dashboard';
import type { MetricItem, StatusType } from '@/packages/react/src/types';

// Option C: Barrel import from package root
import {
  Button,
  TextInput,
  QuickStatsBar,
  StatusBadge,
  tokens,
} from '@/packages/react/src';
```

---

## 📚 Component Catalog & Exact Props Reference (15 Free Modules)

### 1. Buttons & Action Triggers

#### `Button`
Versatile button with flat styling, custom sizes, icons, loading states, and active click scaling.
```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

// Usage:
<Button variant="primary" size="md">Save Changes</Button>
<Button variant="primary" loading={isSubmitting} loadingText="Saving...">Save Changes</Button>
<Button variant="secondary" size="sm">Cancel</Button>
<Button variant="outline" rightIcon={<ArrowRight size={16} />}>Continue</Button>
<Button variant="danger">Delete Account</Button>
<Button variant="subtle">Learn More</Button>
```

#### `LoadingButton`
Extends `Button` with an accessible spinning loader state.
```tsx
interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
  loadingText?: string;
}

// Usage:
<LoadingButton loading={isSubmitting} loadingText="Saving..." variant="primary">
  Save Changes
</LoadingButton>
```

#### `IconButton`
Square or circular icon-only button with mandatory accessibility label.
```tsx
interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'square' | 'circle';
  'aria-label': string; // Required for WCAG AAA
}

// Usage:
<IconButton aria-label="Delete project" variant="ghost" size="sm">
  <Trash2 className="w-4 h-4 text-red-600" />
</IconButton>
```

---

### 2. Form Inputs & Selection Controls

#### `TextInput`
Accessible text field with label, left/right icons, helper text, and error states.
```tsx
interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isRequired?: boolean;
}

// Usage:
<TextInput
  label="Work Email"
  type="email"
  placeholder="alex@company.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  errorMessage={errors.email}
  isRequired
/>
```

#### `PasswordInput`
Preconfigured input with built-in show/hide password toggle.
```tsx
<PasswordInput
  label="Master Password"
  placeholder="••••••••••••"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  errorMessage={errors.password}
  isRequired
/>
```

#### `Textarea`
Multi-line textarea with label, error handling, and smooth focus rings.
```tsx
<Textarea
  label="Project Notes"
  placeholder="Enter detailed description..."
  rows={4}
  value={notes}
  onChange={(e) => setNotes(e.target.value)}
  helperText="Markdown format supported."
/>
```

#### `SelectDropdown`
Styled HTML5 select with custom Chevron icon and error indicators.
```tsx
interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

<SelectDropdown
  label="Role Category"
  options={[
    { value: 'eng', label: 'Software Engineer' },
    { value: 'des', label: 'Product Designer' },
    { value: 'pm', label: 'Product Manager' },
  ]}
  value={role}
  onChange={(e) => setRole(e.target.value)}
/>
```

#### `ToggleSwitch`
Accessible boolean switch with keyboard focus and label/description pairing.
```tsx
<ToggleSwitch
  checked={autoDeploy}
  onChange={setAutoDeploy}
  label="Automatic Deployments"
  description="Trigger a production build every time code is pushed to main."
  size="md" // 'sm' | 'md' | 'lg'
/>
```

#### `Checkbox`
Checkable input with custom checkmark animation and description text.
```tsx
<Checkbox
  checked={termsAgreed}
  onChange={setTermsAgreed}
  label="I agree to the Terms of Service and Privacy Policy"
  errorMessage={errors.terms}
/>
```

#### `RadioGroup`
Accessible single-choice group supporting simple radio list or selectable cards.
```tsx
interface RadioOption {
  value: string;
  label: string;
  description?: string;
  badge?: string;
  disabled?: boolean;
}

// Usage (Simple List):
<RadioGroup
  name="notification-frequency"
  label="Email Digest Frequency"
  value={frequency}
  onChange={setFrequency}
  options={[
    { value: 'daily', label: 'Daily Summary', description: 'Receive emails every morning at 9am' },
    { value: 'weekly', label: 'Weekly Roundup', description: 'Digest sent every Monday' },
    { value: 'never', label: 'Do not send digests' },
  ]}
/>

// Usage (Selectable Cards):
<RadioGroup
  name="tier"
  variant="cards"
  value={tier}
  onChange={setTier}
  options={[
    { value: 'starter', label: 'Community Free', description: '15 MIT components', badge: 'Free' },
    { value: 'pro', label: 'Commercial Pro', description: '60+ modules & billing', badge: '$49' },
  ]}
/>
```

---

### 3. Indicators, Badges & Feedback Primitives

#### `StatusBadge`
Semantic status pills with subtle, solid, or dot styling.
```tsx
interface StatusBadgeProps {
  status: 'active' | 'pending' | 'failed' | 'trial' | 'pro' | 'enterprise' | 'neutral' | string;
  variant?: 'subtle' | 'solid' | 'dot';
  size?: 'sm' | 'md';
  label?: string;
  className?: string;
}

// Usage:
<StatusBadge status="active" />
<StatusBadge status="pending" variant="dot" label="Sync in progress" />
<StatusBadge status="failed" variant="solid" />
<StatusBadge status="trial" label="Free Community" />
```

#### `Chip`
Dismissible tags and filter indicators.
```tsx
<Chip label="React 19" variant="primary" />
<Chip label="Next.js 15" variant="accent" />
<Chip label="Tailwind CSS" onRemove={() => handleRemoveTag('tailwind')} />
```

#### `Avatar` & `AvatarGroup`
User avatar with fallback initials, image loading, and status indicators.
```tsx
<Avatar name="Sarah Jenkins" size="md" status="online" />
<Avatar src="/avatars/alex.jpg" name="Alex Rivera" size="lg" status="busy" />

<AvatarGroup max={4} size="sm">
  <Avatar name="David Chen" />
  <Avatar name="Elena Rostova" />
  <Avatar name="Marcus Miller" />
  <Avatar name="Kenji Sato" />
  <Avatar name="Sarah Jenkins" />
</AvatarGroup>
```

#### `Tooltip`
Lightweight hover/focus tooltip with automatic arrow pointer.
```tsx
<Tooltip content="Export analytics to CSV" position="top">
  <Button variant="outline" size="sm">Export</Button>
</Tooltip>
```

---

### 4. Dashboard & Metrics (Community Edition)

#### `QuickStatsBar`
Multi-metric responsive ribbon for SaaS dashboards, stats, and telemetry.
```tsx
interface MetricItem {
  label: string;
  value: string | number;
  delta?: string;
  deltaType?: 'positive' | 'negative' | 'neutral';
  comparisonPeriod?: string;
}

<QuickStatsBar
  stats={[
    { label: 'Active Projects', value: '12', delta: '+2 this month', deltaType: 'positive' },
    { label: 'Total API Requests', value: '84,290', delta: '+14.2%', deltaType: 'positive' },
    { label: 'Error Rate', value: '0.04%', delta: '-0.01%', deltaType: 'positive' },
    { label: 'Service Uptime', value: '99.98%', delta: 'Optimal', deltaType: 'neutral' },
  ]}
/>
```

---

## 🛠️ Free Edition UI Recipes for AI Agents

### Recipe 1: Workspace & Profile Settings Page
```tsx
'use client';

import React, { useState } from 'react';
import {
  Avatar,
  Button,
  LoadingButton,
  TextInput,
  PasswordInput,
  SelectDropdown,
  ToggleSwitch,
  Checkbox,
  StatusBadge,
} from '@/packages/react/src';

export default function ProfileSettingsPage() {
  const [name, setName] = useState('Alex Rivera');
  const [email, setEmail] = useState('alex@devpreflight.com');
  const [role, setRole] = useState('eng');
  const [twoFactor, setTwoFactor] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1200);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#cbd5e1] pb-6">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-extrabold text-[#0f172a] tracking-tight">Account Settings</h1>
            <StatusBadge status="active" label="Active Member" />
          </div>
          <p className="text-sm text-[#64748b] mt-1">Manage your personal details and workspace preferences.</p>
        </div>
        <LoadingButton loading={isSaving} loadingText="Saving..." onClick={handleSave} variant="primary">
          Save Changes
        </LoadingButton>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-[12px] border border-[#cbd5e1] p-6 shadow-xs space-y-6">
        <h2 className="text-base font-bold text-[#0f172a]">Personal Information</h2>
        <div className="flex items-center gap-4">
          <Avatar name={name} size="lg" status="online" />
          <div>
            <Button variant="outline" size="sm">Change Avatar</Button>
            <p className="text-xs text-[#94a3b8] mt-1">JPG, GIF, or PNG. Max size 2MB.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isRequired
          />
          <TextInput
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isRequired
          />
          <SelectDropdown
            label="Primary Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            options={[
              { value: 'eng', label: 'Software Engineer' },
              { value: 'des', label: 'Product Designer' },
              { value: 'pm', label: 'Product Manager' },
              { value: 'founder', label: 'Founder / Executive' },
            ]}
          />
        </div>
      </div>

      {/* Security & Preferences */}
      <div className="bg-white rounded-[12px] border border-[#cbd5e1] p-6 shadow-xs space-y-5">
        <h2 className="text-base font-bold text-[#0f172a]">Security & Notifications</h2>
        <div className="space-y-4 divide-y divide-[#f1f5f9]">
          <ToggleSwitch
            checked={twoFactor}
            onChange={setTwoFactor}
            label="Two-Factor Authentication (2FA)"
            description="Protect your workspace with an authenticator app verification code."
          />
          <div className="pt-4">
            <ToggleSwitch
              checked={emailAlerts}
              onChange={setEmailAlerts}
              label="Instant Deployment Notifications"
              description="Receive email alerts whenever a production deployment completes."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Recipe 2: Telemetry & Project Overview Card
```tsx
import { QuickStatsBar, StatusBadge, Button } from '@/packages/react/src';
import { RefreshCw, ExternalLink } from 'lucide-react';

export function ProjectOverviewBanner() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-bold text-[#0f172a]">Production Environment</h2>
          <StatusBadge status="active" />
        </div>
        <Button variant="outline" size="sm" leftIcon={<RefreshCw size={14} />}>
          Sync Metrics
        </Button>
      </div>

      <QuickStatsBar
        stats={[
          { label: 'Uptime (30d)', value: '99.99%', delta: 'Optimal', deltaType: 'neutral' },
          { label: 'Avg Latency', value: '38ms', delta: '-4ms', deltaType: 'positive' },
          { label: 'Active Users', value: '4,120', delta: '+12.4%', deltaType: 'positive' },
          { label: 'Pending Jobs', value: '3', delta: 'Low', deltaType: 'neutral' },
        ]}
      />
    </div>
  );
}
```

---

## ⚡ Comparison: Free Community vs Commercial Pro Edition

If the user asks for components not in the Free Community Edition (such as `PricingMatrix`, `PaywallGate`, `DataTable`, `ModalDialog`, `SlideOverDrawer`, `NavbarHeader`, `HeroWithSocialProof`, `ToastNotification`), inform them that those belong to **Preflight UI Pro** (60+ components).

| Category | Free Community Edition (MIT) | Commercial Pro Edition |
| :--- | :--- | :--- |
| **Primitives** | 13 Components (`Button`, `TextInput`, `ToggleSwitch`, `RadioGroup`, `Avatar`, etc.) | 13 Primitives + Enhanced Controls |
| **Dashboard** | `QuickStatsBar`, `StatusBadge` | `DataTable` (Sort/Filter/CSV), `MetricSparklineCard`, `ActivityTimeline`, `TabSwitcher`, `FilterSearchBar` |
| **Commerce** | ❌ Excluded | `PricingMatrix`, `PaywallGate`, `PaywallModal`, `InvoicingReceiptCard`, `DiscountCopyBar`, `CheckoutSummaryCard` |
| **Marketing** | ❌ Excluded | `NavbarHeader`, `FooterMultiCol`, `HeroWithSocialProof`, `HeroMinimal`, `FeaturesGrid3Col`, `FaqAccordion`, `ValueComparison` |
| **Feedback** | ❌ Excluded | `ModalDialog`, `SlideOverDrawer`, `ToastNotification` (`useToast`), `AlertBanner`, `PopoverCard` |
| **License** | MIT (Open Source) | Commercial License (Single / Unlimited Projects) |

---

## ⚠️ AI Agent Rules & Constraints for Free Edition

When generating code with DevPreFlight UI Kit Free Edition, AI agents MUST obey these rules:

1. **Strict TypeScript & React 19**: Never introduce `any` types. Ensure all event handlers, props, and callbacks are strictly typed.
2. **Use Only Free Components**: For free edition projects, never import excluded modules (`@/packages/react/src/commerce`, `marketing`, `feedback`, or advanced `dashboard` components like `DataTable`).
3. **WCAG AAA Compliance**: Always maintain high contrast (dark text `#0f172a` on white `#ffffff`, primary `#2563eb` on light backgrounds `#eff6ff`). Always provide `aria-label` for `IconButton`.
4. **Token Consistency**: Always use standard Tailwind token classes (`rounded-[8px]`, `rounded-[10px]`, `rounded-[12px]`, `border-[#cbd5e1]`, `bg-[#f8fafc]`, `text-[#0f172a]`).
5. **No External Runtime Bloat**: Rely solely on pure Tailwind CSS utilities, Lucide React icons, and DevPreFlight components.
