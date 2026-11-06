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
1. **Home 1 (Classic Functional)** – `index.html` (9 comprehensive sections including quick booker, space categories, why choose us, featured workspaces, promo banner, testimonials, and footer)
2. **Home 2 (Editorial & Luxury)** – `home-2.html` (10 editorial sections featuring cinematic hero, asymmetric architecture intro, signature collections, live statistics, user personas, signature amenities, resident pass spotlight, and 35mm photo preview)
3. **Spaces Directory** – `spaces.html` (Filterable catalog across all 3 campus tiers, dynamic sorting, live availability badges)
4. **Space Details & Seat Booking** – `space-details.html` (Interactive desk grid selector, live pricing calculator, time slot picker, and confirmation modal)
5. **Membership Plans** – `membership.html` (Monthly vs Annual billing toggle, 3 tier cards, feature matrix comparison table, enterprise concierge)
6. **Architectural Gallery** – `gallery.html` (Masonry layout with category filtering and interactive fullscreen lightbox modal with next/prev controls)
7. **Authentication** – `login.html`, `signup.html`, `forgot-password.html` (Responsive split-screen architectural layouts)

### Member Portal & Dashboard (`/dashboard`)
1. **Overview** – `dashboard/overview.html` (Active reservation banner, 4 key KPI cards, weekly focus hours chart, quick seat booker)
2. **Book a Space** – `dashboard/book-space.html` (3-step interactive booking engine with real-time seat node map)
3. **My Bookings** – `dashboard/bookings.html` (Filter tabs, digital key QR modal, reschedule modal, cancellation confirmation)
4. **Campus Spaces** – `dashboard/explore-spaces.html` (Floor-by-floor space explorer with live status)
5. **Membership & Usage** – `dashboard/membership.html` (Active pass details, hourly usage meters, top-up credit packs, tier upgrade modal)
6. **Billing & Invoices** – `dashboard/invoices.html` (Transaction history table, printable HTML receipt modal)
7. **Profile** – `dashboard/profile.html` (User bio, emergency contacts, workspace ergonomics preferences)
8. **Notifications** – `dashboard/notifications.html` (System alerts, reservation reminders, "Mark all as read")
9. **Settings** – `dashboard/settings.html` (Theme selector, notification toggles, active sessions, account security)

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
