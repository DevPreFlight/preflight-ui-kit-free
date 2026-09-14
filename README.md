# 🚀 Preflight UI — Free Community Edition (MIT)

> **The Modern Flat White & Blue Component Library for React 19, Next.js 15, and Tailwind CSS.**  
> 15 modular, accessible (WCAG AAA), zero-bloat copy-paste primitives and dashboard widgets with an interactive showcase, AI agent skills, and starter template.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React 19](https://img.shields.io/badge/React-19.0.0-61dafb.svg)](https://react.dev)
[![Next.js 15](https://img.shields.io/badge/Next.js-15.0-black.svg)](https://nextjs.org)
[![TypeScript 5.7+](https://img.shields.io/badge/TypeScript-Strict_100%25-3178c6.svg)](https://www.typescriptlang.org)
[![WCAG AAA](https://img.shields.io/badge/Accessibility-WCAG_AAA-16a34a.svg)](https://www.w3.org/WAI/standards-guidelines/wcag/)

---

## ⚡ Quick Start

### 1. Clone & Run Locally
```bash
# Clone repository
git clone https://github.com/DevPreFlight/preflight-ui-kit-free.git
cd preflight-ui-kit-free

# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the interactive showcase.

### 2. Deploy to Vercel in 1-Click
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/DevPreFlight/preflight-ui-kit-free)

---

## 🗂️ Included Free MIT Components (15 Modules)

| Category | Included Components |
| :--- | :--- |
| **Primitives (13)** | `Button`, `IconButton`, `LoadingButton`, `TextInput`, `PasswordInput`, `Textarea`, `SelectDropdown`, `ToggleSwitch`, `Checkbox`, `RadioGroup`, `Tooltip`, `Avatar`, `Chip` |
| **Dashboard & Stats (2)** | `QuickStatsBar`, `StatusBadge` |

---

## 🤖 AI Coding Agent Ready

This free repository includes **`SKILL.md`**, **`.cursorrules`**, and **`CLAUDE.md`** pre-configured for:
- **Google Antigravity**: Included under `.agents/skills/preflight-ui-kit-free/SKILL.md`
- **Cursor IDE**: Automatically reads `.cursorrules`
- **Claude Code**: Automatically reads `CLAUDE.md` and `SKILL.md`
- **Windsurf & Copilot**: Reference `SKILL.md` for exact component props and recipes

---

## 💡 How to Use in Your Project (Copy & Paste)

All components are standalone with zero hidden runtime dependencies. You can import directly from `@preflight-ui/react` or copy the file into your components folder:

```tsx
import { Button, TextInput, StatusBadge } from './packages/react/src';

export function UserProfileCard() {
  return (
    <div className="p-6 bg-white rounded-xl border border-[#cbd5e1] space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-[#0f172a]">Account Details</h3>
        <StatusBadge status="active" />
      </div>
      <TextInput label="Display Name" placeholder="Alex Rivers" />
      <Button variant="primary">Save Changes</Button>
    </div>
  );
}
```

---

## 🚀 Comparison: Community (Free) vs. Pro (Commercial)

Looking for full SaaS Commerce modules, Paywalls, Marketing blocks, and commercial licenses?

| Feature / Component | Free Community (MIT) | Pro Commercial Edition |
| :--- | :---: | :---: |
| **Total Components** | 15 Modules | **60+ Modules** |
| **UI Primitives & Dashboard Stats** | ✅ Included | ✅ Included |
| **AI Agent Skills & Config** | ✅ Included (15 MIT Components) | ✅ **Full 60+ Commercial Modules Guide** |
| **Commerce & Billing Blocks** | ❌ | ✅ **PaywallGate, PricingMatrix, Invoicing, CheckoutCard** |
| **Marketing Sections & Grids** | ❌ | ✅ **Hero Blocks, Features Grid, FAQ, Multi-Col Footers** |
| **Feedback & Overlays** | ❌ | ✅ **Modal Dialogs, Slide-Over Drawers, Toast Notifications** |
| **Advanced Data Tables** | ❌ | ✅ **Live Search, Multi-Filter, Sort, Pagination** |
| **Storybook Full Explorer** | Starter Showcase | ✅ **Full 60+ Module Sandbox & Addon Controls** |
| **Commercial License** | MIT | **Unlimited Commercial Projects** |

👉 **[Upgrade to Preflight Pro on DevPreFlight.com](https://devpreflight.com)**  
*Use coupon code **`GITHUB20`** for 20% off your license!*

---

## 📜 License

This repository and all components inside are released under the [MIT License](LICENSE).  
Feel free to use it in personal, open-source, and commercial projects.

© 2026 DevPreFlight. All rights reserved.
