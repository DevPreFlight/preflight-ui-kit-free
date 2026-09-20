---
name: preflight-ui-kit-free
description: Comprehensive guide for AI coding agents and developers to build, compose, and customize modern web applications using the DevPreFlight Flat UI Component Kit Free Community Edition (React 19, Next.js 16, TypeScript, and Tailwind CSS).
---

# 🚀 Preflight UI Community Edition (MIT) — AI Agent Skill Guide

The **Preflight UI Community Edition** is a free, open-source (MIT License) component library engineered for **React 19**, **Next.js 16 App Router**, **TypeScript**, and **Tailwind CSS**. It contains **15 essential primitives and dashboard widgets** following the signature **Modern Flat White & Blue** visual aesthetic.

---

## 🎨 Design System & Visual Tokens

### Color Palette
- **Primary Blue**: `#2563eb` (`hover: #1d4ed8`, `active: #1e40af`)
- **Primary Tint / Background**: `#eff6ff` (border: `#bfdbfe`, text: `#1d4ed8`)
- **Accent Sky Blue**: `#0284c7` (light: `#f0f9ff`, border: `#bae6fd`)
- **Neutral Dark (Text / Headers)**: `#0f172a` (slate-900), Secondary text: `#475569` (slate-600), Muted: `#94a3b8` (slate-400)
- **Neutral Backgrounds**: Pure Canvas: `#ffffff`, Surface Card: `#f8fafc`, Subtle Section: `#f1f5f9`
- **Borders**: Light divider: `#e2e8f0` (slate-200), Medium card border: `#cbd5e1` (slate-300)

### Border Radii
- Small / Badges: `6px` (`rounded-[6px]`)
- Inputs / Buttons: `8px` (`rounded-[8px]`) or `10px` (`rounded-[10px]`)
- Cards & Containers: `12px` (`rounded-[12px]`) or `14px` (`rounded-[14px]`)

---

## 📦 Component Imports

```tsx
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
```

---

## 🛠️ Slash Command: `/preflight-ui-kit token <design_token>`

When the user invokes `/preflight-ui-kit token [options]` (e.g. `/preflight-ui-kit token primary=#6366f1 radius=6px` or `/preflight-ui-kit token emerald`), the AI agent must immediately inspect and update the design tokens directly in `app/globals.css` (or `globals.css`).

### 🛡️ Why This is 100% CI/CD Safe:
- **Never edit files in `node_modules`:** Tokens are declared as CSS Variables in the user's repository `app/globals.css`.
- **Cascading Overrides:** Declaring `:root { ... }` after `@import "@devpreflight/ui-kit/styles.css";` overrides the default theme cleanly across all components.
- **Git Persistent:** Changes are committed to the user's repo, so `npm install && npm run build` on Vercel, Netlify, or GitHub Actions preserves the custom brand styling.

### 🎨 Supported Token Presets & Modifiers:

1. **Color Themes (`primary=<preset|hex>`):**
   - **`blue` (Default):** `--primary: #2563eb; --primary-hover: #1d4ed8; --primary-light: #eff6ff; --primary-border: #bfdbfe;`
   - **`violet` / `indigo`:** `--primary: #6366f1; --primary-hover: #4f46e5; --primary-light: #eef2ff; --primary-border: #c7d2fe;`
   - **`emerald` / `green`:** `--primary: #059669; --primary-hover: #047857; --primary-light: #ecfdf5; --primary-border: #a7f3d0;`
   - **`orange` / `sunset`:** `--primary: #ea580c; --primary-hover: #c2410c; --primary-light: #fff7ed; --primary-border: #fed7aa;`
   - **`sky` / `ocean`:** `--primary: #0284c7; --primary-hover: #0369a1; --primary-light: #f0f9ff; --primary-border: #bae6fd;`
   - **`slate` / `monochrome`:** `--primary: #0f172a; --primary-hover: #1e293b; --primary-light: #f8fafc; --primary-border: #cbd5e1;`

2. **Corner Radii (`radius=<none|sm|md|lg|custom>`):**
   - **`none` / `sharp`:** `--radius-sm: 0px; --radius-md: 0px; --radius-lg: 0px;`
   - **`sm` / `compact`:** `--radius-sm: 4px; --radius-md: 6px; --radius-lg: 8px;`
   - **`md` / `standard`:** `--radius-sm: 6px; --radius-md: 10px; --radius-lg: 14px;`
   - **`lg` / `smooth`:** `--radius-sm: 8px; --radius-md: 14px; --radius-lg: 20px;`

### 💻 Exact Agent Action:
AI Agent must locate `app/globals.css` and insert/update:
```css
@import "@devpreflight/ui-kit/styles.css";

/* DevPreFlight Design Token Customization (CI/CD Safe) */
:root {
  --primary: #6366f1;
  --primary-hover: #4f46e5;
  --primary-light: #eef2ff;
  --primary-border: #c7d2fe;
  --radius-md: 6px;
}
```
