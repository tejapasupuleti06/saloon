# PR Men Dot — Saloon & Beauty

A modern, editorial luxury React/Vite salon website built for **PR Men Dot — Saloon & Beauty** in **Madhurawada, Visakhapatnam**.

Built around the physical barbershop identity: scissors, clippers, combs, mirrors, chairs, and transformations.

---

## ⚡ Quick Start

1. Install dependencies (if not already installed):
   ```bash
   npm install
   ```
2. Start the local development server:
   ```bash
   npm run dev
   ```
3. Open the local URL (typically `http://localhost:5173`) in your browser.

---

## 📦 Build for Production

```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

---

## ⚙️ Centralized Salon Configuration

All business information, services, pricing, and media are centralized in:
📁 [`src/data/salonData.js`](file:///C:/Users/tejap/Downloads/PR-Men-Dot-Salon-Website/src/data/salonData.js)

You can easily update:
- **Phone Number:** `7947138343` (`+91 79471 38343`)
- **WhatsApp Booking:** `917947138343`
- **Location & Google Maps URL:** Madhurawada, Visakhapatnam
- **Opening Hours:** `8:30 AM – 9:30 PM Daily`
- **Services, Prices & Durations:** Haircuts, Beard Styling, Hair Color, Hair Spa, Men's Facials
- **Combo Packages:** High-conversion grooming deals
- **Gallery & Testimonials:** Customer reviews and shop photos

---

## 🌟 Key Features

- **Direct WhatsApp Booking Engine:** Pre-fills client name, phone number, service/combo, date, time, and notes into an instant WhatsApp chat link to `+91 79471 38343`.
- **One-Click Mobile Calling:** Direct `tel:+917947138343` links on navigation, hero, and contact cards.
- **Service Details Modal:** Full breakdown of services, estimated time, pricing, and feature checkmarks.
- **Curated Combo Packages:** Popular multi-service bundles with original and discounted pricing.
- **Interactive Before/After Split Slider:** Touch and drag slider with barber comb handle.
- **Multi-Generational Selector:** Tailored looks for Kids, Youth, Adults, and Seniors.
- **Vintage Barber Mirror Reviews:** 5-star rating carousel in an editorial mirror frame.
- **Interactive Gallery Lightbox:** Fullscreen image modal on photo clicks.
- **Local SEO & Schema:** Built-in OpenGraph cards and `schema.org/HairSalon` structured data for Visakhapatnam search visibility.

---

## 📂 Project Architecture

```
src/
├── components/
│   ├── Navbar.jsx               # Navigation bar with mobile drawer & quick call
│   ├── Hero.jsx                 # Animated GSAP typography & floating tools
│   ├── IntroPhilosophy.jsx      # Salon philosophy & 4 craft pillars
│   ├── ServicesSection.jsx      # Tool-wall service cards with pricing badges
│   ├── CombosSection.jsx        # Signature value grooming packages
│   ├── ExperienceSection.jsx    # Age-group switcher (Kids, Youth, Adults, Seniors)
│   ├── TransformationSection.jsx # Split before/after stage
│   ├── BeforeAfterSlider.jsx    # Interactive draggable comparison slider
│   ├── GallerySection.jsx       # Editorial photo wall
│   ├── ReviewsSection.jsx       # Barber mirror testimonials carousel
│   ├── ContactSection.jsx       # Call, WhatsApp, and Google Maps directions
│   ├── Footer.jsx               # Brand footer & copyright
│   ├── ServiceModal.jsx         # Service details & booking trigger
│   ├── BookingModal.jsx         # WhatsApp appointment booking form
│   └── ImageLightbox.jsx        # Full-size image modal viewer
├── data/
│   └── salonData.js             # Centralized salon information & pricing
├── styles.css                   # Fully formatted, structured luxury styling
├── App.jsx                      # Main app controller
└── main.jsx                     # Clean React 19 entry point
```
