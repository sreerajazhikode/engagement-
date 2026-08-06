# 💍 Sreeraj & Anusree — Engagement Invitation

A beautiful, responsive React website for Sreeraj & Anusree's engagement on **23 August 2026**.

---

## ✨ Features

| Feature | Details |
|---|---|
| **Envelope Animation** | Tap-to-open with realistic flap animation & falling petals |
| **Couple Details** | Side-by-side groom & bride cards, stacked on mobile |
| **Scratch Card** | Canvas-based scratch-to-reveal engagement date |
| **Countdown Timer** | Live days/hours/minutes/seconds to 23 Aug 2026 |
| **Venue + Route** | Google Maps links for venue and route |
| **Photo Gallery** | Responsive grid with lightbox & keyboard navigation |
| **WhatsApp Share** | One-tap share button |
| **Footer** | Animated hearts, sealed initials |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or newer
- npm (comes with Node)

### Install & Run

```bash
# 1. Enter the project folder
cd engagement-invitation

# 2. Install dependencies
npm install

# 3. Start local dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build
# Outputs to dist/
```

Preview the production build locally:
```bash
npm run preview
```

---

## 📸 Adding Real Photos

1. Drop your images into `src/assets/images/`
2. Open `src/components/Gallery.jsx`
3. At the top, import your images:

```js
import photo1 from '../assets/images/photo1.jpg'
import photo2 from '../assets/images/photo2.jpg'
// ...
```

4. Update the `PHOTOS` array — replace `src: null` with your import:

```js
const PHOTOS = [
  { id: 1, src: photo1, label: 'Our Story', grad: '...' },
  { id: 2, src: photo2, label: 'Together', grad: '...' },
  // ...
]
```

---

## 🗂 Project Structure

```
src/
├── components/
│   ├── Envelope.jsx        # Tap-to-open animated envelope
│   ├── Envelope.css
│   ├── Invitation.jsx      # Main heading & couple names
│   ├── Invitation.css
│   ├── CoupleDetails.jsx   # Groom & bride info cards
│   ├── CoupleDetails.css
│   ├── ScratchDate.jsx     # Canvas scratch card
│   ├── ScratchDate.css
│   ├── Countdown.jsx       # Live countdown + WhatsApp share
│   ├── Countdown.css
│   ├── Venue.jsx           # Venue + journey map links
│   ├── Venue.css
│   ├── Gallery.jsx         # Photo grid + lightbox
│   ├── Gallery.css
│   ├── Footer.jsx          # Animated hearts footer
│   └── Footer.css
├── assets/
│   └── images/             # ← put your photos here
├── styles/
│   ├── global.css          # Design tokens, typography, utilities
│   └── App.css
├── App.jsx
└── main.jsx
```

---

## 🎨 Customisation

All design tokens live in `src/styles/global.css` under `:root`. Change colours, fonts, or shadows in one place:

```css
:root {
  --color-gold:       #c9a84c;
  --color-gold-dark:  #8a6f2e;
  --color-pink:       #f4c2c2;
  --color-pink-dark:  #d4808a;
  --font-script:      'Great Vibes', cursive;
  /* ... */
}
```

---

## 📱 Deployment (share via WhatsApp)

### Option A — Vercel (recommended, free)
1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → Import → Select the repo
3. Click **Deploy** — you'll get a `https://your-app.vercel.app` link

### Option B — Netlify
1. Run `npm run build`
2. Drag the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Copy the generated URL and share via WhatsApp

---

Made with ♥ for Sreeraj & Anusree
