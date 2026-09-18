import images from '../assets/images';

/* ==========================================================================
   PORTFOLIO / SELECTED WORK
   --------------------------------------------------------------------------
   TO ADD A PROJECT: copy one block, change the values, done.

   type        -> keep as 'Concept Project' until a real client signs off.
                  Once a project is live, change it to 'Client Project'.
   image       -> a photo, or a real screenshot from /public/images/
   accent      -> tailwind-free hex used for the mini site preview tint
   preview     -> controls the little fake website drawn on the card
   link        -> '#contact' keeps the card a lead magnet. Swap for a live URL.
   demoCategory-> matches a `category` in src/data/demos.js. When set, the card
                  shows a button per demo template instead of a single link.
   ========================================================================== */

export const projects = [
  {
    id: 'restaurant',
    demoCategory: 'Restaurant',
    title: 'Restaurant Website',
    category: 'Restaurant',
    type: 'Concept Project',
    description:
      'A modern restaurant website with menu, gallery and location details.',
    image: images.restaurantHero,
    technologies: ['React', 'Tailwind', 'JS'],
    accent: '#f97316',
    preview: { label: 'Bistro', headline: 'Good Food, Good Mood', nav: ['Menu', 'Gallery', 'Contact'] },
    link: '#contact',
  },
  {
    id: 'cafe',
    demoCategory: 'Café',
    title: 'Café Website',
    category: 'Café',
    type: 'Concept Project',
    description: 'Cosy and clean design with menu, story and gallery.',
    image: images.cafe,
    technologies: ['React', 'Tailwind', 'JS'],
    accent: '#b45309',
    preview: { label: 'Brew Co.', headline: 'Freshly Roasted Daily', nav: ['Menu', 'Story', 'Visit'] },
    link: '#contact',
  },
  {
    id: 'boutique',
    title: 'Boutique Website',
    category: 'Clothing & Boutique',
    type: 'Concept Project',
    description: 'Stylish shop page with product catalogue and contact.',
    image: images.boutique,
    technologies: ['React', 'Tailwind', 'JS'],
    accent: '#db2777',
    preview: { label: 'Atelier', headline: 'New Season Arrivals', nav: ['Shop', 'Lookbook', 'Visit'] },
    link: '#contact',
  },
  {
    id: 'salon',
    demoCategory: 'Salon & Beauty',
    title: 'Salon Website',
    category: 'Salon & Beauty',
    type: 'Concept Project',
    description: 'Services, pricing and appointment enquiry in one place.',
    image: images.salon,
    technologies: ['React', 'Tailwind', 'JS'],
    accent: '#7c3aed',
    preview: { label: 'Glow', headline: 'Look Good, Feel Great', nav: ['Services', 'Prices', 'Book'] },
    link: '#contact',
  },
  {
    id: 'shop',
    title: 'Local Shop Website',
    category: 'Local Retail',
    type: 'Concept Project',
    description: 'Product catalogue and store information made simple.',
    image: images.shop,
    technologies: ['React', 'Tailwind', 'JS'],
    accent: '#0d9488',
    preview: { label: 'Corner Store', headline: 'Everything You Need', nav: ['Products', 'Offers', 'Find Us'] },
    link: '#contact',
  },
  {
    id: 'clinic',
    demoCategory: 'Healthcare',
    title: 'Clinic Website',
    category: 'Healthcare',
    type: 'Concept Project',
    description: 'Doctor information, services and appointment details.',
    image: images.clinic,
    technologies: ['React', 'Tailwind', 'JS'],
    accent: '#0284c7',
    preview: { label: 'CarePoint', headline: 'Care You Can Trust', nav: ['Services', 'Doctors', 'Timings'] },
    link: '#contact',
  },
];

export default projects;
