# The NUST NET Playbook (NET-2027 Edition) — Landing Page

A mobile-first, high-conversion landing page for **The NUST NET Playbook (NET-2027 Edition)**, engineered for students aiming for Engineering and Computing programmes at NUST (National University of Sciences and Technology).

Designed with high priority for mobile visitors coming from Reddit's in-app browser (~375px viewport), ensuring zero horizontal overflow, instant page loads, and accessible interactive FAQ accordions.

---

## ⚡ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Checkout / Payment Gateway:** [Tally Form](https://tally.so/r/4aKLGO) (Easypaisa, JazzCash, NayaPay, SadaPay)
- **Deployment Platform:** [Vercel](https://vercel.com/) (Zero-configuration automated CI/CD)

---

## 📁 Project Structure

```text
├── app/
│   ├── globals.css         # Global styles, overflow defense, and typography
│   ├── layout.tsx          # Root layout with metadata & OpenGraph tags
│   └── page.tsx            # Main landing page covering all 7 sections
├── components/
│   └── FaqAccordion.tsx    # Accessible, collapsible FAQ accordion
├── images/                 # Sample preview pages
│   ├── sample-1.png        # The Chapter Preparation Loop
│   ├── sample-2.png        # The 3-Round Math Strategy
│   └── sample-3.png        # FLP Diagnosis & Tracking Matrix
├── public/
│   └── images/             # Publicly served sample preview assets
├── next.config.ts          # Next.js configuration
├── package.json            # Scripts & project dependencies
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Open [http://localhost:3000](http://localhost:3000) to view the page.

4. **Production Build:**
   ```bash
   npm run build
   npm run start
   ```

---

## 🌐 Deploying to Vercel

1. Log into your [Vercel Dashboard](https://vercel.com).
2. Click **Add New Project** and import the repository: `MYahya-ee/NET-landing-page`.
3. Vercel automatically detects Next.js. Click **Deploy**.
4. Your site will be live on a production `.vercel.app` URL immediately.

---

## 📄 License & Disclaimer

*Independent student guide. Not an official NUST publication.*
© 2027 The NUST NET Playbook. All rights reserved.
