# Cloud.Lab — IT Managed Services Provider Brochure Website

## Context

The project is a fresh Vite + React + TypeScript + Tailwind + shadcn template (the home page is a placeholder). The user wants a full **brochure website for an IT Managed Services Provider** named **Cloud.Lab**, with:

- **Sections:** Hero, Services, Why Us, How It Works, Testimonials, Stats, Pricing, FAQ, Contact, Footer
- **Visual direction:** Dark, modern tech theme
- **Contact form:** Working — submissions persisted via the backend (Enter Cloud)

This is a single-page marketing site. All copy will be written directly in English in the components (no i18n usage needed for this build; the i18n wiring stays untouched).

## Design Direction

Dark "command center" aesthetic befitting a managed-services provider:

- **Background:** near-black navy (`#0A0F1E`-family) with subtle radial glows and grid texture
- **Accent:** cyan → electric blue gradient (primary action color)
- **Typography:** `Chakra Petch` (techy display/headings) + `Manrope` (body) + `JetBrains Mono` (labels/eyebrows/status) — added via Google Fonts in `index.html`
- **Motion:** staggered fade/slide reveals on scroll (CSS + framer-motion, already a dependency), hover glow on cards, animated stat counters, subtle pulse on hero accents
- **Semantic tokens:** all colors/radii/gradients go through the design system in `index.css` + `tailwind.config.ts`; dark values set directly on `:root` so the site is dark by default

## Implementation

### 1. Design system
- **`src/index.css`** — set `:root` (and `.dark`) tokens to the dark tech palette; add `--primary` cyan, gradient tokens, glow shadows, grid/glow utility classes, and keyframe animations.
- **`tailwind.config.ts`** — add `fontFamily` (`display`, `sans`, `mono`), extend `colors` with brand/accent tokens, register new `keyframes`/`animation` (fade-up, marquee, pulse-glow, etc.).
- **`index.html`** — Google Fonts `<link>`s; update `<title>` to "Cloud.Lab — IT Managed Services"; add meta description.

### 2. Section components (new folder `src/components/brochure/`)
Reusable, presentational, mobile-responsive (nav collapses to a sheet menu). All icons from `lucide-react` (already installed).

| File | Content |
|---|---|
| `Navbar.tsx` | Sticky glass nav, logo mark (Cloud icon), anchor links, "Get a Free Audit" CTA, mobile menu via shadcn `Sheet` |
| `Hero.tsx` | Big display headline + subtitle + dual CTAs; background grid/glow; status-badge "All systems operational"; scroll hint |
| `Stats.tsx` | Animated counters (uptime %, endpoints, tickets resolved, response time) using an IntersectionObserver counter |
| `Services.tsx` | 6-card grid (Managed IT, Cybersecurity, Cloud & Infrastructure, Help Desk, Backup & DR, Compliance) with lucide icons + hover glow |
| `WhyUs.tsx` | Differentiators split layout (24/7 NOC, flat-rate pricing, proactive monitoring, dedicated engineer) |
| `HowItWorks.tsx` | 4-step timeline (Audit → Plan → Deploy → Support) with connectors |
| `Testimonials.tsx` | Carousel (`Carousel` shadcn) of client quotes with ratings |
| `Pricing.tsx` | 3 tiers (Essential / Growth / Enterprise), middle highlighted, monthly-per-user |
| `FAQ.tsx` | shadcn `Accordion` of common MSP questions |
| `Contact.tsx` | Working form (name, company, email, phone, message) → saves to backend; success/error states; contact info sidebar |
| `Footer.tsx` | Logo, nav columns, compliance badges (SOC 2, ISO), copyright |

### 3. Page assembly
- **`src/pages/Index.tsx`** — replace placeholder with the composed brochure page (Navbar + sections + Footer).

### 4. Backend (contact form)
1. Enable Enter Cloud via `supabase_enable`.
2. Create `contact_submissions` table via the migration tool (columns: `id`, `name`, `company`, `email`, `phone`, `message`, `created_at`), with **RLS enabled in the same migration** and a policy allowing **anonymous INSERT** only (no public SELECT/UPDATE/DELETE).
3. Wire the Contact form to insert via the generated supabase client (`src/integrations/supabase/client.ts`), validating required fields client-side first.
4. Verify with `supabase_get_table_schema` that RLS is on and the policy exists.

## Files touched
- `src/index.css` (design tokens)
- `tailwind.config.ts` (fonts, colors, animations)
- `index.html` (fonts, meta, title)
- `src/pages/Index.tsx` (rewrite)
- `src/components/brochure/*.tsx` (11 new components)
- Enter Cloud: migration (new table) + supabase client wiring

## Implementation checklist
- [ ] Add Google Fonts (Chakra Petch, Manrope, JetBrains Mono) and update title/meta in `index.html`
- [ ] Update `src/index.css` with dark tech tokens, gradients, glow shadows, grid background, and keyframes
- [ ] Update `tailwind.config.ts` with `fontFamily`, brand/`accent` colors, and new animations
- [ ] Build `Navbar.tsx` with anchor links, CTA, and mobile sheet menu
- [ ] Build `Hero.tsx` with grid/glow background, dual CTAs, and status badge
- [ ] Build `Stats.tsx` with scroll-triggered animated counters
- [ ] Build `Services.tsx` (6 service cards, hover glow, lucide icons)
- [ ] Build `WhyUs.tsx` (differentiators split layout)
- [ ] Build `HowItWorks.tsx` (4-step timeline)
- [ ] Build `Testimonials.tsx` using shadcn `Carousel`
- [ ] Build `Pricing.tsx` (3 tiers, highlighted middle)
- [ ] Build `FAQ.tsx` using shadcn `Accordion`
- [ ] Build `Contact.tsx` with working form (name, company, email, phone, message) + contact info
- [ ] Build `Footer.tsx` with nav columns and compliance badges
- [ ] Compose all sections in `src/pages/Index.tsx`
- [ ] Enable Enter Cloud and create `contact_submissions` table with RLS + anonymous-insert policy
- [ ] Wire Contact form submit to the backend with success/error UX

## Verification checklist
- [ ] `pnpm run build` passes with no TS/lint errors
- [ ] `pnpm lint` passes
- [ ] Contact form: submitting with valid data inserts a row (verify via read query) and shows a success message
- [ ] Contact form: empty/invalid required fields show validation errors and are not submitted
- [ ] Navbar anchors scroll to the correct sections; mobile menu opens/closes and links work
- [ ] Dark theme renders consistently (no white-on-white or invisible text); hero/stats/FAQ visible in light-grey dev tooling
- [ ] Responsive layout checked at mobile (390px) and desktop (1280px) — no overflow, cards stack correctly
- [ ] `supabase_get_table_schema` confirms RLS is enabled on `contact_submissions` with only the anon-insert policy
