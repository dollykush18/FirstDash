import images from '../assets/images';

/* Section 6 - Featured Case Study.
   Keep this honest: no invented clients, no invented numbers. */
export const caseStudy = {
  label: 'Featured Case Study',
  title: 'Restaurant Website Concept',
  type: 'Concept Project',
  description:
    'A modern restaurant website designed to make it easy for customers to discover the menu, explore the gallery and find contact information.',
  image: images.restaurantHero,
  columns: [
    {
      title: 'The Challenge',
      text: 'Create a modern online presence for a local restaurant.',
    },
    {
      title: 'Design Approach',
      text: 'Use strong food imagery, simple navigation and an easy-to-use mobile experience.',
    },
  ],
  features: [
    'Menu',
    'Gallery',
    'Location',
    'Opening Hours',
    'Contact',
    'Mobile Responsive',
  ],
  ctaLabel: 'Start a Project',
  ctaHref: '#contact',
};

export default caseStudy;
