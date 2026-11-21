# Golnar Persian Carpets · گلنار

A luxury, minimal concept store for hand-knotted Persian carpets. Instead of sale banners and countdown timers, Golnar sells provenance: every piece shows its weaving city, knot density and the months it spent on the loom, and the site teaches buyers how to read the carpet in front of them.

**[View the live site →](https://tina-asadi.github.io/golnar/)**

## Highlights

- **Carpets drawn in code.** There are no product photos. Each carpet is generated knot by knot on a `<canvas>`, with a palette for its weaving city (Kashan, Tabriz, Isfahan, Nain, Qom, Heriz, Kerman, Bijar) and subtle *abrash*, the colour banding of hand-dyed wool. Heriz and Bijar get angular, geometric medallions; the others are curvilinear.
- **Knot loupe.** Move over any carpet to magnify the individual knots, with the row, knot and density under the lens.
- **How to read a Persian carpet.** Pick a part (*toranj* ترنج, *lachak* لچک, *matn* متن, *hashieh* حاشیه, *risheh* ریشه) and it lights up on the carpet, in Persian and English. On phones the section switches to scrolling tabs, one description card and swipe navigation, so the carpet and its explanation fit on one screen.
- **Raj calculator.** Turns knot density in *raj* (knots per 7 cm) into knots per square inch, total knots and months on the loom, with a live one-inch swatch.
- **Shop features.** City and size filters, product detail view, a bag that remembers its contents (`localStorage`), and a private-viewing booking form with validation.
- **Light and dark themes** that follow the visitor's system setting, a responsive layout from 390 px phones to wide desktops, keyboard focus states and `prefers-reduced-motion` support.

## Built with

Plain HTML, CSS and JavaScript. No frameworks, no build step and no images.

| Typeface | Role |
| --- | --- |
| [Italiana](https://fonts.google.com/specimen/Italiana) | Display headings and prices |
| [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) | Body text, labels and specs |
| [Noto Nastaliq Urdu](https://fonts.google.com/noto/specimen/Noto+Nastaliq+Urdu) | Persian logo and large calligraphic words |
| [Vazirmatn](https://fonts.google.com/specimen/Vazirmatn) | Small Persian terms and city names |

## Project structure

```
golnar/
├── index.html        markup only, no inline CSS or JS
├── css/
│   └── style.css     design tokens (light + dark), then one numbered section per part of the page
└── js/
    ├── theme.js      runs in <head> before first paint; ?theme=light|dark fixes the theme
    ├── data.js       palettes, weaving cities, the collection and carpet-guide entries
    ├── utils.js      price formatting, knot-density maths and safe localStorage
    ├── carpet.js     the carpet generator and the knot loupe
    └── main.js       page behaviour, one init function per section
```

Scripts load with `defer` in dependency order (`data.js` → `utils.js` → `carpet.js` → `main.js`), so the site works when opened straight from the file system as well as from a server.

## Run it locally

Clone the repo and open `index.html` in a browser. That's all; there is nothing to install.

```bash
git clone https://github.com/tina-asadi/golnar.git
cd golnar
open index.html   # or double-click it
```

Code is formatted with [Prettier](https://prettier.io) using the settings in `.prettierrc`.

## How the carpets are drawn

`carpet.js` lays out a grid of knots, one cell per knot. For each knot it measures the distance to the nearest edge to decide whether it belongs to a guard stripe, the main border (rosettes joined by a vine), the field, the corner spandrels or the medallion. The medallion's outline is a polar curve with lobes, or a stepped diamond for geometric cities. Each knot also records its *region*, which is what lets the carpet guide highlight one part at a time. Painting adds a little per-knot variation and horizontal abrash, then a tiny shaded tile over every knot so the pile reads as wool.

## About

Designed and built by [Tina Asadi](https://github.com/tina-asadi) as a portfolio project. Golnar is a concept store: the carpets, prices and showroom are fictional, and the checkout and booking form don't send anything.
