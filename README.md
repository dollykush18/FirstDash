# WebsiteWallha

> Websites for local businesses.

A production-ready marketing website for **WebsiteWallha**, a boutique web-design
studio for restaurants, cafés, shops, salons, clinics and other local businesses.

Built with **React + Vite + JavaScript + Tailwind CSS + Framer Motion + Lucide React**.

---

## 1. Folder structure

```
websitewallha/
├── index.html                  Page title, meta description, Open Graph, favicon
├── package.json
├── tailwind.config.js          Brand colours, fonts, shadows, gradients
├── vite.config.js
├── postcss.config.js
├── public/
│   ├── favicon.svg             Browser tab icon
│   ├── og-image.svg            Social share preview image
│   ├── robots.txt
│   └── images/                 ← put your own photos here
└── src/
    ├── main.jsx                React entry point
    ├── App.jsx                 Section order only — no markup
    ├── index.css               Tailwind layers + typography + focus styles
    │
    ├── config/
    │   └── siteConfig.js       ★ YOUR CONTACT DETAILS — edit this first
    │
    ├── data/                   All website text lives here
    │   ├── navigation.js       Navbar + footer links
    │   ├── heroFeatures.js     Hero tick list
    │   ├── benefits.js         "Why you need a website" cards
    │   ├── services.js         The six service cards
    │   ├── projects.js         ★ Portfolio projects
    │   ├── caseStudy.js        Featured case study
    │   ├── process.js          The four process steps
    │   ├── whyUs.js            "Why choose us" cards + tech pills
    │   ├── pricing.js          ★ Packages and prices
    │   ├── testimonials.js     Client quotes (placeholders until real ones exist)
    │   ├── faq.js              FAQ questions and answers
    │   └── businessTypes.js    Contact form dropdown options
    │
    ├── assets/
    │   └── images.js           ★ Every image URL in one place
    │
    ├── utils/
    │   └── submitEnquiry.js    Contact form submission handler
    │
    ├── components/             Reusable building blocks
    │   ├── Navbar.jsx          Sticky nav + animated mobile menu
    │   ├── Footer.jsx
    │   ├── Logo.jsx            The "W" browser-window logo mark
    │   ├── Button.jsx          Every button style in the site
    │   ├── Section.jsx         Light/dark section shell
    │   ├── SectionHeading.jsx  Eyebrow + heading + description
    │   ├── Reveal.jsx          Scroll-reveal animation wrapper
    │   ├── Icon.jsx            Icon registry (keeps the bundle small)
    │   ├── ProjectCard.jsx
    │   ├── PricingCard.jsx
    │   ├── TestimonialCard.jsx
    │   ├── FaqItem.jsx         Accordion item
    │   ├── ContactForm.jsx     Form + validation
    │   ├── WhatsAppFab.jsx     Floating WhatsApp button
    │   └── mockups/
    │       ├── RestaurantSite.jsx   The fictional restaurant website
    │       ├── DeviceMockup.jsx     Laptop + phone stack
    │       └── MiniSite.jsx         Mini website preview on portfolio cards
    │
    └── sections/               One file per page section, in page order
        ├── Hero.jsx
        ├── WhyWebsite.jsx
        ├── Services.jsx
        ├── Work.jsx
        ├── CaseStudy.jsx
        ├── Process.jsx
        ├── About.jsx
        ├── WhyUs.jsx
        ├── Pricing.jsx
        ├── TestimonialsFaq.jsx
        ├── Contact.jsx         Final CTA + contact form
        └── Social.jsx
```

---

## 2. How to install

```bash
npm install
```

## 3. How to run

```bash
npm run dev       # development server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # preview the production build locally
```

---

## 4. Where to change WebsiteWallha information

**`src/config/siteConfig.js`** — this is the only file you need for contact details.
Everything on the site (buttons, footer, floating WhatsApp button, form) reads from it.

```js
const siteConfig = {
  brandName: 'WebsiteWallha',
  tagline: 'Websites for local businesses.',
  email: 'hello@websitewallha.com',
  whatsappNumber: '919999999999',
  instagram: 'https://instagram.com/websitewallha',
  youtube: 'https://youtube.com/@websitewallha',
  copyrightYear: 2026,
  ...
};
```

## 5. Where to add WhatsApp

`src/config/siteConfig.js` → `whatsappNumber`

Country code first, **digits only**, no `+` and no spaces. For India, start with `91`:

```js
whatsappNumber: '919876543210',   // for +91 98765 43210
```

You can also edit `whatsappMessage` — the text that is pre-filled in WhatsApp when
someone taps the button.

This one value powers the "WhatsApp Us" button, the floating green button and the
footer WhatsApp icon.

## 6. Where to add Instagram

`src/config/siteConfig.js` → `instagram`

## 7. Where to add YouTube

`src/config/siteConfig.js` → `youtube`

## 8. Where to add email

`src/config/siteConfig.js` → `email`

## 9. Where to change pricing

**`src/data/pricing.js`** — no prices are hard-coded in any component.

```js
{
  id: 'starter',
  name: 'Starter',
  description: 'For simple business websites',
  price: '₹8,999',
  priceNote: 'One-time · starting from',
  icon: 'Sparkle',
  features: ['1 Page Website', 'Mobile Responsive', ...],
  buttonText: 'Get Started',
  buttonVariant: 'dark',      // 'primary' | 'dark' | 'outline'
  popular: false,             // true shows the POPULAR badge
}
```

Add a fourth package by copying a block. The section renders whatever is in the array.
The small print under the cards is the `pricingNote` export in the same file.

