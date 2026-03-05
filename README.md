# COSMATE Challenge Landing Page

🚀 High-conversion landing page for the COSMATE 10-Day Content Automation Challenge.

## Tech Stack
- **Next.js 14** (App Router)
- **TailwindCSS** — utility-first styling
- **Framer Motion** — scroll-triggered animations
- **TypeScript** — full type safety

## Getting Started

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # Production build
```

## Structure
```
app/page.tsx                    — Main page (7 sections)
components/sections/Hero.tsx    — Hero with gradient + floating shapes
components/sections/VideoSection.tsx — Video placeholder with custom UI
components/sections/Overview.tsx    — 3-card challenge overview
components/sections/HowItWorks.tsx  — 4-step vertical timeline
components/sections/ChatbotSection.tsx — Typebot embed placeholder
components/sections/FAQ.tsx         — Accordion FAQ
components/sections/FinalCTA.tsx    — Final call-to-action
components/ui/Button.tsx        — Reusable animated button
components/ui/Card.tsx          — Reusable hover card
lib/animations.ts               — Framer Motion variants
```

## Deployment
Connect this repo to [Vercel](https://vercel.com) for automatic deployments.

## TODO
- [ ] Add Typebot embed script
- [ ] Replace video placeholder with actual video
- [ ] Add Lottie animations for icons
- [ ] Final copy from content team
