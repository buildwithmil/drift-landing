# Drift — Project Context

Single-page landing site for **Drift**, a calm, ADHD-friendly planner app. Demo project.

## Stack
- React 18 + Vite 5 + TypeScript
- Tailwind CSS v3 (config-based, NOT shadcn — no `@/` alias, no dark-mode config, no `primary` token)
- lucide-react (icons), framer-motion (testimonial scroll animation)
- Fonts: Inter (body), Instrument Serif italic ("the stress" in hero)

## Repo / Deploy
- **Standalone git repo** at `c:\Users\miler\batch2demo` (its own `.git`, default branch `main`).
  - IMPORTANT: this folder lives *inside* the home-dir git repo (`C:/Users/miler`). It was given its own nested `.git` on purpose so git ops never scan home (the 54GB accident pattern). Never run git from a parent dir expecting this repo.
- GitHub: https://github.com/buildwithmil/drift-landing (account `vibewithmil`, git author Mil Garcia)
- Vercel prod: https://batch2demo.vercel.app (project `batch2demo`, aliased from folder name — rename in dashboard for a `drift` URL)
- Deploy flow: `git push origin main` + `npx vercel --prod --yes`

## Structure
```
src/
  App.tsx                     -- Hero section + renders About, Features, Testimonials
  main.tsx
  index.css                   -- font @import + tailwind directives + body styles
  components/
    Navbar.tsx                -- floating pill nav, animated hamburger->X, dropdown
    AboutSection.tsx          -- cream #F6E4CF, Mail/Plus pill buttons, SVG logo
    FeaturesSection.tsx       -- fixed bg image, sticky left nav, 3 scroll cards w/ dual IntersectionObserver (active 0.6, reveal 0.15)
    ui/
      testimonial-v2.tsx      -- framer-motion infinite-scroll columns, re-themed to Drift cream + planner copy
```

## Palette
- Cream bg `#F6E4CF`, card cream `#FFF9F2`, dark text/icons `#321C04`, muted accent `#D9C4AA`, secondary hover `#CEBA9E`, dark hover `#1F1003`

## Key decisions / history
- Testimonial component came as a generic shadcn ERP block w/ dark toggle. Adapted: dropped full-page `App` wrapper + dark mode, re-themed neutral->Drift cream, rewrote ERP copy -> ADHD/planner testimonials. Kept scroll-column mechanic + Unsplash avatars.
- Hero video swapped to a Higgsfield asset (account `mildrederan.g@gmail.com`, starter plan). Asset `d01766da-2e26-456d-9984-66be36999790` = Seedance 1.5 Pro, dandelion seeds drifting, seamless loop. Direct mp4 pulled via `higgsfield generate get <id> --json` -> `result_url`. It's a runtime CloudFront URL, not bundled — self-host if it ever expires.
  - Original hero (pre-swap): `.../user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260711_090308_1dd0cea7...mp4`

## Live staging variants (separate standalone Vercel projects, public prod)
- A = original hero + testimonials (commit `ddc591c`): https://drift-staging-a.vercel.app
- B = original hero, NO testimonials (commit `cd0051d`): https://drift-staging-b.vercel.app
- Note: Vercel *preview* deploys are SSO-gated (302 login wall) — to share publicly, deploy as own prod project. That's why A/B are separate projects. Delete when comparison done.

## Git history
- `cd0051d` initial site (old hero, no testimonials)
- `ddc591c` add testimonials
- `d15559d` swap hero to Higgsfield asset
