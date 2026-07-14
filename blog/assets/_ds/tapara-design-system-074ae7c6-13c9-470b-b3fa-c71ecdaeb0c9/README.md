# Tapara — Design System

> **tapara** (always lowercase) — *tap* (the NFC gesture) + *ara* (Māori: pathway).
> "Tāpara" in te reo also means *to double / multiply* and *desire / aspiration*.
> Tagline: **"Your local, remembered."**

A monochrome, editorial, type-led design system for **Tapara** — a unified
commerce network for independent New Zealand businesses. This folder gives a
design agent everything needed to produce on-brand Tapara interfaces, slides,
and marketing assets.

---

## What Tapara is

Tapara is **one app for every local business**. Consumers tap an NFC pad at the
counter, approve with Face ID, and funds move via Akahu open banking — **free
for merchants and consumers** (0% on the primary rail; Stripe/Apple Pay is the
card fallback). Each merchant runs **their own loyalty program** (their tier
names, their rules, their benefits), and consumers see all their individual
merchant relationships in one place.

It is the consumer-first, SMB-native version of the "unified commerce" thesis
Adyen validated by acquiring Talon.One for €750m (April 2026): identity,
payments, and merchant-owned loyalty as one integrated, closed-loop system.

**The product surfaces represented here:**

| Surface | Who | What it does |
|---|---|---|
| **Consumer app** | NZ shoppers | Check in by tap, approve payments with Face ID, track savings, see per-merchant loyalty tiers + rewards/vouchers. |
| **Merchant app** | Owners & staff | See who checked in (name, tier, usual order), build orders, send payment requests, fulfil the order queue, run loyalty programs, manage payouts. |

Both run on **one React Native (Expo) codebase** with a **unified 4-tab shell**
(HOME · ACTIVITY · LOYALTY · ADMIN) whose content is role-aware. There is also a
marketing website (tapara.co.nz) — not rebuilt here, but its OG/brand treatment
informs the Brand cards.

---

## Sources this system was built from

All read from the attached `mobile_app/` codebase (read-only mount):

- **Shipped app code** — `mobile_app/tapara/` (React Native + Expo + TypeScript).
  The authoritative source for tokens and components:
  - `src/constants/theme.ts` — colors, fonts, spacing (the token source of truth)
  - `src/components/` — `PrimaryButton`, `ContactlessIcon`, `ProgressBar`, `TourBanner`
  - `src/screens/` — consumer, merchant, auth & shared app screens (recreated in the UI kits)
  - `src/navigation/AppTabStack.tsx` — the 4-tab shell + icon choices
  - `App.tsx` — font loading (`NotoSerif-*`, `Manrope-*`)
- **Brand & product context** — `mobile_app/project_context/tapara_project_context (6).md`
  (brand identity, positioning, copy registers, flows) and siblings
  (`tapara_business_plan`, `tapara_flows`, `tapara_dev_plan`, AML/CFT docs).
- **Brand assets** — `mobile_app/images/` (logo SVGs, `og-image.jpg`, `fern-large.jpg`, `nz-map.jpg`).
- **Stitch mockups** — `mobile_app/stitch_tapara_app/` and `…_refined/` (Google Stitch
  screen explorations; the loyalty screens cite `loyalty_iteration_1` as their design origin).

> ⚠️ **Outdated copy in some sources.** The shipped `og-image.jpg` and parts of
> the website still say *"0.3% per transaction"* / *"direct bank-to-bank"*. That
> positioning is **dropped** — Tapara is now **free for both sides**, with
> **per-merchant** (not network-wide) loyalty. Always write to the current
> positioning below.

---

## CONTENT FUNDAMENTALS — how Tapara writes

Tapara's voice is **plain, confident, and local**. It sounds like a smart Kiwi
operator, not a fintech brochure. Short declaratives. Concrete nouns. No hype.

**Casing**
- The brand name is **always lowercase**: *tapara* (the wordmark is lowercase serif).
  In running prose where capitalisation is grammatically expected, "Tapara" is acceptable, but the logotype is lowercase.
- Headlines are **sentence case with a full stop**: *"Tap to check in."* · *"Approve in one tap."*
- Tiny labels are **ALL CAPS with wide tracking**: `TOTAL SAVED`, `INCOMING REQUEST`, `DIGITAL RECEIPT`, `MAX TIER`.

**Person & address**
- Speaks to the user as **"you" / "your"**: *"Your local, remembered."* · *"Every independent business you love, in one app."*
- Refers to itself plainly as *Tapara*; never "we at Tapara…", never "the platform".

**Tone rules (from the context doc)**
- **Lead with:** *"One app, every local business." · "Your own status at every merchant." · "Free for everyone."*
- **Right register:** *"Coffee Maniac at Customs Coffee. Top Gamer at Pixel Arcade." · "Free for merchants. Free for customers." · "Your local, remembered."*
- **Wrong register (never write this):** *"Seamless payment experience" · "Empowering local commerce" · "Next-generation merchant intelligence" · "Loyalty points" · "Cross-merchant rewards."*
- **Banned descriptor:** do **not** call Tapara "account-to-account" / "A2A" — funds flow through Tapara's customer funds account.

