# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DirectPay Solutions is a React SPA for a payment gateway service bridging V5 Pay and the Philippine market (QRPH, bank transfers, multi-wallet support). Frontend-only marketing site, no backend.

**Production URL:** https://directpayph.com

## Commands

```bash
npm run dev          # Start dev server on localhost:8080
npm run build        # Production build to dist/
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run test         # Run all tests (Vitest)
npm run test:watch   # Run tests in watch mode
```

**Production deployment:**
```bash
npm run build && pm2 restart directpay
```

## Architecture

**Tech Stack:** React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui + Framer Motion

**Entry Flow:**
`index.html` → `src/main.tsx` → `src/App.tsx`

**App.tsx Provider Hierarchy:**
```
QueryClientProvider → TooltipProvider → Toaster → Sonner → BrowserRouter
  └── ScrollRestoration
  └── AnimatedRoutes (AnimatePresence + Suspense)
  └── ScrollToTop
```

**Code Splitting Strategy:**
- Index page: Eager loaded (best first-load experience)
- All other pages: Lazy loaded via `React.lazy()` with `PageTransition` wrapper
- Creates separate chunks per page (~10-50KB each vs 473KB main bundle)

**Routes:** `/`, `/about`, `/pricing`, `/docs`, `/contact`, `/integrations`, `/blog`, `/privacy`, `/terms`

## Key Components

| Component | Purpose |
|-----------|---------|
| `PageTransition` | Framer Motion fade/slide animation wrapper |
| `ScrollRestoration` | Resets scroll on route change, handles hash navigation |
| `ScrollToTop` | Floating button appears after 300px scroll |
| `LazyImage` | Intersection observer-based lazy loading with placeholder |
| `Header` | Fixed nav with scroll-aware glass effect |

**Path Alias:** `@/*` → `src/*`

## UI & Styling

- **Components:** shadcn/ui (Radix UI primitives) in `src/components/ui/`
- **Animations:** Framer Motion for page transitions, scroll-triggered animations
- **Icons:** Lucide React
- **Theme:** CSS variables, dark mode via class strategy

**Custom CSS Classes** (`src/index.css`):
- `.hero-gradient` - Navy/blue gradient background
- `.text-gradient-light` - Gradient text effect
- `.glass`, `.glass-dark` - Backdrop blur glass morphism
- `.hover-lift` - Translate + shadow on hover
- `.shadow-card`, `.shadow-elevated` - Card shadows
- `.shimmer` - Loading shimmer animation

**Tailwind Custom Animations** (`tailwind.config.ts`):
`fade-in-up`, `fade-in-down`, `fade-in-left`, `fade-in-right`, `scale-in`, `slide-up`, `bounce-subtle`, `shimmer`

## State & Data

- **Server State:** TanStack React Query (configured, not actively used)
- **Forms:** React Hook Form + Zod validation
- **Notifications:** Sonner toast library

## Production Deployment

- **Process Manager:** PM2 serving `dist/` via `serve` on port 3000
- **Reverse Proxy:** Nginx with SSL (Let's Encrypt auto-renewal)
- **Domain:** directpayph.com + www.directpayph.com

**Server paths:**
- Nginx config: `/etc/nginx/sites-available/directpayph.com`
- SSL certs: `/etc/letsencrypt/live/directpayph.com/`
- App: `/root/directpay/`

## Testing

Vitest with jsdom. Test files: `src/**/*.{test,spec}.{ts,tsx}`. Setup in `src/test/setup.ts` mocks `window.matchMedia`.