## 10. Where to add portfolio projects

**`src/data/projects.js`** — copy a block and change the values:

```js
{
  id: 'bakery',
  title: 'Bakery Website',
  category: 'Bakery',
  type: 'Concept Project',        // change to 'Client Project' once it is live
  description: 'A warm bakery website with product gallery.',
  image: images.cafe,             // or '/images/bakery.jpg'
  technologies: ['React', 'Tailwind', 'JS'],
  accent: '#d97706',              // tints the mini website preview
  preview: {                      // the little fake site drawn on the card
    label: 'Sweet Crumb',
    headline: 'Baked Fresh Daily',
    nav: ['Menu', 'Cakes', 'Visit'],
  },
  link: '#contact',               // or a live URL
}
```

**Credibility note:** every project ships labelled `Concept Project`, and the section
says so in plain text. Change a project's `type` to `Client Project` only once a real
client's site is live. No fake clients, logos, results or testimonials are used anywhere.

## 11. Where to replace images

**`src/assets/images.js`** — every photo on the site is listed once in this file.

The defaults point at free Unsplash photography so the site looks complete right away.
To use your own:

1. Put the file in `public/images/` (e.g. `public/images/hero-food.jpg`)
2. Change the value in `src/assets/images.js`:

```js
restaurantHero: '/images/hero-food.jpg',
```

Nothing else needs to change. **Before going live, replace these with your own photos
or real project screenshots** — hotlinked stock images are fine for a draft but slower
and less distinctive than your own work.

## 12. Where to edit website text

All copy lives in `src/data/`. Each file maps to one section:

| Want to change…                 | Edit                        |
| ------------------------------- | --------------------------- |
| Nav / footer links              | `src/data/navigation.js`    |
| Hero tick list                  | `src/data/heroFeatures.js`  |
| "Why you need a website" cards  | `src/data/benefits.js`      |
| Service cards                   | `src/data/services.js`      |
| Portfolio                       | `src/data/projects.js`      |
| Case study                      | `src/data/caseStudy.js`     |
| Process steps                   | `src/data/process.js`       |
| "Why choose us" + tech pills    | `src/data/whyUs.js`         |
| Pricing                         | `src/data/pricing.js`       |
| Testimonials                    | `src/data/testimonials.js`  |
| FAQ                             | `src/data/faq.js`           |
| Contact form dropdowns          | `src/data/businessTypes.js` |

Headings and paragraphs that sit directly in a section (like the hero headline) are in
the matching file under `src/sections/`.

### Adding real testimonials

In `src/data/testimonials.js`:

```js
export const hasRealTestimonials = true;   // was false

export const testimonials = [
  {
    quote: 'The website made it much easier for customers to find our menu.',
    name: 'Client Name',
    business: 'Business Name, City',
  },
];
```

The section switches from honest placeholders to real quotes automatically.

---

## 13. How to connect the contact form

The form works out of the box in **demo mode**: it validates, shows a success message
and logs the enquiry to the browser console. Nothing is sent anywhere yet.

To receive enquiries for real, pick one option.

### Option A — Formspree (easiest, no backend)

1. Create a free form at [formspree.io](https://formspree.io) and copy your endpoint.
2. In `src/config/siteConfig.js`:

```js
formProvider: 'formspree',
formspreeEndpoint: 'https://formspree.io/f/abcdwxyz',
```

Enquiries arrive in your email. Done.

### Option B — EmailJS

Install it, then put your send call inside the `'custom'` branch of
`src/utils/submitEnquiry.js`:

```js
import emailjs from '@emailjs/browser';
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', data, 'PUBLIC_KEY');
```

and set `formProvider: 'custom'` in `siteConfig.js`.

### Option C — Your own API

Set `formProvider: 'custom'` and uncomment the `fetch()` in
`src/utils/submitEnquiry.js`, pointing it at your endpoint.

The handler always resolves to `{ ok, message }`, so the form never breaks the page
if the network fails — it tells the visitor to message on WhatsApp instead.

---

## 14. How to deploy the website

Build output goes to `dist/`. Any static host works.

### Netlify

1. Push this folder to GitHub.
2. Netlify → **Add new site → Import an existing project**.
3. Build command `npm run build`, publish directory `dist`.

### Vercel

1. Push to GitHub.
2. Vercel → **New Project** → import the repo. The Vite preset is detected automatically.

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`: `"homepage": "https://USERNAME.github.io/REPO"`, set
`base: '/REPO/'` in `vite.config.js`, then deploy `dist/`.

### Manual / cPanel hosting

```bash
npm run build
```

Upload everything inside `dist/` to your `public_html` folder.

### After deploying

In `index.html`, replace `https://websitewallha.com/` with your real domain in the
`canonical`, `og:url` and `robots.txt` sitemap lines.

---

## Design and quality notes

- **Responsive** — verified with no horizontal scrolling at 360, 390, 768, 1440 and
  1920px wide.
- **Accessible** — one `<h1>`, ordered headings, visible focus rings, labelled form
  fields with `aria-invalid` / `aria-describedby` error links, a skip link, an
  accessible mobile menu (`aria-expanded`, Escape to close, scroll lock), `alt` text on
  every image and decorative mockups hidden from screen readers.
- **Performance** — icons are imported through a registry in `src/components/Icon.jsx`
  rather than the whole Lucide library, keeping the bundle at ~104 kB gzipped. Images
  are lazy-loaded and animations respect `prefers-reduced-motion`.
- **SEO** — title, meta description, Open Graph and Twitter cards, canonical URL,
  `ProfessionalService` structured data, semantic sections and a favicon.
