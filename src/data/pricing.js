/* ==========================================================================
   PRICING
   --------------------------------------------------------------------------
   Change prices, package names and features here only.
   The Pricing section renders entirely from this file.

   price      -> the big number shown on the card (any string, e.g. '₹8,999')
   priceNote  -> small grey line under the price
   popular    -> true puts the "POPULAR" badge on the card and highlights it
   buttonVariant -> card button styling: primary | dark | outline
   ========================================================================== */

export const pricingNote =
  'Final pricing depends on the number of pages, features and content required. Domain and hosting are charged separately at actual cost.';

export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'For simple business websites',
    price: '₹8,999',
    priceNote: 'One-time · starting from',
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
    price: '₹14,999',
    priceNote: 'One-time · starting from',
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
    price: "Let's Discuss",
    priceNote: 'Quoted after a short chat',
    icon: 'Gem',
    features: ['Custom Features', 'Optional Integrations', 'Ongoing Support'],
    buttonText: 'Get a Custom Quote',
    buttonVariant: 'outline',
    popular: false,
  },
];

export default pricingPlans;
