# 🏛️ THE ONE — Luxury Wellness & Fitness Club

Welcome to the official repository for **THE ONE** — India's premier 5-star, members-only luxury wellness club located in Jubilee Hills, Hyderabad. 

This repository showcases a high-fidelity, client-ready multi-page React application matching the premium aesthetic of the **Fitnex Gym Framer Template**. It integrates real-world verified details of the gym—including founder details, local coaches, real Google reviews, biohacking amenities, and luxury membership plans.

---

## 🌐 Live URLs & References

*   **Live Production URL (Vercel)**: [https://the-one-wellness-club.vercel.app](https://the-one-wellness-club.vercel.app)
*   **GitHub Repository**: [https://github.com/mohanx24/the-one-wellness-club](https://github.com/mohanx24/the-one-wellness-club)
*   **Google Maps Location**: [THE ONE Jubilee Hills](https://maps.app.goo.gl/mNWGsCZjLhVEeUft7)

---

## ✨ Key Features & Enhancements

*   **Multi-Page Subpage Architecture**:
    *   `/` — Landing page detailing disciplines, member stats, before/after slider, and reviews.
    *   `/about` — Founders' story (Kumar Mannava) and the core philosophy: *People First, No Shortcuts, Open to Everyone*.
    *   `/programs` — Overview of fitness disciplines with quick stat cards.
    *   `/coach` — Full roster of local expert coaches with interactive details.
    *   `/pricing` — Customized luxury tiers representing the actual members-only pricing model.
    *   `/contact` — Booking forms, hours of operations, map integrations, and direct consultation lines.
*   **Legacy Route Backpaths**: Dynamic path fallbacks (`/gym`, `/yoga`, `/kickfit`, `/group-x`) matching the original Framer anchor links, ensuring smooth redirect handling.
*   **Before/After Comparison Slider**:
    *   A custom drag-to-reveal canvas interface created with `framer-motion` to compare member body recompositions, featuring real weights and fat loss statistics.
*   **Interactive Coach Profile Modals**:
    *   Meet the actual Jubilee Hills trainers, led by founder **Kumar Mannava** (celebrity trainer behind Jr. NTR's 9.5 kg transformation), Operations Manager **Arvind Rathod**, and local physical therapy experts.
*   **Verified Google Maps Reviews**:
    *   Features a responsive grid displaying real 5-star Google reviews from active club members, accompanied by star rating indicators.
*   **Biohacking & Advanced Recovery Suite**:
    *   Showcases high-end private club therapies: Whole-Body Cryotherapy chambers, Red Light Therapy (Photobiomodulation), Hyperbaric Oxygen Therapy (HBOT), and saunas.
*   **Stat Counter Decimals**:
    *   Custom animated hooks for rating count-ups, ensuring the Google Maps **4.9 Rating** animates correctly as a floating-point number.

---

## 🛠️ Technical Stack & Dependencies

*   **Core**: React 18, Vite, TypeScript
*   **Styling**: Tailwind CSS (custom HSL variables, dark mode first `#0A0A0A` with a bold red `#E53935` premium accent)
*   **Typography**: Barlow Condensed (headings), Inter/Outfit (body text)
*   **Animations**: Framer Motion (entry reveals, route transitions, modal overlays)
*   **Scroll Mechanics**: Lenis Smooth Scroll
*   **Icons**: Lucide React

---

## 🚀 Quick Start Guide (Local Development)

Reviewing or running the project locally is simple and requires only Node.js installed.

### 1. Clone the repository
```bash
git clone https://github.com/mohanx24/the-one-wellness-club.git
cd the-one-wellness-club
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to preview the live application.

### 4. Build for production
```bash
npm run build
```
Creates a compiled, minified bundle inside the `dist` folder.

### 5. Lint checks
```bash
npm run lint
```
Performs static analysis using ESLint. Cleaned and configured to run on custom codebase files.

---

## 📁 Repository Structure

```
├── public/                 # Static assets (images, logos, and teaser video)
├── src/
│   ├── components/         # Interactive UI components (Sliders, Accordions, Modals)
│   │   ├── ui/             # Shadcn boilerplate design components
│   │   ├── Logo.tsx        # Vector SVG Circle-1 custom brand Logo
│   │   └── ...
│   ├── pages/              # Routed pages (Home, About, Pricing, Coaches, Programs)
│   ├── sections/           # Modular section components used on pages (Hero, Footer, Navigation)
│   ├── App.tsx             # React Router Switchboard & Scroll restoration
│   ├── main.tsx            # App entrypoint
│   └── index.css           # Global custom HSL variables and typography bindings
├── eslint.config.js        # ESLint flat config
├── tailwind.config.js      # Tailwind configurations & theme setups
└── tsconfig.json           # TypeScript configuration file
```

---

*Developed by mohanx24 for THE ONE Wellness Club.*
