/* ==========================================================================
   DEMO WEBSITE TEMPLATES
   --------------------------------------------------------------------------
   Two ready-to-view template designs each for Restaurant, Café, Salon,
   Clinic, Coaching and Boutique, so a client can open both and tell you
   which direction they prefer.

   Each demo opens in a new tab as a real, shareable page:
       /demo.html?t=<slug>

   TO ADD A TEMPLATE
   1. Build the component in  src/demo/templates/
   2. Register it in          src/demo/DemoApp.jsx
   3. Add an entry below
   4. Reference its `slug` from the matching project in src/data/projects.js

   `style` is the short label shown on the portfolio card button, so keep it
   to one or two words that help a client choose.
   ========================================================================== */

/** Builds the demo URL. Uses Vite's BASE_URL so it keeps working if the site
 *  is ever deployed under a sub-path (e.g. GitHub Pages). */
export const demoUrl = (slug) => `${import.meta.env.BASE_URL}demo.html?t=${slug}`;

/** The demo picker listing all templates. */
export const demoIndexUrl = () => `${import.meta.env.BASE_URL}demo.html`;

export const demos = [
  /* ------------------------------- Restaurant ------------------------------ */
  {
    slug: 'restaurant-elegant',
    category: 'Restaurant',
    businessName: 'Saffron House',
    style: 'Elegant',
    tagline: 'Fine dining, dark and refined',
    description:
      'A warm, upmarket layout for restaurants that want to feel special — full-bleed food photography, a classic serif menu and table reservations front and centre.',
    accent: '#c08a3e',
  },
  {
    slug: 'restaurant-modern',
    category: 'Restaurant',
    businessName: 'Copper & Flame',
    style: 'Modern',
    tagline: 'Bright, casual and energetic',
    description:
      'A light, punchy layout for cafés-turned-kitchens, family restaurants and takeaway spots — bold type, a visual menu grid and a strong order-now call to action.',
    accent: '#ea580c',
  },

  /* ---------------------------------- Café --------------------------------- */
  {
    slug: 'cafe-artisan',
    category: 'Café',
    businessName: 'Brew & Bloom',
    style: 'Artisan',
    tagline: 'Cosy, warm and story-led',
    description:
      'A homely layout built around your story and your beans — soft earth tones, a roast guide and a gallery that makes people want to sit down.',
    accent: '#a16207',
  },
  {
    slug: 'cafe-minimal',
    category: 'Café',
    businessName: 'Daylight Coffee',
    style: 'Minimal',
    tagline: 'Clean, airy and modern',
    description:
      'A calm, spacious layout with lots of white space and big type — perfect for speciality coffee bars and modern brunch spots.',
    accent: '#0f766e',
  },

  /* --------------------------------- Salon --------------------------------- */
  {
    slug: 'salon-luxe',
    category: 'Salon & Beauty',
    businessName: 'Maison Lux',
    style: 'Luxe',
    tagline: 'Dark, premium and polished',
    description:
      'A high-end layout with deep tones and gold accents — a price list that reads like a menu, stylist profiles and easy appointment requests.',
    accent: '#b99155',
  },
  {
    slug: 'salon-fresh',
    category: 'Salon & Beauty',
    businessName: 'Bloom Beauty Bar',
    style: 'Fresh',
    tagline: 'Soft, welcoming and friendly',
    description:
      'A light, approachable layout in soft pastels — clear service packages, before-and-after gallery and a simple booking flow.',
    accent: '#db2777',
  },

  /* --------------------------------- Clinic -------------------------------- */
  {
    slug: 'clinic-trusted',
    category: 'Healthcare',
    businessName: 'CarePoint Clinic',
    style: 'Trusted',
    tagline: 'Clear, reassuring and practical',
    description:
      'A calm, information-first layout for family and multi-speciality clinics — departments, doctor profiles, OPD timings and an appointment form patients can actually use.',
    accent: '#0284c7',
  },
  {
    slug: 'clinic-modern',
    category: 'Healthcare',
    businessName: 'Aria Dental & Skin',
    style: 'Modern',
    tagline: 'Soft, premium and specialist',
    description:
      'A warm, spa-like layout for dental, skin and aesthetic clinics — published treatment pricing, specialist profiles and a consultation booking flow that feels unhurried.',
    accent: '#2f6b5e',
  },

  /* -------------------------------- Coaching ------------------------------- */
  {
    slug: 'coaching-results',
    category: 'Coaching & Education',
    businessName: 'Pathshala Classes',
    style: 'Results',
    tagline: 'Serious, proof-led and exam focused',
    description:
      'A results-first layout for JEE, NEET and board coaching — batch details, faculty credentials, a transparent fee table and a free demo class booking.',
    accent: '#1e40af',
  },
  {
    slug: 'coaching-friendly',
    category: 'Coaching & Education',
    businessName: 'NextStep Academy',
    style: 'Friendly',
    tagline: 'Warm, parent-facing and approachable',
    description:
      'A welcoming layout for school tuition, spoken English and computer classes — small-batch promises, subject cards and an enquiry form parents will actually fill.',
    accent: '#047857',
  },

  /* -------------------------------- Boutique ------------------------------- */
  {
    slug: 'boutique-traditional',
    category: 'Clothing & Boutique',
    businessName: 'Zari Boutique',
    style: 'Traditional',
    tagline: 'Rich, festive and bridal-ready',
    description:
      'A deep, jewel-toned layout for bridal and festive wear — lehenga and saree collections, custom stitching, measurement appointments and a boutique lookbook.',
    accent: '#9d174d',
  },
  {
    slug: 'boutique-modern',
    category: 'Clothing & Boutique',
    businessName: 'Kora Studio',
    style: 'Contemporary',
    tagline: 'Calm, minimal and everyday',
    description:
      'A quiet, editorial layout for everyday ethnic and fusion labels — a clean collection grid, honest fabric notes, made-to-measure service and studio visits.',
    accent: '#b45309',
  },
];

/** Look one up by slug. */
export const getDemo = (slug) => demos.find((d) => d.slug === slug);

/** All demos belonging to one portfolio project. */
export const demosForCategory = (category) =>
  demos.filter((d) => d.category === category);

export default demos;