**Loyalty language** — tiers are **merchant-branded and playful**, written as a
progression: *Coffee Newcomer → Coffee Lover → Coffee Maniac*; *Bookworm →
Bibliophile*; *Top Gamer*. Benefits are concrete: *"10% off pastries, priority
ordering."* Never "points" or "rewards currency".

**Microcopy examples (verbatim from the app)**
- Buttons: *"Check in" · "Approve payment" · "Decline" · "Get started" · "Next →" · "+ Off-app sale"*
- Onboarding: *"Tap your phone on the Tapara pad at the counter. The business sees your name instantly."*
- Empty states: *"No loyalty programs yet" / "Pay at a merchant to get started." · "No active orders" / "Orders will appear here after customers pay."*
- Status: *"Your order is being prepared" · "Applied automatically at checkout" · "Since joining Tapara."*

**Emoji** — **avoid.** The brand is monochrome and typographic. (A couple of
placeholder emoji appear in unfinished onboarding illustration slots in the
codebase; these are scaffolding, **not** brand usage. Don't ship emoji.)

**Numbers & money** — NZD, `$` prefix, two decimals on amounts (`$12.50`),
rendered in **serif** at large sizes. Currency and progress are first-class
visual content (e.g. `$120 / $150 spent`, `3 / 10 STAMPS EARNED`).

---

## VISUAL FOUNDATIONS

The whole system is built on **one idea: pure monochrome, set in a serif/sans
pairing, on lots of white space.** It reads like a well-set editorial page, not
a typical app UI.

**Colour**
- **Pure greyscale only.** `#0A0A0A` near-black (dominant), `#888888` mid-grey
  (labels/secondary), `#E0E0DC` warm light-grey (borders/dividers/tracks),
  `#F5F5F3` off-white (surfaces), `#FFFFFF` (background).
- **No gradients. No brand accent colour.** The only chromatic colours are
  **functional**: `#1D9E75` green (success, loyalty discounts, swipe-to-complete)
  and `#E24B4A` red (declines/errors). Use them only for state, never decoration.
- Imagery, when used, is **black-and-white / near-black** (the fern and NZ map
  assets, the tiled-logo OG). Cool-to-neutral, high-contrast, never warm or saturated.

**Type**
- **Noto Serif Bold** for display, headings, names, and money — gives the
  editorial, "remembered" feel. **Manrope** (Regular/Medium) for all body, UI,
  and labels. Medium (500) is the emphasis weight; there is no sans-bold usage.
- Small metadata is set as **ALL-CAPS Manrope Medium with 1.5–2px tracking**.
- Generous line-height on body (≈1.5); tight on serif display (≈1.05–1.2).

**Spacing & layout**
- 4-based scale: 4 / 8 / 16 / 24 / 32 / 48. Screen gutters are **32px** (`xl`);
  cards are padded **16–32px**. Screens start with a tall top inset
  (`xxl + md` ≈ 64px) so headings breathe.
- Fixed elements: a screen **header** (serif name + grey greeting), and where
  relevant a **fixed bottom action** (primary button) or the 4-tab bar. Content
  scrolls between them. Keyboard **overlays** — it never pushes layout.

**Backgrounds** — overwhelmingly **flat white** or flat `#F5F5F3`. The one
signature motif is the **logo mark tiled at ~4–6% opacity** on dark surfaces
(see the OG image): a repeating field of the NFC wireless mark. No photographic
hero backgrounds in-app; no patterns beyond that one tiled mark.

**Cards** — three recognisable treatments:
1. **Sunken card** — `#F5F5F3` fill, `16px` radius, no border, no shadow (the default — savings card, order cards, loyalty rank cards).
2. **Outlined card** — white fill, `1px #E0E0DC` border, `16px` radius (occupied NFC pad cards, voucher cards).
3. **Editorial card** — white fill, hairline border + the very soft `0 12px 40px rgba(10,10,10,0.04)` shadow (punch cards, premium reward cards).
- **Dashed** `1px #E0E0DC` borders denote *empty / awaiting* states (empty NFC pad, coupon edges, punch-card empty stamps).

**Corner radii** — pills (`999px`) for every button, segment control, status
pill, and order tag; `16px` for cards; `20px` for feature cards; `24px` for the
dark payment header sheet; `12px` for inputs; `8px` for code chips.

**Borders & dividers** — `1px #E0E0DC`, or hairline `rgba(10,10,10,0.08)` for
internal separators. Section dividers pair a tracked label with a trailing
hairline rule (`MERCHANT: CUSTOMS COFFEE ───────`).

**Shadows** — almost none. Surfaces are defined by **borders, not elevation**.
The only shadow is the soft "editorial" one on premium white-on-white cards, and
a slightly tighter receipt shadow. No coloured shadows, no glows.

**Buttons & states**
- **Primary** — solid `#0A0A0A` fill, white Manrope-Medium label, full pill,
  `≥52px` tall. **Secondary** — borderless text link in grey (`Decline`,
  `I already have an account`). **Tertiary/segment** — pill inside a `#F5F5F3`
  track; the active segment fills black with white text.
- **Hover** (web/marketing): slightly lighten the black to ~`#222` or drop
  opacity. **Press/disabled:** the app uses **opacity 0.4** for disabled and a
  subtle press; no scale-bounce. Keep it understated.

**Animation** — restrained and physical. Spring on **swipe-to-complete** order
cards (drag right past 40% → springs off-screen, green check revealed
underneath); simple fades and `navigation.replace` transitions; a 2-minute
**countdown ring** on payment requests; progress bars fill linearly. **No
bouncy/playful easing, no parallax, no confetti.** Motion serves the transaction.

**Transparency & blur** — used sparingly: inactive tab tint is `secondary + 80`
(50% alpha), hairline borders use low-alpha black, the tiled-logo motif is
low-opacity white. No frosted-glass/backdrop-blur as a primary device.

---

## ICONOGRAPHY

Tapara's iconography is **thin-stroke, outline-style, monochrome line icons** —
never filled, never coloured, never emoji.

- **In the app:** `@expo/vector-icons` — specifically **MaterialIcons** and
  **MaterialCommunityIcons**, using the **outline** variants
  (`home-circle-outline`, `receipt-long`, `loyalty`, `group-work`,
  `shield-star-outline`, `coffee-outline`, `ticket-confirmation-outline`,
  `inbox-outline`, `clock-outline`, `chevron-up/down`, `check-circle`, etc.).
- **The signature icon** is the **contactless / NFC mark** — four arcs radiating
  from a point, drawn as a 2px round-cap stroke (`src/components/ContactlessIcon.tsx`).
  This same wireless motif **is the logo** (a vertical stem with bilateral signal
  arcs) and the tiled background pattern.
- A few **Unicode glyphs** are used as lightweight inline icons in the app
  (`★` tier star, `›` chevron, `◉`/`⊞` pad markers, `✓` checkmark). These are
  fine for quick UI but prefer the Material outline icon when one exists.
- **No emoji**, no multicolour icons, no duotone, no filled glyphs as decoration.

**For HTML deliverables in this system:** use **Material Symbols Outlined**
(Google Fonts CDN) — the faithful web equivalent of the app's MaterialIcons set.
The codebase also ships `material-symbols-outlined.woff2` (used by the Stitch
mockups), confirming this is the intended web icon font.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
<span class="material-symbols-outlined">loyalty</span>
```

> Substitution flag: the app renders icons natively via @expo/vector-icons (not
> a web font). HTML recreations here use **Material Symbols Outlined** from the
> Google CDN as the matching web font. Visually equivalent; flagged for transparency.

**Assets in `assets/`**
- `tapara-logo-white.svg` — the NFC wireless mark, white (for dark surfaces). Clean single-path SVG.
- `tapara-logo-black.svg` — same mark recoloured `#0A0A0A` (for light surfaces).
- `og-image.jpg` — the brand OG: tiled-mark field on black + lowercase serif wordmark. *(Note: contains outdated "0.3%" copy — use for treatment reference, not messaging.)*
- `fern-large.jpg`, `nz-map.jpg` — black-and-white NZ imagery (sparing editorial use).

---

## Index — what's in this folder

```
Tapara Design System/
├─ README.md                  ← you are here (context, content, visuals, iconography, index)
├─ SKILL.md                   ← Agent-Skill entry point (cross-compatible with Claude Code)
├─ colors_and_type.css        ← @font-face + all color/type/spacing/radius/shadow tokens
├─ fonts/                     ← Noto Serif (Regular/Bold) + Manrope (Regular/Medium) .ttf
├─ assets/                    ← logo SVGs (black/white), og-image, fern, nz-map
├─ preview/                   ← Design-System-tab cards (type, color, spacing, components)
│   ├─ type-*.html  color-*.html  spacing-*.html  radii-*.html  shadow-*.html
│   └─ components-*.html  brand-*.html  (buttons, segment, inputs, cards, loyalty, tags, nav, logo, motif)
└─ ui_kits/                   ← see ui_kits/README.md
    ├─ consumer_app/   ← phone prototype: check-in → pay → Face ID → loyalty
    ├─ merchant_app/   ← phone prototype: pads → order builder → swipe-to-complete queue
    └─ merchant_web/   ← desktop owner portal: activity analytics + dual-rail payouts
```

- **Tokens:** `colors_and_type.css` — import it, or copy the `:root` vars.
- **Cards:** everything in `preview/` is registered to the **Design System** tab.
- **UI kits:** open each kit's `index.html` for an interactive, click-through
  recreation; the kit READMEs list every component and how to compose them.
