/**
 * ============================================================
 *  arrangements-data.js
 *  Edit this file to add, remove, or update arrangements.
 *
 *  Each object in the array represents one piece:
 *
 *    title    — the arrangement title (required)
 *    type     — one of: "solo" | "duet" | "group"
 *    desc     — a short description (1–2 sentences)
 *    store    — where it's sold: "smp" (SheetMusicPlus) or "gumroad" (direct sale)
 *    link     — the product URL (SheetMusicPlus or Gumroad product page)
 *    image    — path to a cover image, e.g. "images/my-piece.jpg"
 *               (set to null to show the default music-note placeholder)
 *    featured — set true to show on the home page (first 4 featured items shown)
 *
 *  To ADD an arrangement: copy one of the objects below, paste at
 *  the top of the array, and fill in your details. That's it!
 *
 *  STORE OPTIONS:
 *    "smp"     → button reads "Buy on SheetMusicPlus ↗"
 *                Use for copyrighted arrangements licensed via ArrangeMe.
 *    "gumroad" → button reads "Buy Direct ↗"
 *                Use for public domain or original arrangements sold via Gumroad.
 *                Customer pays on Gumroad and receives an automatic download link.
 * ============================================================
 */

const ARRANGEMENTS = [
  {
    title: "Ave Maria (Schubert)",
    type: "solo",
    store: "smp",
    desc: "A lyrical solo cello arrangement of Schubert's timeless setting — perfect for weddings and ceremonies.",
    link: "https://www.sheetmusicplus.com",   // ← replace with real URL
    image: null,
    featured: true
  },
  {
    title: "Canon in D",
    type: "duet",
    store: "gumroad",
    desc: "Pachelbel's beloved Canon reimagined as an expressive cello duet, ideal for elegant events.",
    link: "https://mikaela-elms.gumroad.com/l/canon-in-d",   // ← replace with real Gumroad URL
    image: null,
    featured: true
  },
  {
    title: "Somewhere Over the Rainbow",
    type: "group",
    store: "smp",
    desc: "A warm, full-voiced cello ensemble arrangement suitable for 3–6 players.",
    link: "https://www.sheetmusicplus.com",
    image: null,
    featured: true
  },
  {
    title: "Clair de Lune",
    type: "solo",
    store: "gumroad",
    desc: "Debussy's impressionist masterpiece adapted for solo cello with piano accompaniment.",
    link: "https://mikaela-elms.gumroad.com/l/clair-de-lune",
    image: null,
    featured: true
  },
  {
    title: "A Thousand Years",
    type: "duet",
    store: "smp",
    desc: "Christina Perri's popular wedding song in a heartfelt cello duet arrangement.",
    link: "https://www.sheetmusicplus.com",
    image: null,
    featured: false
  },
  {
    title: "River Flows in You",
    type: "solo",
    store: "gumroad",
    desc: "Yiruma's beloved piano piece arranged for solo cello — deeply expressive and technically accessible.",
    link: "https://mikaela-elms.gumroad.com/l/river-flows",
    image: null,
    featured: false
  },
  {
    title: "All of Me",
    type: "group",
    store: "smp",
    desc: "John Legend's modern classic arranged for cello quartet or ensemble.",
    link: "https://www.sheetmusicplus.com",
    image: null,
    featured: false
  },
  {
    title: "The Swan (Saint-Saëns)",
    type: "duet",
    store: "gumroad",
    desc: "Saint-Saëns' iconic Swan arranged as a cello duet — one carries the melody, one the accompaniment.",
    link: "https://mikaela-elms.gumroad.com/l/the-swan",
    image: null,
    featured: false
  }
];

/* Tag labels shown on the cards */
const TYPE_LABELS = {
  solo:  "Solo Cello",
  duet:  "Cello Duet",
  group: "Cello Ensemble"
};

/* Buy button labels per store */
const STORE_LABELS = {
  smp:     "Buy on SheetMusicPlus ↗",
  gumroad: "Buy Direct ↗"
};
