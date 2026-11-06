# NestSpace

> **WORK • STUDY • GROW**  
> A premium, modern architectural co-working and quiet study space booking platform that bridges the atmosphere of a professional executive workplace with a peaceful library sanctuary.

---

## 🌿 Brand Identity & Design System

- **Primary:** `#173C35` (Deep Forest) — headings, primary buttons, brand accents
- **Secondary:** `#D9A66F` (Warm Sand) — highlights, rating stars, subtle borders
- **Neutrals:**
  - `#F7F6F1` (Light Background)
  - `#FFFFFF` (Surface Cards)
  - `#E8E8E1` (Borders & Dividers)
  - `#202824` (Deep Charcoal Body)
- **Dark Mode Surfaces:**
  - `#171D1A` (Dark Background)
  - `#242D28` (Card Surface)
  - `#2E3832` (Dark Borders)
- **Typography:**
  - Headings: `Manrope` (Geometric Modern Sans)
  - Body & Dashboard: `Inter` (Clean Functional Sans)

---

## 🏛️ Website Pages & Architecture

### Public Website
1. **Home 1 (Classic Functional)** – `index.html` (11 sections)
   - Hero with live capacity pill & trust stats
   - Quick reservation search bar
   - Workspace categories
   - Why choose us (Acoustics, 24/7 keyless, ergonomics, artisan coffee)
   - Featured spaces catalog cards
   - Flexible monthly membership promotion
   - Scholarly customer testimonials
   - **NEW:** A Day in Deep Focus at NESTSPACE (Chronological Flow)
   - **NEW:** Enterprise Hybrid Passes & Corporate Teams
   - Final booking call-to-action
   - Multi-column architectural footer

2. **Home 2 (Editorial & Luxury)** – `home-2.html` (13 sections)
   - Full-width cinematic hero with adaptive overlay
   - Asymmetric architectural experience intro with quote inset
   - Signature collection horizontal cards
   - Live productivity statistics counter
   - User personas (Scholar, Nomad, Startup, Consultant)
   - Signature amenities (Circadian lighting, acoustic baffles)
   - Resident pass dedicated desk spotlight
   - Overlapping 35mm photography preview
   - Voices of our daily community testimonials
   - **NEW:** Tactile Materiality & Acoustic Precision (Oak, Linen, Brass, Basalt)
   - **NEW:** The NESTSPACE Scholar Fellowship & Residency Program
   - Cinematic booking CTA banner
   - Architectural footer

3. **Spaces Directory** – `spaces.html` (9 sections)
   - Hero with live real-time booking status
   - Interactive category filter tabs & sorting
   - Comprehensive 6-space catalog with live badges
   - Three-tier campus floor breakdown
   - Frequently asked questions accordion
   - **NEW:** Technical Specifications & Ergonomic Standards (Dell 4K Hubs, Herman Miller, Linak sit-stand, BenQ light bars)
   - **NEW:** Interactive Space Finder & Capacity Planner (Solo, Duo, Team, Enterprise)
   - Final booking CTA
   - Footer

4. **Space Details & Seat Booking** – `space-details.html` (7 sections)
   - Breadcrumbs & overview header
   - Architectural photo gallery with live status pill
   - Interactive 12-seat SVG desk map with live price calculation and time slot selection
   - Member feedback & rating breakdown
   - **NEW:** All-Inclusive Pass Checklist (Specialty coffee, 1Gbps fiber, day lockers, free laser prints)
   - **NEW:** Campus Transit, Parking & Commute Guide (Metro, EV charging, bike vault)
   - Booking confirmation modal & footer

5. **Membership Plans** – `membership.html` (9 sections)
   - Plan comparison hero with Annual (save 20%) vs Monthly toggle
   - 3 Plan tiers (Day Pass, Pro Member, Resident Dedicated)
   - Complete 14-feature comparison matrix
   - Core membership advantages
   - Enterprise & custom team suites strip
   - **NEW:** Tax Benefits & Employer Expense Reimbursement Guide with sample GST invoice
   - **NEW:** Beyond The Desk: Member Privileges & Local Brand Discounts (Coffee, bookstores, yoga, $10k+ software credits)
   - Frequently asked questions accordion
   - Footer

6. **Architectural Gallery** – `gallery.html` (8 sections)
   - Gallery philosophy hero
   - Category filtering bar (All, Library, Cabins, Meeting Rooms, Lounges)
   - Responsive masonry grid with custom dataset attributes
   - The design philosophy: Crafting spatial restraint
   - **NEW:** Tactile Materiality Samples (Bavarian Oak, Acoustic Linen, Satin Brass, Volcanic Basalt)
   - **NEW:** Spatial Floorplan Engineering & Golden Ratio Dimensions
   - Final reservation CTA
   - Lightbox modal with next/prev controls & footer

7. **Enhanced Authentication Pages**
   - **Sign In (`login.html`):** 1-Click quick demo credentials autofill (Pro Member / Campus Host), interactive password show/hide toggle, rotating quote carousel, and animated verification state.
   - **Create Account (`signup.html`):** 1-Click rapid demo fill, live 4-stage password strength meter (Weak/Fair/Good/Very Strong), password visibility toggles, and terms agreement validation.
   - **Forgot Password (`forgot-password.html`):** Quick test fill, animated dispatch confirmation, and instant recovery dispatch alert.

### Member Portal & Dashboard (`/dashboard`)
1. **Overview** – `dashboard/overview.html` (Live ambient acoustic telemetry dB monitor, upcoming bookings with status pills, weekly focus hours chart, community masterclasses RSVP widget, and quick desk booker)
2. **Book a Space** – `dashboard/book-space.html` (3-step interactive booking wizard with real-time seat node map)
3. **My Bookings** – `dashboard/bookings.html` (Weekly interactive schedule ribbon, instant search bar, filter tabs, digital key QR modal, reschedule modal, cancellation confirmation)
4. **Campus Spaces** – `dashboard/explore-spaces.html` (Floor-by-floor space explorer with live status)
5. **Membership & Usage** – `dashboard/membership.html` (Active pass details, hourly usage meters, top-up credit packs, tier upgrade modal)
6. **Billing & Invoices** – `dashboard/invoices.html` (Transaction history table, printable HTML receipt modal)
7. **Profile** – `dashboard/profile.html` (User bio, emergency contacts, workspace ergonomics preferences)
8. **Notifications** – `dashboard/notifications.html` (System alerts, reservation reminders, "Mark all as read")
9. **Settings** – `dashboard/settings.html` (Theme selector, notification toggles, active sessions, account security)

---

## ✨ Scroll-to-Animation System

The project features a lightweight, performance-tuned scroll-triggered animation engine powered by `IntersectionObserver`:
- `.reveal`: Smooth slide-up fade (`opacity: 0 → 1`, `translateY(32px) → 0`)
- `.reveal-left`: Slide in from left
- `.reveal-right`: Slide in from right
- `.reveal-scale`: Subtle depth scale up (`0.94 → 1.0`)
- `.reveal-delay-1` through `.reveal-delay-5`: Staggered timing cascades for card grids
- Respects `prefers-reduced-motion: reduce` for accessibility.

---

## 🚀 Getting Started

Simply clone the repository and open any `.html` file directly in a modern web browser, or serve it via a local static server:

```bash
# Clone the repository
git clone https://github.com/shivanitechnologies/NestSpace.git

# Navigate into the project folder
cd NestSpace

# Open in browser (or use VS Code Live Server / Python HTTP server)
python -m http.server 3000
```

Open `http://localhost:3000` to view the website.

---

## 📄 License

Created for NESTSPACE. All rights reserved.
