/* ==========================================================================
   PRICING
   --------------------------------------------------------------------------
   Change prices, package names and features here only.
   The Pricing section renders entirely from this file.

   price       -> the big figure on the card; a single price or a range
   priceNote   -> small grey line under the price
   maintenance -> recurring upkeep cost, shown as a chip under the price
   popular     -> true puts the "POPULAR" badge on the card and highlights it
   buttonVariant -> card button styling: primary | dark | outline
   ========================================================================== */

export const pricingNote =
  'Final pricing depends on the number of pages, features and content required. Domain and hosting are charged separately at actual cost.';

export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'For simple business websites',
    price: '₹4,999',
    priceNote: 'One-time · starting from',
    maintenance: '₹499 / month',
    icon: 'Sparkle',
    features: [
      '1 Page Website',
      'Mobile Responsive',
      'Basic SEO Setup',
      'Contact Section',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'dark',
    popular: false,
  },
  {
    id: 'business',
    name: 'Business',
    description: 'For complete online presence',
    price: '₹7,999 – ₹11,999',
    priceNote: 'One-time · depending on scope',
    maintenance: '₹1,499 – ₹1,999 / month',
    icon: 'Rocket',
    features: [
      'Up to 5 Pages',
      'Gallery / Menu / Catalogue',
      'Contact Form',
      'WhatsApp Integration',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'primary',
    popular: true,
  },
  {
    id: 'custom',
    name: 'Custom',
    description: 'For specific requirements',
    price: '₹14,999 onwards',
    priceNote: 'Quoted after a short chat',
    maintenance: '₹1,999 – ₹2,499 / month',
    icon: 'Gem',
    features: ['Custom Features', 'Optional Integrations', 'Ongoing Support'],
    buttonText: 'Get a Custom Quote',
    buttonVariant: 'outline',
    popular: false,
  },
];

export default pricingPlans;
